import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  ExternalLink,
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { SERVICES_DATA } from '../../data/servicesData';

interface FooterProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-[#0B1C34] text-slate-300 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-[#0B1C34] p-1 rounded-xl border border-white/20 overflow-hidden shadow-sm">
                <img 
                  src="/logo1.jpeg" 
                  alt="Sri Lakshmi Narasimha Engineering Solutions" 
                  className="w-12 h-12 object-cover rounded-lg" 
                />
              </div>
              <div>
                <span className="block font-heading font-extrabold text-white text-lg leading-tight">
                  Sri Lakshmi Narasimha
                </span>
                <span className="block text-xs uppercase font-bold tracking-widest text-[#2875B9]">
                  Engineering Solutions
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Sri Lakshmi Narasimha Engineering Solutions delivers dependable industrial engineering, calibration, instrumentation, valve repair, and maintenance solutions to support plant reliability, quality standards, and operational performance across India.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <div className="flex items-center text-xs font-semibold text-slate-300 bg-[#102B50] px-3 py-2 rounded-xl border border-slate-700 space-x-2.5">
                <img 
                  src="/logo.jpeg" 
                  alt="SLN Engineering Emblem" 
                  className="w-6 h-6 object-contain rounded bg-white p-0.5" 
                />
                <span>Certified Metrology &amp; Industrial Standards</span>
              </div>
            </div>
          </div>

          {/* Column 2: The 7 Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Our Engineering Services
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link 
                    to={`/services/${srv.slug}`} 
                    className="hover:text-white transition-colors flex items-center group text-slate-400"
                  >
                    <span className="text-[#2875B9] font-mono mr-2 group-hover:translate-x-0.5 transition-transform">{srv.number}.</span>
                    <span className="group-hover:text-sky-300 transition-colors">{srv.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#2875B9]" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#2875B9]" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#2875B9]" /> Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-slate-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#2875B9]" /> Industries
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-slate-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#2875B9]" /> Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-[#2875B9]" /> Contact Us
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => onOpenQuoteModal()} 
                  className="text-[#2875B9] font-semibold hover:underline flex items-center pt-1"
                >
                  <ArrowRight className="w-3 h-3 mr-1.5" /> Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Contact Desk
            </h3>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div>
                <span className="block text-[11px] text-slate-400 uppercase font-semibold">Location</span>
                <p className="flex items-start mt-1 text-slate-300">
                  <MapPin className="w-4 h-4 text-[#2875B9] mr-1.5 shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.address.full}</span>
                </p>
              </div>

              <div>
                <span className="block text-[11px] text-slate-400 uppercase font-semibold">Phone Support</span>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`} 
                  className="flex items-center mt-1 text-white hover:text-sky-300 transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-[#2875B9] mr-1.5 shrink-0" />
                  <span>{COMPANY_INFO.formattedPhone}</span>
                </a>
              </div>

              <div>
                <span className="block text-[11px] text-slate-400 uppercase font-semibold">Technical Inquiries</span>
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="flex items-center mt-1 text-slate-300 hover:text-sky-300 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-[#2875B9] mr-1.5 shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-3 py-2 text-xs font-semibold text-white bg-[#102B50] hover:bg-[#173D66] rounded border border-slate-700 transition-colors"
                >
                  Contact Hyderabad Team
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>{COMPANY_INFO.copyright}</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <span>Hyderabad, Telangana, India</span>
            <span>•</span>
            <span>Industrial Calibration & Instrumentation</span>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Privacy & Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
