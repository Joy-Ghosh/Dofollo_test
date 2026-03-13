import React, { useState, useEffect } from 'react';
import { Search, Radar, AlertTriangle, CheckCircle, FileText, Zap, Globe, Link as LinkIcon, ArrowUpRight } from 'lucide-react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

const steps = [
  {
    icon: Globe,
    number: '01',
    title: 'Enter your website URL',
    desc: 'Just paste your domain — no complex setup, no code, no API keys needed.',
    detail: 'Supports HTTP, HTTPS, subdomains and subdirectories',
  },
  {
    icon: Radar,
    number: '02',
    title: 'Dofollo scans every page',
    desc: 'Our AI crawler maps your entire site structure — thousands of pages in seconds.',
    detail: 'Average scan time: under 60 seconds for 1,000+ pages',
  },
  {
    icon: AlertTriangle,
    number: '03',
    title: 'AI detects all SEO issues',
    desc: 'Finds orphan pages, broken links, anchor text problems, and link equity gaps.',
    detail: '15+ issue types detected automatically',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Get actionable insights',
    desc: 'A clear prioritized task list — ranked by SEO impact, not guesswork.',
    detail: 'Ready to act in under 5 minutes',
  },
];

export default function AIWebsiteScan() {
  const data = (homeData as any).ai_website_scan;
  const [scanProgress, setScanProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          setActiveStep(s => (s + 1) % 4);
          return 0;
        }
        return prev + 0.8;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const issueItems = [
    { label: 'Orphan Pages detected', count: '12', color: 'text-red-400', bg: 'bg-red-400/10', bar: 'bg-red-400', pct: '75%' },
    { label: 'Broken Internal Links', count: '8', color: 'text-amber-400', bg: 'bg-amber-400/10', bar: 'bg-amber-400', pct: '50%' },
    { label: 'Weak Anchor Text', count: '23', color: 'text-orange-400', bg: 'bg-orange-400/10', bar: 'bg-orange-400', pct: '90%' },
    { label: 'Link Opportunities', count: '28', color: 'text-[#E1F28F]', bg: 'bg-[#E1F28F]/10', bar: 'bg-[#E1F28F]', pct: '100%' },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0A2E22] text-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#045C4E]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#E1F28F]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E1F28F] font-bold text-xs uppercase tracking-wider mb-6">
            <Zap className="w-3.5 h-3.5" />
            AI Website Scanner
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
            {data.title_first}{' '}
            <span className="text-[#E1F28F]">{data.title_highlight}</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            {data.description}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Steps */}
          <div className="space-y-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <ScrollReveal key={idx} variant="fade-up" delay={idx * 0.08}>
                  <div
                    className={`flex items-start gap-5 p-5 rounded-2xl border transition-all duration-500 cursor-pointer group ${
                      isActive
                        ? 'bg-white/5 border-[#E1F28F]/30 shadow-[0_0_30px_rgba(225,242,143,0.05)]'
                        : 'border-transparent hover:bg-white/[0.03] hover:border-white/10'
                    }`}
                    onClick={() => setActiveStep(idx)}
                  >
                    {/* Step number + icon */}
                    <div className="relative shrink-0">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'bg-[#E1F28F] text-[#0A2E22]' : 'bg-white/5 border border-white/10 text-white/40'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black transition-all ${
                        isActive ? 'bg-[#0A2E22] text-[#E1F28F] border border-[#E1F28F]/40' : 'hidden'
                      }`}>
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-base font-bold mb-1 transition-colors ${isActive ? 'text-white' : 'text-white/60'}`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-white/70' : 'text-white/30'}`}>
                        {step.desc}
                      </p>
                      {isActive && (
                        <div className="mt-3 inline-flex items-center gap-2 text-[11px] text-[#E1F28F]/70 font-mono bg-[#E1F28F]/5 px-2 py-1 rounded-lg border border-[#E1F28F]/10">
                          <CheckCircle className="w-3 h-3 text-[#E1F28F]" />
                          {step.detail}
                        </div>
                      )}
                    </div>
                    {/* Step connector line */}
                    {idx < steps.length - 1 && (
                      <div className="absolute left-[3.25rem] mt-12 h-6 w-0.5 bg-white/5" />
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Right: Dashboard scan UI */}
          <ScrollReveal variant="fade-left" delay={0.1}>
            <div className="relative border border-white/10 rounded-2xl bg-[#0D261F] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">
              {/* Browser header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <div className="ml-3 px-3 py-1 bg-black/20 rounded text-[11px] font-mono text-white/40 flex-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400/60 animate-pulse"></span>
                  dash.dofollo.ai/scan
                </div>
              </div>

              <div className="p-6">
                {/* Scanning header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h4 className="text-base font-bold flex items-center gap-2.5">
                      <Radar className={`w-5 h-5 text-[#E1F28F] ${scanProgress < 100 ? 'animate-spin' : ''}`} />
                      Scanning: example.com
                    </h4>
                    <p className="text-xs text-white/40 mt-1 font-mono">
                      {Math.round(scanProgress)}% completed &nbsp;·&nbsp; 1,240 pages found
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-mono text-[#E1F28F] font-extrabold">142</div>
                    <div className="text-[10px] text-white/30 uppercase tracking-widest">Issues</div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-1.5">
                  <div
                    className="h-full bg-gradient-to-r from-[#045C4E] to-[#E1F28F] transition-all duration-100 rounded-full"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-white/25 font-mono mb-6">
                  <span>{Math.round(scanProgress * 12.4)} pages</span>
                  <span>1,240 total</span>
                </div>

                {/* Issue breakdown */}
                <div className="space-y-4 mb-6">
                  {issueItems.map((item, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="w-3.5 h-3.5 text-white/30" />
                          <span className="text-sm text-white/70">{item.label}</span>
                        </div>
                        <span className={`text-sm font-bold ${item.color}`}>{item.count}</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.bar} rounded-full`}
                          style={{ width: item.pct, opacity: 0.7 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://dash.dofollo.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#E1F28F] text-[#0A2E22] rounded-xl font-bold text-sm hover:bg-white transition-colors"
                >
                  Fix All Issues with Dofollo <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
