import { useState, useEffect } from 'react';
import { Menu, X, Droplets, Phone, Mail, MapPin, Clock, Info, ChevronRight, Home, Package, Briefcase, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import aabsharLogo from '../assets/images/aabshar_brand_logo.png';

interface NavbarProps {
  onOrderClick: () => void;
  onLinkClick: (href: string) => void;
}

export default function Navbar({ onOrderClick, onLinkClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 240; // timing offset
      const sections = ['#hero', '#products', '#b2b', '#about', '#contact'];
      
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
    
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', icon: <Home className="w-4 h-4" /> },
    { name: 'Product', href: '#products', icon: <Package className="w-4 h-4" /> },
    { name: 'B2B Service', href: '#b2b', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'About Us', href: '#about', icon: <Users className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <Phone className="w-4 h-4" /> },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    onLinkClick(href);
  };

  return (
    <>
      <header
        id="navbar"
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans"
      >
        {/* COLLAPSIBLE PREMIUM TOP UTILITY BAR (Desktop only) */}
        <div 
          className={`hidden md:block bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-300 border-b border-white/[0.04] transition-all duration-350 transform origin-top overflow-hidden ${
            isScrolled ? 'max-h-0 py-0 opacity-0 scale-y-0' : 'max-h-11 py-2 opacity-100 scale-y-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-semibold tracking-wide">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
                <MapPin className="w-3.5 h-3.5 text-[#4FD1E8]" />
                <span>Rawalpindi • Islamabad • Fateh Jang</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
                <Clock className="w-3.5 h-3.5 text-[#4FD1E8]" />
                <span>Daily Delivery: 8:00 AM – 8:00 PM</span>
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="tel:+923051999897" className="flex items-center gap-1.5 text-[#4FD1E8] hover:text-white transition-colors font-bold">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+92-305-1999897</span>
              </a>
              <a href="mailto:aabshar.org@gmail.com" className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#4FD1E8]" />
                <span>aabshar.org@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION GLASS CONTAINER */}
        <div 
          className={`transition-all duration-300 border-b ${
            isScrolled
              ? 'bg-[#0A1930]/98 backdrop-blur-xl shadow-2xl border-[#00D4FF]/25 py-2.5'
              : 'bg-[#0A1930]/95 backdrop-blur-lg shadow-xl border-[#00D4FF]/20 py-3.5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* DESKTOP HEADER LAYOUT (>= md) */}
            <div className="hidden md:flex items-center justify-between min-h-16 md:min-h-18">
              {/* Premium Logo Column */}
              <div className="flex-shrink-0 flex items-center">
                <button 
                  onClick={() => handleLinkClick('#hero')} 
                  className="flex items-center gap-2 group cursor-pointer bg-transparent border-0 active:scale-95 transition-transform duration-200"
                >
                  <img
                    src={aabsharLogo}
                    alt="Aabshar Prime Water Logo"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className={`object-contain transition-all duration-300 group-hover:scale-102 ${
                      isScrolled
                        ? 'h-14 sm:h-16 md:h-18 lg:h-20'
                        : 'h-16 sm:h-18 md:h-22 lg:h-24'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                </button>
              </div>

              {/* Desktop Navigation Link Pills with Gold/Cyan Active Dot Indicator */}
              <div className="hidden md:flex items-center space-x-1.5 bg-[#0F3A4A]/80 backdrop-blur-md p-1.5 rounded-full border border-[#00D4FF]/25 shadow-inner">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <button
                      key={link.name}
                      onClick={() => handleLinkClick(link.href)}
                      className={`font-sans text-xs lg:text-sm font-bold transition-all duration-300 cursor-pointer px-4 py-1.8 rounded-full flex items-center gap-1.5 relative ${
                        isActive 
                          ? 'text-white bg-[#0A1930] shadow-md border border-[#00D4FF]/40' 
                          : 'text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A] shadow-[0_0_8px_#C9A24A] animate-pulse" />
                      )}
                      {link.name}
                    </button>
                  );
                })}
              </div>

              {/* Desktop Dynamic Call To Action Button (Signature Gold/Gradient Pill -> Opens WhatsApp directly) */}
              <div className="hidden md:flex items-center">
                <a
                  id="navbar-cta"
                  href="https://wa.me/923051999897?text=Hi%20Aabshar,%20I%20would%20like%20to%20place%20an%20order%20for%20Aabshar%20Prime%20Water."
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex items-center justify-center px-6 py-2.5 font-black text-xs lg:text-sm tracking-wider uppercase text-[#0A1930] rounded-full bg-gradient-to-r from-[#C9A24A] via-[#E5C158] to-[#C9A24A] hover:brightness-110 shadow-[0_4px_20px_rgba(201,162,74,0.35)] border border-[#E5C158]/50 press-scale transition-all duration-300 cursor-pointer hover:shadow-[0_0_25px_rgba(201,162,74,0.6)]"
                >
                  <Droplets className="w-4 h-4 mr-1.5 text-[#0A1930] fill-[#0A1930]" />
                  Order Now
                </a>
              </div>
            </div>

            {/* MOBILE HEADER LAYOUT (< md): Left Hamburger -> Center Logo -> Right Order Button */}
            <div className="flex md:hidden items-center justify-between min-h-16 w-full">
              {/* 1. Far Left: Hamburger Menu Toggle */}
              <div className="flex-1 flex justify-start items-center">
                <button
                  id="menu-toggle"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle Navigation Menu"
                  className="text-white hover:text-[#00D4FF] bg-[#0F3A4A]/80 hover:bg-[#0F3A4A] p-2 rounded-xl press-scale transition-colors border border-[#00D4FF]/30 cursor-pointer"
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>

              {/* 2. Middle: Centered Logo */}
              <div className="flex-shrink-0 flex justify-center items-center">
                <button 
                  onClick={() => handleLinkClick('#hero')} 
                  className="flex items-center justify-center group cursor-pointer bg-transparent border-0 active:scale-95 transition-transform duration-200"
                >
                  <img
                    src={aabsharLogo}
                    alt="Aabshar Prime Water Logo"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className={`object-contain transition-all duration-300 group-hover:scale-102 ${
                      isScrolled
                        ? 'h-13 sm:h-15'
                        : 'h-15 sm:h-17'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                </button>
              </div>

              {/* 3. Far Right: Mobile Order Button */}
              <div className="flex-1 flex justify-end items-center">
                <a
                  href="https://wa.me/923051999897?text=Hi%20Aabshar,%20I%20would%20like%20to%20place%20an%20order%20for%20Aabshar%20Prime%20Water."
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.8 text-xs font-black text-[#0A1930] bg-gradient-to-r from-[#C9A24A] via-[#E5C158] to-[#C9A24A] rounded-full shadow-md active:scale-95 transition-all flex items-center gap-1 cursor-pointer border border-[#E5C158]/40"
                >
                  <Droplets className="w-3.5 h-3.5 text-[#0A1930] fill-[#0A1930]" />
                  <span>Order</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ELEGANT MOBILE DRAWER SYSTEM */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Tap to close backdrop overlay with high cinematic atmosphere */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-40 md:hidden"
                id="drawer-backdrop"
              />

              {/* Modern Slide-out Panel Drawer Container in Navy Theme */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 26, stiffness: 210 }}
                className="fixed top-0 right-0 h-screen w-full max-w-[340px] sm:max-w-[380px] bg-[#0A1930] text-white z-50 md:hidden shadow-2xl border-l border-[#00D4FF]/30 flex flex-col justify-between overflow-y-auto"
                id="drawer-panel"
              >
                {/* 1. Drawer Header Panel */}
                <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#0F3A4A]/80">
                  <div className="flex items-center gap-2">
                    <img 
                      src={aabsharLogo} 
                      alt="Aabshar Prime Water Logo" 
                      className="h-12 w-auto"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* 2. Main Navigation Links Lists */}
                <div className="px-5 py-6 flex-grow space-y-6">
                  <div>
                    <h4 className="text-[10px] font-extrabold text-[#C9A24A] uppercase tracking-widest pl-1 mb-3 select-none">
                      Menu Sections
                    </h4>
                    <div className="space-y-1.5">
                      {navLinks.map((link) => {
                        const isActive = activeSection === link.href;
                        return (
                          <button
                            key={link.name}
                            onClick={() => handleLinkClick(link.href)}
                            className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                              isActive
                                ? 'text-[#00D4FF] bg-[#0F3A4A] shadow-md border-l-4 border-[#00D4FF] pl-3'
                                : 'text-slate-300 hover:text-white hover:bg-white/5 border-l-4 border-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className={isActive ? 'text-[#00D4FF]' : 'text-slate-400'}>
                                {link.icon}
                              </span>
                              <span>{link.name}</span>
                            </div>
                            <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#00D4FF] translate-x-1' : 'text-slate-500'}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. Balanced Quality Summary Widget Card */}
                  <div className="p-4 bg-[#0F3A4A]/60 rounded-2xl border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-[#00D4FF] font-extrabold text-xs tracking-wider uppercase">
                      <Info className="w-4 h-4" />
                      <span>Standard Certification</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed text-left font-medium">
                      Formulated with scientifically balanced natural minerals TDS 120–160, offering healthy active companion standards daily.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                      <div>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Bio TDS</span>
                        <span className="text-[11px] font-black text-[#C9A24A]">135 PPM Target</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Lab Sourced</span>
                        <span className="text-[11px] font-black text-[#00D4FF]">100% PCRWR Approved</span>
                      </div>
                    </div>
                  </div>

                  {/* 4. Contact Details Widget Card */}
                  <div className="p-4 bg-[#0F3A4A]/40 rounded-2xl border border-white/10 space-y-3">
                    <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider">
                      <Phone className="w-4 h-4 text-[#C9A24A]" />
                      <span>Regional Delivery Ops</span>
                    </div>
                    
                    <div className="space-y-2 text-[11px] text-slate-300">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-3.5 h-3.5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                        <span className="leading-tight text-left">Islamabad, Rawalpindi & Fateh Jang</span>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Phone className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <a href="tel:+923051999897" className="text-[#C9A24A] font-black hover:underline text-left">
                          +92-305-1999897
                        </a>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <Mail className="w-3.5 h-3.5 text-[#00D4FF] mt-0.5 flex-shrink-0" />
                        <a href="mailto:aabshar.org@gmail.com" className="text-slate-300 font-medium hover:underline text-left break-all">
                          aabshar.org@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5. Mobile CTA Bottom Block (Golden Button opening WhatsApp) */}
                <div className="p-5 border-t border-white/10 bg-[#0F3A4A]/80">
                  <a
                    href="https://wa.me/923051999897?text=Hi%20Aabshar,%20I%20would%20like%20to%20place%20an%20order%20for%20Aabshar%20Prime%20Water."
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full px-5 py-3.5 text-sm font-black text-[#0A1930] bg-gradient-to-r from-[#C9A24A] via-[#E5C158] to-[#C9A24A] rounded-xl shadow-[0_4px_20px_rgba(201,162,74,0.4)] hover:brightness-110 active:scale-98 transition-all cursor-pointer border border-[#E5C158]/50 uppercase tracking-wider"
                  >
                    <Droplets className="w-4.5 h-4.5 mr-2 text-[#0A1930] fill-[#0A1930] animate-bounce" />
                    Place Quick Order
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
