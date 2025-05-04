import { motion } from "framer-motion";

interface TeamHeaderProps {
  title: string;
  subtitle: string;
}

export default function TeamHeader({ title, subtitle }: TeamHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
        {title}
      </h2>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}
