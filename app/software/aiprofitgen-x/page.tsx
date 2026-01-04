import SoftwarePageTemplate from '@/components/sections/SoftwarePageTemplate';

export default function AiProfitgenXPage() {
  return (
    <SoftwarePageTemplate
      name="AiProfitgen X"
      tagline="Premium All-In-One Platform"
      description="Premium all-in-one automated income platform combining multiple strategies with advanced AI decision-making, comprehensive automation, and institutional-grade features."
      icon="🚀"
      features={[
        {
          title: 'Unified Platform',
          description: 'All automation tools integrated into one comprehensive system',
          icon: '🎯',
        },
        {
          title: 'Advanced AI',
          description: 'Next-generation AI with adaptive learning and strategy optimization',
          icon: '🧠',
        },
        {
          title: 'Multi-Strategy',
          description: 'Combine arbitrage, trading, and cash flow automation simultaneously',
          icon: '🔀',
        },
        {
          title: 'Premium Support',
          description: 'Dedicated account management and 24/7 priority assistance',
          icon: '👥',
        },
      ]}
      videos={[
        { url: 'https://youtu.be/nTS6EBxHGYY', title: 'BTC Trading' },
        { url: 'https://youtu.be/qNbyjr2_wEE', title: 'LTC Trading' },
        { url: 'https://youtu.be/nJ5RkY9CS2E', title: 'ETH Trading' },
        { url: 'https://youtu.be/LgfvlYdHnas', title: 'USDT Trading' },
      ]}
      gallery={[
        'Unified Dashboard',
        'AI Control Center',
        'Strategy Manager',
        'Portfolio View',
        'Performance Analytics',
        'Risk Management',
      ]}
      pricing={[
        {
          name: 'Professional',
          price: '$249',
          period: 'month',
          features: [
            'All basic features',
            'Multi-strategy automation',
            'Advanced AI engine',
            'Priority support',
            'Advanced analytics',
            'Custom configurations',
          ],
        },
        {
          name: 'Elite',
          price: '$499',
          period: 'month',
          popular: true,
          features: [
            'Everything in Professional',
            'Maximum automation',
            'Premium AI algorithms',
            'Dedicated manager',
            'Custom development',
            'White-label options',
            'API access',
            'SLA guarantee',
          ],
        },
        {
          name: 'Institutional',
          price: '$999',
          period: 'month',
          features: [
            'Everything in Elite',
            'Institutional features',
            'Custom infrastructure',
            '24/7 phone support',
            'On-premise deployment',
            'Unlimited customization',
            'Full source access',
            'Enterprise SLA',
          ],
        },
      ]}
      testimonials={[
        {
          name: 'Jonathan S.',
          role: 'Professional Trader',
          content: 'The ultimate automation platform. Combines everything I need in one powerful system.',
          rating: 5,
        },
        {
          name: 'Victoria H.',
          role: 'Investment Manager',
          content: 'Premium features with institutional-grade reliability. The AI is truly advanced.',
          rating: 5,
        },
        {
          name: 'Marcus P.',
          role: 'Hedge Fund Manager',
          content: 'Comprehensive solution for automated trading. The multi-strategy approach is excellent.',
          rating: 5,
        },
      ]}
    />
  );
}
