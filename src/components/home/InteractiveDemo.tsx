import React, { useState, useRef } from 'react';
import { Search, Loader2, AlertCircle, Link as LinkIcon, Eye, ArrowUpRight, CheckCircle2, Globe, Zap, Shield } from 'lucide-react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

type Phase = 'idle' | 'scanning' | 'done';

const SCAN_STEPS = [
  { text: 'Connecting to website…', icon: '🌐' },
  { text: 'Crawling page structure…', icon: '📄' },
  { text: 'Detecting broken links…', icon: '🔗' },
  { text: 'Finding orphan pages…', icon: '👁️' },
  { text: 'Mapping link opportunities…', icon: '🗺️' },
  { text: 'Running AI analysis…', icon: '🤖' },
  { text: 'Generating report…', icon: '📊' },
];

const TRUST_BADGES = [
  { icon: Shield, label: 'No data stored' },
  { icon: Zap, label: 'Instant results' },
  { icon: Globe, label: 'Any website' },
];

export default function InteractiveDemo() {
  const data = (homeData as any).interactive_demo;
  const [url, setUrl] = useState('');
  const [phase, setPhase] = useState<Phase>('idle');
  const [stepIdx, setStepIdx] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startScan = () => {
    if (!url.trim()) return;
    setPhase('scanning');
    setStepIdx(0);
    let idx = 0;
    intervalRef.current = setInterval(() => {
      idx++;
      setStepIdx(idx);
      if (idx >= SCAN_STEPS.length - 1) {
        clearInterval(intervalRef.current!);
        setTimeout(() => setPhase('done'), 600);
      }
    }, 450);
  };

  const reset = () => {
    setPhase('idle');
    setUrl('');
    setStepIdx(0);
  };

  return (
    <section className="py-24 md:py-32 bg-[#0A2E22] text-white relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E1F28F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <ScrollReveal variant="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E1F28F] font-bold text-xs uppercase tracking-wider mb-6">
            <Eye className="w-3.5 h-3.5" />
            Interactive Demo
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
            {data.title_first}{' '}
            <span className="text-[#E1F28F]">{data.title_highlight}</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            {data.description}
          </p>
          {/* Trust badges */}
          <div className="flex items-center justify-center gap-4 mt-6">
            {TRUST_BADGES.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="flex items-center gap-1.5 text-xs text-white/40">
                  <Icon className="w-3.5 h-3.5 text-[#E1F28F]/60" />
                  {b.label}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale-up" delay={0.1}>
          <div className="bg-[#0D261F] rounded-3xl border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] p-8 md:p-10 relative overflow-hidden">
            {/* Top shimmer line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E1F28F]/30 to-transparent" />

            {/* IDLE STATE */}
            {phase === 'idle' && (
              <div>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#E1F28F]/10 border border-[#E1F28F]/20 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-7 h-7 text-[#E1F28F]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Enter your website URL</h3>
                  <p className="text-sm text-white/40">See Dofollo's AI analysis in action</p>
                </div>
                <div className="flex gap-3 max-w-xl mx-auto">
                  <div className="flex-1 relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                    <input
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={url}
                      onChange={e => setUrl(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && startScan()}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/10 bg-white/5 text-white placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-[#E1F28F]/30 focus:border-[#E1F28F]/30 text-base font-medium transition-all"
                    />
                  </div>
                  <button
                    onClick={startScan}
                    disabled={!url.trim()}
                    className="px-6 py-4 bg-[#E1F28F] text-[#0A2E22] rounded-2xl font-extrabold text-sm hover:bg-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap flex items-center gap-2"
                  >
                    Scan Site <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-center text-xs text-white/25 mt-4">
                  This is a simulation — no real data is collected or stored.
                </p>
              </div>
            )}

            {/* SCANNING STATE */}
            {phase === 'scanning' && (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-2xl bg-[#0A2E22] border border-[#E1F28F]/20 flex items-center justify-center mx-auto mb-6">
                  <Loader2 className="w-8 h-8 text-[#E1F28F] animate-spin" />
                </div>
                <h3 className="text-xl font-bold mb-1">Analyzing <span className="text-[#E1F28F]">{url}</span></h3>
                <p className="text-sm text-white/40 mb-8">AI engine running…</p>
                <div className="max-w-sm mx-auto space-y-3">
                  {SCAN_STEPS.map((step, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 text-sm py-2 px-4 rounded-xl transition-all duration-400 ${
                        i === stepIdx
                          ? 'bg-white/5 border border-white/10 text-white'
                          : i < stepIdx
                          ? 'text-white/30'
                          : 'text-white/15'
                      }`}
                    >
                      <span className="text-base">{step.icon}</span>
                      <span className="flex-1 text-left">{step.text}</span>
                      {i < stepIdx && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* DONE STATE */}
            {phase === 'done' && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-sm font-bold text-emerald-400">Scan Complete</span>
                    </div>
                    <h3 className="text-xl font-bold">Results for <span className="text-[#E1F28F]">{url}</span></h3>
                    <p className="text-sm text-white/40 mt-1">Simulated analysis · 1,240 pages scanned</p>
                  </div>
                  <button onClick={reset} className="text-xs font-bold text-white/40 hover:text-white/70 underline hover:no-underline transition-colors">
                    New Scan
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {[
                    { icon: AlertCircle, label: 'Broken Links', value: 12, color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/20' },
                    { icon: Eye, label: 'Orphan Pages', value: 5, color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20' },
                    { icon: LinkIcon, label: 'Link Opportunities', value: 28, color: 'text-[#E1F28F]', bg: 'bg-[#E1F28F]/10 border-[#E1F28F]/20' },
                  ].map((item, i) => (
                    <div key={i} className={`p-5 rounded-2xl border ${item.bg} text-center`}>
                      <item.icon className={`w-7 h-7 mx-auto mb-2 ${item.color}`} />
                      <div className={`text-3xl font-extrabold mb-1 ${item.color}`}>{item.value}</div>
                      <div className="text-[11px] font-semibold text-white/40 uppercase tracking-wider">{item.label}</div>
                    </div>
                  ))}
                </div>

                {/* Summary message */}
                <div className="mb-6 p-4 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white/60 leading-relaxed">
                  🎯 We found <strong className="text-white">17 critical issues</strong> and <strong className="text-[#E1F28F]">28 link opportunities</strong> that could lift your rankings significantly. Start with the broken links — they're costing you crawl budget every day.
                </div>

                <a
                  href="https://dash.dofollo.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#E1F28F] text-[#0A2E22] rounded-2xl font-extrabold hover:bg-white transition-colors"
                >
                  Fix These Issues with Dofollo <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
