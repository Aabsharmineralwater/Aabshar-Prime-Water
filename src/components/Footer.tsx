import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import aabsharLogo from '../assets/images/aabshar_brand_logo.png';

interface FooterProps {
  onLinkClick: (href: string) => void;
}

export default function Footer({ onLinkClick }: FooterProps) {
  const handleLinkClick = (href: string) => {
    onLinkClick(href);
  };

  return (
    <footer className="pt-8 sm:pt-12 pb-24 md:pb-8 relative overflow-hidden font-sans text-slate-600 bg-white border-t border-slate-200 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x divide-slate-200 items-start">
          
          {/* Column 1 — Brand */}
          <div className="flex flex-col items-start gap-2 sm:gap-3 lg:pr-8 w-full max-w-full overflow-hidden">
            <div className="flex items-center max-w-full">
              <img
                src={aabsharLogo}
                alt="Aabshar Prime Water Logo"
                loading="lazy"
                decoding="async"
                className="h-10 sm:h-14 max-w-[180px] sm:max-w-[220px] w-auto object-contain cursor-pointer transition-transform hover:scale-102"
                onClick={() => handleLinkClick('#hero')}
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="font-serif italic text-xs sm:text-sm font-bold text-[#0284C7] whitespace-nowrap">
              Pure. Natural. Refreshing.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Premium mineral water delivered fresh to your doorstep across Rawalpindi, Islamabad, and Fateh Jang.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-2.5 pt-1 sm:pt-2">
              <a
                href="https://www.facebook.com/share/1Cctr2CWfk/"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#0284C7] hover:text-white shadow-sm transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>
              <a
                href="https://www.instagram.com/aabshar_org/"
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#0284C7] hover:text-white shadow-sm transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>
              <a
                href={`https://wa.me/923051999897?text=${encodeURIComponent("Hi Aabshar! 👋\nI'd like to place an order or get more information.\nPlease assist me.")}`}
                target="_blank"
                rel="noreferrer"
                className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 hover:bg-emerald-600 hover:text-white shadow-sm transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.1 1.455 4.782 1.456 5.486 0 9.948-4.461 9.951-9.94.002-2.654-1.03-5.15-2.903-7.027-1.872-1.877-4.363-2.91-7.018-2.913-5.487 0-9.95 4.46-9.954 9.94l-.001 1.94c.002 1.42.37 2.82 1.07 4.05l-.94 3.44 3.51-.92c1.23.67 2.5 1.03 3.82 1.03zm10.742-7.514c-.29-.145-1.72-.85-1.983-.947-.267-.1-.462-.146-.657.146-.196.29-.757.948-.928 1.14-.17.195-.34.22-.63.073-.29-.145-1.228-.453-2.337-1.444-.863-.77-1.447-1.72-1.617-2.013-.17-.29-.018-.447.127-.59.13-.13.29-.34.435-.51.145-.17.193-.29.29-.485.097-.195.048-.363-.024-.51-.07-.145-.657-1.58-.9-2.17-.236-.57-.477-.493-.657-.5-.17-.006-.364-.007-.56-.007-.195 0-.51.073-.777.363-.266.29-1.018.995-1.018 2.428 0 1.433 1.04 2.81 1.187 3.01.146.193 2.05 3.12 4.96 4.38.7.3 1.24.48 1.66.62.7.22 1.34.19 1.84.11.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.267-.19-.558-.335z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col items-start gap-2.5 sm:gap-4 lg:px-8">
            <h4 className="font-serif text-sm font-bold text-slate-900 uppercase tracking-wider relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#0284C7] after:mt-1">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 sm:flex sm:flex-col gap-2 sm:gap-2.5 text-left items-start w-full">
              <button
                type="button"
                onClick={() => handleLinkClick('#hero')}
                className="text-xs sm:text-sm text-slate-600 hover:text-[#0284C7] hover:translate-x-1 transition-all cursor-pointer bg-transparent border-0 py-0 text-left"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('#products')}
                className="text-xs sm:text-sm text-slate-600 hover:text-[#0284C7] hover:translate-x-1 transition-all cursor-pointer bg-transparent border-0 py-0 text-left"
              >
                Products
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('#b2b')}
                className="text-xs sm:text-sm text-slate-600 hover:text-[#0284C7] hover:translate-x-1 transition-all cursor-pointer bg-transparent border-0 py-0 text-left"
              >
                B2B Service
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('#about')}
                className="text-xs sm:text-sm text-slate-600 hover:text-[#0284C7] hover:translate-x-1 transition-all cursor-pointer bg-transparent border-0 py-0 text-left"
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('#faq')}
                className="text-xs sm:text-sm text-slate-600 hover:text-[#0284C7] hover:translate-x-1 transition-all cursor-pointer bg-transparent border-0 py-0 text-left"
              >
                FAQ
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('#contact')}
                className="text-xs sm:text-sm text-slate-600 hover:text-[#0284C7] hover:translate-x-1 transition-all cursor-pointer bg-transparent border-0 py-0 text-left"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Column 3 — Our Products */}
          <div className="flex flex-col items-start gap-2.5 sm:gap-4 lg:px-8">
            <h4 className="font-serif text-sm font-bold text-slate-900 uppercase tracking-wider relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#0284C7] after:mt-1">
              Our Products
            </h4>
            <ul className="flex flex-col gap-1.5 sm:gap-2.5 text-slate-600 text-xs sm:text-sm text-left">
              <li className="cursor-pointer hover:text-[#0284C7] transition-colors" onClick={() => handleLinkClick('#products')}>
                500ml Mineral Water Bottle
              </li>
              <li className="cursor-pointer hover:text-[#0284C7] transition-colors" onClick={() => handleLinkClick('#products')}>
                1.5 Litre Mineral Water Bottle
              </li>
              <li className="cursor-pointer hover:text-[#0284C7] transition-colors" onClick={() => handleLinkClick('#b2b')}>
                Private Label / Custom Bottles
              </li>
              <li className="cursor-pointer hover:text-[#0284C7] transition-colors" onClick={() => handleLinkClick('#b2b')}>
                B2B & Corporate Orders
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact Us */}
          <div className="flex flex-col items-start gap-2.5 sm:gap-4 lg:pl-8">
            <h4 className="font-serif text-sm font-bold text-slate-900 uppercase tracking-wider relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-[#0284C7] after:mt-1">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-3 text-slate-600 text-xs sm:text-sm text-left">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#0284C7] flex-shrink-0 mt-0.5" />
                <span><strong>Serving:</strong> Rawalpindi, Islamabad, Fateh Jang</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#0284C7] flex-shrink-0" />
                <span><strong>Phone:</strong> <a href="tel:+923051999897" className="hover:text-[#0284C7] font-medium hover:underline">+92-305-1999897</a></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#0284C7] flex-shrink-0" />
                <span><strong>Email:</strong> <a href="mailto:aabshar.org@gmail.com" className="hover:text-[#0284C7] hover:underline font-medium">aabshar.org@gmail.com</a></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#0284C7] flex-shrink-0" />
                <span><strong>Delivery Hours:</strong> 8am – 8pm Daily</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 mt-6 sm:mt-10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-slate-500 w-full">
          <p className="font-sans text-slate-500 text-center sm:text-left">
            © 2026 Aabshar Prime Water. All Rights Reserved.
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-slate-500 flex-wrap">
            <button type="button" onClick={() => handleLinkClick('#privacy')} className="hover:text-[#0284C7] transition-colors cursor-pointer bg-transparent border-0 py-0 text-[11px] sm:text-xs">Privacy Policy</button>
            <span className="text-slate-300">|</span>
            <button type="button" onClick={() => handleLinkClick('#terms')} className="hover:text-[#0284C7] transition-colors cursor-pointer bg-transparent border-0 py-0 text-[11px] sm:text-xs">Terms & Conditions</button>
          </div>
          <p className="flex items-center justify-center gap-1 font-medium text-slate-500 text-[11px] sm:text-xs">
            Made with <span className="text-[#0284C7] animate-pulse">💧</span> in Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
