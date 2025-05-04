import React from "react";

export default function ContactSkeleton() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="h-10 w-64 bg-zinc-200 dark:bg-zinc-800 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-96 bg-zinc-200 dark:bg-zinc-800 rounded mx-auto animate-pulse" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info cards skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex flex-col items-start gap-3">
                  <div className="w-8 h-8 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-2 animate-pulse" />
                  <div className="h-5 w-32 bg-zinc-200 dark:bg-zinc-800 rounded mb-2 animate-pulse" />
                  <div className="h-4 w-40 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
                </div>
              ))}
          </div>
          {/* Form skeleton */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="h-8 w-48 bg-zinc-200 dark:bg-zinc-800 rounded mb-4 animate-pulse" />
            <div className="h-12 w-full bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
            <div className="h-12 w-full bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
            <div className="h-24 w-full bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
            <div className="h-12 w-40 bg-zinc-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
