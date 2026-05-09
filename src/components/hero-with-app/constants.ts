export const WAVE_BARS = Array.from({ length: 32 });
export const WAVE_HEIGHTS = WAVE_BARS.map((_, i) => 14 + Math.sin(i * 0.4) * 18 + Math.random() * 12);
export const WAVE_OPACITIES = WAVE_BARS.map((_, i) => 0.7 + Math.sin(i * 0.3) * 0.3);
export const WAVE_DURATIONS = WAVE_BARS.map(() => 0.8 + Math.random() * 0.8);

export const LANGS = [
  { flag: '🇬🇧', name: 'English' },
  { flag: '🇪🇸', name: 'Español' },
  { flag: '🇵🇹', name: 'Português' },
  { flag: '🇩🇪', name: 'Deutsch' },
  { flag: '🇫🇷', name: 'Français' },
];

export const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', name: 'English', color: 'var(--vd-cyan)' },
  { code: 'es', flag: '🇪🇸', name: 'Español', color: 'var(--vd-pink)' },
  { code: 'pt', flag: '🇵🇹', name: 'Português', color: 'var(--vd-lemon)' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch', color: 'var(--vd-cyan)' },
  { code: 'fr', flag: '🇫🇷', name: 'Français', color: 'var(--vd-pink)' },
];

export const TABS = [
  { id: 'translate', label: 'Перевод аудио', icon: 'Languages' },
  { id: 'transcript', label: 'Транскрипция', icon: 'FileText' },
];

export const WAVE_SMALL = Array.from({ length: 28 });
export const WAVE_SMALL_HEIGHTS = WAVE_SMALL.map((_, i) => 10 + Math.sin(i * 0.5) * 12 + 8);
export const WAVE_PLAY_HEIGHTS = WAVE_SMALL.map((_, i) => 8 + Math.sin(i * 0.5) * 10 + 8);

export const DEMO_TRANSLATION =
  "Hey! Today I'm sharing my travel experience in Tokyo — the most incredible city I've ever visited. The food, the culture, the energy — it's simply amazing.";

export const DEMO_TRANSCRIPT = [
  { time: '0:00', text: 'Привет! Сегодня делюсь опытом путешествия по Токио.' },
  { time: '0:04', text: 'Это самый удивительный город, в котором я побывал.' },
  { time: '0:09', text: 'Еда, культура, атмосфера — просто невероятно.' },
];

export type UploadState = 'idle' | 'ready' | 'processing' | 'done';
