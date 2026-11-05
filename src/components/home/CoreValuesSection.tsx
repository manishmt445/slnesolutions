import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Sparkles, HeartPulse, Users, Compass } from 'lucide-react';
import { CORE_VALUES } from '../../data/companyData';
import { DynamicIcon } from '../common/DynamicIcon';

export const CoreValuesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2875B9] bg-[#2875B9]/10 px-3 py-1 rounded-md">
            <Compass className="w-3.5 h-3.5" />
            <span>Ethical &amp; Operational Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102B50] tracking-tight">
            Our Core Values
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            The principles that anchor every calibration certificate, maintenance turnaround, and technical client collaboration we undertake.
          </p>
        </div>

        {/* 6 Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_VALUES.map((val) => (
            <div
              key={val.title}
              className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 hover:border-[#102B50] transition-all duration-300 hover:shadow-soft flex items-start space-x-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-[#102B50] group-hover:bg-[#102B50] group-hover:text-white transition-colors shrink-0">
                <DynamicIcon name={val.iconName} className="w-6 h-6 text-[#2875B9] group-hover:text-white transition-colors" />
              </div>

              <div className="space-y-1.5">
                <h3 className="font-heading font-bold text-base text-[#102B50] group-hover:text-[#2875B9] transition-colors">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
