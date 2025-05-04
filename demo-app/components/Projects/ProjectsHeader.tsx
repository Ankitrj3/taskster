import React from "react";

interface ProjectsHeaderProps {
  title: string;
  subtitle: string;
}

export default function ProjectsHeader({
  title,
  subtitle,
}: ProjectsHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight">
        {title}
      </h2>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}
