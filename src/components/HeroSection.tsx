import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const WAVE_BARS = Array.from({ length: 40 });

export default function HeroSection() {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!waveRef.current) return;
    const bars = waveRef.current.querySelectorAll<HTMLElement>('.wave-bar');
    bars.forEach((bar, i) => {
      bar.style.animationDelay = `${(i * 0.07) % 1.2}s`;
      bar.style.animationDuration = `${0.8 + Math.random() * 0.8}s`;
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
        <div
          className="mesh-orb w-[600px] h-[600px]"
          style={{ top: '-100px', left: '-100px', background: 'var(--vd-violet)', animationDelay: '0s' }}
        />
        <div
          className="mesh-orb w-[500px] h-[500px]"
          style={{ top: '200px', right: '-150px', background: 'var(--vd-cyan)', animationDelay: '3s' }}
        />
        <div
          className="mesh-orb w-[400px] h-[400px]"
          style={{ bottom: '-100px', left: '30%', background: 'var(--vd-pink)', animationDelay: '5s' }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-slide-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-vd-cyan animate-pulse" />
          <span className="text-white/70 text-xs font-golos tracking-widest uppercase">
            AI-озвучка нового поколения
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-syne font-800 text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-white mb-6 animate-slide-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          Голос без
          <br />
          <span className="grad-text">границ</span>
        </h1>

        <p
          className="text-white/60 font-golos text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-slide-up"
          style={{ animationDelay: '0.35s', opacity: 0 }}
        >
          Дублируйте, транскрибируйте и переводите любой контент с помощью нейросети. 
          100+ голосов, 40+ языков, реальное время.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <button className="btn-grad px-8 py-4 rounded-full font-syne font-700 text-white text-base flex items-center gap-2">
            <Icon name="Zap" size={18} />
            Начать бесплатно
          </button>
          <button className="glass px-8 py-4 rounded-full font-golos text-white/80 hover:text-white text-base flex items-center gap-2 transition-all hover:border-white/20">
            <Icon name="Play" size={18} />
            Смотреть демо
          </button>
        </div>

        {/* Wave visualizer */}
        <div
          ref={waveRef}
          className="flex items-center justify-center gap-[3px] h-16 animate-slide-up"
          style={{ animationDelay: '0.65s', opacity: 0 }}
        >
          {WAVE_BARS.map((_, i) => (
            <div
              key={i}
              className="wave-bar w-[3px] rounded-full"
              style={{
                height: `${20 + Math.sin(i * 0.4) * 30 + Math.random() * 20}px`,
                background: i < 14
                  ? 'var(--vd-cyan)'
                  : i < 27
                  ? 'var(--vd-violet)'
                  : 'var(--vd-pink)',
                opacity: 0.7 + Math.sin(i * 0.3) * 0.3,
              }}
            />
          ))}
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 mt-14 animate-slide-up"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          {[
            { val: '50K+', label: 'Пользователей' },
            { val: '100+', label: 'Голосов' },
            { val: '40+', label: 'Языков' },
            { val: '<1s', label: 'Задержка' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-syne font-800 text-2xl grad-text">{s.val}</div>
              <div className="text-white/40 text-xs font-golos mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-white/30 text-xs font-golos">Прокрутить вниз</span>
        <Icon name="ChevronDown" size={16} className="text-white/30" />
      </div>
    </section>
  );
}
