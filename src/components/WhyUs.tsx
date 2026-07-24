import { GlassWater, Droplet, Mountain, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyUs() {
  const features = [
    {
      icon: <Droplet className="w-8 h-8 text-brand-teal" />,
      title: '120–160 TDS',
      badge: 'Perfect mineral balance',
      description: 'The sweet spot for cellular absorption. Perfectly balanced mineral composition with essential magnesium, calcium, and potassium ions to power your daily vitality.',
    },
    {
      icon: <GlassWater className="w-8 h-8 text-brand-teal" />,
      title: 'Pristine Purity',
      badge: 'Advanced Purification',
      description: 'Subjected to multi-stage filtration and molecular balancing to achieve absolute physical cleanliness, giving you a refreshing, premium daily hydration taste.',
    },
    {
      icon: <Truck className="w-8 h-8 text-brand-teal" />,
      title: 'Cold Doorstep Delivery',
      badge: 'Fresh every time',
      description: 'Delivered in dedicated temperature-controlled vans. Your water reaches your home or office cold, crisp, and ready to immediately quench your thirst.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-teal" />,
      title: 'Lab Verified',
      badge: 'Quality you can trust',
      description: 'Subjected to rigorous daily testing at our state-of-the-art laboratory and verified by independent accredited institutions to exceed standard WHO guidelines.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden text-slate-100 border-t border-white/5 cv-auto">
      {/* Continuing Background Scenery Overlay (Slightly darker for text readability) */}
      <div className="absolute inset-0 bg-[rgba(5,15,35,0.72)] z-0 pointer-events-none" />
      {/* Top Wave Divider Representing Pristine Flow */}
      <div className="absolute top-0 inset-x-0 h-10 overflow-hidden pointer-events-none z-1 select-none opacity-40">
        <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1000px]">
          <path d="M0,32 C240,70 480,0 720,40 C960,80 1200,10 1440,32 L1440,0 L0,0 Z" fill="rgba(2, 132, 199, 0.08)" />
          <path d="M0,45 C300,10 600,60 900,20 C1200,-20 1350,50 1440,30 L1440,0 L0,0 Z" fill="rgba(14, 165, 233, 0.05)" />
        </svg>
      </div>

      {/* Visual background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e903_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e903_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Animated Rising Water Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute left-[8%] bottom-0 w-3 h-3 bg-brand-teal/15 rounded-full blur-xs animate-bubble-slow" />
        <div className="absolute left-[25%] bottom-5 w-4 h-4 bg-brand-teal/10 rounded-full blur-xs animate-bubble-fast [animation-delay:3s]" />
        <div className="absolute right-[12%] bottom-2 w-2 h-2 bg-brand-teal/20 rounded-full blur-xs animate-bubble-slow [animation-delay:1.5s]" />
        <div className="absolute right-[30%] bottom-8 w-5 h-5 bg-brand-teal/10 rounded-full blur-xs animate-bubble-fast [animation-delay:4.5s]" />
      </div>

      {/* Stylized Science/Mineral filtration lattice map as watermark */}
      <div className="absolute right-[-10%] md:right-[2%] top-[10%] md:top-[12%] opacity-15 pointer-events-none select-none z-0 w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full text-brand-teal/30 drop-shadow-[0_0_30px_rgba(2,132,199,0.12)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Crystalline water molecule nodes (H2O & minerals) */}
          <g stroke="currentColor" strokeWidth="1.5">
            <line x1="200" y1="200" x2="100" y2="150" opacity="0.4" />
            <line x1="200" y1="200" x2="300" y2="150" opacity="0.4" />
            <line x1="200" y1="200" x2="200" y2="310" opacity="0.4" />
            <line x1="100" y1="150" x2="100" y2="70" strokeDasharray="3,3" opacity="0.3" />
            <line x1="300" y1="150" x2="300" y2="70" strokeDasharray="3,3" opacity="0.3" />
            <line x1="200" y1="310" x2="120" y2="350" strokeDasharray="3,3" opacity="0.3" />
            <line x1="200" y1="310" x2="280" y2="350" strokeDasharray="3,3" opacity="0.3" />
          </g>

          {/* Central O (Oxygen) Core */}
          <g className="translate-x-[200px] translate-y-[200px]">
            <circle cx="0" cy="0" r="32" className="fill-brand-teal/10 stroke-brand-teal stroke-2" />
            <circle cx="0" cy="0" r="12" className="fill-brand-teal" />
            <text x="0" y="5" textAnchor="middle" className="fill-white font-sans text-xs font-black">H₂O</text>
          </g>

          {/* Hydrogen & Mineral satellites */}
          <g className="translate-x-[100px] translate-y-[150px]">
            <circle cx="0" cy="0" r="22" className="fill-sky-500/10 stroke-sky-400 stroke-1" />
            <circle cx="0" cy="0" r="8" className="fill-sky-400" />
            <text x="0" y="-28" textAnchor="middle" className="fill-slate-900 font-sans text-[10px] font-bold">Ca²⁺ (Calcium)</text>
          </g>

          <g className="translate-x-[300px] translate-y-[150px]">
            <circle cx="0" cy="0" r="22" className="fill-sky-500/10 stroke-sky-400 stroke-1" />
            <circle cx="0" cy="0" r="8" className="fill-sky-400" />
            <text x="0" y="-28" textAnchor="middle" className="fill-slate-900 font-sans text-[10px] font-bold">Mg²⁺ (Magnesium)</text>
          </g>

          <g className="translate-x-[200px] translate-y-[310px]">
            <circle cx="0" cy="0" r="22" className="fill-sky-500/10 stroke-sky-400 stroke-1" />
            <circle cx="0" cy="0" r="8" className="fill-sky-400" />
            <text x="0" y="36" textAnchor="middle" className="fill-slate-900 font-sans text-[10px] font-bold">K⁺ (Potassium)</text>
          </g>

          {/* Outer orbiting rings */}
          <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1" strokeDasharray="5,15" fill="none" className="animate-[spin_30s_linear_infinite]" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white bg-brand-teal/30 border border-brand-teal/20 px-3.5 py-1 rounded-full font-sans text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 inline-flex items-center gap-1.5"
          >
            <GlassWater className="w-4 h-4 animate-bounce text-sky-200" />
            <span className="text-sky-100">The Pure Standard</span>
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-shadow-heading drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
          >
            What Makes Aabshar Premium & Pure?
          </motion.h2>
          <div className="w-20 h-1 bg-linear-to-r from-brand-teal to-brand-aqua mx-auto mt-6 rounded-full" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sky-100/90 text-base sm:text-lg mt-4"
          >
            Aabshar is more than just drinking water — it is scientifically balanced mineral hydration designed for active lifestyles, perfectly crafted to elevate your daily well-being.
          </motion.p>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="frosted-glass-card rounded-3xl p-8 hover:border-brand-teal/40 transition-all duration-300 shadow-3d hover-lift tilt-card inner-highlight relative group overflow-hidden text-slate-800"
            >
              {/* Subtle accent hover indicator in card top corner */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-brand-teal to-brand-aqua scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 group-hover:bg-brand-teal/10 group-hover:border-brand-teal/30 transition-all duration-300">
                {item.icon}
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-3">
                {item.badge}
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-teal transition-colors duration-200">
                {item.title}
              </h3>

              <p className="font-sans text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-200">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* TDS Showcase Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-8 sm:p-12 rounded-3xl frosted-glass-card shadow-3d hover-lift tilt-card inner-highlight relative overflow-hidden text-slate-850"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <span className="font-sans text-xs text-brand-teal font-bold tracking-widest uppercase bg-brand-teal/10 border border-brand-teal/20 px-3 py-1 rounded-full mb-4 inline-block">
                The Science of Balanced Hydration
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Why mineral water between 120 and 160 TDS is medically ideal
              </h3>
              <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                TDS (Total Dissolved Solids) measures minerals dissolved in drinking water. Water with too low TDS (under 50) tastes flat, robs minerals from your body cells, and offers zero hydration. High TDS (over 300) leaves a chalky saline residue. Water with 120–160 TDS represents the pristine organic target: sweet taste, instant bio-absorption, and essential electrolytes.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-150 pt-6 lg:pt-0 lg:pl-8 text-left">
              <div className="mb-4">
                <span className="text-[9px] uppercase font-mono tracking-widest text-brand-teal font-extrabold block mb-1">Aabshar Metric Laboratory</span>
                <h4 className="font-serif text-lg font-extrabold text-slate-900">Total Dissolved Solids (TDS)</h4>
              </div>

              {/* Styled Visual SVG Gauge bar */}
              <div className="w-full h-8 relative rounded-full overflow-hidden bg-slate-100/80 border border-slate-200/50 flex mb-4 shadow-inner">
                {/* 0-100 Low mineral segment */}
                <div className="w-[35%] h-full bg-gradient-to-r from-slate-200 to-sky-100 flex items-center justify-center">
                  <span className="text-[8px] font-sans font-extrabold text-slate-500 uppercase tracking-widest">Low</span>
                </div>
                {/* 120-160 Sweet Spot (Glowing Brand-Teal/Emerald) */}
                <div className="w-[30%] h-full bg-gradient-to-r from-brand-teal to-emerald-500 flex items-center justify-center relative shadow-[inset_0_0_12px_rgba(2,132,199,0.25)]">
                  <div className="absolute inset-0 bg-white/20 animate-pulse pointer-events-none" />
                  <span className="text-[8px] font-sans font-black text-white uppercase tracking-wider text-center drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">SWEET SPOT</span>
                </div>
                {/* 170-300 High mineral segment */}
                <div className="w-[35%] h-full bg-gradient-to-r from-slate-100 to-slate-200 flex items-center justify-center">
                  <span className="text-[8px] font-sans font-extrabold text-slate-500 uppercase tracking-widest">High</span>
                </div>

                {/* Sliding indicator node in the middle of sweet spot */}
                <div className="absolute left-[50%] top-[-3px] w-2.5 h-[38px] bg-slate-900 rounded-full shadow-lg border-2 border-white animate-bounce pointer-events-none" />
              </div>

              {/* Legend & range details */}
              <div className="grid grid-cols-3 text-center text-[10px] font-sans font-bold text-slate-500 uppercase tracking-wider mb-4">
                <div>&lt; 50 TDS</div>
                <div className="text-brand-teal font-extrabold">120 - 160</div>
                <div>&gt; 300 TDS</div>
              </div>

              <div className="p-3.5 bg-emerald-50/60 border border-emerald-100 rounded-2xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 flex-shrink-0 font-bold font-sans text-xs">
                  ✓
                </div>
                <p className="font-sans text-[11px] text-slate-600 leading-tight">
                  <strong>Aabshar Target Range:</strong> Our minerals are balanced to sit exactly at <strong>135 TDS</strong> for optimal cell bio-hydration.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Bottom overlapping wave divider flowing into Products catalog */}
      <div className="absolute bottom-0 inset-x-0 h-12 overflow-hidden pointer-events-none z-10 select-none opacity-40 translate-y-px">
        <svg viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto min-w-[1000px] rotate-180">
          <path d="M0,32 C240,70 480,0 720,40 C960,80 1200,10 1440,32 L1440,0 L0,0 Z" fill="rgba(100, 255, 218, 0.15)" />
          <path d="M0,45 C300,10 600,60 900,20 C1200,-20 1350,50 1440,30 L1440,0 L0,0 Z" fill="rgba(128, 255, 225, 0.08)" />
        </svg>
      </div>
    </section>
  );
}
