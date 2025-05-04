import React from "react";

export default function HeroActionsSkeleton() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {Array(2)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="h-12 w-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"
          />
        ))}
    </div>
  );
}
