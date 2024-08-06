"use client";
import Head from "./head";
import MinimalLayout from "@/components/minimal-ui/MinimalLayout";
import TechyLayout from "@/components/techy-ui/TechyLayout";
import { getCookie } from "@/utilis/cookieManager";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [selectedTheme, setSelectedTheme] = useState<"minimal" | "techy" | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const theme = getCookie("selectedTheme");
    setSelectedTheme(theme as "minimal" | "techy");
  }, []);

  // If the user is on the /uitheme page, render the children directly without any layout
  if (pathname === "/ui-theme") {
    return (
      <html lang="en" suppressHydrationWarning>
        <body>{children}</body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        {selectedTheme === null ? (
          // Optionally, show a loading indicator or fallback content
          <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="wrapper-loading">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
            </div>
          </div>
        ) : selectedTheme === "minimal" ? (
          <MinimalLayout>{children}</MinimalLayout>
        ) : (
          <TechyLayout>{children}</TechyLayout>
        )}
      </body>
    </html>
  );
}
