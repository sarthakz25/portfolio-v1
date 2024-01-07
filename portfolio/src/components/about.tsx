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

            <p className="mb-4">
                {/* Based in the <span className="font-medium">vibrant tech hub of Mumbai, India</span>,
                I live at the epicenter of innovation, continually developing my skills to contribute to the
                next wave of digital advancement. My fascination with technology started from taking gadgets
                apart to see how they work, all the way to staying up late{" "}
                <span className="italic">tinkering with code</span>.
                Lately, I've been focused on honing my skills in{" "}
                <span className="font-medium">React, Next.js, TypeScript, Tailwind CSS, Flutter, Kotlin, Java, C++, and Python</span>. */}

                Based in the vibrant tech hub of Mumbai, India, I live at the epicenter of innovation, continually developing my skills to contribute to the next wave of digital advancement. My fascination with technology started from taking gadgets apart to see how they work, all the way to staying up late tinkering with code.

            </p>

            <p className="mb-10">
                I believe strongly in continuous learning and self-improvement. I try to make the most of every situation to better myself, whether favorable or not. I'm currently focused on honing my skills in React, Next.js, TypeScript, Tailwind CSS, Flutter, Kotlin, Java, C++, and Python.

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
