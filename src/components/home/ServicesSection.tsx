import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Check, ShieldCheck, Layers } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - African Foods DXB spacious layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#2875B9] bg-[#2875B9]/10 px-3 py-1 rounded-md">
              <Layers className="w-3.5 h-3.5" />
              <span>Comprehensive Engineering Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B50] tracking-tight leading-tight">
              Our Core Engineering Services
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Explore our seven specialized industrial service categories designed to enhance measurement accuracy, eliminate operational leaks, and ensure plant longevity.
            </p>
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[#102B50] hover:bg-[#173D66] rounded-xl shadow-md transition-all group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 7 Services Grid inspired by African Foods DXB product card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((srv, idx) => {
            const isFeatured = idx === 0;
            return (
              <div
                key={srv.id}
                className={`bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-soft hover:shadow-lift transition-all duration-300 flex flex-col group ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Image Container with Badge */}
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={srv.heroImage}
                    alt={srv.title}
                    className="w-full h-full object-cover img-zoom transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C34]/80 via-transparent to-transparent" />
                  
                  {/* Service Number Badge */}
                  <div className="absolute top-4 left-4 bg-[#102B50]/90 backdrop-blur-md text-white font-mono font-extrabold text-sm px-3 py-1 rounded-md shadow-md border border-white/20">
                    {srv.number}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-sky-300 bg-[#0B1C34]/80 backdrop-blur-sm px-2.5 py-0.5 rounded">
                      Industrial Discipline
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#102B50] group-hover:text-[#2875B9] transition-colors leading-snug line-clamp-2">
                      {srv.title}
                    </h3>
                    
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                      {srv.description}
                    </p>

                    {/* Example Highlights */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Key Applications:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {srv.examples.slice(0, 3).map((ex, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center text-[11px] text-slate-700 bg-slate-100 px-2 py-0.5 rounded"
                          >
                            <Check className="w-3 h-3 text-[#2875B9] mr-1 shrink-0" />
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/services/${srv.slug}`}
                      className="inline-flex items-center text-xs font-bold text-[#102B50] hover:text-[#2875B9] group/link"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={() => onOpenQuoteModal(srv.title)}
                      className="px-3 py-1.5 text-xs font-semibold text-[#2875B9] hover:bg-[#2875B9]/10 rounded-lg transition-colors"
                    >
                      Quote Service
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note Regarding Confirmation */}
        <div className="mt-12 bg-white rounded-xl p-4 border border-slate-200 text-center max-w-2xl mx-auto shadow-sm">
          <p className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Notice:</span> All service descriptions and technical scope parameters are subject to formal site assessment and engineering verification by Sri Lakshmi Narasimha Engineering Solutions.
          </p>
        </div>

      </div>
    </section>
  );
};
