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

  // 20 distinct floating bubble particles with varying sizes (4px to 20px), staggered positions, and durations
  const bubbles = [
    { left: '4%', size: 'w-2 h-2', delay: '0s', duration: '14s', opacity: 'opacity-30' },
    { left: '9%', size: 'w-3.5 h-3.5', delay: '2s', duration: '11s', opacity: 'opacity-35' },
    { left: '15%', size: 'w-1.5 h-1.5', delay: '5s', duration: '16s', opacity: 'opacity-25' },
    { left: '21%', size: 'w-4 h-4', delay: '1.2s', duration: '12s', opacity: 'opacity-30' },
    { left: '27%', size: 'w-2.5 h-2.5', delay: '6.5s', duration: '9s', opacity: 'opacity-35' },
    { left: '33%', size: 'w-5 h-5', delay: '3.8s', duration: '18s', opacity: 'opacity-20' },
    { left: '39%', size: 'w-2 h-2', delay: '0.8s', duration: '10s', opacity: 'opacity-30' },
    { left: '44%', size: 'w-3 h-3', delay: '7.1s', duration: '15s', opacity: 'opacity-25' },
    { left: '50%', size: 'w-4.5 h-4.5', delay: '2.5s', duration: '13s', opacity: 'opacity-30' },
    { left: '56%', size: 'w-1.5 h-1.5', delay: '4.2s', duration: '8s', opacity: 'opacity-35' },
    { left: '62%', size: 'w-3 h-3', delay: '8s', duration: '17s', opacity: 'opacity-25' },
    { left: '68%', size: 'w-5 h-5', delay: '1.8s', duration: '19s', opacity: 'opacity-20' },
    { left: '73%', size: 'w-2.5 h-2.5', delay: '5.5s', duration: '11s', opacity: 'opacity-30' },
    { left: '79%', size: 'w-4 h-4', delay: '3s', duration: '14s', opacity: 'opacity-35' },
    { left: '84%', size: 'w-2 h-2', delay: '6.2s', duration: '10s', opacity: 'opacity-25' },
    { left: '89%', size: 'w-3.5 h-3.5', delay: '0.5s', duration: '15s', opacity: 'opacity-30' },
    { left: '94%', size: 'w-1.5 h-1.5', delay: '4.8s', duration: '12s', opacity: 'opacity-35' },
    { left: '12%', size: 'w-3 h-3', delay: '8.5s', duration: '13s', opacity: 'opacity-25' },
    { left: '47%', size: 'w-2.5 h-2.5', delay: '9.2s', duration: '16s', opacity: 'opacity-30' },
    { left: '76%', size: 'w-4 h-4', delay: '2.1s', duration: '14s', opacity: 'opacity-25' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Deep Ocean / Aquatic Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1930] via-[#0D223D] to-[#0A1930] opacity-98" />

      {/* 2. Soft Animated Caustics Light Layer */}
      <div 
        className="absolute inset-0 aquatic-caustics opacity-45 mix-blend-screen"
        style={{ transform: `translateY(${scrollY * 0.04}px)` }}
      />

      {/* 3. Water Ripple Surface Mesh */}
      <div className="absolute inset-0 aquatic-ripples opacity-35" />

      {/* 4. Shimmering Pool Surface Light Rays */}
      <div 
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.22)_0%,rgba(79,209,232,0.10)_40%,transparent_70%)] blur-3xl pointer-events-none animate-pulse"
        style={{ transform: `translateX(-50%) translateY(${scrollY * 0.07}px)` }}
      />

      {/* 5. Flowing Gentle Wave Vectors - Layer 1 (Top) */}
      <div className="absolute inset-x-0 top-1/6 opacity-25 transform -translate-y-1/2 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[200%] h-28 text-[#00D4FF] fill-current animate-wave-1">
          <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Flowing Wave - Layer 2 (Middle) */}
      <div className="absolute inset-x-0 top-1/2 opacity-20 transform -translate-y-1/2 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[200%] h-32 text-[#22d3ee] fill-current animate-wave-2">
          <path d="M0,40 C300,100 500,0 800,70 C1000,120 1100,20 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* Flowing Wave - Layer 3 (Bottom) */}
      <div className="absolute inset-x-0 top-5/6 opacity-20 transform -translate-y-1/2 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-[200%] h-36 text-[#00D4FF] fill-current animate-wave-1" style={{ animationDirection: 'reverse', animationDuration: '22s' }}>
          <path d="M0,20 C200,80 400,-20 700,60 C900,100 1050,30 1200,50 L1200,120 L0,120 Z" />
        </svg>
      </div>

      {/* 6. 20 Rising Floating Water Bubble Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((b, i) => (
          <div 
            key={i}
            className={`absolute bottom-0 ${b.size} rounded-full bg-gradient-to-tr from-cyan-300 via-sky-200 to-white/90 border border-white/60 shadow-[0_0_10px_rgba(0,212,255,0.7)] ${b.opacity} ${i % 2 === 0 ? 'animate-bubble-slow' : 'animate-bubble-fast'}`}
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
