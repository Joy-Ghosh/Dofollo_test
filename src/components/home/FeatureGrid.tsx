import React from 'react';
import { Target, BarChart2, Zap, Database, Globe, Share2 } from 'lucide-react';

export default function FeatureGrid() {
    const features = [
        { icon: Target, title: "Anchor Optimization", desc: "Smart anchor text selection to prevent over-optimization." },
        { icon: BarChart2, title: "Link Graph", desc: "Visualize your site's internal link structure with an interactive map." },
        { icon: Zap, title: "Bulk Automation", desc: "Insert hundreds of links across thousands of pages in one click." },
        { icon: Database, title: "CMS Integration", desc: "Seamlessly connects with WordPress, Ghost, and custom stacks." },
        { icon: Globe, title: "Multilingual Support", desc: "Works across 20+ languages for finding semantic opportunities." },
        { icon: Share2, title: "Competitor Analysis", desc: "Track competitor linking strategies and replicate their wins." },
    ];

    return (
        <section className="py-24 bg-[#0A2E22] bg-noise relative overflow-hidden">
            {/* Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#045C4E]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#E1F28F]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-[#f5ffef] mb-6 tracking-tight">
                        Everything You Need <span className="text-[#E1F28F]">to Rank</span>
                    </h2>
                    <p className="text-[#f5ffef]/80 text-lg lg:text-xl leading-relaxed">
                        A complete toolkit designed for modern SEOs who demand precision and scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((item, i) => (
                        <div key={i} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#E1F28F]/50 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
                            <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E1F28F] transition-colors duration-300">
                                <item.icon className="w-7 h-7 text-[#E1F28F] group-hover:text-[#0A2E22] transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-[#f5ffef] mb-3">{item.title}</h3>
                            <p className="text-[#f5ffef]/70 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
