import { IMAGES } from '../assets';

export interface Employee {
  id: string;
  empId: string;
  name: string;
  designation: string;
  department: string;
  joiningDate: string;
  experience: string;
  image?: string;
  imageExternal?: string;
  phone: string;
  email: string;
  address: string;
  skills: string[];
  bio: string;
}

export const EMPLOYEES_DATA: Employee[] = [
  {
    id: 'emp-1',
    empId: 'NXG-02-156',
    name: 'Karamjit Singh',
    designation: 'Senior Full-Stack Architect',
    department: 'Web & Engineering',
    joiningDate: '16-January-2023',
    experience: '5+ Years Industry Exp',
    image: IMAGES.empKaramjit,
    imageExternal: IMAGES.empKaramjitExternal,
    phone: '+91 80535 51698',
    email: 'karamjit.dev@nexgensolution.shop',
    address: 'Store No 17, 3rd Floor, Elante Business Tower, Ind. Area Phase I, Chandigarh – 160002',
    skills: ['React & Next.js', 'Enterprise Architecture', 'API Integrations', 'Cloud & Performance'],
    bio: 'Leads robust web portal builds, corporate sites, and fast e-commerce architectures.',
  },
  {
    id: 'emp-2',
    empId: 'NXG-02-164',
    name: 'Priya Malik',
    designation: 'Lead UI/UX & Product Designer',
    department: 'UI/UX & Product Design',
    joiningDate: '14-August-2023',
    experience: '4+ Years Industry Exp',
    phone: '+91 80535 51698',
    email: 'priya.design@nexgensolution.shop',
    address: 'Store No 17, 3rd Floor, Elante Business Tower, Ind. Area Phase I, Chandigarh – 160002',
    skills: ['Figma Design Systems', 'User Research', 'Wireframing', 'Conversion-Focused Layouts'],
    bio: 'Designs intuitive digital interfaces and seamless user flows that drive customer conversions.',
  },
  {
    id: 'emp-3',
    empId: 'NXG-02-171',
    name: 'Rohan Gill',
    designation: 'Head of Video & Motion Creatives',
    department: 'Multimedia & Video Production',
    joiningDate: '08-January-2024',
    experience: '4+ Years Industry Exp',
    phone: '+91 80535 51698',
    email: 'rohan.media@nexgensolution.shop',
    address: 'Store No 17, 3rd Floor, Elante Business Tower, Ind. Area Phase I, Chandigarh – 160002',
    skills: ['Commercial Video Editing', '4K Motion Graphics', 'Shorts & Reels', 'Color Grading'],
    bio: 'Creates engaging corporate promotional videos, high-retention social reels, and ad edits.',
  },
  {
    id: 'emp-4',
    empId: 'NXG-02-178',
    name: 'Neha Kapoor',
    designation: 'Senior Digital Marketing & SEO Strategist',
    department: 'Growth & Performance Marketing',
    joiningDate: '06-November-2023',
    experience: '5+ Years Industry Exp',
    phone: '+91 80535 51698',
    email: 'neha.growth@nexgensolution.shop',
    address: 'Store No 17, 3rd Floor, Elante Business Tower, Ind. Area Phase I, Chandigarh – 160002',
    skills: ['Technical SEO', 'Google & Meta Ads', 'Lead Generation', 'Content Strategy'],
    bio: 'Drives qualified search traffic, client lead funnels, and data-backed digital campaigns.',
  },
];
