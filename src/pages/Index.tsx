import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AppSection from '@/components/AppSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--vd-dark)' }}>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <AppSection />
      <PricingSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
