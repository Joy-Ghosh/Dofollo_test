import React from 'react';
import CompactHero from '../components/CompactHero';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import FeatureSection from '../components/features/FeatureSection';
import AgencyFAQ from '../components/AgencyFAQ';
import seoData from '../data/seo.json';
import agencyData from '../data/pages/agency.json';

// Helper to render visuals for agency sections
const renderVisual = (id: string) => {
    switch (id) {
        case 'multi-site-management':
            return (
                <div className="aspect-[4/3] bg-[#0D261F] relative overflow-hidden flex items-center justify-center p-8">
                    {/* Dashboard Mockup */}
                    <div className="w-full h-full bg-[#0A2E22] rounded-xl border border-white/10 p-4 shadow-2xl flex flex-col gap-3">
                        {/* Header */}
                        <div className="h-8 flex justify-between items-center border-b border-white/5 pb-2">
                            <div className="text-xs font-bold text-white tracking-wide">CLIENT DASHBOARD</div>
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                            </div>
                        </div>
                        {/* Client List */}
                        <div className="space-y-2 flex-1 overflow-hidden">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded bg-gradient-to-br from-[#E1F28F] to-[#045C4E] opacity-80" />
                                        <div className="h-2 w-24 bg-white/20 rounded" />
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="px-2 py-0.5 rounded text-[8px] bg-[#E1F28F]/20 text-[#E1F28F] border border-[#E1F28F]/20">Active</div>
                                    </div>
                                </div>
                            ))}
                            <div className="flex items-center justify-center p-2 border border-dashed border-white/10 rounded text-xs text-white/40">
                                + Add New Project
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'white-label-reports':
            return (
                <div className="aspect-[4/3] bg-white relative overflow-hidden flex items-center justify-center p-8">
                    {/* Report Preview */}
                    <div className="w-[80%] aspect-[1/1.4] bg-white shadow-2xl border border-gray-100 rounded-lg p-6 flex flex-col relative rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                        {/* Header with Logo Placeholder */}
                        <div className="flex justify-between items-start mb-8">
                            <div className="w-24 h-8 bg-gray-200 rounded animate-pulse" />
                            <div className="text-[10px] text-gray-400 font-mono">CONFIDENTIAL</div>
                        </div>
                        {/* Content lines */}
                        <div className="space-y-4">
                            <div className="h-4 w-3/4 bg-gray-100 rounded" />
                            <div className="h-4 w-1/2 bg-gray-100 rounded" />
                            <div className="h-32 w-full bg-[#E1F28F]/20 rounded border border-[#E1F28F]/30 mt-4 flex items-end justify-around p-4">
                                <div className="w-4 h-12 bg-[#045C4E]/20 rounded-t" />
                                <div className="w-4 h-16 bg-[#045C4E]/40 rounded-t" />
                                <div className="w-4 h-24 bg-[#045C4E]/60 rounded-t" />
                                <div className="w-4 h-20 bg-[#045C4E]/80 rounded-t" />
                            </div>
                        </div>
                        {/* Watermark */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                            <span className="text-4xl font-black -rotate-45">YOUR LOGO</span>
                        </div>
                    </div>
                </div>
            );
        case 'team-collaboration':
            return (
                <div className="aspect-[4/3] bg-[#0A2E22] relative overflow-hidden flex items-center justify-center p-8">
                    {/* Chat/Comment Mockup */}
                    <div className="w-full max-w-sm space-y-4">
                        {[1, 2].map((i) => (
                            <div key={i} className={`flex gap-3 ${i === 2 ? 'flex-row-reverse' : ''}`}>
                                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 shrink-0" />
                                <div className={`p-3 rounded-2xl max-w-[80%] text-xs leading-relaxed ${i === 1 ? 'bg-white/5 rounded-tl-none border border-white/5 text-white/80' : 'bg-[#E1F28F] rounded-tr-none text-[#0A2E22] font-medium'}`}>
                                    {i === 1 ? "Can you check the internal links for the 'SaaS' cluster?" : "Done! Optimizing anchors now."}
                                </div>
                            </div>
                        ))}
                        <div className="mt-4 flex items-center gap-2 p-2 bg-white/5 rounded-full border border-white/10">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px]">+</div>
                            <div className="h-2 w-32 bg-white/10 rounded" />
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
    }
}

export default function Agency() {
    const { hero, trust, sections, value_summary, testimonials, cta } = agencyData;

    return (
        <div className="min-h-screen bg-[#0A2E22] text-white font-sans">
            <SEO {...seoData.pages.agency} />

            <CompactHero
                badge={hero.badge}
                title={hero.title}
                description={hero.description}
            />

            {/* Trusted By Section */}
            <div className="py-12 border-b border-white/5 bg-[#0D261F] relative">
                <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-8">{trust.text}</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos */}
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="h-8 w-24 bg-white/10 rounded flex items-center justify-center text-[10px] text-white/30 font-mono">
                                LOGO {i}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Feature Sections (Deep Dive) */}
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
                        bullets={section.bullets || []}
                        visual={renderVisual(section.id)}
                    />
                ))}
            </div>

            {/* Value Summary (Why Choose Us) */}
            <section className="py-24 bg-white border-t border-[#0A2E22]/5 text-[#0A2E22]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 tracking-tight">{value_summary.title}</h2>
                        <p className="text-[#0A2E22]/70">{value_summary.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {value_summary.items.map((item, i) => (
                            <div key={i} className="p-6 bg-white rounded-2xl border border-[#0A2E22]/10 shadow-sm hover:border-[#045C4E]/20 transition-colors hover:shadow-md">
                                <div className="w-12 h-12 bg-[#045C4E]/5 rounded-xl flex items-center justify-center mb-4 text-[#045C4E] font-bold text-xl">
                                    {(i + 1).toString().padStart(2, '0')}
                                </div>
                                <h3 className="text-lg font-bold text-[#0A2E22] mb-2">{item.title}</h3>
                                <p className="text-sm text-[#0A2E22]/70">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-20 bg-[#0A2E22] border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-20 pointer-events-none" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex gap-1 text-[#E1F28F] mb-6">
                        {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-xl">★</span>)}
                    </div>
                    <blockquote className="text-2xl md:text-4xl font-medium leading-relaxed max-w-4xl mx-auto mb-8 text-white">
                        "{testimonials.quote}"
                    </blockquote>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <div className="text-base font-bold text-white">{testimonials.author}</div>
                        <div className="text-sm text-[#E1F28F] font-mono tracking-wide">{testimonials.role}</div>
                    </div>
                </div>
            </section>

            {/* FAO */}
            <AgencyFAQ />

            <FinalCTA
                headingPre="Ready to"
                headingHighlight="Scale"
                headingPost="Your Agency?"
                description={cta.description}
                primaryBtn="Get Started"
                secondaryBtn="Talk to Sales"
            />

            <Footer />
        </div>
    );
}
