export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose Software',
      description: 'Select the automated income tool that matches your financial strategy and risk tolerance.',
      icon: '🎯',
    },
    {
      number: '02',
      title: 'Subscribe to Plan',
      description: 'Pick a subscription tier that fits your needs. Start with basic or unlock advanced features with premium plans.',
      icon: '💳',
    },
    {
      number: '03',
      title: 'Activate Automation',
      description: 'Configure your preferences and let the AI-powered system handle the rest. Monitor performance from your dashboard.',
      icon: '⚙️',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get started with automated income generation in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent z-0"></div>
              )}
              
              <div className="glass glass-hover rounded-2xl p-8 text-center relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-900 mb-6 text-4xl animate-float">
                  {step.icon}
                </div>
                
                <div className="text-6xl font-bold gradient-text mb-4">
                  {step.number}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
