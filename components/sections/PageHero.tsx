interface PageHeroProps {
  title: string;
  subtitle: string;
  description?: string;
}

export default function PageHero({ title, subtitle, description }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 glass rounded-full text-sm text-purple-300 mb-8">
              {subtitle}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">{title}</span>
          </h1>

          {description && (
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
