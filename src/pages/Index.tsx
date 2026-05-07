import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DemoSection from '@/components/DemoSection';
import AppSection from '@/components/AppSection';
import GrowthSection from '@/components/GrowthSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--vd-dark)' }}>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <AppSection />
      <GrowthSection />
      <PricingSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}