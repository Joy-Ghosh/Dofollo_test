import React from 'react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

export default function ImpactSection() {
    const { impact_section } = homeData;
    const { metrics } = impact_section;

    return (
        <section className="py-24 bg-[#0A2E22] text-white bg-noise">
            <div className="container mx-auto px-6">
                <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E1F28F] font-bold text-xs uppercase tracking-wider mb-6">
                        {impact_section.badge}
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight text-white">
                        {impact_section.heading_first} <span className="text-[#E1F28F]">{impact_section.heading_highlight}</span>
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((m, i) => (
                        <ScrollReveal
                            key={i}
                            variant="scale-up"
                            delay={i * 0.1}
                            className="p-8 bg-white/5 rounded-2xl border border-white/10 shadow-sm hover:shadow-lg transition-all text-center group backdrop-blur-sm hover:bg-white/10"
                        >
                            <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E1F28F] mb-2 group-hover:scale-110 transition-transform duration-300">{m.value}</div>
                            <div className="text-sm font-bold tracking-wide uppercase text-white/60">{m.label}</div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
