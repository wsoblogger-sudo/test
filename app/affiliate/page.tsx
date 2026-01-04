import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import PageHero from '@/components/sections/PageHero';

export default function AffiliatePage() {
  return (
    <>
      <Navigation />
      <PageHero 
        title="Affiliate Program"
        subtitle="💰 Earn With Us"
        description="Earn commissions by referring users to AIPROFITGEN software"
      />
      <main className="min-h-screen pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">

            <div className="glass rounded-3xl p-12 mb-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20"></div>
              <div className="relative z-10">
                <div className="text-6xl font-bold gradient-text mb-4">30%</div>
                <p className="text-2xl text-white mb-2">Recurring Commission</p>
                <p className="text-gray-400">Earn on every subscription payment from your referrals</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="glass rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center mx-auto mb-4 text-3xl">
                  🔗
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Get Your Link</h3>
                <p className="text-gray-400">
                  Join the program and receive your unique affiliate tracking link instantly.
                </p>
              </div>

              <div className="glass rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center mx-auto mb-4 text-3xl">
                  📢
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Share & Promote</h3>
                <p className="text-gray-400">
                  Promote AIPROFITGEN software to your audience using your affiliate link.
                </p>
              </div>

              <div className="glass rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center mx-auto mb-4 text-3xl">
                  💰
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Earn Commissions</h3>
                <p className="text-gray-400">
                  Receive 30% recurring commissions on all subscription payments from your referrals.
                </p>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Commission Structure</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-purple-500/10 rounded-lg">
                  <div>
                    <h4 className="text-lg font-semibold text-white">All Software Tools</h4>
                    <p className="text-sm text-gray-400">Cashflow, USDTRex, Ethercraft, Banking BotNet, Arbitrage, AiProfitgen X</p>
                  </div>
                  <div className="text-2xl font-bold text-green-400">30%</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-500/10 rounded-lg">
                  <div>
                    <h4 className="text-lg font-semibold text-white">Recurring Payment</h4>
                    <p className="text-sm text-gray-400">Earn on every monthly/yearly subscription payment</p>
                  </div>
                  <div className="text-2xl font-bold text-green-400">✓</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-500/10 rounded-lg">
                  <div>
                    <h4 className="text-lg font-semibold text-white">Cookie Duration</h4>
                    <p className="text-sm text-gray-400">Tracking period for referred visitors</p>
                  </div>
                  <div className="text-2xl font-bold text-purple-400">60 Days</div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Program Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">AI-Powered Tracking</h4>
                    <p className="text-gray-400 text-sm">Advanced tracking system with real-time reporting</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Marketing Materials</h4>
                    <p className="text-gray-400 text-sm">Professional banners, landing pages, and promotional content</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Monthly Payouts</h4>
                    <p className="text-gray-400 text-sm">Reliable monthly payments via multiple methods</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Dedicated Support</h4>
                    <p className="text-gray-400 text-sm">Affiliate manager assistance and optimization guidance</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Performance Bonuses</h4>
                    <p className="text-gray-400 text-sm">Additional rewards for top-performing affiliates</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">No Referral Limits</h4>
                    <p className="text-gray-400 text-sm">Unlimited earning potential with no caps</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Earning?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Join our affiliate program today and start earning 30% recurring commissions
              </p>
              <Button href="/signup" variant="primary" size="lg">
                Join Affiliate Program
              </Button>
              <p className="text-sm text-gray-500 mt-6">
                Affiliate program subject to terms and conditions. Minimum payout threshold applies.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
