import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import homeData from '../../data/pages/home.json';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { faq_section } = homeData;

    return (
        <section className="py-24 bg-[#0A2E22] text-white">
 <div className="container mx-auto max-w-3xl">
                <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-16 tracking-tight text-white">
                    {faq_section.heading_first} <span className="text-[#E1F28F]">{faq_section.heading_highlight}</span>
                </h2>

                <div className="space-y-4">
                    {faq_section.items.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className={`group p-6 rounded-2xl bg-[#0D261F] border cursor-pointer transition-all duration-300 ${isOpen ? 'border-[#E1F28F] shadow-lg shadow-[#E1F28F]/5' : 'border-white/10 hover:border-[#E1F28F]/30 shadow-sm'}`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-[#E1F28F]' : 'text-white group-hover:text-[#E1F28F]'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#E1F28F] text-[#0A2E22]' : 'bg-white/5 text-[#E1F28F] group-hover:bg-[#E1F28F] group-hover:text-[#0A2E22]'}`}>
                                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </div>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-white/70 leading-relaxed">
                                            {faq.answer}
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
