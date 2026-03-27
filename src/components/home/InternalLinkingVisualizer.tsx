import React, { useEffect, useRef, useState } from 'react';
import { Link as LinkIcon, Globe, FileText, LayoutTemplate, Box, ArrowUpRight, AlertCircle, TrendingUp, ArrowRight } from 'lucide-react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

const InternalLinkingVisualizer = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [paths, setPaths] = useState<{ id: string; d: string; status: string }[]>([]);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    const { visualizer_section } = homeData;

    const data = {
        center: { id: 'center', label: visualizer_section.center_label, type: "hub" },
        inbound: visualizer_section.inbound_nodes,
        outbound: visualizer_section.outbound_nodes
    };

    const calculatePaths = () => {
        if (!containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const newPaths: { id: string; d: string; status: string }[] = [];

        const getPos = (id: string, side: 'left' | 'right') => {
            const el = document.getElementById(`node-${id}`);
            if (!el) return { x: 0, y: 0 };
            const rect = el.getBoundingClientRect();
            return {
                x: side === 'left' ? rect.left - containerRect.left : rect.right - containerRect.left,
                y: rect.top - containerRect.top + rect.height / 2
            };
        };

        const centerLeft = getPos('center', 'left');
        const centerRight = getPos('center', 'right');

        data.inbound.forEach((node) => {
            const start = getPos(node.id, 'right');
            const end = centerLeft;
            const control1 = { x: start.x + (end.x - start.x) * 0.5, y: start.y };
            const control2 = { x: end.x - (end.x - start.x) * 0.5, y: end.y };
            newPaths.push({
                id: `path-${node.id}`,
                status: node.status,
                d: `M ${start.x} ${start.y} C ${control1.x} ${control1.y}, ${control2.x} ${control2.y}, ${end.x} ${end.y}`
            });
        });

        data.outbound.forEach((node) => {
            const start = centerRight;
            const end = getPos(node.id, 'left');
            const control1 = { x: start.x + (end.x - start.x) * 0.5, y: start.y };
            const control2 = { x: end.x - (end.x - start.x) * 0.5, y: end.y };
            newPaths.push({
                id: `path-${node.id}`,
                status: node.status,
                d: `M ${start.x} ${start.y} C ${control1.x} ${control1.y}, ${control2.x} ${control2.y}, ${end.x} ${end.y}`
            });
        });

        setPaths(newPaths);
        setDimensions({ width: containerRect.width, height: containerRect.height });
    };

    useEffect(() => {
        calculatePaths();
        window.addEventListener('resize', calculatePaths);
        const timer = setTimeout(calculatePaths, 600);
        return () => {
            window.removeEventListener('resize', calculatePaths);
            clearTimeout(timer);
        };
    }, []);

    const getIcon = (type: string) => {
        switch (type) {
            case 'hub': return <Globe size={24} />;
            case 'blog': return <FileText size={18} />;
            case 'service': return <LayoutTemplate size={18} />;
            case 'product': return <Box size={18} />;
            default: return <LinkIcon size={18} />;
        }
    };

    return (
        <section className="py-24 md:py-32 bg-[#0A2E22] overflow-hidden relative border-t border-white/5">
            {/* Background — simplified */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0A2E22] to-transparent z-1"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                
                {/* ── HEADER ── */}
                <ScrollReveal variant="fade-up" className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#E1F28F] uppercase mb-4 block">
                        {visualizer_section.badge}
                    </span>
                    <h2 className="text-3xl lg:text-[44px] font-extrabold text-white mb-6 leading-[1.15]">
                        {visualizer_section.title}
                    </h2>
                    <p className="text-white/55 text-lg leading-relaxed max-w-xl mx-auto">
                        {visualizer_section.description}
                    </p>
                </ScrollReveal>

                {/* ── VISUALIZER ── */}
                <div className="relative min-h-[560px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0" ref={containerRef}>

                    {/* SVG Layer — paths are dimmed unless strong */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block" width={dimensions.width} height={dimensions.height}>
                        <defs>
                            <filter id="glow_node" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {paths.map(path => {
                            const isStrong = path.status === 'strong';
                            const isBroken = path.status === 'broken';
                            
                            return (
                                <g key={path.id} className="opacity-100">
                                    <path
                                        d={path.d}
                                        fill="none"
                                        stroke={isBroken ? "rgba(248,113,113,0.15)" : "rgba(255,255,255,0.04)"}
                                        strokeWidth="2"
                                        strokeDasharray={isBroken ? "5 5" : "0"}
                                    />

                                    {/* Link flow — only for strong/weak, not broken */}
                                    {!isBroken && (
                                        <path
                                            d={path.d}
                                            fill="none"
                                            stroke={isStrong ? "rgba(225, 242, 143, 0.35)" : "rgba(255,255,255,0.1)"}
                                            strokeWidth={isStrong ? "2" : "1"}
                                            strokeDasharray="12 12"
                                            className="opacity-70"
                                        >
                                            <animate
                                                attributeName="stroke-dashoffset"
                                                from="100"
                                                to="0"
                                                dur={isStrong ? "1.5s" : "4s"}
                                                repeatCount="indefinite"
                                            />
                                        </path>
                                    )}
                                </g>
                            );
                        })}
                    </svg>

                    {/* Zone 1: Inbound (Left) — Dimmed unless hovered */}
                    <div className="flex flex-col gap-12 w-full lg:w-72 z-10 order-1 relative">
                        <div className="text-white/30 text-[10px] uppercase font-bold tracking-widest text-center mb-2">
                            {visualizer_section.inbound_title}
                        </div>
                        {data.inbound.map((node) => {
                            const isWeak = node.status === 'weak';
                            return (
                                <div
                                    key={node.id}
                                    id={`node-${node.id}`}
                                    className={`group relative border rounded-xl flex items-center gap-3.5 p-4 transition-all duration-400 cursor-default ${
                                        isWeak 
                                           ? 'bg-[#0A2E22]/40 border-white/5 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:border-white/20' 
                                           : 'bg-[#0A2E22] border-white/10 opacity-70 hover:opacity-100 hover:border-[#E1F28F]/40'
                                    }`}
                                    onMouseEnter={() => setHoveredNode(node.id)}
                                    onMouseLeave={() => setHoveredNode(null)}
                                >
                                    <div className={`p-2 rounded-lg transition-colors ${isWeak ? 'bg-white/5 text-white/30' : 'bg-white/8 text-white/60 group-hover:text-[#E1F28F]'}`}>
                                        {getIcon(node.type)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="text-[13px] font-semibold text-white/90 group-hover:text-white block truncate">{node.label}</span>
                                        {isWeak && (
                                            <span className="text-[9px] font-bold text-white/30 uppercase tracking-tight">
                                                {visualizer_section.annotations.weak}
                                            </span>
                                        )}
                                    </div>
                                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white/10 rounded-full hidden lg:block" />
                                </div>
                            );
                        })}
                    </div>

                    {/* Zone 2: Center (Hub) — THE FOCUS POINT */}
                    <div className="relative z-20 order-2 flex flex-col items-center">
                        <div className="text-[#E1F28F] text-[10px] uppercase font-bold tracking-[0.2em] text-center mb-8">
                            Site Foundation
                        </div>

                        <div
                            id={`node-${data.center.id}`}
                            className="relative w-72 lg:w-96 aspect-square rounded-full flex flex-col items-center justify-center text-center p-12 bg-[#045C4E]/20 border-2 border-[#E1F28F]/40 shadow-[0_0_80px_rgba(225,242,143,0.12)] transition-transform duration-700 hover:scale-[1.03]"
                            style={{ filter: 'url(#glow_node)' }}
                        >
                            {/* Static Pulse */}
                            <div className="absolute inset-0 rounded-full border border-[#E1F28F]/15"></div>
                            <div className="absolute -inset-4 rounded-full border border-[#E1F28F]/5 animate-pulse"></div>

                            <div className="mb-6 p-5 bg-[#E1F28F] rounded-2xl text-[#0A2E22] shadow-[0_0_40px_rgba(225,242,143,0.4)]">
                                {getIcon(data.center.type)}
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-black text-white mb-2 leading-none">{data.center.label}</h3>
                            <p className="text-[#E1F28F]/60 text-xs font-bold uppercase tracking-widest">{data.center.label} Hub</p>
                        </div>

                        {/* Aha moment line */}
                        <ScrollReveal variant="fade-up" delay={0.2} className="mt-12 text-center max-w-sm">
                            <p className="text-sm font-medium text-white/60 leading-relaxed italic">
                                "{visualizer_section.insight_line}"
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Zone 3: Outbound (Right) — Highlight Broken */}
                    <div className="flex flex-col gap-12 w-full lg:w-72 z-10 order-3 relative">
                        <div className="text-white/30 text-[10px] uppercase font-bold tracking-widest text-center mb-2">
                            {visualizer_section.outbound_title}
                        </div>
                        {data.outbound.map((node) => {
                            const isBroken = node.status === 'broken';
                            const isWeak = node.status === 'weak';
                            
                            return (
                                <div
                                    key={node.id}
                                    id={`node-${node.id}`}
                                    className={`group relative border rounded-xl flex items-center gap-3.5 p-4 transition-all duration-400 cursor-default ${
                                        isBroken
                                           ? 'bg-red-500/5 border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.05)]'
                                           : isWeak
                                           ? 'bg-[#0A2E22]/40 border-white/5 opacity-50 grayscale hover:grayscale-0 hover:opacity-100'
                                           : 'bg-[#0A2E22] border-white/10 opacity-70 hover:opacity-100 hover:border-[#E1F28F]/40'
                                    }`}
                                    onMouseEnter={() => setHoveredNode(node.id)}
                                    onMouseLeave={() => setHoveredNode(null)}
                                >
                                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white/10 rounded-full hidden lg:block" />

                                    <div className={`p-2 rounded-lg ${
                                        isBroken ? 'bg-red-500/10 text-red-400' : isWeak ? 'bg-white/5 text-white/30' : 'bg-white/8 text-white/60 group-hover:text-[#E1F28F]'
                                    }`}>
                                        {isBroken ? <AlertCircle size={18} /> : getIcon(node.type)}
                                    </div>
                                    
                                    <div className="flex-1 min-w-0">
                                        <span className={`text-[13px] font-semibold block truncate ${isBroken ? 'text-red-200' : 'text-white/90 group-hover:text-white'}`}>
                                            {node.label}
                                        </span>
                                        {isBroken ? (
                                             <span className="text-[9px] font-bold text-red-400/80 uppercase tracking-tight">
                                                {visualizer_section.annotations.broken}
                                            </span>
                                        ) : isWeak ? (
                                            <span className="text-[9px] font-bold text-white/30 uppercase tracking-tight">
                                                {visualizer_section.annotations.weak}
                                            </span>
                                        ) : (
                                            <span className="text-[9px] font-bold text-emerald-400/60 uppercase tracking-tight flex items-center gap-1">
                                                <TrendingUp size={10} /> {visualizer_section.annotations.strong}
                                            </span>
                                        )}
                                    </div>
                                    
                                    <ArrowUpRight className={`w-3.5 h-3.5 opacity-20 group-hover:opacity-100 transition-all ${isBroken ? 'text-red-400' : 'text-[#E1F28F]'}`} />
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* ── FOOTER CTA ── */}
                <ScrollReveal variant="fade-up" delay={0.4} className="mt-20 text-center">
                    <a 
                        href="https://dash.dofollo.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-[#E1F28F] font-bold text-base hover:text-white transition-colors group"
                    >
                        {visualizer_section.cta_text}
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default InternalLinkingVisualizer;
