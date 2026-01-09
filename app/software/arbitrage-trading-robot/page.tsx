import SoftwarePageTemplate from '@/components/sections/SoftwarePageTemplate';

export default function ArbitrageTradingRobotPage() {
  return (
    <SoftwarePageTemplate
      name="Arbitrage Trading Robot"
      tagline="High-Frequency Arbitrage System"
      description="High-frequency arbitrage detection and execution system with real-time market analysis, cross-exchange trading, and automated profit capture mechanisms."
      icon="🤖"
      image="https://aiprofitgen.com/assets/images/arbitrage-trading-596x388.png"
      features={[
        {
          title: 'Real-Time Detection',
          description: 'Millisecond-level arbitrage opportunity identification across markets',
          icon: '⚡',
        },
        {
          title: 'Fast Execution',
          description: 'High-speed automated trade execution with minimal slippage',
          icon: '🚀',
        },
        {
          title: 'Market Analysis',
          description: 'Continuous multi-market monitoring and price correlation analysis',
          icon: '📊',
        },
        {
          title: 'Profit Optimization',
          description: 'Intelligent algorithms maximize profit while managing execution costs',
          icon: '💰',
        },
      ]}
      videos={[
        { url: 'https://youtu.be/9TEu9w_zD3w', title: 'Arbitrage Trading Robot Demo' },
      ]}
      gallery={[
        'Trading Dashboard',
        'Arbitrage Scanner',
        'Execution Console',
        'Market Monitor',
        'Profit Tracker',
        'Strategy Settings',
      ]}
      pricing={[
        {
          name: 'Basic',
          price: '$99',
          period: 'month',
          features: [
            'Basic arbitrage detection',
            '3 exchange connections',
            'Standard execution speed',
            'Email notifications',
            'Basic reporting',
          ],
        },
        {
          name: 'Pro',
          price: '$199',
          period: 'month',
          popular: true,
          features: [
            'Advanced algorithms',
            '10 exchange connections',
            'High-speed execution',
            'Real-time alerts',
            'Advanced analytics',
            'Custom strategies',
            'Priority support',
          ],
        },
        {
          name: 'Enterprise',
          price: '$399',
          period: 'month',
          features: [
            'Premium algorithms',
            'Unlimited exchanges',
            'Ultra-fast execution',
            'Institutional features',
            'Dedicated support',
            'Custom development',
            'API access',
          ],
        },
      ]}
      testimonials={[
        {
          name: 'Daniel F.',
          role: 'Arbitrage Trader',
          content: 'The fastest arbitrage detection I have experienced. Execution speed is excellent.',
          rating: 5,
        },
        {
          name: 'Olivia M.',
          role: 'Quantitative Trader',
          content: 'Professional-grade arbitrage system with solid algorithms and reliable execution.',
          rating: 5,
        },
        {
          name: 'Ryan K.',
          role: 'Crypto Investor',
          content: 'Great tool for capturing arbitrage opportunities across multiple exchanges.',
          rating: 4,
        },
      ]}
    />
  );
}
