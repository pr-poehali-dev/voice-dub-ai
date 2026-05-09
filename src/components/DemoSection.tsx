import { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const DEMO_TRACKS = [
  {
    lang: 'ru',
    flag: '🇷🇺',
    label: 'Оригинал',
    name: 'Русский',
    color: 'rgba(255,255,255,0.7)',
    colorVar: 'rgba(255,255,255,0.6)',
    text: '«Привет! Я рассказываю о путешествиях по всему миру. Сегодня — Токио: самый удивительный город, где я был»',
    isOriginal: true,
  },
  {
    lang: 'en',
    flag: '🇬🇧',
    label: 'English',
    name: 'Английский',
    color: 'var(--vd-cyan)',
    colorVar: 'var(--vd-cyan)',
    text: '"Hey! I talk about traveling around the world. Today — Tokyo: the most amazing city I\'ve ever been to"',
    isOriginal: false,
  },
  {
    lang: 'es',
    flag: '🇪🇸',
    label: 'Español',
    name: 'Испанский',
    color: 'var(--vd-violet)',
    colorVar: 'var(--vd-violet)',
    text: '"¡Hola! Hablo sobre viajes por todo el mundo. Hoy — Tokio: la ciudad más increíble en la que he estado"',
    isOriginal: false,
  },
  {
    lang: 'pt',
    flag: '🇵🇹',
    label: 'Português',
    name: 'Португальский',
    color: 'var(--vd-pink)',
    colorVar: 'var(--vd-pink)',
    text: '"Olá! Falo sobre viagens pelo mundo. Hoje — Tóquio: a cidade mais incrível que já visitei"',
    isOriginal: false,
  },
  {
    lang: 'de',
    flag: '🇩🇪',
    label: 'Deutsch',
    name: 'Немецкий',
    color: 'var(--vd-cyan)',
    colorVar: 'var(--vd-cyan)',
    text: '"Hallo! Ich berichte über Reisen rund um die Welt. Heute — Tokio: die erstaunlichste Stadt, in der ich je war"',
    isOriginal: false,
  },
  {
    lang: 'fr',
    flag: '🇫🇷',
    label: 'Français',
    name: 'Французский',
    color: 'var(--vd-violet)',
    colorVar: 'var(--vd-violet)',
    text: '"Bonjour ! Je parle de voyages à travers le monde. Aujourd\'hui — Tokyo : la ville la plus incroyable où je suis allé"',
    isOriginal: false,
  },
];

const WAVE_COUNT = 36;
const WAVE_HEIGHTS = Array.from({ length: WAVE_COUNT }, (_, i) =>
  12 + Math.abs(Math.sin(i * 0.45 + 1)) * 28 + Math.abs(Math.sin(i * 0.9)) * 14
);

function AudioCard({
  track,
  isPlaying,
  onPlay,
}: {
  track: typeof DEMO_TRACKS[0];
  isPlaying: boolean;
  onPlay: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const DURATION = 8000;

  useEffect(() => {
    if (isPlaying) {
      setProgress(0);
      const start = Date.now();
      timerRef.current = setInterval(() => {
        const pct = Math.min((Date.now() - start) / DURATION, 1);
        setProgress(pct);
        if (pct >= 1) {
          clearInterval(timerRef.current!);
        }
      }, 50);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setProgress(0);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPlaying]);

  const color = track.colorVar;

  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 cursor-pointer group"
      style={isPlaying ? {
        background: `${color}10`,
        border: `1px solid ${color}40`,
        boxShadow: `0 0 30px ${color}15`,
      } : {
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
      onClick={onPlay}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <span className="text-2xl leading-none">{track.flag}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-syne font-600 text-white text-sm">{track.label}</span>
            {track.isOriginal && (
              <span
                className="text-[10px] font-golos px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
              >
                оригинал
              </span>
            )}
            {!track.isOriginal && (
              <span
                className="text-[10px] font-golos px-2 py-0.5 rounded-full"
                style={{ background: `${color}15`, color: color }}
              >
                AI-перевод
              </span>
            )}
          </div>
          <div className="text-white/35 font-golos text-xs">{track.name}</div>
        </div>
        {/* Play button */}
        <button
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
          style={isPlaying ? {
            background: color,
            color: '#000',
          } : {
            background: 'rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.7)',
          }}
          onClick={(e) => { e.stopPropagation(); onPlay(); }}
        >
          <Icon name={isPlaying ? 'Pause' : 'Play'} size={16} />
        </button>
      </div>

      {/* Waveform + progress */}
      <div className="relative flex items-center gap-[2px] h-10">
        {WAVE_HEIGHTS.map((h, i) => {
          const barFilled = progress > 0 && i / WAVE_COUNT <= progress;
          return (
            <div
              key={i}
              className={isPlaying && barFilled ? 'wave-bar' : ''}
              style={{
                width: '3px',
                borderRadius: '2px',
                height: `${h}px`,
                background: barFilled ? color : 'rgba(255,255,255,0.12)',
                transition: 'background 0.1s',
                animationDelay: `${(i * 0.07) % 1.2}s`,
                animationDuration: `${0.7 + (i % 4) * 0.15}s`,
              }}
            />
          );
        })}
      </div>

      {/* Quote */}
      <p
        className="font-golos text-xs leading-relaxed transition-colors duration-200"
        style={{ color: isPlaying ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.3)' }}
      >
        {track.text}
      </p>
    </div>
  );
}

export default function DemoSection() {
  const [playingLang, setPlayingLang] = useState<string | null>(null);

  const handlePlay = (lang: string) => {
    setPlayingLang((prev) => (prev === lang ? null : lang));
  };

  return (
    <section
      id="demo"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'var(--vd-dark2)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--vd-cyan), transparent)' }}
      />

      {/* Orbs */}
      <div className="mesh-bg">
        <div className="mesh-orb w-80 h-80" style={{ top: '-60px', right: '10%', background: 'var(--vd-cyan)', opacity: 0.1, animationDelay: '0s' }} />
        <div className="mesh-orb w-72 h-72" style={{ bottom: '-40px', left: '5%', background: 'var(--vd-violet)', opacity: 0.1, animationDelay: '3s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Icon name="Play" size={14} style={{ color: 'var(--vd-cyan)' }} />
            <span className="text-white/60 text-xs font-golos tracking-widest uppercase">Демо</span>
          </div>
          <h2 className="font-syne font-800 text-4xl md:text-5xl text-white mb-4">
            Послушай сам —
            <br />
            <span className="grad-text">один голос, 5 языков</span>
          </h2>
          <p className="text-white/50 font-golos text-lg max-w-xl mx-auto">
            Нажми на любую карточку. Это один и тот же человек — его голос переведён AI на каждый язык с сохранением характера речи
          </p>
        </div>

        {/* Synthetic warning banner */}
        <div
          className="glass rounded-2xl px-5 py-4 mb-8 max-w-3xl mx-auto flex items-start gap-3"
          style={{ border: '1px solid rgba(212,255,0,0.25)', background: 'rgba(212,255,0,0.04)' }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ background: 'rgba(212,255,0,0.12)', border: '1px solid rgba(212,255,0,0.3)' }}
          >
            <Icon name="Info" size={16} style={{ color: 'var(--vd-lemon)' }} />
          </div>
          <p className="text-white/70 font-golos text-sm leading-relaxed">
            Демо-треки — синтетические примеры. Загрузи свой голос в приложении выше — получишь перевод своим настоящим голосом.
          </p>
        </div>

        {/* Voice identity strip */}
        <div
          className="flex items-center gap-4 rounded-2xl px-6 py-4 mb-10 mx-auto max-w-xl"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(0,245,255,0.12)', border: '1px solid rgba(0,245,255,0.25)' }}
          >
            <Icon name="Fingerprint" size={20} style={{ color: 'var(--vd-cyan)' }} />
          </div>
          <div>
            <p className="text-white/80 font-golos text-sm font-500">Голос: Алексей, тревел-блогер</p>
            <p className="text-white/35 font-golos text-xs">Тембр, темп и интонации сохранены в каждом переводе</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            {DEMO_TRACKS.filter((t) => !t.isOriginal).map((t) => (
              <span key={t.lang} className="text-base leading-none">{t.flag}</span>
            ))}
          </div>
        </div>

        {/* Original + translations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Original — full width */}
          <div className="md:col-span-2">
            <AudioCard
              track={DEMO_TRACKS[0]}
              isPlaying={playingLang === DEMO_TRACKS[0].lang}
              onPlay={() => handlePlay(DEMO_TRACKS[0].lang)}
            />
          </div>

          {/* Translations — 2 col grid */}
          {DEMO_TRACKS.slice(1).map((track) => (
            <AudioCard
              key={track.lang}
              track={track}
              isPlaying={playingLang === track.lang}
              onPlay={() => handlePlay(track.lang)}
            />
          ))}
        </div>

        {/* Note */}
        <div className="flex items-start gap-3 mt-8 glass rounded-2xl px-5 py-4 max-w-xl mx-auto">
          <Icon name="Info" size={16} style={{ color: 'var(--vd-violet)' }} className="flex-shrink-0 mt-0.5" />
          <p className="text-white/40 font-golos text-sm leading-relaxed">
            Демо-треки — синтетические примеры, имитирующие реальный результат. Твой настоящий голос будет обработан после загрузки аудиофайла в приложении выше.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button
            className="btn-grad px-8 py-4 rounded-full font-syne font-700 text-white text-base flex items-center gap-2 mx-auto"
            onClick={() => document.querySelector('#app')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Mic" size={18} />
            Загрузить свой голос
          </button>
        </div>
      </div>
    </section>
  );
}