import React from "react";

export default function ContactFormSkeleton() {
  return (
    <div className="flex flex-col justify-center space-y-6">
      <div className="h-8 w-48 bg-zinc-200 dark:bg-zinc-800 rounded mb-4 animate-pulse" />
      <div className="h-12 w-full bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
      <div className="h-12 w-full bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
      <div className="h-24 w-full bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
      <div className="h-12 w-40 bg-zinc-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
    </div>
  );
}
