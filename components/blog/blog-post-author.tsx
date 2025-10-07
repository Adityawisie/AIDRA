import { Card } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"

export function BlogPostAuthor({ slug }: { slug: string }) {
  const author = {
    name: "Dr. Sarah Chen",
    role: "Chief Executive Officer",
    avatar: "/professional-woman-executive.png",
    bio: "Dr. Chen is a former policy advisor with over 15 years of experience in government technology. She founded AIDRA to revolutionize how officials access policy information.",
  }

  return (
    <section className="py-12 relative bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-24 h-24 rounded-full bg-muted overflow-hidden flex-shrink-0">
                <img
                  src={author.avatar || "/placeholder.svg"}
                  alt={author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-1">About the Author</h3>
                <p className="text-primary font-semibold mb-2">{author.name}</p>
                <p className="text-sm text-muted-foreground mb-4">{author.role}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">{author.bio}</p>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
