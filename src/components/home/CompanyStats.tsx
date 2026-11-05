import React from 'react';
import { Cpu, Gauge, Wrench, Headphones, ShieldCheck, Check } from 'lucide-react';
import { COMPANY_STATISTICS } from '../../data/companyData';

export const CompanyStats: React.FC = () => {
  const icons = [
    <Cpu key="0" className="w-6 h-6 text-[#2875B9]" />,
    <Gauge key="1" className="w-6 h-6 text-[#2875B9]" />,
    <Wrench key="2" className="w-6 h-6 text-[#2875B9]" />,
    <Headphones key="3" className="w-6 h-6 text-[#2875B9]" />
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {COMPANY_STATISTICS.map((stat, idx) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl p-6 shadow-lift border border-slate-200/80 hover:border-[#2875B9] transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#F0F5FA] group-hover:bg-[#102B50] group-hover:text-white flex items-center justify-center transition-colors">
                  {icons[idx]}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                  0{idx + 1}
                </span>
              </div>

              <span className="inline-block text-[11px] font-semibold text-[#2875B9] uppercase tracking-wider mb-1">
                {stat.subtitle}
              </span>
              <h3 className="font-heading font-bold text-lg text-[#102B50] leading-snug group-hover:text-[#2875B9] transition-colors">
                {stat.title}
              </h3>

              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                {stat.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[11px] font-medium text-slate-500">
              <Check className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
              <span>Standard Operational Protocols</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
