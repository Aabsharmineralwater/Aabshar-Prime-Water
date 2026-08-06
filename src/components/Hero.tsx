import { ArrowRight, Sparkles, ShieldCheck, Truck, Users } from 'lucide-react';
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
      className="relative min-h-screen pt-28 pb-16 md:pt-36 flex items-center justify-center noise-overlay overflow-hidden bg-[#0A1930]"
    >
      {/* Cinematic dark water splash background scoped strictly to Hero */}
      <div className="hero-bg-backdrop" role="presentation" />

      {/* 1. Heavy dark navy gradient overlay for maximum text contrast & legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1930]/95 via-[#0A1930]/80 to-[#0A1930]/35 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1930] via-transparent to-[#0A1930]/70 z-0 pointer-events-none" />

      {/* 2. Soft radial blue vignette at the right edge */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,25,48,0.7)_100%)] z-0 pointer-events-none" />

      {/* 3. Smooth blend into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A1930] to-transparent pointer-events-none z-[2]" />

      {/* Ambient floating blue & gold particle glows */}
      <div className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-[#00D4FF]/60 blur-[1px] animate-bubble-slow pointer-events-none z-10" />
      <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-[#C9A24A]/70 blur-[1px] animate-bubble-fast pointer-events-none z-10" />
      <div className="absolute top-2/3 right-1/4 w-4 h-4 rounded-full bg-[#00D4FF]/40 blur-[2px] animate-bubble-slow pointer-events-none z-10" />
      <div className="absolute top-1/3 right-12 w-2.5 h-2.5 rounded-full bg-[#E5C158]/60 blur-[1px] animate-bubble-fast pointer-events-none z-10" />

      {/* Bottom Glowing Divider Line */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Generous letter-spaced eyebrow label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0F3A4A]/90 border border-[#00D4FF]/40 text-[#00D4FF] font-mono font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.25em] mb-6 max-w-max shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C9A24A] animate-pulse" />
              <span>PREMIUM MINERAL WATER · TDS 120–160</span>
            </motion.div>

            {/* Unified serif headline with high-contrast cyan-to-gold gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl lg:text-7.5xl font-extrabold text-white tracking-tight leading-none mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
            >
              Aabshar <br className="hidden sm:inline" />
              <span className="font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#38bdf8] to-[#C9A24A] drop-shadow-[0_4px_25px_rgba(0,212,255,0.35)]">
                Prime Water
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-slate-200 text-lg sm:text-xl font-normal leading-relaxed mb-8 max-w-xl text-shadow-sm"
            >
              Lab-verified, scientifically balanced mineral water sourced with pristine purity. Experience daily doorstep delivery across Rawalpindi, Islamabad, and Fateh Jang.
            </motion.p>

            {/* CTA action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                id="hero-order-cta"
                href="https://wa.me/923051999897?text=Hi%20Aabshar,%20I%20would%20like%20to%20place%20an%20order%20for%20Aabshar%20Prime%20Water."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center px-8 py-4 bg-gradient-to-r from-[#C9A24A] via-[#E5C158] to-[#C9A24A] hover:brightness-110 text-[#0A1930] font-black text-base uppercase tracking-wider rounded-full shadow-[0_4px_20px_rgba(201,162,74,0.4)] hover:shadow-[0_0_35px_rgba(201,162,74,0.65)] border border-[#E5C158]/60 active:scale-95 transition-all duration-300 press-scale cursor-pointer inline-block"
              >
                Order Doorstep Delivery
              </a>
              
              <button
                id="hero-explore-cta"
                onClick={onExploreClick}
                className="w-full sm:w-auto relative p-[1.5px] rounded-full bg-gradient-to-r from-[#00D4FF] via-[#38bdf8] to-[#C9A24A] hover:shadow-[0_0_25px_rgba(0,212,255,0.45)] active:scale-95 transition-all duration-300 press-scale cursor-pointer group shadow-md"
              >
                <span className="w-full h-full px-8 py-3.5 bg-[#0A1930]/90 group-hover:bg-[#00D4FF] text-white group-hover:text-[#0A1930] font-bold text-base rounded-full transition-colors duration-300 flex items-center justify-center gap-2 backdrop-blur-md">
                  Explore Products
                  <ArrowRight className="w-4.5 h-4.5 text-[#00D4FF] group-hover:text-[#0A1930] transition-colors" />
                </span>
              </button>
            </motion.div>

            {/* ELEGANT HORIZONTAL STAT STRIP WITH OVERSIZED SERIF NUMERALS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full max-w-2xl py-4 px-2 border-t border-b border-[#00D4FF]/25 grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#00D4FF]/20"
            >
              {/* Stat 1: 500+ */}
              <div className="flex flex-col justify-center sm:pr-4">
                <span className="font-serif text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#C9A24A] to-[#E5C158] leading-tight">
                  500+
                </span>
                <span className="font-sans text-[11px] text-slate-300 font-semibold uppercase tracking-wider mt-1">
                  Homes & B2B
                </span>
              </div>

              {/* Stat 2: 135 PPM */}
              <div className="flex flex-col justify-center pt-3 sm:pt-0 sm:px-4">
                <span className="font-serif text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-sky-200 leading-tight">
                  135
                </span>
                <span className="font-sans text-[11px] text-slate-300 font-semibold uppercase tracking-wider mt-1">
                  Bio TDS PPM
                </span>
              </div>

              {/* Stat 3: 100% Pure */}
              <div className="flex flex-col justify-center pt-3 sm:pt-0 sm:px-4">
                <span className="font-serif text-3xl sm:text-4xl font-black text-white leading-tight">
                  100%
                </span>
                <span className="font-sans text-[11px] text-slate-300 font-semibold uppercase tracking-wider mt-1">
                  PCRWR Lab
                </span>
              </div>

              {/* Stat 4: Daily Fleet */}
              <div className="flex flex-col justify-center pt-3 sm:pt-0 sm:pl-4">
                <span className="font-serif text-3xl sm:text-4xl font-black text-[#00D4FF] leading-tight">
                  Daily
                </span>
                <span className="font-sans text-[11px] text-slate-300 font-semibold uppercase tracking-wider mt-1">
                  Chilled Fleet
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-fidelity bottle hero shot */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="relative max-w-lg w-full flex items-center justify-center py-8"
            >
              {/* Radial cyan glow background beneath bottle */}
              <div className="absolute inset-0 m-auto w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.25)_0%,transparent_70%)] blur-md rounded-full pointer-events-none" />
              <div className="absolute bg-[#0F3A4A]/60 w-64 h-64 rounded-full filter blur-[70px] pointer-events-none" />
              
              {/* Single combined bottle image */}
              <div className="relative flex items-center justify-center h-[430px] sm:h-[500px] md:h-[580px] w-full pb-4">
                <img
                  src={combinedBottlesImage}
                  alt="Aabshar Prime Water Bottles"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="max-h-[380px] sm:max-h-[460px] md:max-h-[530px] w-auto animate-float object-contain relative z-10 pointer-events-none filter drop-shadow-[0_20px_35px_rgba(0,212,255,0.3)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating glass badge */}
              <div 
                className="absolute bottom-12 left-2 md:left-6 bg-[#0A1930]/90 border border-[#00D4FF]/40 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.7),_0_0_25px_rgba(0,212,255,0.2)] z-30 animate-float [animation-delay:2s] text-left flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#0F3A4A] flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
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
