import React from 'react';

export default function ImpactSection() {
    const metrics = [
        { label: "Link Coverage", value: "+65%" },
        { label: "Organic Traffic", value: "+34%" },
        { label: "Hours Saved", value: "40hr" },
        { label: "ROI", value: "10x" },
    ];

    return (
        <section className="py-24 bg-[#0A2E22] text-[#f5ffef] bg-noise">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E1F28F] font-bold text-xs uppercase tracking-wider mb-6">
                        Proven Results
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight text-[#f5ffef]">
                        Real Results, Measured in <span className="text-[#E1F28F]">Growth</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((m, i) => (
                        <div key={i} className="p-8 bg-white/5 rounded-2xl border border-white/10 shadow-sm hover:shadow-lg transition-all text-center group backdrop-blur-sm hover:bg-white/10">
                            <div className="text-5xl lg:text-6xl font-extrabold text-[#E1F28F] mb-2 group-hover:scale-110 transition-transform duration-300">{m.value}</div>
                            <div className="text-sm font-bold tracking-wide uppercase text-[#f5ffef]/60">{m.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
