import React from "react";

export default function ContactHeaderSkeleton() {
  return (
    <div className="text-center mb-16">
      <div className="h-10 w-64 bg-zinc-200 dark:bg-zinc-800 rounded mx-auto mb-4 animate-pulse" />
      <div className="h-6 w-96 bg-zinc-200 dark:bg-zinc-800 rounded mx-auto animate-pulse" />
    </div>
  );
}
