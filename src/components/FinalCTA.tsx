import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import homeData from '../data/pages/home.json';

// Social proof ticker items
const TICKER_ITEMS = [
    '🟢 Sarah K. just started her free trial',
    '⚡ Marcus upgraded to Pro · 3m ago',
    '🎯 Priya landed #1 for target keyword',
    '🟢 James added 40+ internal links in 2min',
    '📈 Tejas saw +28% organic traffic this week',
    '🟢 Anna just started her free trial',
    '⚡ Luis upgraded to Pro · 7m ago',
    '🎯 Chen recovered 200+ orphaned pages',
];

// Letter-by-letter reveal component
function SplitText({ text, inView, baseDelay = 0 }: { text: string; inView: boolean; baseDelay?: number }) {
    return (
        <span>
            {text.split('').map((ch, i) => (
                <span
                    key={i}
                    className={ch === ' ' ? 'inline-block w-[0.35em]' : 'letter-reveal-char'}
                    style={inView ? { animationDelay: `${baseDelay + i * 0.03}s` } : { opacity: 0 }}
                >
                    {ch === ' ' ? '\u00A0' : ch}
                </span>
            ))}
        </span>
    );
}

interface FinalCTAProps {
    headingPre?: string;
    headingHighlight?: string;
    headingPost?: string;
    description?: string;
    primaryBtn?: string;
    secondaryBtn?: string;
    footerNote?: string;
}

export default function FinalCTA({ headingPre, headingHighlight, headingPost, description, primaryBtn, secondaryBtn, footerNote }: FinalCTAProps = {}) {
    const { final_cta } = homeData;
    const pre = headingPre ?? final_cta.heading_pre;
    const highlight = headingHighlight ?? final_cta.heading_highlight;
    const post = headingPost ?? final_cta.heading_post;
    const desc = description ?? final_cta.description;
    const pBtn = primaryBtn ?? final_cta.primary_btn;
    const sBtn = secondaryBtn ?? final_cta.secondary_btn;
    const note = footerNote ?? final_cta.footer_note;

    const sectionRef = useRef<HTMLElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    // Duplicate ticker items for infinite loop
    const allTicker = [...TICKER_ITEMS, ...TICKER_ITEMS];

    return (
        <section ref={sectionRef} className="py-32 bg-[#0A2E22] text-white text-center relative overflow-hidden bg-noise">

            {/* Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E1F28F]/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Orbiting Rings */}
            <div className="absolute top-1/2 left-1/2 pointer-events-none z-0">
                {/* Ring 1 */}
                <div
                    className="animate-orbit"
                    style={{
                        position: 'absolute',
                        width: '600px',
                        height: '300px',
                        border: '1px solid rgba(225,242,143,0.08)',
                        borderRadius: '50%',
                    }}
                />
                {/* Ring 2 */}
                <div
                    className="animate-orbit-reverse"
                    style={{
                        position: 'absolute',
                        width: '800px',
                        height: '400px',
                        border: '1px dashed rgba(225,242,143,0.05)',
                        borderRadius: '50%',
                        animationDuration: '20s',
                    }}
                />
                {/* Ring 3 */}
                <div
                    className="animate-orbit"
                    style={{
                        position: 'absolute',
                        width: '450px',
                        height: '220px',
                        border: '1px solid rgba(255,255,255,0.04)',
                        borderRadius: '50%',
                        animationDuration: '16s',
                    }}
                />
            </div>

            {/* Texture Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Letter-reveal headline */}
                <h2 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight drop-shadow-2xl" style={{ perspective: '600px' }}>
                    <SplitText text={pre + ' '} inView={inView} baseDelay={0.1} />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E1F28F] to-white">
                        <SplitText text={highlight} inView={inView} baseDelay={0.1 + (pre.length + 1) * 0.03} />
                    </span>
                    {post && (
                        <>
                            {' '}
                            <SplitText text={post} inView={inView} baseDelay={0.1 + (pre.length + 1 + highlight.length + 1) * 0.03} />
                        </>
                    )}
                </h2>

                <p className="text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                    {desc}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    {/* Primary — breathing glow */}
                    <button className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-[#E1F28F] text-[#0A2E22] px-10 h-14 rounded-full text-lg font-extrabold animate-breathe hover:scale-[1.05] transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative z-10">{pBtn}</span>
                        <ArrowUpRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>

                    <button className="px-8 h-14 rounded-full text-white font-bold border border-white/10 hover:bg-white/5 transition-colors">
                        {sBtn}
                    </button>
                </div>

                <p className="mt-10 text-sm opacity-50 font-medium tracking-wide">{note}</p>

                {/* Social proof ticker */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="text-xs text-white/30 uppercase tracking-widest mb-4 font-bold">
                        Happening right now
                    </div>
                    <div className="overflow-hidden relative">
                        {/* Fade masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A2E22] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A2E22] to-transparent z-10 pointer-events-none" />
                        <div className="flex animate-ticker whitespace-nowrap">
                            {allTicker.map((item, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center gap-3 text-sm text-white/60 font-medium mr-12 shrink-0"
                                >
                                    {item}
                                    <span className="w-1 h-1 rounded-full bg-white/20" />
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
