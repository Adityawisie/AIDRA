import { Card } from "@/components/ui/card"
import { Search, FileText, GitCompare, BookOpen } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Intelligent Search",
    description:
      "AI-powered semantic search across thousands of government policies, circulars, and official documents with instant results",
  },
  {
    icon: FileText,
    title: "Policy Retrieval",
    description:
      "Access authentic government documents with verified source citations and complete metadata for compliance",
  },
  {
    icon: GitCompare,
    title: "Compare Policies",
    description:
      "Side-by-side comparison of multiple policies to identify differences, updates, and amendments efficiently",
  },
  {
    icon: BookOpen,
    title: "AI Summaries",
    description: "Get concise, accurate summaries of complex policies with key highlights and actionable insights",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Powerful Policy Intelligence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Enterprise-grade features designed for government officials, analysts, and policy researchers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>

              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
