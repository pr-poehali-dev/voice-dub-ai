import Icon from '@/components/ui/icon';

const FEATURES = [
  {
    icon: 'Mic2',
    title: 'Аудио на входе',
    desc: 'Загружайте записи в MP3, WAV, M4A или OGG. Поддерживаются файлы до 60 секунд — идеально для голосовых сообщений, подкастов и коротких роликов.',
    accent: 'var(--vd-cyan)',
  },
  {
    icon: 'Languages',
    title: 'Перевод + озвучка',
    desc: 'AI переводит русскую речь и сразу синтезирует её на выбранном языке. Без промежуточного текста — сразу готовый аудиофайл.',
    accent: 'var(--vd-violet)',
  },
  {
    icon: 'Globe',
    title: '5 языков',
    desc: 'Английский, испанский, португальский, немецкий, французский. Естественное произношение с правильными интонациями для каждого языка.',
    accent: 'var(--vd-pink)',
  },
  {
    icon: 'FileText',
    title: 'Транскрипция',
    desc: 'Получите точную расшифровку исходного аудио на русском языке — удобно для субтитров, архивирования и редактуры.',
    accent: 'var(--vd-cyan)',
  },
  {
    icon: 'Download',
    title: 'Готовый MP3',
    desc: 'Результат — чистый MP3 файл, который можно скачать мгновенно. Никаких аккаунтов и подписок для первого использования.',
    accent: 'var(--vd-violet)',
  },
  {
    icon: 'Shield',
    title: 'Конфиденциальность',
    desc: 'Аудиофайлы обрабатываются и удаляются автоматически. Ваши записи не хранятся и не используются для обучения моделей.',
    accent: 'var(--vd-pink)',
  },
];

const LANGS = [
  { flag: '🇬🇧', code: 'EN', name: 'English', color: 'var(--vd-cyan)' },
  { flag: '🇪🇸', code: 'ES', name: 'Español', color: 'var(--vd-violet)' },
  { flag: '🇵🇹', code: 'PT', name: 'Português', color: 'var(--vd-pink)' },
  { flag: '🇩🇪', code: 'DE', name: 'Deutsch', color: 'var(--vd-cyan)' },
  { flag: '🇫🇷', code: 'FR', name: 'Français', color: 'var(--vd-violet)' },
];

export default function FeaturesSection() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'var(--vd-dark)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--vd-violet), transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Icon name="Sparkles" size={14} style={{ color: 'var(--vd-cyan)' }} />
            <span className="text-white/60 text-xs font-golos tracking-widest uppercase">Возможности</span>
          </div>
          <h2 className="font-syne font-800 text-4xl md:text-5xl text-white mb-4">
            Просто, быстро,
            <br />
            <span className="grad-text">без лишнего</span>
          </h2>
          <p className="text-white/50 font-golos text-lg max-w-xl mx-auto">
            Один инструмент — загрузил русское аудио, получил перевод на нужном языке
          </p>
        </div>

        {/* How it works — 3 steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[
            { step: '01', icon: 'Upload', title: 'Загрузите аудио', desc: 'MP3, WAV, M4A — до 60 секунд', color: 'var(--vd-cyan)' },
            { step: '02', icon: 'Globe', title: 'Выберите язык', desc: 'Один из 5 доступных языков', color: 'var(--vd-violet)' },
            { step: '03', icon: 'Download', title: 'Скачайте MP3', desc: 'Готово через несколько секунд', color: 'var(--vd-pink)' },
          ].map((s, i) => (
            <div key={s.step} className="relative glass rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="font-syne font-800 text-6xl mb-3 opacity-10 text-white absolute top-4 right-5">{s.step}</div>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
              >
                <Icon name={s.icon} size={26} style={{ color: s.color }} />
              </div>
              <h3 className="font-syne font-700 text-white text-lg mb-1">{s.title}</h3>
              <p className="text-white/45 font-golos text-sm">{s.desc}</p>
              {i < 2 && (
                <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                  <Icon name="ChevronRight" size={20} className="text-white/20" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Languages showcase */}
        <div className="glass rounded-3xl p-8 mb-14" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 text-center md:text-left">
              <div className="font-syne font-700 text-white text-xl mb-1">Русский → любой из 5</div>
              <p className="text-white/40 font-golos text-sm max-w-xs">
                Поддерживаемые языки вывода
              </p>
            </div>
            <div
              className="hidden md:block w-px self-stretch mx-4"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            />
            <div className="flex flex-wrap gap-3 flex-1 justify-center md:justify-start">
              {LANGS.map((l) => (
                <div
                  key={l.code}
                  className="flex items-center gap-2.5 rounded-2xl px-4 py-3"
                  style={{ background: `${l.color}10`, border: `1px solid ${l.color}25` }}
                >
                  <span className="text-2xl leading-none">{l.flag}</span>
                  <div>
                    <div className="font-syne font-600 text-white text-sm">{l.name}</div>
                    <div className="font-golos text-xs" style={{ color: l.color }}>{l.code}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="glass rounded-2xl p-6 group hover:border-white/15 transition-all duration-300 cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${f.accent}15`, border: `1px solid ${f.accent}30` }}
              >
                <Icon name={f.icon} size={22} style={{ color: f.accent }} />
              </div>
              <div className="w-8 h-0.5 rounded-full mb-4 opacity-60" style={{ background: f.accent }} />
              <h3 className="font-syne font-700 text-white text-lg mb-2">{f.title}</h3>
              <p className="text-white/50 font-golos text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
