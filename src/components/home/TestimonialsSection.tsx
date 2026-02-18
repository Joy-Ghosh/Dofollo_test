import React from 'react';
import { Star } from 'lucide-react';
import homeData from '../../data/pages/home.json';

export default function TestimonialsSection() {
    const { testimonials_section } = homeData;

    return (

        <section className="py-24 bg-white text-[#0A2E22]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-16 tracking-tight text-[#0A2E22]">
                    {testimonials_section.heading_first} <span className="text-[#045C4E]">{testimonials_section.heading_highlight}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials_section.testimonials.map((item, i) => (
                        <div key={i} className="p-8 bg-white rounded-2xl border border-[#0A2E22]/10 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-[#045C4E] text-[#045C4E]" />)}
                            </div>
                            <p className="text-lg italic text-[#0A2E22]/90 mb-6 leading-relaxed">"{item.quote}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#045C4E] to-[#E1F28F] border border-[#0A2E22]/10"></div>
                                <div>
                                    <div className="font-bold text-[#0A2E22]">{item.author}</div>
                                    <div className="text-sm text-[#0A2E22]/60">{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Logos */}
                <div className="mt-24 pt-12 border-t border-[#0A2E22]/10 flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 text-[#0A2E22]">
                    {testimonials_section.companies.map((company, i) => (
                        <div key={i} className="text-xl font-bold">{company}</div>
                    ))}
                </div>
            </div>
        </section>
    );
}
