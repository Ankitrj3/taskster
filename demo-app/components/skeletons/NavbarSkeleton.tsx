import React from "react";

export default function NavbarSkeleton() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-800 shadow-sm h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-zinc-200 dark:bg-zinc-800 rounded-full animate-pulse" />
          <div className="h-6 w-24 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
        </div>
        <div className="hidden md:flex gap-4">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-4 w-16 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"
              />
            ))}
        </div>
        <div className="w-8 h-8 bg-zinc-200 dark:bg-zinc-800 rounded-full animate-pulse" />
      </div>
    </nav>
  );
}
