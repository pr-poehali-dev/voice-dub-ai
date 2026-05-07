import { useState } from 'react';
import Icon from '@/components/ui/icon';

const SOCIAL = [
  { icon: 'MessageCircle', label: 'Telegram', href: '#' },
  { icon: 'Twitter', label: 'Twitter / X', href: '#' },
  { icon: 'Youtube', label: 'YouTube', href: '#' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contacts"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'var(--vd-dark2)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--vd-violet), var(--vd-cyan), transparent)' }}
      />

      {/* Orbs */}
      <div className="mesh-bg">
        <div className="mesh-orb w-96 h-96" style={{ top: '-80px', right: '10%', background: 'var(--vd-cyan)', opacity: 0.12 }} />
        <div className="mesh-orb w-80 h-80" style={{ bottom: '0', left: '5%', background: 'var(--vd-pink)', opacity: 0.1, animationDelay: '4s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Icon name="Mail" size={14} style={{ color: 'var(--vd-cyan)' }} />
            <span className="text-white/60 text-xs font-golos tracking-widest uppercase">Контакты</span>
          </div>
          <h2 className="font-syne font-800 text-4xl md:text-5xl text-white mb-4">
            Поговорим?
            <br />
            <span className="grad-text">Мы всегда на связи</span>
          </h2>
          <p className="text-white/50 font-golos text-lg max-w-xl mx-auto">
            Есть вопросы, партнёрство или интеграция — напишите нам
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: info */}
          <div className="flex flex-col gap-6">
            {/* Info cards */}
            {[
              { icon: 'Mail', title: 'Email', val: 'hello@voicedub.ai', color: 'var(--vd-cyan)' },
              { icon: 'MessageCircle', title: 'Telegram', val: '@voicedub_support', color: 'var(--vd-violet)' },
              { icon: 'Clock', title: 'Время ответа', val: 'До 2 часов в рабочее время', color: 'var(--vd-pink)' },
            ].map((item) => (
              <div
                key={item.title}
                className="glass rounded-2xl p-5 flex items-center gap-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  <Icon name={item.icon} size={20} style={{ color: item.color }} />
                </div>
                <div>
                  <div className="text-white/40 font-golos text-xs uppercase tracking-wider mb-0.5">{item.title}</div>
                  <div className="text-white font-golos font-500">{item.val}</div>
                </div>
              </div>
            ))}

            {/* Social */}
            <div>
              <p className="text-white/40 font-golos text-xs uppercase tracking-widest mb-4">Мы в соцсетях</p>
              <div className="flex gap-3">
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="glass rounded-xl p-3 flex items-center gap-2 text-white/50 hover:text-white transition-colors"
                  >
                    <Icon name={s.icon} size={18} />
                    <span className="font-golos text-sm hidden sm:block">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass rounded-3xl p-8 border border-white/10">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(0,245,255,0.15)' }}
                >
                  <Icon name="CheckCircle" size={32} style={{ color: 'var(--vd-cyan)' }} />
                </div>
                <h3 className="font-syne font-700 text-white text-xl">Сообщение отправлено!</h3>
                <p className="text-white/50 font-golos text-sm">Мы ответим вам в течение 2 часов</p>
                <button
                  onClick={() => setSent(false)}
                  className="text-white/40 hover:text-white font-golos text-sm mt-2 transition-colors"
                >
                  Отправить ещё одно
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-syne font-700 text-white text-xl mb-1">Напишите нам</h3>

                <div>
                  <label className="block text-white/40 font-golos text-xs uppercase tracking-wider mb-2">Имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ваше имя"
                    className="w-full rounded-xl px-4 py-3 text-white font-golos text-sm outline-none focus:border-white/20 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  />
                </div>

                <div>
                  <label className="block text-white/40 font-golos text-xs uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full rounded-xl px-4 py-3 text-white font-golos text-sm outline-none focus:border-white/20 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  />
                </div>

                <div>
                  <label className="block text-white/40 font-golos text-xs uppercase tracking-wider mb-2">Сообщение</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Расскажите о вашем проекте..."
                    className="w-full rounded-xl px-4 py-3 text-white font-golos text-sm outline-none focus:border-white/20 transition-colors resize-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  />
                </div>

                <button type="submit" className="btn-grad py-3.5 rounded-2xl font-syne font-600 text-white flex items-center justify-center gap-2">
                  <Icon name="Send" size={16} />
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
