import React, { useState } from 'react';
import { BarChart3, Link as LinkIcon, AlertTriangle, Eye, FileText, Zap, ArrowUpRight, Search, Globe, TrendingUp, ChevronRight, Sparkles, Zap as ZapIcon, Plus, CheckCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ScrollReveal from '../ScrollReveal';
import logo from '../../assets/logo.png';

const activityData = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 30 },
  { name: 'Wed', value: 25 },
  { name: 'Thu', value: 35 },
  { name: 'Fri', value: 45 },
  { name: 'Sat', value: 50 },
  { name: 'Sun', value: 60 },
];

const sidebarNav = [
  { label: 'Overview', icon: BarChart3 },
  { label: 'Pages', icon: FileText },
  { label: 'Issues', icon: AlertTriangle },
  { label: 'Links', icon: LinkIcon },
  { label: 'Visibility', icon: Eye },
  { label: 'Reports', icon: FileText },
  { label: 'Schema Audit', icon: FileText },
  { label: 'Integrations', icon: Globe },
  { label: 'Settings', icon: FileText },
];

const criticalIssues = [
  { type: 'Canonical Mismatch', pages: '279 pages', color: 'text-red-500' },
  { type: 'Duplicate All Text', pages: '273 pages', color: 'text-red-500' },
  { type: 'Duplicate Title', pages: '244 pages', color: 'text-red-500' },
  { type: 'Duplicate Meta Description', pages: '242 pages', color: 'text-red-500' },
  { type: 'Missing H1', pages: '197 pages', color: 'text-red-500' },
];

