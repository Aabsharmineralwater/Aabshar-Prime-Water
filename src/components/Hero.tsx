import { ArrowRight, Sparkles, ShieldCheck, Droplets } from 'lucide-react';
import { motion } from 'motion/react';
import combinedBottlesImage from '../assets/images/hero_combined_bottles.png';

interface HeroProps {
  onOrderClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onOrderClick, onExploreClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-10 sm:pt-32 sm:pb-14 md:pt-32 lg:pt-36 flex items-center justify-center noise-overlay overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-slate-50"
    >
      {/* 1. Two Soft Radial Glow Blobs in Opposite Corners (Light blue, ~0.15-0.2 opacity) */}
      <div className="absolute -top-20 -left-20 sm:-top-28 sm:-left-28 w-80 sm:w-96 lg:w-[480px] h-80 sm:h-96 lg:h-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,180,216,0.18)_0%,transparent_70%)] blur-2xl sm:blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-20 -right-20 sm:-bottom-28 sm:-right-28 w-80 sm:w-96 lg:w-[500px] h-80 sm:h-96 lg:h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.16)_0%,transparent_70%)] blur-2xl sm:blur-3xl pointer-events-none z-0" />

      {/* 2. Faint Expanding Ripple Rings Scattered on Staggered 6-Second Loops */}
      <div className="absolute top-[18%] left-[10%] sm:left-[14%] -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-60 sm:h-60 pointer-events-none z-0">
        <motion.div
          animate={{ scale: [0.35, 1.55], opacity: [0.4, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 0, ease: 'easeOut' }}
          className="w-full h-full rounded-full border border-sky-400/40"
        />
        <motion.div
          animate={{ scale: [0.25, 1.25], opacity: [0.3, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 0.6, ease: 'easeOut' }}
          className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-full border border-sky-300/30"
        />
      </div>

      <div className="absolute top-[68%] left-[40%] sm:left-[35%] -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 pointer-events-none z-0">
        <motion.div
          animate={{ scale: [0.35, 1.55], opacity: [0.38, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2, ease: 'easeOut' }}
          className="w-full h-full rounded-full border border-sky-400/35"
        />
        <motion.div
          animate={{ scale: [0.25, 1.25], opacity: [0.28, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2.6, ease: 'easeOut' }}
          className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-full border border-sky-300/25"
        />
      </div>

      <div className="absolute top-[28%] right-[8%] sm:right-[12%] translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 pointer-events-none z-0">
        <motion.div
          animate={{ scale: [0.35, 1.55], opacity: [0.35, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 4, ease: 'easeOut' }}
          className="w-full h-full rounded-full border border-sky-400/35"
        />
        <motion.div
          animate={{ scale: [0.25, 1.25], opacity: [0.25, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 4.6, ease: 'easeOut' }}
          className="absolute inset-0 m-auto w-3/4 h-3/4 rounded-full border border-sky-300/25"
        />
      </div>

      {/* 3. Tiny (4px) Soft Blue Dots Gently Drifting Up and Down */}
      {[
        { top: '20%', left: '8%', duration: 6.2, delay: 0 },
        { top: '38%', left: '26%', duration: 7.4, delay: 1.2 },
        { top: '76%', left: '16%', duration: 5.8, delay: 0.6 },
        { top: '16%', right: '22%', duration: 6.8, delay: 1.8 },
        { top: '56%', right: '14%', duration: 6.0, delay: 2.4 },
        { top: '80%', right: '28%', duration: 7.2, delay: 0.9 },
      ].map((dot, idx) => (
        <motion.div
          key={idx}
          style={{ top: dot.top, left: dot.left, right: dot.right }}
          animate={{ y: [-7, 7, -7], opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: dot.duration, repeat: Infinity, delay: dot.delay, ease: 'easeInOut' }}
          className="absolute w-1 h-1 rounded-full bg-[#00D4FF] shadow-[0_0_6px_rgba(0,212,255,0.7)] pointer-events-none z-0"
        />
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Headline - Clean & Responsive across all viewports */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="order-1 font-serif text-2xl min-[360px]:text-[28px] sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight mt-1 sm:mt-0 mb-2 sm:mb-3"
            >
              <span className="font-serif font-black text-slate-900 tracking-tight">Aabshar </span>
              <span className="font-serif italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0088CC] via-[#00B4D8] to-[#0284C7] drop-shadow-[0_2px_10px_rgba(0,180,216,0.25)] whitespace-nowrap">
                Prime Water
              </span>
            </motion.h1>

            {/* 3. Tagline: "Pure Water. Pure Trust." (order-3 on mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="order-3 flex items-center gap-2 mb-3 sm:mb-5 group cursor-default"
            >
              <span className="h-[1.5px] w-5 bg-gradient-to-r from-transparent to-[#0088CC]" />
              <div className="relative inline-flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#0088CC] animate-pulse" />
                <p className="font-serif italic font-bold text-xs sm:text-lg text-[#0284C7] tracking-wider uppercase">
                  Pure Water. Pure Trust.
                </p>
                <div className="w-2 h-2 rounded-full bg-[#00D4FF] animate-ping opacity-75" />
              </div>
              <span className="h-[1.5px] w-5 bg-gradient-to-l from-transparent to-[#0088CC]" />
            </motion.div>

            {/* 4. MOBILE-ONLY PROMINENT BOTTLE IMAGE (order-4 on mobile, hidden on lg desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-4 block lg:hidden my-3 sm:my-5 w-full max-w-[360px] sm:max-w-[420px] mx-auto text-center relative"
            >
              {/* Radial ice-cyan glow background behind bottles */}
              <div className="absolute inset-0 m-auto w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(0,180,216,0.22)_0%,transparent_70%)] blur-xl rounded-full pointer-events-none" />

              {/* Bottle with anchored Water Ripple / Splash directly beneath */}
              <div className="relative inline-flex flex-col items-center justify-center mx-auto pb-4">
                <img
                  src={combinedBottlesImage}
                  alt="Aabshar Prime Water Bottles"
                  loading="eager"
                  className="max-h-[290px] sm:max-h-[350px] w-auto mx-auto object-contain relative z-10 filter drop-shadow-[0_16px_30px_rgba(2,132,199,0.25)] animate-float"
                  referrerPolicy="no-referrer"
                />

                {/* Sublte Glowing Water Ripple & Splash Effect directly below bottle bases */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-64 sm:w-72 h-14 pointer-events-none z-0 flex items-center justify-center">
                  {/* Soft Glowing Water Pond */}
                  <div className="w-56 sm:w-64 h-8 rounded-[100%] bg-gradient-to-r from-[#00D4FF]/30 via-[#38bdf8]/45 to-[#00D4FF]/30 blur-md animate-ripple-pulse" />
                  
                  {/* Inner Water Reflection Ellipse */}
                  <div className="absolute w-44 sm:w-52 h-6 rounded-[100%] bg-sky-200/40 blur-[2px]" />

                  {/* Concentric Water Ripple Rings */}
                  <div className="absolute w-48 sm:w-56 h-7 rounded-[100%] border-2 border-[#00D4FF] shadow-[0_0_14px_rgba(0,212,255,0.65)] animate-ripple-pulse" />
                  <div className="absolute w-56 sm:w-64 h-9 rounded-[100%] border border-[#00D4FF]/75 shadow-[0_0_10px_rgba(0,212,255,0.4)] animate-ripple-expand-1" />
                  <div className="absolute w-64 sm:w-72 h-11 rounded-[100%] border border-[#38bdf8]/50 shadow-[0_0_8px_rgba(56,189,248,0.3)] animate-ripple-expand-2" />

                  {/* SVG Water Splash Droplets & Arc Reflections */}
                  <svg viewBox="0 0 200 40" className="absolute inset-0 w-full h-full pointer-events-none" fill="none">
                    {/* Splash Droplets */}
                    <circle cx="22" cy="18" r="2.2" fill="#00D4FF" className="animate-pulse" />
                    <circle cx="36" cy="12" r="1.5" fill="#38bdf8" />
                    <circle cx="54" cy="28" r="2" fill="#00D4FF" />
                    <circle cx="146" cy="28" r="2" fill="#00D4FF" />
                    <circle cx="164" cy="12" r="1.5" fill="#38bdf8" />
                    <circle cx="178" cy="18" r="2.2" fill="#00D4FF" className="animate-pulse" />
                    
                    {/* Surface Wave Curves */}
                    <ellipse cx="100" cy="20" rx="78" ry="11" stroke="#00D4FF" strokeWidth="1.2" strokeDasharray="6 4" opacity="0.75" />
                    <ellipse cx="100" cy="20" rx="52" ry="7" stroke="#38bdf8" strokeWidth="1" opacity="0.8" />
                  </svg>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 mt-1 px-3.5 py-1 rounded-full bg-white/95 border border-slate-200 text-slate-800 text-[10px] sm:text-xs font-bold shadow-md relative z-10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>100% Lab Verified • 120-160 TDS</span>
              </div>
            </motion.div>

            {/* 5. CTA action buttons (order-5 on mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="order-5 flex flex-col sm:flex-row gap-3.5 sm:gap-4 mb-5 sm:mb-6"
            >
              {/* Premium Aqua CTA Button */}
              <a
                id="hero-order-cta"
                href="https://wa.me/923051999897?text=Hi%20Aabshar,%20I%20would%20like%20to%20place%20an%20order%20for%20Aabshar%20Prime%20Water."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#00D4FF] via-[#0284C7] to-[#0369A1] hover:brightness-110 text-white font-black text-xs sm:text-base uppercase tracking-wider rounded-full shadow-[0_4px_20px_rgba(2,132,199,0.35)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] border border-[#00D4FF]/60 active:scale-95 transition-all duration-300 press-scale cursor-pointer flex items-center justify-center gap-2 group"
              >
                <Droplets className="w-4 h-4 text-white fill-white group-hover:animate-bounce" />
                <span>ORDER DOORSTEP DELIVERY</span>
              </a>
              
              <button
                id="hero-explore-cta"
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0284C7] font-bold text-xs sm:text-base rounded-full border border-slate-300 hover:border-sky-400 shadow-sm active:scale-95 transition-all duration-300 press-scale cursor-pointer group flex items-center justify-center gap-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#0284C7] group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* 6. Description paragraph (order-6 on mobile) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-6 font-sans text-slate-600 text-sm sm:text-lg font-normal leading-relaxed mb-0 sm:mb-8 max-w-xl"
            >
              Aabshar Prime Water is a trusted bottled water brand dedicated to providing pure, safe, and refreshing drinking water. We maintain high standards of quality, hygiene, and customer satisfaction to ensure every bottle delivers freshness and trust.
            </motion.p>

            {/* 7. ELEGANT HORIZONTAL STAT STRIP (Hidden on mobile, visible on sm/md/lg tablet & desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35 }}
              className="hidden sm:grid order-7 w-full max-w-2xl py-4 px-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/80 shadow-sm sm:grid-cols-4 gap-4 sm:divide-x divide-slate-200"
            >
              {/* Stat 1: 500+ */}
              <div className="flex flex-col justify-center sm:pr-4">
                <span className="font-serif text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0088CC] to-[#0284C7] leading-tight">
                  500+
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] text-slate-600 font-semibold uppercase tracking-wider mt-0.5">
                  Homes & B2B
                </span>
              </div>

              {/* Stat 2: 135 PPM */}
              <div className="flex flex-col justify-center pt-2 sm:pt-0 sm:px-4">
                <span className="font-serif text-2xl sm:text-4xl font-black text-[#0284C7] leading-tight">
                  135
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] text-slate-600 font-semibold uppercase tracking-wider mt-0.5">
                  Bio TDS PPM
                </span>
              </div>

              {/* Stat 3: 100% Pure */}
              <div className="flex flex-col justify-center pt-2 sm:pt-0 sm:px-4">
                <span className="font-serif text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                  100%
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] text-slate-600 font-semibold uppercase tracking-wider mt-0.5">
                  PCRWR Lab
                </span>
              </div>

              {/* Stat 4: Daily Fleet */}
              <div className="flex flex-col justify-center pt-2 sm:pt-0 sm:pl-4">
                <span className="font-serif text-2xl sm:text-4xl font-black text-[#0088CC] leading-tight">
                  Daily
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] text-slate-600 font-semibold uppercase tracking-wider mt-0.5">
                  Chilled Fleet
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-fidelity bottle hero shot (DESKTOP ONLY lg:block) */}
          <div className="hidden lg:col-span-5 lg:flex justify-end select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="relative max-w-lg w-full flex items-center justify-center py-6"
            >
              {/* Radial ice-cyan glow background beneath bottle */}
              <div className="absolute inset-0 m-auto w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(0,180,216,0.22)_0%,transparent_70%)] blur-2xl rounded-full pointer-events-none" />

              {/* Single combined bottle image with anchored water ripple */}
              <div className="relative flex flex-col items-center justify-center h-[520px] lg:h-[570px] w-full pb-6">
                <img
                  src={combinedBottlesImage}
                  alt="Aabshar Prime Water Bottles"
                  loading="eager"
                  className="max-h-[460px] lg:max-h-[500px] w-auto animate-float object-contain relative z-10 filter drop-shadow-[0_20px_35px_rgba(2,132,199,0.25)]"
                  referrerPolicy="no-referrer"
                />

                {/* Sublte Glowing Water Ripple & Splash Effect directly below desktop bottle bases */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-96 lg:w-[460px] h-20 pointer-events-none z-0 flex items-center justify-center">
                  {/* Soft Glowing Water Pond */}
                  <div className="w-80 lg:w-96 h-12 rounded-[100%] bg-gradient-to-r from-[#00D4FF]/35 via-[#38bdf8]/50 to-[#00D4FF]/35 blur-lg animate-ripple-pulse" />
                  
                  {/* Inner Water Reflection Ellipse */}
                  <div className="absolute w-72 lg:w-84 h-9 rounded-[100%] bg-sky-200/50 blur-[3px]" />

                  {/* Concentric Water Ripple Rings */}
                  <div className="absolute w-76 lg:w-88 h-11 rounded-[100%] border-2 border-[#00D4FF] shadow-[0_0_20px_rgba(0,212,255,0.7)] animate-ripple-pulse" />
                  <div className="absolute w-88 lg:w-[410px] h-14 rounded-[100%] border border-[#00D4FF]/80 shadow-[0_0_16px_rgba(0,212,255,0.5)] animate-ripple-expand-1" />
                  <div className="absolute w-96 lg:w-[460px] h-16 rounded-[100%] border border-[#38bdf8]/50 shadow-[0_0_12px_rgba(56,189,248,0.35)] animate-ripple-expand-2" />
                  
                  {/* SVG Water Splash Droplets & Arc Reflections */}
                  <svg viewBox="0 0 300 50" className="absolute inset-0 w-full h-full pointer-events-none" fill="none">
                    {/* Splash Droplets */}
                    <circle cx="28" cy="24" r="2.8" fill="#00D4FF" className="animate-pulse" />
                    <circle cx="48" cy="15" r="2" fill="#38bdf8" />
                    <circle cx="75" cy="34" r="2.5" fill="#00D4FF" />
                    <circle cx="225" cy="35" r="2.5" fill="#00D4FF" />
                    <circle cx="252" cy="16" r="2" fill="#38bdf8" />
                    <circle cx="272" cy="25" r="2.8" fill="#00D4FF" className="animate-pulse" />
                    
                    {/* Concentric Arc Waves */}
                    <ellipse cx="150" cy="25" rx="125" ry="15" stroke="url(#desktop-hero-ripple-grad)" strokeWidth="1.5" strokeDasharray="8 5" opacity="0.8" />
                    <ellipse cx="150" cy="25" rx="85" ry="10" stroke="#38bdf8" strokeWidth="1.2" opacity="0.85" />
                    <defs>
                      <linearGradient id="desktop-hero-ripple-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#00D4FF" stopOpacity="1" />
                        <stop offset="100%" stopColor="#0284C7" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              
              {/* Floating glass badge */}
              <div 
                className="absolute bottom-10 left-2 md:left-6 bg-white/95 border border-slate-200/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-xl z-30 animate-float [animation-delay:2s] text-left flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#0284C7] flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-mono text-[10px] sm:text-xs text-[#0284C7] uppercase tracking-wider font-extrabold">Lab Quality</p>
                  <p className="font-serif text-sm sm:text-base text-slate-900 font-extrabold">100% PCRWR Verified</p>
                  <p className="font-sans text-[10px] sm:text-xs text-slate-500">Optimal 120–160 TDS Balance</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

