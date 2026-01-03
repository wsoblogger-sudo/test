import SoftwarePageTemplate from '@/components/sections/SoftwarePageTemplate';

export default function EthercraftProPage() {
  return (
    <SoftwarePageTemplate
      name="Ethercraft Pro"
      tagline="Ethereum Trading Automation"
      description="Ethereum-focused trading automation featuring AI-driven strategy optimization, smart contract integration, and advanced technical analysis for ETH markets."
      icon="⚡"
      features={[
        {
          title: 'ETH Optimization',
          description: 'Specialized algorithms optimized for Ethereum trading patterns',
          icon: '🎯',
        },
        {
          title: 'Smart Contracts',
          description: 'Direct integration with Ethereum smart contract protocols',
          icon: '📜',
        },
        {
          title: 'Technical Analysis',
          description: 'Advanced charting and technical indicator automation',
          icon: '📈',
        },
        {
          title: 'Gas Optimization',
          description: 'Intelligent gas fee management for cost-effective transactions',
          icon: '⛽',
        },
      ]}
      videoUrl="/videos/ethercraft-pro-demo.mp4"
      gallery={[
        'ETH Dashboard',
        'Trading Interface',
        'Smart Contract Panel',
        'Analytics View',
        'Gas Monitor',
        'Strategy Builder',
      ]}
      pricing={[
        {
          name: 'Basic',
          price: '$69',
          period: 'month',
          features: [
            'Basic ETH trading',
            'Standard strategies',
            'Gas optimization',
            'Email support',
            'Basic analytics',
          ],
        },
        {
          name: 'Pro',
          price: '$139',
          period: 'month',
          popular: true,
          features: [
            'Advanced ETH strategies',
            'Smart contract integration',
            'Real-time analytics',
            'Custom indicators',
            'Priority execution',
            'Advanced risk controls',
            '24/7 support',
          ],
        },
        {
          name: 'Enterprise',
          price: '$279',
          period: 'month',
          features: [
            'Everything in Pro',
            'Custom smart contracts',
            'Institutional features',
            'Dedicated manager',
            'API development',
            'White-label options',
            'SLA guarantee',
          ],
        },
      ]}
      testimonials={[
        {
          name: 'Alex R.',
          role: 'ETH Trader',
          content: 'Best Ethereum trading automation I have used. The smart contract integration is seamless.',
          rating: 5,
        },
        {
          name: 'Sophie L.',
          role: 'DeFi Investor',
          content: 'Excellent tool for ETH trading with great gas optimization features. Very professional.',
          rating: 5,
        },
        {
          name: 'Mike D.',
          role: 'Crypto Analyst',
          content: 'Comprehensive Ethereum automation with solid technical analysis tools. Highly recommended.',
          rating: 4,
        },
      ]}
    />
  );
}
