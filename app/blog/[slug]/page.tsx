import { Navbar } from "@/components/navbar"
import { BlogPostHeader } from "@/components/blog/blog-post-header"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { BlogPostAuthor } from "@/components/blog/blog-post-author"
import { RelatedPosts } from "@/components/blog/related-posts"
import { Footer } from "@/components/footer"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <BlogPostHeader slug={params.slug} />
        <BlogPostContent slug={params.slug} />
        <BlogPostAuthor slug={params.slug} />
        <RelatedPosts slug={params.slug} />
      </main>
      <Footer />
    </div>
  )
}
