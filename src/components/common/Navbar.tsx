import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  ShieldCheck,
  FileCheck2
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { SERVICES_DATA } from '../../data/servicesData';

interface NavbarProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar - African Foods DXB style corporate utility bar */}
      <div className="bg-[#0B1C34] text-slate-300 text-xs py-2 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
              title="Call SLN Engineering"
            >
              <Phone className="w-3.5 h-3.5 text-[#2875B9]" />
              <span className="font-medium tracking-wide">Call: {COMPANY_INFO.formattedPhone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
              title="Email Technical Desk"
            >
              <Mail className="w-3.5 h-3.5 text-[#2875B9]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="flex items-center space-x-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#2875B9]" />
              <span>{COMPANY_INFO.address.full}</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center text-slate-300 text-[11px] font-medium bg-[#173D66] px-2.5 py-0.5 rounded">
              <ShieldCheck className="w-3 h-3 text-sky-400 mr-1.5" />
              Traceable Standards & Precision Calibration
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lift py-3' 
            : 'bg-white/95 backdrop-blur-md shadow-soft py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative overflow-hidden rounded-xl border border-slate-200/80 shadow-sm bg-[#0B1C34] p-1 transition-transform group-hover:scale-105">
              <img 
                src="/logo1.jpeg" 
                alt="Sri Lakshmi Narasimha Engineering Solutions Logo" 
                className="w-11 h-11 object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-[#102B50] text-base sm:text-lg leading-tight tracking-tight">
                Sri Lakshmi Narasimha
              </span>
              <span className="text-xs uppercase font-bold tracking-widest text-[#2875B9]">
                Engineering Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            <Link 
              to="/" 
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive('/') && location.pathname === '/'
                  ? 'text-[#2875B9]' 
                  : 'text-[#102B50] hover:text-[#2875B9]'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-[#2875B9]' 
                  : 'text-[#102B50] hover:text-[#2875B9]'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <Link 
                to="/services" 
                className={`text-sm font-semibold flex items-center space-x-1 py-2 transition-colors duration-200 ${
                  isActive('/services') 
                    ? 'text-[#2875B9]' 
                    : 'text-[#102B50] hover:text-[#2875B9]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {/* Mega Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-white rounded-xl shadow-lift border border-slate-100 py-3 px-3 transition-all animate-in fade-in slide-in-from-top-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 border-b border-slate-100 mb-2 flex justify-between items-center">
                    <span>Seven Core Engineering Services</span>
                    <Link to="/services" className="text-[#2875B9] hover:underline normal-case font-medium">
                      All Services →
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    {SERVICES_DATA.map((srv) => (
                      <Link
                        key={srv.id}
                        to={`/services/${srv.slug}`}
                        className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-[#F4F7FA] transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-md bg-[#102B50]/5 text-[#102B50] group-hover/item:bg-[#2875B9] group-hover/item:text-white flex items-center justify-center font-bold text-xs shrink-0 transition-colors">
                          {srv.number}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-[#102B50] group-hover/item:text-[#2875B9] transition-colors truncate">
                            {srv.title}
                          </p>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {srv.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/industries" 
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive('/industries') 
                  ? 'text-[#2875B9]' 
                  : 'text-[#102B50] hover:text-[#2875B9]'
              }`}
            >
              Industries
            </Link>

            <Link 
              to="/why-choose-us" 
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive('/why-choose-us') 
                  ? 'text-[#2875B9]' 
                  : 'text-[#102B50] hover:text-[#2875B9]'
              }`}
            >
              Why Choose Us
            </Link>

            <Link 
              to="/contact" 
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-[#2875B9]' 
                  : 'text-[#102B50] hover:text-[#2875B9]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#102B50] hover:bg-[#173D66] rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#102B50] rounded-md"
            >
              Quote
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-4 pb-6 space-y-3 max-h-[85vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top-2">
            <div className="space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded-md text-base font-semibold ${
                  isActive('/') && location.pathname === '/' 
                    ? 'bg-[#102B50] text-white' 
                    : 'text-[#102B50] hover:bg-slate-50'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 rounded-md text-base font-semibold ${
                  isActive('/about') 
                    ? 'bg-[#102B50] text-white' 
                    : 'text-[#102B50] hover:bg-slate-50'
                }`}
              >
                About
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-semibold text-[#102B50] hover:bg-slate-50 text-left"
                >
                  <span>Services ({SERVICES_DATA.length})</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-lg mt-1">
                    <Link
                      to="/services"
                      className="block px-3 py-1.5 text-xs font-bold text-[#2875B9] hover:underline"
                    >
                      Overview: All 7 Services →
                    </Link>
                    {SERVICES_DATA.map((srv) => (
                      <Link
                        key={srv.id}
                        to={`/services/${srv.slug}`}
                        className="block px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-[#2875B9] hover:bg-white rounded"
                      >
                        <span className="font-bold text-[#102B50] mr-1.5">{srv.number}.</span>
                        {srv.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/industries" 
                className={`block px-3 py-2 rounded-md text-base font-semibold ${
                  isActive('/industries') 
                    ? 'bg-[#102B50] text-white' 
                    : 'text-[#102B50] hover:bg-slate-50'
                }`}
              >
                Industries
              </Link>
              <Link 
                to="/why-choose-us" 
                className={`block px-3 py-2 rounded-md text-base font-semibold ${
                  isActive('/why-choose-us') 
                    ? 'bg-[#102B50] text-white' 
                    : 'text-[#102B50] hover:bg-slate-50'
                }`}
              >
                Why Choose Us
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 rounded-md text-base font-semibold ${
                  isActive('/contact') 
                    ? 'bg-[#102B50] text-white' 
                    : 'text-[#102B50] hover:bg-slate-50'
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-[#102B50] hover:bg-[#173D66] rounded-lg shadow"
              >
                <FileCheck2 className="w-4 h-4 mr-2" />
                <span>Request a Quote</span>
              </button>

              <div className="text-xs text-slate-500 space-y-1.5 pt-2">
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-[#2875B9] mr-2" />
                  <span>{COMPANY_INFO.formattedPhone}</span>
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-[#2875B9] mr-2" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
                <div className="flex items-center text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-[#2875B9] mr-2" />
                  <span>{COMPANY_INFO.address.full}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
