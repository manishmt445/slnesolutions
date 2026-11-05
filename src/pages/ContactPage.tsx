import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { ContactSection } from '../components/home/ContactSection';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div>
      <PageHeader
        title="Contact Sri Lakshmi Narasimha Engineering Solutions"
        badge="Hyderabad Engineering Desk & Regional Operations"
        description="Connect with our technical team in Kukatpally, Hyderabad for calibration inquiries, valve servicing, shutdown manpower, and cryogenic pipe isolation."
        breadcrumbs={[{ label: 'Contact Us' }]}
        backgroundImage="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
        onOpenQuoteModal={() => onOpenQuoteModal()}
      />

      {/* Main Contact Section */}
      <ContactSection 
        title="Direct Engineering Communication & Project RFQ"
        subtitle="Our technical personnel review all specifications to provide structured proposals and mobilization schedules."
      />

      {/* Frequently Asked Questions Regarding RFQs and Mobilization */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2875B9]">
              Support FAQs
            </span>
            <h3 className="text-2xl font-extrabold text-[#102B50]">
              Working With SLN Engineering Solutions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-sm text-[#102B50]">How soon can we receive a quotation?</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standard calibration and equipment hire quotes are generally issued within 24 hours of receiving complete equipment counts and technical parameters.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-sm text-[#102B50]">Can you deploy on-site calibration rigs?</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Yes. Our mobile calibration vans and portable master calibrators are deployed directly to plants across Hyderabad and nearby Telangana / Andhra Pradesh regions.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="font-bold text-sm text-[#102B50]">What happens in case of emergency pipe isolation?</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                For emergency cryogenic pipe freezing or critical valve leaks, please call our direct telephone line at <strong>{COMPANY_INFO.formattedPhone}</strong> for priority response.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
