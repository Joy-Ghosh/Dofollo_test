import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Shield, Crown, Star, Sparkles } from 'lucide-react';
import homeData from '../../data/pages/home.json';

const iconMap: { [key: string]: React.ElementType } = { Zap, Crown, Shield };

// Slot-machine style number flip
function SlotPrice({ value }: { value: string | number }) {
    return (
        <span
            className="tabular-nums"
            style={{ display: 'inline-block', animation: 'slotFlip 0.4s cubic-bezier(0.16,1,0.3,1) both' }}
        >
            {value}
        </span>
    );
}

export default function PricingPreview() {
    const [isYearly, setIsYearly] = useState(false);
    const { pricing_section } = homeData;

    return (
        <section className="py-24 md:py-32 bg-white text-[#0A2E22] relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-15%] right-[-8%] w-[600px] h-[600px] bg-[#E1F28F]/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] bg-[#045C4E]/8 rounded-full blur-[120px]" />
                {/* Subtle dot grid */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(10,46,34,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            <div className="container mx-auto relative z-10">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2E22]/5 border border-[#0A2E22]/10 text-[#045C4E] font-bold text-xs uppercase tracking-wider mb-5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Pricing
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold mb-4 tracking-tight text-[#0A2E22]">
                        {pricing_section.heading_first}{' '}
                        <span className="text-[#045C4E]">{pricing_section.heading_highlight}</span>
                    </h2>
                    <p className="text-lg text-[#0A2E22]/60 leading-relaxed">
                        {pricing_section.description}
                    </p>
                </div>

                {/* Billing Toggle */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex items-center p-1 bg-[#0A2E22]/5 rounded-full border border-[#0A2E22]/8 gap-1">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${!isYearly
                                ? 'bg-[#0A2E22] text-white shadow-md'
                                : 'text-[#0A2E22]/50 hover:text-[#0A2E22]'
                                }`}
                        >
                            {pricing_section.monthly_label}
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${isYearly
                                ? 'bg-[#0A2E22] text-white shadow-md'
                                : 'text-[#0A2E22]/50 hover:text-[#0A2E22]'
                                }`}
                        >
                            {pricing_section.yearly_label}
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E1F28F] text-[#0A2E22] font-extrabold">
                                {pricing_section.yearly_discount}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 items-stretch">
                    {pricing_section.plans.map((plan: any, index: number) => {
                        const Icon = iconMap[plan.icon] || Zap;
                        const isHighlight = plan.highlight;

                        return (
                            <div
                                key={index}
                                className={`relative flex flex-col rounded-3xl transition-all duration-300 ${isHighlight
                                    ? 'bg-[#0A2E22] text-white shadow-[0_30px_80px_-20px_rgba(10,46,34,0.45)] md:scale-[1.04] z-10 ring-1 ring-[#E1F28F]/20'
                                    : 'bg-white text-[#0A2E22] border border-[#0A2E22]/10 hover:border-[#045C4E]/25 hover:shadow-[0_20px_60px_-15px_rgba(10,46,34,0.12)]'
                                    }`}
                            >
                                {/* Highlight glow inside card */}
                                {isHighlight && (
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#E1F28F]/8 rounded-full blur-[80px] pointer-events-none" />
                                )}

                                {/* Popular badge — clean, no emoji */}
                                {isHighlight && (
                                    <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 z-20">
                                        <div className="flex items-center gap-1.5 bg-[#E1F28F] text-[#0A2E22] px-4 py-1.5 rounded-full shadow-[0_4px_20px_rgba(225,242,143,0.5)]">
                                            <Star className="w-3 h-3 fill-[#0A2E22]" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">
                                                {plan.tag || 'Most Popular'}
                                            </span>
                                            <Star className="w-3 h-3 fill-[#0A2E22]" />
                                        </div>
                                    </div>
                                )}

                                <div className="p-8 flex flex-col flex-grow">
                                    {/* Plan icon + name */}
                                    <div className="mb-6">
                                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 ${isHighlight
                                            ? 'bg-[#E1F28F]/15 text-[#E1F28F]'
                                            : 'bg-[#0A2E22]/5 text-[#045C4E]'
                                            }`}>
                                            <Icon size={20} />
                                        </div>
                                        <h3 className="text-2xl font-extrabold mb-1.5">{plan.name}</h3>
                                        <p className={`text-sm leading-relaxed min-h-[48px] ${isHighlight ? 'text-white/60' : 'text-[#0A2E22]/55'
                                            }`}>
                                            {plan.description}
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div className={`h-px w-full mb-6 ${isHighlight ? 'bg-white/8' : 'bg-[#0A2E22]/6'}`} />

                                    {/* Price */}
                                    <div className="mb-7">
                                        <div className="flex items-end gap-1.5">
                                            <span className={`text-xs font-bold mb-2 ${isHighlight ? 'text-white/50' : 'text-[#0A2E22]/40'}`}>$</span>
                                            <span className="text-5xl font-black tracking-tight leading-none">
                                                <SlotPrice value={isYearly ? plan.price_yearly : plan.price_monthly} />
                                            </span>
                                            <span className={`text-sm font-medium mb-1.5 ${isHighlight ? 'text-white/50' : 'text-[#0A2E22]/40'}`}>
                                                / mo
                                            </span>
                                        </div>
                                        <p className={`text-xs mt-2 font-medium ${isHighlight ? 'text-[#E1F28F]/70' : 'text-[#0A2E22]/40'
                                            }`}>
                                            {isYearly ? 'Billed annually' : 'Billed monthly'}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-3.5 flex-grow mb-8">
                                        <p className={`text-[10px] font-black uppercase tracking-[0.12em] mb-4 ${isHighlight ? 'text-white/30' : 'text-[#0A2E22]/30'
                                            }`}>
                                            What's included
                                        </p>
                                        {plan.features.map((feature: string, i: number) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${isHighlight
                                                    ? 'bg-[#E1F28F]/20 text-[#E1F28F]'
                                                    : 'bg-[#045C4E]/10 text-[#045C4E]'
                                                    }`}>
                                                    <Check size={10} strokeWidth={3} />
                                                </div>
                                                <span className={`text-sm font-medium ${isHighlight ? 'text-white/85' : 'text-[#0A2E22]/75'
                                                    }`}>
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <a
                                        href="https://dash.dofollo.ai/pricing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2.5 transition-all duration-300 text-sm ${isHighlight
                                            ? 'bg-[#E1F28F] text-[#0A2E22] hover:bg-white hover:shadow-[0_10px_30px_rgba(225,242,143,0.4)] hover:-translate-y-0.5'
                                            : 'bg-[#0A2E22] text-white hover:bg-[#045C4E] hover:shadow-[0_10px_30px_rgba(10,46,34,0.25)] hover:-translate-y-0.5'
                                            }`}
                                    >
                                        {plan.cta}
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
                    {[
                        { icon: Shield, label: 'No credit card required' },
                        { icon: Check, label: 'Cancel anytime' },
                        { icon: Zap, label: 'Free migration support' },
                    ].map(({ icon: Icon, label }) => (
                        <span key={label} className="flex items-center gap-2 text-sm text-[#0A2E22]/40 font-medium">
                            <span className="w-6 h-6 rounded-full bg-[#045C4E]/8 flex items-center justify-center">
                                <Icon className="w-3 h-3 text-[#045C4E]" />
                            </span>
                            {label}
                        </span>
                    ))}
                </div>

                {/* Enterprise / Custom Plan */}
                <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl bg-[#0A2E22] p-8 md:p-10">
                    {/* Glows */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-[#E1F28F]/10 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#045C4E]/40 rounded-full blur-[60px] pointer-events-none" />
                    {/* Grid texture */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F28F]/10 border border-[#E1F28F]/20 text-[#E1F28F] font-bold text-[10px] uppercase tracking-widest mb-4">
                                <Crown className="w-3 h-3" />
                                Enterprise
                            </div>
                            <h3 className="text-2xl font-extrabold text-white mb-2">{pricing_section.custom_plan.title}</h3>
                            <p className="text-white/55 max-w-md leading-relaxed text-sm">{pricing_section.custom_plan.description}</p>
                        </div>
                        <a
                            href="/support"
                            className="group shrink-0 flex items-center gap-2 px-7 py-4 rounded-2xl bg-white text-[#0A2E22] font-bold text-sm hover:bg-[#E1F28F] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(225,242,143,0.3)] hover:-translate-y-0.5"
                        >
                            {pricing_section.custom_plan.cta}
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes slotFlip {
                    from { opacity: 0; transform: translateY(24px) scale(0.95); }
                    to   { opacity: 1; transform: translateY(0)   scale(1); }
                }
            `}</style>
        </section>
    );
}
