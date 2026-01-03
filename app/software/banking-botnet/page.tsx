import SoftwarePageTemplate from '@/components/sections/SoftwarePageTemplate';

export default function BankingBotNetPage() {
  return (
    <SoftwarePageTemplate
      name="Banking BotNet"
      tagline="Enterprise Banking Automation"
      description="Enterprise-grade automated banking operations with multi-platform integration, secure transaction management, and intelligent financial workflow automation."
      icon="🏦"
      features={[
        {
          title: 'Multi-Platform',
          description: 'Integration with multiple banking and financial platforms',
          icon: '🌐',
        },
        {
          title: 'Secure Transactions',
          description: 'Bank-grade security with encrypted transaction processing',
          icon: '🔒',
        },
        {
          title: 'Workflow Automation',
          description: 'Automated financial workflows and business process management',
          icon: '🔄',
        },
        {
          title: 'Compliance',
          description: 'Built-in compliance monitoring and regulatory reporting',
          icon: '✅',
        },
      ]}
      videoUrl="/videos/banking-botnet-demo.mp4"
      gallery={[
        'Banking Dashboard',
        'Transaction Manager',
        'Security Panel',
        'Workflow Builder',
        'Compliance Monitor',
        'Reporting Suite',
      ]}
      pricing={[
        {
          name: 'Basic',
          price: '$89',
          period: 'month',
          features: [
            '1 banking integration',
            'Basic automation',
            'Standard security',
            'Email support',
            'Monthly reports',
          ],
        },
        {
          name: 'Pro',
          price: '$179',
          period: 'month',
          popular: true,
          features: [
            '3 banking integrations',
            'Advanced automation',
            'Enhanced security',
            'Custom workflows',
            'Real-time monitoring',
            'Priority support',
            'Advanced reporting',
          ],
        },
        {
          name: 'Enterprise',
          price: '$349',
          period: 'month',
          features: [
            'Unlimited integrations',
            'Custom development',
            'Maximum security',
            'Dedicated support',
            'SLA guarantee',
            'Compliance tools',
            'White-label solution',
          ],
        },
      ]}
      testimonials={[
        {
          name: 'Patricia G.',
          role: 'CFO',
          content: 'Streamlined our banking operations significantly. The security features give us confidence.',
          rating: 5,
        },
        {
          name: 'Richard W.',
          role: 'Finance Manager',
          content: 'Professional banking automation with excellent compliance tools. Worth the investment.',
          rating: 5,
        },
        {
          name: 'Emma J.',
          role: 'Business Owner',
          content: 'The multi-platform integration saves hours of manual work. Great automation software.',
          rating: 5,
        },
      ]}
    />
  );
}
