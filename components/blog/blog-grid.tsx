import { Card } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: "ai-policy-research",
    title: "How AI is Transforming Government Policy Research",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the way government officials access and analyze policy information.",
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
    title: "Best Practices for Policy Compliance in 2024",
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
    title: "Understanding Semantic Search in Government Databases",
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
    title: "Ensuring Data Security in Government Platforms",
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
    title: "Staying Updated with Real-Time Policy Changes",
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
  {
    id: "future-govtech",
    title: "The Future of Government Technology",
    excerpt: "Predictions and trends shaping the future of government technology and policy management systems.",
    category: "Industry Insights",
    date: "February 15, 2024",
    readTime: "10 min read",
    image: "/placeholder.svg?key=blog6",
    author: {
      name: "Michael Rodriguez",
      role: "CTO",
      avatar: "/placeholder.svg?key=author2",
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
