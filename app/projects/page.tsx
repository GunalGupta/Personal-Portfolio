import type { Metadata } from "next";
import Projects from "@/components/minimal-ui/Projects";

export const metadata: Metadata = {
    title: "Projects | Gunal Gupta",
    description: "View my projects which are available on GitHub build using NextJS, Handlbars, MySQL, MongoDB, and more.",
  };

export default function ProjectsPage() {
  return (
    <Projects />
  );
}
