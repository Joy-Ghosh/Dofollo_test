import React from 'react';
import aboutData from '../../data/pages/about.json';
import { Check, Zap, Clock, TrendingUp } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

export default function MissionSection() {
    const { mission } = aboutData;

    return (
        <section className="py-24 bg-white text-[#0A2E22] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E1F28F]/10 rounded-full blur-[100px] pointer-events-none" />

 <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <ScrollReveal variant="slide-left" className="order-2 lg:order-1 space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#045C4E]/5 border border-[#045C4E]/10 text-[#045C4E] text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#045C4E] animate-pulse" />
                                {mission.badge}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                                {mission.title}
                            </h2>
                            <p className="text-lg text-[#0A2E22]/70 leading-relaxed max-w-xl">
                                {mission.description}
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {mission.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <div className="mt-0.5 p-0.5 bg-[#045C4E] rounded-full shrink-0 group-hover:scale-110 transition-transform">
                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                    </div>
                                    <span className="text-[#0A2E22]/80 font-medium leading-snug">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    {/* Visual: Dashboard Mockup */}
                    <ScrollReveal variant="slide-right" className="order-1 lg:order-2 relative px-6 lg:px-0 group">
                        <div className="absolute inset-0 bg-[#045C4E]/5 rounded-3xl -rotate-2 scale-[0.97] pointer-events-none group-hover:-rotate-1 transition-transform duration-500" />

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#F8FAFC] border border-[#0A2E22]/5 aspect-[4/3] flex flex-col p-6 hover:-translate-y-1 transition-transform duration-500">
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#045C4E] to-[#E1F28F]" />

                            {/* Dashboard Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#0A2E22] flex items-center justify-center">
                                        <div className="w-4 h-4 text-[#E1F28F]">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-[#0A2E22]/40 uppercase tracking-wider">Project</div>
                                        <div className="text-sm font-bold text-[#0A2E22]">dofollo.ai</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#E1F28F] text-[#0A2E22] text-xs font-bold rounded-full">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A2E22] animate-pulse" />
                                    Optimization Active
                                </div>
                            </div>

                            <div className="flex-1 space-y-4">
                                {/* Link Health */}
                                <div className="p-4 bg-white rounded-xl border border-[#0A2E22]/5 shadow-sm hover:border-[#045C4E]/20 transition-all group/card">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-bold text-[#0A2E22]/60">Link Health Score</span>
                                        <span className="text-xs font-bold text-[#045C4E] bg-[#E1F28F]/40 px-2 py-0.5 rounded-full">+12%</span>
                                    </div>
                                    <div className="text-3xl font-extrabold text-[#0A2E22]">92<span className="text-lg text-[#0A2E22]/30">/100</span></div>
                                    <div className="h-1.5 w-full bg-[#0A2E22]/5 rounded-full mt-3 overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-[#045C4E] to-[#E1F28F] w-[92%] rounded-full" />
                                    </div>
                                </div>

                                {/* Opportunities */}
                                <div className="p-4 bg-white rounded-xl border border-[#E1F28F] shadow-sm relative overflow-hidden group/card hover:-translate-y-0.5 transition-transform">
                                    <div className="absolute inset-0 bg-[#E1F28F]/5" />
                                    <div className="relative flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#E1F28F] flex items-center justify-center text-[#0A2E22]">
                                                <Zap className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-[#0A2E22]">Missing Internal Links</div>
                                                <div className="text-xs text-[#0A2E22]/50">3 high-value opportunities found</div>
                                            </div>
                                        </div>
                                        <button className="px-3 py-1.5 bg-[#0A2E22] text-white text-xs font-bold rounded-lg hover:bg-[#045C4E] transition-colors">Auto-Fix</button>
                                    </div>
                                </div>

                                {/* Stats mini row */}
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { icon: TrendingUp, label: 'Est. Traffic', value: '+24.5%' },
                                        { icon: Clock, label: 'Time Saved', value: '~12 hrs' },
                                    ].map(({ icon: Icon, label, value }, i) => (
                                        <div key={i} className="p-3 bg-[#0A2E22]/5 rounded-xl border border-[#0A2E22]/5 hover:bg-[#E1F28F] group/stat transition-colors">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Icon className="w-3.5 h-3.5 text-[#0A2E22]/50" />
                                                <span className="text-[10px] font-bold text-[#0A2E22]/50 uppercase tracking-wider">{label}</span>
                                            </div>
                                            <div className="text-xl font-extrabold text-[#0A2E22]">{value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
