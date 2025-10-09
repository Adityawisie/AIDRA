import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import AnimationText from "@/components/animation-text"
import { StarLayer } from "@/components/animate-ui/components/backgrounds/stars"

const featuresList = [
  "Search across 10,000+ government policies and circulars",
  "AI-powered semantic search with natural language queries",
  "Verified source citations with document metadata",
  "Side-by-side policy comparison tools",
  "Automated summarization with key highlights",
  "Real-time updates on policy amendments",
  "Secure access with role-based permissions",
  "Export reports in multiple formats",
]

export function FeaturesListSection() {
  return (
    <section className="py-24 relative bg-secondary/30">
      <StarLayer
        count={150}
        size={1}
        transition={{ repeat: Infinity, duration: 100, ease: 'linear' }}
        starColor="rgba(64, 224, 208, 0.2)"
        className="absolute inset-0 opacity-20"
      />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimationText />
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
              Everything You Need for Policy Research
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Comprehensive features designed for efficient government policy analysis
            </p>
          </div>

          <Card className="p-8 bg-card border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuresList.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
