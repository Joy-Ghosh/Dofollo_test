import React, { useState } from 'react';
import { Wrench, ExternalLink, Link as LinkIcon, FileWarning, AlignLeft, AlertCircle, Sparkles, ChevronRight } from 'lucide-react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

const fixes = [
    {
        icon: FileWarning,
        type: 'Broken Link',
        page: '/blog/technical-seo-guide',
        detail: 'Link to /old-page returns 404',
        severity: 'high',
        fix: 'Fix Broken Link',
    },
    {
        icon: LinkIcon,
        type: 'Internal Link',
        page: '/services/site-audit',
        detail: '0 inbound internal links detected',
        severity: 'medium',
        fix: 'Add Internal Links',
    },
    {
        icon: AlignLeft,
        type: 'Anchor Text',
        page: '/blog/seo-tips',
        detail: 'Over-optimized: "click here" used 8×',
        severity: 'medium',
        fix: 'Improve Anchor Text',
    },
    {
        icon: AlertCircle,
        type: 'Canonical Issue',
        page: '/products/',
        detail: 'Self-referencing canonical missing',
        severity: 'low',
        fix: 'Resolve Canonical',
    },
];

const severityColors: Record<string, string> = {
    high: 'bg-red-100 text-red-600 border-red-200',
    medium: 'bg-amber-50 text-amber-600 border-amber-200',
    low: 'bg-blue-50 text-blue-500 border-blue-200',
};

export default function AIFixEngine() {
    const data = (homeData as any).ai_fix_engine;
    const [applied, setApplied] = useState<Record<number, boolean>>({});

    const handleFix = (i: number) => {
        setApplied(prev => ({ ...prev, [i]: true }));
    };

    return (
        <section className="py-24 bg-[#0A2E22] text-white overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <ScrollReveal variant="fade-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E1F28F] font-bold text-xs uppercase tracking-wider mb-8">
                            <Sparkles className="w-3.5 h-3.5" />
                            AI Fix Engine
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                            {data.title_first} <br />
                            <span className="text-[#E1F28F]">{data.title_highlight}</span>
                        </h2>
                        <p className="text-lg text-white/70 leading-relaxed mb-10">
                            {data.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Issues Fixed', value: '2.4M+' },
                                { label: 'Links Added', value: '890K+' },
                                { label: 'Time Saved', value: '40hr/mo' },
                                { label: 'Sites Scanned', value: '12K+' },
                            ].map((stat, i) => (
                                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#E1F28F]/30 transition-colors">
                                    <div className="text-2xl font-extrabold text-[#E1F28F]">{stat.value}</div>
                                    <div className="text-xs text-white/50 mt-1 uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Right: Fix Cards UI */}
                    <ScrollReveal variant="fade-left" delay={0.1}>
                        <div className="bg-[#0D261F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                            {/* Header */}
                            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/5">
                                <div className="flex items-center gap-2">
                                    <Wrench className="w-4 h-4 text-[#E1F28F]" />
                                    <span className="text-sm font-bold">AI Fix Engine</span>
                                </div>
                                <span className="text-xs text-white/40 font-mono">4 issues detected</span>
                            </div>

                            <div className="divide-y divide-white/5">
                                {fixes.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`px-5 py-4 transition-colors ${applied[i] ? 'bg-[#E1F28F]/5' : 'hover:bg-white/5'}`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <item.icon className={`w-4 h-4 ${applied[i] ? 'text-[#E1F28F]' : 'text-white/50'}`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${severityColors[item.severity]}`}>
                                                        {item.type}
                                                    </span>
                                                </div>
                                                <p className="text-xs font-mono text-white/50 truncate mb-1">{item.page}</p>
                                                <p className="text-xs text-white/60">{item.detail}</p>
                                            </div>
                                            <button
                                                onClick={() => handleFix(i)}
                                                className={`shrink-0 flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                                                    applied[i]
                                                        ? 'bg-[#E1F28F]/20 text-[#E1F28F] border border-[#E1F28F]/30'
                                                        : 'bg-[#E1F28F] text-[#0A2E22] hover:bg-white'
                                                }`}
                                            >
                                                {applied[i] ? (
                                                    <>✓ Applied</>
                                                ) : (
                                                    <>
                                                        <Sparkles className="w-3 h-3" />
                                                        Fix Now
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="px-5 py-4 border-t border-white/10 bg-white/[0.02]">
                                <a
                                    href="https://dash.dofollo.ai/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#E1F28F] text-[#0A2E22] rounded-xl font-bold text-sm hover:bg-white transition-colors"
                                >
                                    Apply All AI Suggestions <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
