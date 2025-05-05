"use client";

import { Navbar } from "@/app/section/Navbar";
import { Hero } from "@/app/section/Hero";
import dynamic from "next/dynamic";
import ProjectsSkeleton from "@/components/skeletons/ProjectsSkeleton";
import TeamSkeleton from "@/components/skeletons/TeamSkeleton";
import WorkProcessSkeleton from "@/components/skeletons/WorkProcessSkeleton";
import ContactSkeleton from "@/components/skeletons/ContactSkeleton";
import FooterSkeleton from "@/components/skeletons/FooterSkeleton";

const Projects = dynamic(
  () =>
    import("@/app/section/Projects").then((mod) => ({
      default: mod.Projects,
    })),
  {
    loading: () => <ProjectsSkeleton />,
  }
);

const Team = dynamic(
  () => import("@/components/Team/Team").then((mod) => ({ default: mod.Team })),
  {
    loading: () => <TeamSkeleton />,
  }
);

const WorkProcess = dynamic(
  () =>
    import("@/components/WorkProcess/WorkProcess").then((mod) => ({
      default: mod.WorkProcess,
    })),
  {
    loading: () => <WorkProcessSkeleton />,
  }
);

const Contact = dynamic(() => import("./section/Contact"), {
  loading: () => <ContactSkeleton />,
});

const Footer = dynamic(
  () =>
    import("@/app/section/Footer").then((mod) => ({
      default: mod.Footer,
    })),
  {
    loading: () => <FooterSkeleton />,
  }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Team />
        <WorkProcess />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
