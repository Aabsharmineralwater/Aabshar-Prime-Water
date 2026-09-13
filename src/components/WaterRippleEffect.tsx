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
      {/* 1. Soft Ambient Water Pool Glow */}
      <div className={`${ringSizeClasses} rounded-[100%] bg-gradient-to-r from-sky-200/30 via-sky-300/35 to-sky-200/30 blur-md`} />

      {/* 2. Concentric Clean Water Ripple Rings */}
      <div className={`absolute ${ringSizeClasses} rounded-[100%] border border-[#0284C7]/35 shadow-xs`} />
      <div className={`absolute ${ringSizeClasses} scale-110 rounded-[100%] border border-sky-300/40`} />
      <div className={`absolute ${ringSizeClasses} scale-125 rounded-[100%] border border-sky-200/30`} />

      {/* 3. SVG Water Surface Reflection */}
      <svg
        viewBox="0 0 160 36"
        className="absolute bottom-0 w-full h-auto opacity-70 pointer-events-none"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="18" cy="22" r="1.5" fill="#0284C7" opacity="0.6" />
        <circle cx="34" cy="14" r="1.2" fill="#38bdf8" opacity="0.6" />
        <circle cx="126" cy="13" r="1.2" fill="#38bdf8" opacity="0.6" />
        <circle cx="142" cy="21" r="1.6" fill="#0284C7" opacity="0.6" />

        <path d="M 28 20 C 48 25, 112 25, 132 20" stroke="#0284C7" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
        <path d="M 40 16 C 58 20, 102 20, 120 16" stroke="#38bdf8" strokeWidth="0.7" opacity="0.4" />
      </svg>
    </div>
  );
};

export default WaterRippleEffect;
