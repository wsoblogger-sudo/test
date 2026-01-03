import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function DisclaimerPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-4">
                Disclaimer
              </h1>
              <p className="text-gray-400">
                Important information about AIPROFITGEN software and services
              </p>
            </div>

            <div className="glass rounded-2xl p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Software Tools Only</h2>
                <p className="text-gray-400 leading-relaxed">
                  AIPROFITGEN provides software automation tools for cryptocurrency and financial operations. 
                  We are a technology company offering software services, not financial advisors or investment consultants. 
                  Our software does not constitute financial advice, investment recommendations, or trading guidance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">No Profit Guarantees</h2>
                <p className="text-gray-400 leading-relaxed">
                  We make no guarantees, warranties, or promises regarding profits, earnings, or specific financial outcomes. 
                  All performance indicators, metrics, and examples shown on our platform are for informational and 
                  demonstration purposes only. Past performance does not indicate future results.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Risk Acknowledgment</h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  Trading cryptocurrency and using automated trading systems involves substantial risk, including:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Complete loss of invested capital</li>
                  <li>Market volatility and price fluctuations</li>
                  <li>Technical failures or system errors</li>
                  <li>Exchange risks and liquidity issues</li>
                  <li>Regulatory changes and compliance requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">User Responsibility</h2>
                <p className="text-gray-400 leading-relaxed">
                  Users are solely responsible for their own trading decisions, software configuration, risk management, 
                  and financial outcomes. AIPROFITGEN does not control, direct, or manage user trading activities. 
                  Users should conduct their own research and consult with qualified financial professionals before 
                  making investment decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">System Performance</h2>
                <p className="text-gray-400 leading-relaxed">
                  While we strive for reliable software performance, we cannot guarantee uninterrupted service, error-free 
                  operation, or specific uptime levels for basic subscriptions. System maintenance, updates, and technical 
                  issues may temporarily affect software availability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Not Financial Advice</h2>
                <p className="text-gray-400 leading-relaxed">
                  No information provided by AIPROFITGEN, including documentation, support communications, or platform content, 
                  should be construed as financial, investment, tax, or legal advice. Users should seek advice from qualified 
                  professionals for their specific circumstances.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
                <p className="text-gray-400 leading-relaxed">
                  Our software integrates with third-party cryptocurrency exchanges and financial platforms. AIPROFITGEN is 
                  not responsible for the actions, policies, security, or reliability of these third-party services. 
                  Users should review and understand the terms and risks of any third-party platforms they choose to use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Regulatory Compliance</h2>
                <p className="text-gray-400 leading-relaxed">
                  Users are responsible for understanding and complying with all applicable laws, regulations, and tax 
                  requirements in their jurisdiction regarding cryptocurrency trading and automated trading systems. 
                  Regulations vary by country and may change over time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Information Accuracy</h2>
                <p className="text-gray-400 leading-relaxed">
                  While we strive to provide accurate information, AIPROFITGEN makes no warranties regarding the accuracy, 
                  completeness, or timeliness of information provided through our platform. Market data, metrics, and 
                  statistics are subject to change and may contain errors.
                </p>
              </section>

              <div className="mt-12 p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
                <h3 className="text-xl font-bold text-red-400 mb-3">⚠️ Important Notice</h3>
                <p className="text-gray-300 leading-relaxed">
                  Cryptocurrency trading and automated trading systems are high-risk activities suitable only for individuals 
                  who understand and can afford these risks. Do not invest money you cannot afford to lose. 
                  Always conduct thorough research and seek professional advice before making investment decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
