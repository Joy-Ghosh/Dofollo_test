import React from 'react';

interface CompactHeroProps {
    badge: string;
    title: React.ReactNode;
    description: string;
}

export default function CompactHero({ badge, title, description }: CompactHeroProps) {
    return (
        <section className="pt-24 md:pt-32 pb-20 relative overflow-hidden bg-[#0A2E22]">
            {/* Background Texture & Noise */}
            <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />

            {/* Background Elements matching FinalCTA */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Central Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E1F28F]/10 rounded-full blur-[120px]" />

                {/* Texture Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F28F]/10 border border-[#E1F28F]/20 text-[#E1F28F] text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_10px_-5px_#E1F28F]">
                    <span className="w-2 h-2 rounded-full bg-[#E1F28F] animate-pulse"></span>
                    {badge}
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    );
}
