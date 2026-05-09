import { RefObject } from 'react';
import Icon from '@/components/ui/icon';
import {
  LANGUAGES,
  TABS,
  WAVE_SMALL,
  WAVE_SMALL_HEIGHTS,
  WAVE_PLAY_HEIGHTS,
  DEMO_TRANSCRIPT,
  UploadState,
} from './constants';

type AppToolProps = {
  activeTab: string;
  setActiveTab: (id: string) => void;
  selectedLang: number;
  setSelectedLang: (i: number) => void;
  uploadState: UploadState;
  fileName: string;
  isDragging: boolean;
  setIsDragging: (v: boolean) => void;
  isPlaying: boolean;
  setIsPlaying: (v: boolean) => void;
  isEditingTranslation: boolean;
  setIsEditingTranslation: (v: boolean | ((p: boolean) => boolean)) => void;
  translationText: string;
  setTranslationText: (v: string) => void;
  fileRef: RefObject<HTMLInputElement>;
  handleFile: (file: File | null) => void;
  handleDrop: (e: React.DragEvent) => void;
  handleProcess: () => void;
  handleReset: () => void;
  handleDownload: () => void;
};

export default function AppTool(props: AppToolProps) {
  const {
    activeTab,
    setActiveTab,
    selectedLang,
    setSelectedLang,
    uploadState,
    fileName,
    isDragging,
    setIsDragging,
    isPlaying,
    setIsPlaying,
    isEditingTranslation,
    setIsEditingTranslation,
    translationText,
    setTranslationText,
    fileRef,
    handleFile,
    handleDrop,
    handleProcess,
    handleReset,
    handleDownload,
  } = props;

  const selectedLangData = LANGUAGES[selectedLang];

  return (
    <div
      className="relative animate-slide-up"
      style={{ animationDelay: '0.3s', opacity: 0 }}
    >
      {/* Free tag — sits above the tool window */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <span
          className="inline-flex items-center gap-1.5 font-golos text-xs tracking-wider uppercase font-600"
          style={{ color: 'var(--vd-lemon)' }}
        >
          <Icon name="Sparkles" size={13} />
          Попробовать бесплатно
        </span>
        <Icon name="ArrowDown" size={13} className="text-white/40" />
      </div>

      <div
        className="glass rounded-3xl overflow-hidden"
        style={{ border: '1px solid rgba(255,255,255,0.10)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}
      >
        {/* Chrome */}
        <div
          className="flex items-center justify-between px-5 py-3 border-b"
          style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="glass rounded-full px-3 py-0.5 text-[11px] text-white/40 font-golos">
            app.voicedubru.ai
          </div>
          <div className="w-12" />
        </div>

        {/* Tabs */}
        <div
          className="flex px-5 pt-3 pb-0 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); handleReset(); }}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-golos font-500 transition-all duration-200 border-b-2 -mb-px ${
                activeTab === tab.id ? 'text-white' : 'text-white/40 hover:text-white/70 border-transparent'
              }`}
              style={activeTab === tab.id ? { borderColor: 'var(--vd-cyan)' } : {}}
            >
              <Icon name={tab.icon} size={14} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-5" style={{ minHeight: '420px' }}>
          {/* Idle: drop zone */}
          {uploadState === 'idle' && (
            <div className="flex flex-col gap-4">
              <div
                className="rounded-2xl flex flex-col items-center justify-center gap-3 p-8 cursor-pointer transition-all duration-200"
                style={{
                  border: `2px dashed ${isDragging ? 'rgba(0,229,204,0.5)' : 'rgba(255,255,255,0.1)'}`,
                  background: isDragging ? 'rgba(0,229,204,0.04)' : 'rgba(255,255,255,0.02)',
                  transform: isDragging ? 'scale(1.01)' : 'scale(1)',
                }}
                onClick={() => fileRef.current?.click()}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(0,229,204,0.1)', border: '1px solid rgba(0,229,204,0.2)' }}>
                  <Icon name="Upload" size={24} style={{ color: 'var(--vd-cyan)' }} />
                </div>
                <div className="text-center">
                  <p className="text-white/80 font-golos font-500 mb-1">Перетащите аудиофайл сюда</p>
                  <p className="text-white/35 font-golos text-sm">MP3, WAV, M4A, OGG · до 60 секунд</p>
                </div>
                <button
                  className="glass px-5 py-2 rounded-xl font-golos text-sm text-white/70 hover:text-white transition-colors"
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

              {activeTab === 'translate' && (
                <div>
                  <p className="text-white/40 font-golos text-xs uppercase tracking-widest mb-2">Язык перевода</p>
                  <div className="flex flex-wrap gap-2">
                    {LANGUAGES.map((l, i) => (
                      <button
                        key={l.code}
                        onClick={() => setSelectedLang(i)}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 text-sm font-golos"
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
                        <span>{l.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Ready */}
          {uploadState === 'ready' && (
            <div className="rounded-2xl p-5 flex flex-col" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,229,204,0.1)' }}>
                  <Icon name="Music" size={20} style={{ color: 'var(--vd-cyan)' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-golos font-500 truncate text-sm">{fileName}</p>
                  <p className="text-white/40 font-golos text-xs">Готово к обработке</p>
                </div>
                <button onClick={handleReset} className="text-white/30 hover:text-white/60 transition-colors">
                  <Icon name="X" size={18} />
                </button>
              </div>

              {activeTab === 'translate' && (
                <div className="mb-5">
                  <p className="text-white/40 font-golos text-xs uppercase tracking-widest mb-2">Язык перевода</p>
                  <div className="flex flex-wrap gap-2">
                    {LANGUAGES.map((l, i) => (
                      <button
                        key={l.code}
                        onClick={() => setSelectedLang(i)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-200 text-sm font-golos"
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
                        <span>{l.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button onClick={handleProcess} className="btn-grad py-3 rounded-2xl font-syne font-700 text-[#080808] flex items-center justify-center gap-2">
                <Icon name="Wand2" size={16} />
                {activeTab === 'translate' ? `Перевести на ${selectedLangData.name}` : 'Транскрибировать'}
              </button>
            </div>
          )}

          {/* Processing */}
          {uploadState === 'processing' && (
            <div className="rounded-2xl flex flex-col items-center justify-center gap-4 p-10" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="relative">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(0,229,204,0.12)', border: '1px solid rgba(0,229,204,0.3)' }}>
                  <Icon name="Loader" size={26} style={{ color: 'var(--vd-cyan)' }} className="animate-spin" />
                </div>
                <div className="absolute inset-0 rounded-full animate-ping opacity-15" style={{ background: 'var(--vd-cyan)' }} />
              </div>
              <div className="text-center">
                <p className="text-white font-golos font-500 mb-1">Обрабатываем аудио...</p>
                <p className="text-white/40 font-golos text-sm">
                  {activeTab === 'translate'
                    ? `Перевод на ${selectedLangData.flag} ${selectedLangData.name}`
                    : 'Транскрипция русской речи'}
                </p>
              </div>
              <div className="flex items-end justify-center gap-[3px] h-9 w-44">
                {WAVE_SMALL.map((_, i) => (
                  <div
                    key={i}
                    className="wave-bar rounded-full"
                    style={{
                      width: '4px',
                      height: `${WAVE_SMALL_HEIGHTS[i]}px`,
                      background: 'var(--vd-cyan)',
                      opacity: 0.6,
                      animationDelay: `${(i * 0.07) % 1.2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Done */}
          {uploadState === 'done' && (
            <div className="rounded-2xl p-4 flex flex-col gap-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,229,204,0.15)' }}>
                  <Icon name="CheckCircle" size={16} style={{ color: 'var(--vd-cyan)' }} />
                </div>
                <span className="text-white font-golos font-500 text-sm">
                  {activeTab === 'translate'
                    ? `Перевод готов — ${selectedLangData.flag} ${selectedLangData.name}`
                    : 'Транскрипция готова'}
                </span>
              </div>

              {activeTab === 'translate' ? (
                <>
                  <div
                    className="rounded-2xl p-3 flex items-center gap-3"
                    style={{ background: `${selectedLangData.color}08`, border: `1px solid ${selectedLangData.color}25` }}
                  >
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110"
                      style={{ background: selectedLangData.color, color: '#080808' }}
                    >
                      <Icon name={isPlaying ? 'Pause' : 'Play'} size={16} />
                    </button>
                    <div className="flex-1 flex items-end gap-[2px] h-7">
                      {WAVE_SMALL.map((_, i) => (
                        <div
                          key={i}
                          className={isPlaying ? 'wave-bar' : ''}
                          style={{
                            width: '3px',
                            borderRadius: '2px',
                            background: selectedLangData.color,
                            opacity: 0.5,
                            height: `${WAVE_PLAY_HEIGHTS[i]}px`,
                            animationDelay: `${(i * 0.06) % 1.2}s`,
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-white/40 text-xs font-golos flex-shrink-0">0:58</span>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/40 font-golos text-xs uppercase tracking-widest">Текст перевода</span>
                      <button
                        onClick={() => setIsEditingTranslation((v: boolean) => !v)}
                        className="flex items-center gap-1.5 text-xs font-golos transition-colors px-2.5 py-1 rounded-lg"
                        style={isEditingTranslation ? {
                          background: 'rgba(0,229,204,0.12)',
                          color: 'var(--vd-cyan)',
                          border: '1px solid rgba(0,229,204,0.3)',
                        } : {
                          background: 'rgba(255,255,255,0.05)',
                          color: 'rgba(255,255,255,0.45)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <Icon name={isEditingTranslation ? 'Check' : 'Pencil'} size={12} />
                        {isEditingTranslation ? 'Сохранить' : 'Редактировать'}
                      </button>
                    </div>
                    {isEditingTranslation ? (
                      <textarea
                        value={translationText}
                        onChange={(e) => setTranslationText(e.target.value)}
                        rows={4}
                        className="w-full rounded-xl px-3 py-2.5 text-white/80 font-golos text-sm resize-none outline-none leading-relaxed"
                        style={{
                          background: 'rgba(0,229,204,0.04)',
                          border: '1px solid rgba(0,229,204,0.25)',
                        }}
                      />
                    ) : (
                      <div
                        className="rounded-xl px-3 py-2.5 cursor-text"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                        onClick={() => setIsEditingTranslation(true)}
                      >
                        <p className="text-white/65 font-golos text-sm leading-relaxed">{translationText}</p>
                      </div>
                    )}
                  </div>

                  {isEditingTranslation && (
                    <button
                      onClick={() => { setIsEditingTranslation(false); handleProcess(); }}
                      className="btn-grad py-2.5 rounded-2xl font-syne font-700 text-[#080808] text-sm flex items-center justify-center gap-2"
                    >
                      <Icon name="RefreshCw" size={14} />
                      Синтезировать с правками
                    </button>
                  )}
                </>
              ) : (
                <div className="rounded-2xl p-3 flex flex-col gap-1" style={{ background: 'rgba(255,45,138,0.04)', border: '1px solid rgba(255,45,138,0.15)' }}>
                  {DEMO_TRANSCRIPT.map((line) => (
                    <div key={line.time} className="flex gap-3 py-1.5 border-b last:border-0" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                      <span className="text-white/25 font-golos text-xs w-10 flex-shrink-0 pt-0.5">{line.time}</span>
                      <p className="text-white/70 font-golos text-sm leading-relaxed">{line.text}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-2 mt-1">
                <button
                  onClick={handleDownload}
                  className="btn-grad flex-1 py-2.5 rounded-2xl font-syne font-700 text-[#080808] text-sm flex items-center justify-center gap-2"
                >
                  <Icon name="Download" size={15} />
                  {activeTab === 'translate' ? 'Скачать MP3' : 'Скачать TXT'}
                </button>
                <button onClick={handleReset} className="glass px-4 py-2.5 rounded-2xl font-golos text-white/50 hover:text-white text-sm transition-colors">
                  Новый файл
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
