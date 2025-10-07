"use client"

import { Button } from "@/components/ui/button"
import { BackgroundGraphics } from "@/components/background-graphics"
import { Play } from "lucide-react"
import { AuthModal } from "@/components/auth-modal"
import { useState, useEffect } from "react"
import { gsap } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

export function HeroSection() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  useEffect(() => {
    // Register GSAP plugin and initialize animation on client side only
    gsap.registerPlugin(MotionPathPlugin)

    // GSAP animation setup
    gsap.set(".boop", {drawSVG:"0% 1.5%", autoAlpha: 1, immediateRender: true})
    gsap.set(".boop2", {drawSVG:"98.2% 100%", autoAlpha: 1, immediateRender: true})
    gsap.set(".stroke", {drawSVG:"0%"})

    gsap.set(".ball", {
      xPercent: -50,
      yPercent: -50,
      transformOrigin: "50%, 50%"
    })

    function restart() {
       timeline.play(0)
    }

    const startBall = 0.023
    const endBall = 0.978

    var timeline = gsap.timeline()
    timeline.to(".boop", {
      duration: 0.5,
      ease: "power4.out",
      drawSVG:"0% 0.2%"
    })
    .to(".boop", {
      duration: 0.3,
      ease: "back.out(8)",
      drawSVG:"0% 1.5%"
    },"+=0.1")
    .to(".ball", {
      duration: 10,
      ease: "elastic.out(1,1.2)",
      immediateRender: true,
      motionPath:{
        path: ".loop",
        align: ".loop",
        start: startBall,
        end: endBall,
      }
    }, 0.65)
    .to(".boop2", {
      duration: 0.5,
      ease: "power4.out",
      drawSVG:"99.5% 100%"
    }, 4.4)
    .to(".boop2", {
      duration: 0.3,
      ease: "back.out(8)",
      drawSVG:"98.2% 100%",
      delay: 0.1,
    }, 4.9)
    .to(".ball", {
      duration: 10,
      ease: "elastic.out(1,1.2)",
      motionPath:{
        path: ".loop",
        align: ".loop",
        start: endBall,
        end: startBall
      },
    }, 5.1)
    .add(restart, 8.2)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <BackgroundGraphics />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center rounded-lg border border-white p-6">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-sm font-mono text-primary uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              AI-Powered Policy Intelligence
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 text-balance transition-opacity duration-1000 ease-in-out opacity-0 animate-fade-in">
            <svg className="hidden">
              <defs>
                <path id="motionPath" d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" />
              </defs>
            </svg>
            <span className="boop">Instant Access to </span>
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent boop2">
              Government Policies
            </span>
          </h1>
          <div style={{ position: 'fixed', bottom: '10px', right: '10px', color: 'white', fontSize: '12px', zIndex: 9999 }}>
            Instant Access to Government Policies
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
            Securely search, retrieve, and compare authentic government policies and circulars with AI-powered
            summarized insights and verified source citations
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8" onClick={() => setIsAuthModalOpen(true)}>
              Start Searching
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary px-8 bg-transparent group"
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