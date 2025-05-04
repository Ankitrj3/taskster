import React from "react";

export default function FooterContactInfoSkeleton() {
  return (
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
  );
}
