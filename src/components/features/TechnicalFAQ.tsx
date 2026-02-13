import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const technicalFaqs = [
    {
        question: "How does the NLP engine determine link relevance?",
        answer: "We use a proprietary transformer model trained on over 500k high-ranking SEO pages. It analyzes semantic vectors, topic density, and sentiment to ensure links aren't just keyword matches, but contextually accurate additions."
    },
    {
        question: "Does the auto-injection work with headless CMS?",
        answer: "Yes. For headless environments (Contentful, Sanity, Strapi), Dofollo provides a REST API and webhooks. You can review suggestions in our dashboard, and we push the changes to your content model JSON/HTML fields automatically."
    },
    {
        question: "What happens if I cancel? Do I lose my links?",
        answer: "Absolutely not. The links Dofollo builds are inserted directly into your content's HTML. If you cancel your subscription, the links remain 100% yours forever. We don't use JavaScript redirects or overlays."
    },
    {
        question: "Can I blacklist specific pages or keywords?",
        answer: "Yes. You have granular control to exclude specific URLs (like T&Cs, Login pages) or specific anchor text patterns. You can also set 'negative keywords' to ensure brand safety."
    },
    {
        question: "Does Dofollo slow down my website?",
        answer: "No. Dofollo operates as an external analysis tool. The only interaction with your live site is when you approve a link injection, which is a static HTML update. We do not inject any client-side scripts that affect page load speed."
    }
];

export default function TechnicalFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-[#0A2E22] border-b border-white/5">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-16 text-[#f5ffef]">
                    Technical <span className="text-[#E1F28F]">FAQ</span>
                </h2>

                <div className="space-y-4">
                    {technicalFaqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className={`group p-6 rounded-2xl bg-[#0D261F] border cursor-pointer transition-all duration-300 ${isOpen ? 'border-[#E1F28F] shadow-lg shadow-[#E1F28F]/5' : 'border-white/5 hover:border-[#E1F28F]/30'}`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-[#E1F28F]' : 'text-[#f5ffef] group-hover:text-[#E1F28F]'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#E1F28F] text-[#0A2E22]' : 'bg-white/5 text-[#f5ffef] group-hover:bg-[#E1F28F] group-hover:text-[#0A2E22]'}`}>
                                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </div>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-[#f5ffef]/70 leading-relaxed text-sm">
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
