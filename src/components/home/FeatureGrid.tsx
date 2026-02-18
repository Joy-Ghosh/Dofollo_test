import React from 'react';
import { Target, BarChart2, Zap, Database, Globe, Share2 } from 'lucide-react';
import homeData from '../../data/pages/home.json';

const iconMap: { [key: string]: React.ElementType } = {
    Target,
    BarChart2,
    Zap,
    Database,
    Globe,
    Share2
};

export default function FeatureGrid() {
    const { feature_grid } = homeData;

    return (
        <section className="py-24 bg-[#0A2E22] bg-noise relative overflow-hidden">
            {/* Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#045C4E]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#E1F28F]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        {feature_grid.heading_first} <span className="text-[#E1F28F]">{feature_grid.heading_highlight}</span>
                    </h2>
                    <p className="text-white/80 text-lg lg:text-xl leading-relaxed">
                        {feature_grid.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {feature_grid.features.map((item, i) => {
                        const Icon = iconMap[item.icon] || Target;
                        return (
                            <div key={i} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#E1F28F]/50 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1">
                                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0A2E22]/5 text-[#045C4E] group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-7 h-7 text-[#E1F28F] group-hover:text-[#0A2E22] transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-white/70 leading-relaxed text-sm">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
