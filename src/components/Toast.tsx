import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-neutral-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-neutral-700 flex items-center justify-between gap-3 animate-in slide-in-from-bottom duration-200">
      <div className="flex items-center gap-2.5 text-xs font-medium">
        <CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0" />
        <span>{message}</span>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="text-neutral-400 hover:text-white transition-colors"
        aria-label="Close notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
