"use client";
import React, { useState, useEffect } from "react";
import getClientCookie from "@/utils/getClientCookie";
import MinimalAbout from "@/components/minimal-theme/About";
import TechyAbout from "@/components/techy-theme/About";
import Hero from "@/components/techy-theme/Hero";
import Navigation from "@/components/techy-theme/Navigation";
import Lenis from '@studio-freight/lenis'

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState<"minimal" | "techy" | null>(getClientCookie());

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      {selectedTheme === null ? (
        <div className="flex items-center justify-center h-screen">
          <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
        </div>
      ) : selectedTheme === "minimal" ? (
        <MinimalAbout />
      ) : (
        <>
          <Navigation />
          <Hero />
          <TechyAbout />
        </>
      )}
    </>
  );
}