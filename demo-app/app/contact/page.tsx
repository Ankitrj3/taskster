"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Toast from "@/components/Toast";
import dynamic from "next/dynamic";
import ContactFormSkeleton from "@/components/contact/ContactFormSkeleton";

const ContactForm = dynamic(
  () => import("@/components/contact/ContactForm"),
  {
    loading: () => <ContactFormSkeleton />,
    ssr: false,
  }
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShowSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#232e3a] p-4 md:p-6 text-slate-100">
      {/* Success Toast */}
      <Toast
        message="Message sent successfully!"
        show={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Contact Information (no card) */}
        <div className="lg:pr-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Contact Information
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            We&apos;d love to hear from you! Reach out via the form or through
            any of the channels below.
          </p>
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-[#1a232e] p-3 rounded-full">
                <FiMail className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <p className="text-slate-400">contact@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-[#1a232e] p-3 rounded-full">
                <FiPhone className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-medium">Phone</h3>
                <p className="text-slate-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-[#1a232e] p-3 rounded-full">
                <FiMapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-medium">Location</h3>
                <p className="text-slate-400">
                  123 Innovation Street, Tech City, TC 12345
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-700/50 flex justify-between text-slate-400 text-sm">
            <span>Available 24/7</span>
            <span>Quick Response</span>
          </div>
        </div>
        {/* Contact Form Card */}
        <div className="w-full max-w-lg rounded-3xl shadow-xl overflow-hidden bg-[#202733] border border-slate-800 relative">
          {/* Green accent strip */}
          <div className="h-2 w-full bg-emerald-500" />
          <div className="p-10 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-white mb-2 w-full text-left">
              Send us a Message
            </h1>
            <p className="text-slate-400 mb-8 w-full text-left">
              Fill out the form and our team will get back to you soon.
            </p>
            <ContactForm
              formData={formData}
              isSubmitting={isSubmitting}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
