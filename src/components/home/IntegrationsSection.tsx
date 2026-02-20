import React from 'react';
import homeData from '../../data/pages/home.json';

export default function IntegrationsSection() {
    const { integrations_section } = homeData;

    return (
        <section className="py-24 bg-white text-[#0A2E22]">
 <div className="container mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight text-[#0A2E22]">
                    {integrations_section.title}
                </h2>
                <p className="text-lg lg:text-xl text-[#0A2E22]/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                    {integrations_section.description}
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {integrations_section.tools.map((tool, i) => (
                        <div key={i} className="px-8 py-4 bg-white rounded-full border border-[#0A2E22]/10 font-bold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-[#0A2E22]">
                            {tool}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
