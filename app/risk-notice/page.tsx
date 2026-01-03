import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function RiskNoticePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-4">
                Risk Notice
              </h1>
              <p className="text-gray-400">
                Important risk disclosure for AIPROFITGEN users
              </p>
            </div>

            <div className="glass rounded-2xl p-8 space-y-8">
              <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
                <h3 className="text-2xl font-bold text-red-400 mb-4">⚠️ High Risk Warning</h3>
                <p className="text-gray-300 leading-relaxed">
                  Trading cryptocurrencies and using automated trading systems carries a high level of risk and may 
                  not be suitable for all users. You should carefully consider your financial situation, risk tolerance, 
                  and investment objectives before using AIPROFITGEN software. You may lose some or all of your invested capital.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Cryptocurrency Market Risks</h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  Cryptocurrency markets present unique risks:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li><strong className="text-white">Extreme Volatility:</strong> Cryptocurrency prices can fluctuate dramatically in short periods</li>
                  <li><strong className="text-white">24/7 Markets:</strong> Markets operate continuously without trading halts or circuit breakers</li>
                  <li><strong className="text-white">Liquidity Risk:</strong> Some cryptocurrencies may have limited liquidity and wide bid-ask spreads</li>
                  <li><strong className="text-white">Market Manipulation:</strong> Cryptocurrency markets may be subject to manipulation and coordinated activity</li>
                  <li><strong className="text-white">Regulatory Uncertainty:</strong> Regulatory frameworks are evolving and may change significantly</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Automated Trading Risks</h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  Using automated trading software involves additional risks:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li><strong className="text-white">Technical Failures:</strong> Software, internet connectivity, or system failures may occur</li>
                  <li><strong className="text-white">Algorithm Performance:</strong> Automated strategies may not perform as expected in all market conditions</li>
                  <li><strong className="text-white">Configuration Errors:</strong> Incorrect software configuration can lead to unintended trading activity</li>
                  <li><strong className="text-white">Slippage:</strong> Actual execution prices may differ from expected prices, especially in volatile markets</li>
                  <li><strong className="text-white">Exchange Risks:</strong> Third-party exchanges may experience downtime, security issues, or operational failures</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">No Performance Guarantees</h2>
                <p className="text-gray-400 leading-relaxed">
                  AIPROFITGEN makes no guarantees regarding software performance, profitability, or specific outcomes. 
                  Historical performance, backtesting results, and example scenarios do not predict future results. 
                  Market conditions change, and past performance is not indicative of future performance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Loss of Capital</h2>
                <p className="text-gray-400 leading-relaxed">
                  You should only trade with funds you can afford to lose. There is a substantial risk of losing your 
                  entire investment. Do not use funds required for living expenses, retirement savings, or other essential purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Security Risks</h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  Cryptocurrency and online trading involve security risks:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Hacking and unauthorized access to accounts or exchanges</li>
                  <li>Phishing attacks and social engineering</li>
                  <li>API key compromise or misuse</li>
                  <li>Exchange security breaches or insolvency</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Regulatory and Legal Risks</h2>
                <p className="text-gray-400 leading-relaxed">
                  Cryptocurrency regulations vary by jurisdiction and are subject to change. Users are responsible for 
                  understanding and complying with applicable laws in their location. Regulatory changes may affect the 
                  legality, availability, or taxation of cryptocurrency trading activities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Tax Implications</h2>
                <p className="text-gray-400 leading-relaxed">
                  Cryptocurrency trading may have tax implications. Users are responsible for understanding and fulfilling 
                  their tax obligations. Consult with qualified tax professionals regarding your specific situation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Not Financial Advice</h2>
                <p className="text-gray-400 leading-relaxed">
                  AIPROFITGEN provides software tools, not financial advice. We do not recommend specific trades, 
                  investment strategies, or portfolio allocations. All trading decisions are your responsibility. 
                  Consider consulting with qualified financial advisors before making investment decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Monitoring Responsibility</h2>
                <p className="text-gray-400 leading-relaxed">
                  While our software provides automation, users remain responsible for monitoring their accounts, 
                  automated systems, and trading activity. Regular review of software performance, positions, and 
                  risk exposure is essential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">User Acknowledgment</h2>
                <p className="text-gray-400 leading-relaxed">
                  By using AIPROFITGEN software, you acknowledge that you have read, understood, and accepted these 
                  risks. You confirm that you understand cryptocurrency trading risks, automated trading risks, and 
                  the potential for complete loss of capital.
                </p>
              </section>

              <div className="mt-12 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">📋 Recommendation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Before using AIPROFITGEN software, we strongly recommend: conducting thorough research, understanding 
                  cryptocurrency markets, reviewing all documentation, starting with small amounts, consulting financial 
                  professionals, and only risking capital you can afford to lose.
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
