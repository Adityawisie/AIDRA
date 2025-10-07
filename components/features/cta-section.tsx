import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Ready to Experience AIDRA?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty">
            Join hundreds of government agencies already using AIDRA to streamline their policy research
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 group">
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary px-8 bg-transparent"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
