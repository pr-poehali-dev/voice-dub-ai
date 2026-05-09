import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DemoSection from '@/components/DemoSection';
import AppSection from '@/components/AppSection';
import GrowthSection from '@/components/GrowthSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import FaqSection from '@/components/FaqSection';
import FooterSection from '@/components/FooterSection';
import MobileStickyCTA from '@/components/MobileStickyCTA';

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--vd-dark)' }}>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <AppSection />
      <GrowthSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <FaqSection />
      <FooterSection />
      <MobileStickyCTA />
    </div>
  );
}
