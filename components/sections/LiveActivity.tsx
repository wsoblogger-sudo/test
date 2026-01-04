'use client';

import { useState, useEffect } from 'react';

export default function LiveActivity() {
  const [recentActivities, setRecentActivities] = useState([
    { country: '🇺🇸', action: 'New trade executed', amount: '$2,450', time: '2s ago' },
    { country: '🇬🇧', action: 'Arbitrage detected', amount: '$1,850', time: '5s ago' },
    { country: '🇩🇪', action: 'Position opened', amount: '$3,200', time: '8s ago' },
  ]);

  const countries = ['🇺🇸', '🇬🇧', '🇨🇦', '🇩🇪', '🇦🇺', '🇯🇵', '🇸🇬', '🇦🇪', '🇫🇷', '🇮🇹'];
  const actions = [
    'New trade executed',
    'Arbitrage detected',
    'Position opened',
    'Profit captured',
    'Order filled',
    'Strategy activated',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      const randomAmount = (Math.random() * 5000 + 500).toFixed(0);

      const newActivity = {
        country: randomCountry,
        action: randomAction,
        amount: `$${Number(randomAmount).toLocaleString()}`,
        time: 'Just now',
      };

      setRecentActivities(prev => [newActivity, ...prev.slice(0, 2)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Live Global Activity
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-time activity from users around the world
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Recent Activity</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm text-gray-400">Live</span>
              </div>
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all animate-fade-in"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{activity.country}</div>
                    <div>
                      <div className="text-white font-medium">{activity.action}</div>
                      <div className="text-xs text-gray-400">{activity.time}</div>
                    </div>
                  </div>
                  <div className="text-green-400 font-bold">{activity.amount}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="glass rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">🌍</div>
              <div className="text-2xl font-bold text-white">120+</div>
              <div className="text-xs text-gray-400">Countries</div>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-gray-400">Operations</div>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">🔒</div>
              <div className="text-2xl font-bold text-white">256-bit</div>
              <div className="text-xs text-gray-400">Encryption</div>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">⚙️</div>
              <div className="text-2xl font-bold text-white">99.99%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
