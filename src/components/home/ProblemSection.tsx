import React from 'react';
import { AlertCircle, Clock, Layout, TrendingDown } from 'lucide-react';

export default function ProblemSection() {
    const problems = [
        {
            icon: AlertCircle,
            title: "Missed Opportunities",
            desc: "Thousands of potential internal links go unnoticed, wasting link equity."
        },
        {
            icon: Clock,
            title: "Time Consuming",
            desc: "Manually finding and placing links takes dozens of hours per month."
        },
        {
            icon: Layout,
            title: "Weak Structure",
            desc: "Without a plan, your site architecture becomes messy and hard to crawl."
        },
        {
            icon: TrendingDown,
            title: "Lost Traffic",
            desc: "Competitors with better site structure outrank you for easy keywords."
        }
    ];

    return (
        <section className="py-24 bg-[#f5ffef] text-[#0A2E22]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight text-[#0A2E22]">
                        Internal Linking Is The Most <br /><span className="text-[#045C4E]">Ignored SEO Growth Lever</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-[#0A2E22]/70 leading-relaxed">
                        You spend hours writing content, but poor site structure holds it back from ranking.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((item, i) => (
                        <div key={i} className="p-8 bg-white rounded-2xl border border-[#0A2E22]/5 shadow-[0_2px_10px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-10px_rgba(10,46,34,0.1)] transition-all duration-300 group hover:-translate-y-1">
                            <div className="w-14 h-14 bg-[#045C4E]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E1F28F] transition-colors duration-300">
                                <item.icon className="w-7 h-7 text-[#045C4E] group-hover:text-[#0A2E22] transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-[#0A2E22]">{item.title}</h3>
                            <p className="text-[#0A2E22]/60 leading-relaxed text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
