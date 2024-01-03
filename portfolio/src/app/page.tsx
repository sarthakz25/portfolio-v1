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
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const preloaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1750);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 2750);

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
          <ThemeSwitch />
          <Intro />
          <SectionDivider />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}
