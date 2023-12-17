"use client";

import Image from 'next/image'
import React from 'react'
import profile_pic from "@/public/profile_pic.jpg";
import { motion } from 'framer-motion';

export default function Intro() {
    return (
        <section className="mb-28 max-w-[55rem] text-center sm:mb-0">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            className="h-24 w-24 rounded-full object-cover
                            border-[0.35rem] border-white shadow-xl"
                            src={profile_pic}
                            alt='Display Picture'
                            width="192"
                            height="192"
                            quality="95"
                            priority={true} />
                    </motion.div>

                    <motion.span className="absolute bottom-0 right-0 text-3xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.p
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                
                <span className="font-bold">Hi, I'm Sarthak Khandelwal,</span> a passionate{" "}
                <span className="font-bold">computer engineering student</span> thriving in my{" "}
                <span className="font-bold">3rd year of BTech</span> at{" "}
                <span className="italic">NMIMS MPSTME</span>. I take delight in crafting compelling{" "}
                <span className="italic">websites and apps</span>, exploring the exciting realm of AI,
                and dedicated to building exceptional <span className="underline">digital experiences</span>.

            </motion.p>
        </section>
    )
}
