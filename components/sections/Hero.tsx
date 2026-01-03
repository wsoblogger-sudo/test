import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 glass rounded-full text-sm text-purple-300 mb-8">
              🤖 AI-Powered Income Systems
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Automated </span>
            <span className="gradient-text">AI-Powered</span>
            <br />
            <span className="text-white">Income Systems</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            One ecosystem. Multiple automated profit engines. Professional software tools for cryptocurrency arbitrage, trading automation, and passive income generation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button href="#software" variant="primary" size="lg">
              Explore Software
            </Button>
            <Button href="/signup" variant="outline" size="lg">
              Create Account
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="glass rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-1">6</div>
              <div className="text-sm text-gray-400">Software Tools</div>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-gray-400">Automation</div>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-1">AI</div>
              <div className="text-sm text-gray-400">Powered</div>
            </div>
            <div className="glass rounded-xl p-6">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-gray-400">Automated</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
