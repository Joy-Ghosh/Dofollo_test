import React from 'react';

export default function CompetitorAnalysis() {
    return (
        <section className="py-24 bg-[#f5ffef] text-[#0A2E22] relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#045C4E]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative group">
                        {/* Glow effect behind visual */}
                        <div className="absolute inset-0 bg-[#045C4E]/10 blur-[60px] rounded-full group-hover:bg-[#045C4E]/20 transition-all duration-500"></div>

                        <div className="w-full h-auto bg-white rounded-2xl border border-[#0A2E22]/10 shadow-2xl flex flex-col relative overflow-hidden p-6 hover:border-[#045C4E]/30 transition-colors duration-500">

                            {/* Header */}
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-[#0A2E22] font-bold flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#045C4E] animate-pulse" />
                                    Competitor Gap Analysis
                                </h3>
                                <div className="text-xs font-mono text-[#045C4E] bg-[#045C4E]/10 px-3 py-1 rounded-full border border-[#045C4E]/20">
                                    LIVE TRACKING
                                </div>
                            </div>

                            {/* Chart / Data Rows */}
                            <div className="space-y-4 font-mono text-sm">
                                {/* Competitor 1 */}
                                <div className="p-4 rounded-xl bg-[#f5ffef] border border-[#0A2E22]/5 hover:bg-[#045C4E]/5 transition-colors cursor-pointer group/row">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center font-bold">A</div>
                                            <span className="text-[#0A2E22] font-bold">ahrefs.com</span>
                                        </div>
                                        <span className="text-[#045C4E] font-bold text-xs">+12% Gap</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-[#0A2E22]/5 rounded-full overflow-hidden">
                                        <div className="h-full w-[75%] bg-gradient-to-r from-orange-400 to-orange-600 rounded-full" />
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-[#0A2E22]/50">
                                        <span>DR 89</span>
                                        <span>3.2k Keywords</span>
                                    </div>
                                </div>

                                {/* Competitor 2 */}
                                <div className="p-4 rounded-xl bg-[#f5ffef] border border-[#0A2E22]/5 hover:bg-[#045C4E]/5 transition-colors cursor-pointer group/row">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">S</div>
                                            <span className="text-[#0A2E22] font-bold">semrush.com</span>
                                        </div>
                                        <span className="text-[#045C4E] font-bold text-xs">+8% Gap</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-[#0A2E22]/5 rounded-full overflow-hidden">
                                        <div className="h-full w-[60%] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-[#0A2E22]/50">
                                        <span>DR 92</span>
                                        <span>2.1k Keywords</span>
                                    </div>
                                </div>

                                {/* Your Site */}
                                <div className="p-4 rounded-xl bg-[#0A2E22] border border-[#0A2E22]/20 mt-6 transform scale-105 shadow-lg">
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
                                    <div className="flex justify-between mt-2 text-xs text-[#E1F28F]/80">
                                        <span>DR 45</span>
                                        <span>Potential: High</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#045C4E]/5 border border-[#045C4E]/10 text-[#045C4E] text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#045C4E] animate-pulse"></span>
                            Market Intelligence
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#0A2E22]">
                            Outperform Competitors <br /><span className="text-[#045C4E]">With AI Intelligence</span>
                        </h2>
                        <p className="text-lg text-[#0A2E22]/70 mb-8 leading-relaxed">
                            See exactly where your competitors are linking and find the gaps they missed. Steal their strategy in seconds with our advanced link graph visualization.
                        </p>
                        <button className="group relative inline-flex items-center gap-2 text-[#045C4E] font-bold pb-1 overflow-hidden">
                            <span className="relative z-10 transition-colors group-hover:text-[#0A2E22]">Explore Competitor Tools</span>
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#045C4E] transition-all duration-300 group-hover:w-full group-hover:bg-[#0A2E22]"></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
