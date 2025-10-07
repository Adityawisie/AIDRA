"use client"

import { useEffect, useState } from "react"

export default function AnimationText() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`text-center py-12 flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <img src="/logo.svg" alt="AIDRA Logo" className="w-32 sm:w-40 md:w-48 h-auto mb-4" />
      <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-foreground mb-2">AIDRA</span>
      <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-full sm:max-w-2xl mx-auto px-2 sm:px-0">
        Advanced policy intelligence for government and defense sectors
      </p>
    </div>
  )
}
