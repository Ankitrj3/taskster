"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WorkProcessHeader from "./WorkProcessHeader";
import WorkProcessStep from "./WorkProcessStep";
import WorkProcessSkeleton from "../skeletons/WorkProcessSkeleton";

interface Step {
  id: number;
  icon: "Lightbulb" | "Layout" | "Code" | "Rocket";
  title: string;
  description: string;
}

interface WorkProcessData {
  header: {
    title: string;
    subtitle: string;
  };
  steps: Step[];
}

export function WorkProcess() {
  const [data, setData] = useState<WorkProcessData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/static/work-process.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading || !data) {
    return <WorkProcessSkeleton />;
  }

  return (
    <section
      id="work"
      className="py-24 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden"
    >
      {/* Animated background shape */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
          rotate: 15,
          clipPath: "circle(0% at 70% 30%)",
        }}
        whileInView={{
          opacity: 0.1,
          scale: 1.2,
          rotate: 0,
          clipPath: "circle(40% at 70% 30%)",
        }}
        transition={{ duration: 1.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
        className="absolute left-[60%] top-[30%] w-[400px] h-[200px] bg-zinc-400 dark:bg-zinc-600 blur-3xl pointer-events-none z-0"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <WorkProcessHeader
          title={data.header.title}
          subtitle={data.header.subtitle}
        />

        {/* Stepper */}
        <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-16 md:gap-8">
          {/* Connecting line behind icons */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-zinc-200 dark:bg-zinc-700/60 z-0 origin-left"
            style={{ left: "12%", right: "12%" }}
          />

          {data.steps.map((step, idx) => (
            <WorkProcessStep key={step.id} index={idx} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
