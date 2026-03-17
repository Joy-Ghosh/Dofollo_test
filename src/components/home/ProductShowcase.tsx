import React from 'react';
import { AlertTriangle, CheckCircle, Link, Zap, Eye, FileText, BarChart3, ArrowRight } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

export default function ProductShowcase() {
    return (
        <section id="product-showcase" className="py-24 bg-[#F8FAF9] relative overflow-hidden">
            {/* Subtle background accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#CFEA7B]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A2E22]/3 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto relative z-10">
                {/* Headline */}
                <ScrollReveal variant="fade-up" className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0A2E22] mb-6 tracking-tight leading-tight">
                        See What's Holding Your <span className="text-[#CFEA7B]">Rankings Back</span>
                    </h2>
                    <p className="text-[#0A2E22]/70 text-lg leading-relaxed">
                        Your website, clearly mapped and actionable. Fix issues faster than ever.
                    </p>
                </ScrollReveal>

                {/* Dashboard Mockup - Focused Workspace */}
                <ScrollReveal variant="scale-up" delay={0.2} className="relative">
                    {/* Main Dashboard Container */}
                    <div className="relative bg-white rounded-3xl border border-[#E6ECE9] shadow-[0_8px_32px_-8px_rgba(10,46,34,0.08)] overflow-hidden">
                        {/* Main Dashboard Content */}
                        <div className="flex h-[620px]">
                            {/* Sidebar - Minimal Context */}
                            <div className="w-56 bg-[#F8FAF9] border-r border-[#E6ECE9] p-6">
                                <nav className="space-y-1">
                                    <div className="flex items-center gap-3 px-4 py-2.5 bg-[#CFEA7B]/15 rounded-lg text-[#0A2E22] font-medium text-sm">
                                        <Eye className="w-4 h-4" />
                                        Overview
                                    </div>
                                    <div className="flex items-center gap-3 px-4 py-2.5 text-[#0A2E22]/50 text-sm">
                                        <FileText className="w-4 h-4" />
                                        Pages
                                    </div>
                                    <div className="flex items-center gap-3 px-4 py-2.5 text-[#0A2E22]/50 text-sm">
                                        <AlertTriangle className="w-4 h-4" />
                                        Issues
                                    </div>
                                    <div className="flex items-center gap-3 px-4 py-2.5 text-[#0A2E22]/50 text-sm">
                                        <Link className="w-4 h-4" />
                                        Links
                                    </div>
                                </nav>
                            </div>

                            {/* Main Issues Panel - Primary Focus */}
                            <div className="flex-1 bg-white border-r border-[#E6ECE9] p-8 flex flex-col">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-2xl font-bold text-[#0A2E22]">Active Issues</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 bg-[#CFEA7B] rounded-full animate-pulse" />
                                        <span className="text-[#0A2E22] font-semibold text-sm">Live</span>
                                    </div>
                                </div>

                                <div className="space-y-4 flex-1 overflow-y-auto">
                                    {/* Issue 1 - Highlighted */}
                                    <div className="bg-[#CFEA7B]/10 border border-[#CFEA7B]/40 rounded-2xl p-5 hover:bg-[#CFEA7B]/15 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-[#0A2E22] text-base mb-1">Broken Link</h4>
                                                <p className="text-[#0A2E22]/70 text-sm font-mono mb-2">/blog/seo-guide</p>
                                                <p className="text-[#0A2E22]/50 text-xs">2 hours ago</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px bg-[#E6ECE9]" />

                                    {/* Issue 2 */}
                                    <div className="bg-white border border-[#E6ECE9] rounded-2xl p-5 hover:bg-[#F8FAF9] transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <AlertTriangle className="w-5 h-5 text-orange-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-[#0A2E22] text-base mb-1">Orphan Page</h4>
                                                <p className="text-[#0A2E22]/70 text-sm font-mono mb-2">/services/audit</p>
                                                <p className="text-[#0A2E22]/50 text-xs">5 hours ago</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px bg-[#E6ECE9]" />

                                    {/* Issue 3 */}
                                    <div className="bg-white border border-[#E6ECE9] rounded-2xl p-5 hover:bg-[#F8FAF9] transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <AlertTriangle className="w-5 h-5 text-amber-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-[#0A2E22] text-base mb-1">Weak Linking</h4>
                                                <p className="text-[#0A2E22]/70 text-sm font-mono mb-2">/blog/crawl-budget</p>
                                                <p className="text-[#0A2E22]/50 text-xs">1 day ago</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px bg-[#E6ECE9]" />

                                    {/* Fixed Issue */}
                                    <div className="bg-[#CFEA7B]/8 border border-[#CFEA7B]/25 rounded-2xl p-5 opacity-70">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-[#0A2E22] line-through text-base mb-1">Thin Content</h4>
                                                <p className="text-[#0A2E22]/70 text-sm font-mono mb-2">/blog/content-strategy</p>
                                                <p className="text-[#0A2E22]/50 text-xs">Fixed 2 hours ago</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Partially visible scroll */}
                                    <div className="bg-white border border-[#E6ECE9] rounded-2xl p-5 opacity-40">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="font-semibold text-[#0A2E22] text-base mb-1">Missing Alt Text</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* AI Suggestions Panel - Action Focused */}
                            <div className="w-80 bg-[#CFEA7B]/8 border-l border-[#E6ECE9] p-8 flex flex-col">
                                <h3 className="text-xl font-bold text-[#0A2E22] mb-8">AI Suggestions</h3>

                                <div className="space-y-5 flex-1">
                                    <div className="bg-white border border-[#CFEA7B]/30 rounded-2xl p-4">
                                        <div className="flex items-baseline justify-between mb-3">
                                            <span className="text-[#0A2E22] font-semibold">98% match</span>
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        </div>
                                        <p className="text-[#0A2E22]/70 text-sm mb-2">Technical SEO Guide</p>
                                        <div className="flex items-center gap-2 text-[#0A2E22] font-semibold text-sm">
                                            <ArrowRight className="w-4 h-4" />
                                            Crawl Budget Optimization
                                        </div>
                                    </div>

                                    <div className="bg-white border border-[#CFEA7B]/30 rounded-2xl p-4">
                                        <div className="flex items-baseline justify-between mb-3">
                                            <span className="text-[#0A2E22] font-semibold">94% match</span>
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        </div>
                                        <p className="text-[#0A2E22]/70 text-sm mb-2">Site Architecture</p>
                                        <div className="flex items-center gap-2 text-[#0A2E22] font-semibold text-sm">
                                            <ArrowRight className="w-4 h-4" />
                                            XML Sitemap Strategy
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full mt-8 bg-[#0A2E22] text-white rounded-xl py-3.5 font-semibold hover:bg-[#0A2E22]/90 transition-colors shadow-md hover:shadow-lg">
                                    Apply All Fixes
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Floating AI Card - Depth & Intelligence */}
                    <div className="absolute top-24 right-10 bg-white rounded-2xl shadow-xl border border-[#CFEA7B]/40 p-5 max-w-xs z-20 transform hover:translate-y-1 transition-transform">
                        <div className="flex items-center gap-2 mb-3">
                            <Zap className="w-4 h-4 text-[#CFEA7B]" />
                            <span className="text-[#0A2E22] font-semibold text-sm">AI Suggestion</span>
                        </div>
                        <p className="text-[#0A2E22]/70 text-sm mb-2">Add link:</p>
                        <p className="text-[#0A2E22] font-semibold text-sm mb-4">
                            SEO Guide → Crawl Optimization
                        </p>
                        <button className="w-full bg-[#CFEA7B] text-[#0A2E22] rounded-lg py-2.5 font-semibold text-sm hover:bg-[#CFEA7B]/90 transition-colors">
                            Apply
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
