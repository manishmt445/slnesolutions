import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Wrench, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#F4F7FA] px-4 py-24">
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-10 rounded-2xl shadow-lift border border-slate-200 space-y-6">
        <div className="w-16 h-16 bg-[#102B50]/10 text-[#102B50] rounded-2xl flex items-center justify-center mx-auto">
          <Wrench className="w-8 h-8 text-[#2875B9]" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-[#2875B9] uppercase tracking-wider">
            Error 404
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#102B50]">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The engineering page or resource you requested could not be located. Please return to our home directory or explore our services catalog.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-[#102B50] hover:bg-[#173D66] rounded-xl transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-[#102B50] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            <span>Browse Services</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
          Need immediate assistance? Call <a href={`tel:${COMPANY_INFO.phone}`} className="text-[#2875B9] font-bold">{COMPANY_INFO.formattedPhone}</a>
        </div>
      </div>
    </div>
  );
};
