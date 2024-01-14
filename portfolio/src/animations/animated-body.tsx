import { useEffect, ReactNode } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedBodyProps = {
    children: ReactNode;
    className?: string;
};

export default function AnimatedBody({
    children,
    className,
}: AnimatedBodyProps) {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        } else {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);

    const bodyAnimation = {
        hidden: {
            opacity: 0,
            y: `1em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                delay: 0.125,
                duration: 1,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.p
            className={className}
            ref={ref}
            initial="hidden"
            animate={ctrls}
            variants={bodyAnimation}
        >
            {children}
        </motion.p>
    );
}
