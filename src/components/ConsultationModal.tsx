import React, { useState } from 'react';
import { X, Send, Phone, CheckCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveInquiry } from '../utils/inquiryStore';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessNotice?: (msg: string) => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onSuccessNotice,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Website Development',
    preferredTime: 'Morning (10 AM - 1 PM)',
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError('Please provide your name, phone number, and email.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      saveInquiry({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        service: `${formData.service} (Consultation Request - ${formData.preferredTime})`,
        projectDetails: formData.notes.trim() || 'Requested a free consultation call.',
      });

      setSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D71920', '#171717', '#ffffff'],
      });

      if (onSuccessNotice) {
        onSuccessNotice('Consultation request confirmed! Ravi Kumar will contact you.');
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-neutral-900 text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="text-[10px] font-mono tracking-widest uppercase text-red-400 font-bold mb-1">
            NEXGEN SOLUTIONS · CHANDIGARH
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Get a Free Consultation
          </h3>
          <p className="mt-1 text-xs text-neutral-300">
            Discuss your requirements directly with founder Ravi Kumar and our technical specialists.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-neutral-900">
                Consultation Booked!
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. We will reach out to you at <strong>{formData.phone}</strong> during your requested window: <em>{formData.preferredTime}</em>.
              </p>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-col gap-2">
                <a
                  href="tel:8053551698"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 bg-[#D71920] text-white text-xs font-semibold rounded-lg hover:bg-[#B5141A] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 8053551698 Now For Immediate Help</span>
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs font-medium">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Verma"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@example.com"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Primary Service of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                >
                  <option value="Website Development">Website Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Graphic Design & Branding">Graphic Design & Branding</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Photo Editing">Photo Editing</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="IT & Technical Solutions">IT & Technical Solutions</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Preferred Call Window
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                >
                  <option value="Morning (10 AM - 1 PM)">Morning (10:00 AM – 1:00 PM IST)</option>
                  <option value="Afternoon (1 PM - 4 PM)">Afternoon (1:00 PM – 4:00 PM IST)</option>
                  <option value="Evening (4 PM - 7 PM)">Evening (4:00 PM – 7:00 PM IST)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Project Brief (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Key goals or questions..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-[#D71920]/20 focus:border-[#D71920]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 bg-[#D71920] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#B5141A] transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Scheduling...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm Free Consultation Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
