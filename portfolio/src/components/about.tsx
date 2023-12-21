"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 m-4 text-lg"
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
                Based in the <span className="font-medium">vibrant tech hub of Mumbai, India</span>,
                I live at the epicenter of innovation, continually developing my skills to contribute to the
                next wave of digital advancement. My fascination with technology started from taking gadgets
                apart to see how they work, all the way to staying up late{" "}
                <span className="italic">tinkering with code</span>.
                Lately, I've been focused on honing my skills in{" "}
                <span className="font-medium">React, Next.js, TypeScript, Tailwind CSS, Flutter, Kotlin, Java, C++, and Python</span>.
            </p>

            <p>
                If our paths cross, feel free to say <span className="italic underline font-medium">hello</span>! 
                Whether meeting over coffee ☕ or a virtual chat, let's dive into{" "}
                <span className="font-medium">front-end innovation, back-end systems, favorite coding languages</span>
                , or anything on the cutting edge of <span className="font-medium">technology</span>.
            </p>

        </motion.section>
    )
}
