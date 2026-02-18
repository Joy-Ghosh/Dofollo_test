import React from 'react';
import aboutData from '../../data/pages/about.json';
import { Target, Zap, Shield, Rocket } from 'lucide-react';

export default function StorySection() {
    const { story } = aboutData;

    const icons = [Target, Shield, Rocket, Zap];

    return (
        <section className="py-24 bg-[#0A2E22] text-white relative">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E1F28F]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E1F28F]/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <span className="inline-block px-3 py-1 bg-white/10 text-[#E1F28F] text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-sm border border-white/5">
                        {story.badge}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        {story.title}
                    </h2>
                    <p className="text-lg text-white/60 leading-relaxed">
                        {story.description}
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {story.highlights.map((highlight, i) => {
                        const Icon = icons[i % icons.length];
                        return (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E1F28F]/30 hover:bg-white/10 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-[#E1F28F]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6 text-[#E1F28F]" />
                                </div>
                                <h3 className="text-lg font-bold text-white group-hover:text-[#E1F28F] transition-colors">
                                    {highlight}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
                    {story.stats.map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#E1F28F] transition-colors font-mono tracking-tighter">
                                {stat.number}
                            </div>
                            <div className="text-sm font-medium text-white/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
