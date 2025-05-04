import React from "react";

export default function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center flex flex-col items-center">
          {/* Tagline skeleton */}
          <div className="mb-8">
            <div className="inline-block px-16 py-4 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse h-8 w-64" />
          </div>
          {/* Headline skeleton */}
          <div className="mb-4">
            <div className="h-10 w-80 bg-zinc-200 dark:bg-zinc-800 rounded mb-2 animate-pulse mx-auto" />
            <div className="h-10 w-64 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mx-auto" />
          </div>
          {/* Subheadline skeleton */}
          <div className="mb-8">
            <div className="h-6 w-96 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mx-auto" />
          </div>
          {/* Actions skeleton */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="h-12 w-48 bg-zinc-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
            <div className="h-12 w-48 bg-zinc-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
