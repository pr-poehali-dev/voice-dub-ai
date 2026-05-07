import { useState } from 'react';
import Icon from '@/components/ui/icon';

const PLANS = [
  {
    name: 'Бесплатно',
    price: '0',
    period: '',
    desc: 'Попробуйте без регистрации',
    color: 'var(--vd-cyan)',
    features: [
      '3 перевода в день',
      'Максимум 10 переводов в месяц',
      'Аудио до 30 секунд',
      '5 языков перевода',
      'Транскрипция: 1 файл в день',
      'Экспорт MP3',
    ],
    missing: [
      'Приоритетная очередь',
      'Пакетная обработка',
      'API доступ',
    ],
    cta: 'Начать бесплатно',
    popular: false,
    paid: false,
  },
  {
    name: 'Про',
    price: '790',
    period: '/ мес',
    desc: 'Для регулярного использования',
    color: 'var(--vd-lemon)',
    features: [
      '100 переводов в месяц',
      'Аудио до 60 секунд',
      'Все 5 языков перевода',
      'Транскрипция без лимита',
      'Экспорт MP3 + WAV',
      'Приоритетная обработка',
      'История переводов (30 дней)',
    ],
    missing: [
      'API доступ',
    ],
    cta: 'Выбрать Про',
    popular: true,
    paid: true,
  },
  {
    name: 'Команда',
    price: '2 990',
    period: '/ мес',
    desc: 'Для агентств и команд',
    color: 'var(--vd-pink)',
    features: [
      'Безлимитные переводы',
      'Аудио до 60 секунд',
      'Все 5 языков перевода',
      'API доступ',
      'До 10 пользователей',
      'Пакетная обработка',
      'Приоритетная поддержка',
    ],
    missing: [],
    cta: 'Выбрать команду',
    popular: false,
    paid: true,
  },
];

function PlanCard({ plan }: { plan: typeof PLANS[0] }) {
  const [autoRenew, setAutoRenew] = useState(true);

  return (
    <div
      className={`relative rounded-3xl p-7 flex flex-col transition-all duration-300 ${plan.popular ? 'scale-105' : ''}`}
      style={plan.popular ? {
        background: 'linear-gradient(135deg, rgba(212,255,0,0.08), rgba(255,45,138,0.07))',
        border: '1px solid rgba(212,255,0,0.3)',
        boxShadow: '0 20px 60px rgba(212,255,0,0.1)',
      } : {
        background: 'var(--vd-surface)',
        border: '1px solid var(--vd-border)',
      }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 btn-grad px-4 py-1.5 rounded-full text-xs font-syne font-700 text-[#080808] whitespace-nowrap">
          ✦ Популярный выбор
        </div>
      )}

      <div className="mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
          style={{ background: `${plan.color}18`, border: `1px solid ${plan.color}35` }}
        >
          <Icon name="Mic" size={18} style={{ color: plan.color }} />
        </div>
        <h3 className="font-syne font-700 text-white text-xl mb-1">{plan.name}</h3>
        <p className="text-white/40 font-golos text-sm">{plan.desc}</p>
      </div>

      <div className="mb-5 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex items-end gap-1">
          {plan.period ? (
            <>
              <span className="font-syne font-800 text-4xl text-white">{plan.price}</span>
              <span className="text-white/40 font-golos text-sm mb-1.5">₽{plan.period}</span>
            </>
          ) : (
            <span className="font-syne font-800 text-4xl" style={{ color: plan.color }}>Бесплатно</span>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-6 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Icon name="Check" size={15} className="flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
            <span className="text-white/70 font-golos text-sm">{f}</span>
          </li>
        ))}
        {plan.missing.map((f) => (
          <li key={f} className="flex items-start gap-3 opacity-35">
            <Icon name="X" size={15} className="flex-shrink-0 mt-0.5 text-white/30" />
            <span className="text-white/40 font-golos text-sm line-through">{f}</span>
          </li>
        ))}
      </ul>

      {/* Auto-renew toggle — only for paid plans */}
      {plan.paid && (
        <div
          className="flex items-center gap-3 rounded-xl px-4 py-3 mb-4 cursor-pointer select-none"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
          onClick={() => setAutoRenew((v) => !v)}
        >
          {/* Custom toggle */}
          <div
            className="w-9 h-5 rounded-full flex-shrink-0 relative transition-all duration-200"
            style={{
              background: autoRenew ? plan.color : 'rgba(255,255,255,0.12)',
            }}
          >
            <div
              className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-200"
              style={{ left: autoRenew ? 'calc(100% - 18px)' : '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white/70 font-golos text-xs font-500">
              {autoRenew ? 'Автопродление включено' : 'Автопродление выключено'}
            </p>
            <p className="text-white/30 font-golos text-[11px] mt-0.5">
              {autoRenew ? 'Подписка продлится автоматически' : 'Подписка истечёт в конце периода'}
            </p>
          </div>
          <Icon
            name={autoRenew ? 'RefreshCw' : 'RefreshCcw'}
            size={14}
            style={{ color: autoRenew ? plan.color : 'rgba(255,255,255,0.2)', flexShrink: 0 }}
          />
        </div>
      )}

      <button
        className={`w-full py-3 rounded-2xl font-syne font-700 text-sm transition-all duration-200 ${
          plan.popular ? 'btn-grad text-[#080808]' : ''
        }`}
        style={!plan.popular ? {
          background: `${plan.color}15`,
          border: `1px solid ${plan.color}35`,
          color: plan.color,
        } : {}}
      >
        {plan.cta}
      </button>
    </div>
  );
}

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

      <div className="mesh-bg">
        <div className="mesh-orb w-96 h-96" style={{ bottom: '-50px', right: '0', background: 'var(--vd-lemon)', opacity: 0.1, animationDelay: '2s' }} />
        <div className="mesh-orb w-80 h-80" style={{ top: '50px', left: '-50px', background: 'var(--vd-pink)', opacity: 0.1 }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Icon name="CreditCard" size={14} style={{ color: 'var(--vd-lemon)' }} />
            <span className="text-white/60 text-xs font-golos tracking-widest uppercase">Тарифы</span>
          </div>
          <h2 className="font-syne font-800 text-4xl md:text-5xl text-white mb-4">
            Начните бесплатно,
            <br />
            <span className="grad-text">растите без ограничений</span>
          </h2>
          <p className="text-white/50 font-golos text-lg max-w-xl mx-auto">
            Первые 3 перевода — прямо сейчас, без карты и регистрации
          </p>
        </div>

        {/* Info strip */}
        <div className="glass rounded-2xl px-6 py-4 mb-10 flex flex-wrap items-center justify-center gap-6 text-sm font-golos">
          {[
            { icon: 'Mic2', text: 'Только аудио' },
            { icon: 'Timer', text: 'До 60 секунд' },
            { icon: 'Globe', text: 'EN · ES · PT · DE · FR' },
            { icon: 'Flag', text: 'Источник: Русский' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white/50">
              <Icon name={item.icon} size={14} style={{ color: 'var(--vd-cyan)' }} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <p className="text-center text-white/20 font-golos text-sm mt-10">
          Автопродление можно отключить в любой момент до окончания периода оплаты.
        </p>
      </div>
    </section>
  );
}
