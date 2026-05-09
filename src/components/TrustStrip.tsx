import Icon from '@/components/ui/icon';

const ITEMS = [
  { icon: 'Globe', val: '5 языков', label: 'EN · ES · PT · DE · FR' },
  { icon: 'Gift', val: '3 бесплатно', label: 'без карты и регистрации' },
  { icon: 'Zap', val: 'меньше 10 сек', label: 'время обработки' },
  { icon: 'Shield', val: '100% приватно', label: 'файлы удаляются сразу' },
];

export default function TrustStrip() {
  return (
    <div
      className="py-6 px-6"
      style={{
        background: 'var(--vd-dark2)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {ITEMS.map((item) => (
          <div key={item.val} className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(0,229,204,0.1)', border: '1px solid rgba(0,229,204,0.2)' }}
            >
              <Icon name={item.icon} size={15} style={{ color: 'var(--vd-cyan)' }} />
            </div>
            <div className="min-w-0">
              <div className="font-syne font-700 text-white text-sm truncate">{item.val}</div>
              <div className="text-white/40 font-golos text-xs truncate">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