const quickWins = [
  { icon: ZapIcon, text: 'Fix missing H1 on 137 pages' },
  { icon: FileText, text: 'Add alt text to 109 images' },
];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="py-24 md:py-32 bg-white text-[#0A2E22] overflow-hidden">
      <div className="container mx-auto">
        <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0A2E22] mb-6 tracking-tight leading-tight">
            Your <span className="text-[#0A2E22]">Command Center</span>
          </h2>
          <p className="text-[#0A2E22]/70 text-lg leading-relaxed">
            Real-time insights and AI-powered fixes at your fingertips.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="scale-up" delay={0.2}>
          {/* Dashboard mockup */}
          <div className="bg-gradient-to-b from-[#0A2E22] to-[#0F3D2F] rounded-3xl shadow-[0_40px_80px_-20px_rgba(10,46,34,0.4)] border border-white/5 overflow-hidden">
            <div className="flex h-[650px]">
              {/* Left Sidebar */}
              <div className="w-56 border-r border-white/10 bg-[#0A2E22]/80 p-5 flex flex-col">
                {/* Logo */}
                <div className="mb-8">
                  <img src={logo} alt="Dofollo" className="h-8 w-auto" />
                </div>

                {/* Sites Section */}
                <div className="mb-6">
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-3">SITES</div>
                  <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-xs text-white/70 mb-2 flex items-center justify-between">
                    <span>emailphonelist.com</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                  <button className="w-full text-[12px] font-semibold text-white/60 py-1.5 rounded-lg hover:text-white/80 transition-colors flex items-center justify-center gap-1">
                    <Plus className="w-3 h-3" />
                    Add Site
                  </button>
                </div>

                {/* Navigation */}
                <nav className="space-y-0.5 mb-8">
                  {sidebarNav.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={idx}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          item.label === 'Overview'
                            ? 'bg-[#0A2E22] text-white'
                            : 'text-white/60 hover:text-white/80'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>

                {/* Current Plan */}
                <div className="mt-auto pt-6 border-t border-white/10">
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-3">CURRENT PLAN</div>
                  <div className="text-xs font-semibold text-white/80 mb-3">Free</div>
                  <div className="space-y-2 text-[11px] text-white/50">
                    <div>Fixes used <span className="text-white/70">7/10</span></div>
                    <div>Sites <span className="text-white/70">3/3</span></div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col overflow-auto">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
                  <div>
                    <div className="text-sm font-semibold text-white">emailphonelist.com Overview</div>
                    <div className="text-xs text-white/40 mt-0.5">Strategic insights for your domain</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="px-3 py-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5" />
                      Recrawl Site
                    </button>
                    <button className="px-3 py-1.5 text-xs font-semibold text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                      <ZapIcon className="w-3.5 h-3.5" />
                      Crawl Changes
                    </button>
                    <button className="px-3 py-1.5 text-xs font-semibold bg-[#E1F28F] text-[#0A2E22] rounded-lg hover:bg-white transition-colors flex items-center gap-1.5">
                      <ZapIcon className="w-3.5 h-3.5" />
                      Auto-Fix All
                    </button>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:text-white/70 cursor-pointer">
                      <Search className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-6 overflow-auto space-y-6">
                  {/* Top Row: Score + Activity */}
                  <div className="grid grid-cols-3 gap-6">
                    {/* Site Health Score */}
                    <div className="bg-gradient-to-br from-[#0A5C4E] to-[#0A2E22] rounded-2xl p-6 border border-white/10">
                      <div className="text-[10px] font-bold text-white/60 uppercase tracking-wider mb-4">SITE HEALTH SCORE</div>
                      <div className="mb-4">
                        <div className="text-4xl font-extrabold text-white">38</div>
                        <div className="text-xs text-white/40">/100</div>
                      </div>
                      <div className="text-[11px] text-white/60 mb-4">Updated 2/26/2026</div>
                      <div className="space-y-3">
                        <div>
                          <div className="text-[10px] text-white/60 mb-1">Optimization Progress</div>
                          <div className="text-xl font-bold text-[#E1F28F]">38%</div>
                        </div>
                        <div className="flex gap-6 text-xs text-white/60">
                          <div>
                            <div className="font-semibold text-white">276</div>
                            <div>Pages Crawled</div>
                          </div>
                          <div>
                            <div className="font-semibold text-white">1169</div>
                            <div>Critical Issues</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Activity Graph */}
                    <div className="col-span-2 bg-white/[0.03] rounded-2xl p-6 border border-white/10">
                      <div className="text-white font-semibold mb-4 text-sm">Activity</div>
                      <ResponsiveContainer width="100%" height={180}>
                        <LineChart data={activityData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                          <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" style={{ fontSize: '11px' }} />
                          <YAxis stroke="rgba(255,255,255,0.3)" style={{ fontSize: '11px' }} />
                          <Tooltip contentStyle={{ backgroundColor: '#0A2E22', border: 'none', borderRadius: '8px', color: 'white' }} />
                          <Line type="monotone" dataKey="value" stroke="#CFEA7B" strokeWidth={2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Optimization Impact + Critical Issues */}
                  <div className="grid grid-cols-3 gap-6">
                    {/* Optimization Impact */}
                    <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/10">
                      <div className="text-sm font-semibold text-white mb-6">Optimization Impact</div>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: 'Fixes Applied', value: '0', icon: ZapIcon },
                          { label: 'Issues Resolved', value: '0', icon: CheckCircle },
                          { label: 'Improved Rankings', value: '-', icon: TrendingUp },
                          { label: 'Traffic Uplift', value: '-', icon: TrendingUp },
                        ].map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <div key={i} className="text-center">
                              <Icon className="w-6 h-6 text-white/40 mx-auto mb-2" />
                              <div className="text-xl font-bold text-white">{item.value}</div>
                              <div className="text-[10px] text-white/50 mt-1">{item.label}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Critical Issues Summary */}
                    <div className="col-span-2 bg-white/[0.03] rounded-2xl p-6 border border-white/10">
                      <div className="text-sm font-semibold text-white mb-4 flex items-center justify-between">
                        <span>Critical Issues Summary</span>
                      </div>
                      <div className="space-y-2">
                        {criticalIssues.map((issue, i) => (
                          <div key={i} className="flex items-center justify-between text-xs">
                            <span className="text-white/80">{issue.type}</span>
                            <span className={`font-semibold ${issue.color}`}>{issue.pages}</span>
                          </div>
                        ))}
                      </div>
                      <button className="w-full mt-4 text-[11px] font-semibold text-[#0A2E22] bg-[#FF6B6B]/20 text-[#FF6B6B] py-2 rounded-lg hover:bg-[#FF6B6B]/30 transition-colors">
                        View all issues
                      </button>
                    </div>
                  </div>

                  {/* Bottom Row: Plugin + GSC + Quick Wins */}
                  <div className="grid grid-cols-4 gap-6">
                    {/* Dofollo Plugin */}
                    <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-semibold text-white">Dofollo Plugin</span>
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      </div>
                      <div className="text-[11px] text-orange-400 font-semibold">Not Connected</div>
                      <button className="w-full mt-3 text-[10px] font-semibold text-white/60 py-1.5 rounded hover:text-white transition-colors">
                        Connect
                      </button>
                    </div>

                    {/* GSC Status */}
                    <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-semibold text-white">GSC Status</span>
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      </div>
                      <div className="text-[11px] text-orange-400 font-semibold">Not Connected</div>
                      <button className="w-full mt-3 text-[10px] font-semibold bg-[#E1F28F] text-[#0A2E22] py-1.5 rounded hover:bg-white transition-colors">
                        Connect
                      </button>
                    </div>

                    {/* Top 5 Quick Wins */}
                    <div className="col-span-2 bg-white/[0.03] rounded-2xl p-4 border border-white/10">
                      <div className="text-[11px] font-semibold text-white mb-3">Top 5 Quick Wins</div>
                      <div className="space-y-2">
                        {quickWins.map((win, i) => {
                          const Icon = win.icon;
                          return (
                            <div key={i} className="flex items-center gap-2 text-[11px] text-white/80">
                              <ZapIcon className="w-3.5 h-3.5 text-[#E1F28F]" />
                              <span>{win.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Top Link Opportunities */}
                  <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/10">
                    <div className="text-sm font-semibold text-white">Top Link Opportunities</div>
                    <div className="text-xs text-white/50 mt-2">No link opportunities found.</div>
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
