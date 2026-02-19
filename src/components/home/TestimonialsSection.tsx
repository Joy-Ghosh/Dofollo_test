import React, { useRef, useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import homeData from '../../data/pages/home.json';
import testimonialData from '../../data/testimonial.json';
import ScrollReveal from '../ScrollReveal';

export default function TestimonialsSection() {
    const { testimonials_section } = homeData;
    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, [carouselRef.current]);

    return (
        <section className="py-24 bg-white text-[#0A2E22] overflow-hidden">
            <div className="container mx-auto px-6">
                <ScrollReveal
                    variant="fade-up"
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-[#0A2E22] max-w-2xl">
                        {testimonials_section.heading_first} <span className="text-[#045C4E]">{testimonials_section.heading_highlight}</span>
                    </h2>

                    <div className="hidden md:flex gap-4">
                        <div className="flex gap-2">
                            {/* Hints for interactivity */}
                            <div className="px-4 py-2 bg-[#0A2E22]/5 rounded-full text-sm font-medium text-[#0A2E22]/60">
                                Drag to explore
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Draggable Carousel */}
                <ScrollReveal variant="fade-up" delay={0.2} className="w-full">
                    <motion.div
                        ref={carouselRef}
                        className="cursor-grab active:cursor-grabbing overflow-hidden"
                        whileTap={{ cursor: "grabbing" }}
                    >
                        <motion.div
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            dragElastic={0.1}
                            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                            className="flex gap-8 w-max px-4 pb-12 pt-4"
                        >
                            {testimonialData.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="w-[300px] md:w-[380px] flex-shrink-0 relative group"
                                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                >
                                    <div className="absolute inset-0 bg-[#045C4E] rounded-3xl transform rotate-2 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
                                    <div className="relative p-8 bg-white rounded-3xl border border-[#0A2E22]/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 h-full flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="flex gap-1">
                                                    {Array.from({ length: item.rating }).map((_, s) => (
                                                        <Star key={s} className="w-4 h-4 fill-[#E1F28F] text-[#045C4E]" />
                                                    ))}
                                                </div>
                                                <Quote className="w-6 h-6 text-[#0A2E22]/10 group-hover:text-[#045C4E]/20 transition-colors" />
                                            </div>

                                            <p className="text-lg text-[#0A2E22] mb-6 leading-relaxed font-medium">
                                                "{item.text}"
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3 pt-6 border-t border-[#0A2E22]/5">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#045C4E] to-[#E1F28F] p-[2px]">
                                                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#045C4E] font-bold text-lg">
                                                    {item.name.charAt(0)}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-[#0A2E22] text-base">{item.name}</div>
                                                <div className="text-xs text-[#0A2E22]/60 font-medium">{item.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </ScrollReveal>

                {/* Logos */}
                {/* Logos */}
                <ScrollReveal
                    variant="fade-up"
                    delay={0.4}
                    className="mt-12 pt-12 border-t border-[#0A2E22]/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500"
                >
                    {testimonials_section.companies.map((company, i) => (
                        <div key={i} className="text-xl font-bold text-[#0A2E22] grayscale hover:grayscale-0 transition-all cursor-default">
                            {company}
                        </div>
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
}
