import React, { useEffect, useRef, useState } from 'react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

// Count-up hook
function useCountUp(target: number, duration = 1800, inView: boolean) {
    const [count, setCount] = useState(0);
    const startedRef = useRef(false);

    useEffect(() => {
        if (!inView || startedRef.current) return;
        startedRef.current = true;
        const start = performance.now();
        const raf = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
    }, [inView, target, duration]);

    return count;
}

// Parse metric value to a number and suffix
function parseMetric(value: string) {
    const match = value.match(/^([+%]?)(\d+(?:\.\d+)?)([k%+]?)(.*)$/);
    if (!match) return { prefix: '', num: 0, suffix: value };
    const [, pre, num, suf, rest] = match;
    return { prefix: pre, num: parseFloat(num), suffix: suf + rest };
}

function MetricCard({ metric, i, inView }: { metric: any; i: number; inView: boolean }) {
    const parsed = parseMetric(metric.value);
    const counted = useCountUp(parsed.num, 1800, inView);

    return (
        <div className="relative p-8 bg-white/5 rounded-2xl border border-white/10 shadow-sm hover:shadow-lg transition-all text-center group backdrop-blur-sm hover:bg-white/10 overflow-hidden">
            {/* Progress ring (decorative arc) */}
            <div className="absolute -top-4 -right-4 opacity-10">
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#E1F28F" strokeWidth="2" />
                    <circle
                        cx="50" cy="50" r="40" fill="none" stroke="#E1F28F" strokeWidth="3"
                        strokeDasharray={`${inView ? 200 : 0} 251`}
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                        style={{ transition: 'stroke-dasharray 1.8s cubic-bezier(0.16,1,0.3,1)' }}
                    />
                </svg>
            </div>

            <div
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#E1F28F] mb-2 relative z-10 tabular-nums group-hover:scale-110 transition-transform duration-300"
                style={{ transition: 'transform 0.3s' }}
            >
                {inView ? (
                    counted === parsed.num ? metric.value : `${parsed.prefix}${counted}${parsed.suffix}`
                ) : '0'}
            </div>
            <div className="text-sm font-bold tracking-wide uppercase text-white/60 relative z-10">{metric.label}</div>
        </div>
    );
}

function MetricWrapper({ metric, i }: { metric: any; i: number; key?: React.Key }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, { threshold: 0.4 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={ref}>
            <MetricCard metric={metric} i={i} inView={isVisible} />
        </div>
    );
}

export default function ImpactSection() {
    const { impact_section } = homeData;
    const { metrics } = impact_section;

    return (
        <section className="py-24 md:py-32 bg-[#0A2E22] text-white bg-noise">
            <div className="container mx-auto">
                <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E1F28F] font-bold text-xs uppercase tracking-wider mb-6">
                        {impact_section.badge}
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight text-white">
                        {impact_section.heading_first} <span className="text-[#E1F28F]">{impact_section.heading_highlight}</span>
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((m: any, i: number) => (
                        <MetricWrapper key={i} metric={m} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
