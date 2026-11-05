import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Target, 
  Eye, 
  CheckCircle2, 
  Cpu, 
  Wrench, 
  ArrowRight,
  Building,
  Users,
  Compass,
  FileCheck2
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { COMPANY_INFO, CORE_VALUES, WHY_CHOOSE_US } from '../data/companyData';
import { DynamicIcon } from '../components/common/DynamicIcon';

interface AboutPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div>
      {/* Banner */}
      <PageHeader
        title="About Sri Lakshmi Narasimha Engineering Solutions"
        badge="Corporate Profile & Technical Ethos"
        description="A specialized engineering and technical solutions provider dedicated to industrial calibration, instrumentation integrity, and turnkey plant maintenance support."
        breadcrumbs={[{ label: 'About Us' }]}
        backgroundImage="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80"
        onOpenQuoteModal={() => onOpenQuoteModal()}
      />

      {/* Main Profile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2875B9] bg-[#2875B9]/10 px-3 py-1 rounded-md">
                <Building className="w-3.5 h-3.5" />
                <span>Business Introduction</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102B50] tracking-tight leading-tight">
                Dedicated to Operational Precision, Safety and Technical Integrity
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                {COMPANY_INFO.aboutDescription}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Headquartered in Kukatpally, Hyderabad, Sri Lakshmi Narasimha Engineering Solutions operates across key industrial belts, assisting process plants, manufacturing facilities, power stations, and pharmaceutical hubs with accredited calibration, temporary cryogenic isolation, valve overhaul, and shutdown management.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2875B9] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong>Comprehensive Instrumentation:</strong> Pressure, temperature, flow, electrical, force, dimensional, and analytical devices.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2875B9] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong>Non-Intrusive Isolation:</strong> Cryogenic liquid pipe freezing allowing valve replacements without draining operating loops.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2875B9] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    <strong>Quality Assurance:</strong> Methodical traceable testing, certified uncertainty calculations, and audit-ready test binders.
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="px-6 py-3 text-sm font-bold text-white bg-[#102B50] hover:bg-[#173D66] rounded-xl shadow transition-colors flex items-center"
                >
                  <span>Request Technical Proposal</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <Link
                  to="/services"
                  className="px-6 py-3 text-sm font-bold text-[#102B50] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  Explore 7 Services
                </Link>
              </div>

            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-soft border border-slate-200/90 aspect-[4/3] bg-white">
                <img
                  src="/about-team.jpg"
                  alt="Sri Lakshmi Narasimha Engineering Solutions engineers inspecting industrial instrumentation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#102B50] text-white p-6 rounded-2xl shadow-lift max-w-[300px] hidden sm:block border border-white/15">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shrink-0">
                    <img src="/logo.jpeg" alt="SLN Corporate Emblem" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Industrial Compliance</h4>
                    <p className="text-[11px] text-slate-300">Authorized Hyderabad Hub</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  Strict calibration traceability, safety protocols, and certified engineer oversight.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-[#F4F7FA] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2875B9]">
              Strategic Foundations
            </span>
            <h2 className="text-3xl font-extrabold text-[#102B50]">
              Our Vision &amp; Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#102B50] to-[#173D66] text-white rounded-2xl p-8 sm:p-10 shadow-premium relative overflow-hidden">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-sky-400" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-sky-300 font-semibold block mb-2">
                Long-Term Aspiration
              </span>
              <h3 className="text-2xl font-bold font-heading mb-4">Our Vision</h3>
              <p className="text-base text-slate-200 leading-relaxed italic border-l-2 border-[#2875B9] pl-4">
                "{COMPANY_INFO.vision}"
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-premium border border-slate-200 relative overflow-hidden">
              <div className="w-14 h-14 rounded-xl bg-[#F0F5FA] flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#2875B9]" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#2875B9] font-semibold block mb-2">
                Operational Purpose
              </span>
              <h3 className="text-2xl font-bold font-heading text-[#102B50] mb-4">Our Mission</h3>
              <p className="text-base text-slate-700 leading-relaxed italic border-l-2 border-[#102B50] pl-4">
                "{COMPANY_INFO.mission}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment & Technical Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2875B9] bg-[#2875B9]/10 px-3 py-1 rounded-md">
                <Award className="w-3.5 h-3.5" />
                <span>Standard of Excellence</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#102B50] tracking-tight">
                Our Quality Commitment
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Precision is not merely an engineering benchmark; it is the cornerstone of plant safety and product quality. Sri Lakshmi Narasimha Engineering Solutions maintains stringent calibration procedures utilizing certified reference standards that are traceable to national and international metrological institutes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-[#102B50] mb-1">Traceable Masters</h4>
                  <p className="text-xs text-slate-600">All reference calibrators undergo scheduled verification against primary metrology standards.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-[#102B50] mb-1">Detailed Reporting</h4>
                  <p className="text-xs text-slate-600">Every certificate features as-found and as-left data with documented uncertainty calculations.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-[#102B50] mb-1">Safety Protocols</h4>
                  <p className="text-xs text-slate-600">Strict adherence to LOTO, personal protective standards, and plant permit regulations.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-sm text-[#102B50] mb-1">Trained Technicians</h4>
                  <p className="text-xs text-slate-600">Personnel specialized in instrumentation, valve refurbishing, and cryogenic pipe isolation.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2875B9] bg-[#2875B9]/10 px-3 py-1 rounded-md">
                <Cpu className="w-3.5 h-3.5" />
                <span>Engineering Capabilities</span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#102B50] tracking-tight">
                Customer-Focused Approach
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We understand that unplanned shutdowns cost millions in lost output. That is why our customer engagement model is built around rapid response, technical transparency, and solutions engineered specifically to address each facility's operational reality.
              </p>

              <div className="p-6 rounded-2xl bg-[#102B50] text-white space-y-4">
                <h4 className="text-base font-bold font-heading">
                  Why Plants Choose SLN in Hyderabad:
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Single-source engineering partner for calibration, valve repair, and piping isolation.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Flexible on-site field mobilization and controlled workshop capabilities.</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Audit-ready certificates complying with ISO, GMP, and regulatory mandates.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#F4F7FA] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2875B9]">
              Ethical Standard
            </span>
            <h2 className="text-3xl font-extrabold text-[#102B50]">
              Our Core Values
            </h2>
            <p className="text-sm text-slate-600">
              The ethical compass directing all operational and client engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => (
              <div key={val.title} className="p-6 rounded-xl bg-white border border-slate-200 shadow-soft">
                <div className="w-10 h-10 rounded-lg bg-[#F0F5FA] flex items-center justify-center text-[#2875B9] mb-4">
                  <DynamicIcon name={val.iconName} className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#102B50] text-base mb-1.5">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#102B50] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Partner with Sri Lakshmi Narasimha Engineering Solutions?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Contact our technical team in Kukatpally, Hyderabad to schedule an on-site audit or discuss your calibration and maintenance schedule.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-6 py-3 text-sm font-bold text-white bg-[#2875B9] hover:bg-[#1B5388] rounded-xl transition-colors"
            >
              Get a Customized Quote
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors"
            >
              Contact Engineering Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
