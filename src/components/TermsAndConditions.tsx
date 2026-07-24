import { ArrowLeft, FileText, Scale, ShoppingBag, Truck } from 'lucide-react';

interface TermsAndConditionsProps {
  onBackToHome: () => void;
}

export default function TermsAndConditions({ onBackToHome }: TermsAndConditionsProps) {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden text-slate-100 min-h-[80vh]">
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-[rgba(5,15,35,0.75)] z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand-teal/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Back Button */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sky-200 hover:text-white hover:bg-white/10 hover:border-brand-teal/30 transition-all duration-300 cursor-pointer mb-8 font-sans text-sm font-semibold shadow-inner-light"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Article Container */}
        <article className="frosted-glass-card rounded-3xl p-8 sm:p-12 border border-white/10 shadow-3d text-slate-800 relative overflow-hidden">
          {/* Subtle top decoration */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-linear-to-r from-brand-teal to-brand-aqua" />
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-brand-teal">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Terms and Conditions
              </h1>
              <p className="font-sans text-xs text-slate-500 mt-1 uppercase tracking-wider font-bold">
                Last Updated: July 19, 2026 • Aabshar Prime Water
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none font-sans text-sm sm:text-base leading-relaxed text-slate-600 space-y-6">
            <p>
              Welcome to the website of <strong>Aabshar Prime Water</strong> ("Company", "we", "our", "us"). By accessing our website <a href="https://aabshar.org" className="text-brand-teal hover:underline font-semibold">https://aabshar.org</a> and placing orders for our premium bottled mineral water products, you explicitly agree to comply with and be bound by the following Terms and Conditions. Please review them thoroughly before initiating transactions.
            </p>

            <div className="w-full h-px bg-slate-100 my-6" />

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-brand-teal" /> 1. Terms of Service & Use
            </h2>
            <p>
              By accessing this website, you certify that you are at least 18 years of age or are accessing this page under active parental or guardian supervision. You agree to use the platform exclusively for lawful commercial and personal purposes, strictly avoiding any activities that could disable, overburden, or compromise our web hosting servers.
            </p>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-brand-teal" /> 2. Ordering and Lead Times
            </h2>
            <p>
              All online orders and digital inquiries submitted via our interactive ordering forms represent a formal purchase proposal. To maintain our high quality and logistic standard:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Our dispatch specialists will contact you directly via call or WhatsApp text to verify order specifications and confirm details.</li>
              <li>We reserve the right to cancel or postpone orders due to logistical gridlocks, supply limits, or critical weather disturbances.</li>
              <li>For customized private-label B2B branding orders, production lead times will be calculated and finalized separately in a formalized written contract.</li>
            </ul>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Truck className="w-5 h-5 text-brand-teal" /> 3. Doorstep Delivery & Areas
            </h2>
            <p>
              We pride ourselves on direct, chilled doorstep deliveries. Our core service areas are strictly bounded:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Active Service Sectors:</strong> Islamabad, Rawalpindi, and surrounding suburban areas like Fateh Jang.</li>
              <li><strong>Access Requirements:</strong> The client must ensure clean, secure physical access for our logistics fleet to drop off water crates at the designated residential or corporate gate/doorstep.</li>
              <li><strong>Bottles & Containers:</strong> Standard plastic bottles (500ml & 1.5L) are sold as non-returnable single-use food-grade plastic, which is highly recyclable.</li>
            </ul>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              4. Product Quality, Returns, and Refunds
            </h2>
            <p>
              Our mineral water sits perfectly at <strong>120–160 TDS (specifically 135 TDS)</strong>, meeting all World Health Organization guidelines. Due to the high-hygiene food-safety nature of drinking water:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>We cannot accept product returns or exchanges once the safety seal of any bottle has been opened, broken, or tampered with.</li>
              <li>If you receive a package that suffered puncture damage during transit, contact our dispatch hotline within 12 hours of delivery for immediate complimentary replacement.</li>
            </ul>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              5. Intellectual Property Rights
            </h2>
            <p>
              All materials, design styles, branding layout, logos, visual graphics, custom bottle high-fidelity compositions, and textual documentation featured on this website are the absolute intellectual property of Aabshar Prime Water. Unauthorized republication or reproduction of these assets is strictly forbidden.
            </p>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              6. Limitation of Liability
            </h2>
            <p>
              In no circumstances shall Aabshar, its managers, directors, or logistic staff be held liable for any secondary, indirect, or consequential damages resulting from the use or inability to use this website, or from delivery schedules impacted by factors outside of our direct operational control.
            </p>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              7. Governing Law
            </h2>
            <p>
              These terms are regulated by and construed in strict accordance with the federal and provincial laws of the Islamic Republic of Pakistan. Any legal disputes arising from these conditions shall be addressed under the exclusive jurisdiction of the civil courts in Islamabad.
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}
