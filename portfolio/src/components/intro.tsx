"use client";

import Image from 'next/image'
import React from 'react'
import profile_pic from "../../public/profile_pic.jpg";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsDownload } from "react-icons/bs"
import { SiLinkedin, SiGithub } from "react-icons/si"

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
                            border-[0.25rem] border-white shadow-xl"
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
                className="mb-10 mt-6 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl"
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

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center 
                gap-4 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-800 text-white px-7 py-3 flex items-center gap-2 
                    rounded-full outline-none focus:scale-100 hover:scale-105 hover:bg-gray-900
                    active:scale-100 transition border border-black/10">

                    Contact me here <BsArrowRight
                        className="opacity-75 group-hover:translate-x-1 transition" />
                </Link>

                <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
                outline-none hover:scale-105 transition cursor-cell border border-black/10"
                    href="/Sarthak_Khandelwal.pdf" download>

                    Download CV <BsDownload
                        className="opacity-75 group-hover:translate-y-1 transition" />
                </a>

                <a className="bg-white p-4 text-gray-700 hover:text-gray-900 flex items-center
                gap-2 rounded-full border border-black/10 hover:scale-[1.075] cursor-pointer transition"
                    href="https://www.linkedin.com/in/sarthakhandelwal/" target="_blank">
                    <SiLinkedin />
                </a>

                <a className="bg-white p-4 text-gray-700 hover:text-gray-900 flex items-center
                rounded-full border text-[1.2rem] border-black/10 hover:scale-[1.075] cursor-pointer transition"
                    href="https://github.com/sarthakz25" target="_blank">
                    <SiGithub />
                </a>

            </motion.div>

        </section>
    )
}
