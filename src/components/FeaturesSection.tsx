import Icon from '@/components/ui/icon';

const FEATURES = [
  {
    icon: 'Mic2',
    title: 'AI-озвучка',
    desc: 'Превращаем текст в живую речь с эмоциями. Выбирайте тембр, скорость, акцент из библиотеки 100+ голосов.',
    accent: 'var(--vd-cyan)',
    delay: '0s',
  },
  {
    icon: 'Languages',
    title: 'Дубляж и перевод',
    desc: 'Загружаете видео — получаете дубляж на любом из 40+ языков с сохранением интонаций оригинала.',
    accent: 'var(--vd-violet)',
    delay: '0.1s',
  },
  {
    icon: 'FileText',
    title: 'Транскрипция',
    desc: 'Мгновенно переводим аудио и видео в точный текст с расстановкой спикеров и временных меток.',
    accent: 'var(--vd-pink)',
    delay: '0.2s',
  },
  {
    icon: 'Waveform',
    title: 'Клонирование голоса',
    desc: 'Создайте цифровую копию своего голоса за 30 секунд. Используйте его для любого контента.',
    accent: 'var(--vd-cyan)',
    delay: '0.3s',
  },
  {
    icon: 'Zap',
    title: 'Реальное время',
    desc: 'Обработка аудио с задержкой менее 1 секунды. Идеально для стримов, звонков, конференций.',
    accent: 'var(--vd-violet)',
    delay: '0.4s',
  },
  {
    icon: 'Shield',
    title: 'Безопасность',
    desc: 'Все данные шифруются E2E. Ваши голоса и записи никогда не используются для обучения моделей.',
    accent: 'var(--vd-pink)',
    delay: '0.5s',
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'var(--vd-dark)' }}
    >
      {/* subtle separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--vd-violet), transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Icon name="Sparkles" size={14} className="text-vd-cyan" style={{ color: 'var(--vd-cyan)' }} />
            <span className="text-white/60 text-xs font-golos tracking-widest uppercase">Возможности</span>
          </div>
          <h2 className="font-syne font-800 text-4xl md:text-5xl text-white mb-4">
            Всё, что нужно для
            <br />
            <span className="grad-text">идеального звука</span>
          </h2>
          <p className="text-white/50 font-golos text-lg max-w-xl mx-auto">
            Полный стек инструментов для работы с голосом, аудио и переводом в одном месте
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="glass rounded-2xl p-6 group hover:border-white/15 transition-all duration-300 cursor-default"
              style={{ transitionDelay: f.delay }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${f.accent}15`, border: `1px solid ${f.accent}30` }}
              >
                <Icon name={f.icon} size={22} style={{ color: f.accent }} />
              </div>

              {/* Gradient line */}
              <div
                className="w-8 h-0.5 rounded-full mb-4 opacity-60"
                style={{ background: f.accent }}
              />

              <h3 className="font-syne font-700 text-white text-lg mb-2">{f.title}</h3>
              <p className="text-white/50 font-golos text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}