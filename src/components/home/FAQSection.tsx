import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What is Dofollo?",
        answer: "Dofollo is an AI-powered internal link management tool. It helps website owners discover internal linking opportunities and create new internal links using artificial intelligence. Dofollo can also analyze the internal linking strategy of competitors."
    },
    {
        question: "How long does it take to get started with Dofollo?",
        answer: "You can get up and running in minutes. Simply add your website and let our AI scan your content to instantly discover internal linking opportunities."
    },
    {
        question: "What kind of SEO results can I expect?",
        answer: "Our users typically see significant improvements over time, including up to +300% impressions and +120% clicks within 8–16 months. Results may vary depending on website structure and content quality."
    },
    {
        question: "Which integrations are supported?",
        answer: "Dofollo seamlessly integrates with WordPress and Google Search Console, enabling smarter SEO insights and one-click internal link publishing."
    },
    {
        question: "Does Dofollo handle orphan pages and broken links?",
        answer: "Yes. Dofollo automatically identifies and connects orphan pages to improve crawl visibility. It also detects and helps fix broken links to recover lost authority."
    },
    {
        question: "Do I need technical expertise to use Dofollo?",
        answer: "Not at all. Setup is simple. Just add your website and approve AI-generated link suggestions directly from your dashboard. No backend or development access is required."
    },
    {
        question: "What pricing and support options are available?",
        answer: "Dofollo offers a free trial (typically 14 days with no credit card required) along with flexible pricing plans based on your needs. Support is available via email and chat."
    },
    {
        question: "Do you have iOS and Android apps?",
        answer: "Currently, Dofollo is a web-based platform optimized for desktop and mobile browsers. Native iOS and Android apps may be introduced in the future."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-[#f5ffef] text-[#0A2E22]">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-16 tracking-tight text-[#0A2E22]">
                    Frequently Asked <span className="text-[#045C4E]">Questions</span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className={`group p-6 rounded-2xl bg-white border cursor-pointer transition-all duration-300 ${isOpen ? 'border-[#045C4E] shadow-md' : 'border-[#0A2E22]/5 hover:border-[#045C4E]/30 shadow-sm hover:shadow-md'}`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-[#045C4E]' : 'text-[#0A2E22] group-hover:text-[#045C4E]'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#045C4E] text-white' : 'bg-[#f5ffef] text-[#045C4E] group-hover:bg-[#045C4E] group-hover:text-white'}`}>
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
