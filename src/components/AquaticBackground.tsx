export default function AquaticBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-white" aria-hidden="true">
      {/* 1. Clean Crisp White / Light Sky Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/40 to-white opacity-100" />

      {/* 2. Shimmering Soft Cyan Ambient Radial Glow (Static, GPU-Friendly) */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,0.08)_0%,rgba(186,230,253,0.12)_40%,transparent_70%)] blur-3xl pointer-events-none"
      />
    </div>
  );
}
