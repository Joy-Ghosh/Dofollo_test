import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { AlertCircle, Clock, Layout, TrendingDown, CheckCircle2 } from 'lucide-react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

const iconMap: { [key: string]: React.ElementType } = {
    AlertCircle, Clock, Layout, TrendingDown
};

// Resolved icon map (paired with the problem icons)
const resolvedIconMap: { [key: string]: React.ElementType } = {
    AlertCircle: CheckCircle2,
    Clock: CheckCircle2,
    Layout: CheckCircle2,
    TrendingDown: CheckCircle2,
};

// Empathetic pain-to-gain copy overlay
const empathyData = [
    { hoursWasted: '3.5 hrs/week', savedWith: '12 min/week', color: 'from-red-500/20 to-transparent' },
    { hoursWasted: '2 hrs/week', savedWith: '5 min/week', color: 'from-orange-500/20 to-transparent' },
    { hoursWasted: '4 hrs/week', savedWith: '15 min/week', color: 'from-amber-500/20 to-transparent' },
    { hoursWasted: '5 hrs/week', savedWith: '20 min/week', color: 'from-red-600/20 to-transparent' },
];

const ProblemCard = React.memo(function ProblemCard({
    item,
    i,
    isMobile,
    activeIndex,
    onToggle,
}: {
    item: any;
    i: number;
    isMobile: boolean;
    activeIndex: number | null;
    onToggle: (i: number) => void;
}) {
    const Icon = iconMap[item.icon] || AlertCircle;
    const ResolvedIcon = resolvedIconMap[item.icon] || CheckCircle2;
    const [hovered, setHovered] = useState(false);
    const emp = empathyData[i] || empathyData[0];

    // On mobile, "open" is driven by activeIndex; on desktop, by hover
    const isOpen = isMobile ? activeIndex === i : hovered;
    const isPrimary = item.primary || false;
    
    // Highlight effect: if someone is hovered, others dim to 70%
    const isThisHovered = hovered;
    const isSomethingHovered = activeIndex !== null || hovered; 
    const isThisActive = isOpen;
    
    // Only apply dimming on desktop (when something is hovered)
    const shouldDim = isSomethingHovered && !isThisHovered && !isMobile;

    const handleMouseEnter = useCallback(() => {
        if (!isMobile) setHovered(true);
    }, [isMobile]);

    const handleMouseLeave = useCallback(() => {
        if (!isMobile) setHovered(false);
    }, [isMobile]);

    const handleClick = useCallback(() => {
        if (isMobile) onToggle(i);
    }, [isMobile, onToggle, i]);

    const comparisonStyles = useMemo(() => ({ 
        maxHeight: isOpen ? '200px' : '0px', 
        opacity: isOpen ? 1 : 0, 
        transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
        visibility: isOpen ? 'visible' : (isMobile ? 'hidden' : 'hidden') as any
    }), [isOpen, isMobile]);

    return (
        <div
            className={`relative h-full flex flex-col p-8 bg-white rounded-3xl border transition-all duration-700 group cursor-pointer overflow-hidden ${
                isThisActive
                    ? 'border-[#045C4E] shadow-[0_30px_70px_-15px_rgba(4,92,78,0.25)] z-20 scale-[1.03]'
                    : isPrimary && !isSomethingHovered
                        ? 'border-[#045C4E]/40 shadow-[0_10px_30px_-10px_rgba(4,92,78,0.1)] z-10'
                        : 'border-gray-200/60 shadow-sm'
            } ${shouldDim ? 'opacity-70 grayscale-[0.1] scale-[0.98]' : 'opacity-100 grayscale-0 scale-100'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {/* Animated border glow on active */}
            {isThisActive ? (
                <div className="absolute inset-0 bg-gradient-to-tr from-[#045C4E]/5 via-[#E1F28F]/10 to-transparent animate-pulse" />
            ) : null}

            {/* Emotional progress bar at top — fills green when open */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-100 overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-red-500 via-amber-400 to-[#045C4E] transition-all duration-1000 ease-out"
                    style={{ transform: `translateX(${isOpen ? '0%' : '-100%'})` }}
                />
            </div>

            {/* Icon — flips from problem to resolved with 3D effect */}
            <div className="relative w-16 h-16 mb-8" style={{ perspective: '1000px' }}>
                <div
                    className={`absolute inset-0 flex items-center justify-center bg-red-50/80 rounded-2xl transition-all duration-700 ${isOpen ? 'rotate-y-180 opacity-0 scale-75' : 'rotate-y-0 opacity-100 scale-100'}`}
                    style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', transform: isOpen ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                >
                    <Icon className="w-8 h-8 text-red-500" />
                </div>
                <div
                    className={`absolute inset-0 flex items-center justify-center bg-[#E1F28F] rounded-2xl transition-all duration-700 ${isOpen ? 'rotate-y-0 opacity-100 scale-100' : 'rotate-y--180 opacity-0 scale-75'}`}
                    style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', transform: isOpen ? 'rotateY(0deg)' : 'rotateY(-180deg)' }}
                >
                    <ResolvedIcon className="w-8 h-8 text-[#0A2E22]" />
                </div>
            </div>

            <h3 className={`text-2xl font-bold mb-4 transition-colors duration-500 ${isThisActive ? 'text-[#045C4E]' : 'text-[#0A2E22]'}`}>
                {item.title}
            </h3>
            
            <p className={`leading-relaxed text-base mb-8 relative z-10 flex-grow transition-colors duration-500 ${isThisActive ? 'text-[#0A2E22]/80' : 'text-[#0A2E22]/60'}`}>
                {item.description}
            </p>

            {/* Hours comparison — slides up when open */}
            <div
                className="grid grid-cols-2 gap-4 transition-all duration-700 ease-in-out"
                style={comparisonStyles}
            >
                <div className="p-4 bg-red-50 rounded-2xl border border-red-100">
                    <div className="text-sm font-black text-red-500 mb-1">{emp.hoursWasted}</div>
                    <div className="text-[10px] uppercase font-bold text-red-400 tracking-wider">Before Dofollo</div>
                </div>
                <div className="p-4 bg-[#E1F28F]/20 rounded-2xl border border-[#E1F28F]">
                    <div className="text-sm font-black text-[#045C4E] mb-1">{emp.savedWith}</div>
                    <div className="text-[10px] uppercase font-bold text-[#045C4E]/60 tracking-wider">With Dofollo</div>
                </div>
            </div>
        </div>
    );
});

export default function ProblemSection() {
    const { problem_section } = homeData;

    // Detect mobile (no hover capability / narrow viewport)
    const [isMobile, setIsMobile] = useState(false);
    // First card open by default on mobile
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    // For time animation
    const [timeInView, setTimeInView] = useState(false);
    const [animatedBefore, setAnimatedBefore] = useState(14.5);
    const [animatedAfter, setAnimatedAfter] = useState(52);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile, { passive: true });
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (timeInView) {
            // Animate only once when in view
            const duration = 2000;
            const steps = 60;
            const startTime = Date.now();
            
            const timer = setInterval(() => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease out expo
                const ease = 1 - Math.pow(2, -10 * progress);
                
                setAnimatedBefore(14.5 * ease);
                setAnimatedAfter(Math.floor(52 * ease));
                
                if (progress === 1) clearInterval(timer);
            }, 1000 / steps);
            
            return () => clearInterval(timer);
        }
    }, [timeInView]);

    const handleToggle = useCallback((i: number) => {
        setActiveIndex(prev => (prev === i ? null : i));
    }, []);

    const handleInView = useCallback(() => setTimeInView(true), []);

    return (
        <section className="py-24 md:py-32 bg-white text-[#0A2E22] relative overflow-hidden">
            {/* Top blend from dark Hero */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0A2E22]/8 to-transparent pointer-events-none" />
            
            <div className="container mx-auto px-4 relative z-10">
                <ScrollReveal variant="fade-up" className="text-center max-w-4xl mx-auto mb-16">
                    {/* Micro Hook */}
                    {problem_section.micro_hook ? (
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-500 font-bold text-sm tracking-tight mb-6 animate-bounce">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            {problem_section.micro_hook}
                        </div>
                    ) : null}
                    
                    <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 tracking-tight text-[#0A2E22] leading-[1.1]">
                        {problem_section.heading_first} <br/>
                        <span className="bg-gradient-to-r from-[#045C4E] to-[#0A2E22] bg-clip-text text-transparent">
                            {problem_section.heading_highlight}
                        </span>
                    </h2>
                    
                    <p className="text-xl lg:text-2xl text-[#0A2E22]/70 leading-relaxed max-w-3xl mx-auto">
                        {problem_section.subheading}
                    </p>
                </ScrollReveal>

                <div 
                    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-24 px-20 -mx-20 py-20 -my-20"
                    style={{ contentVisibility: 'auto', containIntrinsicSize: '0 400px' }}
                >
                    {problem_section.problems.map((item: any, i: number) => (
                        <ScrollReveal
                            key={item.title}
                            variant="fade-up"
                            delay={i * 0.1}
                            className="flex"
                        >
                            <ProblemCard
                                item={item}
                                i={i}
                                isMobile={isMobile}
                                activeIndex={activeIndex}
                                onToggle={handleToggle}
                            />
                        </ScrollReveal>
                    ))}
                </div>

                {/* Realization Line */}
                <ScrollReveal variant="fade-up" delay={0.6} className="text-center mb-20">
                    <p className="text-2xl lg:text-3xl font-medium text-[#0A2E22]/80 italic">
                        "{problem_section.realization_line}"
                    </p>
                    <div className="mt-4 w-24 h-1 bg-gradient-to-r from-transparent via-[#E1F28F] to-transparent mx-auto" />
                </ScrollReveal>

                {/* Upgraded Time Comparison */}
                <ScrollReveal 
                    variant="fade-up" 
                    delay={0.8} 
                    className="max-w-5xl mx-auto"
                    onInView={handleInView}
                >
                    <div className="text-center mb-8">
                        <h3 className="text-xl font-bold text-[#0A2E22]/60 uppercase tracking-widest">
                            {problem_section.comparison.title}
                        </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50/50 rounded-3xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
                        {/* Background subtle glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-red-500/5 via-transparent to-[#045C4E]/5 blur-3xl" />
                        
                        {/* Without Dofollo */}
                        <div className="relative z-10 space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="text-lg font-bold text-gray-500 uppercase tracking-tight">{problem_section.comparison.before}</span>
                                <span className="text-4xl font-black text-red-500 tabular-nums">
                                    {animatedBefore.toFixed(1)}<span className="text-xl">hrs</span>
                                </span>
                            </div>
                            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-red-400 transition-all duration-1000 ease-out" 
                                    style={{ width: timeInView ? '100%' : '0%' }}
                                />
                            </div>
                            <p className="text-sm font-medium text-gray-500 text-right">per week wasted on manual SEO</p>
                        </div>

                        {/* With Dofollo */}
                        <div className="relative z-10 space-y-4">
                            <div className="flex justify-between items-end">
                                <span className="text-lg font-bold text-[#045C4E] uppercase tracking-tight font-serif italic">{problem_section.comparison.after}</span>
                                <span className="text-4xl font-black text-[#045C4E] tabular-nums">
                                    {animatedAfter}<span className="text-xl">min</span>
                                </span>
                            </div>
                            <div className="h-4 bg-[#0A2E22]/10 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-gradient-to-r from-[#E1F28F] to-[#045C4E] transition-all duration-2000 ease-out" 
                                    style={{ width: timeInView ? '6%' : '0%' }}
                                />
                            </div>
                            <p className="text-sm font-medium text-[#045C4E]/70 text-right">to optimize your entire structure</p>
                        </div>

                        {/* Middle Arrow for Desktop */}
                        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-[#045C4E] z-20">
                            <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

