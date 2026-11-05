import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  ChevronRight, 
  Layers, 
  Search, 
  ShieldCheck, 
  Wrench,
  FileCheck2
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { SERVICES_DATA } from '../../src/data/servicesData';

interface ServicesPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteModal }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = SERVICES_DATA.filter((srv) => 
    srv.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    srv.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    srv.examples.some(ex => ex.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      {/* Banner */}
      <PageHeader
        title="Industrial Engineering & Technical Services"
        badge="ProCalMe Technical Reference Catalog"
        description="Explore our seven specialized engineering disciplines covering precision calibration, non-intrusive pipe freezing, valve refurbishment, annual maintenance, flow metering, manpower, and validation."
        breadcrumbs={[{ label: 'Services' }]}
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
        onOpenQuoteModal={() => onOpenQuoteModal()}
      />

      {/* Catalog Section */}
      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Top Bar with Search & Service Count */}
          <div className="bg-white p-6 rounded-2xl shadow-soft border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold font-heading text-[#102B50]">
                All Seven Core Engineering Services
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Certified, repeatable and engineered for industrial process facilities across Hyderabad and India.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search services or equipment..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2875B9] focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-soft hover:shadow-lift transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
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

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-sky-300 bg-[#0B1C34]/80 backdrop-blur-sm px-2.5 py-0.5 rounded">
                      Industrial Discipline
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#102B50] group-hover:text-[#2875B9] transition-colors leading-snug line-clamp-2">
                      {srv.title}
                    </h3>
                    
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                      {srv.description}
                    </p>

                    {/* Example Scope List */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Typical Capabilities:
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

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/services/${srv.slug}`}
                      className="inline-flex items-center text-xs font-bold text-[#102B50] hover:text-[#2875B9] group/link"
                    >
                      <span>Full Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={() => onOpenQuoteModal(srv.title)}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-[#102B50] hover:bg-[#173D66] rounded-lg transition-colors"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <p className="text-base font-bold text-slate-700">No services matched your search term.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-3 text-xs font-bold text-[#2875B9] hover:underline"
              >
                Clear Search Filter
              </button>
            </div>
          )}

          {/* Confirmation Notice */}
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-center max-w-2xl mx-auto">
            <p className="text-xs text-sky-900">
              <strong>Technical Notice:</strong> All calibration scopes, temperature mapping parameters, and valve testing procedures are confirmed in writing prior to on-site mobilization.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
