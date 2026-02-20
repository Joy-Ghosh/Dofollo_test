import React, { useEffect, useRef, useState } from 'react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

function useInView(threshold = 0.3) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);
    return { ref, inView };
}

function AnimatedBar({ width, delay = 0, color, inView }: { width: string; delay?: number; color: string; inView: boolean }) {
    return (
        <div className="w-full h-1.5 bg-[#0A2E22]/5 rounded-full overflow-hidden">
            <div
                className="h-full rounded-full transition-none"
                style={{
                    width: inView ? width : '0%',
                    background: color,
                    transition: inView ? `width 1.2s cubic-bezier(0.16,1,0.3,1) ${delay}s` : 'none',
                }}
            />
        </div>
    );
}

export default function CompetitorAnalysis() {
    const { competitor_analysis } = homeData;
    const { ref, inView } = useInView(0.2);

    return (
        <section className="py-24 bg-white text-[#0A2E22] relative overflow-hidden">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#045C4E]/5 rounded-full blur-[120px] pointer-events-none" />

 <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual side — animated comparison */}
                    <div className="order-2 lg:order-1 relative group" ref={ref}>
                        <div className="absolute inset-0 bg-[#045C4E]/10 blur-[60px] rounded-full group-hover:bg-[#045C4E]/20 transition-all duration-500"></div>

                        <div className="w-full bg-white rounded-2xl border border-[#0A2E22]/10 shadow-2xl flex flex-col relative overflow-hidden p-6 hover:border-[#045C4E]/30 transition-colors duration-500">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-[#0A2E22] font-bold flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#045C4E] animate-pulse" />
                                    {competitor_analysis.visual_title}
                                </h3>
                                <div className="text-xs font-mono text-[#045C4E] bg-[#045C4E]/10 px-3 py-1 rounded-full border border-[#045C4E]/20">
                                    {competitor_analysis.visual_badge}
                                </div>
                            </div>

                            <div className="space-y-4 font-mono text-sm">
                                {/* Competitor 1 */}
                                <div className="p-4 rounded-xl bg-[#0A2E22]/5 border border-[#0A2E22]/5 hover:bg-[#045C4E]/5 transition-colors cursor-pointer">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center font-bold">A</div>
                                            <span className="text-[#0A2E22] font-bold">ahrefs.com</span>
                                        </div>
                                        <span className="text-[#045C4E] font-bold text-xs">+12% Gap</span>
                                    </div>
                                    <AnimatedBar width="75%" delay={0.1} color="linear-gradient(90deg, #f97316, #ea580c)" inView={inView} />
                                    <div className="flex justify-between mt-2 text-xs text-[#0A2E22]/50">
                                        <span>DR 89</span><span>3.2k Keywords</span>
                                    </div>
                                </div>

                                {/* Competitor 2 */}
                                <div className="p-4 rounded-xl bg-[#0A2E22]/5 border border-[#0A2E22]/5 hover:bg-[#045C4E]/5 transition-colors cursor-pointer">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">S</div>
                                            <span className="text-[#0A2E22] font-bold">semrush.com</span>
                                        </div>
                                        <span className="text-[#045C4E] font-bold text-xs">+8% Gap</span>
                                    </div>
                                    <AnimatedBar width="60%" delay={0.3} color="linear-gradient(90deg, #60a5fa, #2563eb)" inView={inView} />
                                    <div className="flex justify-between mt-2 text-xs text-[#0A2E22]/50">
                                        <span>DR 92</span><span>2.1k Keywords</span>
                                    </div>
                                </div>

                                {/* Your Site — Rising with fanfare */}
                                <div
                                    className={`p-4 rounded-xl bg-[#0A2E22] border border-[#0A2E22]/20 mt-6 shadow-lg transition-all duration-700 ${inView ? 'scale-105 shadow-[0_0_30px_-5px_rgba(225,242,143,0.2)]' : 'scale-100'}`}
                                >
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#E1F28F] text-[#0A2E22] flex items-center justify-center font-bold">Y</div>
                                            <span className="text-white font-bold">Your Website</span>
                                        </div>
                                        <span className={`text-[#E1F28F] text-xs flex items-center gap-1 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#E1F28F] animate-pulse" />
                                            ▲ Rising
                                        </span>
                                    </div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-[#E1F28F] rounded-full"
                                            style={{
                                                width: inView ? '45%' : '0%',
                                                transition: 'width 1.5s cubic-bezier(0.16,1,0.3,1) 0.6s',
                                                boxShadow: '0 0 12px #E1F28F',
                                            }}
                                        />
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-[#E1F28F]/80">
                                        <span>DR 45</span>
                                        <span className={`transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
                                            ✓ Gap Closed
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copy side */}
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#045C4E]/5 border border-[#045C4E]/10 text-[#045C4E] text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#045C4E] animate-pulse"></span>
                            {competitor_analysis.badge}
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 leading-tight text-[#0A2E22]">
                            {competitor_analysis.heading_first} <br /><span className="text-[#045C4E]">{competitor_analysis.heading_highlight}</span>
                        </h2>
                        <p className="text-lg text-[#0A2E22]/70 mb-8 leading-relaxed">
                            {competitor_analysis.description}
                        </p>
                        <button className="group relative inline-flex items-center gap-2 text-[#045C4E] font-bold pb-1 overflow-hidden">
                            <span className="relative z-10 transition-colors group-hover:text-[#0A2E22]">{competitor_analysis.cta}</span>
                            <span className="absolute bottom-0 left-0 h-[2px] bg-[#045C4E] transition-all duration-300 group-hover:w-full group-hover:bg-[#0A2E22]" style={{ width: '100%' }}></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
