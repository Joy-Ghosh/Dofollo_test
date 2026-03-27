import React, { useState, useEffect, useCallback } from 'react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

// --- Animated comparison bar ---
function ComparisonBar({
    label,
    sublabel,
    display,
    barClass,
    color,
    width,
    active,
}: {
    label: string;
    sublabel?: string;
    display: string;
    barClass: string;
    color: string;
    width: string;
    active: boolean;
}) {
    return (
        <div className="space-y-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#0A2E22]/40">{label}</p>
            <div className="flex items-baseline justify-between gap-4">
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-[1400ms] ease-out ${barClass}`}
                        style={{ width: active ? width : '0%' }}
                    />
                </div>
                <span className={`text-xl md:text-2xl font-black tabular-nums leading-none whitespace-nowrap ${color}`}>
                    {display}
                </span>
            </div>
            {sublabel && (
                <p className="text-[11px] text-[#045C4E]/60 font-medium">{sublabel}</p>
            )}
        </div>
    );
}

// ─────────────────────────────────────────
export default function ProblemSection() {
    const { problem_section } = homeData;

    const [timeInView, setTimeInView] = useState(false);
    const [animatedBefore, setAnimatedBefore] = useState(0);
    const [animatedAfter, setAnimatedAfter] = useState(0);

    useEffect(() => {
        if (!timeInView) return;
        const duration = 2000;
        const steps = 60;
        const startTime = Date.now();

        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(2, -10 * progress);

            setAnimatedBefore(
                parseFloat((problem_section.bar_before_value * ease).toFixed(1))
            );
            setAnimatedAfter(
                Math.floor(problem_section.bar_after_value * ease)
            );

            if (progress === 1) clearInterval(timer);
        }, 1000 / steps);

        return () => clearInterval(timer);
    }, [timeInView, problem_section.bar_before_value, problem_section.bar_after_value]);

    const handleInView = useCallback(() => setTimeInView(true), []);

    return (
        <section className="py-24 md:py-32 bg-white text-[#0A2E22] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0A2E22]/6 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">

                {/* ── 1. CONTEXT LABEL + QUOTE ── */}
                <ScrollReveal variant="fade-up" className="text-center mb-16">
                    {problem_section.micro_hook && (
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-100 text-red-500 font-semibold text-xs tracking-wider uppercase mb-7">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            {problem_section.micro_hook}
                        </div>
                    )}

                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#0A2E22]/35 mb-5">
                        {problem_section.section_label}
                    </p>

                    <h2 className="text-2xl md:text-3xl lg:text-[34px] font-semibold italic tracking-tight text-[#0A2E22]/80 leading-[1.3] max-w-2xl mx-auto">
                        "{problem_section.heading_first}
                        <br className="hidden sm:block" />
                        <span className="text-[#045C4E]/90">
                            {problem_section.heading_highlight}
                        </span>"
                    </h2>

                    <div className="mt-5 w-12 h-px bg-gradient-to-r from-transparent via-[#E1F28F] to-transparent mx-auto" />
                </ScrollReveal>

                {/* ── 2. TWO-COLUMN ── */}
                <ScrollReveal
                    variant="fade-up"
                    delay={0.15}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start"
                    onInView={handleInView}
                >
                    {/* Left: Bullet list */}
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#0A2E22]/35 mb-6">
                            {problem_section.bullets_label}
                        </p>
                        <ul className="space-y-6">
                            {problem_section.bullets.map((b, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-4 leading-[1.5]"
                                >
                                    <span className="mt-[9px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#045C4E]" />
                                    <span>
                                        <span className="text-base md:text-[17px] text-[#0A2E22]/85 font-semibold">{b.main}</span>
                                        <span className="text-base md:text-[17px] text-[#0A2E22]/40 font-medium"> → {b.consequence}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Comparison bars */}
                    <div>
                        {/* Emotional hook */}
                        <p className="text-base font-semibold text-[#0A2E22]/70 mb-1">
                            {problem_section.comparison_hook}
                        </p>
                        {/* Cause → Effect connector */}
                        <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#045C4E] mb-6">
                            {problem_section.comparison_connector}
                        </p>

                        <div className="space-y-8">
                            <ComparisonBar
                                label={problem_section.bar_before_label}
                                display={`${animatedBefore.toFixed(1)} ${problem_section.bar_before_unit}`}
                                barClass="bg-[#f87171]/60"
                                color="text-[#e05252]"
                                width="100%"
                                active={timeInView}
                            />
                            <ComparisonBar
                                label={problem_section.bar_after_label}
                                display={`${animatedAfter} ${problem_section.bar_after_unit}`}
                                barClass="bg-gradient-to-r from-[#E1F28F] to-[#045C4E]"
                                color="text-[#045C4E]"
                                width="6%"
                                active={timeInView}
                                sublabel={problem_section.bar_after_sublabel}
                            />
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}
