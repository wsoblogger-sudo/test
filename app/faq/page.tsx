import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import FAQAccordion from '@/components/ui/FAQAccordion';
import PageHero from '@/components/sections/PageHero';

export default function FAQPage() {
  const faqs = [
    {
      question: 'What is AIPROFITGEN?',
      answer: 'AIPROFITGEN is a professional software platform offering automated income generation tools powered by AI technology. We provide multiple software solutions for cryptocurrency trading, arbitrage, and financial automation.',
    },
    {
      question: 'How does the software work?',
      answer: 'Our software uses advanced algorithms and AI to automate various financial processes including trading, arbitrage detection, and cash flow optimization. Users select a software tool, configure their preferences, and the system operates autonomously based on those parameters.',
    },
    {
      question: 'Are profits guaranteed?',
      answer: 'No. We provide software tools for automation, but profits are never guaranteed. All trading and cryptocurrency activities involve risk. Results vary based on market conditions, strategy selection, and individual usage. Users are responsible for their own decisions and outcomes.',
    },
    {
      question: 'What are the subscription costs?',
      answer: 'Each software tool has different pricing tiers (Basic, Pro, Enterprise) ranging from $49-$999 per month depending on the tool and features selected. Visit individual software pages for detailed pricing information.',
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, subscriptions can be canceled at any time from your account dashboard. Cancellations take effect at the end of your current billing period. No refunds are provided for partial months.',
    },
    {
      question: 'What exchanges are supported?',
      answer: 'Our software supports major cryptocurrency exchanges including Binance, Coinbase Pro, Kraken, Bitfinex, and others. Specific exchange availability varies by software tool and subscription tier.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. We use bank-grade 256-bit encryption, secure API connections, and industry-standard security protocols. We never store exchange withdrawal permissions and recommend using API keys with trading-only permissions.',
    },
    {
      question: 'Do I need trading experience?',
      answer: 'While our software is designed to automate trading processes, we recommend users have basic understanding of cryptocurrency markets and trading concepts. The software provides automation but requires informed configuration.',
    },
    {
      question: 'What kind of support is available?',
      answer: 'Support varies by subscription tier. Basic plans include email support, Pro plans offer priority support, and Enterprise plans include dedicated account management and 24/7 assistance.',
    },
    {
      question: 'Can I use multiple software tools?',
      answer: 'Yes, you can subscribe to multiple software tools simultaneously. Some users combine different tools for diversified automation strategies. Each tool requires a separate subscription.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'We offer demo accounts and limited trial access for select software tools. Contact our sales team for trial availability and requirements.',
    },
    {
      question: 'What are the system requirements?',
      answer: 'Our software is cloud-based and accessible through any modern web browser. No special hardware or software installation is required. A stable internet connection is recommended for optimal performance.',
    },
  ];

  return (
    <>
      <Navigation />
      <PageHero 
        title="Frequently Asked Questions"
        subtitle="❓ FAQ"
        description="Find answers to common questions about our software and services"
      />
      <main className="min-h-screen pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">

            <FAQAccordion items={faqs} />

            <div className="mt-16 glass rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
              <p className="text-gray-400 mb-6">
                Our support team is here to help you with any additional questions or concerns.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white rounded-lg font-semibold neon-glow transition-all"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
