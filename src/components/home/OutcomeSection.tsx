import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Clock, Target, ArrowUpRight, Sparkles } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const outcomes = [
  {
    icon: TrendingUp,
    metric: '+42%',
    metricLabel: 'Avg. traffic increase',
    before: 'Pages stuck on page 2–3',
    after: 'Pages climbing to top 5',
    color: 'from-[#045C4E] to-[#0A2E22]',
    accentColor: '#E1F28F',
    delay: 0,
  },
  {
    icon: Clock,
    metric: '< 60s',
    metricLabel: 'Full site scan time',
    before: 'Days of manual auditing',
    after: 'Instant structural intelligence',
    color: 'from-[#0A2E22] to-[#0d3b2c]',
    accentColor: '#E1F28F',
    delay: 0.1,
  },
  {
    icon: Target,
    metric: '3–8 wks',
    metricLabel: 'To see ranking uplift',
    before: 'Guessing what to fix',
    after: 'AI-prioritized action plan',
    color: 'from-[#0d3b2c] to-[#045C4E]',
    accentColor: '#E1F28F',
    delay: 0.2,
  },
];

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = target / 60;
          const interval = setInterval(() => {
            start += step;
            if (start >= target) {
              setValue(target);
              clearInterval(interval);
            } else {
              setValue(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{value}{suffix}</span>;
}

export default function OutcomeSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0A2E22] text-white relative overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#045C4E]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E1F28F]/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E1F28F]/10 border border-[#E1F28F]/20 text-[#E1F28F] font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            What You Get
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-tight">
            Imagine your website{' '}
            <span className="text-[#E1F28F]">working smarter</span>
            <br />not harder.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            Before you see the product — here's the transformation Dofollo delivers. No guesswork. No bloated audits. Just clear results.
          </p>
        </ScrollReveal>

        {/* Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {outcomes.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={i} variant="fade-up" delay={item.delay}>
                <div className={`relative rounded-2xl p-7 bg-gradient-to-br ${item.color} border border-white/10 overflow-hidden group hover:border-[#E1F28F]/30 transition-all duration-500`}>
                  {/* Glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#E1F28F]/3 rounded-2xl" />

                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-[#E1F28F]/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#E1F28F]" />
                  </div>

                  {/* Metric */}
                  <div className="text-4xl font-extrabold text-[#E1F28F] mb-1 tabular-nums">
                    {item.metric}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40 mb-5">
                    {item.metricLabel}
                  </div>

                  {/* Before → After */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 text-sm text-white/40">
                      <span className="shrink-0 w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center text-[9px] text-red-400 font-bold">✕</span>
                      {item.before}
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-white/80 font-medium">
                      <span className="shrink-0 w-4 h-4 rounded-full bg-[#E1F28F]/20 flex items-center justify-center text-[9px] text-[#E1F28F] font-bold">✓</span>
                      {item.after}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Social proof strip */}
        <ScrollReveal variant="fade-up" delay={0.3}>
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E1F28F]/5 via-transparent to-transparent pointer-events-none" />

            <div className="flex items-center gap-4 relative z-10">
              {/* Avatars */}
              <div className="flex -space-x-3">
                {['#4A9D8F', '#6EC6B8', '#2D7A6E', '#88D9CD'].map((bg, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-[#0A2E22] flex items-center justify-center text-xs font-bold text-white" style={{ background: bg }}>
                    {['S', 'M', 'J', 'A'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-white">Trusted by 2,400+ growth teams</div>
                <div className="text-xs text-white/40">SEO managers, agencies, and founders</div>
              </div>
            </div>

            <div className="flex items-center gap-8 relative z-10">
              {[
                { value: '2.4K+', label: 'Sites scanned' },
                { value: '98K+', label: 'Issues resolved' },
                { value: '4.9★', label: 'User rating' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl font-extrabold text-[#E1F28F]">{stat.value}</div>
                  <div className="text-[11px] text-white/40 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://dash.dofollo.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-[#E1F28F] text-[#0A2E22] rounded-xl font-bold text-sm hover:bg-white transition-colors relative z-10"
            >
              See My Results <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
