"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "@/components/header";
import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Preloader from "@/components/preloader";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const preloaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2900);

    return () => {
      clearTimeout(preloaderTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <main className="flex flex-col items-center px-4">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {showContent && (
        <>
          <Header />
          <Intro />
          <SectionDivider />
          <About />
          <Projects />
          <Skills />
        </>
      )}
    </main>
  );
}
