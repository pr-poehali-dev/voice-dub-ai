import { useRef, useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { DEMO_TRANSLATION, UploadState } from './hero-with-app/constants';
import HeroBackground from './hero-with-app/HeroBackground';
import HeroContent from './hero-with-app/HeroContent';
import AppTool from './hero-with-app/AppTool';

export default function HeroWithApp() {
  const [activeTab, setActiveTab] = useState('translate');
  const [selectedLang, setSelectedLang] = useState(0);
  const [uploadState, setUploadState] = useState<UploadState>('idle');
  const [fileName, setFileName] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEditingTranslation, setIsEditingTranslation] = useState(false);
  const [translationText, setTranslationText] = useState(DEMO_TRANSLATION);
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
    setTranslationText(DEMO_TRANSLATION);
    setIsEditingTranslation(false);
    setTimeout(() => setUploadState('done'), 2800);
  };

  const handleReset = () => {
    setUploadState('idle');
    setFileName('');
    setIsPlaying(false);
    setIsEditingTranslation(false);
    if (fileRef.current) fileRef.current.value = '';
  };

  const handleDownload = () => {
    toast({
      title: 'Скачивание будет доступно в полной версии',
      description: 'Запишитесь в бета-тест — отправим первыми, как только откроем загрузку.',
    });
    document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="app"
      className="relative min-h-screen pt-28 lg:pt-32 pb-16 px-6 overflow-hidden"
      style={{ background: 'var(--vd-dark)' }}
    >
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <HeroContent />
        <AppTool
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedLang={selectedLang}
          setSelectedLang={setSelectedLang}
          uploadState={uploadState}
          fileName={fileName}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          isEditingTranslation={isEditingTranslation}
          setIsEditingTranslation={setIsEditingTranslation}
          translationText={translationText}
          setTranslationText={setTranslationText}
          fileRef={fileRef}
          handleFile={handleFile}
          handleDrop={handleDrop}
          handleProcess={handleProcess}
          handleReset={handleReset}
          handleDownload={handleDownload}
        />
      </div>
    </section>
  );
}
