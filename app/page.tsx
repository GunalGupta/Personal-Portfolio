'use client'

import React, { useRef, useEffect, useState } from 'react'
import getClientCookie from "@/utilis/getClientCookie";
import MinimalAbout from "@/components/minimal-ui/About";
import Skills from '@/components/techy-ui/Skills';
import TechyAbout from '../components/techy-ui/About';
import Hero from '@/components/techy-ui/Hero';
import Contact from '@/components/techy-ui/Contact';
import Lenis from '@studio-freight/lenis'
import { Project } from '@/components/techy-ui/Project';

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
    <div >
      {
        selectedTheme === "minimal" ? 
        (
          <MinimalAbout />
        ) : selectedTheme === "techy" ? 
        (
          <>
            <Hero />
            <TechyAbout />
            <Skills container={''} texts={[]} newRadius={0} />
            <Project />
            <Contact />
          </>
        ) : null
      }
    </div>
  )
}
