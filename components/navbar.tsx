"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Database, Search, Menu, X } from "lucide-react"
import Link from "next/link"
import { AuthModal } from "@/components/auth-modal"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className={`flex items-center justify-between h-20 rounded-lg border border-white p-4`}>
            <Link href="/" className="flex items-center gap-2">
              <Database className="h-8 w-8 text-primary" strokeWidth={1.5} />
              <span className="text-xl font-semibold tracking-tight text-foreground">AIDRA</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/features"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-foreground" suppressHydrationWarning>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setIsAuthModalOpen(true)} suppressHydrationWarning>
                Get Access
              </Button>
            </div>

            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              suppressHydrationWarning
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden pt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col gap-6">
              <Link
                href="/"
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/features"
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="pt-6 border-t border-border flex flex-col gap-3">
                <Button variant="ghost" className="text-foreground justify-start" suppressHydrationWarning>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => setIsAuthModalOpen(true)} suppressHydrationWarning>Get Access</Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  )
}
