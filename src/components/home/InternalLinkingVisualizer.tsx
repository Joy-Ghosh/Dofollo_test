import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Link as LinkIcon, Globe, FileText, LayoutTemplate, Box, ArrowUpRight } from 'lucide-react';

const InternalLinkingVisualizer = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [paths, setPaths] = useState<{ id: string; d: string }[]>([]);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    // Data Structure
    const data = {
        center: { id: 'center', label: "Homepage", type: "hub" },
        inbound: [
            { id: 'in-1', label: "Blog Post: SEO Tips", type: "blog" },
            { id: 'in-2', label: "Support: How-to Guide", type: "support" },
            { id: 'in-3', label: "Category: Marketing", type: "category" }
        ],
        outbound: [
            { id: 'out-1', label: "Service: Audit", type: "service" },
            { id: 'out-2', label: "Landing Page: eBook", type: "landing" },
            { id: 'out-3', label: "Product: Pro Plan", type: "product" }
        ]
    };

    // Calculate paths on mount and resize
    const calculatePaths = () => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const newPaths: { id: string; d: string }[] = [];

        // Helper to get element position relative to container
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

        // Inbound Paths (Left -> Center)
        data.inbound.forEach((node) => {
            const start = getPos(node.id, 'right');
            const end = centerLeft;
            const control1 = { x: start.x + (end.x - start.x) * 0.5, y: start.y };
            const control2 = { x: end.x - (end.x - start.x) * 0.5, y: end.y };
            newPaths.push({
                id: `path-${node.id}`,
                d: `M ${start.x} ${start.y} C ${control1.x} ${control1.y}, ${control2.x} ${control2.y}, ${end.x} ${end.y}`
            });
        });

        // Outbound Paths (Center -> Right)
        data.outbound.forEach((node) => {
            const start = centerRight;
            const end = getPos(node.id, 'left');
            const control1 = { x: start.x + (end.x - start.x) * 0.5, y: start.y };
            const control2 = { x: end.x - (end.x - start.x) * 0.5, y: end.y };
            newPaths.push({
                id: `path-${node.id}`,
                d: `M ${start.x} ${start.y} C ${control1.x} ${control1.y}, ${control2.x} ${control2.y}, ${end.x} ${end.y}`
            });
        });

        setPaths(newPaths);
        setDimensions({ width: containerRect.width, height: containerRect.height });
    };

    useEffect(() => {
        calculatePaths();
        window.addEventListener('resize', calculatePaths);
        // Recalculate after a slight delay to ensure layout is stable
        const timer = setTimeout(calculatePaths, 500);
        return () => {
            window.removeEventListener('resize', calculatePaths);
            clearTimeout(timer);
        };
    }, []);

    // Icon mapping
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
        <section className="py-24 bg-[#0A2E22] overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#E1F28F] font-bold tracking-wider uppercase text-sm mb-2 block">Visualizing Architecture</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Internal Linking Logic</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">See how authority flows through your site structure with intelligent linking.</p>
                </div>

                {/* Visualization Container */}
                <div className="relative min-h-[600px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0" ref={containerRef}>

                    {/* SVG Layer */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block" width={dimensions.width} height={dimensions.height}>
                        <defs>
                            <linearGradient id="linkGradient" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                                <stop offset="100%" stopColor="rgba(225, 242, 143, 0.5)" />
                            </linearGradient>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="2" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {paths.map(path => (
                            <g key={path.id}>
                                {/* Base path */}
                                <path
                                    d={path.d}
                                    fill="none"
                                    stroke="rgba(255,255,255,0.05)"
                                    strokeWidth="2"
                                />

                                {/* Animated path */}
                                <path
                                    d={path.d}
                                    fill="none"
                                    stroke={hoveredNode && path.id.includes(hoveredNode) ? "#E1F28F" : "rgba(225, 242, 143, 0.4)"}
                                    strokeWidth={hoveredNode && path.id.includes(hoveredNode) ? "3" : "1.5"}
                                    strokeDasharray="10 5"
                                    className="opacity-60"
                                >
                                    <animate
                                        attributeName="stroke-dashoffset"
                                        from="100"
                                        to="0"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    />
                                </path>

                                {/* Moving Dot */}
                                <circle r="4" fill="#E1F28F" filter="url(#glow)">
                                    <animateMotion
                                        dur={hoveredNode && path.id.includes(hoveredNode) ? "1s" : "3s"}
                                        repeatCount="indefinite"
                                        path={path.d}
                                        keyPoints="0;1"
                                        keyTimes="0;1"
                                        calcMode="linear"
                                    />
                                </circle>
                            </g>
                        ))}
                    </svg>

                    {/* Zone 1: Inbound (Left) */}
                    <div className="flex flex-col gap-8 lg:gap-16 w-full lg:w-64 z-10 order-1 relative">
                        {/* Mobile Vertical Line */}
                        <div className="absolute left-8 top-10 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#E1F28F]/20 to-[#E1F28F]/20 lg:hidden -z-10"></div>

                        <div className="text-white/40 text-xs uppercase font-bold tracking-widest text-center mb-2 lg:mb-4 lg:hidden">Link Sources</div>
                        <div className="text-white/40 text-xs uppercase font-bold tracking-widest text-center mb-2 lg:mb-4 hidden lg:block">Link Sources</div>
                        {data.inbound.map((node) => (
                            <div
                                key={node.id}
                                id={`node-${node.id}`}
                                className="group relative bg-[#0A2E22] border border-white/10 hover:border-[#E1F28F]/50 p-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(225,242,143,0.1)] cursor-default"
                                onMouseEnter={() => setHoveredNode(node.id)}
                                onMouseLeave={() => setHoveredNode(null)}
                            >
                                <div className="p-2 bg-white/5 rounded-lg text-white/70 group-hover:text-[#E1F28F] transition-colors">
                                    {getIcon(node.type)}
                                </div>
                                <span className="text-sm font-medium text-white/90 group-hover:text-white">{node.label}</span>

                                {/* Connection Point (Right) */}
                                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/20 rounded-full hidden lg:block" />
                            </div>
                        ))}
                    </div>

                    {/* Zone 2: Center Hub */}
                    <div className="relative z-20 order-2 mb-8 lg:mb-0 lg:mx-0 my-8 lg:my-0">
                        <div className="text-[#E1F28F] text-xs uppercase font-bold tracking-widest text-center mb-6 lg:mb-8 absolute -top-12 left-1/2 -translate-x-1/2 w-full">Current Page</div>

                        <div
                            id={`node-${data.center.id}`}
                            className="relative w-64 lg:w-80 aspect-square rounded-full flex flex-col items-center justify-center text-center p-8 bg-[#0A2E22] border-2 border-[#E1F28F]/20 shadow-[0_0_50px_rgba(225,242,143,0.1)] transition-transform duration-500 hover:scale-105"
                        >
                            {/* Pulse Effect */}
                            <div className="absolute inset-0 rounded-full border border-[#E1F28F]/10 animate-ping opacity-20" style={{ animationDuration: '3s' }}></div>
                            <div className="absolute inset-4 rounded-full border border-[#E1F28F]/20"></div>

                            <div className="mb-4 p-4 bg-[#E1F28F]/10 rounded-2xl text-[#E1F28F]">
                                {getIcon(data.center.type)}
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{data.center.label}</h3>
                            <p className="text-white/50 text-sm">Central Authority Hub</p>

                            {/* Connection Points */}
                            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#E1F28F] rounded-full hidden lg:block shadow-[0_0_10px_#E1F28F]" />
                            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#E1F28F] rounded-full hidden lg:block shadow-[0_0_10px_#E1F28F]" />
                        </div>
                    </div>

                    {/* Zone 3: Outbound (Right) */}
                    <div className="flex flex-col gap-8 lg:gap-16 w-full lg:w-64 z-10 order-3 relative">
                        {/* Mobile Vertical Line */}
                        <div className="absolute left-8 top-0 bottom-10 w-0.5 bg-gradient-to-b from-[#E1F28F]/20 via-[#E1F28F]/20 to-transparent lg:hidden -z-10"></div>

                        <div className="text-white/40 text-xs uppercase font-bold tracking-widest text-center mb-2 lg:mb-4">Link Targets</div>
                        {data.outbound.map((node) => (
                            <div
                                key={node.id}
                                id={`node-${node.id}`}
                                className="group relative bg-[#0A2E22] border border-white/10 hover:border-[#E1F28F]/50 p-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(225,242,143,0.1)] cursor-default"
                                onMouseEnter={() => setHoveredNode(node.id)}
                                onMouseLeave={() => setHoveredNode(null)}
                            >
                                {/* Connection Point (Left) */}
                                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/20 rounded-full hidden lg:block" />

                                <div className="p-2 bg-white/5 rounded-lg text-white/70 group-hover:text-[#E1F28F] transition-colors">
                                    {getIcon(node.type)}
                                </div>
                                <span className="text-sm font-medium text-white/90 group-hover:text-white">{node.label}</span>
                                <ArrowUpRight className="w-4 h-4 text-white/20 ml-auto group-hover:text-[#E1F28F] transition-colors" />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InternalLinkingVisualizer;
