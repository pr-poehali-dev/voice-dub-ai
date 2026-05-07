import { useState } from 'react';
import Icon from '@/components/ui/icon';

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
        style={{ background: 'linear-gradient(90deg, transparent, var(--vd-cyan), var(--vd-pink), transparent)' }}
      />

      <div className="mesh-bg">
        <div className="mesh-orb w-96 h-96" style={{ top: '-80px', right: '10%', background: 'var(--vd-cyan)', opacity: 0.1 }} />
        <div className="mesh-orb w-80 h-80" style={{ bottom: '0', left: '5%', background: 'var(--vd-pink)', opacity: 0.08, animationDelay: '4s' }} />
      </div>

      <div className="max-w-xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Icon name="Mail" size={14} style={{ color: 'var(--vd-cyan)' }} />
            <span className="text-white/60 text-xs font-golos tracking-widest uppercase">Контакты</span>
          </div>
          <h2 className="font-syne font-800 text-4xl md:text-5xl text-white mb-4">
            Поговорим?
            <br />
            <span className="grad-text">Мы на связи</span>
          </h2>
          <p className="text-white/50 font-golos text-lg">
            Вопросы, партнёрство, интеграция — пишите
          </p>
        </div>

        {/* Form only */}
        <div className="glass rounded-3xl p-8" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(0,229,204,0.12)' }}
              >
                <Icon name="CheckCircle" size={32} style={{ color: 'var(--vd-cyan)' }} />
              </div>
              <h3 className="font-syne font-700 text-white text-xl">Сообщение отправлено!</h3>
              <p className="text-white/50 font-golos text-sm">Ответим в течение 2 часов</p>
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
                  className="w-full rounded-xl px-4 py-3 text-white font-golos text-sm outline-none transition-colors"
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
                  className="w-full rounded-xl px-4 py-3 text-white font-golos text-sm outline-none transition-colors"
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
                  className="w-full rounded-xl px-4 py-3 text-white font-golos text-sm outline-none transition-colors resize-none"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                />
              </div>

              <button type="submit" className="btn-grad py-3.5 rounded-2xl font-syne font-700 text-[#080808] flex items-center justify-center gap-2">
                <Icon name="Send" size={16} />
                Отправить сообщение
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
