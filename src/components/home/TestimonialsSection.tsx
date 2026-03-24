import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import homeData from '../../data/pages/home.json';
import testimonialData from '../../data/testimonial.json';
import ScrollReveal from '../ScrollReveal';

// Emotion transformation tags per testimonial
const emotionTags = [
    { before: '😤 6hrs wasted', after: '⚡ 10 min audit' },
    { before: '😨 Orphans hiding', after: '🔍 All surfaced' },
    { before: '� Guessing anchors', after: '🎯 AI picks perfectly' },
    { before: '� Leaking equity', after: '📈 Flowing again' },
    { before: '🤷 Unknown gaps', after: '🗺️ Full link map' },
    { before: '😰 Manual publishes', after: '✅ One-click done' },
    { before: '😤 Flying blind', after: '� GSC-powered' },
    { before: '🤯 Competitor mystery', after: '🔓 Structure revealed' },
];

// Duplicate cards for seamless infinite loop
const allCards = [...testimonialData, ...testimonialData];

export default function TestimonialsSection() {
    const { testimonials_section } = homeData;

    return (
        <section className="py-24 md:py-32 bg-[#0A2E22] text-white overflow-hidden relative">
            {/* Background glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#045C4E]/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E1F28F]/5 rounded-full blur-[100px] pointer-events-none" />
            {/* Top blend from light Integrations section */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
            <div className="container mx-auto relative z-10">
                <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E1F28F] font-bold text-xs uppercase tracking-wider mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E1F28F] animate-pulse" />
                            Real transformations
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white max-w-2xl">
                            {testimonials_section.heading_first} <span className="text-[#E1F28F]">{testimonials_section.heading_highlight}</span>
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Infinite Marquee Carousel */}
                <ScrollReveal variant="fade-up" delay={0.2} className="w-full">
                    {/* Fade masks on left/right edges */}
                    <div className="relative">
                        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
                            style={{ background: 'linear-gradient(to right, #0A2E22 0%, transparent 100%)' }} />
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
                            style={{ background: 'linear-gradient(to left, #0A2E22 0%, transparent 100%)' }} />

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
                                            <div className="relative p-8 rounded-3xl border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 h-full flex flex-col justify-between bg-white/5">

                                                {/* Emotion transformation tag */}
                                                <div className="flex items-center gap-2 mb-5 p-2.5 bg-[#E1F28F]/10 rounded-xl border border-[#E1F28F]/20">
                                                    <span className="text-[11px] text-white/40 font-medium line-through">{emotion.before}</span>
                                                    <span className="text-white/20">→</span>
                                                    <span className="text-[11px] text-[#E1F28F] font-bold">{emotion.after}</span>
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
                                                    <p className="text-base text-white mb-6 leading-relaxed font-medium">
                                                        "{item.text}"
                                                    </p>
                                                </div>

                                                <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#045C4E] to-[#E1F28F] p-[2px]">
                                                        <div className="w-full h-full rounded-full bg-[#0A2E22] flex items-center justify-center text-[#E1F28F] font-bold text-lg">
                                                            {item.name.charAt(0)}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-white text-base">{item.name}</div>
                                                        <div className="text-xs text-white/50 font-medium">{item.role}</div>
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
                    className="mt-12 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500"
                >
                    {testimonials_section.companies.map((company: string, i: number) => (
                        <div key={i} className="text-xl font-bold text-white grayscale hover:grayscale-0 transition-all cursor-default">
                            {company}
                        </div>
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
}
