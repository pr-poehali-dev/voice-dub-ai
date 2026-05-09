import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/10 py-3' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg btn-grad flex items-center justify-center">
            <Icon name="Mic" size={16} className="text-white" />
          </div>
          <span className="font-syne font-800 text-base sm:text-lg text-white tracking-tight">
            VoiceDub<span className="grad-text">Ru</span> AI
          </span>
        </a>

        {/* Quiet contact link */}
        <a
          href="/contact"
          className="text-white/50 hover:text-white text-sm font-golos transition-colors"
        >
          Написать нам
        </a>
      </div>
    </header>
  );
}
