import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import homeData from '../data/pages/home.json';

export default function FinalCTA() {
    const { final_cta } = homeData;

    return (
        <section className="py-32 bg-[#0A2E22] text-white text-center relative overflow-hidden bg-noise">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E1F28F]/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Texture Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight drop-shadow-2xl">
                    {final_cta.heading_pre} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E1F28F] to-white">{final_cta.heading_highlight}</span> {final_cta.heading_post}
                </h2>
                <p className="text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                    {final_cta.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-[#E1F28F] text-[#0A2E22] px-10 h-14 rounded-full text-lg font-extrabold shadow-[0_0_20px_-5px_rgba(225,242,143,0.3)] hover:shadow-[0_0_40px_-10px_rgba(225,242,143,0.6)] hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative z-10">{final_cta.primary_btn}</span>
                        <ArrowUpRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>

                    <button className="px-8 h-14 rounded-full text-white font-bold border border-white/10 hover:bg-white/5 transition-colors">
                        {final_cta.secondary_btn}
                    </button>
                </div>

                <p className="mt-10 text-sm opacity-50 font-medium tracking-wide">
                    {final_cta.footer_note}
                </p>
            </div>
        </section>
    );
}
