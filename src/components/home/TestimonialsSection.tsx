import React from 'react';
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

// Duplicate cards for seamless infinite loop
const allCards = [...testimonialData, ...testimonialData];

export default function TestimonialsSection() {
    const { testimonials_section } = homeData;

    return (
        <section className="py-24 bg-white text-[#0A2E22] overflow-hidden">
            <div className="container mx-auto">
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
                </ScrollReveal>

                {/* Infinite Marquee Carousel */}
                <ScrollReveal variant="fade-up" delay={0.2} className="w-full">
                    {/* Fade masks on left/right edges */}
                    <div className="relative">
                        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
                            style={{ background: 'linear-gradient(to right, white 0%, transparent 100%)' }} />
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
                            style={{ background: 'linear-gradient(to left, white 0%, transparent 100%)' }} />

                        <div className="overflow-hidden">
                            <div className="flex gap-6 w-max pb-8 pt-4 animate-marquee">
                                {allCards.map((item: any, index: number) => {
                                    const emotion = emotionTags[index % emotionTags.length];
                                    return (
                                        <motion.div
                                            key={`card-${index}`}
                                            className="w-[300px] md:w-[360px] flex-shrink-0 relative group"
                                            whileHover={{ y: -8, transition: { duration: 0.25 } }}
                                        >
                                            <div className="relative p-7 rounded-3xl border border-[#0A2E22]/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-300 h-full flex flex-col justify-between bg-white">

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
                                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#045C4E] to-[#E1F28F] p-[2px]">
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
                            </div>
                        </div>
                    </div>
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
