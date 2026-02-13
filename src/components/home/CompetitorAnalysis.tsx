import React from 'react';

export default function CompetitorAnalysis() {
    return (
        <section className="py-24 bg-[#0A2E22] text-[#f5ffef] relative overflow-hidden bg-noise">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#E1F28F]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative group">
                        {/* Glow effect behind visual */}
                        <div className="absolute inset-0 bg-[#E1F28F]/10 blur-[60px] rounded-full group-hover:bg-[#E1F28F]/20 transition-all duration-500"></div>

                        <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-[#0D261F]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl flex flex-col relative overflow-hidden p-6 hover:border-[#E1F28F]/30 transition-colors duration-500">

                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-white/90 font-bold flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#E1F28F] animate-pulse" />
                                    Competitor Gap Analysis
                                </h3>
                                <div className="text-xs font-mono text-[#E1F28F]/60 bg-[#E1F28F]/5 px-3 py-1 rounded-full border border-[#E1F28F]/10">
                                    LIVE TRACKING
                                </div>
                            </div>

                            {/* Chart / Data Rows */}
                            <div className="space-y-4 font-mono text-sm">
                                {/* Competitor 1 */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group/row">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">A</div>
                                            <span className="text-white/80 font-bold">ahrefs.com</span>
                                        </div>
                                        <span className="text-[#E1F28F] font-bold text-xs">+12% Gap</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full w-[75%] bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-white/40">
                                        <span>DR 89</span>
                                        <span>3.2k Keywords</span>
                                    </div>
                                </div>

                                {/* Competitor 2 */}
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group/row">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">S</div>
                                            <span className="text-white/80 font-bold">semrush.com</span>
                                        </div>
                                        <span className="text-[#E1F28F] font-bold text-xs">+8% Gap</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full w-[60%] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-white/40">
                                        <span>DR 92</span>
                                        <span>2.1k Keywords</span>
                                    </div>
                                </div>

                                {/* Your Site */}
                                <div className="p-4 rounded-xl bg-[#E1F28F]/10 border border-[#E1F28F]/20 mt-6 transform scale-105 shadow-lg">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#E1F28F] text-[#0A2E22] flex items-center justify-center font-bold">Y</div>
                                            <span className="text-white font-bold">Your Website</span>
                                        </div>
                                        <span className="text-[#E1F28F] text-xs flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#E1F28F]" />
                                            Active
                                        </span>
                                    </div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full w-[45%] bg-[#E1F28F] rounded-full" />
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-[#E1F28F]/60">
                                        <span>DR 45</span>
                                        <span>Potential: High</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E1F28F] text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#E1F28F] animate-pulse"></span>
                            Market Intelligence
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight">
                            Outperform Competitors <br /><span className="text-white">With AI Intelligence</span>
                        </h2>
                        <p className="text-lg text-[#f5ffef]/70 mb-8 leading-relaxed">
                            See exactly where your competitors are linking and find the gaps they missed. Steal their strategy in seconds with our advanced link graph visualization.
                        </p>
                        <button className="group relative inline-flex items-center gap-2 text-[#E1F28F] font-bold pb-1 overflow-hidden">
                            <span className="relative z-10 transition-colors group-hover:text-white">Explore Competitor Tools</span>
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E1F28F] transition-all duration-300 group-hover:w-full group-hover:bg-white"></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
