import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <PageHero 
        title="About AIPROFITGEN"
        subtitle="🤖 Our Story"
        description="Professional AI-powered automation for financial markets"
      />
      <main className="min-h-screen pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">

            <div className="space-y-8">
              <div className="glass rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  AIPROFITGEN provides professional-grade software automation tools for cryptocurrency trading and financial operations. Our mission is to deliver reliable, AI-powered systems that help users automate complex trading strategies and financial processes.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We combine advanced artificial intelligence with proven automation principles to create software that operates efficiently in dynamic financial markets.
                </p>
              </div>

              <div className="glass rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Technology & Innovation</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Our platform leverages cutting-edge AI algorithms, real-time market analysis, and automated execution systems. Each software tool is designed with institutional-grade security, risk management protocols, and performance optimization.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We continuously improve our algorithms and systems based on market conditions, user feedback, and technological advancement in the cryptocurrency and automation sectors.
                </p>
              </div>

              <div className="glass rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Professional Standards</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  AIPROFITGEN operates under strict professional standards. We provide software tools, not investment advice. Our systems are designed for users who understand cryptocurrency markets and trading automation.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We maintain transparency about software capabilities, implement robust security measures, and ensure users understand that all trading activities involve risk with no guaranteed outcomes.
                </p>
              </div>

              <div className="glass rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">Innovation</h3>
                    <p className="text-gray-400 text-sm">
                      Continuous advancement in AI and automation technology for financial markets.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">Reliability</h3>
                    <p className="text-gray-400 text-sm">
                      Professional-grade systems with high uptime and consistent performance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">Security</h3>
                    <p className="text-gray-400 text-sm">
                      Bank-grade encryption and security protocols protecting user data and operations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">Transparency</h3>
                    <p className="text-gray-400 text-sm">
                      Clear communication about capabilities, risks, and limitations of our software.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Software Ecosystem</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We offer six specialized software tools, each designed for specific automation needs:
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    <span><strong className="text-white">Cashflow Tools</strong> - Revenue generation and cash flow optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    <span><strong className="text-white">USDTRex Pro</strong> - USDT arbitrage automation across exchanges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    <span><strong className="text-white">Ethercraft Pro</strong> - Ethereum-focused trading automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    <span><strong className="text-white">Banking BotNet</strong> - Enterprise banking operations automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    <span><strong className="text-white">Arbitrage Trading Robot</strong> - High-frequency arbitrage detection and execution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-3">•</span>
                    <span><strong className="text-white">AiProfitgen X</strong> - Premium all-in-one automation platform</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
