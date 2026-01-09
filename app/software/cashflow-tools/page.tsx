import SoftwarePageTemplate from '@/components/sections/SoftwarePageTemplate';

export default function CashflowToolsPage() {
  return (
    <SoftwarePageTemplate
      name="Cashflow Tools"
      tagline="Advanced Cash Flow Optimization"
      description="AI-powered cash flow optimization and automated revenue generation tools designed for consistent income streams and financial automation."
      icon="💰"
      image="https://aiprofitgen.com/assets/images/cashflow-758x476.jpg"
      features={[
        {
          title: 'AI Automation',
          description: 'Intelligent algorithms analyze and optimize cash flow patterns in real-time',
          icon: '🤖',
        },
        {
          title: 'Risk Management',
          description: 'Built-in risk controls and automated safety protocols',
          icon: '🛡️',
        },
        {
          title: 'Performance Tracking',
          description: 'Comprehensive analytics and detailed performance metrics',
          icon: '📊',
        },
        {
          title: 'Hands-Free Operation',
          description: 'Fully automated system requiring minimal user intervention',
          icon: '⚙️',
        },
      ]}
      videos={[
        { url: 'https://youtu.be/J4sTdSfK2i0', title: 'Cashflow BTC' },
        { url: 'https://youtu.be/8eysHxdN_gs', title: 'Cashflow PayPal' },
        { url: 'https://youtu.be/vNGK6HDN618', title: 'Cashflow Payeer' },
        { url: 'https://youtu.be/cbDYUjtTnik', title: 'Cashflow Western Union' },
        { url: 'https://youtu.be/dv9aq8VBlns', title: 'Cashflow Credit Card' },
      ]}
      gallery={[
        'Dashboard Overview',
        'Analytics Panel',
        'Automation Settings',
        'Performance Metrics',
        'Transaction History',
        'Risk Controls',
      ]}
      pricing={[
        {
          name: 'Basic',
          price: '$49',
          period: 'month',
          features: [
            'Core automation features',
            'Basic analytics dashboard',
            'Email support',
            'Up to 10 automated tasks',
            'Standard risk controls',
          ],
        },
        {
          name: 'Pro',
          price: '$99',
          period: 'month',
          popular: true,
          features: [
            'Advanced automation',
            'Full analytics suite',
            'Priority support',
            'Unlimited automated tasks',
            'Advanced risk management',
            'Custom strategies',
            'API access',
          ],
        },
        {
          name: 'Enterprise',
          price: '$199',
          period: 'month',
          features: [
            'Everything in Pro',
            'Dedicated account manager',
            '24/7 phone support',
            'Custom integrations',
            'White-label options',
            'Advanced reporting',
            'SLA guarantee',
          ],
        },
      ]}
      testimonials={[
        {
          name: 'Mark H.',
          role: 'Business Owner',
          content: 'The cash flow automation has streamlined my operations significantly. Professional tools with excellent results.',
          rating: 5,
        },
        {
          name: 'Lisa P.',
          role: 'Investor',
          content: 'Reliable automation with solid risk management features. The analytics help me make better decisions.',
          rating: 5,
        },
        {
          name: 'James K.',
          role: 'Trader',
          content: 'Great software for managing multiple revenue streams. The AI optimization is impressive.',
          rating: 4,
        },
      ]}
    />
  );
}
