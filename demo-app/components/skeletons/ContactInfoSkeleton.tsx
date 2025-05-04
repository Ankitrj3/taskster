import React from "react";

export default function ContactInfoSkeleton() {
  return (
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
  );
}
