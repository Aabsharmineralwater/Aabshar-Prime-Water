import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import aabsharLogo from '../assets/images/aabshar_brand_logo.webp';

interface FooterProps {
  onLinkClick: (href: string) => void;
}

export default function Footer({ onLinkClick }: FooterProps) {
  const handleLinkClick = (href: string) => {
    onLinkClick(href);
  };

  return (
    <footer className="pt-16 pb-10 relative overflow-hidden font-sans text-slate-400 border-t border-white/5 bg-transparent">
      {/* Continuing Background Scenery Overlay (Deepest for highest text contrast) */}
      <div className="absolute inset-0 bg-[rgba(0,5,20,0.88)] z-0 pointer-events-none" />

      {/* Background design elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal/5 rounded-full filter blur-3xl pointer-events-none z-1" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-aqua/4 rounded-full filter blur-3xl pointer-events-none z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 items-start">
          
          {/* Column 1 — Brand */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center">
              <img
                src={aabsharLogo}
                alt="Aabshar Prime Water Logo"
                loading="lazy"
                decoding="async"
                className="h-14 sm:h-16 w-auto object-contain cursor-pointer transition-transform hover:scale-102"
                onClick={() => handleLinkClick('#hero')}
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-serif italic text-base font-bold text-brand-teal">
              Pure. Natural. Refreshing.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Premium mineral water delivered fresh to your doorstep.
            </p>
            
            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/share/1Cctr2CWfk/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:shadow-xs hover:border-blue-200 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/aabshar_org/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-pink-600 hover:shadow-xs hover:border-pink-200 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/923051999897?text=${encodeURIComponent("Hi Aabshar! 👋\nI'd like to place an order or get more information.\nPlease assist me.")}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:shadow-xs hover:border-emerald-200 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.1 1.455 4.782 1.456 5.486 0 9.948-4.461 9.951-9.94.002-2.654-1.03-5.15-2.903-7.027-1.872-1.877-4.363-2.91-7.018-2.913-5.487 0-9.95 4.46-9.954 9.94l-.001 1.94c.002 1.42.37 2.82 1.07 4.05l-.94 3.44 3.51-.92c1.23.67 2.5 1.03 3.82 1.03zm10.742-7.514c-.29-.145-1.72-.85-1.983-.947-.267-.1-.462-.146-.657.146-.196.29-.757.948-.928 1.14-.17.195-.34.22-.63.073-.29-.145-1.228-.453-2.337-1.444-.863-.77-1.447-1.72-1.617-2.013-.17-.29-.018-.447.127-.59.13-.13.29-.34.435-.51.145-.17.193-.29.29-.485.097-.195.048-.363-.024-.51-.07-.145-.657-1.58-.9-2.17-.236-.57-.477-.493-.657-.5-.17-.006-.364-.007-.56-.007-.195 0-.51.073-.777.363-.266.29-1.018.995-1.018 2.428 0 1.433 1.04 2.81 1.187 3.01.146.193 2.05 3.12 4.96 4.38.7.3 1.24.48 1.66.62.7.22 1.34.19 1.84.11.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.267-.19-.558-.335z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-brand-teal after:mt-1.5">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5 text-left items-start">
              <button
                onClick={() => handleLinkClick('#hero')}
                className="text-xs sm:text-sm text-slate-450 hover:text-brand-teal hover:translate-x-1 transition-all cursor-pointer bg-transparent border-0 py-0"
              >
                Home
              </button>
              <button
                onClick={() => handleLinkClick('#products')}
                className="text-xs sm:text-sm text-slate-450 hover:text-brand-teal hover:translate-x-1 transition-all cursor-pointer bg-transparent border-0 py-0"
              >
                Products
              </button>
              <button
                onClick={() => handleLinkClick('#b2b')}
                className="text-xs sm:text-sm text-slate-450 hover:text-brand-teal hover:translate-x-1 transition-all cursor-pointer bg-transparent border-0 py-0"
              >
                B2B Service
              </button>
              <button
                onClick={() => handleLinkClick('#about')}
                className="text-xs sm:text-sm text-slate-450 hover:text-brand-teal hover:translate-x-1 transition-all cursor-pointer bg-transparent border-0 py-0"
              >
                About Us
              </button>
              <button
                onClick={() => handleLinkClick('#contact')}
                className="text-xs sm:text-sm text-slate-450 hover:text-brand-teal hover:translate-x-1 transition-all cursor-pointer bg-transparent border-0 py-0"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Column 3 — Our Products */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-brand-teal after:mt-1.5 font-display">
              Our Products
            </h4>
            <ul className="flex flex-col gap-2.5 text-slate-400 text-xs sm:text-sm text-left">
              <li className="cursor-pointer hover:text-brand-teal transition-colors" onClick={() => handleLinkClick('#products')}>
                500ml Mineral Water Bottle
              </li>
              <li className="cursor-pointer hover:text-brand-teal transition-colors" onClick={() => handleLinkClick('#products')}>
                1.5 Litre Mineral Water Bottle
              </li>
              <li className="cursor-pointer hover:text-brand-teal transition-colors" onClick={() => handleLinkClick('#b2b')}>
                Private Label / Custom Bottles
              </li>
              <li className="cursor-pointer hover:text-brand-teal transition-colors" onClick={() => handleLinkClick('#b2b')}>
                B2B & Corporate Orders
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact Us */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-brand-teal after:mt-1.5 font-display">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3 text-slate-400 text-xs sm:text-sm text-left">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                <span><strong>Serving:</strong> Rawalpindi, Islamabad, Fateh Jang</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span><strong>Phone:</strong> <a href="tel:+923051999897" className="hover:text-brand-teal font-medium hover:underline">+92-305-1999897</a></span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <span><strong>Email:</strong> <a href="mailto:aabshar.org@gmail.com" className="hover:text-brand-teal hover:underline font-medium">aabshar.org@gmail.com</a></span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span><strong>Delivery Hours:</strong> 8am – 8pm Daily</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="font-sans text-slate-400">
            © 2026 Aabshar Prime Water. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={() => handleLinkClick('#privacy')} className="hover:text-brand-teal transition-colors cursor-pointer bg-transparent border-0 py-0">Privacy Policy</button>
            <span className="text-white/10">|</span>
            <button onClick={() => handleLinkClick('#terms')} className="hover:text-brand-teal transition-colors cursor-pointer bg-transparent border-0 py-0">Terms & Conditions</button>
          </div>
          <p className="flex items-center gap-1 font-medium text-slate-450">
            Made with <span className="text-teal-500 animate-pulse">💧</span> in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
