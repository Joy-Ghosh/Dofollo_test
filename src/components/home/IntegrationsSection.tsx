import React from 'react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

export default function IntegrationsSection() {
    const { integrations_section } = homeData;

    return (
        <section className="py-24 bg-white text-[#0A2E22] relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#E1F28F]/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#045C4E]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto text-center relative z-10">
                <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto mb-16">
                    {integrations_section.badge && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#045C4E]/5 text-[#045C4E] text-xs font-bold uppercase tracking-wider rounded-full mb-5 border border-[#045C4E]/10">
                            {integrations_section.badge}
                        </div>
                    )}
                    <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight text-[#0A2E22] leading-tight">
                        {integrations_section.title}
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
                    {integrations_section.tools.map((tool: any, i: number) => (
                        <ScrollReveal key={i} variant="fade-up" delay={i * 0.1}>
                            <div className="relative p-6 h-full bg-white rounded-2xl border border-[#0A2E22]/10 hover:border-[#045C4E]/30 hover:shadow-lg transition-all duration-300 group shadow-sm">
                                {/* Subtle hover background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#045C4E]/0 to-[#045C4E]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-3 text-[#0A2E22] group-hover:text-[#045C4E] transition-colors">{tool.name}</h3>
                                    <p className="text-[#0A2E22]/60 leading-relaxed text-sm">{tool.description}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
