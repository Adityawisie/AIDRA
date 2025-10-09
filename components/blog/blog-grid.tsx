import { Card } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export const blogPosts = [
  {
    id: "ai-policy-research",
    title: "How artificial intelligence is accelerating the digital government journey",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the way government officials access and analyze policy information.",
    content: `Public policy evaluation provides crucial evidence to help policymakers understand what works, for whom and under what circumstances (OECD, 2025[107]; 2020[108]). AI can play a significant role in supporting policy evaluation. The exponential rise in globally generated data coupled with the rapid development of new technologies lowering storage and computational costs, is driving innovation in techniques that can instantly capture, analyse and visualise these vast data repositories, enriching evaluations (Petersson et al., 2017[109]) (Rinaldi, Giuffrida and Negrete, 2017[110]). This can have important consequences on what and how evaluators evaluate.

AI has the potential to accelerate and automatise essential tasks, such as data collection and analysis, and support evaluators in different managerial tasks, by accessing a broad set of internal and external data, or synthesising results. AI can also support ex ante evaluations by building predictive systems and simulations that help policymakers anticipate potential impacts before implementation (Bénassy-Quéré, 2022[111]). However, its use within government for policy evaluation has been limited and has progressed slower than in other functions discussed in this chapter.

Current state of play
Supporting evaluation design and implementation
AI can help policy evaluators to process a large amount of content that can be useful to design and implement evaluations, whether ex ante or ex post. This ranges from more sophisticated and structured approaches, such as supporting synthesis of existing evidence, to more basic functions, such as providing plain summaries of previous evaluations.

Evidence synthesis is particularly useful to inform the development of ex ante or ex post evaluation. These methods typically involve combining results from different studies that investigate the same topic to have a comprehensive understanding of the subject. In the field of evidence synthesis, text mining and other types of AI tools have been applied to literature searching, screening full text, data extraction and analysis for more than 10 years. Researchers in the field have mapped a variety of tools that can support the different stages of evidence synthesis, particularly for systematic reviews and make them more effective. Examples of tools include Rayyan, for screening titles and abstracts, and Robot Reviewer, for assessment of certain risks (Khalil, Ameen and Zarnegar, 2022[112]). Guidance and recommendations were developed to ensure the responsible use of AI in Evidence Synthesis (RAISE), showing the growing interest of applying these tools in the field (Thomas et al., 2024[113]). The benefits of using AI for evidence synthesis rely on the ability to access a vast amount of literature and to process the information faster than alternative approaches. Indeed, the average time to conduct an evidence synthesis is 15 months, but the use of AI can radically reduce some of the steps (Blaizot et al., 2022[114]). For example, a risk of skewed data assessment of 30 randomised control trial (RCT) articles can be accurately conducted using an LLM in an average of 53 seconds. That would have taken orders of magnitude more time for human; a recent study provided an estimate of around 28 minutes for each study in the systematic review using a tool for randomised trials (RoB 2), which is now considered the gold standard (Minozzi et al., 2020[115]; Lai et al., 2024[116]; Odell, 2024[117]). Similarly, World Bank evaluators, using text mining and AI, have been able to double the size of the evidence base they use to make certain programme decisions. That likely would have been impossible using traditional portfolio identification approaches, laying the groundwork for the relevance and effectiveness assessments in the portfolio analysis they conducted (Bohni Nielsen, Mazzeo Rinaldi and Petersson, 2024[118]).

Supporting analytics
AI can support processing large quantities of data and long texts, such as documentation reports and interviews, to identify patterns, which can be particularly useful for evaluations. By using NLP-enabled text mining, AI can help evaluators comprehend conclusions and provide fine-grained assessments that would otherwise be time-demanding (Næss et al., 2025[119]).

Quantitative text analysis applications for programme evaluation are promising, with AI enabling faster analysis of a large number of documents compared to classical text analysis tools (Gatto and Bundi, 2025[120]). For instance, analysing responses to open-ended questions required to reconstruct a programme theory could involve different time-consuming methods, such as identifying statements that have a specific form and reformulating such statements into conditional "if–then" propositions (Leeuw, 2003[121]), which can be facilitated by novel techniques, such as topic models (Gatto and Bundi, 2025[120]). While conventional text analysis can contribute to evaluation in several empirical and conceptual ways — such as by measuring stakeholder preferences or identifying underlying programme theories — AI-enabled quantitative text analysis can create even more opportunities. For example, the World Bank used unsupervised ML to analyse 392 project reports across 64 aid-receiving countries, successfully identifying novel and insightful factors influencing project success and failure (Franzen et al., 2022[122]). AI text analysis is particularly helpful in identifying underlying themes in existing policy programmes or reports by mapping key concepts embedded in relevant documentation, a technique known as a topic modelling (Cintron and Montrosse-Moorhead, 2021[123]). Some of these methods can be used to understand positions of different stakeholders providing interesting insights for policy evaluation. In some countries, relevant actors, such as SAIs, are adopting quantitative text analysis techniques to conduct performance audits that share several characteristics with policy evaluations. In Norway, for example, text mining and ML applications were used to perform a performance audit on police handling of cybercrime (Box 5.31). In the domain of environmental policy, the OECD partnered with leading research institutions to use AI to conduct the first comprehensive global evaluation of environmental policy measures, analysing over 1 500 policy interventions across four sectors from 1998 to 2022 in 41 countries across six continents (Box 5.32).

Beyond text analysis techniques, AI also has potential to enhance causal inference in policy evaluation, to support quasi experimental designs that rely on probabilistic models, helping to generate some of the missing data that are needed for sophisticated non-parametric methods and instrumental variables to simulate various impact scenarios. This can help move the frontiers of research and enable way more powerful evaluations without the need for costly randomised control trials approaches (Miller, 2020[124]).

Box 5.31. Norway uses text mining and ML in police audits
In 2018, Norway's Office of the Auditor General established an Innovation Lab aimed at integrating data science into auditing. The lab included data scientists with expertise in areas like performance evaluation/auditing, coding and ML, to support auditors by automating tasks, assisting with data acquisition (such as web scraping) and analysis (e.g. text mining), as well as by providing internal training in coding and analytical tools.

In 2021, the Office of the Auditor General of Norway conducted a performance audit of the Norwegian national police efforts at combatting cybercrime. The goal of the audit was to examine whether the Norwegian police has improved its ability to combat cybercrime. During the audit, the collaboration between data scientists and auditors was key in ensuring a skilful use of novel methods in such audits, providing contributions in their respective competences. While the auditors dealt with several tasks, such as research design, data collection and analysis, as well as writing, data scientists played a key role in applying advanced methods of text mining and ML to classify criminal cases. More specifically, during the audit, 1 000 coded cases were used to train a ML system that applied text mining techniques to extract the text from 334 544 cases across different types of crime (e.g. illicit gain/theft, traffic, violence, financial). The task of classifying criminal cases as cybercrime or non-cybercrime was crucial for assessing the police's understanding and handling of such crimes. The data previously held by the Norwegian police was unreliable and lacked insight into the extent of investigations and case resolutions.

Source: (Næss et al., 2025[119]), https://www.adb.org/sites/default/files/publication/928976/governance-brief-052-digital-transformation-tax-administration-rok.pdf.

Box 5.32. Evaluating the effectiveness of environmental policies with AI
Understanding which policies effectively reduce emissions is a pressing challenge for governments worldwide. In partnership with the Potsdam Institute for Climate Impact Research (PIK), the University of Oxford and the University of Victoria, the OECD has contributed to a study that uses AI to evaluate the effectiveness of such policies across 41 countries. This research, published in Science, takes stock of over 1 500 policy interventions spanning 1998 to 2022, offering unprecedented insights into what works in the fight against climate change.

At the heart of the study is the OECD's Climate Actions and Policies Measurement Framework (CAPMF). Using AI, the study identified 63 policies that have led to significant emission reductions. This AI-driven approach not only enhances the ability to detect successful policy measures, but also uncovers patterns and policy mixes that might otherwise go unnoticed. One key finding highlights that policy combinations — rather than stand-alone measures — are most effective in reducing emissions, reinforcing the importance of strategic policy design.

Source: https://www.oecd.org/en/blogs/2025/01/what-works-groundbreaking-evaluation-on-the-effectiveness-of-climate-policies.html.

Supporting management and communication
Evaluation managers can benefit from a variety of AI-based tools developed to facilitate support activities, such as administrative processes, drafting, translating and searching tools. When looking at planning and management, government evaluations are often outsourced to external evaluators, increasing their managerial complexity. The AI-based features of project management tools, such as monday.com or Asana, help evaluators optimise resources and timelines, for example, by recommending optimal staffing and scheduling based on prior evaluations, or ensuring resources are allocated where they are most needed. Both platforms use AI to provide automation and insights, such as workflow automation, predictive tasking or assistance through AI assistants. In addition, generative AI can also facilitate writing terms of reference or similar managerial tasks (Jacob, 2025[125]).

Tools using LLMs can help to improve the communication of evaluation results; they quickly summarise long reports into shorter products that can be shared with decision-makers or the public. The European Commission, for example, has developed an LLM-driven tool that can produce summaries and policy briefs from documents produced in different languages (Box 5.33).

Finally, AI tools can be useful to develop digital evaluation repositories and knowledge management tools. Several OECD countries have developed evaluation repositories, which ensure that all conducted evaluations are easy to find, or platforms to describe and align evaluation efforts across government. One example is Norway's Kudos platform. While the manual development of such repositories can be time consuming, LLMs can automate much of the work and allow for more precise searches across a large volume of reports. In France, the General inspectorate of Finance (IGF) is currently using LLMs to develop an internal retrieval augmented generation (RAG) (Box 5.34) tool called Fragments, which collects reports by the IGF and French Court of Audit since 2006 and allows for precise searches through these documents.

Box 5.33. European Commission's eSummary tools to support public administrations
The European Commission's Directorate-General for Translation has developed a series of AI-based services that can support policy analysis including policy evaluation. For example, eSummary is an AI-based service that can perform a quick overview of a submitted text and send a shortened version back; it uses AI algorithms to choose where the emphasis lies in the document and provide a relevant synthesis. eSummary is connected to another AI-based translation tool (eTranslation), allowing it to create text in all the EU languages. The tool is accessible to a variety of actors across the European Union, including public administrations in member States.

Source: https://language-tools.ec.europa.eu.

Box 5.34. Retrieval-Augmented Generation for LLMs
Retrieval-Augmented Generation (RAG) is a technique developed to improve how LLMs, such as those behind advanced chatbots and virtual assistants, handle information. For different reasons, including reliance on old data, LLMs can provide incorrect answers, and it can be difficult to understand how they arrived at a particular response. RAG allows LLMs to access additional data sources that can keep information current, which is particularly useful when applied to specialised domains or knowledge areas. For government actors, RAG can be an effective means of fencing in their internal data sources, while improving the accuracy, relevancy and trustworthiness of a model's output.

RAG begins with identifying pertinent documentation and extracting vital text from it. Then, it breaks this text down into smaller parts and transforms these parts into a format (i.e. embeddings) that the model can understand and store efficiently. These pieces of information are kept in a special database (i.e. vector databases). When someone asks the model a question, it can look through this database to find up-to-date and accurate information to add to what it already knows before giving an answer.

For situations where it is critical for a model to provide facts that are current and accurate, such as when dealing with confidential information or needing to keep a clear record of data sources, the United Kingdom's AI Playbook for the UK Government (Box 4.2) recommends using RAG. This approach can help to ensure that the model's answers are based on reliable data, making it particularly valuable for organisations focused on maintaining high levels of accuracy and accountability.

Source: (Ugale and Hall, 2024[89]).

Evidence of impact
As the use of AI in policy evaluation is still at early stages, the impact of AI on the practice of policy evaluation is still modest and difficult to measure. A recent study conducted on 758 Boston Consulting Group (BCG) consultants on complex, realistic knowledge-intensive tasks (such as policy evaluation), showed that each one of a set of 18 realistic consulting tasks within AI's known capabilities, consultants using AI were significantly more productive. Compared to a control group, on average, they completed 12% more tasks, 25% faster, with 40% higher quality (Dell'Acqua et al., 2023[126]). However, a different effect was observed for tasks "outside the current capability of AI", showing fewer mistakes from the group not using AI. Other studies on the impact of AI on evidence synthesis show promising results of using LLMs to conduct some elements of systematic reviews, like risk of bias assessments, with agreement in judgment between humans and AI systems ranging from 41% for overall judgement to 71% for outcome measurement (Eisele et al., 2024[127]). At the same time, the study also highlights that AI judgment cannot yet replace human assessment.

Managing risks and challenges
While there is very little research on the risks and challenges of using AI in policy evaluation (Jacob, 2025[125]), that research — along with OECD work with governments and analysis of individual use cases — have identified several associated risks and implementation challenges for AI use in the field.

Associated risks
Inadequate or skewed data in AI systems

Automation bias

Lack of transparency and explainability

AI's use during evaluation processes can reinforce some errors that can emerge at multiple points within the AI pipeline. The first risk of using of AI in policy evaluation originates from training algorithms with skewed or incomplete data. This can produce systems that generate erroneous predictions or that reinforce or exacerbate pre-existing outlooks (Jacob, 2025[125]). While this risk is does not only concern policy evaluation — and can apply to other uses of AI in policymaking — its potential risk in the field are significant considering the impact on maintaining or discontinuing potentially positive or harmful interventions (Marcucci and Verhulst, 2025[128]). For this reason, it is essential to mitigate this risk as much as possible by making sure that the data used to train these systems is of good quality and is representative.

Many people perceive AI systems and the decisions they make to be neutral and impartial, leading them to accept results without scrutiny, despite the possibility of inaccuracies. This tendency for human operators to over-rely on automation is known as "automation bias" (Horowitz, 2023[129]; Alon-Barkat and Busuioc, 2022[130]). Over-automation could reduce the role of human judgment and potentially oversimplifying complex social and economic assumptions. This may cause evaluators to accept recommendations proposed by AI without fully scrutinising the underlying assumptions or data.

Furthermore, the lack of transparency of certain AI tools can further complicate policymakers' tasks to understand and justify AI-driven insights. These can be particularly problematic in policymaking, where an objective approach is needed to address proportionately different populations and justify the decisions made.

Implementation challenges
Lack of high-quality data and the ability to share it

Skills gaps

Just as governments face a number of challenges in promoting policy evaluation, they also face specific challenges when seeking to use AI in this field (OECD/UNESCO, 2024[131]). Inadequate data governance has long been a challenge for evaluators, limiting the capacity of governments to generate the data that is necessary to produce evidence and evaluation (OECD, 2020[108]). This issue persists even though in adhering to the OECD (2023[132]) Recommendation on Public Policy Evaluation, all member countries committed to ensuring the availability of high quality, timely, accessible, disaggregated and reusable results, performance and administrative data for policy evaluation.

The implementation of AI requires digital and numeracy skills. While not all members of an evaluation team need to be experts, it is important to ensure that all evaluators understand how AI can support policy evaluation. Evaluators should therefore be properly supported by digital and data science teams, which are currently being put in place, such as at France's Inspectorate General of Finance (IGF). Evidence shows that policy evaluators have been slower to adapt to the new developments at a general level, even if some countries have advanced practices. There is often limited development training in big data analytics and AI for evaluators. This is also the case for evaluations inside government, which often suffer from limited internal analytical capacities and technical skills, hindering the development of quality evaluations (OECD, 2020[108]).

The OECD (2025[107]) Implementation Toolkit for the OECD Recommendation on Public Policy Evaluation provides information on how governments can assess their current policy evaluation capacities, identifies best practices and use cases from around the world, and illustrated potential practical solutions and tools for policymakers and evaluators.

Untapped potential and way forward
In the field of policy evaluation, AI can perform some tasks, allowing government analysts to use a broader range of evidence and process it faster. While some initial applications of AI were identified in evaluation design, analysis, and evaluation communication and management, the use of AI in policy evaluation remains limited. For this reason, there are areas where AI has the potential for significant impact on policy evaluation in the future.

First, to support evaluation design, chatbots could help evaluators build their knowledge in specific fields. Indeed, if well prompted, chatbots can perform several activities that can support learning. As some initial examples of evaluation design show, they can also support creative thinking and be used as useful tools for brainstorming (Ferretti, 2023[133]). Even if these tools do not generate new evidence, they can provide new insights helpful for initial stages of an evaluation process. Recently, for instance, ChatGPT's Deep Research attempts to automate a large part of the process of evidence review and synthesis. Using chain of thought (CoT) reasoning, tools such as Deep Research break complex research questions into smaller, comprehensible sub-questions that it answers in sequence. The approach enables the system to prepare a detailed report based on its review of the available evidence. Such CoT techniques have the potential to automate a large part of the evidence review and synthesis process. This may enable researchers who would previously develop a few reviews from scratch to instead automate, quality assure and build upon dozens of AI-generated research reviews.

Second, from an analytical perspective, there is a strong potential for AI to be further used to conduct more ambitious ex ante and ex post evaluations, using a broader range of data and assessing impact through quasi-experimental methods. For instance, AI-driven behavioural forecasting can analyse large quantities of historical data and observed behaviour to identify patterns, anticipate decisions and optimise user experiences by integrating contextual variables and external stimuli. ML tools can be used for counterfactual prediction in cases where a control group is missing. This can be used, for example, in the case of carbon pricing assessments, where policy evaluators lack an ex-post perspective. One study proposes a policy evaluation approach using ML tools and economic theory for counterfactual prediction to analyse the costs and emissions impacts of the UK CPS, "a carbon tax levied on all fossil-fired power plants" (Abrell, Kosch and Rausch, 2022[134]).

Finally, in the longer-term, AI has the potential to change the approach to policymaking from a policy cycle and allow evaluations to feed into decision-making at multiple stages. Because AI makes evaluations quicker and to some extent less costly, academics suggest the possibility of shifting from a system where evaluations often arrive too late for decision-making to an approach where evaluative evidence is available to shape, adjust and redesign policies almost in real time. This is referred as Dynamic Public Policy Cycle (Jacob, 2025[125]). As countries around the world have faced a series of crises in recent years, it is essential that governments have access to evaluative evidence in key decision-making stages. Rapid evaluations are developed to inform urgent decision-making and have been efficiently used for this purpose, for example, in Australia (Better Evaluation Knowledge, 2022[135]). While these rapid evaluations now rely mainly on qualitative data, AI could play an important role in making these evaluations more robust and common in the future.

However, for AI to effectively support evaluation, governments need to invest in civil servants' skills and developing a strong data infrastructure. Stronger international collaboration can also enhance AI's potential in policy evaluation. Evaluators need a good understanding of AI's potential benefits, risks and limitations to make informed decisions on when and how to use it. For this reason, governments need to invest in training courses for evaluators to ensure they understand the different tools available to them. Trainings have been developed across OECD governments (see Chapter 4, section on "Fostering skills and talent"). However, these are mainly on the use of AI in government and are not tailored to the field of evaluation. In addition to trainings, it is important to support experimentation with AI and learn-by-doing. Developing a network across line ministries to exchange relevant AI applications can be a good way to support AI uptake in different evaluation tasks. Some incubators are currently being developed but a stronger focus on evaluation is needed.

As is the case for other policy areas, governments should invest in relevant data infrastructures and data sharing that is safe and secure (see Chapter 4, sections on "Creating a strong data foundation" and "Building out digital infrastructure" for a detailed discussion). Some government organisations, such as the Australian Centre for Evaluation, have developed guides to facilitate data discovery and access to support evaluation activities (ACE, 2025[136]). Some OECD countries have developed ways in which different datasets can be linked and accessed in secure environment to ensure policy analysis. In Denmark, for example, Statistics Denmark (2025[137]) facilitates the use of these micro-level databases for research purposes for approved analysts, universities, research organisations or ministries. In the Netherlands, the government launched the Data Agenda Government, outlining plans to improve the management of personal data, open data and big data, leveraging analysis and integration for informed policymaking and addressing societal challenges (Netherlands Ministry of the Interior and Kingdom Relations, 2019[138]).

Finally, AI has potential in evidence synthesis. There is a broader calling for stronger collaboration on evidence generation across countries, following strategic initiatives supported by countries such as the United Kingdom and Australia (Halpern and Maru, 2024[139]). This agenda recognises a need for faster, reliable synthesis at the international level, given that AI is already helping to reduce timelines for evidence production. This could help to fill some of the existing gaps faster.

Note
← 1.  https://kudos.dfo.no.

Previous
Next
oecd
© Organisation for Economic Co-operation and Development`,
    category: "AI & Technology",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg?key=blog1",
    author: {
      name: "Dr. Sarah Chen",
      role: "CEO",
      avatar: "/placeholder.svg?key=author1",
    },
  },
  {
    id: "policy-compliance",
    title: "Trends and early lessons from the use of AI across functions of government",
    excerpt:
      "Learn the essential strategies for maintaining compliance with evolving government policies and regulations.",
    category: "Compliance",
    date: "March 10, 2024",
    readTime: "7 min read",
    image: "/placeholder.svg?key=blog2",
    author: {
      name: "Michael Rodriguez",
      role: "CTO",
      avatar: "/placeholder.svg?key=author2",
    },
  },
  {
    id: "semantic-search",
    title: "Implementation challenges that hinder the strategic use of AI in government",
    excerpt: "A deep dive into how semantic search technology improves policy discovery and retrieval accuracy.",
    category: "Technology",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "/placeholder.svg?key=blog3",
    author: {
      name: "Priya Sharma",
      role: "Head of Product",
      avatar: "/placeholder.svg?key=author3",
    },
  },
  {
    id: "data-security",
    title: "Enablers, guardrails and engagement for unlocking trustworthy AI",
    excerpt: "How AIDRA maintains the highest standards of security and compliance for sensitive government data.",
    category: "Security",
    date: "February 28, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg?key=blog4",
    author: {
      name: "James Wilson",
      role: "Head of Security",
      avatar: "/placeholder.svg?key=author4",
    },
  },
  {
    id: "policy-updates",
    title: "Deep dive: The current status and future potential of AI in government",
    excerpt: "Why real-time policy updates are crucial for government officials and how to leverage them effectively.",
    category: "Best Practices",
    date: "February 20, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg?key=blog5",
    author: {
      name: "Dr. Sarah Chen",
      role: "CEO",
      avatar: "/placeholder.svg?key=author1",
    },
  },
]

export function BlogGrid() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="group h-full bg-card border-border overflow-hidden hover:border-primary/50 transition-all cursor-pointer">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-muted overflow-hidden">
                        <img
                          src={post.author.avatar || "/placeholder.svg"}
                          alt={post.author.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-foreground">{post.author.name}</div>
                        <div className="text-xs text-muted-foreground">{post.author.role}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4 text-sm text-primary font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
