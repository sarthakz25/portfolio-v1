"use client";

import React from 'react';
import AnimatedHeading from '@/animations/animated-heading';
import { useSectionInView } from '@/lib/hooks';
import { BiSolidQuoteRight } from "react-icons/bi"

export default function About() {
    const { ref } = useSectionInView('About');

    return (
        <section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 m-4 text-lg scroll-mt-28"
            id='about'
            ref={ref}
        >
            <AnimatedHeading text={"About Me"} />

            <p className="text-gray-800 dark:text-gray-300 font-medium leading-relaxed mb-5">
                Based in <span className="font-semibold">Mumbai</span>, the vibrant tech hub of India, I am a
                driven <span className="italic">third-year student</span> at <span className="font-semibold">
                    NMIMS MPSTME</span>, with a lifelong fascination for technology. My curiosity evolved from
                disassembling gadgets to late nights spent coding, fueled by a belief in constant learning.
            </p>

            <p className="text-gray-800 dark:text-gray-300 font-medium leading-relaxed mb-7">
                I'm currently focused on refining my skills in <span className="font-semibold">Next.js</span>
                , <span className="font-semibold">TypeScript</span>, <span className="font-semibold">Tailwind</span>
                , <span className="font-semibold">Flutter</span>, <span className="font-semibold">Kotlin</span>
                , <span className="font-semibold">Java</span> and <span className="font-semibold">Python</span>.
                When not coding, you can find me playing football, hitting the gym, or unwinding with music.
                I stay inspired by immersing myself in the latest tech innovations, always seeking new challenges
                to grow.
            </p>

            <blockquote
                className="relative overflow-hidden tracking-tight py-4 pl-6 pr-12 p-4 border
                dark:border-white/5 borderBlack rounded-md bg-zinc-100/40 dark:bg-zinc-800/40"
            >
                <BiSolidQuoteRight
                    className="text-7xl absolute -top-7 -right-5 -rotate-12 dark:text-zinc-700/50 text-zinc-300/50"
                    aria-hidden="true"
                />
                <p className="text-left font-medium text-gray-800 dark:text-gray-300">
                    If our paths cross, feel free to say <span className="italic underline font-semibold">hello</span>!
                    Whether meeting over coffee ☕ or a virtual chat, let's dive into <span className="font-semibold">front-end innovation, back-end systems, favorite coding languages</span>,
                    or anything on the cutting edge of technology.
                </p>
            </blockquote>

        </section>
    )
}
