import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return <motion.div
        ref={ref}
        style={{
            scale: scaleProgress,
            opacity: opacityProgress,
        }}
        className="group mb-4 sm:mb-8 last:mb-0"
    >
        <section
            className="bg-zinc-50 max-w-[45rem] borderBlack overflow-hidden sm:pr-8
            relative sm:h-[20rem] hover:bg-zinc-100 transition sm:group-even:pl-8 rounded-xl
            dark:bg-white/5 dark:hover:bg-white/10 dark:text-white dark:border-white/5"
        >
            <div className="pt-5 px-5 pb-5 sm:pb-8 sm:pl-10 sm:pr-2 sm:pt-8 sm:max-w-[50%] flex flex-col h-full
        sm:group-even:ml-[20rem]"
            >
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
                <ul className="flex flex-wrap mt-5 gap-2 sm:mt-auto font-medium">
                    {
                        tags.map((tag, index) => (
                            <li className="bg-zinc-700 px-3 py-1 text-xs uppercase tracking-wider
                        text-white rounded-full dark:text-zinc-900 dark:bg-zinc-200" key={index}>
                                {tag}
                            </li>
                        ))
                    }
                </ul>
            </div>

            <Image src={imageUrl} alt="Project I worked on" quality={95}
                className="absolute top-8 -right-36 w-[29rem] rounded-t-lg shadow-2xl 
            group-even:right-[initial] group-even:-left-36 group-hover:-translate-x-3
            group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04]
            group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 
            group-even:group-hover:rotate-2 hidden sm:block"
            />
        </section >
    </motion.div>
}
