import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  Mail, 
  MessageSquare, 
  Copy, 
  Check, 
  Headphones, 
  ArrowUpRight,
  ShieldCheck,
  Building
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  onClose, 
  defaultService = '' 
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const subjectText = defaultService 
    ? `Quotation Request: ${defaultService} - SLN Engineering Solutions`
    : `Industrial Engineering Inquiry - SLN Engineering Solutions`;

  const whatsappMessage = defaultService
    ? encodeURIComponent(`Hello SLN Engineering Solutions, I would like to inquire about your services for: ${defaultService}.`)
    : encodeURIComponent(`Hello SLN Engineering Solutions, I would like to inquire about your industrial engineering & calibration services.`);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div 
        className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#102B50] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-[#2875B9] flex items-center justify-center">
              <Headphones className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base sm:text-lg">
                Direct Engineering Communication Desk
              </h3>
              <p className="text-xs text-slate-300">
                Sri Lakshmi Narasimha Engineering Solutions
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {defaultService ? (
            <div className="bg-sky-50 border border-sky-100 rounded-xl p-3 text-xs text-sky-900">
              <span className="font-bold text-[#102B50]">Inquiring Regarding: </span>
              <span className="font-semibold text-[#2875B9]">{defaultService}</span>
            </div>
          ) : (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700">
              Connect directly with our engineering personnel via Phone, Email, or WhatsApp for technical feasibility, rate schedules, or emergency plant requirements.
            </div>
          )}

          {/* 3 Action Buttons */}
          <div className="space-y-3.5">
            
            {/* Phone Option */}
            <div className="p-4 rounded-xl border border-slate-200 hover:border-[#102B50] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-[#F0F5FA] text-[#2875B9] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Mobile Direct Line
                  </span>
                  <span className="text-sm font-extrabold text-[#102B50]">
                    {COMPANY_INFO.formattedPhone}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleCopy(COMPANY_INFO.phone, 'phone')}
                  className="px-3 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center px-4 py-2 text-xs font-bold text-white bg-[#102B50] hover:bg-[#173D66] rounded-lg transition-colors"
                >
                  <span>Call Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Email Option */}
            <div className="p-4 rounded-xl border border-slate-200 hover:border-[#2875B9] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-[#F0F5FA] text-[#2875B9] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Technical Email
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#102B50] break-all">
                    {COMPANY_INFO.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleCopy(COMPANY_INFO.email, 'email')}
                  className="px-3 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subjectText)}`}
                  className="inline-flex items-center px-4 py-2 text-xs font-bold text-white bg-[#2875B9] hover:bg-[#1B5388] rounded-lg transition-colors"
                >
                  <span>Send Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* WhatsApp Option */}
            <div className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                    WhatsApp Chat
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#102B50]">
                    Direct Engineer Chat
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href={`https://wa.me/918121738995?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

          </div>

          {/* Location & Schedule Note */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Location: Kukatpally, Hyderabad</span>
            <span>Mon–Sat: 9:00 AM – 6:30 PM IST</span>
          </div>

        </div>
      </div>
    </div>
  );
};
