import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ShieldCheck, CheckCircle2, ChevronRight, Gauge, Wrench, Settings } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface HeroProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#0B1C34] overflow-hidden pt-28 pb-20">
      {/* Background Industrial Image with Premium Dual-Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=2000&q=85"
          alt="Precision industrial instrumentation and calibration engineering"
          className="w-full h-full object-cover object-center opacity-25 filter scale-105 transform animate-pulse duration-[10000ms]"
        />
        {/* Navy Blue Gradients matching the requested palette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C34] via-[#102B50]/95 to-[#173D66]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(#2875B9_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-slate-200 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#2875B9] animate-ping" />
              <span>Hyderabad's Premier Industrial Engineering & Calibration Partner</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Engineering Excellence Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-100 to-white">
                Precision &amp; Reliability
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {COMPANY_INFO.heroDescription}
            </p>

            {/* Key Service Highlights Pills */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs text-slate-300">
              <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#102B50]/90 border border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2875B9] mr-1.5" />
                Process Calibration
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#102B50]/90 border border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2875B9] mr-1.5" />
                Pipe Freezing & Isolation
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#102B50]/90 border border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2875B9] mr-1.5" />
                Valve Repair & Hydro-Testing
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#102B50]/90 border border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2875B9] mr-1.5" />
                Shutdown AMC
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-[#2875B9] hover:bg-[#1B5388] rounded-xl shadow-lift transition-all duration-200 group text-center"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl backdrop-blur-sm transition-all duration-200 text-center"
              >
                <span>Get in Touch</span>
                <ChevronRight className="w-4 h-4 ml-1.5 text-slate-300" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center px-5 py-3.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#2875B9] mr-2" />
                <span>Call: {COMPANY_INFO.formattedPhone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Corporate Visual Card / African Foods DXB aesthetic showcase */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-md p-6 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/20 bg-[#0B1C34]">
                    <img src="/logo1.jpeg" alt="SLN logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-bold">SLN Solutions</h3>
                    <p className="text-[11px] text-slate-400">Hyderabad, Telangana</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
                  Operational
                </span>
              </div>

              {/* Service Capabilities Quick List */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex items-center space-x-2.5">
                    <Gauge className="w-4 h-4 text-sky-400" />
                    <span>Process Instrumentation</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Traceable</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex items-center space-x-2.5">
                    <Wrench className="w-4 h-4 text-sky-400" />
                    <span>Cryogenic Pipe Freezing</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Non-Intrusive</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex items-center space-x-2.5">
                    <Settings className="w-4 h-4 text-sky-400" />
                    <span>Valve Hydro &amp; Pop Testing</span>
                  </div>
                  <span className="text-[11px] text-slate-400">API/ASME</span>
                </div>
              </div>

              {/* Bottom Quote Banner */}
              <div className="bg-gradient-to-r from-[#173D66] to-[#102B50] p-4 rounded-xl border border-white/10 text-center space-y-2">
                <p className="text-xs text-slate-200 font-medium">
                  Need rapid technical deployment or on-site calibration?
                </p>
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full py-2 bg-[#2875B9] hover:bg-[#1B5388] text-white text-xs font-bold rounded-lg transition-colors"
                >
                  Request Fast Quotation
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
