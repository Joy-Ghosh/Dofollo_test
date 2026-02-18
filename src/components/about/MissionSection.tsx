import React from 'react';
import aboutData from '../../data/pages/about.json';
import { Check, Zap, Clock, TrendingUp } from 'lucide-react';

export default function MissionSection() {
    const { mission } = aboutData;

    return (
        <section className="py-24 bg-white text-[#0A2E22] overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="order-2 lg:order-1 space-y-8">
                        <div>
                            <span className="inline-block px-3 py-1 bg-[#0A2E22]/5 text-[#0A2E22] text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                                {mission.badge}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                {mission.title}
                            </h2>
                            <p className="text-lg text-[#0A2E22]/70 leading-relaxed max-w-xl">
                                {mission.description}
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {mission.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-[#E1F28F] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <Check className="w-3 h-3 text-[#0A2E22]" strokeWidth={3} />
                                    </div>
                                    <span className="text-[#0A2E22]/80 font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Visual: Dashboard Mockup */}
                    <div className="order-1 lg:order-2 relative group px-6 lg:px-0">
                        {/* Decorative Backdrop */}
                        <div className="absolute inset-0 bg-[#0A2E22] rounded-3xl -rotate-2 scale-[0.98] opacity-5 group-hover:-rotate-3 transition-transform duration-500" />

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#F8FAFC] border border-[#0A2E22]/5 aspect-[4/3] flex flex-col p-6">
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
                                        <div className="text-xs font-bold text-[#0A2E22]/40 uppercase tracking-wider">Project</div>
                                        <div className="text-sm font-bold text-[#0A2E22]">dofollo.ai</div>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-[#E1F28F] text-[#0A2E22] text-xs font-bold rounded-full">
                                    Optimization Active
                                </div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="flex-1 space-y-4">
                                {/* Metric 1: Link Health */}
                                <div className="p-4 bg-white rounded-xl border border-[#0A2E22]/5 shadow-sm group/card hover:border-[#0A2E22]/10 transition-all cursor-default">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-bold text-[#0A2E22]/60">Link Health Score</span>
                                        <span className="text-xs font-bold text-[#045C4E] bg-[#E1F28F]/30 px-2 py-0.5 rounded">+12%</span>
                                    </div>
                                    <div className="flex items-end gap-2">
                                        <div className="text-3xl font-bold text-[#0A2E22]">92<span className="text-lg text-[#0A2E22]/40">/100</span></div>
                                    </div>
                                    <div className="h-1.5 w-full bg-[#0A2E22]/5 rounded-full mt-3 overflow-hidden">
                                        <div className="h-full bg-[#0A2E22] w-[92%] rounded-full group-hover/card:bg-[#045C4E] transition-colors" />
                                    </div>
                                </div>

                                {/* Metric 2: Opportunities */}
                                <div className="p-4 bg-white rounded-xl border border-[#E1F28F] shadow-sm group/card transition-all cursor-pointer relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[#E1F28F]/5" />
                                    <div className="relative flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#0A2E22]/5 flex items-center justify-center text-[#0A2E22]">
                                                <Zap className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-[#0A2E22]">Missing Internal Links</div>
                                                <div className="text-xs text-[#0A2E22]/50">3 high-value opportunities found</div>
                                            </div>
                                        </div>
                                        <button className="px-3 py-1.5 bg-[#0A2E22] text-white text-xs font-bold rounded-lg">
                                            Auto-Fix
                                        </button>
                                    </div>
                                </div>



                                {/* Metric 3: Impact Stats */}
                                <div className="grid grid-cols-2 gap-3 pt-2">
                                    <div className="p-3 bg-[#0A2E22]/5 rounded-xl border border-[#0A2E22]/5 flex flex-col justify-center gap-1 group/stat hover:bg-[#E1F28F] transition-colors">
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className="w-3.5 h-3.5 text-[#0A2E22]/60" />
                                            <span className="text-xs font-bold text-[#0A2E22]/60 uppercase tracking-wider">Est. Traffic</span>
                                        </div>
                                        <div className="text-xl font-bold text-[#0A2E22]">+24.5%</div>
                                    </div>
                                    <div className="p-3 bg-[#0A2E22]/5 rounded-xl border border-[#0A2E22]/5 flex flex-col justify-center gap-1 group/stat hover:bg-[#E1F28F] transition-colors">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-3.5 h-3.5 text-[#0A2E22]/60" />
                                            <span className="text-xs font-bold text-[#0A2E22]/60 uppercase tracking-wider">Time Saved</span>
                                        </div>
                                        <div className="text-xl font-bold text-[#0A2E22]">~12 hrs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
