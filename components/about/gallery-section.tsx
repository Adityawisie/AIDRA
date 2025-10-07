export function GallerySection() {
  const images = [
    {
      src: "/modern-office-workspace-with-computers.jpg",
      alt: "AIDRA office workspace",
    },
    {
      src: "/team-collaboration-meeting-room.jpg",
      alt: "Team collaboration",
    },
    {
      src: "/data-center-servers-technology.jpg",
      alt: "Our technology infrastructure",
    },
    {
      src: "/government-building-architecture.jpg",
      alt: "Government partnerships",
    },
  ]

  return (
    <section className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Inside AIDRA
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A glimpse into our workspace and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-video overflow-hidden rounded-lg bg-muted border border-border hover:border-primary/50 transition-all"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
