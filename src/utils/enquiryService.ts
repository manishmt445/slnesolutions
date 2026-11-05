import { EnquirySubmission } from '../types';

const STORAGE_KEY = 'sln_engineering_enquiries';

export interface SubmitEnquiryPayload {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
}

export interface ValidationErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  service?: string;
  subject?: string;
  message?: string;
}

export const validateEnquiry = (data: SubmitEnquiryPayload): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!data.fullName.trim() || data.fullName.trim().length < 3) {
    errors.fullName = "Please enter your full name (at least 3 characters).";
  }

  if (!data.companyName.trim()) {
    errors.companyName = "Please provide your company or plant name.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim() || !emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid business email address.";
  }

  const phoneDigits = data.phone.replace(/\D/g, '');
  if (!phoneDigits || phoneDigits.length < 10) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }

  if (!data.service || data.service === "") {
    errors.service = "Please select one of our seven engineering service categories.";
  }

  if (!data.subject.trim() || data.subject.trim().length < 4) {
    errors.subject = "Please enter a descriptive subject.";
  }

  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = "Please describe your engineering or technical requirements (min 10 characters).";
  }

  return errors;
};

export const submitEnquiry = async (
  payload: SubmitEnquiryPayload
): Promise<{ success: boolean; submission: EnquirySubmission; message: string }> => {
  // Artificial realistic processing delay
  await new Promise((resolve) => setTimeout(resolve, 850));

  const errors = validateEnquiry(payload);
  if (Object.keys(errors).length > 0) {
    throw new Error("Validation failed. Please review the highlighted fields.");
  }

  const newSubmission: EnquirySubmission = {
    id: `SLN-ENQ-${Date.now().toString().slice(-6)}`,
    ...payload,
    submittedAt: new Date().toISOString(),
  };

  // Persist locally
  try {
    const existingRaw = localStorage.getItem(STORAGE_KEY);
    const existing: EnquirySubmission[] = existingRaw ? JSON.parse(existingRaw) : [];
    existing.unshift(newSubmission);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    console.error("Failed to save enquiry to local storage:", err);
  }

  return {
    success: true,
    submission: newSubmission,
    message: `Thank you, ${payload.fullName}. Your technical enquiry (${newSubmission.id}) has been successfully submitted to Sri Lakshmi Narasimha Engineering Solutions. Our engineering team in Hyderabad will contact you shortly.`,
  };
};

export const getStoredEnquiries = (): EnquirySubmission[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};
