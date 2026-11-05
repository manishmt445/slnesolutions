import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Quick Phone Call Pill */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="hidden sm:inline-flex items-center space-x-2 bg-[#102B50] text-white text-xs font-semibold px-3 py-2 rounded-full shadow-premium hover:bg-[#173D66] border border-slate-700 transition-all duration-200 hover:scale-105"
        title="Direct Line to Hyderabad Technical Desk"
      >
        <Phone className="w-3.5 h-3.5 text-[#2875B9]" />
        <span>Direct: {COMPANY_INFO.formattedPhone}</span>
      </a>

      {/* Back To Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 bg-[#2875B9] hover:bg-[#1B5388] text-white rounded-full flex items-center justify-center shadow-lift transition-all duration-300 hover:-translate-y-1 focus:outline-none"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
