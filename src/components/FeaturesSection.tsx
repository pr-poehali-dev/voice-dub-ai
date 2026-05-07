import Icon from '@/components/ui/icon';

const FEATURES = [
  {
    icon: 'Fingerprint',
    title: 'Твой голос — не чужой',
    desc: 'AI копирует тембр, темп и характер твоей речи. На английском ты звучишь как ты, а не как безликий синтезатор.',
    accent: 'var(--vd-cyan)',
  },
  {
    icon: 'Globe',
    title: 'Выход на международный рынок',
    desc: 'Один ролик на русском → 5 версий на EN, ES, PT, DE, FR. Охвати аудиторию в 2+ миллиарда человек без съёмок заново.',
    accent: 'var(--vd-violet)',
  },
  {
    icon: 'TrendingUp',
    title: 'Масштабируй контент',
    desc: 'Подкасты, ролики, курсы, рекламные ролики — переводи регулярно и расти на новых платформах: YouTube, Spotify, TikTok.',
    accent: 'var(--vd-pink)',
  },
  {
    icon: 'Mic2',
    title: 'Аудио на входе',
    desc: 'Загружай MP3, WAV, M4A или OGG до 60 секунд. Голосовые сообщения, нарезки из подкастов, озвучка слайдов.',
    accent: 'var(--vd-cyan)',
  },
  {
    icon: 'FileText',
    title: 'Транскрипция в комплекте',
    desc: 'Получи расшифровку исходной речи с временны́ми метками. Удобно для субтитров, SEO и публикации текстов.',
    accent: 'var(--vd-violet)',
  },
  {
    icon: 'Shield',
    title: 'Приватность',
    desc: 'Аудио удаляется сразу после обработки. Твой голос не хранится и не используется для обучения других моделей.',
    accent: 'var(--vd-pink)',
  },
];

const LANGS = [
  { flag: '🇬🇧', code: 'EN', name: 'English', color: 'var(--vd-cyan)', audience: '1.5 млрд' },
  { flag: '🇪🇸', code: 'ES', name: 'Español', color: 'var(--vd-violet)', audience: '500 млн' },
  { flag: '🇵🇹', code: 'PT', name: 'Português', color: 'var(--vd-lemon)', audience: '260 млн' },
  { flag: '🇩🇪', code: 'DE', name: 'Deutsch', color: 'var(--vd-cyan)', audience: '130 млн' },
  { flag: '🇫🇷', code: 'FR', name: 'Français', color: 'var(--vd-violet)', audience: '320 млн' },
];

