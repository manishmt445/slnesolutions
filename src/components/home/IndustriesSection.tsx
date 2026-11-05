import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle2, Factory } from 'lucide-react';
import { INDUSTRIES_DATA } from '../../data/industriesData';
import { DynamicIcon } from '../common/DynamicIcon';

export const IndustriesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2875B9] bg-[#2875B9]/10 px-3 py-1 rounded-md">
            <Factory className="w-3.5 h-3.5" />
            <span>Market Sectors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102B50] tracking-tight">
            Engineering Solutions Across Multiple Industries
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Delivering precision calibration, turnaround maintenance, valve repair, and cryogenic isolation engineered to satisfy the distinct compliance mandates of core industry sectors.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              className="group relative bg-[#F4F7FA] rounded-2xl overflow-hidden border border-slate-200 hover:border-[#2875B9] shadow-soft hover:shadow-lift transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image banner */}
              <div className="relative h-44 overflow-hidden bg-slate-800">
                <img
                  src={ind.image}
                  alt={`${ind.name} industrial engineering solutions`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C34]/80 via-black/20 to-transparent" />
                
                {/* Floating Icon Box */}
                <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-[#102B50] group-hover:bg-[#2875B9] group-hover:text-white transition-colors">
                  <DynamicIcon name={ind.iconName} className="w-5 h-5" />
                </div>
              </div>

              {/* Text Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#102B50] group-hover:text-[#2875B9] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-3">
                    {ind.description}
                  </p>
                </div>

                {/* Application bullet */}
                <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-500 space-y-1">
                  <div className="flex items-center text-slate-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2875B9] mr-1.5 shrink-0" />
                    <span className="truncate">{ind.applications[0]}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/industries"
                    className="inline-flex items-center text-xs font-bold text-[#102B50] group-hover:text-[#2875B9] transition-colors"
                  >
                    <span>Explore Solutions</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Disclaimer / Notice */}
        <div className="mt-12 text-center text-xs text-slate-500">
          <p>
            * Specific industrial applications and engagement frameworks are customized following formal client audit and technical scope confirmation.
          </p>
        </div>

      </div>
    </section>
  );
};
