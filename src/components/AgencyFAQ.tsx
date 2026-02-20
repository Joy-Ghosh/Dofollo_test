import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import agencyData from '../data/pages/agency.json';

export default function AgencyFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { faq } = agencyData;

    return (
        <section className="py-24 bg-[#0A2E22] border-b border-white/5">
 <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-16 text-white">
                    {faq.title} <span className="text-[#E1F28F]">{faq.title_highlight}</span>
                </h2>

                <div className="space-y-4">
                    {faq.items.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className={`group p-6 rounded-2xl bg-[#0D261F] border cursor-pointer transition-all duration-300 ${isOpen ? 'border-[#E1F28F] shadow-lg shadow-[#E1F28F]/5' : 'border-white/5 hover:border-[#E1F28F]/30'}`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-[#E1F28F]' : 'text-white group-hover:text-[#E1F28F]'}`}>
                                        {item.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${isOpen ? 'bg-[#045C4E] text-white' : 'bg-[#0A2E22]/5 text-[#045C4E] group-hover:bg-[#045C4E] group-hover:text-white'}`}>
                                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </div>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-white/70 leading-relaxed text-sm">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
