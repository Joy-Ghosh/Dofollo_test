import React from 'react';
import aboutData from '../../data/pages/about.json';
import { Linkedin, Twitter } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

export default function TeamSection() {
    const { team } = aboutData;

    return (
        <section className="py-24 bg-white text-[#0A2E22] border-t border-[#0A2E22]/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E1F28F]/10 rounded-full blur-[100px] pointer-events-none" />

 <div className="container mx-auto relative z-10">
                <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A2E22] text-[#E1F28F] text-xs font-bold uppercase tracking-wider rounded-full mb-5">
                        {team.badge}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">{team.title}</h2>
                    <p className="text-lg text-[#0A2E22]/60 leading-relaxed">{team.description}</p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {team.members.map((member, i) => (
                        <ScrollReveal key={member.id} variant="fade-up" delay={i * 0.08}>
                            <div className="group relative">
                                {/* Image */}
                                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-500">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                                    />
                                    {/* Overlay gradient bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2E22]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    {/* Socials */}
                                    <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <a href="#" className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-[#E1F28F] hover:text-[#0A2E22] text-white transition-colors">
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                        <a href="#" className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-[#E1F28F] hover:text-[#0A2E22] text-white transition-colors">
                                            <Twitter className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                                {/* Name */}
                                <div className="text-center">
                                    <h3 className="font-bold text-lg text-[#0A2E22] group-hover:text-[#045C4E] transition-colors">{member.name}</h3>
                                    <p className="text-xs text-[#0A2E22]/50 font-bold uppercase tracking-widest mt-1">{member.role}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
