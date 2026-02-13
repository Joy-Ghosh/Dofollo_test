import React from 'react';
import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
    return (
        <section className="py-24 bg-[#0A2E22] bg-noise text-[#f5ffef]">
            <div className="container mx-auto px-6 max-w-5xl">
                <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-16 tracking-tight">
                    Manual Linking vs. <span className="text-[#E1F28F]">Dofollo</span>
                </h2>

                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                    {/* Header */}
                    <div className="grid grid-cols-3 p-8 border-b border-white/10 font-bold text-lg bg-black/20">
                        <div className="text-white/50">Feature</div>
                        <div className="text-center text-white/50">Manual</div>
                        <div className="text-center text-[#E1F28F] flex items-center justify-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#E1F28F] animate-pulse"></span>
                            Dofollo AI
                        </div>
                    </div>

                    {/* Rows */}
                    {[
                        "Find Opportunities",
                        "Insert Links",
                        "Anchor Optimization",
                        "Competitor Analysis",
                        "Broken Link Check"
                    ].map((feature, i) => (
                        <div key={i} className="grid grid-cols-3 p-6 border-b border-white/5 last:border-0 items-center hover:bg-white/5 transition-colors">
                            <div className="font-medium text-white/90">{feature}</div>
                            <div className="flex justify-center text-white/20"><X className="w-5 h-5" /></div>
                            <div className="flex justify-center text-[#E1F28F]">
                                <div className="p-1 bg-[#E1F28F]/10 rounded-full border border-[#E1F28F]/20">
                                    <Check className="w-5 h-5 shadow-[0_0_10px_#E1F28F]" />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Glow behind table */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#E1F28F]/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
                </div>
            </div>
        </section>
    );
}
