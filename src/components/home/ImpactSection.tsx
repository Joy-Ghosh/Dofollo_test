import React from 'react';

export default function ImpactSection() {
    const metrics = [
        { label: "Link Coverage", value: "+65%" },
        { label: "Organic Traffic", value: "+34%" },
        { label: "Hours Saved", value: "40hr" },
        { label: "ROI", value: "10x" },
    ];

    return (
        <section className="py-24 bg-[#f5ffef] text-[#0A2E22]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#045C4E]/10 border border-[#045C4E]/10 text-[#045C4E] font-bold text-xs uppercase tracking-wider mb-6">
                        Proven Results
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight text-[#0A2E22]">
                        Real Results, Measured in <span className="text-[#045C4E]">Growth</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((m, i) => (
                        <div key={i} className="p-8 bg-white rounded-2xl border border-[#0A2E22]/5 shadow-sm hover:shadow-lg transition-all text-center group">
                            <div className="text-5xl lg:text-6xl font-extrabold text-[#045C4E] mb-2 group-hover:scale-110 transition-transform duration-300">{m.value}</div>
                            <div className="text-sm font-bold tracking-wide uppercase text-[#0A2E22]/60">{m.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
