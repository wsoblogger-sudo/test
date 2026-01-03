import SoftwareCard from '../ui/SoftwareCard';

export default function SoftwareEcosystem() {
  const software = [
    {
      name: 'Cashflow Tools',
      description: 'Advanced AI-powered cash flow optimization and automated revenue generation tools for consistent income streams.',
      icon: '💰',
      earnings: '+12.5%',
      href: '/software/cashflow-tools',
    },
    {
      name: 'USDTRex Pro',
      description: 'Sophisticated USDT arbitrage automation with intelligent market scanning and risk-managed execution protocols.',
      icon: '💎',
      earnings: '+18.2%',
      href: '/software/usdtrex-pro',
    },
    {
      name: 'Ethercraft Pro',
      description: 'Ethereum-focused trading automation featuring AI-driven strategy optimization and smart contract integration.',
      icon: '⚡',
      earnings: '+15.8%',
      href: '/software/ethercraft-pro',
    },
    {
      name: 'Banking BotNet',
      description: 'Enterprise-grade automated banking operations with multi-platform integration and secure transaction management.',
      icon: '🏦',
      earnings: '+10.4%',
      href: '/software/banking-botnet',
    },
    {
      name: 'Arbitrage Trading Robot',
      description: 'High-frequency arbitrage detection and execution system with real-time market analysis and automated trading.',
      icon: '🤖',
      earnings: '+22.7%',
      href: '/software/arbitrage-trading-robot',
    },
    {
      name: 'AiProfitgen X',
      description: 'Premium all-in-one automated income platform combining multiple strategies with advanced AI decision-making.',
      icon: '🚀',
      earnings: '+25.3%',
      href: '/software/aiprofitgen-x',
    },
  ];

  return (
    <section id="software" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Software Ecosystem
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional automated income tools powered by advanced AI technology. 
            Choose the software that aligns with your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {software.map((tool) => (
            <SoftwareCard key={tool.href} {...tool} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Performance indicators are based on historical software automation metrics. 
            Past performance does not guarantee future results. All trading involves risk.
          </p>
        </div>
      </div>
    </section>
  );
}
