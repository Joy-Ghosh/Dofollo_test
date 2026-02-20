import React from 'react';
import homeData from '../../data/pages/home.json';

export default function UseCaseSection() {
    const { use_case_section } = homeData;

    return (
        <section className="py-24 bg-[#0A2E22] text-white bg-noise relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#045C4E]/20 rounded-full blur-[120px] pointer-events-none" />

 <div className="container mx-auto relative z-10">
                <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-16 tracking-tight text-white">
                    {use_case_section.heading_first} <span className="text-[#E1F28F]">{use_case_section.heading_highlight}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {use_case_section.cards.map((card, i) => (
                        <div key={i} className={`p-6 md:p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group border ${card.theme === 'dark' ? 'bg-white/5 backdrop-blur-sm border-white/10 text-white' : 'bg-white text-[#0A2E22] border-transparent hover:border-[#045C4E]/30'}`}>
                            {card.theme === 'dark' ? (
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E1F28F]/10 rounded-full blur-[80px] group-hover:bg-[#E1F28F]/20 transition-all"></div>
                            ) : (
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#045C4E]/5 rounded-full blur-[80px]"></div>
                            )}

                            <h3 className="text-3xl font-bold mb-4 relative z-10">{card.title}</h3>
                            <p className={`text-lg leading-relaxed relative z-10 ${card.theme === 'dark' ? 'opacity-80' : 'opacity-70'}`}>{card.description}</p>

                            <div className={`mt-8 flex items-center gap-2 font-bold ${card.theme === 'dark' ? 'text-[#E1F28F]' : 'text-[#045C4E]'}`}>
                                <span>{card.cta}</span>
                                <div className={`w-8 h-[2px] ${card.theme === 'dark' ? 'bg-[#E1F28F]' : 'bg-[#045C4E]'}`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
