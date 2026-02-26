import React, { useEffect, useRef, useState } from 'react';
import { Scan, Sparkles, Link, ArrowRight, Check, Zap } from 'lucide-react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

const iconMap: { [key: string]: React.ElementType } = { Scan, Sparkles, Link };

// Proof badges per step
const proofBadges = [
    { icon: Check, text: 'Used by 1,200+ sites' },
    { icon: Zap, text: 'AI-powered suggestions' },
    { icon: Link, text: 'One-click apply' },
];

function useInView(threshold = 0.3) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, inView };
}

// Draws an SVG line between the icon centers using stroke-dashoffset animation
function AnimatedConnector({ inView, delay = 0 }: { inView: boolean; delay?: number }) {
    return (
        <div className="absolute left-[30px] md:left-[35px] top-16 bottom-0 w-0 overflow-visible pointer-events-none">
            <svg width="2" height="100%" className="absolute inset-0" style={{ height: '100%' }}>
                <line
                    x1="1" y1="0" x2="1" y2="100%"
                    stroke="#E1F28F"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    strokeLinecap="round"
                    style={{
                        strokeDashoffset: inView ? 0 : 200,
                        transition: `stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
                        opacity: 0.25,
                    }}
                />
            </svg>
        </div>
    );
}

export default function WorkflowSection() {
    const { workflow_section } = homeData;
    const { steps, visual } = workflow_section;
    const { ref: stepsRef, inView } = useInView(0.2);

    return (
        <section className="py-24 md:py-32 bg-white text-[#0A2E22] overflow-hidden">
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Content & Timeline */}
                    <div className="lg:pl-0">
                        <ScrollReveal variant="slide-left" className="mb-12">
                            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2E22]/5 border border-[#0A2E22]/10 text-[#045C4E] font-bold text-xs uppercase tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-[#045C4E]"></span>
                                {workflow_section.badge}
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0A2E22] mb-6 leading-tight tracking-tight">
                                {workflow_section.heading_first} <br />in <span className="text-[#045C4E]">{workflow_section.heading_highlight}</span>
                            </h2>
                            <p className="text-lg text-[#0A2E22]/70 max-w-lg leading-relaxed">
                                {workflow_section.description}
                            </p>
                        </ScrollReveal>

                        <div className="space-y-0 relative" ref={stepsRef}>
                            {steps.map((item: any, i: number) => {
                                const Icon = iconMap[item.icon] || Scan;
                                const badge = proofBadges[i];
                                const BadgeIcon = badge?.icon;

                                return (
                                    <ScrollReveal
                                        key={i}
                                        variant="fade-up"
                                        delay={0.2 + (i * 0.15)}
                                        className="relative pl-20 md:pl-24 pb-16 last:pb-0 group"
                                    >
                                        {/* Animated connecting line */}
                                        {i !== steps.length - 1 && (
                                            <AnimatedConnector inView={inView} delay={0.4 + i * 0.2} />
                                        )}

                                        {/* Icon box with pulse ring */}
                                        <div className="absolute left-0 top-0 z-10">
                                            <div className="relative">
                                                {/* Pulse ring fires on inView */}
                                                {inView && (
                                                    <div
                                                        className="absolute inset-0 rounded-2xl border-2 border-[#045C4E]/40"
                                                        style={{
                                                            animation: `stepPing 1.5s ease-out ${0.3 + i * 0.25}s both`,
                                                        }}
                                                    />
                                                )}
                                                <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-white border border-[#0A2E22]/10 rounded-2xl flex items-center justify-center shadow-[0_5px_15px_-5px_rgba(0,0,0,0.05)] group-hover:scale-105 group-hover:bg-[#0A2E22] group-hover:border-[#0A2E22] transition-all duration-300">
                                                    <Icon className="w-8 h-8 text-[#045C4E] group-hover:text-[#E1F28F] transition-colors duration-300" />
                                                    {/* Number badge */}
                                                    <div className="absolute -top-3 -right-3 bg-[#E1F28F] text-[#0A2E22] text-xs font-bold px-2 py-1 rounded-lg border-2 border-white shadow-sm transform group-hover:rotate-12 transition-transform">
                                                        {item.number}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-[#0A2E22] group-hover:text-[#045C4E] transition-colors">{item.title}</h3>
                                            <p className="text-[#0A2E22]/60 leading-relaxed text-base mb-3">{item.description}</p>
                                            {/* Proof badge */}
                                            {badge && BadgeIcon && (
                                                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#045C4E]/5 rounded-full border border-[#045C4E]/10 text-[#045C4E] text-xs font-semibold">
                                                    <BadgeIcon className="w-3.5 h-3.5" />
                                                    {badge.text}
                                                </div>
                                            )}
                                        </div>
                                    </ScrollReveal>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Visual Card */}
                    <ScrollReveal variant="slide-right" className="relative lg:pl-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#E1F28F]/10 rounded-full blur-[80px] -z-10 mix-blend-multiply" />

                        <div className="bg-white rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(10,46,34,0.15)] border border-[#0A2E22]/5 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                            {/* Header */}
                            <div className="bg-[#0A2E22] p-4 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#E1F28F]/20" />
                                    <div className="w-3 h-3 rounded-full bg-[#E1F28F]/40" />
                                    <div className="w-3 h-3 rounded-full bg-[#E1F28F]" />
                                </div>
                                <div className="text-white/60 text-xs font-mono">dofollo_agent_v2.exe</div>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Step 1 */}
                                <div className="flex gap-4 items-start">
                                    <div className="mt-1 w-10 h-10 rounded-xl bg-[#0A2E22]/5 flex items-center justify-center border border-[#0A2E22]/5 shrink-0">
                                        <Scan className="w-5 h-5 text-[#045C4E]" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="font-bold text-[#0A2E22] text-sm">{visual.step_1_title}</h4>
                                            <span className="text-xs font-bold text-[#045C4E] bg-[#0A2E22]/5 px-2 py-0.5 rounded">{visual.step_1_status}</span>
                                        </div>
                                        <div className="w-full bg-[#0A2E22]/5 rounded-full h-2 mb-2">
                                            <div className="w-full h-full bg-[#045C4E] rounded-full" />
                                        </div>
                                        <p className="text-xs text-[#0A2E22]/50">{visual.step_1_desc}</p>
                                    </div>
                                </div>

                                <div className="pl-5 -my-2"><div className="w-px h-6 bg-[#0A2E22]/10" /></div>

                                {/* Step 2 */}
                                <div className="flex gap-4 items-start">
                                    <div className="mt-1 w-10 h-10 rounded-xl bg-[#0A2E22]/5 flex items-center justify-center border border-[#0A2E22]/5 shrink-0">
                                        <Sparkles className="w-5 h-5 text-[#045C4E]" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="font-bold text-[#0A2E22] text-sm">{visual.step_2_title}</h4>
                                            <span className="text-xs font-bold text-white bg-[#0A2E22] px-2 py-0.5 rounded animate-pulse">{visual.step_2_status}</span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="p-3 bg-[#0A2E22]/5 border border-[#0A2E22]/5 rounded-lg flex items-center justify-between">
                                                <div className="text-xs text-[#0A2E22]/70">
                                                    <span className="font-bold text-[#045C4E]">keyword:</span> "{visual.step_2_item_1}"
                                                </div>
                                                <div className="w-4 h-4 rounded-full border border-[#045C4E]/20 flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-[#045C4E] rounded-full" />
                                                </div>
                                            </div>
                                            <div className="p-3 bg-white border border-[#0A2E22]/5 rounded-lg flex items-center justify-between shadow-sm">
                                                <div className="text-xs text-[#0A2E22]/70">
                                                    <span className="font-bold text-[#045C4E]">keyword:</span> "{visual.step_2_item_2}"
                                                </div>
                                                <div className="w-4 h-4 rounded-full border border-[#045C4E]/20" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pl-5 -my-2"><div className="w-px h-6 bg-[#0A2E22]/10" /></div>

                                {/* Step 3 */}
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-xl bg-[#045C4E] flex items-center justify-center shadow-lg shadow-[#045C4E]/20 shrink-0">
                                        <Link className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1 p-4 bg-[#0A2E22] rounded-xl text-white flex justify-between items-center shadow-xl">
                                        <div>
                                            <div className="text-sm font-bold">{visual.step_3_title}</div>
                                            <div className="text-xs text-white/50">{visual.step_3_desc}</div>
                                        </div>
                                        <div className="w-10 h-5 bg-[#E1F28F] rounded-full p-1 flex justify-end">
                                            <div className="w-3 h-3 bg-[#0A2E22] rounded-full shadow-sm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <style>{`
        @keyframes stepPing {
          0%   { opacity: 0.8; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.5); }
        }
      `}</style>
        </section>
    );
}
