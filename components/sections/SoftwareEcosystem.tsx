import SoftwareCard from '../ui/SoftwareCard';

export default function SoftwareEcosystem() {
  const software = [
    {
      name: 'Cashflow Tools',
      description: 'Advanced AI-powered cash flow optimization and automated revenue generation tools for consistent income streams.',
      icon: '💰',
      earnings: '+12.5%',
      href: '/software/cashflow-tools',
      image: 'https://aiprofitgen.com/assets/images/cashflow-758x476.jpg',
    },
    {
      name: 'USDTRex Pro',
      description: 'Sophisticated USDT arbitrage automation with intelligent market scanning and risk-managed execution protocols.',
      icon: '💎',
      earnings: '+18.2%',
      href: '/software/usdtrex-pro',
      image: 'https://aiprofitgen.com/assets/images/usdtrex-pro-760x482.png',
    },
    {
      name: 'Ethercraft Pro',
      description: 'Ethereum-focused trading automation featuring AI-driven strategy optimization and smart contract integration.',
      icon: '⚡',
      earnings: '+15.8%',
      href: '/software/ethercraft-pro',
      image: 'https://aiprofitgen.com/assets/images/ethercraft-pro-800x532.png',
    },
    {
      name: 'Banking BotNet',
      description: 'Enterprise-grade automated banking operations with multi-platform integration and secure transaction management.',
      icon: '🏦',
      earnings: '+10.4%',
      href: '/software/banking-botnet',
      image: 'https://aiprofitgen.com/assets/images/banking-botnet-596x388.png',
    },
    {
      name: 'Arbitrage Trading Robot',
      description: 'High-frequency arbitrage detection and execution system with real-time market analysis and automated trading.',
      icon: '🤖',
      earnings: '+22.7%',
      href: '/software/arbitrage-trading-robot',
      image: 'https://aiprofitgen.com/assets/images/arbitrage-trading-596x388.png',
    },
    {
      name: 'AiProfitgen X',
      description: 'Premium all-in-one automated income platform combining multiple strategies with advanced AI decision-making.',
      icon: '🚀',
      earnings: '+25.3%',
      href: '/software/aiprofitgen-x',
      image: 'https://aiprofitgen.com/assets/images/aiprofitgen-x-preview-min.png-816x511.png',
    },
  ];

  return (
    <section id="software" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Softwares
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
