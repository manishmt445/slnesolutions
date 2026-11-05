import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Wrench, 
  Award, 
  Building2,
  Users
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Industrial Engineering Team Imagery (4:3 Landscape, Rounded Corners, Subtle Shadow) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* 4:3 Landscape Image Container with rounded corners and subtle shadow */}
              <div className="relative rounded-2xl overflow-hidden shadow-soft border border-slate-200/90 bg-white group">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src="/about-team.jpg"
                    alt="Sri Lakshmi Narasimha Engineering Solutions team inspecting industrial instrumentation inside modern facility"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle navy-blue overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102B50]/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Golden-Yellow & Navy subtle branding pill */}
                  <div className="absolute top-4 left-4 inline-flex items-center space-x-2 bg-[#102B50]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-400/40 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-white">
                      SLNE Engineering Desk
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge with Golden & Navy branding */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-soft border border-slate-200/90 max-w-[270px]">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-11 h-11 rounded-xl bg-[#0B1C34] border border-amber-400/40 p-0.5 shadow-sm flex items-center justify-center shrink-0">
                    <img src="/logo1.jpeg" alt="SLN Golden Lion Logo" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-[#102B50] text-sm leading-tight">
                      Hyderabad, IN
                    </h4>
                    <p className="text-[11px] text-amber-600 font-semibold">Certified Technical Hub</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  Committed to precision engineering, traceable calibration &amp; plant integrity.
                </p>
              </div>

              {/* Background Accent Element */}
              <div className="absolute -top-3 -left-3 w-24 h-24 bg-[#2875B9]/10 rounded-2xl -z-10" />

            </div>
          </div>

          {/* Right Column: Company Description and Highlights */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2875B9] bg-[#2875B9]/10 px-3 py-1 rounded-md">
                <Building2 className="w-3.5 h-3.5" />
                <span>About Sri Lakshmi Narasimha Engineering Solutions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102B50] tracking-tight leading-tight">
                A Trusted Partner for Industrial Engineering Solutions
              </h2>
            </div>

            <p className="text-base text-slate-700 leading-relaxed font-normal">
              {COMPANY_INFO.aboutDescription}
            </p>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-soft">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <ShieldCheck className="w-5 h-5 text-[#2875B9]" />
                  <h4 className="font-heading font-bold text-sm text-[#102B50]">
                    Commitment to Quality
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Adherence to certified calibration benchmarks, repeatability, and traceable measurement standards.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-soft">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <Wrench className="w-5 h-5 text-[#2875B9]" />
                  <h4 className="font-heading font-bold text-sm text-[#102B50]">
                    Engineering Expertise
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deep specialized knowledge across cryogenic pipe freezing, valve refurbishment, and shutdown jobs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-soft">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <Award className="w-5 h-5 text-[#2875B9]" />
                  <h4 className="font-heading font-bold text-sm text-[#102B50]">
                    Professional Approach
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Systematic task execution, thorough documentation, and rigorous safety protocols on every site.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-soft">
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <Users className="w-5 h-5 text-[#2875B9]" />
                  <h4 className="font-heading font-bold text-sm text-[#102B50]">
                    Customer Satisfaction
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Responsive technical assistance and long-term partnerships focused on minimizing plant downtime.
                </p>
              </div>

            </div>

            {/* Learn More Button */}
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#102B50] hover:bg-[#173D66] rounded-xl shadow-md transition-all duration-200 group"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
