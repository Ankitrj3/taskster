import React from "react";

export default function ProjectsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="rounded-lg shadow bg-zinc-100 dark:bg-zinc-800 p-6 animate-pulse"
          >
            <div className="h-40 w-full bg-zinc-200 dark:bg-zinc-700 rounded mb-4" />
            <div className="h-6 w-3/4 bg-zinc-200 dark:bg-zinc-700 rounded mb-2" />
            <div className="h-4 w-1/2 bg-zinc-200 dark:bg-zinc-700 rounded mb-4" />
            <div className="flex gap-2 mb-2">
              {Array(3)
                .fill(0)
                .map((_, j) => (
                  <div
                    key={j}
                    className="h-4 w-12 bg-zinc-200 dark:bg-zinc-700 rounded-full"
                  />
                ))}
            </div>
            <div className="h-4 w-20 bg-zinc-200 dark:bg-zinc-700 rounded" />
          </div>
        ))}
    </div>
  );
}
