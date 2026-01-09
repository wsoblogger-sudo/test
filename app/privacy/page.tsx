import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/sections/PageHero';

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <PageHero 
        title="Privacy Policy"
        subtitle="🔒 Privacy"
        description={`Last updated: ${new Date().toLocaleDateString()}`}
      />
      <main className="min-h-screen pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">

            <div className="glass rounded-2xl p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  We collect information necessary to provide our software services:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Account information (name, email, password)</li>
                  <li>Subscription and billing data</li>
                  <li>Software usage and performance metrics</li>
                  <li>Communication preferences and support history</li>
                  <li>Device and browser information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Information</h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  Your information is used to:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Provide and maintain software services</li>
                  <li>Process subscriptions and payments</li>
                  <li>Send service updates and communications</li>
                  <li>Improve software performance and features</li>
                  <li>Provide customer support</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                <p className="text-gray-400 leading-relaxed">
                  We implement industry-standard security measures including 256-bit encryption, secure API connections, 
                  and regular security audits. However, no system is completely secure, and we cannot guarantee absolute 
                  security of your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Exchange API Keys</h2>
                <p className="text-gray-400 leading-relaxed">
                  For software functionality, users may provide API keys to cryptocurrency exchanges. We recommend using 
                  API keys with trading permissions only (no withdrawal permissions). API keys are encrypted and stored 
                  securely. We never request or store withdrawal permissions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services</h2>
                <p className="text-gray-400 leading-relaxed">
                  Our software integrates with third-party services including payment processors and cryptocurrency exchanges. 
                  These services have their own privacy policies. We are not responsible for their data practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h2>
                <p className="text-gray-400 leading-relaxed">
                  We use cookies and similar technologies for authentication, preferences, and analytics. Users can manage 
                  cookie preferences through their browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
                <p className="text-gray-400 leading-relaxed">
                  We retain user data for as long as accounts are active and as required for legal and business purposes. 
                  Users may request account deletion, after which data is removed within 30 days, subject to legal retention 
                  requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. User Rights</h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  Users have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Access their personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request data deletion</li>
                  <li>Export their data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Children&apos;s Privacy</h2>
                <p className="text-gray-400 leading-relaxed">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect 
                  information from children.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Policy Changes</h2>
                <p className="text-gray-400 leading-relaxed">
                  We may update this privacy policy periodically. Material changes will be communicated via email or 
                  platform notification. Continued use after changes constitutes acceptance.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Contact</h2>
                <p className="text-gray-400 leading-relaxed">
                  For privacy-related questions or requests, contact us at privacy@aiprofitgen.com.
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
