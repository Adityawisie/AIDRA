import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

const blogPostData: Record<string, any> = {
  "ai-policy-research": {
    title: "How AI is Transforming Government Policy Research",
    category: "AI & Technology",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/placeholder.svg?key=blog1",
  },
}

export function BlogPostHeader({ slug }: { slug: string }) {
  const post = blogPostData[slug] || blogPostData["ai-policy-research"]

  return (
    <section className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(64,224,208,0.1)_0%,transparent_50%)]" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-sm font-mono text-primary uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
