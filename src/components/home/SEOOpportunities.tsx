import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight, Target, BarChart3, Zap, ChevronRight } from 'lucide-react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

const opportunities = [
  {
    page: 'Technical SEO Basics',
    path: '/blog/technical-seo',
    position: 12,
    links: 4,
    traffic: '+38%',
    difficulty: 'Easy',
    diffColor: 'text-emerald-600 bg-emerald-50 border border-emerald-100',
  },
  {
    page: 'Site Architecture Guide',
    path: '/blog/site-architecture',
    position: 19,
    links: 6,
    traffic: '+52%',
    difficulty: 'Medium',
    diffColor: 'text-amber-600 bg-amber-50 border border-amber-100',
  },
  {
    page: 'Crawl Budget Tips',
    path: '/blog/crawl-budget',
    position: 8,
    links: 2,
    traffic: '+21%',
    difficulty: 'Easy',
    diffColor: 'text-emerald-600 bg-emerald-50 border border-emerald-100',
  },
  {
    page: 'XML Sitemaps 101',
    path: '/blog/xml-sitemaps',
    position: 24,
    links: 8,
    traffic: '+67%',
    difficulty: 'High Impact',
    diffColor: 'text-[#045C4E] bg-[#E1F28F]/40 border border-[#045C4E]/20',
  },
];

export default function SEOOpportunities() {
  const data = (homeData as any).seo_opportunities;
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white text-[#0A2E22] relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E1F28F]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#045C4E]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2E22]/5 border border-[#0A2E22]/10 text-[#045C4E] font-bold text-xs uppercase tracking-wider mb-6">
            <Target className="w-3.5 h-3.5" />
            Hidden Gems
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-[#0A2E22]">
            {data.title_first}{' '}
            <span className="text-[#045C4E] relative inline-block">
              {data.title_highlight}
              <div className="absolute bottom-1 left-0 w-full h-3 bg-[#E1F28F]/60 -z-10 -rotate-1" />
            </span>
          </h2>
          <p className="text-lg text-[#0A2E22]/60 leading-relaxed max-w-2xl mx-auto">
            {data.description}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          {/* Left: Opportunities table (2 cols wide) */}
          <ScrollReveal variant="fade-up" className="lg:col-span-2">
            <div className="bg-white border border-[#0A2E22]/10 rounded-2xl overflow-hidden shadow-lg">
              {/* Header */}
              <div className="px-6 py-4 bg-[#0A2E22] flex items-center justify-between">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#E1F28F]" />
                  Pages Close to Ranking Higher
                </h3>
                <span className="text-[10px] font-mono text-[#E1F28F]/70 animate-pulse">● LIVE</span>
              </div>

              {/* Column headers */}
              <div className="grid grid-cols-12 px-6 py-2.5 text-[10px] font-bold text-[#0A2E22]/30 uppercase tracking-widest border-b border-[#0A2E22]/5 bg-[#0A2E22]/[0.02]">
                <div className="col-span-5">Page</div>
                <div className="col-span-2 text-center">Position</div>
                <div className="col-span-2 text-center">Links Needed</div>
                <div className="col-span-2 text-center">Traffic Gain</div>
                <div className="col-span-1" />
              </div>

              {/* Rows */}
              <div className="divide-y divide-[#0A2E22]/5">
                {opportunities.map((item, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-12 items-center px-6 py-4 transition-all duration-200 cursor-pointer group ${hovered === i ? 'bg-[#F0FFF8]' : 'hover:bg-[#0A2E22]/[0.02]'}`}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className="col-span-5 min-w-0">
                      <p className={`text-sm font-bold truncate transition-colors ${hovered === i ? 'text-[#045C4E]' : 'text-[#0A2E22]'}`}>
                        {item.page}
                      </p>
                      <p className="text-[11px] text-[#0A2E22]/35 font-mono truncate mt-0.5">{item.path}</p>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="text-sm font-bold text-[#0A2E22]/60">#{item.position}</span>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="text-sm font-bold text-[#045C4E]">+{item.links}</span>
                    </div>
                    <div className="col-span-2 text-center">
                      <div className="inline-flex items-center gap-1 text-sm font-extrabold text-emerald-600">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        {item.traffic}
                      </div>
                    </div>
                    <div className="col-span-1 flex justify-end">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${item.diffColor}`}>
                        {item.difficulty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="px-6 py-4 border-t border-[#0A2E22]/10 bg-[#0A2E22]/[0.02]">
                <a
                  href="https://dash.dofollo.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#0A2E22] text-white rounded-xl font-bold text-sm hover:bg-[#045C4E] transition-colors"
                >
                  Find My Hidden Opportunities <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Stats stack */}
          <ScrollReveal variant="fade-up" delay={0.15}>
            <div className="flex flex-col gap-4">
              {/* Stat 1 */}
              <div className="bg-gradient-to-br from-[#0A2E22] to-[#045C4E] rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E1F28F]/10 rounded-full blur-2xl pointer-events-none" />
                <BarChart3 className="w-8 h-8 text-[#E1F28F] mb-4" />
                <div className="text-4xl font-extrabold mb-2">+42%</div>
                <p className="text-white/60 text-sm leading-relaxed">
                  Average traffic increase for pages optimized with Dofollo's internal linking.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#F0FFF8] rounded-2xl p-6 border border-[#045C4E]/10">
                <TrendingUp className="w-8 h-8 text-[#045C4E] mb-4" />
                <div className="text-4xl font-extrabold text-[#0A2E22] mb-2">3–8 wks</div>
                <p className="text-[#0A2E22]/60 text-sm leading-relaxed">
                  Average time to see measurable ranking improvements after implementing Dofollo's suggestions.
                </p>
              </div>

              {/* Stat 3 CTA */}
              <div className="bg-[#E1F28F] rounded-2xl p-6">
                <Zap className="w-7 h-7 text-[#0A2E22] mb-3" />
                <p className="text-base font-extrabold text-[#0A2E22] mb-3 leading-tight">
                  Ready to unlock your hidden pages?
                </p>
                <a
                  href="https://dash.dofollo.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0A2E22] hover:opacity-70 transition-opacity"
                >
                  Scan My Website <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
