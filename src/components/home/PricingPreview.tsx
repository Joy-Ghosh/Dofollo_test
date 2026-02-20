import React, { useState } from 'react';
import { Check, ArrowRight, Zap, Shield, Crown } from 'lucide-react';
import homeData from '../../data/pages/home.json';

const iconMap: { [key: string]: React.ElementType } = { Zap, Crown, Shield };

// Slot-machine style number flip
function SlotPrice({ value }: { value: string }) {
    return (
        <span
            className="tabular-nums"
            style={{ display: 'inline-block', animation: 'slotFlip 0.35s cubic-bezier(0.16,1,0.3,1) both' }}
        >
            {value}
        </span>
    );
}

export default function PricingPreview() {
    const [isYearly, setIsYearly] = useState(false);
    const { pricing_section } = homeData;

    return (
        <section className="py-24 bg-white text-[#0A2E22] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#E1F28F]/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#045C4E]/10 rounded-full blur-[100px]" />
            </div>

 <div className="container mx-auto text-center relative z-10">
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight text-[#0A2E22]">
                    {pricing_section.heading_first} <span className="text-[#045C4E]">{pricing_section.heading_highlight}</span>
                </h2>
                <p className="text-lg lg:text-xl text-[#0A2E22]/70 mb-12 max-w-2xl mx-auto">
                    {pricing_section.description}
                </p>

                {/* Toggle */}
                <div className="inline-flex items-center p-1.5 bg-[#0A2E22]/5 rounded-full border border-[#0A2E22]/10 mb-16">
                    <button
                        onClick={() => setIsYearly(false)}
                        className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${!isYearly ? 'bg-[#045C4E] text-white shadow-lg' : 'text-[#0A2E22]/60 hover:text-[#0A2E22]'}`}
                    >
                        {pricing_section.monthly_label}
                    </button>
                    <button
                        onClick={() => setIsYearly(true)}
                        className={`px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${isYearly ? 'bg-[#045C4E] text-white shadow-lg' : 'text-[#0A2E22]/60 hover:text-[#0A2E22]'}`}
                    >
                        {pricing_section.yearly_label}
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#E1F28F] text-[#0A2E22]">{pricing_section.yearly_discount}</span>
                    </button>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
                    {pricing_section.plans.map((plan: any, index: number) => {
                        const Icon = iconMap[plan.icon] || Zap;
                        return (
                            <div
                                key={index}
                                className={`relative rounded-3xl p-8 text-left flex flex-col h-full border transition-all duration-300 ${plan.highlight
                                        ? 'bg-[#0A2E22] text-white border-[#0A2E22] shadow-2xl md:scale-105 z-10 animate-heartbeat'
                                        : 'bg-white text-[#0A2E22] border-[#0A2E22]/10 hover:border-[#045C4E]/30 hover:shadow-xl'
                                    }`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E1F28F] text-[#0A2E22] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                                        <span>❤️</span> {plan.tag || 'Most Loved'}
                                    </div>
                                )}

                                <div className="mb-6">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${plan.highlight ? 'bg-white/10 text-[#E1F28F]' : 'bg-[#0A2E22]/5 text-[#045C4E]'}`}>
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <p className={`text-sm ${plan.highlight ? 'text-white/70' : 'text-[#0A2E22]/60'} min-h-[40px]`}>
                                        {plan.description}
                                    </p>
                                </div>

                                {/* Slot-machine price */}
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-1 overflow-hidden">
                                        <span className="text-4xl font-extrabold">
                                            $<SlotPrice value={isYearly ? plan.price_yearly : plan.price_monthly} />
                                        </span>
                                        <span className={`text-sm font-medium ${plan.highlight ? 'text-white/60' : 'text-[#0A2E22]/50'}`}>/ month</span>
                                    </div>
                                    {isYearly && <p className="text-xs text-[#E1F28F] mt-1 font-medium">Billed annually</p>}
                                </div>

                                {/* Features with sequential check-off animation */}
                                <div className="space-y-4 mb-8 flex-grow">
                                    <p className={`text-xs font-bold uppercase tracking-wider ${plan.highlight ? 'text-white/40' : 'text-[#0A2E22]/40'}`}>Includes:</p>
                                    {plan.features.map((feature: string, i: number) => (
                                        <div key={i} className="flex items-start gap-3 group/feature">
                                            <div className={`mt-0.5 p-0.5 rounded-full ${plan.highlight ? 'bg-[#E1F28F] text-[#0A2E22]' : 'bg-[#045C4E] text-white'}`}>
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className={`text-sm ${plan.highlight ? 'text-white/90' : 'text-[#0A2E22]/80'}`}>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${plan.highlight
                                        ? 'bg-[#E1F28F] text-[#0A2E22] hover:bg-white hover:scale-[1.02] active:scale-95'
                                        : 'bg-[#0A2E22] text-white hover:bg-[#045C4E] hover:scale-[1.02] active:scale-95'
                                    }`}>
                                    {plan.cta}
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Reassurance bar */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-[#0A2E22]/50 font-medium">
                    <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-[#045C4E]" /> No credit card required</span>
                    <span className="text-[#0A2E22]/20">·</span>
                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#045C4E]" strokeWidth={3} /> Cancel anytime</span>
                    <span className="text-[#0A2E22]/20">·</span>
                    <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#045C4E]" /> Free migration support</span>
                </div>

                {/* Custom Plan */}
                <div className="max-w-4xl mx-auto bg-[#f9fdfa] rounded-3xl p-8 md:p-12 border border-dashed border-[#0A2E22]/20 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-[#045C4E]/40 transition-colors">
                    <div className="text-left">
                        <h3 className="text-2xl font-bold text-[#0A2E22] mb-3">{pricing_section.custom_plan.title}</h3>
                        <p className="text-[#0A2E22]/70 max-w-lg">{pricing_section.custom_plan.description}</p>
                    </div>
                    <button className="whitespace-nowrap px-8 py-4 rounded-xl bg-white border border-[#0A2E22]/10 text-[#0A2E22] font-bold shadow-sm hover:shadow-md hover:border-[#045C4E]/50 hover:text-[#045C4E] transition-all duration-300">
                        {pricing_section.custom_plan.cta}
                    </button>
                </div>
            </div>

            <style>{`
        @keyframes slotFlip {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}
