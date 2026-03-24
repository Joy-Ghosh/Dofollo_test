import React, { useState } from 'react';
import {
  Link as LinkIcon, Shield, TrendingUp, Wrench,
  CheckCircle, ArrowRight, Sparkles,
} from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const systemCategories = [
  {
    id: 'link',
    icon: LinkIcon,
    label: 'Link Optimization',
    color: 'border-[#a8b800]/30 bg-[#f5ffd6]',
    iconColor: 'text-[#5c7a00]',
    activeGlow: 'shadow-[0_4px_24px_rgba(92,122,0,0.12)]',
    features: [
      'AI-suggested contextual internal links',
      'Anchor text quality scoring',
      'Link equity flow visualization',
      'Orphan page detector & fixer',
      'Broken link auto-repair',
    ],
  },
  {
    id: 'structure',
    icon: Shield,
    label: 'Structure Health',
    color: 'border-[#2d6e65]/30 bg-[#e6f7f5]',
    iconColor: 'text-[#2d6e65]',
    activeGlow: 'shadow-[0_4px_24px_rgba(45,110,101,0.12)]',
    features: [
      'Site architecture depth analysis',
      'Crawl budget optimization',
      'Canonical URL validation',
      'Redirect chain detection',
      'XML sitemap coverage audit',
    ],
  },
  {
    id: 'growth',
    icon: TrendingUp,
    label: 'Growth Signals',
    color: 'border-blue-600/30 bg-blue-50',
    iconColor: 'text-blue-700',
    activeGlow: 'shadow-[0_4px_24px_rgba(29,78,216,0.10)]',
    features: [
      'Pages close to ranking higher (page 2 detector)',
      'Traffic uplift predictions',
      'Google Search Console integration',
      'Weekly ranking movement tracker',
      'Competitive gap identification',
    ],
  },
  {
    id: 'technical',
    icon: Wrench,
    label: 'Technical SEO',
    color: 'border-purple-600/30 bg-purple-50',
    iconColor: 'text-purple-700',
    activeGlow: 'shadow-[0_4px_24px_rgba(126,34,206,0.10)]',
    features: [
      'H1/H2 structure validation',
      'Meta description + title audits',
      'Image alt text gap finder',
      'Schema markup checker',
      'Page speed impact signals',
    ],
  },
];

export default function FeatureSystems() {
  const [activeId, setActiveId] = useState<string>('link');

  const activeCategory = systemCategories.find((c) => c.id === activeId)!;

  return (
    <section className="py-24 md:py-32 bg-white text-[#0A2E22] relative overflow-hidden">
      {/* Glow on light */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#E1F28F]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#045C4E]/5 rounded-full blur-[100px] pointer-events-none" />
      {/* Top blend from dark AIFixEngine */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0A2E22]/8 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A2E22]/5 border border-[#0A2E22]/10 text-[#045C4E] font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            The Full System
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-tight text-[#0A2E22]">
            Not a toolbox.{' '}
            <span className="text-[#045C4E]">A complete SEO system.</span>
          </h2>
          <p className="text-[#0A2E22]/60 text-lg leading-relaxed max-w-xl mx-auto">
            Every module works together — from structural health to growth signals — so you never miss a ranking opportunity.
          </p>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal variant="fade-up" delay={0.05} className="flex flex-wrap justify-center gap-3 mb-12">
          {systemCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border transition-all duration-300 ${
                  isActive
                    ? `${cat.color} ${cat.iconColor} scale-105 shadow-sm`
                    : 'bg-white border-[#0A2E22]/15 text-[#0A2E22]/60 hover:text-[#0A2E22] hover:bg-[#0A2E22]/5 shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </ScrollReveal>

        {/* Feature Detail Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Left: feature list */}
          <ScrollReveal variant="fade-up" delay={0.1}>
            <div className={`rounded-2xl border-2 p-8 transition-all duration-500 ${activeCategory.color} ${activeCategory.activeGlow}`}>
              <div className={`flex items-center gap-3 mb-6`}>
                {React.createElement(activeCategory.icon, { className: `w-7 h-7 ${activeCategory.iconColor}` })}
                <h3 className="text-xl font-extrabold text-[#0A2E22]">{activeCategory.label}</h3>
              </div>
              <ul className="space-y-3">
                {activeCategory.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#0A2E22]/80 leading-relaxed">
                    <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${activeCategory.iconColor}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Right: All 4 categories overview */}
          <div className="grid grid-cols-2 gap-4">
            {systemCategories.map((cat, i) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeId;
              return (
                <ScrollReveal key={cat.id} variant="fade-up" delay={i * 0.05}>
                  <button
                    onClick={() => setActiveId(cat.id)}
                    className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 ${
                      isActive
                        ? `${cat.color} border-2 ${cat.activeGlow} scale-[1.03]`
                        : 'bg-white border border-[#0A2E22]/15 hover:bg-[#0A2E22]/5 shadow-sm hover:shadow'
                    }`}
                  >
                    <Icon className={`w-6 h-6 mb-3 ${isActive ? cat.iconColor : 'text-[#0A2E22]/50'}`} />
                    <div className={`text-sm font-bold mb-1.5 ${isActive ? 'text-[#0A2E22]' : 'text-[#0A2E22]/70'}`}>
                      {cat.label}
                    </div>
                    <div className="text-[11px] text-[#0A2E22]/50">
                      {cat.features.length} capabilities
                    </div>
                    {isActive && (
                      <div className={`flex items-center gap-1 mt-3 text-[11px] font-bold ${cat.iconColor}`}>
                        Explore <ArrowRight className="w-3 h-3" />
                      </div>
                    )}
                  </button>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
