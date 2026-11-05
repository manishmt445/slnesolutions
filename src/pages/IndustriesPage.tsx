import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight,
  Briefcase
} from 'lucide-react';
import { PageHeader } from '../components/common/PageHeader';
import { INDUSTRIES_DATA } from '../data/industriesData';
import { DynamicIcon } from '../components/common/DynamicIcon';

interface IndustriesPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div>
      <PageHeader
        title="Engineering Solutions Across Multiple Industries"
        badge="Market Sectors & Field Experience"
        description="Providing critical calibration, pipeline freeze isolation, valve refurbishment, and facility qualification across India's leading industrial sectors."
        breadcrumbs={[{ label: 'Industries' }]}
        backgroundImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80"
        onOpenQuoteModal={() => onOpenQuoteModal()}
      />

      <section className="py-20 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2875B9]">
              Specialized Industrial Compliance
            </span>
            <h2 className="text-3xl font-extrabold text-[#102B50]">
              Customized Engineering for Sector-Specific Demands
            </h2>
            <p className="text-sm text-slate-600">
              From high-pressure hydrocarbon containment in Oil &amp; Gas to sanitary validation in Pharmaceuticals, our technical capabilities align with your industry's standards.
            </p>
          </div>

          {/* Detailed 8-Industries Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INDUSTRIES_DATA.map((ind) => (
              <div
                key={ind.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-soft hover:shadow-lift transition-all flex flex-col justify-between group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C34]/85 via-black/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2 rounded-xl text-[#102B50] shadow">
                    <DynamicIcon name={ind.iconName} className="w-6 h-6 text-[#2875B9]" />
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-extrabold text-white font-heading">
                      {ind.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Engineering Applications:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {ind.applications.map((app, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-[#2875B9] shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onOpenQuoteModal(`${ind.name} Sector Engineering`)}
                      className="inline-flex items-center text-xs font-bold text-white bg-[#102B50] hover:bg-[#173D66] px-4 py-2 rounded-lg transition-colors"
                    >
                      <span>Inquire for {ind.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </button>
                    
                    <Link
                      to="/services"
                      className="text-xs font-bold text-[#2875B9] hover:underline flex items-center"
                    >
                      <span>Our Services</span>
                      <ChevronRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center max-w-2xl mx-auto shadow-sm">
            <p className="text-xs text-slate-500">
              * Note: Specific technical frameworks, certifications, and on-site protocols are confirmed during initial project review to ensure compliance with client safety directives.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
