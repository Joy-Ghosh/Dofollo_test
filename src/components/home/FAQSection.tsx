import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import homeData from '../../data/pages/home.json';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { faq_section } = homeData;

    return (
        <section className="py-24 bg-white text-[#0A2E22]">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-16 tracking-tight text-[#0A2E22]">
                    {faq_section.heading_first} <span className="text-[#045C4E]">{faq_section.heading_highlight}</span>
                </h2>

                <div className="space-y-4">
                    {faq_section.items.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className={`group p-6 rounded-2xl bg-white border cursor-pointer transition-all duration-300 ${isOpen ? 'border-[#045C4E] shadow-md' : 'border-[#0A2E22]/10 hover:border-[#045C4E]/30 shadow-sm hover:shadow-md'}`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-[#045C4E]' : 'text-[#0A2E22] group-hover:text-[#045C4E]'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#045C4E] text-white' : 'bg-[#0A2E22]/5 text-[#045C4E] group-hover:bg-[#045C4E] group-hover:text-white'}`}>
                                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </div>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-[#0A2E22]/70 leading-relaxed">
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
