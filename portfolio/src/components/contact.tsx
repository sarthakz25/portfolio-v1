"use client";

import React from 'react';
import AnimatedHeading from '@/animations/animated-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from '@/components/submit-button';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView('Contact', 0.75);

    return (
        <motion.section
            ref={ref}
            id='contact'
            className="scroll-mt-28 mb-32 w-[min(100%,38rem)] text-center font-medium"
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
            <AnimatedHeading text={"Contact Me"} />

            <p className="text-gray-700 -mt-5 dark:text-white/80">
                Let's connect! Reach out via{" "}
                <a className="underline" href="mailto:sarthakhandelwal@gmail.com">
                    sarthakhandelwal@gmail.com
                </a>{" "}
                or use the form below.
            </p>

            <form
                className="mt-10 flex flex-col dark:text-black"
                action={async formData => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success("Email sent successfully");
                }}
            >
                <input
                    className="h-14 rounded-lg borderBlack px-4 bg-zinc-50 bg-opacity-60
                    focus:bg-opacity-100 dark:bg-zinc-700 dark:bg-opacity-60 dark:focus:bg-opacity-90  
                    dark:text-gray-100 transition-all outline-none dark:border-white/5"
                    type='email'
                    placeholder="Your email"
                    required
                    maxLength={250}
                    name="email"
                    autoComplete='on'
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 bg-zinc-50 bg-opacity-60
                    focus:bg-opacity-100 dark:bg-zinc-700 dark:bg-opacity-60 dark:focus:bg-opacity-90  
                    dark:text-gray-100 transition-all outline-none dark:border-white/5"
                    placeholder="Your message"
                    required
                    maxLength={1000}
                    name="message"
                />
                <SubmitButton />
            </form>
        </motion.section>
    );
}
