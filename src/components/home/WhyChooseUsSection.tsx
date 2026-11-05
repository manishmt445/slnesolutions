import React from 'react';
import { Target, Cpu, Headphones, Layers, Briefcase, Smile, CheckCircle, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../../data/companyData';
import { DynamicIcon } from '../common/DynamicIcon';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2875B9] bg-[#2875B9]/10 px-3 py-1 rounded-md">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The SLN Engineering Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102B50] tracking-tight">
            Why Choose Sri Lakshmi Narasimha Engineering Solutions?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            We combine rigorous technical discipline, modern calibration equipment, and client-first execution to safeguard your plant operations against unplanned downtime.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-7 shadow-soft border border-slate-200/80 hover:border-[#2875B9] hover:shadow-lift transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#F0F5FA] group-hover:bg-[#102B50] group-hover:text-white flex items-center justify-center transition-colors">
                    <DynamicIcon name={item.iconName} className="w-6 h-6 text-[#2875B9] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#102B50] group-hover:text-[#2875B9] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-[11px] font-medium text-slate-500">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
                <span>Verified Engineering Protocol</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
