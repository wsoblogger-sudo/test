'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { getUser, logout, User } from '@/lib/auth';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

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

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>;
  }

  const softwareList = [
    {
      name: 'Cashflow Tools',
      icon: '💰',
      description: 'AI-powered cash flow optimization',
      plans: [
        { name: 'Basic', price: '$49' },
        { name: 'Pro', price: '$99' },
        { name: 'Enterprise', price: '$199' }
      ],
      href: '/dashboard/software/cashflow-tools',
      widgetId: 'ijgrPfMEhG'
    },
    {
      name: 'USDTRex Pro',
      icon: '💎',
      description: 'USDT arbitrage automation',
      plans: [
        { name: 'Basic', price: '$79' },
        { name: 'Pro', price: '$149' },
        { name: 'Enterprise', price: '$299' }
      ],
      href: '/dashboard/software/usdtrex-pro',
      widgetId: 'usdtrex-widget'
    },
    {
      name: 'Ethercraft Pro',
      icon: '⚡',
      description: 'Ethereum trading automation',
      plans: [
        { name: 'Basic', price: '$69' },
        { name: 'Pro', price: '$139' },
        { name: 'Enterprise', price: '$279' }
      ],
      href: '/dashboard/software/ethercraft-pro',
      widgetId: 'ethercraft-widget'
    },
    {
      name: 'Banking BotNet',
      icon: '🏦',
      description: 'Enterprise banking automation',
      plans: [
        { name: 'Basic', price: '$89' },
        { name: 'Pro', price: '$179' },
        { name: 'Enterprise', price: '$349' }
      ],
      href: '/dashboard/software/banking-botnet',
      widgetId: 'banking-widget'
    },
    {
      name: 'Arbitrage Trading Robot',
      icon: '🤖',
      description: 'High-frequency arbitrage system',
      plans: [
        { name: 'Basic', price: '$99' },
        { name: 'Pro', price: '$199' },
        { name: 'Enterprise', price: '$399' }
      ],
      href: '/dashboard/software/arbitrage-trading-robot',
      widgetId: 'arbitrage-widget'
    },
    {
      name: 'AiProfitgen X',
      icon: '🚀',
      description: 'Premium all-in-one platform',
      plans: [
        { name: 'Professional', price: '$249' },
        { name: 'Elite', price: '$499' },
        { name: 'Institutional', price: '$999' }
      ],
      href: '/dashboard/software/aiprofitgen-x',
      widgetId: 'aiprofitgenx-widget'
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 flex justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Welcome, {user?.name}
              </h1>
              <p className="text-gray-400">Manage your software subscriptions</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>

          {/* User Info Card */}
          <div className="glass rounded-2xl p-6 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Account Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-medium">{user?.email}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Member Since</p>
                <p className="text-white font-medium">
                  {new Date(user?.createdAt || '').toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Active Subscriptions</p>
                <p className="text-white font-medium">{user?.purchases.length || 0}</p>
              </div>
            </div>
          </div>

          {/* Software List */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Available Software</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softwareList.map((software) => (
                <div key={software.name} className="glass glass-hover rounded-2xl p-6">
                  <div className="text-5xl mb-4">{software.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{software.name}</h3>
                  <p className="text-gray-400 mb-6">{software.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {software.plans.map((plan) => (
                      <div key={plan.name} className="flex justify-between items-center p-3 rounded-lg bg-gray-800/50">
                        <span className="text-white font-medium">{plan.name}</span>
                        <span className="text-purple-400 font-bold">{plan.price}/mo</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={software.href}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white rounded-lg font-semibold neon-glow transition-all"
                  >
                    Purchase Software
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Purchase History */}
          {user?.purchases && user.purchases.length > 0 && (
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-white mb-8">Purchase History</h2>
              <div className="glass rounded-2xl p-6">
                <div className="space-y-4">
                  {user.purchases.map((purchase, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50">
                      <div>
                        <h4 className="text-white font-medium">{purchase.softwareName}</h4>
                        <p className="text-sm text-gray-400">{purchase.plan} Plan</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold">{purchase.price}</p>
                        <p className="text-sm text-gray-400">
                          {new Date(purchase.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          purchase.status === 'completed' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {purchase.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
