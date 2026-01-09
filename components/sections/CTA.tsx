import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20"></div>
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Automated Income Today
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of users leveraging AI-powered automation for cryptocurrency trading and income generation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <Button href="#software" variant="primary" size="lg">
                Explore Software
              </Button>
              <Button href="/signup" variant="outline" size="lg">
                Create Account
              </Button>
            </div>

            <p className="text-sm text-gray-400 max-w-xl mx-auto">
              Professional automation tools for experienced traders and investors. 
              All trading involves risk. No guaranteed profits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
