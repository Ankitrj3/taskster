"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { HeroData } from "@/types/hero";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";
import HeroTaglineSkeleton from "@/components/skeletons/HeroTaglineSkeleton";
import HeroHeadlineSkeleton from "@/components/skeletons/HeroHeadlineSkeleton";
import HeroActionsSkeleton from "@/components/skeletons/HeroActionsSkeleton";

const HeroTagline = dynamic(() => import("@/components/Hero/HeroTagline"), {
  loading: () => <HeroTaglineSkeleton />,
});

const HeroHeadline = dynamic(
  () => import("@/components/Hero/HeroHeadline"),
  {
    loading: () => <HeroHeadlineSkeleton />,
  }
);

const HeroActions = dynamic(() => import("@/components/Hero/HeroActions"), {
  loading: () => <HeroActionsSkeleton />,
});

const HeroBackground = dynamic(
  () => import("@/components/Hero/HeroBackground"),
  {
    loading: () => null,
  }
);

export function Hero() {
  const [data, setData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/static/hero.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading || !data) {
    return <HeroSkeleton />;
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 relative overflow-hidden"
    >
      <HeroBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <HeroTagline tagline={data.tagline} />
          </div>
          <HeroHeadline headline={data.headline} highlight={data.highlight} />
          <p className="text-xl sm:text-2xl text-zinc-700 dark:text-zinc-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {data.subheadline}
          </p>
          <HeroActions actions={data.actions} />
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-100/90 to-transparent dark:from-zinc-900/90" />
    </section>
  );
}
