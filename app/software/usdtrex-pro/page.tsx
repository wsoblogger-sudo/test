import SoftwarePageTemplate from '@/components/sections/SoftwarePageTemplate';

export default function USDTRexProPage() {
  return (
    <SoftwarePageTemplate
      name="USDTRex Pro"
      tagline="USDT Arbitrage Automation"
      description="Sophisticated USDT arbitrage automation with intelligent market scanning, price difference detection, and risk-managed execution protocols across multiple exchanges."
      icon="💎"
      image="https://aiprofitgen.com/assets/images/usdtrex-pro-760x482.png"
      features={[
        {
          title: 'Market Scanning',
          description: 'Real-time scanning of multiple exchanges for arbitrage opportunities',
          icon: '🔍',
        },
        {
          title: 'Auto Execution',
          description: 'Automated trade execution with optimal timing and routing',
          icon: '⚡',
        },
        {
          title: 'Risk Controls',
          description: 'Multi-layer risk management with stop-loss and position limits',
          icon: '🛡️',
        },
        {
          title: 'Exchange Integration',
          description: 'Seamless connection to major cryptocurrency exchanges',
          icon: '🔗',
        },
      ]}
      videos={[
        { url: 'https://youtu.be/QlTgIO-IKRU', title: 'USDTRex Pro Demo' },
      ]}
      gallery={[
        'Arbitrage Dashboard',
        'Market Scanner',
        'Execution Panel',
        'Profit Tracking',
        'Exchange Connections',
        'Risk Settings',
      ]}
      pricing={[
        {
          name: 'Basic',
          price: '$79',
          period: 'month',
          features: [
            '2 exchange connections',
            'Basic arbitrage detection',
            'Standard execution speed',
            'Email alerts',
            'Basic analytics',
          ],
        },
        {
          name: 'Pro',
          price: '$149',
          period: 'month',
          popular: true,
          features: [
            '5 exchange connections',
            'Advanced arbitrage algorithms',
            'High-speed execution',
            'Real-time notifications',
            'Advanced analytics',
            'Custom strategies',
            'Priority support',
          ],
        },
        {
          name: 'Enterprise',
          price: '$299',
          period: 'month',
          features: [
            'Unlimited exchanges',
            'Premium algorithms',
            'Ultra-fast execution',
            'Dedicated support',
            'Custom development',
            'API access',
            'White-label solution',
          ],
        },
      ]}
      testimonials={[
        {
          name: 'Carlos M.',
          role: 'Crypto Trader',
          content: 'The arbitrage detection is fast and accurate. Excellent tool for USDT trading across exchanges.',
          rating: 5,
        },
        {
          name: 'Nina S.',
          role: 'Institutional Trader',
          content: 'Professional-grade software with reliable execution. The risk management features are comprehensive.',
          rating: 5,
        },
        {
          name: 'Tom B.',
          role: 'Day Trader',
          content: 'Great automation for arbitrage opportunities. Has improved my trading efficiency significantly.',
          rating: 5,
        },
      ]}
    />
  );
}
