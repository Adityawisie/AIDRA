import { Card } from "@/components/ui/card"
import { Target, Eye, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              AIDRA was founded with a clear mission: to revolutionize how government officials and policy analysts
              access, understand, and utilize critical policy information. In an era where policy documents are
              scattered across multiple sources and formats, we recognized the need for a unified, intelligent platform.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our AI-powered platform brings together thousands of government policies, circulars, and official
              documents into one secure, searchable database. With advanced natural language processing and machine
              learning, we make policy research faster, more accurate, and more accessible than ever before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <Target className="h-6 w-6" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To democratize access to government policy information through intelligent AI-powered search and
                analysis tools
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <Eye className="h-6 w-6" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A world where every government official has instant access to accurate, verified policy information at
                their fingertips
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  <Zap className="h-6 w-6" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Values</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Accuracy, security, transparency, and innovation drive everything we do in building AIDRA
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
