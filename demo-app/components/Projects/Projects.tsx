"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Project } from "@/types/projects";
import ProjectsSkeleton from "../skeletons/ProjectsSkeleton";
import ProjectsHeaderSkeleton from "../skeletons/ProjectsHeaderSkeleton";
import ProjectsGridSkeleton from "../skeletons/ProjectsGridSkeleton";
import ProjectsViewAllButtonSkeleton from "../skeletons/ProjectsViewAllButtonSkeleton";

const ProjectsHeader = dynamic(() => import("./ProjectsHeader"), {
  loading: () => <ProjectsHeaderSkeleton />,
});

const ProjectsGrid = dynamic(() => import("./ProjectsGrid"), {
  loading: () => <ProjectsGridSkeleton />,
});

const ProjectsViewAllButton = dynamic(() => import("./ProjectsViewAllButton"), {
  loading: () => <ProjectsViewAllButtonSkeleton />,
});

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/static/projects.json")
      .then((res) => res.json())
      .then((json) => {
        setProjects(json);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ProjectsSkeleton />;
  }

  return (
    <section
      id="projects"
      className="py-24 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden"
    >
      {/* Animated background shapes */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {/* Top right geometric shape */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/30 to-zinc-300/20 dark:from-zinc-800/30 dark:to-zinc-700/20 clip-path-polygon-top-right" />
        </motion.div>
        {/* Bottom left geometric shape */}
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200/30 to-zinc-300/20 dark:from-zinc-800/30 dark:to-zinc-700/20 clip-path-polygon-bottom-left" />
        </motion.div>
        {/* Center decorative line */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px"
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-300/50 to-transparent dark:via-zinc-700/50" />
        </motion.div>
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProjectsHeader
            title="Enterprise Solutions"
            subtitle="Transforming businesses through innovative technology solutions and strategic implementation"
          />
        </motion.div>
        <ProjectsGrid projects={projects} />
        <ProjectsViewAllButton />
      </div>
    </section>
  );
}
