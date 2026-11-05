import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  ShieldCheck, 
  Wrench, 
  Cpu, 
  Layers, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowLeft,
  Factory
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { COMPANY_INFO } from '../data/companyData';
import { PageHeader } from '../components/common/PageHeader';
import { EnquiryForm } from '../components/common/EnquiryForm';

interface ServiceDetailPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related services (other 3 services)
  const relatedServices = SERVICES_DATA.filter((s) => s.slug !== slug).slice(0, 3);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F4F7FA]">
      {/* 1. Large Service-Specific Banner */}
      <PageHeader
        title={service.title}
        badge={`Engineering Service Discipline ${service.number}`}
        description={service.tagline}
        breadcrumbs={[
          { label: 'Services', href: '/services' },
          { label: service.shortTitle }
        ]}
        backgroundImage={service.heroImage}
        onOpenQuoteModal={() => onOpenQuoteModal(service.title)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Content Area (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 2. Professional Introduction & Detailed Description */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-soft border border-slate-200 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2875B9] bg-[#2875B9]/10 px-3 py-1 rounded-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Service Overview &amp; Technical Scope</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B50] tracking-tight">
                {service.title}
              </h2>

              <p className="text-base text-slate-700 leading-relaxed font-medium">
                {service.description}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                {service.longDescription}
              </p>

              {/* Service Hero Photograph in-depth */}
              <div className="rounded-xl overflow-hidden shadow-soft border border-slate-100 my-6">
                <img
                  src={service.detailImage}
                  alt={`${service.title} in industrial operation`}
                  className="w-full h-80 object-cover"
                />
                <div className="p-3 bg-slate-900 text-slate-300 text-xs flex justify-between items-center">
                  <span>Precision instrumentation &amp; certified technical execution</span>
                  <span className="font-mono text-sky-400">SLN Discipline {service.number}</span>
                </div>
              </div>

              {/* Examples Covered */}
              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-bold font-heading text-[#102B50]">
                  Instrument &amp; System Types Covered:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.examples.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#2875B9]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Scope of Services */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-soft border border-slate-200 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#102B50] text-white flex items-center justify-center font-bold">
                  <Wrench className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#102B50]">
                    Detailed Scope of Work
                  </h3>
                  <p className="text-xs text-slate-500">Methodical engineering deliverables included with every engagement</p>
                </div>
              </div>

              <div className="space-y-3">
                {service.scope.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200/70">
                    <span className="w-6 h-6 rounded-full bg-[#102B50] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Equipment Used & Industrial Photographs */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-soft border border-slate-200 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#2875B9] text-white flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#102B50]">
                    Specialized Equipment &amp; Master Standards
                  </h3>
                  <p className="text-xs text-slate-500">High-precision diagnostic and calibration equipment utilized</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.equipment.map((eq, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 font-medium leading-relaxed">{eq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Key Benefits to Your Plant */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-soft border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold font-heading text-[#102B50]">
                Operational Benefits &amp; Value Delivered
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-sky-50/50 border border-sky-100 flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2875B9] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Industries Where Applicable */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-soft border border-slate-200 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2875B9]">
                <Factory className="w-4 h-4" />
                <span>Sector Applicability</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-[#102B50]">
                Applicable Industrial Sectors
              </h3>
              <p className="text-xs text-slate-600">
                This service discipline is deployed across leading facilities in:
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {service.industries.map((ind, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[#102B50] text-white text-xs font-semibold shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mr-2" />
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* 7. Frequently Asked Questions */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-soft border border-slate-200 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#102B50] flex items-center justify-center font-bold">
                  <HelpCircle className="w-5 h-5 text-[#2875B9]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#102B50]">
                    Frequently Asked Questions
                  </h3>
                  <p className="text-xs text-slate-500">Technical insights regarding {service.shortTitle}</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <span className="font-heading font-bold text-xs sm:text-sm text-[#102B50]">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#2875B9] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="p-4 bg-white border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-200">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 8. Related Services Links */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-soft border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold font-heading text-[#102B50]">
                Related Engineering Services
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/services/${rel.slug}`}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#2875B9] hover:bg-white transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#2875B9]">
                        {rel.number}
                      </span>
                      <h4 className="font-bold text-xs text-[#102B50] group-hover:text-[#2875B9] transition-colors mt-1 line-clamp-2">
                        {rel.title}
                      </h4>
                    </div>
                    <span className="inline-flex items-center text-[11px] font-bold text-[#2875B9] mt-3">
                      View Discipline <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar (4 cols): Sticky Quote Request, Contact Desk & Service Navigation */}
          <div className="lg:col-span-4 space-y-8 sticky top-28">
            
            {/* Quick Quote Request Card */}
            <div className="bg-white rounded-2xl p-6 shadow-premium border border-slate-200 space-y-5">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2875B9]">
                <FileText className="w-4 h-4" />
                <span>Instant Quotation</span>
              </div>

              <h4 className="font-heading font-extrabold text-lg text-[#102B50]">
                Request Quotation for {service.shortTitle}
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                Connect with our technical desk in Hyderabad for scope evaluation, on-site feasibility, and certified rates.
              </p>

              <button
                onClick={() => onOpenQuoteModal(service.title)}
                className="w-full inline-flex items-center justify-center px-4 py-3 text-xs font-bold text-white bg-[#102B50] hover:bg-[#173D66] rounded-xl shadow transition-colors"
              >
                <span>Request Customized Quotation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-gradient-to-br from-[#102B50] to-[#173D66] text-white rounded-2xl p-6 shadow-premium space-y-5">
              <h4 className="font-heading font-extrabold text-base">
                Engineering Desk Support
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                Have specific telemetry or shutdown schedules? Speak directly with an instrumentation engineer.
              </p>

              <div className="space-y-3 text-xs">
                <a 
                  href={`tel:${COMPANY_INFO.phone}`} 
                  className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="font-bold">{COMPANY_INFO.formattedPhone}</span>
                </a>

                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>

                <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/10 text-slate-300">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.address.full}</span>
                </div>
              </div>
            </div>

            {/* All 7 Services Menu */}
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-slate-200 space-y-3">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-100">
                All Seven Services
              </h4>
              <div className="space-y-1">
                {SERVICES_DATA.map((s) => (
                  <Link
                    key={s.id}
                    to={`/services/${s.slug}`}
                    className={`block px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                      s.slug === slug
                        ? 'bg-[#102B50] text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className="opacity-70 mr-1.5 font-mono">{s.number}.</span>
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
