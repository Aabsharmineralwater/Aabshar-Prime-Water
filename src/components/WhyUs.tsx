import React from 'react';
import { GlassWater, Droplet, ShieldCheck, Truck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface FeatureItem {
  number: string;
  icon: React.ReactNode;
  title: string;
  badge: string;
  bullets: string[];
  monoStat: string;
}

export default function WhyUs() {
  const features: FeatureItem[] = [
    {
      number: '01',
      icon: <Droplet className="w-4 h-4 text-[#0284C7]" />,
      title: '120–160 TDS Target',
      badge: 'Cellular Absorption',
      bullets: ['Magnesium & Potassium', 'Cellular Hydration', 'Zero Saline Taste'],
      monoStat: '135 PPM Target',
    },
    {
      number: '02',
      icon: <GlassWater className="w-4 h-4 text-[#0284C7]" />,
      title: 'Molecular Purity',
      badge: '9-Stage Filtration',
      bullets: ['Reverse Osmosis', 'UV Sterilization', 'Ozonated Freshness'],
      monoStat: 'Multi-Stage Filter',
    },
    {
      number: '03',
      icon: <Truck className="w-4 h-4 text-[#0284C7]" />,
      title: 'Chilled Fleet Express',
      badge: 'Doorstep Delivery',
      bullets: ['Temperature Controlled', 'Same-Day Dispatch', 'Zero Delivery Fee'],
      monoStat: 'Daily Runs',
    },
    {
      number: '04',
      icon: <ShieldCheck className="w-4 h-4 text-[#0284C7]" />,
      title: 'WHO & PCRWR Compliant',
      badge: 'Lab Certified',
      bullets: ['Daily Lab Testing', 'Micro-Filtered', 'PCRWR Approved'],
      monoStat: '100% Verified',
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-white text-slate-800 relative overflow-hidden cv-auto border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Magazine Editorial Section Header & Cards — Hidden on Mobile (< md), Visible on Tablet/Desktop (>= md) */}
        <div className="hidden md:block">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 font-mono text-xs font-bold tracking-widest uppercase mb-4 text-[#0284C7]"
            >
              <GlassWater className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span>The Bio-Mineral Standard</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
            >
              “Pure Minerals, Perfected by <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#0088CC] via-[#00B4D8] to-[#0284C7] border-b-2 border-sky-300">Nature & Science</span>.”
            </motion.h2>

            <p className="font-sans text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Every bottle is processed through multi-stage micro-filtration and calibrated to an optimal mineral balance for maximum cellular absorption and crisp, natural taste.
            </p>
          </div>

          {/* Desktop/Tablet View: Grid Layout (>= md breakpoint) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:border-sky-300 transition-all relative group flex flex-col justify-between"
              >
                {/* Fine aqua top accent bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00D4FF] via-[#0284C7] to-[#0369A1] rounded-t-2xl opacity-90" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284C7]">
                      {item.icon}
                    </div>
                    <span className="font-mono text-xs font-black text-[#0284C7] bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full">
                      {item.number}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#0284C7] block mb-1">
                    {item.badge}
                  </span>

                  <h3 className="font-serif text-xl font-extrabold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <div className="w-full h-[1px] bg-gradient-to-r from-sky-300 via-slate-200 to-transparent mb-3" />

                  <ul className="space-y-1.5 mb-4">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-center text-xs text-slate-700 font-medium">
                        <Zap className="w-3 h-3 text-[#0284C7] mr-2 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-bold">Lab Target</span>
                  <span className="font-mono text-[11px] font-bold text-[#0284C7]">
                    {item.monoStat}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CUSTOM HORIZONTAL FUEL GAUGE METER GRAPHIC FOR 135 PPM TDS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-slate-50 text-slate-800 border border-slate-200 shadow-xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 text-left">
              <span className="font-mono text-xs font-bold tracking-widest uppercase bg-sky-100 border border-sky-300 text-[#0284C7] px-3.5 py-1 rounded-full mb-3 inline-block">
                SCIENTIFIC TDS ABSORPTION GAUGE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
                Why <span className="font-serif italic text-[#0284C7]">120–160 TDS</span> is the Bio-Sweet Spot
              </h3>
              <p className="font-sans text-slate-600 text-sm leading-relaxed max-w-xl">
                Demineralized water (&lt;50 TDS) leaches body minerals and causes acidic taste. Excess mineral water (&gt;300 TDS) burdens kidneys with heavy salts. Aabshar’s engineered 135 PPM target matches cellular fluid density for optimal bio-absorption.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 text-left shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold uppercase text-slate-500 tracking-wider">Bio-Hydration Meter</span>
                <span className="font-serif text-sm font-extrabold text-[#0284C7] bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                  Aabshar Target: 135 PPM
                </span>
              </div>

              {/* FUEL GAUGE METER GRAPHIC */}
              <div className="relative w-full my-4">
                {/* Meter Bar Container */}
                <div className="h-7 w-full rounded-full bg-slate-100 border border-slate-300 p-0.5 flex overflow-hidden shadow-inner">
                  {/* Zone 1: Demineralized / Acidic */}
                  <div className="w-[30%] h-full bg-slate-200 border-r border-slate-300 flex items-center justify-center text-[9px] font-mono font-bold text-slate-600">
                    ACIDIC (&lt;50)
                  </div>
                  {/* Zone 2: Aabshar Ideal Bio-Zone */}
                  <div className="w-[40%] h-full bg-gradient-to-r from-[#00D4FF] via-[#0284C7] to-[#0369A1] flex items-center justify-center text-[9px] font-mono font-black text-white uppercase tracking-wider relative shadow-md">
                    SWEET SPOT (120-160)
                  </div>
                  {/* Zone 3: High Saline / Heavy Salts */}
                  <div className="w-[30%] h-full bg-slate-200 border-l border-slate-300 flex items-center justify-center text-[9px] font-mono font-bold text-slate-600">
                    HEAVY (&gt;300)
                  </div>
                </div>

                {/* Glowing Needle Indicator pointing directly at 135 PPM (approx 52% mark) */}
                <div className="absolute top-0 bottom-0 left-[52%] -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
                  <div className="w-1 h-9 bg-[#0284C7] shadow-sm rounded-full animate-pulse" />
                  <div className="w-3.5 h-3.5 rounded-full bg-[#00D4FF] border-2 border-white shadow-md -mt-1" />
                </div>
              </div>

              <div className="p-3 bg-sky-50 rounded-xl border border-sky-200 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#0284C7] flex-shrink-0" />
                <span className="font-serif text-xs font-bold text-slate-800">
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
