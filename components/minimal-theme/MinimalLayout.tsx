import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/minimal-theme/theme-provider"
import { TailwindIndicator } from "@/components/TailwindIndicator";
import {MinimalHeader} from "@/components/minimal-theme/Header";
import {MinimalFooter} from "@/components/minimal-theme/Footer";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const MinimalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <body
        className={cn(
          "mx-auto min-h-screen max-w-3xl antialiased dark:bg-zinc-950 dark:text-gray-100",
          space_grotesk.className,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-4  px-2 md:px-0 lg:mx-auto flex flex-col justify-between min-h-screen">
            <MinimalHeader />
            {children}
            <MinimalFooter />
          </main>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
  );
}

export default MinimalLayout;