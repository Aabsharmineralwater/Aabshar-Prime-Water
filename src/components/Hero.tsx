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
      className="relative min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 flex items-center justify-center noise-overlay overflow-hidden bg-[#0A1930]"
    >
      {/* Cinematic dark water splash background scoped strictly to Hero */}
      <div className="hero-bg-backdrop" role="presentation" />

      {/* 1. Heavy dark navy gradient overlay for maximum text contrast & legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1930]/95 via-[#0A1930]/85 to-[#0A1930]/40 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1930] via-transparent to-[#0A1930]/80 z-0 pointer-events-none" />

      {/* 2. Ice-Blue Caustic & Spotlight Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.18)_0%,transparent_60%)] z-0 pointer-events-none" />

      {/* 3. Interactive Water Ripple Circle (Ice-Blue) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full border border-[#00D4FF]/20 animate-ping opacity-20 pointer-events-none z-0" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] rounded-full border border-[#38bdf8]/30 animate-pulse opacity-30 pointer-events-none z-0" />

      {/* Smooth blend into next section with SVG shoreline wave */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none z-20">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="w-full h-8 sm:h-12 text-[#0D223D] fill-current opacity-80">
          <path d="M0,0 C300,50 600,-20 900,40 C1050,60 1150,20 1200,30 L1200,80 L0,80 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Headline - Single line on mobile */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="order-1 font-serif text-[22px] min-[370px]:text-[25px] min-[420px]:text-[28px] sm:text-5xl lg:text-7.5xl font-extrabold tracking-tight leading-[1.1] mt-1 sm:mt-0 mb-2 sm:mb-3 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] whitespace-nowrap sm:whitespace-normal"
            >
              <span className="font-serif font-black text-white tracking-tight">Aabshar </span>
              <span className="font-serif italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#38bdf8] to-[#C9A24A] drop-shadow-[0_4px_25px_rgba(0,212,255,0.4)]">
                Prime Water
              </span>
            </motion.h1>

            {/* 3. Tagline: "Pure Water. Pure Trust." (order-3 on mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="order-3 flex items-center gap-2 mb-3 sm:mb-5"
            >
              <span className="h-[1px] w-5 bg-gradient-to-r from-transparent to-[#00D4FF]" />
              <p className="font-serif italic font-semibold text-xs sm:text-lg text-[#00D4FF] tracking-wider uppercase">
                Pure Water. Pure Trust.
              </p>
              <span className="h-[1px] w-5 bg-gradient-to-l from-transparent to-[#00D4FF]" />
            </motion.div>

            {/* 4. MOBILE-ONLY PROMINENT BOTTLE IMAGE (order-4 on mobile, hidden on lg desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-4 block lg:hidden my-2.5 sm:my-5 w-full max-w-[360px] sm:max-w-[420px] mx-auto text-center relative"
            >
              <div className="absolute inset-0 m-auto w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.42)_0%,transparent_70%)] blur-xl rounded-full pointer-events-none" />
              <img
                src={combinedBottlesImage}
                alt="Aabshar Prime Water Bottles"
                loading="eager"
                className="max-h-[290px] sm:max-h-[350px] w-auto mx-auto object-contain relative z-10 filter drop-shadow-[0_16px_35px_rgba(0,212,255,0.5)] animate-float"
                referrerPolicy="no-referrer"
              />
              <div className="inline-flex items-center gap-2 mt-2 px-3.5 py-1 rounded-full bg-[#0A1930]/95 border border-[#00D4FF]/40 text-white text-[10px] sm:text-xs font-bold shadow-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00D4FF]" />
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
              {/* Premium Gold CTA Button */}
              <a
                id="hero-order-cta"
                href="https://wa.me/923051999897?text=Hi%20Aabshar,%20I%20would%20like%20to%20place%20an%20order%20for%20Aabshar%20Prime%20Water."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#C9A24A] via-[#E5C158] to-[#C9A24A] hover:brightness-110 text-[#0A1930] font-black text-xs sm:text-base uppercase tracking-wider rounded-full shadow-[0_4px_25px_rgba(201,162,74,0.45)] hover:shadow-[0_0_35px_rgba(201,162,74,0.7)] border border-[#E5C158]/60 active:scale-95 transition-all duration-300 press-scale cursor-pointer flex items-center justify-center gap-2 group"
              >
                <Droplets className="w-4 h-4 text-[#0A1930] fill-[#0A1930] group-hover:animate-bounce" />
                <span>ORDER DOORSTEP DELIVERY</span>
              </a>
              
              <button
                id="hero-explore-cta"
                onClick={onExploreClick}
                className="w-full sm:w-auto relative p-[1.5px] rounded-full bg-gradient-to-r from-[#00D4FF] via-[#38bdf8] to-[#C9A24A] hover:shadow-[0_0_25px_rgba(0,212,255,0.45)] active:scale-95 transition-all duration-300 press-scale cursor-pointer group shadow-md"
              >
                <span className="w-full h-full px-7 sm:px-8 py-3 sm:py-3.5 bg-[#0A1930]/90 group-hover:bg-[#00D4FF] text-white group-hover:text-[#0A1930] font-bold text-xs sm:text-base rounded-full transition-colors duration-300 flex items-center justify-center gap-2 backdrop-blur-md">
                  Explore Products
                  <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#00D4FF] group-hover:text-[#0A1930] transition-colors" />
                </span>
              </button>
            </motion.div>

            {/* 6. Description paragraph (order-6 on mobile) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-6 font-sans text-slate-200 text-sm sm:text-xl font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl text-shadow-sm"
            >
              Lab-verified, scientifically balanced mineral water sourced with pristine purity. Experience daily doorstep delivery across Rawalpindi, Islamabad, and Fateh Jang.
            </motion.p>

            {/* 7. ELEGANT HORIZONTAL STAT STRIP (order-7 on mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35 }}
              className="order-7 w-full max-w-2xl py-4 px-2 border-t border-b border-[#00D4FF]/25 grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#00D4FF]/20"
            >
              {/* Stat 1: 500+ */}
              <div className="flex flex-col justify-center sm:pr-4">
                <span className="font-serif text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#C9A24A] to-[#E5C158] leading-tight">
                  500+
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] text-slate-300 font-semibold uppercase tracking-wider mt-0.5">
                  Homes & B2B
                </span>
              </div>

              {/* Stat 2: 135 PPM */}
              <div className="flex flex-col justify-center pt-2 sm:pt-0 sm:px-4">
                <span className="font-serif text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-sky-200 leading-tight">
                  135
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] text-slate-300 font-semibold uppercase tracking-wider mt-0.5">
                  Bio TDS PPM
                </span>
              </div>

              {/* Stat 3: 100% Pure */}
              <div className="flex flex-col justify-center pt-2 sm:pt-0 sm:px-4">
                <span className="font-serif text-2xl sm:text-4xl font-black text-white leading-tight">
                  100%
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] text-slate-300 font-semibold uppercase tracking-wider mt-0.5">
                  PCRWR Lab
                </span>
              </div>

              {/* Stat 4: Daily Fleet */}
              <div className="flex flex-col justify-center pt-2 sm:pt-0 sm:pl-4">
                <span className="font-serif text-2xl sm:text-4xl font-black text-[#00D4FF] leading-tight">
                  Daily
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] text-slate-300 font-semibold uppercase tracking-wider mt-0.5">
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
              className="relative max-w-lg w-full flex items-center justify-center py-8"
            >
              {/* Radial ice-cyan glow background beneath bottle */}
              <div className="absolute inset-0 m-auto w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.28)_0%,transparent_70%)] blur-md rounded-full pointer-events-none" />
              <div className="absolute bg-[#0F3A4A]/60 w-64 h-64 rounded-full filter blur-[70px] pointer-events-none" />
              
              {/* Single combined bottle image */}
              <div className="relative flex items-center justify-center h-[500px] lg:h-[560px] w-full pb-4">
                <img
                  src={combinedBottlesImage}
                  alt="Aabshar Prime Water Bottles"
                  loading="eager"
                  className="max-h-[480px] lg:max-h-[520px] w-auto animate-float object-contain relative z-10 pointer-events-none filter drop-shadow-[0_20px_35px_rgba(0,212,255,0.35)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating glass badge */}
              <div 
                className="absolute bottom-12 left-2 md:left-6 bg-[#0A1930]/90 border border-[#00D4FF]/40 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.7),_0_0_25px_rgba(0,212,255,0.2)] z-30 animate-float [animation-delay:2s] text-left flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#0F3A4A] flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-mono text-[10px] sm:text-xs text-[#00D4FF] uppercase tracking-wider font-extrabold">Lab Quality</p>
                  <p className="font-serif text-sm sm:text-base text-white font-extrabold">100% PCRWR Verified</p>
                  <p className="font-sans text-[10px] sm:text-xs text-slate-300">Optimal 120–160 TDS Balance</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

