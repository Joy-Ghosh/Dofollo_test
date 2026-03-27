import React from 'react';
import { TrendingUp, Clock, Target, ArrowUpRight, Sparkles } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import homeData from '../../data/pages/home.json';

const iconMap: Record<string, React.ElementType> = { TrendingUp, Clock, Target };

export default function OutcomeSection() {
  const data = (homeData as any).outcome_section || {};
  const outcomes: any[] = data.outcomes || [];
  const proof = data.social_proof || {};

  return (
    <section className="py-24 md:py-32 bg-[#0A2E22] text-white relative overflow-hidden">
      {/* Ambient glow — subdued */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#045C4E]/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#E1F28F]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* ── HEADER ── */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E1F28F]/10 border border-[#E1F28F]/20 text-[#E1F28F] font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            {data.badge}
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            {data.heading}
          </h2>

          <p className="text-white/55 text-lg leading-relaxed max-w-xl mx-auto">
            {data.description}
          </p>
        </ScrollReveal>

        {/* ── CONNECTOR LINE ── */}
        <ScrollReveal variant="fade-up" delay={0.05} className="text-center mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#E1F28F]/60">
            {data.connector}
          </p>
        </ScrollReveal>

        {/* ── OUTCOME CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {outcomes.map((item: any, i: number) => {
            const Icon = iconMap[item.icon] || TrendingUp;
            const isDominant = item.dominant === true;

            return (
              <ScrollReveal key={i} variant="fade-up" delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl bg-gradient-to-br ${item.color} border overflow-hidden group transition-all duration-500 hover:border-[#E1F28F]/25 ${
                    isDominant
                      ? 'border-[#E1F28F]/20 p-8'
                      : 'border-white/8 p-7'
                  }`}
                >
                  {/* Subtle hover lift */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#E1F28F]/3 rounded-2xl" />

                  {/* Metric — the anchor */}
                  <div className={`font-extrabold text-[#E1F28F] tabular-nums mb-1 ${isDominant ? 'text-5xl' : 'text-4xl'}`}>
                    {item.metric}
                  </div>

                  {/* Label below metric */}
                  <div className="text-[12px] font-semibold text-white/50 uppercase tracking-wider mb-6">
                    {item.metric_label}
                  </div>

                  {/* Before → After — minimal */}
                  <div className="space-y-2.5 border-t border-white/8 pt-5">
                    <div className="flex items-center gap-2.5 text-sm text-white/35">
                      <span className="text-[11px] text-red-400/70 font-bold">✕</span>
                      {item.before}
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-white/75 font-medium">
                      <span className="text-[11px] text-[#E1F28F] font-bold">✓</span>
                      {item.after}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ── TRUST BAR — lighter, less competing ── */}
        <ScrollReveal variant="fade-up" delay={0.3}>
          <div className="relative rounded-xl border border-white/8 bg-white/[0.02] px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E1F28F]/4 via-transparent to-transparent pointer-events-none" />

            {/* Avatars + text */}
            <div className="flex items-center gap-3.5 relative z-10">
              <div className="flex -space-x-2.5">
                {['#4A9D8F', '#6EC6B8', '#2D7A6E', '#88D9CD'].map((bg, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0A2E22] flex items-center justify-center text-[11px] font-bold text-white"
                    style={{ background: bg }}
                  >
                    {['S', 'M', 'J', 'A'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-white/80">{proof.title}</div>
                <div className="text-[11px] text-white/35">{proof.subtitle}</div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-7 relative z-10">
              {(proof.stats || []).map((stat: any, i: number) => (
                <div key={i} className="text-center">
                  <div className="text-lg font-extrabold text-[#E1F28F]">{stat.value}</div>
                  <div className="text-[10px] text-white/35 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://dash.dofollo.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-[#E1F28F]/10 border border-[#E1F28F]/25 text-[#E1F28F] rounded-lg font-semibold text-sm hover:bg-[#E1F28F]/20 transition-colors relative z-10"
            >
              {proof.cta}
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
