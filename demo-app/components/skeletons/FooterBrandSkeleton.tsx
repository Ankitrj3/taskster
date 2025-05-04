import React from "react";

export default function FooterBrandSkeleton() {
  return (
    <div>
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
  );
}
