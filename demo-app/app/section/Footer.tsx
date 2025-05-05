"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FooterData } from "@/types/footer";
import FooterSkeleton from "@/components/skeletons/FooterSkeleton";
import FooterBrandSkeleton from "@/components/skeletons/FooterBrandSkeleton";
import FooterLinksSkeleton from "@/components/skeletons/FooterLinksSkeleton";
import FooterContactInfoSkeleton from "@/components/skeletons/FooterContactInfoSkeleton";

const FooterBrand = dynamic(
  () => import("@/components/Footer/FooterBrand"),
  {
    loading: () => <FooterBrandSkeleton />,
  }
);

const FooterLinks = dynamic(
  () => import("@/components/Footer/FooterLinks"),
  {
    loading: () => <FooterLinksSkeleton />,
  }
);

const FooterContactInfo = dynamic(
  () => import("@/components/Footer/FooterContactInfo"),
  {
    loading: () => <FooterContactInfoSkeleton />,
  }
);

const FooterBottom = dynamic(
  () => import("@/components/Footer/FooterBottom"),
  {
    loading: () => (
      <div className="border-t border-zinc-200/50 dark:border-zinc-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="h-4 w-48 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mb-4 md:mb-0" />
        <div className="w-5 h-5 bg-zinc-200 dark:bg-zinc-800 rounded-full animate-pulse" />
      </div>
    ),
  }
);

export function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<FooterData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    fetch("/static/footer.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (loading || !data) {
    return <FooterSkeleton />;
  }

  return (
    <footer className="bg-zinc-50/95 dark:bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-200/50 dark:border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <FooterBrand brand={data.brand} />
          </div>
          <div>
            <FooterLinks links={data.links} />
          </div>
          <div>
            <FooterContactInfo contact={data.contact} />
          </div>
        </div>
        <FooterBottom
          mounted={mounted}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>
    </footer>
  );
}
