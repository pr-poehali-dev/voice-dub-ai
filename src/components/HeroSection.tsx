import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const WAVE_BARS = Array.from({ length: 40 });
const WAVE_HEIGHTS = WAVE_BARS.map((_, i) => 20 + Math.sin(i * 0.4) * 30 + Math.random() * 20);
const WAVE_OPACITIES = WAVE_BARS.map((_, i) => 0.7 + Math.sin(i * 0.3) * 0.3);
const WAVE_DURATIONS = WAVE_BARS.map(() => 0.8 + Math.random() * 0.8);

const LANGS = [
  { flag: '🇬🇧', name: 'English' },
  { flag: '🇪🇸', name: 'Español' },
  { flag: '🇵🇹', name: 'Português' },
  { flag: '🇩🇪', name: 'Deutsch' },
  { flag: '🇫🇷', name: 'Français' },
];

export default function HeroSection() {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!waveRef.current) return;
    const bars = waveRef.current.querySelectorAll<HTMLElement>('.wave-bar');
    bars.forEach((bar, i) => {
      bar.style.animationDelay = `${(i * 0.07) % 1.2}s`;
      bar.style.animationDuration = `${WAVE_DURATIONS[i]}s`;
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'var(--vd-dark)' }}
    >
      {/* Mesh orbs */}
      <div className="mesh-bg">
        <div className="mesh-orb w-[600px] h-[600px]" style={{ top: '-150px', left: '-150px', background: 'var(--vd-cyan)', animationDelay: '0s' }} />
        <div className="mesh-orb w-[500px] h-[500px]" style={{ top: '200px', right: '-150px', background: 'var(--vd-pink)', animationDelay: '3s' }} />
        <div className="mesh-orb w-[350px] h-[350px]" style={{ bottom: '-80px', left: '35%', background: 'var(--vd-lemon)', animationDelay: '5s', opacity: 0.18 }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Headline */}
        <h1
          className="font-syne font-800 text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-white mb-6 animate-slide-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          Твой голос.
          <br />
          <span className="grad-text">Весь мир.</span>
        </h1>

        <p
          className="text-white/60 font-golos text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 animate-slide-up"
          style={{ animationDelay: '0.25s', opacity: 0 }}
        >
          Загрузи короткий ролик на русском — получи озвучку{' '}
          <span className="text-white font-500">твоим собственным голосом</span>{' '}
          на 5 языках. Идеально для Reels, Shorts и TikTok.
        </p>

        {/* Voice clone pill */}
        <div
          className="inline-flex items-center gap-3 rounded-2xl px-5 py-2.5 mb-8 animate-slide-up"
          style={{
            animationDelay: '0.35s',
            opacity: 0,
            background: 'rgba(0,229,204,0.08)',
            border: '1px solid rgba(0,229,204,0.22)',
          }}
        >
          <Icon name="Fingerprint" size={16} style={{ color: 'var(--vd-cyan)' }} />
          <span className="text-white/70 font-golos text-sm">
            <span className="text-white font-600">Клонирование голоса</span> — слушатели узнают тебя на любом языке
          </span>
        </div>

        {/* Language chips */}
        <div
          className="flex flex-wrap items-center justify-center gap-2.5 mb-10 animate-slide-up"
          style={{ animationDelay: '0.42s', opacity: 0 }}
        >
          <span className="text-white/30 font-golos text-sm mr-1">🇷🇺 Русский →</span>
          {LANGS.map((l) => (
            <div key={l.name} className="glass rounded-full px-3 py-1.5 flex items-center gap-1.5">
              <span className="text-base leading-none">{l.flag}</span>
              <span className="text-white/70 font-golos text-xs">{l.name}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up"
          style={{ animationDelay: '0.52s', opacity: 0 }}
        >
          <button
            className="btn-grad px-8 py-4 rounded-full font-syne font-700 text-[#080808] text-base flex items-center gap-2"
            onClick={() => document.querySelector('#app')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Mic" size={18} />
            Попробовать бесплатно
          </button>
          <button
            className="glass px-8 py-4 rounded-full font-golos text-white/80 hover:text-white text-base flex items-center gap-2 transition-all"
            onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="CreditCard" size={18} />
            Посмотреть тарифы
          </button>
        </div>

        {/* Wave visualizer */}
        <div
          ref={waveRef}
          className="flex items-center justify-center gap-[3px] h-16 animate-slide-up"
          style={{ animationDelay: '0.62s', opacity: 0 }}
        >
          {WAVE_BARS.map((_, i) => (
            <div
              key={i}
              className="wave-bar w-[3px] rounded-full"
              style={{
                height: `${WAVE_HEIGHTS[i]}px`,
                background: i < 14 ? 'var(--vd-cyan)' : i < 27 ? 'var(--vd-lemon)' : 'var(--vd-pink)',
                opacity: WAVE_OPACITIES[i],
              }}
            />
          ))}
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 mt-12 animate-slide-up"
          style={{ animationDelay: '0.75s', opacity: 0 }}
        >
          {[
            { val: 'Reels', label: 'Shorts · TikTok' },
            { val: '×5', label: 'Больше аудитория' },
            { val: '60с', label: 'Макс. длина' },
            { val: '<10с', label: 'Обработка' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-syne font-800 text-2xl grad-text">{s.val}</div>
              <div className="text-white/40 text-xs font-golos mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}