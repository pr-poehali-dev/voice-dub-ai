import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const NAV_LINKS = [
  { label: 'Главная', href: '#home' },
  { label: 'Приложение', href: '#app' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'Контакты', href: '#contacts' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/10 py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNav('#home')}>
          <div className="w-8 h-8 rounded-lg btn-grad flex items-center justify-center">
            <Icon name="Mic" size={16} className="text-white" />
          </div>
          <span className="font-syne font-800 text-lg text-white tracking-tight">
            Voice<span className="grad-text">Dub</span> AI
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-white/70 hover:text-white text-sm font-golos font-500 transition-colors duration-200 hover:grad-text"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-white/70 hover:text-white text-sm font-golos transition-colors">
            Войти
          </button>
          <button className="btn-grad px-5 py-2 rounded-full text-sm font-syne font-600 text-white">
            Попробовать бесплатно
          </button>
        </div>

        {/* Burger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-white/80 hover:text-white text-left font-golos text-base py-1"
            >
              {link.label}
            </button>
          ))}
          <button className="btn-grad px-5 py-3 rounded-full text-sm font-syne font-600 text-white mt-2">
            Попробовать бесплатно
          </button>
        </div>
      )}
    </header>
  );
}
