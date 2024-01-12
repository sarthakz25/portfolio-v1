"use client";

import Image from 'next/image';
import React from 'react';
import profile_pic from "../../public/profile_pic.jpg";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsDownload, BsLinkedin, BsGithub } from "react-icons/bs";
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import HeroSvg from './hero-svg';

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5);

    // const { ref, inView } = useInView({
    //     threshold: 0.5,
    // });

    // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    // useEffect(() => {
    //     if (inView && Date.now() - timeOfLastClick > 1000) {
    //         setActiveSection("Home");
    //     }
    // }, [inView, setActiveSection, timeOfLastClick]);

    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            className="intro mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-96"
            id='home'
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.75, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 250,
                            damping: 20,
                            duration: 0.25
                        }}
                    >
                        <Image
                            className="h-28 w-28 rounded-full object-cover border-[0.3rem] 
                            shadow-xl border-zinc-400/20"
                            src={profile_pic}
                            alt='Display Picture'
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                        />
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

            {/* <div className="flex">
                <motion.h1
                    className="mb-12 mt-8 px-4 text-2xl font-medium !leading-[1.4] sm:text-3xl flex-1"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >

                    <span className="font-bold">Greetings</span>, I'm <span className="font-bold">Sarthak Khandelwal</span>
                    , a <span className="font-bold">Computer Engineering student</span> with a passion for crafting
                    intuitive <span className="italic">websites and applications</span>, exploring AI, and dedicated to
                    creating exceptional <span className="underline">digital experiences</span>.

                </motion.h1>

                <HeroSvg />
            </div> */}

            <motion.h1
                className="mb-12 mt-8 px-4 text-2xl font-medium !leading-[1.4] sm:text-3xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >

                <span className="font-bold">Greetings</span>, I'm <span className="font-bold">Sarthak Khandelwal</span>
                , a <span className="font-bold">Computer Engineering student</span> with a passion for crafting
                intuitive <span className="italic">websites and applications</span>, exploring AI, and dedicated to
                creating exceptional <span className="underline">digital experiences</span>.

            </motion.h1>

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
                    rounded-full outline-none hover:scale-105 hover:bg-gray-900 transition borderBlack
                    dark:bg-zinc-300 dark:hover:bg-zinc-200 dark:text-gray-900 dark:border-white/5"
                    onClick={() => {
                        setActiveSection('Contact');
                        setTimeOfLastClick(Date.now());
                    }}
                >

                    Contact me here <BsArrowRight
                        className="opacity-75 group-hover:translate-x-1 transition" />
                </Link>

                <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
                outline-none hover:scale-105 transition cursor-cell borderBlack dark:bg-white/10
                dark:border-white/5"
                    href="/Sarthak_Khandelwal.pdf" download>

                    Download CV <BsDownload
                        className="opacity-75 group-hover:translate-y-1 transition" />
                </a>

                <a className="bg-white p-4 text-gray-700 hover:text-gray-900 flex items-center
                gap-2 rounded-full borderBlack hover:scale-[1.075] cursor-pointer transition
                dark:bg-white/10 dark:text-white/60 dark:border-white/5 dark:hover:text-white/80"
                    href="https://www.linkedin.com/in/sarthakhandelwal/" target="_blank">
                    <BsLinkedin />
                </a>

                <a className="bg-white p-4 text-gray-700 hover:text-gray-900 flex items-center
                rounded-full text-[1.175rem] borderBlack hover:scale-[1.075] cursor-pointer transition
                dark:bg-white/10 dark:text-white/60 dark:border-white/5 dark:hover:text-white/80"
                    href="https://github.com/sarthakz25" target="_blank">
                    <BsGithub />
                </a>

            </motion.div>

        </section>
    )
}
