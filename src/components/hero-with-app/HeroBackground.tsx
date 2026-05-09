export default function HeroBackground() {
  return (
    <>
      {/* Mesh orbs */}
      <div className="mesh-bg">
        <div className="mesh-orb w-[600px] h-[600px]" style={{ top: '-150px', left: '-200px', background: 'var(--vd-cyan)', animationDelay: '0s' }} />
        <div className="mesh-orb w-[500px] h-[500px]" style={{ top: '200px', right: '-200px', background: 'var(--vd-pink)', animationDelay: '3s' }} />
        <div className="mesh-orb w-[350px] h-[350px]" style={{ bottom: '-80px', left: '35%', background: 'var(--vd-lemon)', animationDelay: '5s', opacity: 0.18 }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </>
  );
}
