"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { StarLayer } from "@/components/animate-ui/components/backgrounds/stars"

export function ContactSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Demo requested for:", email)
    setEmail("")
  }

  return (
    <section id="contact" className="py-32 relative">
      <StarLayer
        count={100}
        size={1}
        transition={{ repeat: Infinity, duration: 120, ease: 'linear' }}
        starColor="rgba(64, 224, 208, 0.4)"
        className="absolute inset-0 opacity-40"
      />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <Card className="max-w-3xl mx-auto p-12 bg-card border-border text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Ready to Get Started?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Request access to AIDRA and start searching government policies with AI-powered insights
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background border-border text-foreground placeholder:text-muted-foreground"
              suppressHydrationWarning
            />
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 whitespace-nowrap" suppressHydrationWarning>
              Request Access
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
