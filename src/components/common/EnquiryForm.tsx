import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  FileText, 
  Download,
  Building,
  User,
  Mail,
  Phone,
  HelpCircle
} from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';
import { 
  SubmitEnquiryPayload, 
  validateEnquiry, 
  submitEnquiry, 
  ValidationErrors 
} from '../../utils/enquiryService';
import { EnquirySubmission } from '../../types';

interface EnquiryFormProps {
  initialService?: string;
  source?: string;
  onSuccess?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ 
  initialService = '', 
  source = 'general',
  onSuccess 
}) => {
  const [formData, setFormData] = useState<SubmitEnquiryPayload>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: initialService || '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    submission?: EnquirySubmission;
    message?: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error when user types
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const validationErrors = validateEnquiry(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitEnquiry(formData);
      setSubmissionResult(response);
      if (onSuccess) {
        onSuccess();
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred while submitting your enquiry. Please check your network or reach us directly by phone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      service: '',
      subject: '',
      message: '',
    });
    setErrors({});
    setSubmissionResult(null);
    setErrorMessage(null);
  };

  const downloadReceipt = () => {
    if (!submissionResult?.submission) return;
    const sub = submissionResult.submission;
    const content = `
SRI LAKSHMI NARASIMHA ENGINEERING SOLUTIONS
INDUSTRIAL ENGINEERING & CALIBRATION SERVICES
Kukatpally, Hyderabad, Telangana, India
Phone: 1234567890 | Email: slne@gmail.com
======================================================
OFFICIAL TECHNICAL ENQUIRY RECEIPT
Enquiry Reference ID: ${sub.id}
Date & Time: ${new Date(sub.submittedAt).toLocaleString()}
------------------------------------------------------
CLIENT DETAILS:
Contact Name: ${sub.fullName}
Company / Plant: ${sub.companyName}
Email: ${sub.email}
Phone: ${sub.phone}

SERVICE REQUIREMENT:
Selected Service: ${sub.service}
Subject: ${sub.subject}

DETAILED SPECIFICATIONS:
${sub.message}
======================================================
STATUS: RECEIVED & LOGGED AT HYDERABAD TECHNICAL DESK
Our engineering representative will review the technical parameters
and provide quotation / feasibility feedback within 1 business day.
    `.trim();

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${sub.id}-SLN-Enquiry-Receipt.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (submissionResult?.success && submissionResult.submission) {
    const sub = submissionResult.submission;
    return (
      <div className="bg-white rounded-2xl p-8 shadow-premium border border-emerald-100 text-center space-y-6 animate-in zoom-in-95">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        
        <div className="space-y-2">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            Enquiry Successfully Submitted
          </span>
          <h3 className="text-2xl font-extrabold text-[#102B50]">
            Thank You, {sub.fullName}!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Your technical request has been registered in our engineering log. Reference ID:
          </p>
          <div className="bg-slate-100 text-[#102B50] font-mono font-bold text-lg py-2 px-4 rounded-lg inline-block border border-slate-300">
            {sub.id}
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-700 space-y-2">
          <div className="flex justify-between border-b border-slate-200 pb-1.5">
            <span className="font-semibold text-slate-500">Selected Service:</span>
            <span className="font-bold text-[#102B50]">{sub.service}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-1.5">
            <span className="font-semibold text-slate-500">Company / Facility:</span>
            <span className="font-medium text-[#102B50]">{sub.companyName}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-1.5">
            <span className="font-semibold text-slate-500">Contact Number:</span>
            <span className="font-medium text-[#102B50]">{sub.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-slate-500">Hyderabad Desk Email:</span>
            <span className="font-medium text-[#102B50]">slne@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={downloadReceipt}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold text-[#102B50] bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-300 transition-colors"
          >
            <Download className="w-4 h-4 mr-2 text-[#2875B9]" />
            Download Quotation Receipt
          </button>
          
          <button
            onClick={handleReset}
            className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold text-white bg-[#102B50] hover:bg-[#173D66] rounded-lg transition-colors"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-premium border border-slate-200 space-y-5">
      
      {errorMessage && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg flex items-start space-x-3 text-red-800 text-xs">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <p>{errorMessage}</p>
        </div>
      )}

      {/* Row 1: Name and Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Ramesh Kumar"
              className={`w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2875B9] focus:bg-white transition-all ${
                errors.fullName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
              }`}
            />
          </div>
          {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5">
            Company / Plant Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Building className="w-4 h-4" />
            </div>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Sri Lakshmi Industries Ltd."
              className={`w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2875B9] focus:bg-white transition-all ${
                errors.companyName ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
              }`}
            />
          </div>
          {errors.companyName && <p className="text-[11px] text-red-500 mt-1">{errors.companyName}</p>}
        </div>
      </div>

      {/* Row 2: Email and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5">
            Business Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className={`w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2875B9] focus:bg-white transition-all ${
                errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
              }`}
            />
          </div>
          {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile / direct line"
              className={`w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2875B9] focus:bg-white transition-all ${
                errors.phone ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
              }`}
            />
          </div>
          {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Row 3: Select Service (All 7 categories) */}
      <div>
        <label className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5">
          Select Service Category <span className="text-red-500">*</span>
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`w-full px-3 py-2.5 text-sm bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2875B9] focus:bg-white transition-all ${
            errors.service ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
          }`}
        >
          <option value="">-- Choose from our 7 Core Engineering Services --</option>
          {SERVICES_DATA.map((srv) => (
            <option key={srv.id} value={srv.title}>
              {srv.number}. {srv.title}
            </option>
          ))}
          <option value="General Engineering & Instrumentation Consultation">
            General Engineering & Technical Support Consultation
          </option>
        </select>
        {errors.service && <p className="text-[11px] text-red-500 mt-1">{errors.service}</p>}
      </div>

      {/* Row 4: Subject */}
      <div>
        <label className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5">
          Subject / Project Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Quotation for Annual Pressure Gauge Calibration & Testing"
          className={`w-full px-3 py-2.5 text-sm bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2875B9] focus:bg-white transition-all ${
            errors.subject ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
          }`}
        />
        {errors.subject && <p className="text-[11px] text-red-500 mt-1">{errors.subject}</p>}
      </div>

      {/* Row 5: Message */}
      <div>
        <label className="block text-xs font-bold text-[#102B50] uppercase tracking-wider mb-1.5">
          Technical Specifications / Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe instrument quantities, pressure ratings, pipe diameters, shutdown schedules, or site requirements..."
          className={`w-full px-3 py-2.5 text-sm bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2875B9] focus:bg-white transition-all resize-y ${
            errors.message ? 'border-red-500 bg-red-50/50' : 'border-slate-300'
          }`}
        ></textarea>
        {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white bg-[#102B50] hover:bg-[#173D66] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-75 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              <span>Verifying & Submitting to Hyderabad Desk...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
              <span>Submit Engineering Enquiry</span>
            </>
          )}
        </button>
        <p className="text-[11px] text-slate-500 text-center mt-2.5">
          Strict technical confidentiality assured. Fast response from Hyderabad engineering desk.
        </p>
      </div>

    </form>
  );
};
