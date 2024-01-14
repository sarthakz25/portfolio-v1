"use client";

import React from "react";
import AnimatedHeading from "@/animations/animated-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    }),

};

export default function Skills() {
    const { ref } = useSectionInView("Skills", 1);

    return (
        <section
            className="mb-28 max-w-[45rem] scroll-mt-28 text-center sm:mb-36"
            id="skills"
            ref={ref}
        >
            <AnimatedHeading text={"My Skills"} />


            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 font-medium">
                {
                    skillsData.map((skill, index) => (
                        <motion.li
                            key={index}
                            className="bg-zinc-200/40 borderBlack dark:border-white/5 rounded-xl px-5 py-3 
                            dark:bg-zinc-700/70 dark:text-white/80"
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    );
}
