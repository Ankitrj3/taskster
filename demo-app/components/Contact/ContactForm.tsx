"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  subscribe: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subscribe: true,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again.");
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

        {/* Subscribe Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            {...register("subscribe")}
            className="form-checkbox"
          />
          <label className="ml-2 text-sm text-zinc-900 dark:text-zinc-50">
            Subscribe to newsletter
          </label>
        </div>

        {/* Honeypot field */}
        <input type="hidden" name="_gotcha" style={{ display: "none" }} />

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
        </div>
      </form>
    </div>
  );
}
