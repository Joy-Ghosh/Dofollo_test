import React, { useState } from 'react';
import { Sparkles, Link as LinkIcon, Plus, Check, ArrowUpRight, ChevronRight, Zap, X } from 'lucide-react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

const linkSuggestions = [
  {
    targetPage: 'Technical SEO Guide',
    targetPath: '/blog/technical-seo-guide',
    confidence: 98,
    links: [
      { title: 'Crawl Budget Optimization', anchor: 'crawl budget' },
      { title: 'Site Architecture Best Practices', anchor: 'site structure' },
      { title: 'XML Sitemap Strategy', anchor: 'XML sitemaps' },
    ],
  },
  {
    targetPage: 'Internal Linking 101',
    targetPath: '/blog/internal-linking',
    confidence: 94,
    links: [
      { title: 'Link Equity Flow Guide', anchor: 'link equity' },
      { title: 'Anchor Text Optimization', anchor: 'anchor text' },
    ],
  },
];

export default function AILinkIntelligence() {
  const data = (homeData as any).ai_link_intelligence;
  const [applied, setApplied] = useState<Record<string, boolean>>({});
  const [activeCard, setActiveCard] = useState(0);

  const handleApply = (key: string) => {
    setApplied(prev => ({ ...prev, [key]: true }));
  };

  const current = linkSuggestions[activeCard];

  return (
    <section className="py-24 md:py-32 bg-white text-[#0A2E22] overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Interactive UI Card */}
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E1F28F]/30 to-transparent blur-3xl opacity-40 pointer-events-none" />

            <ScrollReveal variant="fade-up" className="relative">
              {/* Card selector tabs */}
              <div className="flex gap-2 mb-4">
                {linkSuggestions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveCard(i)}
                    className={`flex-1 py-2 px-3 text-xs font-bold rounded-xl border transition-all ${
                      activeCard === i
                        ? 'bg-[#045C4E] text-white border-[#045C4E]'
                        : 'bg-white text-[#0A2E22]/50 border-[#0A2E22]/10 hover:border-[#045C4E]/40 hover:text-[#045C4E]'
                    }`}
                  >
                    {s.targetPage}
                  </button>
                ))}
              </div>

              {/* Main intelligence card */}
              <div className="bg-[#F0FFF8] rounded-3xl p-6 border border-[#045C4E]/10 shadow-xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full text-xs font-bold text-[#045C4E] shadow-sm border border-[#045C4E]/10">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    AI Suggested Links
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#0A2E22]/40 font-mono">{current.confidence}% match</span>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  </div>
                </div>

                {/* Target page card */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5 mb-4">
                  <div className="text-[10px] font-bold text-[#0A2E22]/40 uppercase tracking-wider mb-1">Target Page</div>
                  <h4 className="text-base font-extrabold mb-1">{current.targetPage}</h4>
                  <p className="text-xs text-[#0A2E22]/50 font-mono">{current.targetPath}</p>
                </div>

                {/* Arrow connector */}
                <div className="flex items-center justify-center my-3">
                  <div className="flex items-center gap-2">
                    <div className="h-px w-8 bg-[#045C4E]/20"></div>
                    <div className="w-8 h-8 rounded-full bg-[#E1F28F] flex items-center justify-center shadow-md">
                      <LinkIcon className="w-4 h-4 text-[#0A2E22]" />
                    </div>
                    <div className="h-px w-8 bg-[#045C4E]/20"></div>
                  </div>
                </div>

                {/* Suggested links list */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5">
                  <div className="text-[10px] font-bold text-[#0A2E22]/40 uppercase tracking-wider mb-3">Suggested Links From</div>
                  <div className="space-y-2">
                    {current.links.map((link, i) => {
                      const key = `${activeCard}-${i}`;
                      const done = applied[key];
                      return (
                        <div key={i} className={`flex items-center justify-between py-2.5 px-3 rounded-xl border transition-all ${done ? 'bg-[#E1F28F]/20 border-[#E1F28F]/40' : 'bg-[#F0FFF8] border-[#045C4E]/10'}`}>
                          <div className="flex-1 min-w-0">
                            <span className={`text-sm font-semibold flex items-center gap-2 ${done ? 'text-[#045C4E]' : 'text-[#0A2E22]'}`}>
                              <LinkIcon className="w-3 h-3 opacity-40 shrink-0" />
                              {link.title}
                            </span>
                            <span className="text-[10px] text-[#0A2E22]/40 ml-5">anchor: "{link.anchor}"</span>
                          </div>
                          <div className="flex gap-1.5 shrink-0 ml-3">
                            {done ? (
                              <span className="flex items-center gap-1 px-2 py-1 text-[10px] font-bold text-[#045C4E] bg-[#E1F28F]/30 rounded-lg">
                                <Check className="w-3 h-3" /> Added
                              </span>
                            ) : (
                              <>
                                <button
                                  onClick={() => handleApply(key)}
                                  className="px-2.5 py-1 text-[10px] font-bold bg-[#045C4E] text-white rounded-lg hover:bg-[#0A2E22] flex items-center gap-1 transition-colors"
                                >
                                  <Plus className="w-3 h-3" /> Add
                                </button>
                                <button className="px-2 py-1 text-[10px] text-[#0A2E22]/40 bg-[#0A2E22]/5 rounded-lg hover:bg-[#0A2E22]/10 transition-colors">
                                  <X className="w-3 h-3" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bulk action */}
                <button
                  onClick={() => {
                    const updates: Record<string, boolean> = {};
                    current.links.forEach((_, i) => { updates[`${activeCard}-${i}`] = true; });
                    setApplied(prev => ({ ...prev, ...updates }));
                  }}
                  className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-[#045C4E] text-white rounded-xl font-bold text-sm hover:bg-[#0A2E22] transition-colors"
                >
                  <Zap className="w-4 h-4 text-[#E1F28F]" />
                  Apply All Suggestions
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Text */}
          <div className="order-1 lg:order-2">
            <ScrollReveal variant="fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F28F]/30 border border-[#045C4E]/20 text-[#045C4E] font-bold text-xs uppercase tracking-wider mb-6">
                <LinkIcon className="w-3.5 h-3.5" />
                Internal Link Intelligence
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-[#0A2E22]">
                {data.title_first} <br />
                <span className="text-[#045C4E] relative inline-block">
                  {data.title_highlight}
                  <div className="absolute bottom-1 left-0 w-full h-3 bg-[#E1F28F]/50 -z-10 -rotate-1"></div>
                </span>
              </h2>
              <p className="text-lg text-[#0A2E22]/70 leading-relaxed mb-8">
                {data.description}
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'Understands page context and semantics — not just keywords',
                  'Suggests exact anchor text that reads naturally',
                  'Avoids over-optimization and penalty patterns',
                  'One-click publishing directly to your CMS',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#0A2E22]/80 font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#E1F28F] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#0A2E22]" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://dash.dofollo.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#045C4E] text-white rounded-2xl font-bold text-sm hover:bg-[#0A2E22] transition-colors"
              >
                Start Getting Suggestions <ChevronRight className="w-4 h-4" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
