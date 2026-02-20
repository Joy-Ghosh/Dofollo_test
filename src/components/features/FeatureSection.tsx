import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

export interface FeatureSectionProps {
    id: string;
    theme: 'light' | 'dark';
    alignment: 'left' | 'right';
    badge: string;
    title: string;
    description: string;
    bullets: string[];
    visual: React.ReactNode;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
    id, theme, alignment, badge, title, description, bullets, visual,
}) => {
    const isDark = theme === 'dark';
    const isLeft = alignment === 'left';

    return (
        <section
            id={id}
            className={`py-24 relative overflow-hidden ${isDark ? 'bg-[#0A2E22] text-white' : 'bg-white text-[#0A2E22]'}`}
        >
            {/* Background blobs */}
            {isDark ? (
                <div className="absolute inset-0 pointer-events-none">
                    <div className={`absolute ${isLeft ? 'top-0 right-0' : 'bottom-0 left-0'} w-[500px] h-[500px] bg-[#E1F28F]/5 rounded-full blur-[120px]`} />
                </div>
            ) : (
                <div className="absolute inset-0 pointer-events-none">
                    <div className={`absolute ${isLeft ? 'top-0 right-0' : 'bottom-0 left-0'} w-[400px] h-[400px] bg-[#045C4E]/5 rounded-full blur-[100px]`} />
                </div>
            )}

 <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Text Column */}
                    <ScrollReveal
                        variant={isLeft ? 'slide-left' : 'slide-right'}
                        className={`${isLeft ? 'lg:order-1' : 'lg:order-2'}`}
                    >
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-6 ${isDark
                            ? 'bg-white/5 border-white/10 text-[#E1F28F]'
                            : 'bg-[#0A2E22]/5 border-[#0A2E22]/10 text-[#045C4E]'}`}
                        >
                            <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-[#E1F28F]' : 'bg-[#045C4E]'}`} />
                            {badge}
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                            {title}
                        </h2>

                        <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-white/70' : 'text-[#0A2E22]/70'}`}>
                            {description}
                        </p>

                        <ul className="space-y-4 mb-10">
                            {bullets.map((bullet, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 group"
                                    style={{ animationDelay: `${i * 0.08}s` }}
                                >
                                    <div className={`mt-0.5 p-0.5 rounded-full shrink-0 ${isDark ? 'bg-[#E1F28F] text-[#0A2E22]' : 'bg-[#045C4E] text-white'}`}>
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className={`text-base font-medium ${isDark ? 'text-white/90' : 'text-[#0A2E22]/80'}`}>
                                        {bullet}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <button className={`group flex items-center gap-2 font-bold pb-1 border-b-2 transition-all ${isDark
                            ? 'text-[#E1F28F] border-[#E1F28F] hover:text-white hover:border-white'
                            : 'text-[#0A2E22] border-[#0A2E22] hover:text-[#045C4E] hover:border-[#045C4E]'}`}
                        >
                            Explore Capability
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </ScrollReveal>

                    {/* Visual Column */}
                    <ScrollReveal
                        variant={isLeft ? 'slide-right' : 'slide-left'}
                        className={`${isLeft ? 'lg:order-2' : 'lg:order-1'} relative`}
                    >
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-[80px] -z-10 ${isDark ? 'bg-[#E1F28F]/8' : 'bg-[#045C4E]/5'}`} />
                        <div className={`rounded-3xl border shadow-xl overflow-hidden relative group hover:-translate-y-2 transition-transform duration-500 ${isDark
                            ? 'bg-[#0D261F] border-white/10 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)]'
                            : 'bg-white border-[#0A2E22]/10 shadow-[0_20px_60px_-10px_rgba(10,46,34,0.1)]'}`}
                        >
                            {/* Top shine line */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            {visual}
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
};
export default FeatureSection;
