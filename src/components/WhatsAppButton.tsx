import React from 'react';

const WHATSAPP_NUMBER = '923051999897';

export default function WhatsAppButton() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = `Hi Aabshar! 👋\nI'd like to place an order or get more information.\nPlease assist me.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="hidden md:flex fixed bottom-[28px] right-[28px] z-[9999] items-center justify-end font-sans">
      <div className="relative group flex items-center">
        {/* Hover tooltip */}
        <span className="absolute right-[76px] bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 shadow-xl border border-slate-800/80 whitespace-nowrap translate-x-2 group-hover:translate-x-0">
          Chat on WhatsApp
        </span>

        {/* Floating WhatsApp Action Circle */}
        <button
          id="whatsapp-floating-cta"
          onClick={handleClick}
          className="relative flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl active:scale-95 transition-all duration-300 animate-whatsapp-pulse cursor-pointer border-0"
          aria-label="Chat on WhatsApp"
        >
          {/* High quality clean WhatsApp vector logo */}
          <svg
            className="w-8 h-8 fill-current text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.031 2C6.49 2 2 6.48 2 12.01c0 1.77.46 3.48 1.34 5L2 22l5.12-1.34c1.47.8 3.12 1.23 4.9 1.23a10 10 0 0 0 10.03-9.9c0-2.66-1.04-5.16-2.93-7.05A9.94 9.94 0 0 0 12.031 2Zm0 1.63a8.3 8.3 0 0 1 5.92 2.45c1.57 1.57 2.44 3.65 2.44 5.86a8.3 8.3 0 0 1-8.36 8.24 8.24 8.24 0 0 1-4.13-1.11l-.3-.18-3.07.8.82-3-.2-.31a8.23 8.23 0 0 1-1.11-4.16 8.3 8.3 0 0 1 8.35-8.24Zm-3.4 3.25c-.2 0-.42.04-.6.2-.18.15-.71.7-.71 1.7 0 1 .73 1.97.83 2.11s1.41 2.16 3.44 3.04c2.04.88 2.04.59 2.41.56.37-.04 1.2-.5 1.37-.96.17-.47.17-.87.12-.96-.05-.09-.18-.14-.38-.24s-1.2-.6-1.39-.67c-.18-.07-.32-.1-.45.1-.13.2-.52.66-.63.79-.12.13-.24.15-.44.05a5.57 5.57 0 0 1-2.73-2.39c-.21-.36.21-.34.61-1.14.07-.13.03-.25-.01-.35s-.45-1.07-.62-1.48c-.17-.4-.34-.34-.46-.34H8.63Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
