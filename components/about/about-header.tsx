export function AboutHeader() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(64,224,208,0.1)_0%,transparent_50%)]" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-sm font-mono text-primary uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              About AIDRA
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Empowering Government Officials with{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              AI Intelligence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            We're building the future of government policy research with cutting-edge AI technology
          </p>
        </div>
      </div>
    </section>
  )
}
