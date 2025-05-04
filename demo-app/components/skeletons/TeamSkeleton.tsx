import React from "react";

export default function TeamSkeleton() {
  return (
    <section
      id="team"
      className="py-24 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <div className="h-12 w-64 bg-zinc-200 dark:bg-zinc-800 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-6 w-96 bg-zinc-200 dark:bg-zinc-800 rounded mx-auto animate-pulse" />
        </div>

        {/* Team members skeleton */}
        <div className="relative flex flex-col gap-10 items-center w-full max-w-3xl mx-auto">
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="flex items-center w-full gap-10 py-6 bg-transparent border-b border-zinc-200 dark:border-zinc-800 last:border-b-0"
              >
                {/* Avatar skeleton */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
                </div>

                {/* Name & Role skeleton */}
                <div className="flex-1 min-w-0">
                  <div className="h-8 w-48 bg-zinc-200 dark:bg-zinc-800 rounded mb-2 animate-pulse" />
                  <div className="h-6 w-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
                </div>

                {/* Social icons skeleton */}
                <div className="flex gap-4 ml-2">
                  {Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse"
                      />
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
