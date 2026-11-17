export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  icon: string;
  highlight?: boolean;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'web' | 'uiux' | 'branding' | 'media';
  categoryLabel: string;
  description: string;
  deliverables: string[];
  image: string;
  sampleBadge: string;
  metrics?: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  projectDetails: string;
}
