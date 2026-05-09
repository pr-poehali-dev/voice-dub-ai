import Icon from '@/components/ui/icon';

const TESTIMONIALS = [
  {
    initials: 'МК',
    color: 'var(--vd-cyan)',
    name: 'Мария К.',
    role: 'Beauty-блогер, YouTube',
    quote:
      'За неделю запустила английский канал — просто загрузила старые видео. Голос мой, акцент исчез, реакция аудитории огонь.',
  },
  {
    initials: 'ДВ',
    color: 'var(--vd-pink)',
    name: 'Дмитрий В.',
    role: 'Подкаст про инвестиции',
    quote:
      'Те же эпизоды теперь выходят на испанском и португальском. Spotify добавил в рекомендации — новая аудитория пришла сама.',
  },
  {
    initials: 'АС',
    color: 'var(--vd-lemon)',
    name: 'Алина С.',
    role: 'Онлайн-курс по дизайну',
    quote:
      'Продала курс на английском за $200 — тот же контент, что продавала за ₽15 000. Окупилось за первую неделю.',
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'var(--vd-dark2)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--vd-violet), transparent)' }}
      />

      <div className="mesh-bg">
        <div
          className="mesh-orb w-96 h-96"
          style={{ top: '0', left: '-100px', background: 'var(--vd-violet)', opacity: 0.1 }}
        />
        <div
          className="mesh-orb w-80 h-80"
          style={{ bottom: '0', right: '-50px', background: 'var(--vd-cyan)', opacity: 0.08, animationDelay: '3s' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Icon name="Quote" size={14} style={{ color: 'var(--vd-violet)' }} />
            <span className="text-white/60 text-xs font-golos tracking-widest uppercase">Отзывы</span>
          </div>
          <h2 className="font-syne font-800 text-4xl md:text-5xl text-white mb-4">
            Что говорят креаторы
            <br />
            <span className="grad-text">которые уже попробовали</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="glass rounded-2xl p-6 flex flex-col gap-4"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <Icon name="Quote" size={22} style={{ color: t.color, opacity: 0.5 }} />
              <p className="text-white/75 font-golos text-sm leading-relaxed flex-1">
                «{t.quote}»
              </p>
              <div className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-syne font-700 text-sm flex-shrink-0"
                  style={{
                    background: `${t.color}18`,
                    border: `1px solid ${t.color}40`,
                    color: t.color,
                  }}
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-white font-golos font-500 text-sm">{t.name}</p>
                  <p className="text-white/40 font-golos text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
