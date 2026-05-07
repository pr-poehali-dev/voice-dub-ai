import { useState } from 'react';
import Icon from '@/components/ui/icon';

const TABS = [
  { id: 'voice', label: 'Озвучка', icon: 'Mic2' },
  { id: 'dub', label: 'Дубляж', icon: 'Languages' },
  { id: 'transcript', label: 'Транскрипция', icon: 'FileText' },
];

const VOICES = [
  { name: 'Алексей', lang: 'RU', style: 'Официальный', color: 'var(--vd-cyan)' },
  { name: 'Maria', lang: 'EN', style: 'Friendly', color: 'var(--vd-violet)' },
  { name: 'Лина', lang: 'RU', style: 'Эмоциональный', color: 'var(--vd-pink)' },
  { name: 'Carlos', lang: 'ES', style: 'Natural', color: 'var(--vd-cyan)' },
];

const WAVE_SMALL = Array.from({ length: 28 });

export default function AppSection() {
  const [activeTab, setActiveTab] = useState('voice');
  const [selectedVoice, setSelectedVoice] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('Введите текст для озвучки или загрузите документ...');

  return (
    <section
      id="app"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'var(--vd-dark2)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--vd-cyan), transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Icon name="AppWindow" size={14} style={{ color: 'var(--vd-violet)' }} />
            <span className="text-white/60 text-xs font-golos tracking-widest uppercase">Приложение</span>
          </div>
          <h2 className="font-syne font-800 text-4xl md:text-5xl text-white mb-4">
            Работайте с аудио
            <br />
            <span className="grad-text-2">прямо сейчас</span>
          </h2>
          <p className="text-white/50 font-golos text-lg max-w-xl mx-auto">
            Интуитивный интерфейс, мощный движок. Попробуйте все три инструмента.
          </p>
        </div>

        {/* App window */}
        <div className="glass rounded-3xl overflow-hidden border border-white/10 shadow-2xl" style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}>
          {/* Window chrome */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/8" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="glass rounded-full px-4 py-1 text-xs text-white/40 font-golos">
              app.voicedub.ai
            </div>
            <div className="flex items-center gap-2 text-white/30">
              <Icon name="Settings" size={15} />
              <Icon name="Bell" size={15} />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 px-6 pt-5 pb-0">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-t-xl text-sm font-golos font-500 transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'text-white border-b-2 border-vd-cyan'
                    : 'text-white/40 hover:text-white/70'
                }`}
                style={activeTab === tab.id ? { borderColor: 'var(--vd-cyan)' } : {}}
              >
                <Icon name={tab.icon} size={15} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-5" style={{ minHeight: '440px' }}>

            {/* Left panel */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {activeTab === 'voice' && (
                <>
                  <div
                    className="flex-1 rounded-2xl p-4 border border-white/8 focus-within:border-white/20 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  >
                    <textarea
                      className="w-full h-40 bg-transparent text-white/80 font-golos text-sm resize-none outline-none leading-relaxed"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Введите текст для озвучки..."
                    />
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-white/30 text-xs font-golos">{text.length} символов</span>
                      <div className="flex gap-2">
                        <button className="glass px-3 py-1.5 rounded-lg text-xs text-white/60 hover:text-white flex items-center gap-1.5 transition-colors">
                          <Icon name="Upload" size={12} />
                          Загрузить файл
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Playback bar */}
                  <div className="rounded-2xl p-4 flex items-center gap-4" style={{ background: 'rgba(0,245,255,0.05)', border: '1px solid rgba(0,245,255,0.15)' }}>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110"
                      style={{ background: 'var(--vd-cyan)', color: '#000' }}
                    >
                      <Icon name={isPlaying ? 'Pause' : 'Play'} size={20} />
                    </button>
                    <div className="flex-1 flex items-center gap-[2px] h-8">
                      {WAVE_SMALL.map((_, i) => (
                        <div
                          key={i}
                          className={isPlaying ? 'wave-bar' : ''}
                          style={{
                            width: '3px',
                            borderRadius: '2px',
                            background: 'var(--vd-cyan)',
                            opacity: 0.6,
                            height: `${8 + Math.sin(i * 0.5) * 10 + 8}px`,
                            animationDelay: `${(i * 0.06) % 1.2}s`,
                            animationDuration: '0.9s',
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-white/40 text-xs font-golos flex-shrink-0">0:32</span>
                  </div>
                </>
              )}

              {activeTab === 'dub' && (
                <div className="flex-1 rounded-2xl border border-dashed border-white/15 flex flex-col items-center justify-center gap-4 p-8" style={{ background: 'rgba(124,58,237,0.05)' }}>
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(124,58,237,0.2)' }}>
                    <Icon name="Upload" size={28} style={{ color: 'var(--vd-violet)' }} />
                  </div>
                  <div className="text-center">
                    <p className="text-white/80 font-golos font-500 mb-1">Загрузите видео для дубляжа</p>
                    <p className="text-white/40 font-golos text-sm">MP4, MOV, AVI до 2GB</p>
                  </div>
                  <button className="btn-grad px-6 py-2.5 rounded-full font-golos text-sm text-white">
                    Выбрать файл
                  </button>
                  <div className="grid grid-cols-2 gap-3 w-full mt-2">
                    {['Английский → Русский', 'Русский → Английский', 'Русский → Китайский', 'Любой → Любой'].map((pair) => (
                      <div key={pair} className="glass rounded-xl px-3 py-2 text-center">
                        <span className="text-white/50 font-golos text-xs">{pair}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'transcript' && (
                <div className="flex-1 rounded-2xl border border-white/8 p-4 flex flex-col gap-3" style={{ background: 'rgba(247,37,133,0.04)' }}>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 font-golos text-sm">Транскрипция</span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--vd-pink)' }} />
                      <span className="text-xs font-golos" style={{ color: 'var(--vd-pink)' }}>В процессе...</span>
                    </div>
                  </div>
                  {[
                    { time: '0:00', speaker: 'Спикер 1', text: 'Добро пожаловать на нашу конференцию по искусственному интеллекту.' },
                    { time: '0:05', speaker: 'Спикер 2', text: 'Спасибо, что пригласили. Сегодня мы поговорим о голосовых технологиях.' },
                    { time: '0:12', speaker: 'Спикер 1', text: 'Расскажите нам о последних достижениях в этой области...' },
                  ].map((line, i) => (
                    <div key={i} className="flex gap-3 py-2 border-b border-white/5">
                      <span className="text-white/30 font-golos text-xs w-10 flex-shrink-0 pt-0.5">{line.time}</span>
                      <div>
                        <span className="text-xs font-syne font-600 mb-1 block" style={{ color: i % 2 === 0 ? 'var(--vd-cyan)' : 'var(--vd-violet)' }}>{line.speaker}</span>
                        <p className="text-white/70 font-golos text-sm leading-relaxed">{line.text}</p>
                      </div>
                    </div>
                  ))}
                  <button className="btn-grad px-5 py-2.5 rounded-xl font-golos text-sm text-white flex items-center gap-2 w-fit mt-auto">
                    <Icon name="Download" size={14} />
                    Скачать .txt / .srt
                  </button>
                </div>
              )}
            </div>

            {/* Right: Voice selector */}
            <div className="flex flex-col gap-3">
              <span className="text-white/40 font-golos text-xs uppercase tracking-widest">Голос</span>
              {VOICES.map((v, i) => (
                <button
                  key={v.name}
                  onClick={() => setSelectedVoice(i)}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left ${
                    selectedVoice === i ? 'border' : 'border border-transparent hover:border-white/10'
                  }`}
                  style={selectedVoice === i ? {
                    background: `${v.color}10`,
                    borderColor: `${v.color}40`,
                  } : { background: 'rgba(255,255,255,0.02)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-syne font-700 text-sm"
                    style={{ background: `${v.color}20`, color: v.color }}
                  >
                    {v.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="font-golos font-600 text-white text-sm">{v.name}</div>
                    <div className="text-white/40 text-xs font-golos">{v.lang} · {v.style}</div>
                  </div>
                  {selectedVoice === i && (
                    <Icon name="Check" size={14} className="ml-auto flex-shrink-0" style={{ color: v.color }} />
                  )}
                </button>
              ))}

              <div className="mt-2">
                <span className="text-white/40 font-golos text-xs uppercase tracking-widest block mb-3">Скорость</span>
                <div className="flex gap-2">
                  {['0.75x', '1x', '1.25x', '1.5x'].map((s) => (
                    <button
                      key={s}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-golos transition-all ${
                        s === '1x' ? 'text-white' : 'text-white/40 hover:text-white/70'
                      }`}
                      style={s === '1x' ? { background: 'rgba(0,245,255,0.15)', color: 'var(--vd-cyan)' } : { background: 'rgba(255,255,255,0.04)' }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <button className="btn-grad mt-auto py-3 rounded-xl font-syne font-600 text-white text-sm flex items-center justify-center gap-2">
                <Icon name="Wand2" size={16} />
                Синтезировать
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
