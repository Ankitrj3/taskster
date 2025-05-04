"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ContactData } from "@/types/contact";
import ContactSkeleton from "../skeletons/ContactSkeleton";
import ContactHeaderSkeleton from "../skeletons/ContactHeaderSkeleton";
import ContactInfoSkeleton from "../skeletons/ContactInfoSkeleton";
import ContactFormSkeleton from "../skeletons/ContactFormSkeleton";

const ContactHeader = dynamic(() => import("./ContactHeader"), {
  loading: () => <ContactHeaderSkeleton />,
});

const ContactInfo = dynamic(() => import("./ContactInfo"), {
  loading: () => <ContactInfoSkeleton />,
});

const ContactForm = dynamic(() => import("./ContactForm"), {
  loading: () => <ContactFormSkeleton />,
});

export default function Contact() {
  const [data, setData] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/static/contact.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading || !data) {
    return <ContactSkeleton />;
  }

  return (
    <section
      id="contact"
      className="py-24 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ContactHeader header={data.header} subheader={data.subheader} />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactInfo info={data.info} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
