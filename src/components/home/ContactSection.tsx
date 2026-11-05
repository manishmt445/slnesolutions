import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare,
  Copy,
  Check,
  Building,
  ArrowUpRight,
  Headphones
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Contact Our Hyderabad Technical Desk",
  subtitle = "Direct communication channels for industrial engineering, calibration, instrumentation, and maintenance services."
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact-section" className="py-20 lg:py-28 bg-[#F4F7FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2875B9] bg-[#2875B9]/10 px-3 py-1 rounded-md">
            <Headphones className="w-3.5 h-3.5" />
            <span>Direct Technical Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102B50] tracking-tight">
            {title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Primary 3-Card Communication Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Direct Mobile Support */}
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-slate-200/90 hover:border-[#2875B9] hover:shadow-lift transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F0F5FA] group-hover:bg-[#102B50] text-[#2875B9] group-hover:text-white flex items-center justify-center transition-colors">
                <Phone className="w-7 h-7" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2875B9]">
                  Direct Mobile Support
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-[#102B50] mt-1 tracking-tight">
                  {COMPANY_INFO.formattedPhone}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Call directly to speak with our engineering desk for immediate technical assistance, calibration scheduling, and emergency breakdown queries.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-2.5">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full inline-flex items-center justify-center px-4 py-3 text-xs font-bold text-white bg-[#102B50] hover:bg-[#173D66] rounded-xl shadow transition-colors group/btn"
              >
                <Phone className="w-3.5 h-3.5 mr-2" />
                <span>Call Now (+91 8121738995)</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={() => handleCopy(COMPANY_INFO.phone, 'phone')}
                className="w-full inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-slate-600 hover:text-[#102B50] bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
              >
                {copiedField === 'phone' ? (
                  <>
                    <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Number Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 mr-1.5" />
                    <span>Copy Phone Number</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Official Technical Email */}
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-slate-200/90 hover:border-[#2875B9] hover:shadow-lift transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F0F5FA] group-hover:bg-[#102B50] text-[#2875B9] group-hover:text-white flex items-center justify-center transition-colors">
                <Mail className="w-7 h-7" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2875B9]">
                  Official Technical Mail
                </span>
                <h3 className="font-heading font-extrabold text-xl text-[#102B50] mt-1 break-all tracking-tight">
                  {COMPANY_INFO.email}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Email your tender specifications, instrument lists, valve quantities, shutdown RFQs, or purchase orders directly to our engineering desk.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-2.5">
              <a
                href={`mailto:${COMPANY_INFO.email}?subject=Industrial%20Engineering%20Inquiry%20-%20SLN%20Solutions`}
                className="w-full inline-flex items-center justify-center px-4 py-3 text-xs font-bold text-white bg-[#2875B9] hover:bg-[#1B5388] rounded-xl shadow transition-colors group/btn"
              >
                <Mail className="w-3.5 h-3.5 mr-2" />
                <span>Send Email Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={() => handleCopy(COMPANY_INFO.email, 'email')}
                className="w-full inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-slate-600 hover:text-[#102B50] bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
              >
                {copiedField === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 mr-1.5" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: WhatsApp Instant Communication */}
          <div className="bg-white rounded-2xl p-8 shadow-soft border border-slate-200/90 hover:border-emerald-500 hover:shadow-lift transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white flex items-center justify-center transition-colors">
                <MessageSquare className="w-7 h-7" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                  Instant Messaging Desk
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-[#102B50] mt-1 tracking-tight">
                  WhatsApp Support
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Connect quickly on WhatsApp to share site photos, nameplates, valve tag numbers, or discuss urgent scope parameters with our engineers.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-2.5">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow transition-colors group/btn"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-2" />
                <span>Message on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>

              <div className="text-center text-[11px] text-slate-500 font-medium py-1">
                Direct Line: +91 8121738995
              </div>
            </div>
          </div>

        </div>

        {/* Secondary Information Banner: Operational Location & Working Hours */}
        <div className="bg-white rounded-2xl p-8 shadow-premium border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
            
            {/* Company & Location Info (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-1 rounded-xl bg-white border border-slate-200 shadow-sm shrink-0">
                  <img 
                    src="/logo.jpeg" 
                    alt="Sri Lakshmi Narasimha Engineering Solutions" 
                    className="w-12 h-12 object-contain rounded" 
                  />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-lg text-[#102B50] leading-snug">
                    {COMPANY_INFO.name}
                  </h4>
                  <p className="text-xs text-[#2875B9] font-bold uppercase tracking-wider">
                    {COMPANY_INFO.shortName} • Kukatpally, Hyderabad
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-slate-600">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#2875B9] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">Operational Base: </strong>
                    <span>{COMPANY_INFO.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">Regional Reach: </strong>
                    <span>Serving Hyderabad industrial hubs (Balanagar, Jeedimetla, Patancheru, Cherlapally, Katedan) and manufacturing facilities across India.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours (5 cols) */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#102B50] uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#2875B9]" />
                <span>Operating Schedule</span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="font-medium text-slate-500">Monday – Saturday:</span>
                  <span className="font-bold text-[#102B50]">9:00 AM – 6:30 PM IST</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="font-medium text-slate-500">Sunday:</span>
                  <span className="text-slate-500">On-Call Support</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium text-slate-500">Turnaround / Emergency:</span>
                  <span className="font-bold text-emerald-700">24/7 Available on Request</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Quick RFQ Checklist Banner */}
        <div className="mt-8 bg-gradient-to-r from-[#102B50] to-[#173D66] rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <h4 className="font-heading font-bold text-base sm:text-lg">
                Need an Official Proposal or Rate Schedule?
              </h4>
              <p className="text-xs text-slate-300 max-w-xl">
                Send your requirements directly to <strong className="text-sky-300">{COMPANY_INFO.email}</strong> or call <strong className="text-sky-300">{COMPANY_INFO.formattedPhone}</strong> with your instrument types, quantities, or plant turnaround dates.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`mailto:${COMPANY_INFO.email}?subject=Quotation%20Request%20-%20SLN%20Engineering%20Solutions`}
                className="px-5 py-2.5 text-xs font-bold text-[#102B50] bg-white hover:bg-slate-100 rounded-lg shadow transition-colors"
              >
                Email Specifications
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-5 py-2.5 text-xs font-bold text-white bg-[#2875B9] hover:bg-[#1B5388] rounded-lg shadow transition-colors"
              >
                Call Desk
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
