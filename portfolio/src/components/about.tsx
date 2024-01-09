"use client";

import React from 'react';
import SectionHeading from './section-heading';
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
            <SectionHeading>
                About Me
            </SectionHeading>

            <p className="mb-5">
                Based in Mumbai, the vibrant tech hub of India, I am a driven third-year student at NMIMS MPSTME,
                with a lifelong fascination for technology. My curiosity evolved from disassembling gadgets to
                late nights spent coding, fueled by a belief in constant learning.
            </p>

            <p className="mb-7">
                I'm currently focused on refining my skills with Next.js, TypeScript, Tailwind, Flutter, Kotlin,
                Java and Python. When not coding, you can find me playing football, hitting the gym, or unwinding
                with music. I stay inspired by immersing myself in the latest tech innovations, always seeking
                new challenges to grow.
            </p>

            <blockquote
                className="relative overflow-hidden tracking-tight py-4 pl-6 pr-12 p-4 border
                dark:border-white/5 borderBlack rounded-md bg-zinc-100/40 dark:bg-zinc-800/40"
            >
                <BiSolidQuoteRight
                    className="text-7xl absolute -top-7 -right-5 -rotate-12 dark:text-zinc-700/50 text-zinc-300/50"
                    aria-hidden="true"
                />
                <p className="text-left">
                    If our paths cross, feel free to say <span className="italic underline font-medium">hello</span>!
                    Whether meeting over coffee ☕ or a virtual chat, let's dive into <span className="font-medium">front-end innovation, back-end systems, favorite coding languages</span>,
                    or anything on the cutting edge of <span className="font-medium">technology</span>.
                </p>
            </blockquote>

        </section>
    )
}
