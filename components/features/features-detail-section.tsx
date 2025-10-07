import { Card } from "@/components/ui/card"
import { Search, FileText, GitCompare, BookOpen, Shield, Zap, Database, Clock } from "lucide-react"

const features = [
  {
    icon: Search,
    title: "Intelligent Semantic Search",
    description:
      "Advanced AI-powered search that understands context and intent, not just keywords. Search using natural language queries and get relevant results instantly.",
    benefits: [
      "Natural language query processing",
      "Context-aware search results",
      "Multi-language support",
      "Advanced filtering options",
    ],
  },
  {
    icon: FileText,
    title: "Policy Retrieval & Citations",
    description:
      "Access authentic government documents with complete metadata, verified sources, and automatic citation generation for compliance and reporting.",
    benefits: [
      "Verified source citations",
      "Complete document metadata",
      "Automatic citation formatting",
      "Version history tracking",
    ],
  },
  {
    icon: GitCompare,
    title: "Compare Multiple Policies",
    description:
      "Side-by-side comparison tools to identify differences, updates, and amendments across multiple policy documents efficiently.",
    benefits: [
      "Visual diff highlighting",
      "Amendment tracking",
      "Change history analysis",
      "Export comparison reports",
    ],
  },
  {
    icon: BookOpen,
    title: "AI-Powered Summaries",
    description:
      "Get concise, accurate summaries of complex policies with key highlights, actionable insights, and important dates automatically extracted.",
    benefits: [
      "Executive summaries",
      "Key points extraction",
      "Important dates highlighted",
      "Action items identified",
    ],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Military-grade encryption, role-based access control, and comprehensive audit logs ensure your data remains secure and compliant.",
    benefits: [
      "End-to-end encryption",
      "Role-based permissions",
      "Comprehensive audit trails",
      "SOC 2 Type II certified",
    ],
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description:
      "Stay informed with instant notifications when policies are updated, amended, or new circulars are published by government agencies.",
    benefits: [
      "Instant policy updates",
      "Custom alert preferences",
      "Email & in-app notifications",
      "RSS feed integration",
    ],
  },
  {
    icon: Database,
    title: "Comprehensive Database",
    description:
      "Access over 10,000 government policies, circulars, and official documents from hundreds of agencies, all in one centralized platform.",
    benefits: [
      "10,000+ policy documents",
      "500+ government agencies",
      "Historical archives",
      "Regular database updates",
    ],
  },
  {
    icon: Clock,
    title: "Lightning-Fast Performance",
    description:
      "Experience sub-50ms search times with our optimized infrastructure. Get the information you need without waiting.",
    benefits: [
      "Sub-50ms search response",
      "99.9% uptime guarantee",
      "Global CDN distribution",
      "Scalable infrastructure",
    ],
  },
]

export function FeaturesDetailSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              <div className="flex-1">
                <Card className="p-8 bg-card border-border">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
              <div className="flex-1">
                <div className="aspect-video rounded-lg bg-muted border border-border overflow-hidden">
                  <img
                    src={`/.jpg?height=400&width=600&query=${feature.title}`}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
