import NavBar from '@/components/NavBar';
import HeroWithApp from '@/components/HeroWithApp';
import TrustStrip from '@/components/TrustStrip';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import FooterSection from '@/components/FooterSection';

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--vd-dark)' }}>
      <NavBar />
      <HeroWithApp />
      <TrustStrip />
      <PricingSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
