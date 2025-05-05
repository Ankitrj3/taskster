import React from "react";
import Image from "next/image";
import { Project } from "@/types/projects";
import { ExternalLink } from "lucide-react";

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
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {project.company}
          </p>
        </div>
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
        <div className="mt-4 flex gap-3">
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-lg font-medium text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Visit Website
          </a>
          {project.linkedin && (
            <a
              href={project.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 rounded-lg font-medium text-sm hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
