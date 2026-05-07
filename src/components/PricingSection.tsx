import Icon from '@/components/ui/icon';

const PLANS = [
  {
    name: 'Старт',
    price: 'Бесплатно',
    period: '',
    desc: 'Для знакомства с платформой',
    color: 'var(--vd-cyan)',
    features: [
      '30 минут озвучки в месяц',
      '5 голосов',
      'Транскрипция до 10 мин',
      'Стандартное качество',
      'Экспорт MP3',
    ],
    missing: ['Дубляж видео', 'Клонирование голоса', 'API доступ'],
    cta: 'Начать бесплатно',
    popular: false,
  },
  {
    name: 'Про',
    price: '1 990',
    period: '/ мес',
    desc: 'Для профессионалов и команд',
    color: 'var(--vd-violet)',
    features: [
      '500 минут озвучки в месяц',
      '100+ голосов',
      'Дубляж видео до 2GB',
      'Транскрипция без лимита',
      'HD качество + WAV экспорт',
      'Клонирование голоса',
      'Приоритетная обработка',
    ],
    missing: ['API доступ'],
    cta: 'Выбрать Про',
    popular: true,
  },
  {
    name: 'Бизнес',
    price: '9 990',
    period: '/ мес',
    desc: 'Для компаний с большими объёмами',
    color: 'var(--vd-pink)',
    features: [
      'Безлимитная озвучка',
      'Все голоса + White Label',
      'Дубляж без ограничений',
      'API доступ + Webhooks',
      'SLA 99.9%',
      'Персональный менеджер',
      'Кастомные голоса',
    ],
    missing: [],
    cta: 'Связаться с нами',
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'var(--vd-dark)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--vd-pink), transparent)' }}
      />

      {/* Orbs */}
      <div className="mesh-bg">
        <div className="mesh-orb w-96 h-96" style={{ bottom: '-50px', right: '0', background: 'var(--vd-violet)', opacity: 0.2, animationDelay: '2s' }} />
        <div className="mesh-orb w-80 h-80" style={{ top: '50px', left: '-50px', background: 'var(--vd-pink)', opacity: 0.15 }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Icon name="CreditCard" size={14} style={{ color: 'var(--vd-pink)' }} />
            <span className="text-white/60 text-xs font-golos tracking-widest uppercase">Тарифы</span>
          </div>
          <h2 className="font-syne font-800 text-4xl md:text-5xl text-white mb-4">
            Простые цены,
            <br />
            <span className="grad-text">мощный результат</span>
          </h2>
          <p className="text-white/50 font-golos text-lg max-w-xl mx-auto">
            Начните бесплатно, масштабируйтесь по мере роста
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-7 transition-all duration-300 ${
                plan.popular
                  ? 'scale-105 shadow-2xl'
                  : 'hover:scale-102'
              }`}
              style={plan.popular ? {
                background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(247,37,133,0.1))',
                border: `1px solid rgba(124,58,237,0.4)`,
                boxShadow: '0 20px 60px rgba(124,58,237,0.2)',
              } : {
                background: 'var(--vd-surface)',
                border: '1px solid var(--vd-border)',
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 btn-grad px-4 py-1.5 rounded-full text-xs font-syne font-700 text-white whitespace-nowrap"
                >
                  ✦ Популярный выбор
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${plan.color}15`, border: `1px solid ${plan.color}30` }}
                >
                  <Icon name="Zap" size={18} style={{ color: plan.color }} />
                </div>
                <h3 className="font-syne font-700 text-white text-xl mb-1">{plan.name}</h3>
                <p className="text-white/40 font-golos text-sm">{plan.desc}</p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-end gap-1">
                  {plan.period ? (
                    <>
                      <span className="font-syne font-800 text-4xl text-white">{plan.price}</span>
                      <span className="text-white/40 font-golos text-sm mb-1.5">₽{plan.period}</span>
                    </>
                  ) : (
                    <span className="font-syne font-800 text-4xl" style={{ color: plan.color }}>{plan.price}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Icon name="Check" size={15} className="flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
                    <span className="text-white/70 font-golos text-sm">{f}</span>
                  </li>
                ))}
                {plan.missing.map((f) => (
                  <li key={f} className="flex items-start gap-3 opacity-40">
                    <Icon name="X" size={15} className="flex-shrink-0 mt-0.5 text-white/30" />
                    <span className="text-white/40 font-golos text-sm line-through">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-2xl font-syne font-600 text-sm transition-all duration-200 ${
                  plan.popular
                    ? 'btn-grad text-white'
                    : 'text-white hover:text-white'
                }`}
                style={!plan.popular ? {
                  background: `${plan.color}15`,
                  border: `1px solid ${plan.color}30`,
                  color: plan.color,
                } : {}}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-white/30 font-golos text-sm mt-10">
          Все тарифы включают SSL, CDN и техническую поддержку. Без скрытых платежей.
        </p>
      </div>
    </section>
  );
}
