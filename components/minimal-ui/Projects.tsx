import React from "react";
import Image from "next/image";
import { PERSONAL_APPS, CLIENT_APPS } from "@/data/projects";
import { SocialLink } from "@/components/SocialLink";
import { GitHubIcon, LinkIcon } from "@/components/icons";

export default function Projects() {
  return (
    <React.Fragment>
      <section>
        <h1 className="mb-4 text-2xl font-bold tracking-tighter">Personal Projects</h1>
        <div
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 "
        >
          {PERSONAL_APPS.map((project, idx) => (
            <div className="flex cursor-pointer flex-col rounded-xl transition hover:bg-zinc-50 hover:dark:bg-zinc-800/50" key={project.title}>
                <Image src={project.thumbnail} alt={`Logo of ${project.title}`} className="h-50 w-full rounded-t-lg object-cover bg-no-repeat" width={0} height={0} unoptimized />
                <div className="p-4">
                    <p className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        {project.title}
                    </p>
                    <div className=" z-10 mt-2 text-sm text-gray-500 dark:text-gray-400">
                        {project.description}
                    </div>
                    <div className="z-10 mb-6 mt-6 flex flex-wrap gap-1 ">
                        {project.tags.map((techStackItem) => (
                        <p
                            className="hover:text-primary dark:hover:text-primary inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs leading-4 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
                            key={techStackItem}
                        >
                            {techStackItem}
                        </p>
                        ))}
                    </div>
                    <div className="flex items-center">
                        <SocialLink icon={GitHubIcon} href={project.repo} className="h-6 w-6 flex-none" />
                    </div>
                </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-10">
        <h1 className="mb-4 text-2xl font-bold tracking-tighter">Client Projects</h1>
        <div
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 "
        >
          {CLIENT_APPS.map((project, idx) => (
            <div className="flex cursor-pointer flex-col rounded-xl transition hover:bg-zinc-50 hover:dark:bg-zinc-800/50" key={project.title}>
                <Image src={project.thumbnail} alt={`Logo of ${project.title}`} className="h-50 w-full rounded-t-lg object-cover bg-no-repeat" width={0} height={0} unoptimized />
                <div className="p-4">
                    <p className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        {project.title}
                    </p>
                    <div className=" z-10 mt-2 text-sm text-gray-500 dark:text-gray-400">
                        {project.description}
                    </div>
                    <div className="z-10 mb-6 mt-6 flex flex-wrap gap-1 ">
                        {project.tags.map((techStackItem) => (
                        <p
                            className="hover:text-primary dark:hover:text-primary inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs leading-4 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
                            key={techStackItem}
                        >
                            {techStackItem}
                        </p>
                        ))}
                    </div>
                </div>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}
