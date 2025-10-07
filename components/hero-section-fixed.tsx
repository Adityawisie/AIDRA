"use client"

import { Button } from "@/components/ui/button"
import { BackgroundGraphics } from "@/components/background-graphics"
import { Play } from "lucide-react"
import { AuthModal } from "@/components/auth-modal"
import { useState } from "react"

export function HeroSection() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <BackgroundGraphics />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-sm font-mono text-primary uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              AI-Powered Policy Intelligence
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 text-balance">
            Instant Access to{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Government Policies
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
            Securely search, retrieve, and compare authentic government policies and circulars with AI-powered
            summarized insights and verified source citations
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8" onClick={() => setIsAuthModalOpen(true)} suppressHydrationWarning>
              Start Searching
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary px-8 bg-transparent group"
              suppressHydrationWarning
            >
              <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </section>
  )
}
