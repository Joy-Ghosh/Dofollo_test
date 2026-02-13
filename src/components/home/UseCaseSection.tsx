import React from 'react';

export default function UseCaseSection() {
    return (
        <section className="py-24 bg-[#f5ffef] text-[#0A2E22]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-16 tracking-tight text-[#0A2E22]">
                    Built For Every <span className="text-[#045C4E]">SEO Need</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="p-10 rounded-3xl bg-[#0A2E22] text-white shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E1F28F]/10 rounded-full blur-[80px] group-hover:bg-[#E1F28F]/20 transition-all"></div>
                        <h3 className="text-3xl font-bold mb-4 relative z-10">For SaaS Teams</h3>
                        <p className="opacity-80 text-lg leading-relaxed relative z-10">Scale your programmatic SEO and content hubs without hiring more writers. Automate internal linking across thousands of pages instantly.</p>
                        <div className="mt-8 flex items-center gap-2 text-[#E1F28F] font-bold">
                            <span>Explore Solution</span>
                            <div className="w-8 h-[2px] bg-[#E1F28F]"></div>
                        </div>
                    </div>

                    <div className="p-10 rounded-3xl bg-white border border-[#0A2E22]/10 text-[#0A2E22] shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#045C4E]/5 rounded-full blur-[80px]"></div>
                        <h3 className="text-3xl font-bold mb-4 relative z-10">For Agencies</h3>
                        <p className="opacity-70 text-lg leading-relaxed relative z-10">Manage multiple clients and deliver higher ROI reports with automated linking. impress clients with visual link graphs and quick wins.</p>
                        <div className="mt-8 flex items-center gap-2 text-[#045C4E] font-bold">
                            <span>Explore Agency Plan</span>
                            <div className="w-8 h-[2px] bg-[#045C4E]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
