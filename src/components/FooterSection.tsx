import Icon from '@/components/ui/icon';

export default function FooterSection() {
  return (
    <footer
      className="relative py-12 px-6"
      style={{ background: 'var(--vd-dark)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg btn-grad flex items-center justify-center">
              <Icon name="Mic" size={16} className="text-white" />
            </div>
            <span className="font-syne font-800 text-lg text-white tracking-tight">
              VoiceDub<span className="grad-text">Ru</span> AI
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-white/40 font-golos text-sm">
            {['Политика конфиденциальности', 'Условия использования', 'Cookies'].map((l) => (
              <a key={l} href="#" className="hover:text-white/70 transition-colors">{l}</a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/25 font-golos text-sm">
            © 2026 VoiceDubRu AI
          </p>
        </div>
      </div>
    </footer>
  );
}