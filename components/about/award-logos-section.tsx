export function AwardLogosSection() {
  const awards = [
    { name: "Government Innovation Award 2024", logo: "/award-badge.png" },
    { name: "Best AI Platform 2024", logo: "/technology-award.jpg" },
    { name: "Security Excellence Award", logo: "/security-badge.png" },
    { name: "Top GovTech Solution", logo: "/government-tech-award.jpg" },
  ]

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">Awards & Recognition</h2>
          <p className="text-muted-foreground">Recognized for excellence in government technology</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12">
          {awards.map((award, index) => (
            <div key={index} className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all">
              <img src={award.logo || "/placeholder.svg"} alt={award.name} className="h-16 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
