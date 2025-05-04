import React from "react";
import Image from "next/image";
import { Project } from "@/types/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col rounded-xl bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-zinc-100 dark:border-zinc-800">
      {/* Image section */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={224}
          className="w-full h-full object-cover object-center"
          unoptimized
        />
        {/* Category badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-full text-xs font-medium shadow-sm border border-zinc-100 dark:border-zinc-800">
          {project.category}
        </span>
      </div>
      {/* Content section */}
      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <button className="w-full py-2 px-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-300">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}
