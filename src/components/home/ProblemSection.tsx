import React, { useState, useEffect, useRef } from 'react';
import { AlertCircle, Clock, Layout, TrendingDown, CheckCircle2 } from 'lucide-react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

const iconMap: { [key: string]: React.ElementType } = {
    AlertCircle, Clock, Layout, TrendingDown
};

// Resolved icon map (paired with the problem icons)
const resolvedIconMap: { [key: string]: React.ElementType } = {
    AlertCircle: CheckCircle2,
    Clock: CheckCircle2,
    Layout: CheckCircle2,
    TrendingDown: CheckCircle2,
};

// Empathetic pain-to-gain copy overlay
const empathyData = [
    { hoursWasted: '3.5 hrs/week', savedWith: '12 min/week', color: 'from-red-500/20 to-transparent' },
    { hoursWasted: '2 hrs/week', savedWith: '5 min/week', color: 'from-orange-500/20 to-transparent' },
    { hoursWasted: '4 hrs/week', savedWith: '15 min/week', color: 'from-amber-500/20 to-transparent' },
    { hoursWasted: '5 hrs/week', savedWith: '20 min/week', color: 'from-red-600/20 to-transparent' },
];

function ProblemCard({ item, i }: { item: any; i: number }) {
    const Icon = iconMap[item.icon] || AlertCircle;
    const ResolvedIcon = resolvedIconMap[item.icon] || CheckCircle2;
    const [hovered, setHovered] = useState(false);
    const emp = empathyData[i] || empathyData[0];

    return (
        <div
            className="relative p-8 bg-white rounded-2xl border border-[#0A2E22]/10 shadow-[0_2px_10px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(10,46,34,0.15)] transition-all duration-500 group cursor-pointer overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ transform: hovered ? 'translateY(-6px)' : 'translateY(0)' }}
        >
            {/* Emotional progress bar at top — fills green on hover */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-200 overflow-hidden rounded-t-2xl">
                <div
                    className="h-full bg-gradient-to-r from-red-400 to-[#045C4E] transition-all duration-700 ease-out"
                    style={{ width: hovered ? '100%' : '25%' }}
                />
            </div>

            {/* Background state shift */}
            <div
                className="absolute inset-0 rounded-2xl transition-opacity duration-500"
                style={{ opacity: hovered ? 1 : 0, background: 'linear-gradient(135deg, rgba(4,92,78,0.03) 0%, rgba(225,242,143,0.05) 100%)' }}
            />

            {/* Icon — flips from problem to resolved */}
            <div className="relative w-14 h-14 mb-6" style={{ perspective: '400px' }}>
                <div
                    className="absolute inset-0 flex items-center justify-center w-14 h-14 bg-red-50 rounded-xl transition-all duration-500"
                    style={{
                        opacity: hovered ? 0 : 1,
                        transform: hovered ? 'rotateY(90deg)' : 'rotateY(0deg)',
                    }}
                >
                    <Icon className="w-7 h-7 text-red-400" />
                </div>
                <div
                    className="absolute inset-0 flex items-center justify-center w-14 h-14 bg-[#E1F28F] rounded-xl transition-all duration-500"
                    style={{
                        opacity: hovered ? 1 : 0,
                        transform: hovered ? 'rotateY(0deg)' : 'rotateY(-90deg)',
                    }}
                >
                    <ResolvedIcon className="w-7 h-7 text-[#0A2E22]" />
                </div>
            </div>

            <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${hovered ? 'text-[#045C4E]' : 'text-[#0A2E22]'}`}>
                {item.title}
            </h3>
            <p className="text-[#0A2E22]/60 leading-relaxed text-sm mb-6 relative z-10">
                {item.description}
            </p>

            {/* Hours comparison — slides up on hover */}
            <div
                className="flex items-center gap-3 overflow-hidden transition-all duration-500"
                style={{ maxHeight: hovered ? '48px' : '0px', opacity: hovered ? 1 : 0 }}
            >
                <div className="flex-1 text-center p-2 bg-red-50 rounded-lg border border-red-100">
                    <div className="text-xs font-bold text-red-400 tabular-nums">{emp.hoursWasted}</div>
                    <div className="text-[10px] text-red-300">wasted before</div>
                </div>
                <div className="text-[#0A2E22]/30 text-lg">→</div>
                <div className="flex-1 text-center p-2 bg-[#E1F28F]/20 rounded-lg border border-[#E1F28F]/40">
                    <div className="text-xs font-bold text-[#045C4E] tabular-nums">{emp.savedWith}</div>
                    <div className="text-[10px] text-[#045C4E]/60">with Dofollo</div>
                </div>
            </div>
        </div>
    );
}

export default function ProblemSection() {
    const { problem_section } = homeData;

    return (
        <section className="py-24 bg-white text-[#0A2E22]">
            <div className="container mx-auto px-6">
                <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
                    {/* Empathy hook */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-400 font-bold text-xs uppercase tracking-wider mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                        Sound familiar?
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight text-[#0A2E22]">
                        {problem_section.heading_first} <br /><span className="text-[#045C4E]">{problem_section.heading_highlight}</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-[#0A2E22]/70 leading-relaxed">
                        {problem_section.subheading}
                    </p>
                    <p className="mt-4 text-sm text-[#0A2E22]/40 italic">
                        👇 Hover each card to see your time back
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problem_section.problems.map((item: any, i: number) => (
                        <ScrollReveal
                            key={i}
                            variant="fade-up"
                            delay={i * 0.1}
                        >
                            <ProblemCard item={item} i={i} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
