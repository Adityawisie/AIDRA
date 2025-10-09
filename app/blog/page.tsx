import { Navbar } from "@/components/navbar"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogGrid } from "@/components/blog/blog-grid"
import { Footer } from "@/components/footer"
import AnimationText from "@/components/animation-text"

export default function BlogPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <BlogHeader />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  )
}
