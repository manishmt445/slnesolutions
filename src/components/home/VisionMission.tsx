import React from 'react';
import { Eye, Target, Compass, Award } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const VisionMission: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2875B9] bg-[#2875B9]/10 px-3 py-1 rounded-md">
            Guiding Principles
          </span>
          <h2 className="text-3xl font-extrabold text-[#102B50] tracking-tight">
            Our Vision &amp; Mission
          </h2>
          <p className="text-sm text-slate-600">
            The foundation of our commitment to engineering integrity and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="relative rounded-2xl p-8 bg-gradient-to-br from-[#102B50] to-[#173D66] text-white shadow-premium overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-[#2875B9]/20 rounded-full blur-2xl group-hover:bg-[#2875B9]/30 transition-colors" />
            
            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-sky-400">
                <Eye className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase font-mono tracking-widest text-sky-300 font-semibold">
                  Strategic Horizon
                </span>
                <h3 className="text-2xl font-extrabold font-heading text-white">
                  Our Vision
                </h3>
              </div>

              <blockquote className="text-base text-slate-200 leading-relaxed border-l-2 border-[#2875B9] pl-4 italic">
                "{COMPANY_INFO.vision}"
              </blockquote>

              <div className="pt-2 flex items-center space-x-2 text-xs text-sky-200 font-medium">
                <Compass className="w-4 h-4 text-[#2875B9]" />
                <span>Focus on Long-Term Industry Trust &amp; Reliability</span>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative rounded-2xl p-8 bg-white border border-slate-200 shadow-premium overflow-hidden group hover:border-[#2875B9] transition-all">
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-[#102B50]/5 rounded-full blur-2xl group-hover:bg-[#2875B9]/10 transition-colors" />

            <div className="relative z-10 space-y-4">
              <div className="w-14 h-14 rounded-xl bg-[#F0F5FA] border border-slate-200 flex items-center justify-center text-[#102B50] group-hover:bg-[#102B50] group-hover:text-white transition-colors">
                <Target className="w-7 h-7 text-[#2875B9] group-hover:text-white transition-colors" />
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase font-mono tracking-widest text-[#2875B9] font-semibold">
                  Operational Purpose
                </span>
                <h3 className="text-2xl font-extrabold font-heading text-[#102B50]">
                  Our Mission
                </h3>
              </div>

              <blockquote className="text-base text-slate-700 leading-relaxed border-l-2 border-[#102B50] pl-4 italic">
                "{COMPANY_INFO.mission}"
              </blockquote>

              <div className="pt-2 flex items-center space-x-2 text-xs text-slate-600 font-medium">
                <Award className="w-4 h-4 text-[#2875B9]" />
                <span>Dedicated to Professional Expertise &amp; Continuous Improvement</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
