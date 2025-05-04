import React from "react";

export default function FooterLinksSkeleton() {
  return (
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
  );
}
