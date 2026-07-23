import { MapPin, Globe, Check, PhoneCall, Compass } from 'lucide-react';
import { motion } from 'motion/react';
// Direct Coverage Map component
export default function Delivery() {
  const activeAreas = [
    { name: 'Rawalpindi', sector: 'All residential sectors & commercial hubs', deliveryTime: 'Same Day / Next Day' },
    { name: 'Islamabad', sector: 'All E, F, G, H, I, D sectors & DHA, Bahria', deliveryTime: 'Same Day / Next Day' },
    { name: 'Fateh Jang', sector: 'Express delivery lines & industrial zones', deliveryTime: 'Scheduled Weekly Order Runs' },
  ];

  const comingSoonAreas = [
    { name: 'Faisalabad', target: 'Soon Expanding' },
    { name: 'Peshawar', target: 'Soon Expanding' },
    { name: 'Hazara', target: 'Soon Expanding' },
  ];

  return (
    <section id="delivery" className="py-24 bg-transparent relative overflow-hidden spotlight-glow border-t border-white/5 text-slate-100">
      {/* Continuing Background Scenery Overlay (Slightly darker for text readability) */}
      <div className="absolute inset-0 bg-[rgba(5,15,35,0.72)] z-0 pointer-events-none" />
      {/* Top Wave Divider for Organic Flow */}
      <div className="absolute top-0 inset-x-0 h-10 overflow-hidden pointer-events-none z-1 select-none opacity-40">
        <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1000px]">
          <path d="M0,32 C240,70 480,0 720,40 C960,80 1200,10 1440,32 L1440,0 L0,0 Z" fill="rgba(2, 132, 199, 0.08)" />
          <path d="M0,45 C300,10 600,60 900,20 C1200,-20 1350,50 1440,30 L1440,0 L0,0 Z" fill="rgba(14, 165, 233, 0.05)" />
        </svg>
      </div>

      {/* Background ambient teals */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-aqua/5 rounded-full blur-[150px] pointer-events-none animate-pulse" />

      {/* Animated Rising Water Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute left-[5%] bottom-5 w-3 h-3 bg-brand-teal/15 rounded-full blur-xs animate-bubble-slow" />
        <div className="absolute left-[55%] bottom-15 w-4 h-4 bg-brand-teal/10 rounded-full blur-xs animate-bubble-fast [animation-delay:2s]" />
        <div className="absolute right-[15%] bottom-10 w-2 h-2 bg-brand-teal/15 rounded-full blur-xs animate-bubble-slow [animation-delay:4s]" />
      </div>

      {/* Stylized Illustrated Delivery Route Purity Map */}
      <div className="absolute left-[-10%] md:left-[2%] top-[15%] md:top-[20%] opacity-20 md:opacity-30 pointer-events-none select-none z-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] flex items-center justify-center">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full text-brand-teal/40 drop-shadow-[0_0_20px_rgba(2,132,199,0.15)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pulsing Backlight */}
          <circle cx="250" cy="250" r="180" fill="url(#mapGlow)" opacity="0.3" className="animate-pulse" />
          
          <defs>
            <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Connection Pathways */}
          <path
            d="M 300,280 Q 340,200 350,150"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="8,8"
            fill="none"
            className="animate-[dash_15s_linear_infinite]"
          />
          <path
            d="M 300,280 Q 210,260 150,220"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="8,8"
            fill="none"
            className="animate-[dash_12s_linear_infinite]"
          />
          <path
            d="M 150,220 Q 230,170 350,150"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6,6"
            fill="none"
            className="animate-[dash_18s_linear_infinite]"
          />

          {/* Core Stations */}
          {/* 1. Islamabad Station */}
          <g className="translate-x-[350px] translate-y-[150px]">
            <circle cx="0" cy="0" r="18" className="fill-brand-teal/20 stroke-brand-teal stroke-1 animate-ping" />
            <circle cx="0" cy="0" r="10" className="fill-brand-teal/40 stroke-white stroke-2" />
            <circle cx="0" cy="0" r="4" className="fill-emerald-500" />
            <text x="18" y="5" className="fill-slate-900 font-sans text-xs font-black tracking-wider text-shadow">ISLAMABAD HQ</text>
          </g>

          {/* 2. Rawalpindi Station */}
          <g className="translate-x-[300px] translate-y-[280px]">
            <circle cx="0" cy="0" r="18" className="fill-brand-teal/20 stroke-brand-teal stroke-1 animate-ping [animation-delay:1s]" />
            <circle cx="0" cy="0" r="10" className="fill-brand-teal/40 stroke-white stroke-2" />
            <circle cx="0" cy="0" r="4" className="fill-emerald-500" />
            <text x="18" y="5" className="fill-slate-900 font-sans text-xs font-black tracking-wider text-shadow">RAWALPINDI HUB</text>
          </g>

          {/* 3. Fateh Jang Depot */}
          <g className="translate-x-[150px] translate-y-[220px]">
            <circle cx="0" cy="0" r="18" className="fill-brand-teal/20 stroke-brand-teal stroke-1 animate-ping [animation-delay:2s]" />
            <circle cx="0" cy="0" r="10" className="fill-brand-teal/40 stroke-white stroke-2" />
            <circle cx="0" cy="0" r="4" className="fill-emerald-500" />
            <text x="-120" y="5" className="fill-slate-900 font-sans text-xs font-black tracking-wider text-shadow">FATEH JANG DEPOT</text>
          </g>

          {/* Regional Lines decoration */}
          <circle cx="100" cy="100" r="4" fill="currentColor" opacity="0.4" />
          <line x1="100" y1="100" x2="150" y2="220" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
          <circle cx="420" cy="320" r="4" fill="currentColor" opacity="0.4" />
          <line x1="300" y1="280" x2="420" y2="320" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" opacity="0.3" />
        </svg>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e902_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e902_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/35 border border-brand-teal/30 text-white text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-sky-200 animate-spin-slow" />
            <span className="text-sky-100">Direct Coverage Map</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-shadow-heading drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
          >
            Delivering Fresh To Your Doorstep
          </motion.h2>
          <div className="w-20 h-1 bg-linear-to-r from-brand-teal to-brand-aqua mx-auto mt-6 rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sky-100/90 text-base sm:text-lg mt-4"
          >
            Our specialized fleet of chilled delivery vehicles operates daily to bring Aabshar mineral water straight to your residence, luxury café, wedding marquee, or office.
          </motion.p>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Active Areas (Left Column, larger) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="frosted-glass-card rounded-3xl p-8 sm:p-10 flex-grow shadow-3d hover-lift tilt-card inner-highlight text-slate-800"
            >
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-600">
                    <Globe className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">Active Delivery Zone</h3>
                    <p className="font-sans text-xs text-green-600 font-semibold tracking-wider uppercase mt-0.5">Live Delivery Daily</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 text-xs font-bold animate-pulse">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  OPERATIONAL
                </span>
              </div>

              <div className="space-y-6">
                {activeAreas.map((area) => (
                  <div
                    key={area.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-teal/20 hover:bg-slate-100/40 transition-all duration-300 gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mb-1">{area.name}</h4>
                        <p className="font-sans text-xs text-slate-500 leading-relaxed">{area.sector}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-right sm:text-right text-brand-teal text-xs font-semibold bg-sky-50 px-3 py-1.5 rounded-full border border-sky-100">
                      ⏱️ {area.deliveryTime}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-left text-xs gap-4">
                <p className="font-sans text-slate-500">
                  ⚠️ Minimum delivery starting at only 5 units. No shipping fees applied!
                </p>
                <div className="inline-flex items-center text-brand-teal font-bold">
                  <Check className="w-4 h-4 mr-1 text-green-600" /> Free Chilled Storage Support
                </div>
              </div>
            </motion.div>
          </div>

          {/* Coming Soon Areas (Right Column, smaller) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="frosted-glass-card rounded-3xl p-8 sm:p-10 flex-grow flex flex-col justify-between shadow-3d hover-lift tilt-card inner-highlight text-slate-800"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 animate-pulse">
                      <Globe className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">Soon Expanding</h3>
                      <p className="font-sans text-xs text-amber-600 font-semibold tracking-wider uppercase mt-0.5">Aabshar Next Phases</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold uppercase">
                    Pipelines
                  </span>
                </div>

                <div className="space-y-4">
                  {comingSoonAreas.map((area) => (
                    <div
                      key={area.name}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-teal/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-pulse" />
                        <span className="font-serif text-base sm:text-lg font-bold text-slate-800">{area.name}</span>
                      </div>
                      <span className="font-sans text-[10px] uppercase font-bold text-amber-700 tracking-wider bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                        {area.target}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Expansion Note */}
              <div className="mt-8 p-5 bg-sky-50 border border-sky-100 rounded-2xl text-left">
                <h4 className="font-serif text-sm font-bold text-slate-900 mb-2">Want Aabshar in your community?</h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed mb-3">
                  We determine upcoming regional distribution stations by counting corporate request volume. Drop us a note if you represent a commercial firm or residential development project!
                </p>
                <a
                  href="#contact"
                  className="font-sans text-xs text-brand-teal hover:text-brand-gold font-bold inline-flex items-center gap-1 transition-colors group"
                >
                  Request Regional Hub Inclusion
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </a>
              </div>
            </motion.div>
          </div>

        </div>

      </div>

      {/* Overlapping Bottom Liquid Flow Wave transitions into reviews */}
      <div className="absolute bottom-0 inset-x-0 h-12 overflow-hidden pointer-events-none z-10 select-none opacity-40 translate-y-px">
        <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1000px] rotate-180">
          <path d="M0,32 C240,70 480,0 720,40 C960,80 1200,10 1440,32 L1440,0 L0,0 Z" fill="rgba(2, 132, 199, 0.08)" />
          <path d="M0,45 C300,10 600,60 900,20 C1200,-20 1350,50 1440,30 L1440,0 L0,0 Z" fill="rgba(14, 165, 233, 0.05)" />
        </svg>
      </div>
    </section>
  );
}
