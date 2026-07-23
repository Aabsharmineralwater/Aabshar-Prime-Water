import { ArrowLeft, Shield, Lock, FileText, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

export default function PrivacyPolicy({ onBackToHome }: PrivacyPolicyProps) {
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
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Privacy Policy
              </h1>
              <p className="font-sans text-xs text-slate-500 mt-1 uppercase tracking-wider font-bold">
                Last Updated: July 19, 2026 • Aabshar Mineral Water
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none font-sans text-sm sm:text-base leading-relaxed text-slate-600 space-y-6">
            <p>
              At <strong>Aabshar Mineral Water</strong> (referred to as "Aabshar", "we", "our", or "us"), we are deeply committed to protecting the privacy, security, and trust of our clients, customers, and website visitors. This Privacy Policy outlines how we collect, store, utilize, and protect your personal data when you interact with our website <a href="https://aabshar.org" className="text-brand-teal hover:underline font-semibold">https://aabshar.org</a> and order our mineral water services.
            </p>

            <div className="w-full h-px bg-slate-100 my-6" />

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-brand-teal" /> 1. Information We Collect
            </h2>
            <p>
              To process your water delivery orders and inquiries successfully, we may request certain personally identifiable details, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Contact Information:</strong> Your full name, phone number, and active email address.</li>
              <li><strong>Delivery Information:</strong> Physical doorstep address, street name, house/flat number, neighborhood, and city (Rawalpindi/Islamabad).</li>
              <li><strong>Order History & Preferences:</strong> Record of items bought (500ml/1.5L bottles), quantities, corporate private label details, and delivery frequency.</li>
              <li><strong>Digital Identifiers:</strong> Anonymous usage logs, IP addresses, cookie preferences, and referral data when browsing our website.</li>
            </ul>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-brand-teal" /> 2. How We Use Your Information
            </h2>
            <p>
              We process and use the gathered information specifically for core business and trust objectives:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Facilitating instant water dispatching and physical logistics to your exact doorstep.</li>
              <li>Managing safe, frictionless order placements and responding to inquiry forms.</li>
              <li>Connecting via direct telecommunications (such as calling or WhatsApp messaging) to verify schedules.</li>
              <li>Improving the browsing experience, responsive performance, and speed of our web application.</li>
              <li>Complying with municipal healthcare laws, food safety regulations, and tax requirements in Pakistan.</li>
            </ul>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-teal" /> 3. Data Protection & Security
            </h2>
            <p>
              Your data security is paramount. Aabshar implements high-tier security precautions including active SSL/TLS encryption across our complete website (HTTPS everywhere), strict firewalls, secure hosting environments, and access-restricted workflows. We will <strong>NEVER</strong> rent, sell, trade, or distribute your private client information to third-party marketing companies.
            </p>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-teal" /> 4. Cookies and Web Analytics
            </h2>
            <p>
              Our website utilizes standard browser cookies to retain certain display configurations, improve loading speeds, and conduct aggregate, non-identifying traffic analysis. You have full freedom to block or clear cookies inside your browser settings, though this might slightly affect certain interactive ordering form experiences.
            </p>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              5. Your Legal Rights
            </h2>
            <p>
              Depending on your location, you hold the legal right to request access to the personal data we store, request immediate rectification of spelling errors in your delivery address, or request the absolute deletion of your personal records from our distribution databases. To execute any of these requests, please contact us directly at <a href="mailto:aabshar.org@gmail.com" className="text-brand-teal hover:underline font-semibold">aabshar.org@gmail.com</a>.
            </p>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              6. Contact Our Support
            </h2>
            <p>
              For any questions, issues, or policy feedback regarding your privacy, please connect with us at:
            </p>
            <div className="p-5 bg-sky-50 border border-sky-100 rounded-2xl">
              <p className="font-bold text-slate-900">Aabshar Mineral Water</p>
              <p className="text-sm">📍 Head Office: Islamabad & Rawalpindi, Pakistan</p>
              <p className="text-sm">📞 Phone: <a href="tel:+923051999897" className="text-brand-teal hover:underline font-semibold">+92-305-1999897</a></p>
              <p className="text-sm">✉️ Email: <a href="mailto:aabshar.org@gmail.com" className="text-brand-teal hover:underline font-semibold">aabshar.org@gmail.com</a></p>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}
