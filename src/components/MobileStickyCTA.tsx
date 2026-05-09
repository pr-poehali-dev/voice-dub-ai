import { useEffect, useState } from 'react';

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const appEl = document.querySelector('#app');

    const update = () => {
      const scrolled = window.scrollY > 200;
      let appInView = false;
      if (appEl) {
        const rect = appEl.getBoundingClientRect();
        appInView = rect.top < window.innerHeight && rect.bottom > 0;
      }
      setVisible(scrolled && !appInView);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const handleClick = () => {
    document.querySelector('#app')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 py-3 transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
      style={{
        background: 'rgba(8,8,8,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <button
        onClick={handleClick}
        className="btn-grad w-full py-3.5 rounded-2xl font-syne font-700 text-[#080808] text-base"
      >
        🎙 Попробовать бесплатно
      </button>
    </div>
  );
}
