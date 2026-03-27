import React, { useState } from 'react';
import { ArrowUpRight, Target, BarChart3, Zap, ArrowRight, Star } from 'lucide-react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

export default function SEOOpportunities() {
  const data = (homeData as any).seo_opportunities;
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white text-[#0A2E22] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E1F28F]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#045C4E]/4 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* HEADER */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2E22]/5 border border-[#0A2E22]/10 text-[#045C4E] font-bold text-xs uppercase tracking-wider mb-6">
            <Target className="w-3.5 h-3.5" />
            {data.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-[#0A2E22] leading-[1.1]">
            {data.title_first}{' '}
            <span className="text-[#045C4E] relative inline-block">
              {data.title_highlight}
              <div className="absolute bottom-1.5 left-0 w-full h-3 bg-[#E1F28F]/70 -z-10 -rotate-1 rounded-sm" />
            </span>
          </h2>
          <p className="text-lg text-[#0A2E22]/60 leading-relaxed max-w-2xl mx-auto">
            {data.description}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* LEFT: TABLE BLOCK (spans 8 columns) */}
          <ScrollReveal variant="fade-up" className="lg:col-span-8">
            <div className="bg-white border border-[#0A2E22]/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(10,46,34,0.06)] h-full flex flex-col">
              
              {/* Header Label */}
              <div className="px-6 py-4 border-b border-[#0A2E22]/5 bg-[#0A2E22]/[0.02] flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#045C4E] uppercase tracking-widest mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {data.preview_label}
                    </span>
                    <h3 className="text-sm font-bold text-[#0A2E22]">
                        {data.table_micro_text}
                    </h3>
                </div>
              </div>

              {/* Columns Header */}
              <div className="grid grid-cols-12 px-6 py-3 text-[10px] font-bold text-[#0A2E22]/30 uppercase tracking-widest border-b border-[#0A2E22]/5 bg-white shrink-0">
                <div className="col-span-12 md:col-span-5">{data.columns.page}</div>
                <div className="hidden md:block md:col-span-2 text-center">{data.columns.position}</div>
                <div className="hidden md:block md:col-span-2 text-center">{data.columns.links}</div>
                <div className="hidden md:block md:col-span-3 text-right">{data.columns.traffic}</div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-[#0A2E22]/5">
                {data.opportunities.map((item: any, i: number) => (
                  <div
                    key={item.id}
                    className={`grid grid-cols-12 items-center px-6 py-4 transition-all duration-300 relative group ${
                      item.is_best ? 'bg-[#E1F28F]/5' : 'hover:bg-[#0A2E22]/[0.01]'
                    }`}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Highlight indicator for best opportunity */}
                    {item.is_best && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E1F28F]" />
                    )}

                    <div className="col-span-12 md:col-span-5 mb-2 md:mb-0">
                      <div className="flex items-center gap-2">
                        <p className={`text-sm font-bold transition-colors ${hovered === i ? 'text-[#045C4E]' : 'text-[#0A2E22]'}`}>
                            {item.page}
                        </p>
                        {item.is_best && (
                            <span className="text-[9px] font-bold px-2 py-0.5 bg-[#E1F28F] text-[#0A2E22] rounded-full uppercase tracking-tighter shadow-sm animate-pulse">
                                {data.best_opportunity_label}
                            </span>
                        )}
                      </div>
                      <p className="text-[10px] text-[#0A2E22]/35 font-mono truncate mt-0.5">{item.path}</p>
                    </div>

                    <div className="col-span-4 md:col-span-2 text-left md:text-center">
                      <span className="text-[10px] text-[#0A2E22]/30 uppercase font-bold md:hidden block mb-1">Rank</span>
                      <span className="text-sm font-bold text-[#0A2E22]/60">#{item.position}</span>
                    </div>

                    <div className="col-span-4 md:col-span-2 text-left md:text-center">
                      <span className="text-[10px] text-[#0A2E22]/30 uppercase font-bold md:hidden block mb-1">Links</span>
                      <span className={`text-sm font-bold ${item.is_best ? 'text-[#045C4E]' : 'text-[#0A2E22]/60'}`}>
                        +{item.links}
                      </span>
                    </div>

                    <div className="col-span-4 md:col-span-3 text-right">
                      <span className="text-[10px] text-[#0A2E22]/30 uppercase font-bold md:hidden block mb-1">Growth</span>
                      <div className="inline-flex items-center gap-1 text-sm font-black text-emerald-600">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        {item.traffic}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT: PROOF & CTA BLOCK (spans 4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Unified Proof Block */}
            <ScrollReveal variant="fade-up" delay={0.1}>
              <div className="bg-[#0A2E22] rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl border border-white/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E1F28F]/10 rounded-full blur-3xl pointer-events-none" />
                
                <BarChart3 className="w-7 h-7 text-[#E1F28F] mb-6" />
                
                <div className="space-y-6">
                    <div>
                        <div className="text-3xl font-black text-[#E1F28F] tracking-tighter mb-1">
                            {data.proof_block.stat_main}
                        </div>
                        <div className="text-[11px] font-bold text-white/40 uppercase tracking-widest">
                            {data.proof_block.stat_speed}
                        </div>
                    </div>
                    
                    <p className="text-white/60 text-[13px] leading-relaxed font-medium">
                        {data.proof_block.description}
                    </p>
                    
                    <div className="pt-2 flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full bg-white/10 border-2 border-[#0A2E22] flex items-center justify-center">
                                    <Star className="w-2.5 h-2.5 text-[#E1F28F]" fill="#E1F28F" />
                                </div>
                            ))}
                        </div>
                        <span className="text-[10px] font-bold text-[#E1F28F]/80 uppercase tracking-wider">
                            Verified Result
                        </span>
                    </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Block */}
            <ScrollReveal variant="fade-up" delay={0.2} className="flex-1">
              <div className="bg-[#E1F28F] rounded-2xl p-8 h-full flex flex-col justify-between shadow-[0_20px_40px_rgba(225,242,143,0.2)] border border-[#E1F28F]/50 group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                <div>
                    <Zap className="w-6 h-6 text-[#0A2E22] mb-6 animate-pulse" />
                    <h3 className="text-xl font-black text-[#0A2E22] mb-4 leading-tight">
                        {data.cta_block.emotional_line}
                    </h3>
                </div>

                <div className="space-y-4">
                    <a
                        href="https://dash.dofollo.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-[#0A2E22] text-[#E1F28F] rounded-xl font-black text-sm hover:scale-[1.02] transition-all shadow-xl"
                    >
                        {data.cta_block.cta}
                    </a>
                    
                    <div className="text-center">
                        <span className="text-[10px] font-bold text-[#0A2E22]/40 uppercase tracking-widest">
                        {data.cta_block.friction_text}
                        </span>
                    </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
