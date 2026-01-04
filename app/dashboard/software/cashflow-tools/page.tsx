'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { getUser, User } from '@/lib/auth';
import Script from 'next/script';

export default function CashflowToolsPurchasePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('Pro');

  useEffect(() => {
    const currentUser = getUser();
    if (!currentUser) {
      router.push('/login');
      return;
    }
    
    // Using a microtask to avoid setState in effect warning
    Promise.resolve().then(() => {
      setUser(currentUser);
      setLoading(false);
    });
  }, [router]);

  const plans = [
    {
      name: 'Basic',
      price: '$49',
      period: 'month',
      features: [
        'Core automation features',
        'Basic analytics dashboard',
        'Email support',
        'Up to 10 automated tasks',
        'Standard risk controls',
      ],
    },
    {
      name: 'Pro',
      price: '$99',
      period: 'month',
      popular: true,
      features: [
        'Advanced automation',
        'Full analytics suite',
        'Priority support',
        'Unlimited automated tasks',
        'Advanced risk management',
        'Custom strategies',
        'API access',
      ],
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: 'month',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations',
        'White-label options',
        'Advanced reporting',
        'SLA guarantee',
      ],
    },
  ];

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>;
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <button
              onClick={() => router.back()}
              className="text-purple-400 hover:text-purple-300 mb-4 flex items-center space-x-2"
            >
              <span>←</span>
              <span>Back to Dashboard</span>
            </button>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Purchase Cashflow Tools
            </h1>
            <p className="text-gray-400">Select your plan and complete the payment</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`glass rounded-2xl p-8 relative ${
                  plan.popular ? 'border-2 border-purple-500' : ''
                } ${
                  selectedPlan === plan.name ? 'ring-2 ring-purple-400' : ''
                }`}
                onClick={() => setSelectedPlan(plan.name)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-800 px-4 py-1 rounded-full text-white text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-1">{plan.price}</div>
                  <div className="text-gray-400 text-sm">per {plan.period}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedPlan === plan.name
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Complete Your Purchase</h2>
              
              <div className="mb-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <p className="text-white font-medium mb-2">Selected Plan: {selectedPlan}</p>
                <p className="text-gray-400 text-sm">
                  After completing payment, you will receive software access details via email within 24 hours.
                </p>
              </div>

              {/* Coinremitter Payment Widget */}
              <div id="cr-widget" className="min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
                  <p className="text-gray-400">Loading Payment Gateway...</p>
                </div>
              </div>

              <Script
                id="coinremitter-pricing-widget"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    const crWidget = document.createElement("script");
                    (function() {
                      var s0 = document.getElementsByTagName("script")[0];
                      crWidget.src = 'https://widget.coinremitter.com/pricing/js/ijgrPfMEhG/checkout.js';
                      crWidget.charset = 'UTF-8';
                      crWidget.setAttribute('crossorigin', '*');

                      crWidget.onload = function() {
                        document.getElementById('cr-widget').innerText = "";
                      };

                      crWidget.onerror = function() {
                        document.getElementById('cr-widget').innerText = "Failed to load Payment Gateway. Please refresh the page.";
                      };

                      s0.parentNode.insertBefore(crWidget, s0);
                    })();
                  `,
                }}
              />

              <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                <h3 className="text-white font-semibold mb-2">📧 Important Notice</h3>
                <p className="text-gray-400 text-sm">
                  Once payment is confirmed, our team will process your order and send the software access credentials 
                  to <span className="text-purple-400 font-medium">{user?.email}</span> within 24 hours.
                </p>
              </div>

              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <h3 className="text-blue-400 font-semibold mb-2">🔒 Secure Payment</h3>
                <p className="text-gray-400 text-sm">
                  All transactions are secured with 256-bit encryption. We accept major cryptocurrencies through Coinremitter.
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
