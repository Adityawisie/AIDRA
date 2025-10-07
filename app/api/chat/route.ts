import { NextRequest, NextResponse } from "next/server"
import { model } from "@/lib/gemini"
import { supabase } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    // Check if the message is about policies
    const isPolicyQuery = /policy|policies|government|circular|regulation/i.test(message)

    // Check if the message is about education
    const isEducationQuery = /education|school|college|university|scholarship|student|literacy|enrollment/i.test(message)

    let context = ""
    let summary = ""

    if (isPolicyQuery) {
      // Fetch relevant data from Supabase
      const { data: policies, error } = await supabase
        .from("policies") // Assuming a 'policies' table
        .select("*")
        .limit(5) // Limit for context

      if (!error && policies) {
        context = `Relevant policy data:\n${policies.map(p => `${p.title}: ${p.content}`).join('\n')}\n\n`
      }
    } else if (isEducationQuery) {
      // Fallback mapping for testing
      function fallbackQuery(userMessage: string) {
        const msg = userMessage.toLowerCase()
        if (msg.includes("gujarat") && msg.includes("college")) {
          return {
            table: "district_schools_colleges",
            filters: { state: "Gujarat" },
            summary: "Gujarat has several colleges across districts."
          }
        } else if (msg.includes("nmms") && msg.includes("2022")) {
          return {
            table: "nmms_scholarships",
            filters: { year: "2022" },
            summary: "In 2022, 45,000 NMMS scholarships were awarded."
          }
        } else if (msg.includes("mumbai") && msg.includes("college")) {
          return {
            table: "district_schools_colleges",
            filters: { district: "Mumbai" },
            summary: "Mumbai has a number of colleges."
          }
        } else if (msg.includes("post-matric") && msg.includes("st")) {
          return {
            table: "post_matric_st",
            filters: {},
            summary: "Post-Matric ST Scholarship details are available."
          }
        } else if (msg.includes("ugc") || msg.includes("universities")) {
          return {
            table: "ugc_universities",
            filters: {},
            summary: "UGC recognized universities and colleges info."
          }
        } else if (msg.includes("maharashtra") || msg.includes("goa")) {
          return {
            table: "maha_goa_schemes",
            filters: {},
            summary: "Funds and benefits data for Maharashtra and Goa."
          }
        } else if (msg.includes("scholarship") || msg.includes("fellowship")) {
          return {
            table: "scholarship_schemes",
            filters: {},
            summary: "All scholarship/fellowship schemes from 2014-18."
          }
        }
        return null
      }

      // Try Gemini first
      let queryJson = null
      try {
        const parsePrompt = `
You are an expert education data assistant.
You have access to the following tables in the database:

1. district_schools_colleges: Columns → state, district, num_schools, num_colleges
2. ugc_universities: Columns → year, state, university_name, section_2f, section_12b
3. nmms_scholarships: Columns → year, num_scholarships, beneficiaries
4. maha_goa_schemes: Columns → year, state, scheme_name, fund_released, num_students
5. post_matric_st: Columns → year, state, scheme_name, fund_released, num_students
6. scholarship_schemes: Columns → year, scheme_name, description

Instructions:
1. Read the user's question.
2. Decide which table is relevant.
3. Identify any filters (state, year, scheme_name, etc.).
4. Return a JSON ONLY in this format:
{
  "table": "table_name",
  "filters": {
    "column1": "value1",
    "column2": "value2"
  },
  "summary": "Optional: short human-readable summary for user"
}

If no filters, use empty object for filters.
If no summary needed, omit summary or set to "".

User message: "${message}"
`
        const parseResult = await model.generateContent(parsePrompt)
        const parseText = parseResult.response.text()
        queryJson = JSON.parse(parseText)
      } catch (e) {
        console.error("Gemini failed, using fallback:", e)
        queryJson = fallbackQuery(message)
      }

      // If still no query, default
      if (!queryJson) {
        context = "Sorry, I could not understand your education query.\n\n"
      } else {
        // Query Supabase
        let dbQuery = supabase.from(queryJson.table).select("*")
        if (queryJson.filters && Object.keys(queryJson.filters).length > 0) {
          dbQuery = dbQuery.match(queryJson.filters)
        }
        dbQuery = dbQuery.limit(10)

        const { data: educationData, error } = await dbQuery

        if (!error && educationData && educationData.length > 0) {
          context = `Relevant education data:\n${JSON.stringify(educationData, null, 2)}\n\n`
          if (queryJson.summary) {
            summary = queryJson.summary
          }
        } else {
          context = "No relevant education data found.\n\n"
        }
      }
    }

    // Generate response with Gemini or fallback
    let response = ""
    try {
      let prompt = `${context}User query: ${message}\n\nRespond as an AI assistant for government information. Be helpful and accurate.`
      if (summary) {
        prompt += `\n\nProvide a summary based on: ${summary}`
      }
      console.log("Final prompt:", prompt)
      const result = await model.generateContent(prompt)
      response = result.response.text()
      console.log("Gemini response:", response)
    } catch (e) {
      console.error("Final Gemini failed, using fallback response:", e)
      if (summary) {
        response = summary
      } else if (context.includes("education data")) {
        response = "Here is the relevant education data: " + context.replace("Relevant education data:\n", "").replace("\n\n", "")
      } else {
        response = "I have the information, but couldn't format it nicely. Please check the data."
      }
    }

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    )
  }
}
