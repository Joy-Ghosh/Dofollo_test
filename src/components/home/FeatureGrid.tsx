import React, { useState } from 'react';
import { Target, BarChart2, Zap, Database, Globe, Share2 } from 'lucide-react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

const iconMap: { [key: string]: React.ElementType } = { Target, BarChart2, Zap, Database, Globe, Share2 };

// Which card index gets the "New" badge
const NEW_BADGE_INDEX = 2;

export default function FeatureGrid() {
    const { feature_grid } = homeData;

    return (
        <section className="py-24 bg-[#0A2E22] bg-noise relative overflow-hidden">
            {/* Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#045C4E]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#E1F28F]/5 rounded-full blur-[100px] pointer-events-none" />

 <div className="container mx-auto relative z-10">
                <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        {feature_grid.heading_first} <span className="text-[#E1F28F]">{feature_grid.heading_highlight}</span>
                    </h2>
                    <p className="text-white/80 text-lg lg:text-xl leading-relaxed">
                        {feature_grid.description}
                    </p>
                </ScrollReveal>

                {/* Wave stagger grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {feature_grid.features.map((item: any, i: number) => {
                        const Icon = iconMap[item.icon] || Target;
                        // Diagonal stagger: delay based on row+col
                        const col = i % 3;
                        const row = Math.floor(i / 3);
                        const delay = (col + row) * 0.08;
                        return (
                            <ScrollReveal key={i} variant="fade-up" delay={delay}>
                                <FeatureCard item={item} Icon={Icon} isNew={i === NEW_BADGE_INDEX} />
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ item, Icon, isNew }: { item: any; Icon: React.ElementType; isNew?: boolean }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="beam-card p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#E1F28F]/50 hover:bg-white/10 transition-all duration-300 group relative"
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
            style={{ contain: 'layout' }}
        >
            {/* New badge */}
            {isNew && (
                <div className="absolute top-4 right-4 z-20">
                    <span className="relative flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#E1F28F] text-[#0A2E22] overflow-hidden">
                        <span className="relative z-10">New</span>
                        {/* Liquid fill shimmer on badge */}
                        <span className="absolute inset-0 bg-white/40 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700" />
                    </span>
                </div>
            )}

            {/* 3D Flip Icon */}
            <div className="mb-6 w-14 h-14" style={{ perspective: '400px' }}>
                <div
                    className="relative w-14 h-14"
                    style={{ transformStyle: 'preserve-3d', transition: 'transform 0.5s ease', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                >
                    {/* Front face */}
                    <div
                        className="absolute inset-0 flex items-center justify-center w-14 h-14 bg-white/5 rounded-xl"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <Icon className="w-7 h-7 text-[#E1F28F]" />
                    </div>
                    {/* Back face */}
                    <div
                        className="absolute inset-0 flex items-center justify-center w-14 h-14 bg-[#E1F28F] rounded-xl"
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                        <Icon className="w-7 h-7 text-[#0A2E22]" />
                    </div>
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E1F28F] transition-colors duration-300">
                {item.title}
            </h3>
            <p className="text-white/70 leading-relaxed text-sm">{item.description}</p>
        </div>
    );
}
