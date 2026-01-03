'use client';

import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';
import Button from '../ui/Button';
import TestimonialCard from '../ui/TestimonialCard';
import { useState } from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface SoftwarePageProps {
  name: string;
  tagline: string;
  description: string;
  icon: string;
  features: Feature[];
  videoUrl?: string;
  gallery: string[];
  pricing: PricingPlan[];
  testimonials: Testimonial[];
}

export default function SoftwarePageTemplate({
  name,
  tagline,
  description,
  icon,
  features,
  videoUrl,
  gallery,
  pricing,
  testimonials,
}: SoftwarePageProps) {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-900 mb-6 text-5xl animate-float">
                {icon}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {name}
              </h1>
              <p className="text-2xl text-purple-300 mb-6">{tagline}</p>
              <p className="text-xl text-gray-400 mb-10">{description}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button href="/signup" variant="primary" size="lg">
                  Buy Software
                </Button>
                <Button href="/signup" variant="outline" size="lg">
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="glass glass-hover rounded-xl p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {videoUrl && (
          <section className="py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-4xl font-bold text-white text-center mb-16">Software Demo</h2>
              <div className="max-w-4xl mx-auto">
                <div className="glass rounded-2xl p-4 aspect-video">
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎥</div>
                      <p className="text-gray-400">Video Showcase Area</p>
                      <p className="text-sm text-gray-500 mt-2">Demo video integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-16">Software Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {gallery.map((item, index) => (
                <div key={index} className="glass glass-hover rounded-xl overflow-hidden aspect-video">
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-cyan-900/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📊</div>
                      <p className="text-gray-400 text-sm">{item}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Pricing Plans</h2>
              <div className="inline-flex glass rounded-full p-1">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2 rounded-full transition-all ${
                    billingPeriod === 'monthly'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-6 py-2 rounded-full transition-all ${
                    billingPeriod === 'yearly'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`glass rounded-2xl p-8 ${
                    plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="inline-block px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-semibold mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/signup" variant={plan.popular ? 'primary' : 'outline'} className="w-full">
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-16">User Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="glass rounded-3xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Choose a plan and activate your automated income system today
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button href="/signup" variant="primary" size="lg">
                  Buy Software
                </Button>
                <Button href="/signup" variant="outline" size="lg">
                  Create Account
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-8">
                Software-based automation. Results vary. Trading involves risk.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
