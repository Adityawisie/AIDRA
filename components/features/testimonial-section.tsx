import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "AIDRA has transformed how our department accesses policy information. What used to take hours now takes minutes.",
    author: "Jennifer Martinez",
    role: "Senior Policy Analyst",
    organization: "Department of Education",
    image: "/placeholder.svg?key=test1",
  },
  {
    quote: "The AI-powered summaries are incredibly accurate. It's like having a research assistant available 24/7.",
    author: "David Thompson",
    role: "Legislative Director",
    organization: "State Legislature",
    image: "/placeholder.svg?key=test2",
  },
  {
    quote:
      "The comparison feature is invaluable for tracking policy changes across multiple jurisdictions. Highly recommended.",
    author: "Dr. Aisha Patel",
    role: "Research Director",
    organization: "Policy Research Institute",
    image: "/placeholder.svg?key=test3",
  },
]

export function TestimonialSection() {
  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Trusted by Government Officials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See what policy professionals are saying about AIDRA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card border-border">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-foreground leading-relaxed mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary">{testimonial.organization}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
