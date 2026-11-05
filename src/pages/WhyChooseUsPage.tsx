import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Target, 
  Cpu, 
  Headphones, 
  Layers, 
  Briefcase, 
  Smile, 
  Award, 
  ArrowRight,
  FileCheck2,
  Clock
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/companyData';
import { DynamicIcon } from '../components/common/DynamicIcon';

interface WhyChooseUsPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div>
      <PageHeader
        title="Why Choose SLN Engineering Solutions"
        badge="Engineered for Precision & Operational Peace of Mind"
        description="Discover how our quality benchmarks, technical depth, and client-first execution safeguard your plant against measurement drift and unplanned downtime."
        breadcrumbs={[{ label: 'Why Choose Us' }]}
        backgroundImage="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1600&q=80"
        onOpenQuoteModal={() => onOpenQuoteModal()}
      />

      {/* 6 Core Pillars In Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2875B9]">
              The Six Pillars of Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102B50]">
              Built Around Quality, Safety and Repeatability
            </h2>
            <p className="text-base text-slate-600">
              Every calibration standard, cryogenic freeze collar, and valve overhaul follows disciplined engineering protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={item.title}
                className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200/90 shadow-soft hover:shadow-lift hover:border-[#2875B9] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#102B50] group-hover:bg-[#102B50] group-hover:text-white transition-colors">
                      <DynamicIcon name={item.iconName} className="w-6 h-6 text-[#2875B9] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#102B50] group-hover:text-[#2875B9] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center text-xs font-semibold text-[#102B50]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                  <span>Verified Operational Standard</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Technical Standards & Traceability Banner */}
      <section className="py-20 bg-[#102B50] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-400 bg-white/10 px-3 py-1 rounded-full">
                Metrology &amp; Quality Rigor
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Traceable Standards &amp; Certified Documentation
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our calibration benches and portable master instruments undergo scheduled calibration against traceable national and international reference standards. We calculate measurement uncertainties in accordance with international guidelines (GUM / ISO/IEC 17025 principles).
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-200">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
                  <span>Comprehensive 'as-found' and 'as-left' calibration reports.</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Award className="w-5 h-5 text-sky-400 shrink-0" />
                  <span>Hydrostatic valve testing adhering to API 598 &amp; ASME B16.34 criteria.</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <Clock className="w-5 h-5 text-sky-400 shrink-0" />
                  <span>On-time mobilization for scheduled maintenance shutdowns.</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/15 space-y-6">
              <h3 className="text-xl font-bold font-heading text-white">
                Client Assurance Checklist
              </h3>
              <ul className="space-y-4 text-xs text-slate-300">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Strict Safety Protocol Compliance:</strong>
                    All personnel follow plant Lockout/Tagout (LOTO), hot work protocols, and safety PPE standards.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Non-Destructive Freezing:</strong>
                    Engineered cryogenic freezing avoids pipe degradation and eliminates fluid dumping.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Rapid Response in Hyderabad &amp; Telangana:</strong>
                    Strategic Kukatpally location ensures quick technician and equipment dispatch.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Audit-Ready Technical Records:</strong>
                    Traceable certificates prepared for submission to third-party safety and quality inspectors.
                  </div>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full py-3 bg-[#2875B9] hover:bg-[#1B5388] text-white text-xs font-bold rounded-xl transition-colors text-center shadow"
                >
                  Request Technical Discussion / Quote
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#F4F7FA] text-center border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold text-[#102B50]">
            Experience Sri Lakshmi Narasimha Engineering Reliability
          </h3>
          <p className="text-xs text-slate-600">
            Reach our engineering headquarters in Kukatpally, Hyderabad to schedule an instrumentation assessment.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-xs font-bold text-white bg-[#102B50] hover:bg-[#173D66] rounded-xl shadow transition-colors"
            >
              <span>Connect with Our Engineers</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
