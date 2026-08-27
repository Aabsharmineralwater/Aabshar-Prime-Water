import React, { useState, useEffect } from 'react';
import { MapPin, Globe, Check, Compass, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ActiveArea {
  name: string;
  sector: string;
  deliveryTime: string;
}

interface ComingSoonArea {
  name: string;
  target: string;
}

const MobileActiveDeliveryCarousel = ({ areas }: { areas: ActiveArea[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [pausedUntil, setPausedUntil] = useState<number>(0);

  const totalCards = areas.length;

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

  const area = areas[currentIndex];

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto px-6 my-2 select-none">
      {/* Left Arrow */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous zone"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 text-[#0284C7] flex items-center justify-center shadow-md active:scale-95 hover:bg-sky-50 transition-all duration-300 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next zone"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 text-[#0284C7] flex items-center justify-center shadow-md active:scale-95 hover:bg-sky-50 transition-all duration-300 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Slide Box */}
      <div className="overflow-hidden rounded-2xl touch-pan-y relative w-full min-h-[140px]">
        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
          <motion.div
            key={area.name}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragSnapToOrigin={true}
            onDragEnd={(_e, info) => {
              const swipe = info.offset.x;
              const velocity = info.velocity.x;
              if (swipe < -40 || velocity < -250) {
                handleNext();
              } else if (swipe > 40 || velocity > 250) {
                handlePrev();
              }
            }}
            initial={{ opacity: 0, x: direction >= 0 ? '100%' : '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? '-100%' : '100%' }}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 32 },
              opacity: { duration: 0.25 }
            }}
            style={{ willChange: 'transform' }}
            className="flex flex-col justify-between p-5 bg-slate-50 rounded-2xl border border-slate-200 hover:border-sky-300 transition-colors duration-300 gap-4 group w-full cursor-grab active:cursor-grabbing min-h-[140px]"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-sky-100 border border-sky-200 flex items-center justify-center text-[#0284C7] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#0284C7] transition-colors">{area.name}</h4>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">{area.sector}</p>
              </div>
            </div>
            <div className="flex-shrink-0 self-start text-right text-[#0284C7] text-xs font-mono font-bold bg-white px-3.5 py-1.5 rounded-full border border-sky-200 shadow-xs">
              ⚡ {area.deliveryTime}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {areas.map((item, idx) => (
          <button
            key={item.name}
            type="button"
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to zone ${idx + 1}`}
            className={`transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? 'w-7 h-2.5 bg-[#0284C7] rounded-full'
                : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 rounded-full'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const MobileComingSoonCarousel = ({ areas }: { areas: ComingSoonArea[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [pausedUntil, setPausedUntil] = useState<number>(0);

  const totalCards = areas.length;

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

  const area = areas[currentIndex];

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto px-6 my-2 select-none">
      {/* Left Arrow */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous area"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 text-[#0284C7] flex items-center justify-center shadow-md active:scale-95 hover:bg-sky-50 transition-all duration-300 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next area"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-200 text-[#0284C7] flex items-center justify-center shadow-md active:scale-95 hover:bg-sky-50 transition-all duration-300 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Slide Box */}
      <div className="overflow-hidden rounded-xl touch-pan-y relative w-full min-h-[70px]">
        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
          <motion.div
            key={area.name}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragSnapToOrigin={true}
            onDragEnd={(_e, info) => {
              const swipe = info.offset.x;
              const velocity = info.velocity.x;
              if (swipe < -40 || velocity < -250) {
                handleNext();
              } else if (swipe > 40 || velocity > 250) {
                handlePrev();
              }
            }}
            initial={{ opacity: 0, x: direction >= 0 ? '100%' : '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? '-100%' : '100%' }}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 32 },
              opacity: { duration: 0.25 }
            }}
            style={{ willChange: 'transform' }}
            className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-sky-300 transition-colors duration-300 w-full cursor-grab active:cursor-grabbing min-h-[70px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-[#0284C7] rounded-full animate-pulse" />
              <span className="font-serif text-base sm:text-lg font-bold text-slate-900">{area.name}</span>
            </div>
            <span className="font-mono text-[10px] uppercase font-bold text-[#0284C7] tracking-wider bg-sky-100 px-2.5 py-1 rounded-md border border-sky-200">
              {area.target}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {areas.map((item, idx) => (
          <button
            key={item.name}
            type="button"
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to area ${idx + 1}`}
            className={`transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? 'w-7 h-2.5 bg-[#0284C7] rounded-full'
                : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 rounded-full'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Delivery() {
  const activeAreas = [
    { name: 'Rawalpindi', sector: 'All residential sectors & commercial hubs', deliveryTime: 'Same Day / Next Day' },
    { name: 'Islamabad', sector: 'All E, F, G, H, I, D sectors & DHA, Bahria', deliveryTime: 'Same Day / Next Day' },
    { name: 'Fateh Jang', sector: 'Express delivery lines & industrial zones', deliveryTime: 'Scheduled Weekly Runs' },
  ];

  const comingSoonAreas = [
    { name: 'Faisalabad', target: 'Soon Expanding' },
    { name: 'Peshawar', target: 'Soon Expanding' },
    { name: 'Hazara', target: 'Soon Expanding' },
  ];

  return (
    <section id="delivery" className="py-20 bg-slate-50 text-slate-800 relative overflow-hidden cv-auto border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-mono font-bold uppercase tracking-wider mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-[#0284C7] animate-spin-slow" />
            <span>Direct Coverage Map</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Delivering Fresh To <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0088CC] via-[#00B4D8] to-[#0284C7]">Your Doorstep</span>
          </motion.h2>

          <div className="w-16 h-1 bg-[#0284C7] mx-auto mt-5 rounded-full" />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-slate-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto"
          >
            Our specialized fleet of chilled delivery vehicles operates daily to bring Aabshar Prime Water straight to your residence, luxury café, wedding marquee, or office.
          </motion.p>
        </div>

        {/* VISUAL REGIONAL MAP SILHOUETTE GRAPHIC */}
        <div className="mb-12 max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="text-center mb-6 relative z-10">
            <span className="font-mono text-xs uppercase font-bold text-[#0284C7] tracking-widest">
              NORTHERN PAKISTAN HUB NETWORK
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Rawalpindi – Islamabad – Fateh Jang Express Corridor
            </h3>
          </div>

          {/* Interactive Map Silhouette Diagram */}
          <div className="relative h-64 sm:h-80 w-full rounded-2xl bg-gradient-to-b from-sky-50 to-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden">
            {/* Topographic Lines Overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,100 Q 200,50 400,120 T 800,80 T 1200,150" fill="none" stroke="#0284C7" strokeWidth="2" />
              <path d="M 0,180 Q 300,120 600,200 T 1200,160" fill="none" stroke="#0284C7" strokeWidth="1.5" />
              <path d="M 0,50 Q 250,150 500,70 T 1000,110" fill="none" stroke="#0284C7" strokeWidth="1" />
            </svg>

            {/* Connected Route Glow Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              {/* Route 1: Fateh Jang to Rawalpindi */}
              <line x1="25%" y1="65%" x2="55%" y2="50%" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="6 4" className="animate-pulse" />
              {/* Route 2: Rawalpindi to Islamabad */}
              <line x1="55%" y1="50%" x2="70%" y2="30%" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="6 4" className="animate-pulse" />
            </svg>

            {/* Pin 1: Fateh Jang */}
            <div className="absolute left-[25%] top-[65%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-sky-200 animate-ping" />
                <div className="w-5 h-5 rounded-full bg-[#0284C7] border-2 border-white flex items-center justify-center text-white shadow-md">
                  <MapPin className="w-3 h-3" />
                </div>
              </div>
              <div className="mt-1 bg-white px-2.5 py-1 rounded-md border border-slate-200 text-center shadow-md">
                <span className="font-serif text-xs font-extrabold text-slate-900 block">Fateh Jang</span>
                <span className="font-mono text-[9px] text-[#0284C7] font-bold">Bottling Plant & Hub</span>
              </div>
            </div>

            {/* Pin 2: Rawalpindi */}
            <div className="absolute left-[55%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-10 h-10 rounded-full bg-sky-200 animate-ping" />
                <div className="w-6 h-6 rounded-full bg-[#0284C7] border-2 border-white flex items-center justify-center text-white shadow-md">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="mt-1 bg-white px-2.5 py-1 rounded-md border border-slate-200 text-center shadow-md">
                <span className="font-serif text-xs font-extrabold text-slate-900 block">Rawalpindi</span>
                <span className="font-mono text-[9px] text-[#0284C7] font-bold">Daily Fleet Line</span>
              </div>
            </div>

            {/* Pin 3: Islamabad */}
            <div className="absolute left-[70%] top-[30%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-12 h-12 rounded-full bg-sky-200 animate-ping" />
                <div className="w-6 h-6 rounded-full bg-[#0284C7] border-2 border-white flex items-center justify-center text-white shadow-md">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="mt-1 bg-white px-2.5 py-1 rounded-md border border-slate-200 text-center shadow-md">
                <span className="font-serif text-xs font-extrabold text-slate-900 block">Islamabad</span>
                <span className="font-mono text-[9px] text-[#0284C7] font-bold">Capital Express</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Active Areas (Left Column) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 flex-grow shadow-md hover:border-sky-300 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 border border-sky-200 flex items-center justify-center text-[#0284C7] shadow-xs">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2.5xl font-extrabold text-slate-900">Active Delivery Zone</h3>
                    <p className="font-mono text-xs text-[#0284C7] font-bold tracking-wider uppercase mt-0.5">Live Delivery Daily</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold shadow-xs">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  OPERATIONAL
                </span>
              </div>

              {/* Mobile View (< md) */}
              <div className="block md:hidden">
                <MobileActiveDeliveryCarousel areas={activeAreas} />
              </div>

              {/* Desktop/Tablet View (>= md) */}
              <div className="hidden md:block space-y-5">
                {activeAreas.map((area) => (
                  <div
                    key={area.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-200 hover:border-sky-300 transition-all duration-300 gap-4 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-sky-100 border border-sky-200 flex items-center justify-center text-[#0284C7] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#0284C7] transition-colors">{area.name}</h4>
                        <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">{area.sector}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-right text-[#0284C7] text-xs font-mono font-bold bg-white px-3.5 py-1.5 rounded-full border border-sky-200 shadow-xs">
                      ⚡ {area.deliveryTime}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-left text-xs gap-4">
                <p className="font-sans text-slate-600">
                  ⚠️ Minimum delivery starting at only 5 units. No shipping fees applied!
                </p>
                <div className="inline-flex items-center text-[#0284C7] font-bold">
                  <Check className="w-4 h-4 mr-1 text-emerald-600" /> Free Chilled Storage Support
                </div>
              </div>
            </motion.div>
          </div>

          {/* Coming Soon Areas (Right Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 flex-grow flex flex-col justify-between shadow-md relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-[#0284C7]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">Soon Expanding</h3>
                      <p className="font-mono text-xs text-[#0284C7] font-bold tracking-wider uppercase mt-0.5">Aabshar Next Phases</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-mono font-bold uppercase">
                    Pipelines
                  </span>
                </div>

                {/* Mobile View (< md) */}
                <div className="block md:hidden">
                  <MobileComingSoonCarousel areas={comingSoonAreas} />
                </div>

                {/* Desktop/Tablet View (>= md) */}
                <div className="hidden md:block space-y-4">
                  {comingSoonAreas.map((area) => (
                    <div
                      key={area.name}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-sky-300 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 bg-[#0284C7] rounded-full animate-pulse" />
                        <span className="font-serif text-base sm:text-lg font-bold text-slate-900">{area.name}</span>
                      </div>
                      <span className="font-mono text-[10px] uppercase font-bold text-[#0284C7] tracking-wider bg-sky-100 px-2.5 py-1 rounded-md border border-sky-200">
                        {area.target}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expansion Note */}
              <div className="mt-8 p-5 bg-sky-50/70 border border-sky-200 rounded-2xl text-left">
                <h4 className="font-serif text-sm font-bold text-slate-900 mb-2">Want Aabshar in your community?</h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed mb-3">
                  We determine upcoming regional distribution stations by counting corporate request volume. Drop us a note if you represent a commercial firm or residential development project!
                </p>
                <a
                  href="#contact"
                  className="font-sans text-xs text-[#0284C7] hover:text-[#0088CC] font-bold inline-flex items-center gap-1 transition-colors group"
                >
                  Request Regional Hub Inclusion
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </a>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
