import React, { useRef, useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import homeData from '../../data/pages/home.json';
import testimonialData from '../../data/testimonial.json';
import ScrollReveal from '../ScrollReveal';

// Emotion transformation tags per testimonial
const emotionTags = [
    { before: '😤 Hours lost', after: '🙌 Fully automated' },
    { before: '😰 Flying blind', after: '🎯 Crystal clear' },
    { before: '😓 Manual chaos', after: '⚡ One click done' },
    { before: '🤯 Overwhelmed', after: '😌 In control' },
    { before: '😤 Wasted budget', after: '📈 ROI visible' },
    { before: '😞 Guessing', after: '✅ Data-driven' },
];

export default function TestimonialsSection() {
    const { testimonials_section } = homeData;
    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [spotlightIdx, setSpotlightIdx] = useState(0);
    const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const dragX = useRef(0);
    const [dragOffset, setDragOffset] = useState(0);
    const CARD_W = 400; // approx card + gap

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    // Auto-advance every 4 seconds
    useEffect(() => {
        if (isPaused) return;
        autoScrollRef.current = setInterval(() => {
            const maxIdx = testimonialData.length - 1;
            setSpotlightIdx(i => (i >= maxIdx ? 0 : i + 1));
            setDragOffset(prev => {
                const next = prev - CARD_W;
                if (Math.abs(next) > width) return 0;
                return next;
            });
        }, 4000);
        return () => { if (autoScrollRef.current) clearInterval(autoScrollRef.current); };
    }, [isPaused, width]);

    return (
        <section className="py-24 bg-white text-[#0A2E22] overflow-hidden">
 <div className="container mx-auto ">
                <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2E22]/5 border border-[#0A2E22]/10 text-[#045C4E] font-bold text-xs uppercase tracking-wider mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#045C4E] animate-pulse" />
                            Real transformations
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-[#0A2E22] max-w-2xl">
                            {testimonials_section.heading_first} <span className="text-[#045C4E]">{testimonials_section.heading_highlight}</span>
                        </h2>
                    </div>
                    <div className="hidden md:flex gap-4 items-center">
                        <div className="px-4 py-2 bg-[#0A2E22]/5 rounded-full text-sm font-medium text-[#0A2E22]/60">
                            ← Drag to explore
                        </div>
                        <div className="px-3 py-1.5 text-xs text-[#045C4E] font-bold bg-[#E1F28F]/30 rounded-full border border-[#E1F28F]/50">
                            Auto-scrolling · hover to pause
                        </div>
                    </div>
                </ScrollReveal>

                {/* Draggable Carousel */}
                <ScrollReveal variant="fade-up" delay={0.2} className="w-full">
                    <motion.div
                        ref={carouselRef}
                        className="cursor-grab active:cursor-grabbing overflow-hidden"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        whileTap={{ cursor: 'grabbing' }}
                    >
                        <motion.div
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            dragElastic={0.1}
                            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                            animate={{ x: dragOffset }}
                            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
                            className="flex gap-8 w-max px-4 pb-12 pt-4"
                        >
                            {testimonialData.map((item: any, index: number) => {
                                const isSpotlight = index === spotlightIdx;
                                const emotion = emotionTags[index % emotionTags.length];
                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.08 }}
                                        className="w-[300px] md:w-[380px] flex-shrink-0 relative group"
                                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                    >
                                        {/* Spotlight pulse ring */}
                                        {isSpotlight && (
                                            <div className="absolute -inset-[3px] rounded-3xl border-2 border-[#045C4E]/40 animate-heartbeat pointer-events-none z-10" />
                                        )}

                                        <div className={`relative p-8 rounded-3xl border shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 h-full flex flex-col justify-between bg-white ${isSpotlight ? 'border-[#045C4E]/30' : 'border-[#0A2E22]/10'}`}>

                                            {/* Spotlight label */}
                                            {isSpotlight && (
                                                <div className="absolute -top-3 left-6 bg-[#045C4E] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                                    ✦ Featured Story
                                                </div>
                                            )}

                                            {/* Emotion transformation tag */}
                                            <div className="flex items-center gap-2 mb-5 p-2.5 bg-[#f5ffef] rounded-xl border border-[#E1F28F]/40">
                                                <span className="text-[11px] text-[#0A2E22]/50 font-medium line-through">{emotion.before}</span>
                                                <span className="text-[#0A2E22]/30">→</span>
                                                <span className="text-[11px] text-[#045C4E] font-bold">{emotion.after}</span>
                                            </div>

                                            <div>
                                                <div className="flex justify-between items-start mb-5">
                                                    <div className="flex gap-1">
                                                        {Array.from({ length: item.rating }).map((_, s) => (
                                                            <Star key={s} className="w-4 h-4 fill-[#E1F28F] text-[#045C4E]" />
                                                        ))}
                                                    </div>
                                                    <Quote className="w-6 h-6 text-[#0A2E22]/10 group-hover:text-[#045C4E]/20 transition-colors" />
                                                </div>
                                                <p className="text-base text-[#0A2E22] mb-6 leading-relaxed font-medium">
                                                    "{item.text}"
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-3 pt-5 border-t border-[#0A2E22]/5">
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
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </ScrollReveal>

                {/* Companies */}
                <ScrollReveal
                    variant="fade-up"
                    delay={0.4}
                    className="mt-12 pt-12 border-t border-[#0A2E22]/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500"
                >
                    {testimonials_section.companies.map((company: string, i: number) => (
                        <div key={i} className="text-xl font-bold text-[#0A2E22] grayscale hover:grayscale-0 transition-all cursor-default">
                            {company}
                        </div>
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
}
