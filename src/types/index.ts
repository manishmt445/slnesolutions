export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  heroImage: string;
  detailImage: string;
  scope: string[];
  examples: string[];
  benefits: string[];
  industries: string[];
  equipment: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface IndustryItem {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  image: string;
  description: string;
  applications: string[];
}

export interface EnquirySubmission {
  id: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  iconName: string;
}
