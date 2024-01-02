import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

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
        const isDarkMode = localTheme === 'dark' || (!localTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
        setTheme(isDarkMode ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, []);

    const iconVariants = {
        initial: {
            scale: 0,
            opacity: 0,
        },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.125
            }
        },
        exit: {
            scale: 0,
            opacity: 0,
            transition: {
                duration: 0.125
            }
        }
    };

    return (
        <button
            className="fixed sm:top-6 bottom-6 right-6 bg-white w-[3.25rem] h-[3.25rem] bg-opacity-75
            backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-lg shadow-black/[0.03]
            rounded-full flex items-center justify-center dark:bg-zinc-950 dark:border-black/5 
            dark:bg-opacity-75"
            onClick={toggleTheme}
        >
            <AnimatePresence mode='wait'>
                {theme === 'light' ? (
                    <motion.div
                        key="light"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={iconVariants}
                    >
                        <FiSun />
                    </motion.div>
                ) : (
                    <motion.div
                        key="dark"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={iconVariants}
                    >
                        <FiMoon />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