const USE_CASES = [
  { icon: 'Clapperboard', label: 'Лайфстайл-блогеры', desc: 'Reels и TikTok о жизни, путешествиях, буднях — на языке твоей зарубежной аудитории', color: 'var(--vd-cyan)' },
  { icon: 'Dumbbell', label: 'Фитнес и спорт', desc: 'Тренировки, марафоны, мотивация — вирусный контент без языкового барьера', color: 'var(--vd-lemon)' },
  { icon: 'ChefHat', label: 'Кулинарные ролики', desc: 'Рецепты и кулинарные шоу попадают в зарубежные рекомендации нативно', color: 'var(--vd-pink)' },
  { icon: 'Sparkles', label: 'Бьюти и мода', desc: 'Обзоры, образы, уходовые рутины — делись с аудиторией по всему миру', color: 'var(--vd-cyan)' },
  { icon: 'Megaphone', label: 'Реклама брендов', desc: 'Адаптируй рекламные ролики под EN, ES, PT, DE, FR-рынки без перепроизводства', color: 'var(--vd-lemon)' },
  { icon: 'Gamepad2', label: 'Геймеры и стримеры', desc: 'Нарезки, моменты, обзоры игр — выходи на международные игровые комьюнити', color: 'var(--vd-pink)' },
  { icon: 'TrendingUp', label: 'Бизнес и финансы', desc: 'Shorts про бизнес, инвестиции, кейсы — новая аудитория покупателей и партнёров', color: 'var(--vd-cyan)' },
  { icon: 'Music', label: 'Музыканты', desc: 'Закулисье, клипы, анонсы — продвигай своё творчество на международных площадках', color: 'var(--vd-lemon)' },
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
            <span className="text-white/60 text-xs font-golos tracking-widest uppercase">Для креаторов</span>
          </div>
          <h2 className="font-syne font-800 text-4xl md:text-5xl text-white mb-4">
            Один голос.
            <br />
            <span className="grad-text">Вся планета.</span>
          </h2>
          <p className="text-white/50 font-golos text-lg max-w-xl mx-auto">
            Перестань ограничивать себя одной аудиторией — масштабируй контент на международный рынок
          </p>
        </div>

        {/* Voice identity block */}
        <div
          className="rounded-3xl p-8 md:p-10 mb-14 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0,245,255,0.07) 0%, rgba(124,58,237,0.1) 50%, rgba(247,37,133,0.07) 100%)',
            border: '1px solid rgba(124,58,237,0.25)',
          }}
        >
          {/* bg orb */}
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-20" style={{ background: 'var(--vd-violet)', filter: 'blur(60px)' }} />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-shrink-0">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(0,245,255,0.12)', border: '1px solid rgba(0,245,255,0.25)' }}
              >
                <Icon name="Fingerprint" size={38} style={{ color: 'var(--vd-cyan)' }} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-syne font-800 text-white text-2xl md:text-3xl mb-3">
                Твой голос остаётся твоим
              </h3>
              <p className="text-white/60 font-golos text-base leading-relaxed max-w-2xl">
                VoiceDub AI не заменяет тебя на стандартный TTS-голос. Мы клонируем уникальные характеристики твоей речи — тембр, интонацию, темп — и переносим их в перевод. Твои зрители в Бразилии, Германии или Франции услышат именно тебя, а не робота.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center gap-1 text-center">
              <div className="font-syne font-800 text-4xl grad-text">100%</div>
              <div className="text-white/40 font-golos text-xs">твой голос</div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {[
            { step: '01', icon: 'Upload', title: 'Загрузи аудио', desc: 'MP3, WAV, M4A — до 60 секунд', color: 'var(--vd-cyan)' },
            { step: '02', icon: 'Globe', title: 'Выбери язык', desc: 'EN, ES, PT, DE или FR', color: 'var(--vd-violet)' },
            { step: '03', icon: 'Download', title: 'Скачай MP3', desc: 'Твой голос на новом языке', color: 'var(--vd-pink)' },
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

        {/* Languages + audience */}
        <div className="glass rounded-3xl p-8 mb-14" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="mb-6 text-center md:text-left">
            <div className="font-syne font-700 text-white text-xl mb-1">Суммарная аудитория: 2.7 млрд человек</div>
            <p className="text-white/40 font-golos text-sm">Столько людей говорят на 5 доступных языках</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {LANGS.map((l) => (
              <div
                key={l.code}
                className="flex items-center gap-3 rounded-2xl px-4 py-3"
                style={{ background: `${l.color}10`, border: `1px solid ${l.color}25` }}
              >
                <span className="text-2xl leading-none">{l.flag}</span>
                <div>
                  <div className="font-syne font-600 text-white text-sm">{l.name}</div>
                  <div className="font-golos text-xs" style={{ color: l.color }}>{l.audience} говорящих</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use cases */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <h3 className="font-syne font-700 text-white text-2xl mb-2">Кому это нужно</h3>
            <p className="text-white/40 font-golos text-sm">Любой формат контента — один инструмент для роста</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {USE_CASES.map((uc) => (
              <div key={uc.label} className="glass rounded-2xl p-5 flex flex-col gap-3 group hover:border-white/12 transition-all duration-200">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{ background: `${uc.color}12`, border: `1px solid ${uc.color}28` }}
                >
                  <Icon name={uc.icon} size={20} style={{ color: uc.color }} />
                </div>
                <div>
                  <div className="font-syne font-600 text-white text-sm mb-1">{uc.label}</div>
                  <p className="text-white/40 font-golos text-xs leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            ))}
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