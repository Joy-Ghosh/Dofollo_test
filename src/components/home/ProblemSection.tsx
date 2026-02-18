import React from 'react';
import { AlertCircle, Clock, Layout, TrendingDown } from 'lucide-react';
import homeData from '../../data/pages/home.json';

const iconMap: { [key: string]: React.ElementType } = {
    AlertCircle,
    Clock,
    Layout,
    TrendingDown
};

export default function ProblemSection() {
    const { problem_section } = homeData;

    return (
        <section className="py-24 bg-white text-[#0A2E22]">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight text-[#0A2E22]">
                        {problem_section.heading_first} <br /><span className="text-[#045C4E]">{problem_section.heading_highlight}</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-[#0A2E22]/70 leading-relaxed">
                        {problem_section.subheading}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problem_section.problems.map((item, i) => {
                        const Icon = iconMap[item.icon] || AlertCircle;
                        return (
                            <div key={i} className="p-8 bg-white rounded-2xl border border-[#0A2E22]/10 shadow-[0_2px_10px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-10px_rgba(10,46,34,0.1)] transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-14 h-14 bg-[#045C4E]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#E1F28F] transition-colors duration-300">
                                    <Icon className="w-7 h-7 text-[#045C4E] group-hover:text-[#0A2E22] transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-[#0A2E22]">{item.title}</h3>
                                <p className="text-[#0A2E22]/60 leading-relaxed text-sm">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
