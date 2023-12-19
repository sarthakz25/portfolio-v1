"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.175
            }}
        >
            <SectionHeading>
                About Me
            </SectionHeading>

            <p className="mb-4">
                Based in the vibrant tech hub of Mumbai, India, I live at the epicenter of innovation,
                continually developing my skills to contribute to the next wave of digital advancement.
                My fascination with technology started from taking gadgets apart to see how they work,
                all the way to staying up late tinkering with code. Lately, I've been focused on honing my
                skills in React, Next.js, TypeScript, Tailwind CSS, Flutter, Kotlin, Java, C++, and Python.
            </p>

            <p>
                If our paths cross, feel free to say hello! Whether meeting over coffee ☕ or a virtual chat,
                let's dive into front-end innovation, back-end systems, favorite coding languages, or anything
                on the cutting edge of technology.
            </p>

        </motion.section>
    )
}
