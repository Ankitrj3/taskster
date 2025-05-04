import React from "react";

export default function FooterSkeleton() {
  return (
    <footer className="bg-zinc-50/95 dark:bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand skeleton */}
          <div className="col-span-1 md:col-span-2">
            <div className="h-8 w-48 bg-zinc-200 dark:bg-zinc-800 rounded mb-4 animate-pulse" />
            <div className="h-4 w-64 bg-zinc-200 dark:bg-zinc-800 rounded mb-4 animate-pulse" />
            <div className="flex space-x-4">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full animate-pulse"
                  />
                ))}
            </div>
          </div>
          {/* Links skeleton */}
          <div>
            <div className="h-6 w-32 bg-zinc-200 dark:bg-zinc-800 rounded mb-4 animate-pulse" />
            <div className="space-y-2">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-4 w-20 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"
                  />
                ))}
            </div>
          </div>
          {/* Contact skeleton */}
          <div>
            <div className="h-6 w-32 bg-zinc-200 dark:bg-zinc-800 rounded mb-4 animate-pulse" />
            <div className="space-y-2">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-zinc-200 dark:bg-zinc-800 rounded-full animate-pulse" />
                    <div className="h-4 w-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-200/50 dark:border-zinc-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="h-4 w-48 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mb-4 md:mb-0" />
          <div className="w-5 h-5 bg-zinc-200 dark:bg-zinc-800 rounded-full animate-pulse" />
        </div>
      </div>
    </footer>
  );
}
