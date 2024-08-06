import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import {MinimalHeader} from "./Header";
import {MinimalFooter} from "./Footer";
import './globals.css';

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const MinimalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <body
        className={cn(
          "mx-auto min-h-screen max-w-3xl antialiased dark:bg-zinc-950 dark:text-gray-100 dark",
          space_grotesk.className,
        )}
      >
          <main className="mx-4 px-2 md:px-0 lg:mx-auto flex flex-col justify-between min-h-screen">
            <MinimalHeader />
            {children}
            <MinimalFooter />
          </main>
          <TailwindIndicator />
      </body>
  );
}

export default MinimalLayout;