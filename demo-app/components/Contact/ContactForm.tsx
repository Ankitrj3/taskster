"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const mailtoLink = `mailto:support@taskstersolutions.com?subject=Contact Form Submission&body=Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0AMessage: ${data.message}`;
      window.location.href = mailtoLink;
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-8">
        Send us a message
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            className="w-full px-4 py-3 bg-zinc-900/5 dark:bg-zinc-50/5 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 transition-all duration-200"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-500 dark:text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="w-full px-4 py-3 bg-zinc-900/5 dark:bg-zinc-50/5 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 transition-all duration-200"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-500 dark:text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <textarea
            rows={5}
            {...register("message")}
            placeholder="Message"
            className="w-full px-4 py-3 bg-zinc-900/5 dark:bg-zinc-50/5 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-50 transition-all duration-200"
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-500 dark:text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-start">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center bg-zinc-900 text-zinc-50 font-medium py-3 px-8 rounded-lg transition-all duration-200 hover:bg-zinc-800 hover:shadow-lg hover:scale-105 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Send className="w-5 h-5 mr-2" />
                Sending...
              </>
            ) : (
              <>
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </button>
          {submitStatus === "success" && (
            <p className="ml-4 text-sm text-green-600 dark:text-green-400">
              Message sent successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="ml-4 text-sm text-red-500 dark:text-red-400">
              An error occurred. Please try again.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
