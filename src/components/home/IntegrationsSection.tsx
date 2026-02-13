import React from 'react';

export default function IntegrationsSection() {
    return (
        <section className="py-24 bg-white text-[#0A2E22]">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight text-[#0A2E22]">
                    Works With Your Stack
                </h2>
                <p className="text-lg lg:text-xl text-[#0A2E22]/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Connect Dofollo to your favorite CMS and SEO tools in seconds. No coding required.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {['WordPress', 'Webflow', 'Shopify', 'Ghost', 'Custom API'].map((tool, i) => (
                        <div key={i} className="px-8 py-4 bg-white rounded-full border border-[#0A2E22]/10 font-bold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-[#0A2E22]">
                            {tool}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
