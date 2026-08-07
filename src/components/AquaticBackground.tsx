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
    </div>
  );
}
