import { Quote, Star, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Bilal Ahmed',
      location: 'Islamabad HQ',
      role: 'Corporate HR Director',
      quote: "We commissioned Aabshar custom-labeled bottles for our annual tech summit. The custom logo typography alignment was beautifully sharp and clean. Our board of directors specifically commented on the refreshing crispness of the water—best corporate service in the Federal Capital area.",
      rating: 5,
    },
    {
      name: 'Dr. Sara Khan',
      location: 'Saddar, Rawalpindi',
      role: 'Family Pediatrician',
      quote: "As a practicing healthcare specialist, the Total Dissolved Solids (TDS) value of drinking water is critical to cell hydration. Aabshar consistently delivers water at 120–160 TDS with perfect molecular purity. Having it delivered ice-cold to our clinics is a total game changer.",
      rating: 5,
    },
    {
      name: 'Zainab Malik',
      location: 'Fateh Jang',
      role: 'Luxury Event Planner',
      quote: "Managing premium marquees means every table detail must scream perfection. Aabshar's 500ml and 1.5L bottles match our high-end floral sets effortlessly. Their chilled vans arrive precisely on schedule, meaning the mineral water is served at the absolute correct temperature.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-transparent relative overflow-hidden spotlight-glow border-t border-white/5 text-slate-100">
      {/* Continuing Background Scenery Overlay (Slightly darker for text readability) */}
      <div className="absolute inset-0 bg-[rgba(5,15,35,0.72)] z-0 pointer-events-none" />
      {/* Top Wave Segment */}
      <div className="absolute top-0 inset-x-0 h-10 overflow-hidden pointer-events-none z-1 select-none opacity-40">
        <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1000px]">
          <path d="M0,32 C240,70 480,0 720,40 C960,80 1200,10 1440,32 L1440,0 L0,0 Z" fill="rgba(2, 132, 199, 0.08)" />
          <path d="M0,45 C300,10 600,60 900,20 C1200,-20 1350,50 1440,30 L1440,0 L0,0 Z" fill="rgba(14, 165, 233, 0.05)" />
        </svg>
      </div>

      {/* Background visual decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-14 w-80 h-80 bg-brand-aqua/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Animated Rising Water Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute left-[30%] bottom-8 w-3.5 h-3.5 bg-brand-teal/15 rounded-full blur-xs animate-bubble-slow" />
        <div className="absolute right-[25%] bottom-16 w-4 h-4 bg-brand-teal/10 rounded-full blur-xs animate-bubble-fast [animation-delay:1.5s]" />
      </div>

      {/* Stylized Quote/Aura graphics as watermark */}
      <div className="absolute right-[-10%] md:right-[5%] top-[10%] md:top-[15%] opacity-20 pointer-events-none select-none z-0 w-[320px] sm:w-[480px] h-[320px] sm:h-[480px]">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full text-brand-teal/30 drop-shadow-[0_0_25px_rgba(2,132,199,0.1)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Animated rings */}
          <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10,12" fill="none" className="animate-[spin_40s_linear_infinite]" />
          <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4,6" fill="none" className="animate-[spin_25s_linear_infinite_reverse]" />
          <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1" opacity="0.4" fill="none" />
          
          {/* Floating quotes glyphs inside */}
          <g className="fill-brand-teal/20 text-brand-teal/15">
            <path d="M 120,160 Q 140,160 140,180 Q 140,200 120,200 Q 100,200 100,180 L 100,160 Z" />
            <path d="M 150,160 Q 170,160 170,180 Q 170,200 150,200 Q 130,200 130,180 L 130,160 Z" />
          </g>

          {/* Floating star sparks */}
          <g className="fill-brand-teal/40">
            <path d="M 280,120 L 283,127 L 290,127 L 284,131 L 286,138 L 280,133 L 274,138 L 276,131 L 270,127 L 277,127 Z" className="animate-pulse" />
            <path d="M 100,280 L 102,284 L 108,284 L 104,287 L 105,292 L 100,289 L 95,292 L 96,287 L 92,284 L 98,284 Z" className="animate-pulse [animation-delay:1s]" />
          </g>

          {/* Large decorative quotation */}
          <text x="200" y="240" textAnchor="middle" className="font-serif text-[180px] font-bold fill-brand-teal/[0.08]" style={{ userSelect: 'none' }}>“</text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white bg-brand-teal/35 border border-brand-teal/30 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1"
          >
            <Sparkles className="w-4 h-4 text-sky-200 animate-pulse" />
            <span className="text-sky-100">Social Proof & Trust</span>
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-shadow-heading drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
          >
            Verified Aabshar Hydration Reviews
          </motion.h2>
          <div className="w-20 h-1 bg-linear-to-r from-brand-teal to-brand-aqua mx-auto mt-6 rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sky-100/90 text-base sm:text-lg mt-4"
          >
            Don’t just take our word for it. Read honest, real accounts from family pediatricians, corporate event planners, and business heads in Rawalpindi, Islamabad, and Fateh Jang.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="frosted-glass-card rounded-3xl p-8 shadow-3d hover-lift tilt-card inner-highlight flex flex-col justify-between relative group text-slate-800 animate-fade-in"
            >
              {/* Decorative Quotation Symbol */}
              <div className="absolute top-6 right-8 text-sky-200/50 group-hover:text-brand-teal/10 transition-colors duration-350">
                <Quote className="w-12 h-12" />
              </div>

              <div>
                {/* Stars container */}
                <div className="flex gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4.5 h-4.5 fill-amber-400 text-amber-400 animate-pulse"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </div>

                <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed mb-8 relative z-10 italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-teal to-brand-aqua flex items-center justify-center text-white font-display text-xs font-black border border-white shadow-xs flex-shrink-0">
                  {rev.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-grow text-left overflow-hidden">
                  <h4 className="font-serif text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-brand-teal transition-colors truncate">
                    {rev.name}
                  </h4>
                  <p className="font-sans text-[11px] text-slate-500 mt-0.5 font-bold truncate">{rev.role}</p>
                </div>
                <div className="bg-sky-50 px-2.5 py-1.5 rounded-full border border-sky-100 text-[9px] text-brand-teal font-extrabold uppercase tracking-wider flex-shrink-0">
                  {rev.location.replace("📍 ", "")}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Corporate Trust Summary */}
        <div className="mt-16 text-center">
          <p className="font-sans text-sky-100/70 text-sm">
            🛡️ Daily checked in-house and third-party certified testing. Sourced in accordance with PCRWR requirements.
          </p>
        </div>

      </div>

      {/* Overlapping bottom waves transitioning into scheduling ordering system */}
      <div className="absolute bottom-0 inset-x-0 h-12 overflow-hidden pointer-events-none z-10 select-none opacity-40 translate-y-px">
        <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1000px] rotate-180">
          <path d="M0,32 C240,70 480,0 720,40 C960,80 1200,10 1440,32 L1440,0 L0,0 Z" fill="rgba(2, 132, 199, 0.08)" />
          <path d="M0,45 C300,10 600,60 900,20 C1200,-20 1350,50 1440,30 L1440,0 L0,0 Z" fill="rgba(14, 165, 233, 0.05)" />
        </svg>
      </div>
    </section>
  );
}
