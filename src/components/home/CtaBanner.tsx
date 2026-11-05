import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface CtaBannerProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative py-16 sm:py-20 bg-[#102B50] overflow-hidden">
      {/* Decorative Gradients & Mesh */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C34] via-[#102B50] to-[#173D66] opacity-95" />
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#2875B9]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="max-w-2xl space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-400 bg-white/10 px-3 py-1 rounded-full">
              Industrial Consultation &amp; Support
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {COMPANY_INFO.ctaHeading}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {COMPANY_INFO.ctaDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenQuoteModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-[#2875B9] hover:bg-[#1B5388] rounded-xl shadow-lift transition-all group"
            >
              <FileText className="w-4 h-4 mr-2" />
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all"
            >
              <span>Contact Us</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
