import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';
import { LANGS, WAVE_BARS, WAVE_HEIGHTS, WAVE_OPACITIES, WAVE_DURATIONS } from './constants';

export default function HeroContent() {
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
    <div className="flex flex-col justify-center">
      <div
        className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 w-fit animate-slide-up"
        style={{ animationDelay: '0.05s', opacity: 0 }}
      >
        <Icon name="Fingerprint" size={14} style={{ color: 'var(--vd-cyan)' }} />
        <span className="text-white/60 text-xs font-golos tracking-widest uppercase">Клонирование голоса</span>
      </div>

      <h1
        className="font-syne font-800 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white mb-5 animate-slide-up"
        style={{ animationDelay: '0.15s', opacity: 0 }}
      >
        Твой голос.
        <br />
        <span className="grad-text">Весь мир.</span>
      </h1>

      <p
        className="text-white/60 font-golos text-base lg:text-lg leading-relaxed mb-8 max-w-md animate-slide-up"
        style={{ animationDelay: '0.25s', opacity: 0 }}
      >
        Загрузи аудио на русском — получи перевод{' '}
        <span className="text-white font-500">твоим голосом</span>{' '}
        на 5 языков за секунды.
      </p>

      <div
        className="flex flex-wrap gap-2 mb-10 animate-slide-up"
        style={{ animationDelay: '0.35s', opacity: 0 }}
      >
        <span className="text-white/30 font-golos text-sm mr-1">🇷🇺 →</span>
        {LANGS.map((l) => (
          <div key={l.name} className="glass rounded-full px-3 py-1.5 flex items-center gap-1.5">
            <span className="text-base leading-none">{l.flag}</span>
            <span className="text-white/70 font-golos text-xs">{l.name}</span>
          </div>
        ))}
      </div>

      {/* Wave visualizer (desktop only) */}
      <div
        ref={waveRef}
        className="hidden lg:flex items-center gap-[3px] h-10 animate-slide-up"
        style={{ animationDelay: '0.45s', opacity: 0 }}
      >
        {WAVE_BARS.map((_, i) => (
          <div
            key={i}
            className="wave-bar w-[3px] rounded-full"
            style={{
              height: `${WAVE_HEIGHTS[i]}px`,
              background: i < 11 ? 'var(--vd-cyan)' : i < 21 ? 'var(--vd-lemon)' : 'var(--vd-pink)',
              opacity: WAVE_OPACITIES[i],
            }}
          />
        ))}
      </div>
    </div>
  );
}
