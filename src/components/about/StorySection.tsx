import React from 'react';
import aboutData from '../../data/pages/about.json';
import { Target, Zap, Shield, Rocket } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

export default function StorySection() {
    const { story } = aboutData;
    const icons = [Target, Shield, Rocket, Zap];

    return (
        <section className="py-24 bg-[#0A2E22] text-white relative overflow-hidden bg-noise">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E1F28F]/8 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E1F28F]/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <ScrollReveal variant="fade-up" className="max-w-3xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-[#E1F28F] text-xs font-bold uppercase tracking-wider rounded-full mb-6 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E1F28F] animate-pulse" />
                        {story.badge}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">{story.title}</h2>
                    <p className="text-lg text-white/60 leading-relaxed">{story.description}</p>
                </ScrollReveal>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {story.highlights.map((highlight, i) => {
                        const Icon = icons[i % icons.length];
                        return (
                            <ScrollReveal key={i} variant="fade-up" delay={i * 0.1}>
                                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E1F28F]/30 hover:bg-white/10 transition-all duration-300 group text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-[#E1F28F]/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-[#E1F28F] group-hover:scale-110 transition-all duration-300">
                                        <Icon className="w-7 h-7 text-[#E1F28F] group-hover:text-[#0A2E22] transition-colors" />
                                    </div>
                                    <h3 className="text-base font-bold text-white group-hover:text-[#E1F28F] transition-colors leading-snug">
                                        {highlight}
                                    </h3>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Stats */}
                <ScrollReveal variant="fade-up" delay={0.3} className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
                    {story.stats.map((stat, i) => (
                        <div key={i} className="text-center group cursor-default">
                            <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 group-hover:text-[#E1F28F] transition-colors tracking-tighter">
                                {stat.number}
                            </div>
                            <div className="text-xs font-bold text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
}
