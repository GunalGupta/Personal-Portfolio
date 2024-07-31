import type { Metadata } from "next";
import Resume from "@/components/minimal-theme/Resume";

export const metadata: Metadata = {
  title: "Resume | Gunal Gupta",
  description: "Hi, I'm Gunal Gupta you can view and download my resume from this page.",
};

const ResumePage: React.FC = () => {
  return (
    <Resume />
  );
};

export default ResumePage;