import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const relatedPosts = [
  {
    id: "semantic-search",
    title: "Understanding Semantic Search in Government Databases",
    excerpt: "A deep dive into how semantic search technology improves policy discovery.",
    category: "Technology",
    image: "/placeholder.svg?key=related1",
  },
  {
    id: "policy-compliance",
    title: "Best Practices for Policy Compliance in 2024",
    excerpt: "Essential strategies for maintaining compliance with evolving policies.",
    category: "Compliance",
    image: "/placeholder.svg?key=related2",
  },
  {
    id: "future-govtech",
    title: "The Future of Government Technology",
    excerpt: "Predictions and trends shaping the future of government technology.",
    category: "Industry Insights",
    image: "/placeholder.svg?key=related3",
  },
]

export function RelatedPosts({ slug }: { slug: string }) {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
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
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 block">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm text-primary font-semibold group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
