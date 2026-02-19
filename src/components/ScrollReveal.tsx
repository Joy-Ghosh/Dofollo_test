import React, { useRef } from 'react';
import { motion, useInView, Variants, Transition, MotionProps } from 'framer-motion';

interface ScrollRevealProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up' | 'none';
    delay?: number;
    duration?: number;
    viewportAmount?: number | "some" | "all";
    once?: boolean;
    staggerChildren?: number;
    key?: React.Key | null | undefined;
}

const defaultTransition: Transition = {
    type: "spring",
    stiffness: 70,
    damping: 20,
    mass: 1
};

export default function ScrollReveal({
    children,
    className = "",
    variant = "fade-up",
    delay = 0,
    duration = 0.5,
    viewportAmount = 0.2, // Trigger earlier
    once = true,
    staggerChildren = 0,
    ...props
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: viewportAmount as any, once });

    const getVariants = (): Variants => {
        const transition = { ...defaultTransition, delay, duration, staggerChildren };

        switch (variant) {
            case 'fade-up':
                return {
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition
                    }
                };
            case 'fade-in':
                return {
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition
                    }
                };
            case 'slide-left':
                return {
                    hidden: { opacity: 0, x: 50 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition
                    }
                };
            case 'slide-right':
                return {
                    hidden: { opacity: 0, x: -50 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition
                    }
                };
            case 'scale-up':
                return {
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition
                    }
                };
            default:
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition }
                };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: viewportAmount as any, once }}
            variants={getVariants()}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
}
