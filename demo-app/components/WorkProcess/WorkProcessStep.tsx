import { motion } from "framer-motion";
import { Lightbulb, Layout, Code, Rocket } from "lucide-react";

const iconMap = {
  Lightbulb,
  Layout,
  Code,
  Rocket,
};

interface WorkProcessStepProps {
  id: number;
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  index: number;
}

export default function WorkProcessStep({
  icon,
  title,
  description,
  index,
}: WorkProcessStepProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
      viewport={{ once: true }}
      className="relative z-10 flex flex-col items-center md:w-1/4 h-full"
    >
      {/* Step icon with background */}
      <motion.div
        whileHover={{
          scale: 1.08,
          boxShadow: "0 8px 32px 0 rgba(39,39,42,0.12)",
        }}
        className="flex items-center justify-center w-16 h-16 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-md group-hover:shadow-xl transition-all duration-300 mb-4 border border-zinc-200 dark:border-zinc-700"
      >
        <Icon className="w-8 h-8" />
      </motion.div>
      {/* Step content with fixed min height for alignment */}
      <div className="flex flex-col flex-1 justify-start min-h-[140px] w-full">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2 text-center tracking-tight border-b-2 border-transparent group-hover:border-zinc-200 dark:group-hover:border-zinc-400 pb-1">
          {title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-center text-base max-w-xs mx-auto">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
