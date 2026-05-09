import NavBar from '@/components/NavBar';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

export default function Contact() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--vd-dark)' }}>
      <NavBar />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
