"use client";

import React, { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi';

type Theme = 'light' | 'dark';

export default function ThemeSwitch() {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;

        if (localTheme) {
            setTheme(localTheme);

            if (localTheme === 'dark') {
                document.documentElement.classList.add('dark');
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        }
    }, []);

    return (
        <button
            className="fixed sm:top-6 bottom-6 right-6 bg-white w-[3.25rem] h-[3.25rem] bg-opacity-75
            backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-lg shadow-black/[0.03]
            rounded-full flex items-center justify-center hover:scale-[1.075] transition-all"
            onClick={toggleTheme}
        >
            {
                theme === 'light' ? (
                    <FiSun />
                ) : (
                    <FiMoon />
                )
            }
        </button>
    );
}
