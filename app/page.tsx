import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { FeaturesListSection } from "@/components/features-list-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <FeaturesListSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
