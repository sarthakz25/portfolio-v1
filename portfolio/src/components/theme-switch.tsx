"use client";

import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';

type Theme = 'light' | 'dark';

export default function ThemeSwitch() {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        window.localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;

        if (localTheme) {
            setTheme(localTheme);
            document.documentElement.classList.toggle('dark', localTheme === 'dark');
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    }, []);

    return (
        <button
            className="fixed sm:top-6 bottom-6 right-6 bg-white w-[3.25rem] h-[3.25rem] bg-opacity-75
            backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-lg shadow-black/[0.03]
            rounded-full flex items-center justify-center transition-all dark:bg-zinc-950
            dark:border-black/5 dark:bg-opacity-75"
            onClick={toggleTheme}
        >
            <AnimatePresence mode='wait' initial={false}>
                <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.1 }}
                    className="flex items-center justify-center"
                >
                    {
                        theme === 'light' ? <FiSun /> : <FiMoon />
                    }
                </motion.div>
            </AnimatePresence>
        </button>
    );
}
