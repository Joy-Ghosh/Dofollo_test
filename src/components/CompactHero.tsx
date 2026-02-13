import React from 'react';

interface CompactHeroProps {
    badge: string;
    title: React.ReactNode;
    description: string;
}

export default function CompactHero({ badge, title, description }: CompactHeroProps) {
    return (
        <section className="pt-32 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#0A2E22] pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#045C4E]/20 blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#E1F28F]/5 blur-[100px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E1F28F] text-xs font-bold uppercase tracking-wider mb-8">
                    <span className="w-2 h-2 rounded-full bg-[#E1F28F] animate-pulse"></span>
                    {badge}
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-[#f5ffef]/70 max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    );
}
