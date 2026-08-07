import React, { useState, useEffect, useRef } from 'react';
import { Star, Sparkles, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ReviewItem {
  name: string;
  location: string;
  role: string;
  highlightQuote: string;
  fullQuote: string;
  rating: number;
}

const MobileTestimonialCarousel = ({ reviews }: { reviews: ReviewItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [pausedUntil, setPausedUntil] = useState<number>(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const totalCards = reviews.length;

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

  const rev = reviews[currentIndex];
  const isExpanded = expandedIndex === currentIndex;
  const initials = rev.name.split(' ').map(n => n[0]).join('');

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto px-6 mb-8 select-none">
      {/* Left Arrow */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous review"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0A1930]/95 border border-[#00D4FF]/50 text-[#00D4FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.3)] active:scale-95 hover:bg-[#00D4FF] hover:text-[#0A1930] transition-all duration-300 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next review"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#0A1930]/95 border border-[#00D4FF]/50 text-[#00D4FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.3)] active:scale-95 hover:bg-[#00D4FF] hover:text-[#0A1930] transition-all duration-300 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Slide Box */}
      <div className="overflow-hidden rounded-3xl touch-pan-y relative w-full min-h-[300px]">
        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
          <motion.div
            key={rev.name}
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
            className="bg-[#0A1930]/80 backdrop-blur-xl rounded-3xl p-7 border-l-2 border-l-[#C9A24A] border-y border-r border-white/10 flex flex-col justify-between relative group hover:border-l-[#00D4FF] transition-colors duration-300 shadow-xl min-h-[300px] w-full cursor-grab active:cursor-grabbing"
          >
            {/* Large Gold Opening Quotation Glyph */}
            <div className="font-serif text-6xl leading-none text-[#C9A24A] opacity-60 absolute top-4 right-6 pointer-events-none select-none">
              “
            </div>

            <div>
              {/* Top Header: Monogram Badge Avatar + Name/Role */}
              <div className="flex items-center gap-3.5 mb-5 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A24A] via-[#E5C158] to-[#0F3A4A] p-0.5 shadow-lg flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-[#0A1930] flex items-center justify-center font-serif text-base font-black text-[#C9A24A]">
                    {initials}
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-base font-extrabold text-white group-hover:text-[#00D4FF] transition-colors">
                    {rev.name}
                  </h4>
                  <p className="font-sans text-xs text-slate-300 font-medium">
                    {rev.role}
                  </p>
                  <span className="inline-block text-[10px] font-mono font-bold text-[#00D4FF] mt-0.5">
                    📍 {rev.location}
                  </span>
                </div>
              </div>

              {/* Thin Vertical Gold Accent Line & Highlight Quote */}
              <div className="pl-4 border-l-2 border-[#C9A24A]/40 my-4">
                <p className="font-sans text-slate-100 text-sm font-semibold leading-relaxed">
                  "{rev.highlightQuote}"
                </p>
              </div>

              {/* Expandable Full Quote */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="font-sans text-slate-300 text-xs leading-relaxed italic mb-3 pt-3 border-t border-white/10"
                  >
                    {rev.fullQuote}
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setExpandedIndex(isExpanded ? null : currentIndex)}
                className="inline-flex items-center text-xs font-mono text-[#00D4FF] hover:text-[#C9A24A] transition-colors cursor-pointer mb-3"
              >
                {isExpanded ? (
                  <>Hide details <ChevronUp className="w-3.5 h-3.5 ml-1" /></>
                ) : (
                  <>Read full feedback <ChevronDown className="w-3.5 h-3.5 ml-1" /></>
                )}
              </button>
            </div>

            {/* Footer Star Rating & Verification Badge */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C9A24A] text-[#C9A24A]" />
                ))}
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#C9A24A] bg-[#C9A24A]/10 border border-[#C9A24A]/30 px-2 py-0.5 rounded-full font-bold">
                VERIFIED CLIENT
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {reviews.map((r, idx) => (
          <button
            key={r.name}
            type="button"
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to review ${idx + 1}`}
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

export default function Testimonials() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const reviews: ReviewItem[] = [
    {
      name: 'Bilal Ahmed',
      location: 'Islamabad HQ',
      role: 'Corporate HR Director',
      highlightQuote: 'Best corporate custom bottle service in the Federal Capital area.',
      fullQuote: 'We commissioned Aabshar custom-labeled bottles for our annual tech summit. The custom logo typography alignment was beautifully sharp and clean. Our board specifically commented on the refreshing crispness of the water.',
      rating: 5,
    },
    {
      name: 'Dr. Sara Khan',
      location: 'Saddar, Rawalpindi',
      role: 'Family Pediatrician',
      highlightQuote: 'Delivers water at 120–160 TDS with perfect molecular purity.',
      fullQuote: 'As a practicing healthcare specialist, the TDS value of drinking water is critical to cell hydration. Aabshar consistently delivers water at 120–160 TDS with perfect molecular purity. Ice-cold delivery to our clinics is a total game changer.',
      rating: 5,
    },
    {
      name: 'Zainab Malik',
      location: 'Fateh Jang',
      role: 'Luxury Event Planner',
      highlightQuote: 'Bottles match our high-end wedding sets effortlessly.',
      fullQuote: 'Managing premium marquees means every table detail must scream perfection. Aabshar 500ml and 1.5L bottles match our floral sets effortlessly. Their chilled vans arrive precisely on schedule every single time.',
      rating: 5,
    },
    {
      name: 'Hamza Noman',
      location: 'F-7, Islamabad',
      role: 'General Manager, Gourmet Bistro',
      highlightQuote: 'Exquisite mineral water taste that elevates our fine dining experience.',
      fullQuote: 'Aabshar mineral water has raised the benchmark for beverage presentation in our restaurant. The ultra-pure 135 PPM mineral balance provides a smooth, crisp finish that pairs perfectly with high-end culinary dishes.',
      rating: 5,
    },
  ];

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#0A1930] via-[#0F3A4A] to-[#0A1930] text-white relative overflow-hidden cv-auto border-t border-b border-[#00D4FF]/20">
      {/* Top & Bottom Glowing Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/60 to-transparent pointer-events-none z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4FD1E8]/15 border border-[#4FD1E8]/30 text-[#4FD1E8] text-xs font-mono font-bold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span>Verified Reviews</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
          >
            Trusted By <span className="font-serif italic text-[#00D4FF]">Leaders Across Punjab</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#4FD1E8] via-[#22d3ee] to-[#C9A24A] mx-auto mt-3 rounded-full" />
        </div>

        {/* Mobile View: Auto-sliding Carousel (< md) */}
        <div className="block md:hidden">
          <MobileTestimonialCarousel reviews={reviews} />
        </div>

        {/* Desktop View: 4-Column Grid Layout (>= md) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {reviews.map((rev, index) => {
            const isExpanded = expandedIndex === index;
            const initials = rev.name.split(' ').map(n => n[0]).join('');

            return (
              <motion.div
                key={rev.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0A1930]/80 backdrop-blur-xl rounded-3xl p-7 border-l-2 border-l-[#C9A24A] border-y border-r border-white/10 flex flex-col justify-between relative group hover:border-l-[#00D4FF] transition-all duration-300 shadow-xl"
              >
                {/* Large Gold Opening Quotation Glyph */}
                <div className="font-serif text-6xl leading-none text-[#C9A24A] opacity-60 absolute top-4 right-6 pointer-events-none select-none">
                  “
                </div>

                <div>
                  {/* Top Header: Monogram Badge Avatar + Name/Role */}
                  <div className="flex items-center gap-3.5 mb-5 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A24A] via-[#E5C158] to-[#0F3A4A] p-0.5 shadow-lg flex-shrink-0">
                      <div className="w-full h-full rounded-full bg-[#0A1930] flex items-center justify-center font-serif text-base font-black text-[#C9A24A]">
                        {initials}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif text-base font-extrabold text-white group-hover:text-[#00D4FF] transition-colors">
                        {rev.name}
                      </h4>
                      <p className="font-sans text-xs text-slate-300 font-medium">
                        {rev.role}
                      </p>
                      <span className="inline-block text-[10px] font-mono font-bold text-[#00D4FF] mt-0.5">
                        📍 {rev.location}
                      </span>
                    </div>
                  </div>

                  {/* Thin Vertical Gold Accent Line & Highlight Quote */}
                  <div className="pl-4 border-l-2 border-[#C9A24A]/40 my-4">
                    <p className="font-sans text-slate-100 text-sm font-semibold leading-relaxed">
                      "{rev.highlightQuote}"
                    </p>
                  </div>

                  {/* Expandable Full Quote */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="font-sans text-slate-300 text-xs leading-relaxed italic mb-3 pt-3 border-t border-white/10"
                      >
                        {rev.fullQuote}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => toggleExpand(index)}
                    className="inline-flex items-center text-xs font-mono text-[#00D4FF] hover:text-[#C9A24A] transition-colors cursor-pointer mb-3"
                  >
                    {isExpanded ? (
                      <>Hide details <ChevronUp className="w-3.5 h-3.5 ml-1" /></>
                    ) : (
                      <>Read full feedback <ChevronDown className="w-3.5 h-3.5 ml-1" /></>
                    )}
                  </button>
                </div>

                {/* Footer Star Rating & Verification Badge */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C9A24A] text-[#C9A24A]" />
                    ))}
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#C9A24A] bg-[#C9A24A]/10 border border-[#C9A24A]/30 px-2 py-0.5 rounded-full font-bold">
                    VERIFIED CLIENT
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
