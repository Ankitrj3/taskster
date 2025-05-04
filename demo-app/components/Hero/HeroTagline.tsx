import React from "react";

export default function HeroTagline({ tagline }: { tagline: string }) {
  return (
    <span className="inline-block px-4 py-2 rounded-full bg-zinc-900/10 text-zinc-900 dark:bg-zinc-50/10 dark:text-zinc-50 text-sm font-medium tracking-wide backdrop-blur-sm">
      {tagline}
    </span>
  );
}
