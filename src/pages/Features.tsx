import React, { useState } from 'react';
import Footer from '../components/Footer';
import FeatureSection from '../components/features/FeatureSection';
import TechnicalFAQ from '../components/features/TechnicalFAQ';
import FinalCTA from '../components/FinalCTA';
import CompactHero from '../components/CompactHero';
import ScrollReveal from '../components/ScrollReveal';
import featuresData from '../data/pages/features.json';
import SEO from '../components/SEO';
import seoData from '../data/seo.json';

// Helper to render visuals based on ID (since specialized components/JSX can't be in JSON)
const renderVisual = (id: string) => {
    switch (id) {
        case 'ai-suggestions':
            return (
                <div className="aspect-[4/3] bg-[#0A2E22]/5 relative overflow-hidden flex items-center justify-center p-8">
                    {/* Mock UI */}
                    <div className="w-full h-full bg-white rounded-xl shadow-sm border border-[#0A2E22]/5 p-6 flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <div className="h-2 w-24 bg-[#0A2E22]/10 rounded-full" />
                            </div>
                            <div className="h-8 w-24 bg-[#E1F28F] rounded-lg opacity-50" />
                        </div>
                        <div className="space-y-4 flex-1">
                            <div className="p-4 bg-[#0A2E22]/5 rounded-lg border border-[#0A2E22]/5">
                                <p className="text-sm text-[#0A2E22]/60 leading-relaxed mb-3">
                                    ...improving your <span className="bg-[#E1F28F]/30 px-1 py-0.5 rounded text-[#045C4E] font-bold border-b-2 border-[#E1F28F]">site architecture</span> is crucial for SEO...
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-[#0A2E22]">Suggested Link: <strong>/guides/site-structure</strong></span>
                                    <span className="text-xs font-mono text-[#045C4E] bg-white px-2 py-1 rounded shadow-sm">98% Match</span>
                                </div>
                            </div>
                            <div className="p-4 bg-white rounded-lg border border-[#0A2E22]/5 opacity-50">
                                <div className="h-2 w-full bg-[#0A2E22]/5 rounded mb-2" />
                                <div className="h-2 w-3/4 bg-[#0A2E22]/5 rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'content-map':
            return (
                <div className="aspect-[4/3] bg-[#0D261F] relative overflow-hidden flex items-center justify-center">
                    {/* Network Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#E1F28F05_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

                    {/* Connection Lines (SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <circle cx="50%" cy="50%" r="90" stroke="#E1F28F" strokeWidth="1" strokeDasharray="4 4" className="opacity-10 animate-[spin_60s_linear_infinite]" />
                        <circle cx="50%" cy="50%" r="140" stroke="#E1F28F" strokeWidth="1" strokeDasharray="4 4" className="opacity-5 animate-[spin_80s_linear_infinite_reverse]" />

                        {/* Connections to Center */}
                        <line x1="50%" y1="50%" x2="30%" y2="30%" stroke="#E1F28F" strokeWidth="1" className="opacity-20" />
                        <line x1="50%" y1="50%" x2="70%" y2="25%" stroke="#E1F28F" strokeWidth="1" className="opacity-20" />
                        <line x1="50%" y1="50%" x2="75%" y2="65%" stroke="#E1F28F" strokeWidth="1" className="opacity-20" />
                        <line x1="50%" y1="50%" x2="25%" y2="70%" stroke="#E1F28F" strokeWidth="1" className="opacity-20" />

                        {/* Cluster Connections */}
                        <line x1="30%" y1="30%" x2="20%" y2="20%" stroke="#E1F28F" strokeWidth="1" className="opacity-10" />
                        <line x1="30%" y1="30%" x2="40%" y2="15%" stroke="#E1F28F" strokeWidth="1" className="opacity-10" />
                    </svg>

                    <div className="relative z-10 w-full h-full">
                        {/* Center Hub (Homepage) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-16 h-16 bg-[#E1F28F] rounded-full flex items-center justify-center shadow-[0_0_40px_-5px_#E1F28F50] z-20 relative animate-pulse-slow">
                                <div className="w-3 h-3 bg-[#0A2E22] rounded-sm" />
                            </div>
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#E1F28F] uppercase tracking-widest opacity-80 whitespace-nowrap">Root Domain</div>
                        </div>

                        {/* Cluster 1 (Top Left) */}
                        <div className="absolute top-[30%] left-[30%] -translate-x-1/2 -translate-y-1/2">
                            <div className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                            {/* Satellite Nodes */}
                            <div className="absolute -top-8 -left-6 w-4 h-4 bg-white/5 rounded-full border border-white/10" />
                            <div className="absolute -top-4 -right-8 w-3 h-3 bg-white/5 rounded-full border border-white/10" />
                        </div>

                        {/* Cluster 2 (Top Right) */}
                        <div className="absolute top-[25%] left-[70%] -translate-x-1/2 -translate-y-1/2">
                            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                        </div>

                        {/* Cluster 3 (Bottom Right) */}
                        <div className="absolute top-[65%] left-[75%] -translate-x-1/2 -translate-y-1/2">
                            <div className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                        </div>

                        {/* Cluster 4 (Bottom Left) */}
                        <div className="absolute top-[70%] left-[25%] -translate-x-1/2 -translate-y-1/2">
                            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                        </div>

                        {/* Orphan Page (Problem Indicator) */}
                        <div className="absolute top-[80%] right-[20%] animate-bounce-slow">
                            <div className="relative group cursor-pointer">
                                <div className="w-8 h-8 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-full flex items-center justify-center shadow-[0_0_15px_-5px_#ef4444]">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                </div>
                                {/* Hover Tooltip for Context */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-red-900/90 text-red-100 text-[10px] px-2 py-1 rounded border border-red-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    Orphan Page Detected
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'competitor-analysis':
            return (
                <div className="aspect-[4/3] bg-white relative overflow-hidden flex items-center justify-center p-8">
                    <div className="w-full space-y-3">
                        {/* Bar Chart Mockup */}
                        <div className="flex items-center gap-4">
                            <span className="w-20 text-xs font-bold text-right">You</span>
                            <div className="h-8 bg-[#0A2E22] rounded w-[60%] relative group">
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white font-mono">2.4k Links</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-20 text-xs font-bold text-right text-gray-400">Competitor A</span>
                            <div className="h-8 bg-gray-100 rounded w-[85%] relative">
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500 font-mono">4.1k Links</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-20 text-xs font-bold text-right text-gray-400">Competitor B</span>
                            <div className="h-8 bg-gray-100 rounded w-[40%] relative">
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500 font-mono">1.2k Links</div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-[#0A2E22]/5 rounded-xl border border-[#E1F28F]/50 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#E1F28F] flex items-center justify-center text-[#0A2E22] font-bold">!</div>
                            <div>
                                <div className="text-xs font-bold text-[#045C4E]">Gap Opportunity</div>
                                <div className="text-[10px] text-[#0A2E22]/60">Competitors are linking "SEO Tools" 3x more.</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'automation':
            return (
                <div className="aspect-[4/3] bg-[#0A2E22] relative overflow-hidden flex items-center justify-center p-8">
                    <div className="relative w-full max-w-sm bg-[#0D261F] border border-white/5 rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-sm font-bold text-white">Pending Changes</span>
                            <span className="px-2 py-1 bg-[#E1F28F] text-[#0A2E22] text-xs font-bold rounded">12 Ready</span>
                        </div>
                        <div className="space-y-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full border border-white/20" />
                                        <div className="h-2 w-20 bg-white/10 rounded" />
                                    </div>
                                    <div className="h-2 w-8 bg-[#045C4E] rounded" />
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button className="bg-[#E1F28F] text-[#0A2E22] px-4 py-2 rounded-lg text-sm font-bold shadow-[0_0_20px_-5px_#E1F28F]">
                                Deploy All
                            </button>
                        </div>
                    </div>
                </div>
            );
        case 'analytics':
            return (
                <div className="aspect-[4/3] bg-white relative overflow-hidden flex items-center justify-center p-8">
                    {/* Line Chart Abstract */}
                    <div className="w-full h-full relative">
                        <div className="absolute inset-0 flex items-end justify-between px-4 pb-8 opacity-10">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="w-px h-full bg-[#0A2E22]" />
                            ))}
                        </div>
                        <svg className="absolute inset-0 w-full h-full p-4 overflow-visible">
                            <path d="M0,200 C50,200 100,150 150,150 C200,150 250,50 350,20" fill="none" stroke="#0A2E22" strokeWidth="4" />
                            <path d="M0,200 C50,200 100,150 150,150 C200,150 250,50 350,20" fill="none" stroke="#E1F28F" strokeWidth="4" strokeDasharray="10,10" className="opacity-50" transform="translate(0, 20)" />
                            <circle cx="350" cy="20" r="8" fill="#E1F28F" stroke="#0A2E22" strokeWidth="3" />
                        </svg>
                        <div className="absolute top-10 right-10 bg-[#0A2E22] text-white p-3 rounded-xl shadow-xl">
                            <div className="text-[10px] opacity-70">Organic Traffic</div>
                            <div className="text-xl font-bold">+124%</div>
                        </div>
                    </div>
                </div>
            );
        case 'integrations':
            return (
                <div className="aspect-[4/3] bg-[#0A2E22] relative overflow-hidden flex items-center justify-center p-8">
                    <div className="grid grid-cols-2 gap-4 max-w-xs w-full">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-[#E1F28F]/30 transition-all cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-white/20" />
                            </div>
                        ))}
                    </div>
                </div>
            );
        default:
            return null;
    }
}

export default function Features() {
    const { hero, navigation, sections, value_summary, testimonials } = featuresData;
    const [activeNav, setActiveNav] = useState(navigation[0]?.id ?? '');

    React.useEffect(() => {
        const handleScroll = () => {
            for (const item of [...navigation].reverse()) {
                const el = document.getElementById(item.id);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveNav(item.id);
                    return;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navigation]);

    return (
        <div className="min-h-screen bg-[#0A2E22] text-white">
            <SEO {...seoData.pages.features} />
            {/* 1. Compact Hero */}
            <CompactHero
                badge={hero.badge}
                title={
                    <>
                        {hero.title_first} <br />
                        <span className="text-[#E1F28F]">{hero.title_highlight}</span>
                    </>
                }
                description={hero.description}
            />

            {/* 2. Quick Nav */}
            <div className="sticky top-16 md:top-[72px] z-40 bg-[#0A2E22]/90 backdrop-blur-md border-b border-white/5">
 <div className="container mx-auto overflow-x-auto no-scrollbar">
                    <div className="flex items-center justify-center gap-2 py-3 min-w-max">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                    setActiveNav(item.id);
                                }}
                                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeNav === item.id
                                        ? 'bg-[#E1F28F]/15 text-[#E1F28F] border border-[#E1F28F]/30'
                                        : 'text-white/50 hover:text-white'
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Feature Sections */}
            <div className="relative z-10">
                {sections.map((section) => (
                    <FeatureSection
                        key={section.id}
                        id={section.id}
                        theme={section.theme as "light" | "dark"}
                        alignment={section.alignment as "left" | "right"}
                        badge={section.badge}
                        title={section.title}
                        description={section.description}
                        bullets={section.bullets}
                        visual={renderVisual(section.id)}
                    />
                ))}
            </div>

            {/* 4. Value Summary Grid */}
            <section className="py-24 bg-white border-t border-[#0A2E22]/5 text-[#0A2E22] overflow-hidden relative">
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E1F28F]/10 rounded-full blur-[100px] pointer-events-none" />
 <div className="container mx-auto relative z-10">
                    <ScrollReveal variant="fade-up">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">{value_summary.title}</h2>
                            <p className="text-[#0A2E22]/60 max-w-xl mx-auto">{value_summary.subtitle}</p>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {value_summary.items.map((item, i) => (
                            <ScrollReveal key={i} variant="fade-up" delay={i * 0.1}>
                                <div className="p-8 bg-white rounded-2xl border border-[#0A2E22]/10 shadow-sm hover:border-[#045C4E]/25 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                                    <div className="w-12 h-12 bg-[#0A2E22] rounded-xl flex items-center justify-center mb-5 text-[#E1F28F] font-extrabold text-lg group-hover:bg-[#045C4E] transition-colors">
                                        {(i + 1).toString().padStart(2, '0')}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#0A2E22] mb-2">{item.title}</h3>
                                    <p className="text-sm text-[#0A2E22]/60 leading-relaxed">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Customer Proof */}
            <section className="py-24 bg-[#0A2E22] border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E1F28F]/8 rounded-full blur-[80px] pointer-events-none" />
 <ScrollReveal variant="fade-up" className="container mx-auto text-center relative z-10">
                    <div className="inline-flex gap-0.5 text-[#E1F28F] mb-6">
                        {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-2xl">&#9733;</span>)}
                    </div>
                    <div className="text-[100px] leading-none text-[#E1F28F]/10 font-serif mb-[-36px] select-none">&ldquo;</div>
                    <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed max-w-4xl mx-auto mb-10 text-white relative z-10" dangerouslySetInnerHTML={{ __html: `"${testimonials.quote}"` }} />
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#E1F28F] to-[#045C4E] rounded-full ring-2 ring-[#E1F28F]/30 ring-offset-2 ring-offset-[#0A2E22]" />
                        <div className="text-left">
                            <div className="text-sm font-bold text-white">{testimonials.author}</div>
                            <div className="text-xs text-[#E1F28F]/70 font-mono tracking-wide">{testimonials.role}</div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* 6. Technical FAQ */}
            <TechnicalFAQ />

            {/* 7. Final CTA */}
            <FinalCTA />

            <Footer />
        </div>
    );
}
