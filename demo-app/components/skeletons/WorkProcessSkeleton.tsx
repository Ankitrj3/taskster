import React from "react";

export default function WorkProcessSkeleton() {
  return (
    <section
      id="work"
      className="py-24 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 w-64 bg-zinc-200 dark:bg-zinc-800 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-96 bg-zinc-200 dark:bg-zinc-800 rounded mx-auto animate-pulse" />
        </div>

        {/* Steps skeleton */}
        <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-16 md:gap-8">
          {/* Connecting line skeleton */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-zinc-200 dark:bg-zinc-700/60" />

          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center md:w-1/4 h-full"
              >
                {/* Icon skeleton */}
                <div className="w-16 h-16 rounded-xl bg-zinc-200 dark:bg-zinc-800 animate-pulse mb-4" />

                {/* Content skeleton */}
                <div className="flex flex-col flex-1 justify-start min-h-[140px] w-full">
                  <div className="h-6 w-24 bg-zinc-200 dark:bg-zinc-800 rounded mx-auto mb-2 animate-pulse" />
                  <div className="h-20 w-full bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
