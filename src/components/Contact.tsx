import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Loader2,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveInquiry } from '../utils/inquiryStore';

interface ContactProps {
  selectedServicePreset?: string;
  onCopyNotice?: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ selectedServicePreset, onCopyNotice }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedServicePreset || 'Website Development',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string>('');
  const [phoneCopied, setPhoneCopied] = useState(false);

  // Update service if preset changes from service card click
  React.useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({ ...prev, service: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = 'Please provide a valid contact number.';
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select the required service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    try {
      const saved = saveInquiry({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        service: formData.service,
        projectDetails: formData.projectDetails.trim(),
      });

      setSubmissionId(saved.id);
      setSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#D71920', '#171717', '#ffffff', '#B5141A'],
      });
    } catch {
      setSubmissionId(`NEX-${Date.now().toString().slice(-4)}`);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('8053551698').then(() => {
      setPhoneCopied(true);
      if (onCopyNotice) onCopyNotice('Phone number 8053551698 copied to clipboard!');
      setTimeout(() => setPhoneCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D71920] mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Start Your Project Consultation
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            Reach out to discuss your website, UI/UX, branding, or media requirements directly with our team at Elante Business Tower, Chandigarh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Official Business Details & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <h3 className="text-xl font-bold text-neutral-900 mb-1">
                  NEXGEN SOLUTIONS
                </h3>
                <div className="text-xs font-semibold text-[#D71920] mb-6">
                  Founded & Owned by RAVI KUMAR
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-neutral-700">
                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-[#D71920] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] font-medium text-neutral-500">Business Telephone</div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <a 
                          href="tel:8053551698" 
                          className="font-bold text-neutral-900 hover:text-[#D71920] transition-colors"
                        >
                          +91 80535 51698
                        </a>
                        <button
                          type="button"
                          onClick={copyPhoneNumber}
                          className="p-1 text-neutral-400 hover:text-neutral-700"
                          title="Copy phone"
                        >
                          {phoneCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-[#D71920] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] font-medium text-neutral-500">Official Inquiries</div>
                      <a 
                        href="mailto:work@nexgensolution.shop" 
                        className="font-bold text-neutral-900 hover:text-[#D71920] transition-colors block mt-0.5 break-all"
                      >
                        work@nexgensolution.shop
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-[#D71920] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] font-medium text-neutral-500">Corporate Address</div>
                      <p className="font-semibold text-neutral-900 mt-0.5 leading-snug">
                        Store No 17, 3rd Floor, Elante Business Tower, Industrial Area Phase I, Chandigarh – 160002, India
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-[#D71920] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] font-medium text-neutral-500">Working Hours</div>
                      <p className="font-medium text-neutral-800 mt-0.5">
                        Monday – Saturday: 9:30 AM – 6:30 PM IST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed for Elante Business Tower, Chandigarh */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-200 shadow-xs h-[240px] bg-neutral-100">
              <iframe
                title="Nexgen Solutions Location at Elante Business Tower Chandigarh"
                src="https://maps.google.com/maps?q=Elante%20Business%20Tower%2C%20Industrial%20Area%20Phase%20I%2C%20Chandigarh%2C%20160002&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200 shadow-md">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    Inquiry Successfully Received!
                  </h3>
                  <div className="mt-2 text-xs font-mono font-medium text-[#D71920] bg-red-50 inline-block px-3 py-1 rounded-md">
                    Reference Ticket: {submissionId}
                  </div>
                  <p className="mt-4 text-neutral-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Ravi Kumar and our technical consulting team will review your requirements for <strong>{formData.service}</strong> and connect with you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> within 24 business hours.
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <a
                      href="tel:8053551698"
                      className="px-5 py-2.5 bg-[#D71920] text-white text-xs font-semibold rounded-lg hover:bg-[#B5141A] transition-colors"
                    >
                      Call Ravi Kumar Directly
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          service: 'Website Development',
                          projectDetails: '',
                        });
                      }}
                      className="px-4 py-2.5 bg-neutral-100 text-neutral-800 text-xs font-semibold rounded-lg hover:bg-neutral-200 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-neutral-100 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-neutral-900">
                      Send a Project Inquiry
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Fill out your requirements below for a prompt, structured quote.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-[#D71920]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Singhania"
                      className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-neutral-50/50 focus:bg-white transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920] ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-neutral-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-[#D71920]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-neutral-50/50 focus:bg-white transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920] ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-neutral-300'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-[#D71920]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. vikram@company.com"
                        className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-neutral-50/50 focus:bg-white transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920] ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-neutral-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Service Required <span className="text-[#D71920]">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-lg border border-neutral-300 bg-neutral-50/50 focus:bg-white transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                    >
                      <option value="Website Development">Website Development (Corporate, E-Commerce, Custom)</option>
                      <option value="UI/UX Design">UI/UX Design (Prototypes, App & Web Interfaces)</option>
                      <option value="Graphic Design & Branding">Graphic Design & Branding (Logos, Stationery, Print)</option>
                      <option value="Video Editing">Video Editing (Promos, Reels, Corporate, Motion)</option>
                      <option value="Photo Editing">Photo Editing (Retouching, Product, Color Grading)</option>
                      <option value="Digital Marketing">Digital Marketing (SEO, Campaigns, Social Media)</option>
                      <option value="IT & Technical Solutions">IT & Technical Solutions (Consulting, Integrations)</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Project Details / Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Briefly describe your objectives, target audience, timeline, or reference links..."
                      className="w-full px-4 py-2.5 text-sm rounded-lg border border-neutral-300 bg-neutral-50/50 focus:bg-white transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D71920] text-white text-sm font-semibold rounded-xl shadow-md shadow-red-600/20 hover:bg-[#B5141A] transition-all duration-200 disabled:opacity-60 active:scale-98"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Project Inquiry</span>
                        </>
                      )}
                    </button>
                    <p className="mt-2 text-center text-[11px] text-neutral-400">
                      Direct transmission to Ravi Kumar · We respect privacy and never spam.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
