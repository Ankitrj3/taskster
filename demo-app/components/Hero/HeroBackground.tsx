import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{ clipPath: "circle(150% at 50% 50%)" }}
        transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zinc-100/50 to-white/30 dark:from-zinc-800/50 dark:to-zinc-900/30"
      />
      <motion.div
        initial={{ clipPath: "polygon(0 0, 0 0, 0 0)" }}
        animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-zinc-200/30 to-zinc-100/20 dark:from-zinc-700/30 dark:to-zinc-800/20"
      />
      <motion.div
        initial={{ clipPath: "polygon(100% 100%, 100% 100%, 100% 100%)" }}
        animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
        transition={{ duration: 1.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-zinc-300/20 to-zinc-200/10 dark:from-zinc-600/20 dark:to-zinc-700/10"
      />
    </div>
  );
}
