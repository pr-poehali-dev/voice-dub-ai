import Icon from '@/components/ui/icon';

const STEPS = [
  {
    before: 'Русскоязычный канал — 50 000 подписчиков',
    after: 'После VoiceDub: +4 международных канала, суммарно 200 000+',
    icon: 'Youtube',
    color: 'var(--vd-cyan)',
  },
  {
    before: 'Подкаст только для СНГ',
    after: 'Те же эпизоды — на Spotify EN, ES, PT. Новая аудитория без перезаписи',
    icon: 'Headphones',
    color: 'var(--vd-violet)',
  },
  {
    before: 'Онлайн-курс за ₽15 000',
    after: 'Та же программа на EN за $200 — тот же контент, другой рынок',
    icon: 'GraduationCap',
    color: 'var(--vd-pink)',
  },
];

const METRICS = [
  { val: '×5', label: 'потенциальных рынков', icon: 'Globe' },
  { val: '2.7B', label: 'человек — целевая аудитория', icon: 'Users' },
  { val: '60с', label: 'аудио за один раз', icon: 'Timer' },
  { val: '100%', label: 'твой голос в переводе', icon: 'Fingerprint' },
];

export default function GrowthSection() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'var(--vd-dark)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--vd-pink), transparent)' }}
      />

      {/* Orbs */}
      <div className="mesh-bg">
        <div className="mesh-orb w-96 h-96" style={{ top: '0', right: '-100px', background: 'var(--vd-pink)', opacity: 0.12, animationDelay: '1s' }} />
        <div className="mesh-orb w-80 h-80" style={{ bottom: '0', left: '-80px', background: 'var(--vd-cyan)', opacity: 0.1, animationDelay: '4s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Icon name="TrendingUp" size={14} style={{ color: 'var(--vd-pink)' }} />
            <span className="text-white/60 text-xs font-golos tracking-widest uppercase">Масштабирование</span>
          </div>
          <h2 className="font-syne font-800 text-4xl md:text-5xl text-white mb-4">
            Расти без
            <br />
            <span className="grad-text">языкового барьера</span>
          </h2>
          <p className="text-white/50 font-golos text-lg max-w-xl mx-auto">
            Контент-креаторы используют VoiceDub, чтобы выйти на международный рынок без затрат на локализацию
          </p>
        </div>

        {/* Before / After cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {STEPS.map((s) => (
            <div key={s.before} className="glass rounded-2xl overflow-hidden">
              {/* Before */}
              <div className="p-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-white/30 font-golos text-xs uppercase tracking-widest">Сейчас</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <Icon name={s.icon} size={16} className="text-white/30" />
                  </div>
                  <p className="text-white/50 font-golos text-sm leading-relaxed">{s.before}</p>
                </div>
              </div>
              {/* Arrow */}
              <div className="flex items-center justify-center py-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: `${s.color}20`, border: `1px solid ${s.color}40` }}
                >
                  <Icon name="ArrowDown" size={14} style={{ color: s.color }} />
                </div>
              </div>
              {/* After */}
              <div className="p-5" style={{ background: `${s.color}06` }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-golos text-xs uppercase tracking-widest font-600" style={{ color: s.color }}>С VoiceDub AI</span>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
                  >
                    <Icon name={s.icon} size={16} style={{ color: s.color }} />
                  </div>
                  <p className="text-white/80 font-golos text-sm leading-relaxed font-500">{s.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics row */}
        <div
          className="rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(0,245,255,0.06))',
            border: '1px solid rgba(124,58,237,0.2)',
          }}
        >
          {METRICS.map((m) => (
            <div key={m.label} className="flex flex-col items-center text-center gap-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-1"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <Icon name={m.icon} size={18} style={{ color: 'var(--vd-cyan)' }} />
              </div>
              <div className="font-syne font-800 text-3xl grad-text">{m.val}</div>
              <div className="text-white/40 font-golos text-xs leading-snug">{m.label}</div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="mt-10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div>
            <h3 className="font-syne font-700 text-white text-xl mb-1">Готов выйти на международный рынок?</h3>
            <p className="text-white/45 font-golos text-sm">3 перевода бесплатно — без карты и регистрации</p>
          </div>
          <button
            className="btn-grad px-8 py-4 rounded-full font-syne font-700 text-white flex items-center gap-2 flex-shrink-0"
            onClick={() => document.querySelector('#app')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Mic" size={18} />
            Попробовать сейчас
          </button>
        </div>
      </div>
    </section>
  );
}