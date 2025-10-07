import { Navbar } from "@/components/navbar"
import { AboutHeader } from "@/components/about/about-header"
import { AboutSection } from "@/components/about/about-section"
import { TeamSection } from "@/components/about/team-section"
import { GallerySection } from "@/components/about/gallery-section"
import { AwardLogosSection } from "@/components/about/award-logos-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import AnimationText from "@/components/animation-text"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <AnimationText />
        <AboutHeader />
        <AboutSection />
        <TeamSection />
        <GallerySection />
        <AwardLogosSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
