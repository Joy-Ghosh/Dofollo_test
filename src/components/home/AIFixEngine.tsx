import React, { useState } from 'react';
import { Wrench, ExternalLink, Link as LinkIcon, FileWarning, AlignLeft, AlertCircle, Sparkles, ChevronRight } from 'lucide-react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

const iconMap: Record<string, any> = {
    'Broken Link': FileWarning,
    'Link Structure': LinkIcon,
    'Anchor Text': AlignLeft,
    'Orphan Page': AlertCircle,
};

const severityColors: Record<string, string> = {
    high: 'bg-red-400/20 text-red-400 border-red-400/30',
    medium: 'bg-amber-400/20 text-amber-400 border-amber-400/30',
    low: 'bg-blue-400/20 text-blue-400 border-blue-400/30',
};

export default function AIFixEngine() {
    const data = (homeData as any).ai_fix_engine;
    const [applied, setApplied] = useState<Record<number, boolean>>({});

    const handleFix = (i: number) => {
        setApplied(prev => ({ ...prev, [i]: true }));
    };

    return (
        <section className="py-24 bg-[#0A2E22] text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <ScrollReveal variant="fade-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/[0.06] text-[#E1F28F] font-bold text-xs uppercase tracking-normal mb-8">
                            <Sparkles className="w-3.5 h-3.5" />
                            AI Fix Engine
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-9 tracking-tight leading-tight">
                            {data.title_first} <br />
                            <span className="text-[#E1F28F]">{data.title_highlight}</span>
                        </h2>
                        <p className="text-lg text-white/70 leading-[1.7] max-w-lg">
                            {data.description}
                        </p>
                    </ScrollReveal>

                    {/* Right: Fix Cards UI */}
                    <ScrollReveal variant="slide-left" delay={0.1}>
                        <div className="space-y-4">
                            {/* Label above UI */}
                            <div className="flex flex-col gap-1.5 px-1">
                                <span className="text-[#E1F28F] font-bold text-sm tracking-tight">{data.ui_label}</span>
                                <span className="text-white/30 text-[10px] tracking-[0.1em] uppercase font-bold">{data.ui_micro_text}</span>
                            </div>

                            <div className="bg-[#0D261F] border border-white/[0.06] rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
                                {/* Header */}
                                <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06] bg-white/[0.03]">
                                    <div className="flex items-center gap-2">
                                        <Wrench className="w-4 h-4 text-[#E1F28F]" />
                                        <span className="text-sm font-extrabold tracking-tight">AI Fix Engine</span>
                                    </div>
                                    <span className="text-[11px] text-white/40 font-mono tracking-tight">{data.issues.length} issues detected</span>
                                </div>

                                <div className="divide-y divide-white/[0.06]">
                                    {(data.issues as any[]).map((item, i) => {
                                        const Icon = iconMap[item.type] || Sparkles;
                                        return (
                                            <div
                                                key={i}
                                                className={`px-5 py-4 transition-all ${
                                                    applied[i] ? 'bg-[#E1F28F]/5' : (i === 0 ? 'bg-white/[0.03]' : 'opacity-90 hover:bg-white/[0.02]')
                                                }`}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                                                        <Icon className={`w-4 h-4 ${applied[i] ? 'text-[#E1F28F]' : 'text-white/40'}`} />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 mb-1.5">
                                                            <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${severityColors[item.severity]}`}>
                                                                {item.type}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs font-mono text-white/30 truncate mb-1">{item.page}</p>
                                                        <p className="text-xs text-white/70 font-medium leading-relaxed">{item.detail}</p>
                                                    </div>
                                                    <button
                                                        onClick={() => handleFix(i)}
                                                        className={`shrink-0 flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all relative ${
                                                            applied[i]
                                                                ? 'bg-[#E1F28F]/20 text-[#E1F28F] border border-[#E1F28F]/30'
                                                                : 'bg-[#E1F28F]/90 text-[#0A2E22] hover:bg-white active:scale-95'
                                                        } ${item.highlight && !applied[i] ? 'ring-2 ring-[#E1F28F]/50 ring-offset-2 ring-offset-[#0D261F]' : ''}`}
                                                    >
                                                        {applied[i] ? (
                                                            <>✓ Applied</>
                                                        ) : (
                                                            <>
                                                                <Sparkles className="w-3 h-3" />
                                                                {item.fix}
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="px-5 py-6 border-t border-white/[0.06] bg-white/[0.05]">
                                    <div className="text-center mb-5">
                                        <p className="text-xs text-[#E1F28F]/90 font-bold tracking-widest uppercase">{data.cta_trigger}</p>
                                    </div>
                                    <a
                                        href="https://dash.dofollo.ai/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 w-full py-5 bg-[#E1F28F] text-[#0A2E22] rounded-xl font-black text-sm transition-all group scale-[1] hover:scale-[1.02] shadow-[0_10px_30px_rgba(225,242,143,0.2)] hover:shadow-[0_15px_40px_rgba(225,242,143,0.35)]"
                                    >
                                        {data.cta_text} <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
