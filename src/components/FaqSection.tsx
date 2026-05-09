import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = [
  {
    q: 'Мой голос сохраняется на серверах?',
    a: 'Нет. Аудиофайл удаляется сразу после обработки и не используется для обучения моделей.',
  },
  {
    q: 'Насколько точен перевод?',
    a: 'Модель сохраняет смысл и интонацию. Для важного контента рекомендуем воспользоваться встроенным редактором текста — можно поправить перевод перед синтезом.',
  },
  {
    q: 'Работает только с аудио или можно видео?',
    a: 'Пока только аудио: MP3, WAV, M4A, OGG до 60 секунд. Поддержка видео — в роадмапе.',
  },
  {
    q: 'Можно переводить не с русского?',
    a: 'В текущей версии источник — только русский язык. Другие языки-источники появятся в следующих обновлениях.',
  },
  {
    q: 'Как работает клонирование голоса?',
    a: 'AI анализирует тембр, темп и интонации из вашего аудио и переносит эти характеристики в синтезированный перевод. Чем чище исходная запись — тем точнее результат.',
  },
  {
    q: 'Что будет, когда кончатся бесплатные переводы?',
    a: 'Можно перейти на тариф Про (790 ₽/мес) или написать нам — для крупных проектов есть индивидуальные условия.',
  },
];

export default function FaqSection() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'var(--vd-dark)' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--vd-cyan), transparent)' }}
      />

      <div className="mesh-bg">
        <div
          className="mesh-orb w-80 h-80"
          style={{ top: '-40px', right: '-50px', background: 'var(--vd-cyan)', opacity: 0.08 }}
        />
        <div
          className="mesh-orb w-72 h-72"
          style={{ bottom: '0', left: '-40px', background: 'var(--vd-pink)', opacity: 0.08, animationDelay: '4s' }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
            <Icon name="HelpCircle" size={14} style={{ color: 'var(--vd-cyan)' }} />
            <span className="text-white/60 text-xs font-golos tracking-widest uppercase">FAQ</span>
          </div>
          <h2 className="font-syne font-800 text-4xl md:text-5xl text-white mb-4">
            Частые <span className="grad-text">вопросы</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {FAQ.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-2xl px-5 border-0"
              style={{ border: '1px solid rgba(255,255,255,0.08)' } as React.CSSProperties}
            >
              <AccordionTrigger className="text-white font-golos font-500 text-base text-left hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/60 font-golos text-sm leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
