'use client';

import { useState, useEffect } from 'react';

export default function TrustProof() {
  const [transactions, setTransactions] = useState([
    {
      type: 'Transaction',
      hash: '0x7f9fade1c0...b11a91385',
      amount: '$1,247.50',
      status: 'Confirmed',
    },
    {
      type: 'Transaction',
      hash: '0x3c7e9fade1...7b11a91',
      amount: '$892.30',
      status: 'Confirmed',
    },
    {
      type: 'Transaction',
      hash: '0x9a2fade1c0...2eb7b11a91385',
      amount: '$2,156.80',
      status: 'Confirmed',
    },
  ]);

  const [userEarnings, setUserEarnings] = useState([
    { user: 'Cashflow Tools User', amount: '+$1,845.20', period: '2 hours ago' },
    { user: 'USDTRex Pro User', amount: '+$3,294.50', period: '5 hours ago' },
    { user: 'Ethercraft Pro User', amount: '+$987.40', period: '1 hour ago' },
    { user: 'AiProfitgen X User', amount: '+$2,621.90', period: '3 hours ago' },
  ]);

  useEffect(() => {
    const transactionInterval = setInterval(() => {
      const randomAmount = (Math.random() * 5000 + 200).toFixed(2);
      const randomHash = '0x' + Math.random().toString(36).substring(2, 12) + '...' + Math.random().toString(36).substring(2, 12);
      
      setTransactions(prev => {
        const newTransactions = [...prev];
        newTransactions[Math.floor(Math.random() * 3)] = {
          type: 'Transaction',
          hash: randomHash,
          amount: `$${randomAmount}`,
          status: 'Confirmed',
        };
        return newTransactions;
      });
    }, 8000);

    const earningsInterval = setInterval(() => {
      const softwareNames = [
        'Cashflow Tools User',
        'USDTRex Pro User',
        'Ethercraft Pro User',
        'Banking BotNet User',
        'Arbitrage Trading User',
        'AiProfitgen X User',
      ];
      
      const randomAmount = (Math.random() * 99800 + 200).toFixed(2);
      const hoursAgo = Math.floor(Math.random() * 12) + 1;
      const period = hoursAgo === 1 ? '1 hour ago' : `${hoursAgo} hours ago`;
      
      setUserEarnings(prev => {
        const newEarnings = [...prev];
        newEarnings[Math.floor(Math.random() * 4)] = {
          user: softwareNames[Math.floor(Math.random() * softwareNames.length)],
          amount: `+$${randomAmount}`,
          period: period,
        };
        return newEarnings;
      });
    }, 6000);

    return () => {
      clearInterval(transactionInterval);
      clearInterval(earningsInterval);
    };
  }, []);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Verified Activity
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transparent transaction verification and user activity tracking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Recent Transactions</h3>
            <div className="space-y-4">
              {transactions.map((proof, index) => (
                <div key={index} className="glass glass-hover rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-sm text-gray-400">{proof.type}</span>
                    </div>
                    <span className="text-green-400 font-semibold">{proof.status}</span>
                  </div>
                  <div className="font-mono text-xs text-gray-500 mb-3 break-all">
                    {proof.hash}
                  </div>
                  <div className="text-2xl font-bold text-white">{proof.amount}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">User Performance</h3>
            <div className="space-y-4">
              {userEarnings.map((earning, index) => (
                <div key={index} className="glass glass-hover rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">{earning.user}</span>
                    <span className="text-sm text-gray-500">{earning.period}</span>
                  </div>
                  <div className="text-2xl font-bold text-green-400">{earning.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">256-bit</div>
              <div className="text-gray-400">Encryption</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Security Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Transaction Verification</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Transaction hashes and user IDs are anonymized for privacy. 
            Displayed amounts are for demonstration purposes and do not represent guaranteed earnings.
          </p>
        </div>
      </div>
    </section>
  );
}
