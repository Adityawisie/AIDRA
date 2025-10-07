# TODO: Connect Education Datasets to Chatbot

## Completed
- [x] Created fetch_datasets.js script to fetch all 6 education datasets from Data.gov.in and store in separate Supabase tables
- [x] Modified app/api/chat/route.ts to handle education queries using Gemini for intelligent table selection, filtering, and response generation

## Pending
- [ ] Create the table "education_data" in your Supabase database (you can do this manually in the Supabase dashboard or let the script create it on first insert)
- [ ] Add environment variables to .env.local: SUPABASE_URL, SUPABASE_KEY (service role), DATAGOV_API_KEY, GOOGLE_API_KEY
- [ ] Run the fetch script: node fetch_datasets.js
- [ ] Verify the "education_data" table is populated with data from all 6 dataset types
- [ ] Test the chatbot at /chatbot with various education questions (e.g., "How many schools in Gujarat?", "Show NMMS scholarships for 2022", "Universities in Karnataka under UGC")
- [ ] If needed, adjust the regex for detecting education queries or the Gemini prompt

## Notes
- The resource ID is hardcoded in fetch_datasets.js
- Data is stored in a single "education_data" table with a "dataset_type" column to distinguish between the 6 datasets
- Gemini automatically selects the correct dataset_type and applies additional filters based on user queries
- For Supabase service role key, get it from Supabase dashboard > Settings > API
- The chatbot now supports both policy and education queries seamlessly
