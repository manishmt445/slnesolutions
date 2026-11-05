import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  badge?: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
  onOpenQuoteModal?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  badge,
  description,
  breadcrumbs,
  backgroundImage = "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80",
  onOpenQuoteModal,
}) => {
  return (
    <div className="relative bg-[#0B1C34] pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden border-b border-slate-800">
      {/* Background with Dark Navy Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-20 filter"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C34] via-[#102B50]/95 to-[#173D66]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-slate-300 mb-4" aria-label="Breadcrumb">
          <Link to="/" className="flex items-center hover:text-white transition-colors">
            <Home className="w-3.5 h-3.5 mr-1 text-[#2875B9]" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Content */}
        <div className="max-w-3xl space-y-4">
          {badge && (
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-400 bg-white/10 px-3 py-1 rounded-full border border-white/15">
              {badge}
            </span>
          )}
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>

          {description && (
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {description}
            </p>
          )}

          {onOpenQuoteModal && (
            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-[#2875B9] hover:bg-[#1B5388] rounded-lg shadow transition-colors"
              >
                Request Quotation for this Service
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
