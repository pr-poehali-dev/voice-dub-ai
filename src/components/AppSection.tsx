import { useState, useRef } from 'react';
import Icon from '@/components/ui/icon';

const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', name: 'English', color: 'var(--vd-cyan)' },
  { code: 'es', flag: '🇪🇸', name: 'Español', color: 'var(--vd-violet)' },
  { code: 'pt', flag: '🇵🇹', name: 'Português', color: 'var(--vd-pink)' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch', color: 'var(--vd-cyan)' },
  { code: 'fr', flag: '🇫🇷', name: 'Français', color: 'var(--vd-violet)' },
];

const TABS = [
  { id: 'translate', label: 'Перевод аудио', icon: 'Languages' },
  { id: 'transcript', label: 'Транскрипция', icon: 'FileText' },
];

const WAVE_SMALL = Array.from({ length: 32 });

type UploadState = 'idle' | 'ready' | 'processing' | 'done';

export default function AppSection() {
  const [activeTab, setActiveTab] = useState('translate');
  const [selectedLang, setSelectedLang] = useState(0);
  const [uploadState, setUploadState] = useState<UploadState>('idle');
  const [fileName, setFileName] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | null) => {
    if (!file) return;
    const validTypes = ['audio/mpeg', 'audio/wav', 'audio/x-m4a', 'audio/ogg', 'audio/mp4'];
    if (!validTypes.includes(file.type) && !file.name.match(/\.(mp3|wav|m4a|ogg)$/i)) return;
    setFileName(file.name);
    setUploadState('ready');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleProcess = () => {
    setUploadState('processing');
    setTimeout(() => setUploadState('done'), 2800);
  };

  const handleReset = () => {
    setUploadState('idle');
    setFileName('');
    setIsPlaying(false);
    if (fileRef.current) fileRef.current.value = '';
  };

  const selectedLangData = LANGUAGES[selectedLang];

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
            Загрузи — получи
            <br />
            <span className="grad-text-2">за секунды</span>
          </h2>
          <p className="text-white/50 font-golos text-lg max-w-xl mx-auto">
            Русское аудио до 60 секунд → перевод на выбранном языке
          </p>
        </div>

        {/* App window */}
        <div
          className="glass rounded-3xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.10)', boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}
        >
          {/* Window chrome */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="glass rounded-full px-4 py-1 text-xs text-white/40 font-golos">
              app.voicedub.ai
            </div>
            <div className="w-14" />
          </div>

          {/* Tabs */}
          <div
            className="flex gap-0 px-6 pt-4 pb-0 border-b"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); handleReset(); }}
                className={`flex items-center gap-2 px-5 py-2.5 text-sm font-golos font-500 transition-all duration-200 border-b-2 -mb-px ${
                  activeTab === tab.id ? 'text-white' : 'text-white/40 hover:text-white/70 border-transparent'
                }`}
                style={activeTab === tab.id ? { borderColor: 'var(--vd-cyan)' } : {}}
              >
                <Icon name={tab.icon} size={15} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ minHeight: '420px' }}>

            {/* Main area */}
            <div className="lg:col-span-2 flex flex-col gap-4">

              {/* Upload zone */}
              {uploadState === 'idle' && (
                <div
                  className={`flex-1 rounded-2xl flex flex-col items-center justify-center gap-4 p-10 cursor-pointer transition-all duration-200 ${isDragging ? 'scale-[1.01]' : ''}`}
                  style={{
                    border: `2px dashed ${isDragging ? 'rgba(0,245,255,0.5)' : 'rgba(255,255,255,0.12)'}`,
                    background: isDragging ? 'rgba(0,245,255,0.05)' : 'rgba(255,255,255,0.02)',
                  }}
                  onClick={() => fileRef.current?.click()}
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: 'rgba(0,245,255,0.1)', border: '1px solid rgba(0,245,255,0.2)' }}
                  >
                    <Icon name="Upload" size={28} style={{ color: 'var(--vd-cyan)' }} />
                  </div>
                  <div className="text-center">
                    <p className="text-white/80 font-golos font-500 mb-1">Перетащите аудиофайл сюда</p>
                    <p className="text-white/35 font-golos text-sm">MP3, WAV, M4A, OGG · до 60 секунд</p>
                  </div>
                  <button
                    className="glass px-5 py-2.5 rounded-xl font-golos text-sm text-white/70 hover:text-white transition-colors"
                    onClick={(e) => { e.stopPropagation(); fileRef.current?.click(); }}
                  >
                    Выбрать файл
                  </button>
                  <input
                    ref={fileRef}
                    type="file"
                    accept=".mp3,.wav,.m4a,.ogg,audio/*"
                    className="hidden"
                    onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                  />
                </div>
              )}

              {/* File ready */}
              {uploadState === 'ready' && (
                <div className="flex-1 rounded-2xl p-6 flex flex-col justify-between" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,245,255,0.1)' }}>
                      <Icon name="Music" size={22} style={{ color: 'var(--vd-cyan)' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-golos font-500 truncate">{fileName}</p>
                      <p className="text-white/40 font-golos text-sm">Готово к обработке</p>
                    </div>
                    <button onClick={handleReset} className="text-white/30 hover:text-white/60 transition-colors">
                      <Icon name="X" size={18} />
                    </button>
                  </div>

                  {activeTab === 'translate' && (
                    <div className="mb-4">
                      <p className="text-white/40 font-golos text-xs uppercase tracking-widest mb-3">Язык перевода</p>
                      <div className="flex flex-wrap gap-2">
                        {LANGUAGES.map((l, i) => (
                          <button
                            key={l.code}
                            onClick={() => setSelectedLang(i)}
                            className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200"
                            style={selectedLang === i ? {
                              background: `${l.color}15`,
                              border: `1px solid ${l.color}40`,
                              color: l.color,
                            } : {
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid transparent',
                              color: 'rgba(255,255,255,0.4)',
                            }}
                          >
                            <span>{l.flag}</span>
                            <span className="font-golos text-sm">{l.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button onClick={handleProcess} className="btn-grad py-3.5 rounded-2xl font-syne font-600 text-white flex items-center justify-center gap-2">
                    <Icon name="Wand2" size={17} />
                    {activeTab === 'translate' ? `Перевести на ${selectedLangData.name}` : 'Транскрибировать'}
                  </button>
                </div>
              )}

              {/* Processing */}
              {uploadState === 'processing' && (
                <div className="flex-1 rounded-2xl flex flex-col items-center justify-center gap-5 p-10" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}
                    >
                      <Icon name="Loader" size={28} style={{ color: 'var(--vd-violet)' }} className="animate-spin" />
                    </div>
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-20"
                      style={{ background: 'var(--vd-violet)' }}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-white font-golos font-500 mb-1">Обрабатываем аудио...</p>
                    <p className="text-white/40 font-golos text-sm">
                      {activeTab === 'translate'
                        ? `Перевод на ${selectedLangData.flag} ${selectedLangData.name}`
                        : 'Транскрипция русской речи'}
                    </p>
                  </div>
                  {/* Progress bars */}
                  <div className="flex items-end justify-center gap-[3px] h-10 w-48">
                    {WAVE_SMALL.map((_, i) => (
                      <div
                        key={i}
                        className="wave-bar rounded-full"
                        style={{
                          width: '4px',
                          height: `${10 + Math.sin(i * 0.5) * 12 + 8}px`,
                          background: 'var(--vd-violet)',
                          opacity: 0.7,
                          animationDelay: `${(i * 0.07) % 1.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Done */}
              {uploadState === 'done' && (
                <div className="flex-1 rounded-2xl p-6 flex flex-col gap-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(0,245,255,0.15)' }}>
                      <Icon name="CheckCircle" size={18} style={{ color: 'var(--vd-cyan)' }} />
                    </div>
                    <span className="text-white font-golos font-500">
                      {activeTab === 'translate' ? `Перевод готов — ${selectedLangData.flag} ${selectedLangData.name}` : 'Транскрипция готова'}
                    </span>
                  </div>

                  {activeTab === 'translate' ? (
                    <div
                      className="rounded-2xl p-4 flex items-center gap-4"
                      style={{ background: `${selectedLangData.color}08`, border: `1px solid ${selectedLangData.color}25` }}
                    >
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110"
                        style={{ background: selectedLangData.color, color: '#000' }}
                      >
                        <Icon name={isPlaying ? 'Pause' : 'Play'} size={20} />
                      </button>
                      <div className="flex-1 flex items-end gap-[2px] h-8">
                        {WAVE_SMALL.map((_, i) => (
                          <div
                            key={i}
                            className={isPlaying ? 'wave-bar' : ''}
                            style={{
                              width: '3px',
                              borderRadius: '2px',
                              background: selectedLangData.color,
                              opacity: 0.55,
                              height: `${8 + Math.sin(i * 0.5) * 10 + 8}px`,
                              animationDelay: `${(i * 0.06) % 1.2}s`,
                            }}
                          />
                        ))}
                      </div>
                      <span className="text-white/40 text-xs font-golos flex-shrink-0">0:58</span>
                    </div>
                  ) : (
                    <div className="rounded-2xl p-4 flex flex-col gap-2" style={{ background: 'rgba(247,37,133,0.05)', border: '1px solid rgba(247,37,133,0.15)' }}>
                      {[
                        { time: '0:00', text: 'Добро пожаловать на нашу презентацию.' },
                        { time: '0:04', text: 'Сегодня мы расскажем о новом продукте.' },
                        { time: '0:09', text: 'Он поможет вам сэкономить время и деньги.' },
                      ].map((line) => (
                        <div key={line.time} className="flex gap-3 py-1.5 border-b last:border-0" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                          <span className="text-white/25 font-golos text-xs w-10 flex-shrink-0 pt-0.5">{line.time}</span>
                          <p className="text-white/70 font-golos text-sm leading-relaxed">{line.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-3 mt-auto">
                    <button className="btn-grad flex-1 py-3 rounded-2xl font-syne font-600 text-white text-sm flex items-center justify-center gap-2">
                      <Icon name="Download" size={15} />
                      {activeTab === 'translate' ? 'Скачать MP3' : 'Скачать TXT'}
                    </button>
                    <button onClick={handleReset} className="glass px-5 py-3 rounded-2xl font-golos text-white/50 hover:text-white text-sm transition-colors">
                      Новый файл
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right sidebar */}
            <div className="flex flex-col gap-4">
              {/* Language selector (translate tab) */}
              {activeTab === 'translate' && uploadState === 'idle' && (
                <>
                  <span className="text-white/40 font-golos text-xs uppercase tracking-widest">Язык перевода</span>
                  {LANGUAGES.map((l, i) => (
                    <button
                      key={l.code}
                      onClick={() => setSelectedLang(i)}
                      className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left"
                      style={selectedLang === i ? {
                        background: `${l.color}10`,
                        border: `1px solid ${l.color}40`,
                      } : {
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid transparent',
                      }}
                    >
                      <span className="text-2xl leading-none">{l.flag}</span>
                      <div className="min-w-0 flex-1">
                        <div className="font-golos font-500 text-white text-sm">{l.name}</div>
                        <div className="font-golos text-xs" style={{ color: selectedLang === i ? l.color : 'rgba(255,255,255,0.3)' }}>{l.code}</div>
                      </div>
                      {selectedLang === i && (
                        <Icon name="Check" size={14} style={{ color: l.color }} />
                      )}
                    </button>
                  ))}
                </>
              )}

              {/* Transcript tab info */}
              {activeTab === 'transcript' && uploadState === 'idle' && (
                <div className="flex flex-col gap-3">
                  <span className="text-white/40 font-golos text-xs uppercase tracking-widest">Что вы получите</span>
                  {[
                    { icon: 'AlignLeft', text: 'Полный текст речи' },
                    { icon: 'Clock', text: 'Временны́е метки' },
                    { icon: 'Download', text: 'Экспорт TXT / SRT' },
                    { icon: 'Globe', text: 'Язык: Русский' },
                  ].map((item) => (
                    <div key={item.text} className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                      <Icon name={item.icon} size={16} style={{ color: 'var(--vd-pink)' }} />
                      <span className="text-white/60 font-golos text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Limit reminder */}
              <div
                className="mt-auto rounded-2xl p-4"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Info" size={14} style={{ color: 'var(--vd-cyan)' }} />
                  <span className="text-white/50 font-golos text-xs font-500">Ограничения</span>
                </div>
                <ul className="space-y-1.5">
                  {[
                    'Только аудиофайлы',
                    'Максимум 60 секунд',
                    'Источник: Русский язык',
                    '5 языков перевода',
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-white/35 font-golos text-xs">
                      <span style={{ color: 'var(--vd-cyan)' }}>·</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
