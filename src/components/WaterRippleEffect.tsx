import React from 'react';

interface WaterRippleEffectProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
  * WaterRippleEffect - Stylized animated water ripple & splash graphic
  * Positioned beneath bottle images in showcase cards across the site.
  */
export const WaterRippleEffect: React.FC<WaterRippleEffectProps> = ({
  className = '',
  size = 'md'
}) => {
  const containerSizeClasses = {
    sm: 'w-36 h-8 -bottom-1',
    md: 'w-48 h-10 bottom-1',
    lg: 'w-64 h-12 bottom-2',
  }[size];

  const ringSizeClasses = {
    sm: 'w-32 h-8',
    md: 'w-44 h-10',
    lg: 'w-60 h-12',
  }[size];

  return (
    <div className={`absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none z-10 ${containerSizeClasses} ${className}`}>
      {/* 1. Soft Ambient Cyan Water Pool Glow */}
      <div className={`${ringSizeClasses} rounded-[100%] bg-gradient-to-r from-[#00D4FF]/25 via-[#38bdf8]/35 to-[#00D4FF]/25 blur-md animate-ripple-pulse`} />

      {/* 2. Inner Pulsing Water Ring */}
      <div className={`absolute ${ringSizeClasses} rounded-[100%] border border-[#00D4FF]/70 shadow-[0_0_12px_rgba(0,212,255,0.4)] animate-ripple-pulse`} />

      {/* 3. Outer Expanding Ripple Ring 1 */}
      <div className={`absolute ${ringSizeClasses} rounded-[100%] border border-[#00D4FF]/80 shadow-[0_0_10px_rgba(0,212,255,0.35)] animate-ripple-expand-1`} />

      {/* 4. Outer Expanding Ripple Ring 2 (Staggered) */}
      <div className={`absolute ${ringSizeClasses} rounded-[100%] border border-[#38bdf8]/60 shadow-[0_0_8px_rgba(56,189,248,0.3)] animate-ripple-expand-2`} />

      {/* 5. SVG Water Splash Droplet & Caustic Shimmer Overlay */}
      <svg
        viewBox="0 0 160 36"
        className="absolute bottom-0 w-full h-auto opacity-75 animate-splash-shimmer pointer-events-none"
        fill="none"
        aria-hidden="true"
      >
        {/* Fine splash droplets around perimeter */}
        <circle cx="18" cy="22" r="1.5" fill="#00D4FF" className="animate-pulse" />
        <circle cx="34" cy="14" r="1.2" fill="#38bdf8" />
        <circle cx="52" cy="26" r="1.8" fill="#4FD1E8" />
        <circle cx="108" cy="27" r="1.5" fill="#00D4FF" />
        <circle cx="126" cy="13" r="1.2" fill="#38bdf8" />
        <circle cx="142" cy="21" r="1.6" fill="#4FD1E8" className="animate-pulse" />

        {/* Concentric subtle dash curve lines indicating water surface displacement */}
        <path d="M 28 20 C 48 25, 112 25, 132 20" stroke="#00D4FF" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.65" />
        <path d="M 40 16 C 58 20, 102 20, 120 16" stroke="#38bdf8" strokeWidth="0.7" opacity="0.5" />
      </svg>
    </div>
  );
};

export default WaterRippleEffect;
