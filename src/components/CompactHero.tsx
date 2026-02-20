import React from 'react';
import ScrollReveal from './ScrollReveal';

interface CompactHeroProps {
    badge: string;
    title: React.ReactNode;
    description: string;
    stats?: { value: string; label: string }[];
}

export default function CompactHero({ badge, title, description, stats }: CompactHeroProps) {
    return (
        <section className="pt-24 md:pt-32 pb-20 relative overflow-hidden bg-[#0A2E22]">
            {/* Background noise */}
            <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />

            {/* Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E1F28F]/10 rounded-full blur-[130px] pointer-events-none" />

            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />

            {/* Orbiting ring accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] border border-[#E1F28F]/5 rounded-full animate-orbit pointer-events-none" />

            {/* Floating dots */}
            {[...Array(6)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-[#E1F28F]"
                    style={{
                        width: `${2 + (i % 2)}px`,
                        height: `${2 + (i % 2)}px`,
                        left: `${10 + i * 14}%`,
                        top: `${20 + (i % 3) * 25}%`,
                        opacity: 0.12 + (i % 3) * 0.05,
                        animation: `float ${4 + i * 0.7}s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`,
                    }}
                />
            ))}

 <div className="container mx-auto relative z-10 text-center">
                {/* Badge */}
                <ScrollReveal variant="fade-up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E1F28F]/10 border border-[#E1F28F]/20 text-[#E1F28F] text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_15px_-5px_#E1F28F] backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E1F28F] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E1F28F]" />
                        </span>
                        {badge}
                    </div>
                </ScrollReveal>

                {/* Heading */}
                <ScrollReveal variant="fade-up" delay={0.1}>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg leading-[1.05]">
                        {title}
                    </h1>
                </ScrollReveal>

                {/* Description */}
                <ScrollReveal variant="fade-up" delay={0.2}>
                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </ScrollReveal>

                {/* Optional inline stats */}
                {stats && stats.length > 0 && (
                    <ScrollReveal variant="fade-up" delay={0.35}>
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/5 pt-10">
                            {stats.map((s, i) => (
                                <div key={i} className="text-center group">
                                    <div className="text-3xl font-extrabold text-[#E1F28F] mb-1 group-hover:scale-110 transition-transform">{s.value}</div>
                                    <div className="text-xs text-white/40 uppercase tracking-widest font-bold">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                )}
            </div>
        </section>
    );
}
