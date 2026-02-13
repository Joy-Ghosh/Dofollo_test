import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-[#0A2E22] text-[#f5ffef] bg-noise">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-16 tracking-tight">
                    Trusted by Top <span className="text-[#E1F28F]">SEO Teams</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#E1F28F]/30 transition-all hover:-translate-y-1">
                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-[#E1F28F] text-[#E1F28F]" />)}
                            </div>
                            <p className="text-lg italic text-[#f5ffef]/90 mb-6 leading-relaxed">"Dofollo saved us 20 hours a week on internal linking. It's an absolute game changer for our agency."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E1F28F] to-[#045C4E] border border-white/20"></div>
                                <div>
                                    <div className="font-bold text-white">Alex Johnson</div>
                                    <div className="text-sm text-[#f5ffef]/60">Head of SEO, TechGrowth</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Logos */}
                <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="text-xl font-bold text-white">COMPANY</div>
                    <div className="text-xl font-bold text-white">STARTUP</div>
                    <div className="text-xl font-bold text-white">AGENCY</div>
                    <div className="text-xl font-bold text-white">ENTERPRISE</div>
                </div>
            </div>
        </section>
    );
}
