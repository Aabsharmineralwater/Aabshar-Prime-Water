import { useEffect, useState } from 'react';

export default function AquaticBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-white" aria-hidden="true">
      {/* 1. Clean Crisp White / Light Sky Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/40 to-white opacity-100" />

      {/* 2. Soft Animated Caustics Light Layer */}
      <div 
        className="absolute inset-0 aquatic-caustics opacity-40 mix-blend-multiply"
        style={{ transform: `translateY(${scrollY * 0.04}px)` }}
      />

      {/* 3. Water Ripple Surface Mesh */}
      <div className="absolute inset-0 aquatic-ripples opacity-30" />

      {/* 4. Shimmering Soft Cyan Ambient Radial Glow */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,0.12)_0%,rgba(186,230,253,0.15)_40%,transparent_70%)] blur-3xl pointer-events-none"
        style={{ transform: `translateX(-50%) translateY(${scrollY * 0.07}px)` }}
      />

      {/* 5. Rising Floating Water Bubble Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: '4%', size: 'w-2 h-2', delay: '0s', duration: '14s', opacity: 'opacity-35' },
          { left: '9%', size: 'w-3.5 h-3.5', delay: '2s', duration: '11s', opacity: 'opacity-40' },
          { left: '15%', size: 'w-1.5 h-1.5', delay: '5s', duration: '16s', opacity: 'opacity-30' },
          { left: '21%', size: 'w-4 h-4', delay: '1.2s', duration: '12s', opacity: 'opacity-35' },
          { left: '27%', size: 'w-2.5 h-2.5', delay: '6.5s', duration: '9s', opacity: 'opacity-40' },
          { left: '33%', size: 'w-5 h-5', delay: '3.8s', duration: '18s', opacity: 'opacity-25' },
          { left: '39%', size: 'w-2 h-2', delay: '0.8s', duration: '10s', opacity: 'opacity-35' },
          { left: '44%', size: 'w-3 h-3', delay: '7.1s', duration: '15s', opacity: 'opacity-30' },
          { left: '50%', size: 'w-4.5 h-4.5', delay: '2.5s', duration: '13s', opacity: 'opacity-35' },
          { left: '56%', size: 'w-1.5 h-1.5', delay: '4.2s', duration: '8s', opacity: 'opacity-40' },
          { left: '62%', size: 'w-3 h-3', delay: '8s', duration: '17s', opacity: 'opacity-30' },
          { left: '68%', size: 'w-5 h-5', delay: '1.8s', duration: '19s', opacity: 'opacity-25' },
          { left: '73%', size: 'w-2.5 h-2.5', delay: '5.5s', duration: '11s', opacity: 'opacity-35' },
          { left: '79%', size: 'w-4 h-4', delay: '3s', duration: '14s', opacity: 'opacity-40' },
          { left: '84%', size: 'w-2 h-2', delay: '6.2s', duration: '10s', opacity: 'opacity-30' },
          { left: '89%', size: 'w-3.5 h-3.5', delay: '0.5s', duration: '15s', opacity: 'opacity-35' },
          { left: '94%', size: 'w-1.5 h-1.5', delay: '4.8s', duration: '12s', opacity: 'opacity-40' },
          { left: '12%', size: 'w-3 h-3', delay: '8.5s', duration: '13s', opacity: 'opacity-30' },
          { left: '47%', size: 'w-2.5 h-2.5', delay: '9.2s', duration: '16s', opacity: 'opacity-35' },
          { left: '76%', size: 'w-4 h-4', delay: '2.1s', duration: '14s', opacity: 'opacity-30' },
        ].map((b, i) => (
          <div 
            key={i}
            className={`absolute bottom-0 ${b.size} rounded-full bg-gradient-to-tr from-sky-400/20 via-[#00D4FF]/30 to-sky-100/60 border border-sky-300/60 shadow-[0_0_8px_rgba(0,180,216,0.35)] ${b.opacity} ${i % 2 === 0 ? 'animate-bubble-slow' : 'animate-bubble-fast'}`}
            style={{ 
              left: b.left, 
              animationDelay: b.delay, 
              animationDuration: b.duration 
            }} 
          />
        ))}
      </div>
    </div>
  );
}
