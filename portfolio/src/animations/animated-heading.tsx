import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type AnimatedHeadingProps = {
    text: string;
};

export default function AnimatedHeading({
    text = '',
}: AnimatedHeadingProps) {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start('visible');
        } else {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);

    const wordAnimation = {
        hidden: {},
        visible: {},
    };

    const characterAnimation = {
        hidden: {
            opacity: 0,
            y: `0.25em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                // duration: 0.45,
                // ease: [0.2, 0.65, 0.3, 0.9],
                duration: 0.75,
                ease: "easeInOut",
            },
        },
    };

    return (
        <h2 aria-label={text} role="heading" className="text-3xl font-bold mb-8 text-center">
            {text.split(" ").map((word, index) => {
                return (
                    <motion.span
                        ref={ref}
                        key={index}
                        aria-hidden="true"
                        initial="hidden"
                        animate={ctrls}
                        variants={wordAnimation}
                        transition={{
                            delayChildren: index * 0.25,
                            staggerChildren: 0.05,
                        }}
                        className={`inline-block whitespace-nowrap ${"mr-[8px]"}`}
                    >
                        {word.split("").map((character, index) => {
                            return (
                                <motion.span
                                    aria-hidden="true"
                                    key={index}
                                    variants={characterAnimation}
                                    className={`inline-block ${"mr-[0.01em]"}`}
                                >
                                    {character}
                                </motion.span>
                            );
                        })}
                    </motion.span>
                );
            })}
        </h2>
    );
}
