import Button from '../ui/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="text-center lg:text-left">
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

              <p className="text-xl md:text-2xl text-gray-300 mb-12">
                One ecosystem. Multiple automated profit engines. Professional software tools for cryptocurrency arbitrage, trading automation, and passive income generation.
              </p>

              <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button href="#software" variant="primary" size="lg">
                  Explore Software
                </Button>
                <Button href="/signup" variant="outline" size="lg">
                  Create Account
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="glass glass-hover rounded-2xl p-4 animate-float">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="https://aiprofitgen.com/assets/images/cashflow-758x476.jpg"
                    alt="AI-Powered Cashflow Dashboard"
                    width={758}
                    height={476}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 glass rounded-xl p-4 hidden lg:block">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm text-white font-semibold">Live System</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass rounded-xl p-4 hidden lg:block">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">+287%</div>
                  <div className="text-xs text-gray-400">Performance</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mt-16">
            <div className="glass rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">6</div>
              <div className="text-sm md:text-base text-gray-400">Software Tools</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm md:text-base text-gray-400">Automation</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">AI</div>
              <div className="text-sm md:text-base text-gray-400">Powered</div>
            </div>
            <div className="glass rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm md:text-base text-gray-400">Automated</div>
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
