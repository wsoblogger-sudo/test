import TestimonialCard from '../ui/TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Michael R.',
      role: 'Active Trader',
      content: 'The automation capabilities have significantly improved my trading efficiency. The software handles complex strategies while I focus on portfolio management.',
      rating: 5,
    },
    {
      name: 'Sarah K.',
      role: 'Crypto Investor',
      content: 'Professional-grade tools with excellent risk management features. The AI-driven approach gives me confidence in my automated trading operations.',
      rating: 5,
    },
    {
      name: 'David L.',
      role: 'Software Engineer',
      content: 'Impressed by the technical implementation and system reliability. The platform offers sophisticated automation with a user-friendly interface.',
      rating: 5,
    },
    {
      name: 'Jennifer M.',
      role: 'Financial Analyst',
      content: 'The analytics and reporting features are comprehensive. Having multiple automated tools in one ecosystem simplifies my workflow considerably.',
      rating: 5,
    },
    {
      name: 'Robert T.',
      role: 'Entrepreneur',
      content: 'Clean, professional platform with solid automation capabilities. The customer support team is responsive and knowledgeable about the software.',
      rating: 4,
    },
    {
      name: 'Amanda W.',
      role: 'Day Trader',
      content: 'The arbitrage detection system works efficiently. Real-time notifications and automated execution have streamlined my trading operations.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            User Feedback
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Verified testimonials from software users
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Testimonials represent individual user experiences with the software. 
            Results may vary based on usage, market conditions, and individual trading decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
