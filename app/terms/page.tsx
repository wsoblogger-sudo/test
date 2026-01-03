import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-4">
                Terms of Service
              </h1>
              <p className="text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="glass rounded-2xl p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-400 leading-relaxed">
                  By accessing and using AIPROFITGEN software and services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, do not use our software or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Software Services</h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  AIPROFITGEN provides software automation tools for cryptocurrency trading and financial operations. 
                  Our services include:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Automated trading software</li>
                  <li>Arbitrage detection systems</li>
                  <li>Cash flow optimization tools</li>
                  <li>Financial automation platforms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  Users are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Maintaining account security and confidentiality</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Understanding cryptocurrency market risks</li>
                  <li>Making informed decisions about software configuration</li>
                  <li>Monitoring automated systems and their performance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. No Guarantees</h2>
                <p className="text-gray-400 leading-relaxed">
                  AIPROFITGEN provides software tools only. We do not guarantee profits, specific results, or performance outcomes. 
                  All trading and cryptocurrency activities involve substantial risk. Users may lose their entire investment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Subscriptions and Payments</h2>
                <p className="text-gray-400 leading-relaxed">
                  Subscriptions are billed on a recurring basis. Users may cancel at any time, with cancellation effective at the 
                  end of the current billing period. No refunds are provided for partial periods or unused service time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-400 leading-relaxed">
                  AIPROFITGEN shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising 
                  from the use or inability to use our software. This includes losses from trading activities, system downtime, 
                  or software errors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
                <p className="text-gray-400 leading-relaxed">
                  All software, content, trademarks, and intellectual property are owned by AIPROFITGEN. Users receive a limited, 
                  non-exclusive, non-transferable license to use the software for personal or business purposes as specified in 
                  their subscription.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
                <p className="text-gray-400 leading-relaxed">
                  We reserve the right to suspend or terminate user accounts for violations of these terms, fraudulent activity, 
                  or any reason at our discretion. Users may terminate their accounts at any time through their account settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
                <p className="text-gray-400 leading-relaxed">
                  We may modify these terms at any time. Continued use of our services after changes constitutes acceptance of 
                  the modified terms. Material changes will be communicated via email or platform notification.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact</h2>
                <p className="text-gray-400 leading-relaxed">
                  For questions about these Terms of Service, contact us at support@aiprofitgen.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
