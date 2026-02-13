import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FeatureSectionProps {
    id: string;
    theme: 'light' | 'dark';
    alignment: 'left' | 'right';
    badge: string;
    title: string;
    description: string;
    bullets: string[];
    visual: React.ReactNode;
}

export default function FeatureSection({
    id,
    theme,
    alignment,
    badge,
    title,
    description,
    bullets,
    visual,
}: FeatureSectionProps) {
    const isDark = theme === 'dark';
    const isLeft = alignment === 'left';

    return (
        <section
            id={id}
            className={`py-24 relative overflow-hidden ${isDark ? 'bg-[#0A2E22] text-[#f5ffef]' : 'bg-[#f5ffef] text-[#0A2E22]'
                }`}
        >
            {/* Background Patterns */}
            {isDark && (
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E1F28F]/5 rounded-full blur-[120px]" />
                </div>
            )}

            <div className="container mx-auto px-6 relative z-10">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center`}>

                    {/* Text Column */}
                    <div className={`${isLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-6 ${isDark
                                ? 'bg-white/5 border-white/10 text-[#E1F28F]'
                                : 'bg-[#0A2E22]/5 border-[#0A2E22]/10 text-[#045C4E]'
                            }`}>
                            <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-[#E1F28F]' : 'bg-[#045C4E]'}`}></span>
                            {badge}
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                            {title}
                        </h2>

                        <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-[#f5ffef]/70' : 'text-[#0A2E22]/70'}`}>
                            {description}
                        </p>

                        <ul className="space-y-4 mb-10">
                            {bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${isDark ? 'text-[#E1F28F]' : 'text-[#045C4E]'}`} />
                                    <span className={`text-base font-medium ${isDark ? 'text-[#f5ffef]/90' : 'text-[#0A2E22]/80'}`}>
                                        {bullet}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <button className={`group flex items-center gap-2 font-bold pb-1 border-b-2 transition-all ${isDark
                                ? 'text-[#E1F28F] border-[#E1F28F] hover:text-white hover:border-white'
                                : 'text-[#0A2E22] border-[#0A2E22] hover:text-[#045C4E] hover:border-[#045C4E]'
                            }`}>
                            Explore Capability
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>

                    </div>

                    {/* Visual Column */}
                    <div className={`${isLeft ? 'lg:order-2' : 'lg:order-1'} relative`}>
                        {/* Background Blob behind visual */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[80px] -z-10 ${isDark ? 'bg-[#E1F28F]/10' : 'bg-[#045C4E]/5'
                            }`} />

                        <div className={`rounded-3xl border shadow-xl overflow-hidden relative group hover:-translate-y-2 transition-transform duration-500 ${isDark
                                ? 'bg-[#0D261F] border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)]'
                                : 'bg-white border-[#0A2E22]/10 shadow-[0_20px_50px_-10px_rgba(10,46,34,0.1)]'
                            }`}>
                            {visual}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
