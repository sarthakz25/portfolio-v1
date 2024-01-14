"use client";

import React from "react";
import AnimatedHeading from "@/animations/animated-heading";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.4);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-36">
            <AnimatedHeading text={"My Projects"} />

            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    );
}
