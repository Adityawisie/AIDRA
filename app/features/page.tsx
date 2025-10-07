import { Navbar } from "@/components/navbar"
import { FeaturesHeader } from "@/components/features/features-header"
import { FeaturesDetailSection } from "@/components/features/features-detail-section"
import { TestimonialSection } from "@/components/features/testimonial-section"
import { CTASection } from "@/components/features/cta-section"
import { Footer } from "@/components/footer"
import AnimationText from "@/components/animation-text"

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <AnimationText />
        <FeaturesHeader />
        <FeaturesDetailSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
