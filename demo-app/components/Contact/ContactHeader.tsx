import React from "react";

export default function ContactHeader({ header, subheader }: { header: string; subheader: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight">
        {header}
      </h2>
      <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
        {subheader}
      </p>
    </div>
  );
} 