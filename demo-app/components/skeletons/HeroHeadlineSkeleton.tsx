import React from "react";

export default function HeroHeadlineSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-12 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mx-auto" />
      <div className="h-12 w-2/3 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mx-auto" />
    </div>
  );
}
