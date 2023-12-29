"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
    const { ref } = useSectionInView('Contact', 0.75);

    return (
        <motion.section
            ref={ref}
            id='contact'
            className="scroll-mt-28 mb-24 w-[min(100%,38rem)] text-center font-medium"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>
                Contact Me
            </SectionHeading>

            <p className="text-gray-700 -mt-5">
                Let's connect! Reach out via{" "}
                <a className="underline" href="mailto:sarthakhandelwal@gmail.com">
                    sarthakhandelwal@gmail.com
                </a>{" "}
                or use the form below.
            </p>

            <form
                className="mt-10 flex flex-col"
                action={async formData => {
                    await sendEmail(formData)
                }}
            >
                <input
                    className="h-14 rounded-lg borderBlack px-4 bg-zinc-50"
                    type='email'
                    placeholder="Your email"
                    required
                    maxLength={250}
                    name="email"
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 bg-zinc-50"
                    placeholder="Your message"
                    required
                    maxLength={1000}
                    name="message"
                />
                <button
                    type='submit'
                    className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] 
                    bg-gray-800 text-white rounded-full outline-none transition-all
                    hover:scale-105 hover:bg-gray-900 mt-3"
                >
                    Submit <FaPaperPlane
                        className="text-xs opacity-75 transition-all group-hover:translate-x-1
                        group-hover:-translate-y-1"
                    />
                </button>
            </form>
        </motion.section>
    );
}
