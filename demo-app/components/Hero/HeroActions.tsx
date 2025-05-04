import React from "react";
import Link from "next/link";

interface Action {
  label: string;
  href: string;
}

export default function HeroActions({ actions }: { actions: Action[] }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      {actions.map((action, idx) => (
        <Link
          key={action.label}
          href={action.href}
          className={
            idx === 0
              ? "inline-flex items-center justify-center bg-zinc-900 text-zinc-50 font-medium py-3 px-8 rounded-lg transition-all duration-200 hover:bg-zinc-800 hover:shadow-lg hover:scale-105 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-100"
              : "inline-flex items-center justify-center bg-transparent border-2 border-zinc-900 text-zinc-900 font-medium py-3 px-8 rounded-lg transition-all duration-200 hover:bg-zinc-900/10 hover:scale-105 dark:border-zinc-50 dark:text-zinc-50 dark:hover:bg-zinc-50/10"
          }
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}
