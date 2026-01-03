import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SoftwareEcosystem from '@/components/sections/SoftwareEcosystem';
import HowItWorks from '@/components/sections/HowItWorks';
import EarningsVisualization from '@/components/sections/EarningsVisualization';
import TrustProof from '@/components/sections/TrustProof';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <SoftwareEcosystem />
        <HowItWorks />
        <EarningsVisualization />
        <TrustProof />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
