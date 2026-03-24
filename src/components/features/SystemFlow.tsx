import React from 'react';
import ScrollReveal from '../ScrollReveal';

interface Step {
    title: string;
    desc: string;
}

interface SystemFlowProps {
    title: string;
    subtitle: string;
    microline: string;
    steps: Step[];
}

export default function SystemFlow({ title, subtitle, microline, steps }: SystemFlowProps) {
    return (
        <section id="system-flow" className="py-24 bg-white relative overflow-hidden border-t border-[#0A2E22]/5">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E1F28F]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0A2E22]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <ScrollReveal variant="fade-up">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 bg-[#0A2E22]/5 rounded-full text-xs font-bold text-[#0A2E22] tracking-wider uppercase mb-6 border border-[#0A2E22]/10">
                            The Workflow
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A2E22] mb-6 tracking-tight">
                            {title.split('—').map((part, i) => (
                                <React.Fragment key={i}>
                                    {i > 0 && <span className="mx-2 text-[#0A2E22]/30">—</span>}
                                    <span className={i === 1 ? "text-[#045C4E]" : ""}>{part.trim()}</span>
                                </React.Fragment>
                            ))}
                        </h2>
                        <p className="text-xl text-[#0A2E22]/70 max-w-2xl mx-auto font-medium">
                            {subtitle}
                        </p>
                    </div>
                </ScrollReveal>

                <div className="relative mt-20 mb-16">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#E1F28F]/30 via-[#045C4E]/20 to-[#0A2E22]/5 -translate-y-1/2 rounded-full hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                        {steps.map((step, i) => (
                            <ScrollReveal key={i} variant="fade-up" delay={i * 0.1}>
                                <div className="relative group bg-white rounded-2xl p-6 shadow-sm border border-[#0A2E22]/10 hover:shadow-xl hover:border-[#045C4E]/30 transition-all duration-300 h-full flex flex-col items-center text-center hover:-translate-y-2">
                                    <div className="w-14 h-14 rounded-full bg-[#0A2E22] text-[#E1F28F] flex items-center justify-center font-extrabold text-xl mb-6 shadow-lg group-hover:bg-[#045C4E] group-hover:scale-110 transition-all duration-300 ring-4 ring-white relative z-10">
                                        {i + 1}
                                    </div>
                                    <h3 className="font-bold text-[#0A2E22] mb-3 text-lg leading-tight group-hover:text-[#045C4E] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-[#0A2E22]/60 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

                <ScrollReveal variant="fade-up" delay={0.5}>
                    <div className="text-center">
                        <p className="text-sm font-bold text-[#0A2E22]/50 tracking-wide uppercase px-6 py-2 bg-[#0A2E22]/5 inline-block rounded-full">
                            {microline}
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
