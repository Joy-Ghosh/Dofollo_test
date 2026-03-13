import React, { useState } from 'react';
import { BarChart3, Link as LinkIcon, AlertTriangle, Eye, FileText, Zap, ArrowUpRight, Search, Globe, TrendingUp, ChevronRight, Sparkles } from 'lucide-react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

const tabs = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'pages', label: 'Pages', icon: FileText },
  { id: 'issues', label: 'Issues', icon: AlertTriangle },
  { id: 'links', label: 'Links', icon: LinkIcon },
  { id: 'visibility', label: 'Visibility', icon: Eye },
];

const issueList = [
  { type: 'Broken Link', page: '/blog/seo-guide', severity: 'high', icon: AlertTriangle, color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/20' },
  { type: 'Orphan Page', page: '/services/audit', severity: 'high', icon: Eye, color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/20' },
  { type: 'Weak Linking', page: '/blog/crawl-budget', severity: 'medium', icon: LinkIcon, color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20' },
  { type: 'Thin Content', page: '/features/reports', severity: 'low', icon: FileText, color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
];

const aiSuggestions = [
  { from: 'Technical SEO Guide', to: 'Crawl Budget Optimization', confidence: 98 },
  { from: 'Site Architecture', to: 'XML Sitemap Strategy', confidence: 94 },
  { from: 'Internal Linking Tips', to: 'Link Equity Flow', confidence: 91 },
];

export default function DashboardPreview() {
  const data = (homeData as any).dashboard_preview;
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="py-24 md:py-32 bg-white text-[#0A2E22] overflow-hidden">
      <div className="container mx-auto">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2E22]/5 border border-[#0A2E22]/10 text-[#045C4E] font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            {data.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight text-[#0A2E22]">
            {data.title_first}{' '}
            <span className="text-[#045C4E] relative inline-block">
              {data.title_highlight}
              <div className="absolute bottom-1 left-0 w-full h-3 bg-[#E1F28F]/60 -z-10 -rotate-1"></div>
            </span>
          </h2>
          <p className="text-lg text-[#0A2E22]/70 leading-relaxed max-w-2xl mx-auto">
            {data.description}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="scale-up" delay={0.1}>
          {/* Main dashboard shell */}
          <div className="bg-[#0A2E22] rounded-3xl shadow-[0_40px_80px_-20px_rgba(10,46,34,0.3)] border border-white/5 overflow-hidden">

            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]/70"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/70"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]/70"></div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/5 text-[11px] font-mono text-white/40">
                  <Globe className="w-3 h-3" />
                  dash.dofollo.ai
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-lg bg-[#E1F28F] text-[#0A2E22] text-xs font-bold flex items-center gap-1.5">
                  <Zap className="w-3 h-3" />
                  142 issues detected
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70">
                  <Search className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="flex">
              {/* Left sidebar */}
              <div className="w-48 shrink-0 border-r border-white/5 bg-black/10 py-6 hidden md:flex flex-col gap-1 px-3">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-[#E1F28F]/10 text-[#E1F28F] border border-[#E1F28F]/20'
                          : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}

                <div className="mt-auto pt-6 px-1">
                  <div className="p-3 bg-[#E1F28F]/5 border border-[#E1F28F]/15 rounded-xl">
                    <div className="text-[10px] text-[#E1F28F]/70 font-bold uppercase tracking-wider mb-2">AI Fixes Ready</div>
                    <div className="text-2xl font-extrabold text-[#E1F28F]">28</div>
                    <div className="text-[10px] text-white/30 mt-0.5">suggestions waiting</div>
                  </div>
                </div>
              </div>

              {/* Main content area */}
              <div className="flex-1 p-6 min-h-[420px]">
                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'Pages Scanned', value: '1,240', icon: FileText, delta: '' },
                    { label: 'Total Issues', value: '142', icon: AlertTriangle, delta: '', color: 'text-red-400' },
                    { label: 'Link Opps', value: '28', icon: LinkIcon, delta: '+28', color: 'text-[#E1F28F]' },
                    { label: 'SEO Score', value: '74', icon: TrendingUp, delta: '+12%', color: 'text-emerald-400' },
                  ].map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                      <div key={i} className="p-4 rounded-xl bg-white/[0.04] border border-white/5">
                        <div className="flex items-center justify-between mb-3">
                          <Icon className="w-4 h-4 text-white/30" />
                          {stat.delta && <span className={`text-[10px] font-bold ${stat.color || 'text-emerald-400'}`}>{stat.delta}</span>}
                        </div>
                        <div className={`text-2xl font-extrabold ${stat.color || 'text-white'}`}>{stat.value}</div>
                        <div className="text-[10px] text-white/30 mt-0.5 uppercase tracking-wide">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Two column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Issues list */}
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 overflow-hidden">
                    <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                      <span className="text-xs font-bold text-white/60 uppercase tracking-wide">Active Issues</span>
                      <span className="text-[10px] text-red-400 font-bold animate-pulse">● LIVE</span>
                    </div>
                    <div className="divide-y divide-white/5">
                      {issueList.map((issue, i) => {
                        const Icon = issue.icon;
                        return (
                          <div key={i} className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group">
                            <div className={`w-7 h-7 rounded-lg ${issue.bg} border flex items-center justify-center shrink-0`}>
                              <Icon className={`w-3.5 h-3.5 ${issue.color}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`text-[11px] font-bold ${issue.color}`}>{issue.type}</div>
                              <div className="text-[10px] text-white/30 font-mono truncate">{issue.page}</div>
                            </div>
                            <button className="opacity-0 group-hover:opacity-100 px-2 py-1 text-[10px] font-bold bg-[#E1F28F] text-[#0A2E22] rounded transition-all">
                              Fix
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* AI suggestions */}
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 overflow-hidden">
                    <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                      <span className="text-xs font-bold text-white/60 uppercase tracking-wide flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#E1F28F]" />
                        AI Link Suggestions
                      </span>
                    </div>
                    <div className="divide-y divide-white/5">
                      {aiSuggestions.map((s, i) => (
                        <div key={i} className="px-4 py-3 hover:bg-white/5 transition-colors group">
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[11px] font-mono text-white/40">{s.confidence}%</span>
                              <div className="h-3 w-px bg-white/10"></div>
                              <span className="text-[11px] text-[#E1F28F] font-bold">match</span>
                            </div>
                            <button className="opacity-0 group-hover:opacity-100 flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold bg-[#E1F28F] text-[#0A2E22] rounded transition-all">
                              <ChevronRight className="w-3 h-3" />
                              Add
                            </button>
                          </div>
                          <div className="text-[11px] text-white/70">
                            <span className="font-semibold text-white/90">"{s.from}"</span>
                            <span className="text-white/30 mx-1">→</span>
                            <span className="text-[#E1F28F]/80">"{s.to}"</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 py-3 border-t border-white/5">
                      <a
                        href="https://dash.dofollo.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#E1F28F] text-[#0A2E22] rounded-xl font-bold text-xs hover:bg-white transition-colors"
                      >
                        Apply All AI Suggestions <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
