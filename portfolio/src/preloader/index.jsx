"use client";

import { useEffect, useState, useCallback } from 'react';
import { motion } from "framer-motion";
import styles from "@/preloader/style.module.css";
import { opacity, slideUp } from "@/preloader/anim";

const words = ["Hello", "你好", "नमस्ते", "Hola", "Bonjour", "مرحبًا", "привет", "Olá"];

export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const updateDimensions = useCallback(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [updateDimensions]);

    useEffect(() => {
        if (index === words.length - 1) {
            return;
        }
        const timeoutId = setTimeout(() => {
            setIndex((prevIndex) => prevIndex + 1);
        }, index === 0 ? 850 : 150);

        return () => clearTimeout(timeoutId);
    }, [index]);

    const getControlPointY = (width) => {
        if (width <= 320) {
            return dimension.height + 75;
        } else if (width <= 768) {
            return dimension.height + 100;
        } else {
            return dimension.height + 200;
        }
    };

    const buildPath = (controlY) => {
        return `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${controlY} 0 ${dimension.height} L0 0`;
    };

    const initialPath = buildPath(getControlPointY(dimension.width));
    const targetPath = buildPath(dimension.height);

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: {
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.3
            }
        }
    };

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.preloader}>
            {dimension.width > 0 && (
                <>
                    <motion.p variants={opacity} initial="initial" animate="enter">{words[index]}</motion.p>
                    <svg>
                        <motion.path variants={curve} initial="initial" exit="exit" />
                    </svg>
                </>
            )}
        </motion.div>
    );
}
