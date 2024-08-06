import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ThemeToggleButton from "../ThemeToggler";

const navItems = {
  "/": { name: "home" },
  "/experience": { name: "experience" },
  "/projects": { name: "projects" },
  "/resume": { name: "resume" },
};

export function MinimalHeader() {
  const pathname = usePathname() || "/";

  return (
    <header className="mb-10 mt-10">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav className="relative">
            <div className="flex w-full flex-row justify-between items-center">
              <div className="flex flex-row space-x-4">
                {Object.entries(navItems).map(([path, { name }]) => {
                  const isActive = path === pathname;
                  return (
                    <Link
                      key={path}
                      href={path}
                      className={cn(
                        "transition-colors hover:text-neutral-800 dark:hover:text-neutral-200",
                        isActive ? "text-neutral-800 dark:text-neutral-200" : "text-neutral-500"
                      )}
                    >
                      <span className="relative py-1">
                        {name}
                        {isActive && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-200 dark:bg-neutral-800"
                            layoutId="activeNavItem"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 30,
                            }}
                          />
                        )}
                      </span>
                    </Link>
                  );
                })}
              </div>
              <div>
                <ThemeToggleButton />
              </div>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </header>
  );
}