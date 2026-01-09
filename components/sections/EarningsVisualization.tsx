'use client';

import { useState, useEffect } from 'react';
import StatCard from '../ui/StatCard';

export default function EarningsVisualization() {
  const [activeAutomations, setActiveAutomations] = useState(82538);
  const [totalTransactions, setTotalTransactions] = useState(2400000);

  useEffect(() => {
    const automationInterval = setInterval(() => {
      setActiveAutomations(prev => prev + 1);
    }, 5000);

    const transactionInterval = setInterval(() => {
      setTotalTransactions(prev => prev + Math.floor(Math.random() * 100) + 50);
    }, 3000);

    return () => {
      clearInterval(automationInterval);
      clearInterval(transactionInterval);
    };
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    return num.toLocaleString();
  };

  const allSoftware = [
    { name: 'Cashflow Tools', status: 'operational', uptime: '99.99%' },
    { name: 'USDTRex Pro', status: 'operational', uptime: '99.99%' },
    { name: 'Ethercraft Pro', status: 'operational', uptime: '99.99%' },
    { name: 'Banking BotNet', status: 'operational', uptime: '99.99%' },
    { name: 'Arbitrage Trading Robot', status: 'operational', uptime: '99.99%' },
    { name: 'AiProfitgen X', status: 'operational', uptime: '99.99%' },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Platform Performance
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-time metrics from our automated systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard 
            title="Active Software" 
            value={formatNumber(activeAutomations)} 
            trend="up"
            animated={false}
          />
          <StatCard 
            title="Total Transactions" 
            value={formatNumber(totalTransactions)} 
            suffix="+"
            trend="up"
            animated={false}
          />
          <StatCard 
            title="Average Efficiency" 
            value="94.2" 
            suffix="%"
            trend="up"
            animated 
          />
          <StatCard 
            title="Uptime" 
            value="99.99" 
            suffix="%"
            trend="neutral"
            animated 
          />
        </div>

        <div className="glass rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">System Activity</h3>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm text-gray-400">Live</span>
            </div>
          </div>

          <div className="space-y-4">
            {allSoftware.map((software) => (
              <div key={software.name} className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm text-white font-medium">{software.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-400">Uptime: {software.uptime}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400 font-semibold">
                    {software.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Metrics displayed are system performance indicators and do not represent individual user results. 
            Trading performance varies based on market conditions, strategy selection, and risk parameters.
          </p>
        </div>
      </div>
    </section>
  );
}
