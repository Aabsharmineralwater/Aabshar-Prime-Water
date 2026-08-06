import { MapPin, Globe, Check, Compass, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

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
    <section id="delivery" className="py-20 bg-gradient-to-br from-[#0A1930] via-[#0F3A4A] to-[#0A1930] text-white relative overflow-hidden cv-auto border-t border-b border-[#00D4FF]/20">
      {/* Top & Bottom Glowing Border Lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/50 to-transparent pointer-events-none z-20" />

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4FD1E8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#0F3A4A]/50 rounded-full blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F3A4A] border border-[#4FD1E8]/30 text-[#4FD1E8] text-xs font-mono font-bold uppercase tracking-wider mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-[#4FD1E8] animate-spin-slow" />
            <span>Direct Coverage Map</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Delivering Fresh To <span className="font-serif italic text-[#4FD1E8]">Your Doorstep</span>
          </motion.h2>

          <div className="w-16 h-1 bg-[#4FD1E8] mx-auto mt-5 rounded-full" />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto"
          >
            Our specialized fleet of chilled delivery vehicles operates daily to bring Aabshar Prime Water straight to your residence, luxury café, wedding marquee, or office.
          </motion.p>
        </div>

        {/* VISUAL REGIONAL MAP SILHOUETTE GRAPHIC WITH GLOWING PINS */}
        <div className="mb-12 max-w-5xl mx-auto bg-[#0A1930]/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-[#00D4FF]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00D4FF_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          <div className="text-center mb-6 relative z-10">
            <span className="font-mono text-xs uppercase font-bold text-[#C9A24A] tracking-widest">
              NORTHERN PAKISTAN HUB NETWORK
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
              Rawalpindi – Islamabad – Fateh Jang Express Corridor
            </h3>
          </div>

          {/* Interactive Map Silhouette Diagram */}
          <div className="relative h-64 sm:h-80 w-full rounded-2xl bg-gradient-to-b from-[#0F3A4A]/40 to-[#061224]/80 border border-white/10 flex items-center justify-center overflow-hidden">
            {/* Topographic Lines Overlay */}
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,100 Q 200,50 400,120 T 800,80 T 1200,150" fill="none" stroke="#00D4FF" strokeWidth="2" />
              <path d="M 0,180 Q 300,120 600,200 T 1200,160" fill="none" stroke="#00D4FF" strokeWidth="1.5" />
              <path d="M 0,50 Q 250,150 500,70 T 1000,110" fill="none" stroke="#C9A24A" strokeWidth="1" />
            </svg>

            {/* Connected Route Glow Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              {/* Route 1: Fateh Jang to Rawalpindi */}
              <line x1="25%" y1="65%" x2="55%" y2="50%" stroke="#00D4FF" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse" />
              {/* Route 2: Rawalpindi to Islamabad */}
              <line x1="55%" y1="50%" x2="70%" y2="30%" stroke="#C9A24A" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse" />
            </svg>

            {/* Pin 1: Fateh Jang */}
            <div className="absolute left-[25%] top-[65%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-[#00D4FF]/30 animate-ping" />
                <div className="w-5 h-5 rounded-full bg-[#00D4FF] border-2 border-white flex items-center justify-center text-[#0A1930] shadow-[0_0_15px_#00D4FF]">
                  <MapPin className="w-3 h-3" />
                </div>
              </div>
              <div className="mt-1 bg-[#0A1930]/90 px-2.5 py-1 rounded-md border border-[#00D4FF]/40 text-center shadow-lg">
                <span className="font-serif text-xs font-extrabold text-white block">Fateh Jang</span>
                <span className="font-mono text-[9px] text-[#00D4FF] font-bold">Bottling Plant & Hub</span>
              </div>
            </div>

            {/* Pin 2: Rawalpindi */}
            <div className="absolute left-[55%] top-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-10 h-10 rounded-full bg-[#C9A24A]/30 animate-ping" />
                <div className="w-6 h-6 rounded-full bg-[#C9A24A] border-2 border-white flex items-center justify-center text-[#0A1930] shadow-[0_0_15px_#C9A24A]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="mt-1 bg-[#0A1930]/90 px-2.5 py-1 rounded-md border border-[#C9A24A]/40 text-center shadow-lg">
                <span className="font-serif text-xs font-extrabold text-white block">Rawalpindi</span>
                <span className="font-mono text-[9px] text-[#C9A24A] font-bold">Daily Fleet Line</span>
              </div>
            </div>

            {/* Pin 3: Islamabad */}
            <div className="absolute left-[70%] top-[30%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-12 h-12 rounded-full bg-[#00D4FF]/30 animate-ping" />
                <div className="w-6 h-6 rounded-full bg-[#00D4FF] border-2 border-white flex items-center justify-center text-[#0A1930] shadow-[0_0_15px_#00D4FF]">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="mt-1 bg-[#0A1930]/90 px-2.5 py-1 rounded-md border border-[#00D4FF]/40 text-center shadow-lg">
                <span className="font-serif text-xs font-extrabold text-white block">Islamabad</span>
                <span className="font-mono text-[9px] text-[#00D4FF] font-bold">Capital Express</span>
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
              className="bg-[#0A1930]/85 backdrop-blur-xl border border-[#4FD1E8]/30 rounded-3xl p-8 sm:p-10 flex-grow shadow-[0_15px_35px_-5px_rgba(0,0,0,0.6),_inset_0_1px_1px_0_rgba(255,255,255,0.15)] hover:border-[#4FD1E8] transition-all duration-300 relative overflow-hidden"
            >
              {/* Micro-depth top edge shine stroke */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#4FD1E8]/60 to-transparent pointer-events-none z-20" />

              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4FD1E8]/20 to-[#0F3A4A]/60 border border-[#4FD1E8]/40 flex items-center justify-center text-[#4FD1E8] shadow-md">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2.5xl font-extrabold text-white">Active Delivery Zone</h3>
                    <p className="font-mono text-xs text-[#4FD1E8] font-bold tracking-wider uppercase mt-0.5">Live Delivery Daily</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold animate-pulse shadow-xs">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  OPERATIONAL
                </span>
              </div>

              <div className="space-y-5">
                {activeAreas.map((area) => (
                  <div
                    key={area.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-[#0F3A4A]/60 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#4FD1E8]/50 transition-all duration-300 gap-4 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#4FD1E8]/15 border border-[#4FD1E8]/40 flex items-center justify-center text-[#4FD1E8] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg sm:text-xl font-extrabold text-white group-hover:text-[#4FD1E8] transition-colors">{area.name}</h4>
                        <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">{area.sector}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-right text-[#4FD1E8] text-xs font-mono font-bold bg-[#0A1930]/90 px-3.5 py-1.5 rounded-full border border-[#4FD1E8]/40 shadow-xs">
                      ⚡ {area.deliveryTime}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-left text-xs gap-4">
                <p className="font-sans text-slate-300">
                  ⚠️ Minimum delivery starting at only 5 units. No shipping fees applied!
                </p>
                <div className="inline-flex items-center text-[#4FD1E8] font-bold">
                  <Check className="w-4 h-4 mr-1 text-emerald-400" /> Free Chilled Storage Support
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
              className="bg-[#0A1930]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 flex-grow flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A24A]/10 border border-[#C9A24A]/30 flex items-center justify-center text-[#C9A24A]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Soon Expanding</h3>
                      <p className="font-mono text-xs text-[#C9A24A] font-bold tracking-wider uppercase mt-0.5">Aabshar Next Phases</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C9A24A]/20 border border-[#C9A24A]/40 text-[#C9A24A] text-xs font-mono font-bold uppercase">
                    Pipelines
                  </span>
                </div>

                <div className="space-y-4">
                  {comingSoonAreas.map((area) => (
                    <div
                      key={area.name}
                      className="flex items-center justify-between p-4 bg-[#0F3A4A]/40 rounded-xl border border-white/10 hover:border-[#C9A24A]/40 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 bg-[#C9A24A] rounded-full animate-pulse" />
                        <span className="font-serif text-base sm:text-lg font-bold text-white">{area.name}</span>
                      </div>
                      <span className="font-mono text-[10px] uppercase font-bold text-[#C9A24A] tracking-wider bg-[#C9A24A]/10 px-2.5 py-1 rounded-md border border-[#C9A24A]/30">
                        {area.target}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Expansion Note */}
              <div className="mt-8 p-5 bg-[#0F3A4A]/60 border border-[#4FD1E8]/20 rounded-2xl text-left">
                <h4 className="font-serif text-sm font-bold text-white mb-2">Want Aabshar in your community?</h4>
                <p className="font-sans text-xs text-slate-300 leading-relaxed mb-3">
                  We determine upcoming regional distribution stations by counting corporate request volume. Drop us a note if you represent a commercial firm or residential development project!
                </p>
                <a
                  href="#contact"
                  className="font-sans text-xs text-[#4FD1E8] hover:text-[#C9A24A] font-bold inline-flex items-center gap-1 transition-colors group"
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
