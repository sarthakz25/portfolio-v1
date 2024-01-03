import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/theme-context';

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    const iconVariants = {
        initial: {
            scale: 0,
            opacity: 0,
        },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.1
            }
        },
        exit: {
            scale: 0,
            opacity: 0,
            transition: {
                duration: 0.1
            }
        }
    };

    return (
        <button
            className="fixed sm:top-6 bottom-6 right-6 bg-white w-[3.25rem] h-[3.25rem] bg-opacity-75
            backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-lg shadow-black/[0.03]
            rounded-full flex items-center justify-center dark:bg-zinc-950 dark:border-black/5 
            dark:bg-opacity-75 z-10"
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
