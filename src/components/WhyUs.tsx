import React, { useState, useEffect, useRef } from 'react';
import { GlassWater, Droplet, ShieldCheck, Truck, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FeatureItem {
  number: string;
  icon: React.ReactNode;
  title: string;
  badge: string;
  bullets: string[];
  monoStat: string;
}

const MobileFeatureCarousel = ({ features }: { features: FeatureItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [pausedUntil, setPausedUntil] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalCards = features.length;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
    setPausedUntil(Date.now() + 8000);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setPausedUntil(Date.now() + 8000);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setPausedUntil(Date.now() + 8000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() >= pausedUntil) {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalCards);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [pausedUntil, totalCards]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const item = features[currentIndex];

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto px-6 mb-12">
      {/* Left Arrow */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous card"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0A1930]/95 border border-[#00D4FF]/50 text-[#00D4FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.3)] active:scale-95 hover:bg-[#00D4FF] hover:text-[#0A1930] transition-all duration-300 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next card"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0A1930]/95 border border-[#00D4FF]/50 text-[#00D4FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.3)] active:scale-95 hover:bg-[#00D4FF] hover:text-[#0A1930] transition-all duration-300 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Slide Box */}
      <div 
        className="overflow-hidden rounded-2xl touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={item.title}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="bg-[#0A1930]/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl hover:border-[#00D4FF]/40 transition-all relative group flex flex-col justify-between min-h-[310px]"
          >
            {/* Fine gold top accent bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00D4FF] via-[#0F3A4A] to-[#C9A24A] rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#0F3A4A] border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] group-hover:bg-[#00D4FF] group-hover:text-[#0A1930] transition-colors">
                  {item.icon}
                </div>
                <span className="font-mono text-xs font-black text-[#C9A24A] bg-[#C9A24A]/10 border border-[#C9A24A]/30 px-2.5 py-0.5 rounded-full">
                  {item.number}
                </span>
              </div>

              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#00D4FF] block mb-1">
                {item.badge}
              </span>

              <h3 className="font-serif text-xl font-extrabold text-white mb-3">
                {item.title}
              </h3>

              <div className="w-full h-[1px] bg-gradient-to-r from-[#C9A24A]/40 via-white/10 to-transparent mb-3" />

              <ul className="space-y-1.5 mb-4">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-center text-xs text-slate-300 font-medium">
                    <Zap className="w-3 h-3 text-[#00D4FF] mr-2 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold">Lab Target</span>
              <span className="font-mono text-[11px] font-bold text-[#C9A24A]">
                {item.monoStat}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {features.map((feat, idx) => (
          <button
            key={feat.number}
            type="button"
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? 'w-7 h-2.5 bg-gradient-to-r from-[#00D4FF] via-[#38bdf8] to-[#C9A24A] rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]'
                : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500 rounded-full'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function WhyUs() {
  const features: FeatureItem[] = [
    {
      number: '01',
      icon: <Droplet className="w-4 h-4 text-[#00D4FF]" />,
      title: '120–160 TDS Target',
      badge: 'Cellular Absorption',
      bullets: ['Magnesium & Potassium', 'Cellular Hydration', 'Zero Saline Taste'],
      monoStat: '135 PPM Target',
    },
    {
      number: '02',
      icon: <GlassWater className="w-4 h-4 text-[#00D4FF]" />,
      title: 'Molecular Purity',
      badge: '9-Stage Filtration',
      bullets: ['Reverse Osmosis', 'UV Sterilization', 'Ozonated Freshness'],
      monoStat: 'Multi-Stage Filter',
    },
    {
      number: '03',
      icon: <Truck className="w-4 h-4 text-[#00D4FF]" />,
      title: 'Chilled Fleet Express',
      badge: 'Doorstep Delivery',
      bullets: ['Temperature Controlled', 'Same-Day Dispatch', 'Zero Delivery Fee'],
      monoStat: 'Daily Runs',
    },
    {
      number: '04',
      icon: <ShieldCheck className="w-4 h-4 text-[#00D4FF]" />,
      title: 'WHO & PCRWR Compliant',
      badge: 'Lab Certified',
      bullets: ['Daily Lab Testing', 'Micro-Filtered', 'PCRWR Approved'],
      monoStat: '100% Verified',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0A1930] via-[#0D223D] to-[#0A1930] text-white relative overflow-hidden cv-auto border-t border-b border-[#00D4FF]/20">
      {/* Top & Bottom Glowing Divider Lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent pointer-events-none z-10" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Magazine Editorial Section Header & Pull-Quote */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F3A4A] border border-[#00D4FF]/30 font-mono text-xs font-bold tracking-widest uppercase mb-4 text-[#00D4FF]"
          >
            <GlassWater className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>The Bio-Mineral Standard</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            “Pure Minerals, Perfected by <span className="font-serif italic text-[#00D4FF] border-b-2 border-[#C9A24A]">Nature & Science</span>.”
          </motion.h2>

          <p className="font-sans text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Every bottle is processed through multi-stage micro-filtration and calibrated to an optimal mineral balance for maximum cellular absorption and crisp, natural taste.
          </p>
        </div>

        {/* Mobile View: Auto-sliding Carousel (< md breakpoint) */}
        <div className="block md:hidden">
          <MobileFeatureCarousel features={features} />
        </div>

        {/* Desktop/Tablet View: Grid Layout (>= md breakpoint) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-[#0A1930]/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl hover:border-[#00D4FF]/40 transition-all relative group flex flex-col justify-between"
            >
              {/* Fine gold top accent bar */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00D4FF] via-[#0F3A4A] to-[#C9A24A] rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0F3A4A] border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] group-hover:bg-[#00D4FF] group-hover:text-[#0A1930] transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs font-black text-[#C9A24A] bg-[#C9A24A]/10 border border-[#C9A24A]/30 px-2.5 py-0.5 rounded-full">
                    {item.number}
                  </span>
                </div>

                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#00D4FF] block mb-1">
                  {item.badge}
                </span>

                <h3 className="font-serif text-xl font-extrabold text-white mb-3">
                  {item.title}
                </h3>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#C9A24A]/40 via-white/10 to-transparent mb-3" />

                <ul className="space-y-1.5 mb-4">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-center text-xs text-slate-300 font-medium">
                      <Zap className="w-3 h-3 text-[#00D4FF] mr-2 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold">Lab Target</span>
                <span className="font-mono text-[11px] font-bold text-[#C9A24A]">
                  {item.monoStat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CUSTOM HORIZONTAL FUEL GAUGE METER GRAPHIC FOR 135 PPM TDS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-[#0A1930] text-white border border-[#00D4FF]/30 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00D4FF]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 text-left">
              <span className="font-mono text-xs font-bold tracking-widest uppercase bg-[#C9A24A]/20 border border-[#C9A24A]/50 text-[#C9A24A] px-3.5 py-1 rounded-full mb-3 inline-block">
                SCIENTIFIC TDS ABSORPTION GAUGE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-tight">
                Why <span className="font-serif italic text-[#00D4FF]">120–160 TDS</span> is the Bio-Sweet Spot
              </h3>
              <p className="font-sans text-slate-300 text-sm leading-relaxed max-w-xl">
                Demineralized water (&lt;50 TDS) leaches body minerals and causes acidic taste. Excess mineral water (&gt;300 TDS) burdens kidneys with heavy salts. Aabshar’s engineered 135 PPM target matches cellular fluid density for optimal bio-absorption.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#0F3A4A]/80 backdrop-blur-md p-6 rounded-2xl border border-[#00D4FF]/30 text-left">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold uppercase text-slate-300 tracking-wider">Bio-Hydration Meter</span>
                <span className="font-serif text-sm font-extrabold text-[#C9A24A] bg-[#C9A24A]/20 px-2.5 py-0.5 rounded-full border border-[#C9A24A]/40">
                  Aabshar Target: 135 PPM
                </span>
              </div>

              {/* FUEL GAUGE METER GRAPHIC */}
              <div className="relative w-full my-4">
                {/* Meter Bar Container */}
                <div className="h-7 w-full rounded-full bg-slate-900 border border-slate-700/80 p-0.5 flex overflow-hidden shadow-inner">
                  {/* Zone 1: Demineralized / Acidic */}
                  <div className="w-[30%] h-full bg-slate-800/80 border-r border-slate-700 flex items-center justify-center text-[9px] font-mono font-bold text-slate-400">
                    ACIDIC (&lt;50)
                  </div>
                  {/* Zone 2: Aabshar Ideal Bio-Zone */}
                  <div className="w-[40%] h-full bg-gradient-to-r from-[#00D4FF] via-[#38bdf8] to-[#C9A24A] flex items-center justify-center text-[9px] font-mono font-black text-[#0A1930] uppercase tracking-wider relative shadow-md">
                    SWEET SPOT (120-160)
                  </div>
                  {/* Zone 3: High Saline / Heavy Salts */}
                  <div className="w-[30%] h-full bg-slate-800/80 border-l border-slate-700 flex items-center justify-center text-[9px] font-mono font-bold text-slate-400">
                    HEAVY (&gt;300)
                  </div>
                </div>

                {/* Glowing Needle Indicator pointing directly at 135 PPM (approx 52% mark) */}
                <div className="absolute top-0 bottom-0 left-[52%] -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
                  <div className="w-1 h-9 bg-white shadow-[0_0_12px_#ffffff] rounded-full animate-pulse" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#C9A24A] border-2 border-white shadow-[0_0_10px_#C9A24A] -mt-1" />
                </div>
              </div>

              <div className="p-3 bg-[#0A1930] rounded-xl border border-[#C9A24A]/40 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C9A24A] flex-shrink-0" />
                <span className="font-serif text-xs font-bold text-white">
                  100% PCRWR & WHO Certified Pure Standard
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
