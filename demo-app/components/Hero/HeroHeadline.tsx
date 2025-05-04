import React from "react";

export default function HeroHeadline({
  headline,
  highlight,
}: {
  headline: string;
  highlight: string;
}) {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 tracking-tight leading-tight">
      {headline}
      <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-50 dark:to-zinc-300">
        {highlight}
      </span>
    </h1>
  );
}
