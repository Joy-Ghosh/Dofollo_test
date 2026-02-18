import React from 'react';
import aboutData from '../../data/pages/about.json';
import { Linkedin, Twitter, Github } from 'lucide-react';

export default function TeamSection() {
    const { team } = aboutData;

    return (
        <section className="py-24 bg-white text-[#0A2E22] border-t border-[#0A2E22]/5">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="inline-block px-3 py-1 bg-[#0A2E22] text-[#E1F28F] text-xs font-bold uppercase tracking-wider rounded-full">
                        {team.badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        {team.title}
                    </h2>
                    <p className="text-lg text-[#0A2E22]/60">
                        {team.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {team.members.map((member) => (
                        <div key={member.id} className="group relative">
                            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                                />
                                {/* Overlay with Socials */}
                                <div className="absolute inset-0 bg-[#0A2E22]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#E1F28F] hover:text-[#0A2E22] text-white transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#E1F28F] hover:text-[#0A2E22] text-white transition-colors">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-lg text-[#0A2E22] group-hover:text-[#045C4E] transition-colors">{member.name}</h3>
                                <p className="text-sm text-[#0A2E22]/50 font-medium uppercase tracking-wide">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
