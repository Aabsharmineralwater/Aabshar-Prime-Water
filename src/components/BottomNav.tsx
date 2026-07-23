import { useState, useEffect } from 'react';
import { Home, Package, Building2, Info } from 'lucide-react';

interface BottomNavProps {
  onLinkClick: (href: string) => void;
}

export default function BottomNav({ onLinkClick }: BottomNavProps) {
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 250; // trigger offset
      const sections = ['#hero', '#products', '#b2b', '#about'];
      
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleTabClick = (href: string) => {
    onLinkClick(href);
  };

  const openWhatsApp = () => {
    const WHATSAPP_NUMBER = '923051999897';
    const msg = `Hi Aabshar! 💧\nI saw your mobile website and want to ask about your premium mineral water. Please share details.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 left-4 right-4 z-40 bg-slate-950/98 backdrop-blur-3xl border border-sky-400/25 shadow-[0_15px_45px_rgba(2,132,199,0.35),0_4px_12px_rgba(0,0,0,0.5)] rounded-2xl md:hidden pb-safe overflow-hidden">
      <div className="flex items-center justify-around h-18 px-1.5 max-w-md mx-auto">
        
        {/* Home */}
        <button
          onClick={() => handleTabClick('#hero')}
          className="flex flex-col items-center justify-center flex-1 h-full gap-1 transition-all duration-300 relative select-none active-scale py-1 cursor-pointer border-0"
          style={{ minWidth: '48px', minHeight: '48px' }}
        >
          <div className={`p-2 rounded-xl transition-all duration-300 ${
            activeSection === '#hero' 
              ? 'text-sky-200 bg-sky-500/25 scale-110 shadow-[0_0_15px_rgba(14,165,233,0.3),inset_0_1px_4px_rgba(255,255,255,0.2)] border border-sky-400/30' 
              : 'text-slate-400 hover:text-slate-200'
          }`}>
            <Home className="w-5.5 h-5.5 stroke-[2.4]" />
          </div>
          <span className={`text-[10px] tracking-wide font-black transition-colors duration-300 ${
            activeSection === '#hero' ? 'text-white font-extrabold' : 'text-slate-450 font-bold'
          }`}>Home</span>
          {activeSection === '#hero' && (
            <span className="absolute bottom-0 w-8 h-1 rounded-full bg-linear-to-r from-brand-teal to-brand-aqua shadow-[0_0_14px_#38bdf8] animate-fade-in" />
          )}
        </button>

        {/* Products */}
        <button
          onClick={() => handleTabClick('#products')}
          className="flex flex-col items-center justify-center flex-1 h-full gap-1 transition-all duration-300 relative select-none active-scale py-1 cursor-pointer border-0"
          style={{ minWidth: '48px', minHeight: '48px' }}
        >
          <div className={`p-2 rounded-xl transition-all duration-300 ${
            activeSection === '#products' 
              ? 'text-sky-200 bg-sky-500/25 scale-110 shadow-[0_0_15px_rgba(14,165,233,0.3),inset_0_1px_4px_rgba(255,255,255,0.2)] border border-sky-400/30' 
              : 'text-slate-400 hover:text-slate-200'
          }`}>
            <Package className="w-5.5 h-5.5 stroke-[2.4]" />
          </div>
          <span className={`text-[10px] tracking-wide font-black transition-colors duration-300 ${
            activeSection === '#products' ? 'text-white font-extrabold' : 'text-slate-450 font-bold'
          }`}>Products</span>
          {activeSection === '#products' && (
            <span className="absolute bottom-0 w-8 h-1 rounded-full bg-linear-to-r from-brand-teal to-brand-aqua shadow-[0_0_14px_#38bdf8] animate-fade-in" />
          )}
        </button>

        {/* B2B */}
        <button
          onClick={() => handleTabClick('#b2b')}
          className="flex flex-col items-center justify-center flex-1 h-full gap-1 transition-all duration-300 relative select-none active-scale py-1 cursor-pointer border-0"
          style={{ minWidth: '48px', minHeight: '48px' }}
        >
          <div className={`p-2 rounded-xl transition-all duration-300 ${
            activeSection === '#b2b' 
              ? 'text-sky-200 bg-sky-500/25 scale-110 shadow-[0_0_15px_rgba(14,165,233,0.3),inset_0_1px_4px_rgba(255,255,255,0.2)] border border-sky-400/30' 
              : 'text-slate-400 hover:text-slate-200'
          }`}>
            <Building2 className="w-5.5 h-5.5 stroke-[2.4]" />
          </div>
          <span className={`text-[10px] tracking-wide font-black transition-colors duration-300 ${
            activeSection === '#b2b' ? 'text-white font-extrabold' : 'text-slate-450 font-bold'
          }`}>B2B</span>
          {activeSection === '#b2b' && (
            <span className="absolute bottom-0 w-8 h-1 rounded-full bg-linear-to-r from-brand-teal to-brand-aqua shadow-[0_0_14px_#38bdf8] animate-fade-in" />
          )}
        </button>

        {/* About Us */}
        <button
          onClick={() => handleTabClick('#about')}
          className="flex flex-col items-center justify-center flex-1 h-full gap-1 transition-all duration-300 relative select-none active-scale py-1 cursor-pointer border-0"
          style={{ minWidth: '48px', minHeight: '48px' }}
        >
          <div className={`p-2 rounded-xl transition-all duration-300 ${
            activeSection === '#about' 
              ? 'text-sky-200 bg-sky-500/25 scale-110 shadow-[0_0_15px_rgba(14,165,233,0.3),inset_0_1px_4px_rgba(255,255,255,0.2)] border border-sky-400/30' 
              : 'text-slate-400 hover:text-slate-200'
          }`}>
            <Info className="w-5.5 h-5.5 stroke-[2.4]" />
          </div>
          <span className={`text-[10px] tracking-wide font-black transition-colors duration-300 ${
            activeSection === '#about' ? 'text-white font-extrabold' : 'text-slate-450 font-bold'
          }`}>About Us</span>
          {activeSection === '#about' && (
            <span className="absolute bottom-0 w-8 h-1 rounded-full bg-linear-to-r from-brand-teal to-brand-aqua shadow-[0_0_14px_#38bdf8] animate-fade-in" />
          )}
        </button>

        {/* WhatsApp Contact */}
        <div className="flex items-center justify-center flex-1 h-full">
          <button
            onClick={openWhatsApp}
            className="flex items-center justify-center h-11 w-11 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-[0_4px_18px_rgba(16,185,129,0.55),0_0_8px_rgba(16,185,129,0.3)] active:scale-95 transition-transform duration-300 relative border-0 cursor-pointer"
            aria-label="WhatsApp Order"
          >
            <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.1 1.455 4.782 1.456 5.486 0 9.948-4.461 9.951-9.94.002-2.654-1.03-5.15-2.903-7.027-1.872-1.877-4.363-2.91-7.018-2.913-5.487 0-9.95 4.46-9.954 9.94l-.001 1.94c.002 1.42.37 2.82 1.07 4.05l-.94 3.44 3.51-.92c1.23.67 2.5 1.03 3.82 1.03zm10.742-7.514c-.29-.145-1.72-.85-1.983-.947-.267-.1-.462-.146-.657.146-.196.29-.757.948-.928 1.14-.17.195-.34.22-.63.073-.29-.145-1.228-.453-2.337-1.444-.863-.77-1.447-1.72-1.617-2.013-.17-.29-.018-.447.127-.59.13-.13.29-.34.435-.51.145-.17.193-.29.29-.485.097-.195.048-.363-.024-.51-.07-.145-.657-1.58-.9-2.17-.236-.57-.477-.493-.657-.5-.17-.006-.364-.007-.56-.007-.195 0-.51.073-.777.363-.266.29-1.018.995-1.018 2.428 0 1.433 1.04 2.81 1.187 3.01.146.193 2.05 3.12 4.96 4.38.7.3 1.24.48 1.66.62.7.22 1.34.19 1.84.11.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.267-.19-.558-.335z"/>
            </svg>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}
