import type { Metadata } from "next";
import Head from "./head";
import MinimalLayout from "@/components/minimal-theme/MinimalLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gunal Gupta",
  description: "Personal Portfolio website developed by Gunal Gupta, using NextJS, Tailwind CSS & shadcn-ui",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <MinimalLayout>{children}</MinimalLayout>
    </html>
  );
}

