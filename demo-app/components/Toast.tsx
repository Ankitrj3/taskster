import { FiCheck } from "react-icons/fi";
import React from "react";

interface ToastProps {
  readonly message: string;
  readonly show: boolean;
  readonly onClose: () => void;
  readonly icon?: React.ReactNode;
}

export default function Toast({ message, show, onClose, icon }: ToastProps) {
  if (!show) return null;
  return (
    <output
      className="fixed bottom-4 right-4 z-50 flex items-center min-w-[260px] max-w-xs bg-slate-900/95 border-l-4 border-emerald-500 text-slate-100 px-6 py-4 rounded-xl shadow-2xl animate-slide-in-up"
      aria-live="polite"
    >
      {icon || (
        <FiCheck className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0" />
      )}
      <span className="flex-1">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-slate-400 hover:text-slate-200 focus:outline-none"
        aria-label="Close notification"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <style>{`
        @keyframes slide-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </output>
  );
}
