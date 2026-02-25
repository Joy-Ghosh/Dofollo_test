import React, { useState } from 'react';
import { Shield, CalendarDays, Mail, ArrowRight, ChevronRight, Lock, Database, Settings, ShieldCheck, UserCheck, Share2, Ban, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import privacyData from '../data/pages/privacy.json';

const iconMap: { [key: string]: any } = {
    Database,
    Settings,
    ShieldCheck,
    UserCheck,
    Share2,
    Lock,
    Ban,
    Award
};

export default function Privacy() {
    const { hero, sections, trust_badges, contact } = privacyData;
    const [activeSection, setActiveSection] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#F9FAFB] text-gray-900">
            <SEO
                title="Privacy Policy — Dofollo"
                description="Learn how Dofollo collects, uses, and protects your personal data with our comprehensive Privacy Policy."
                canonical="https://dofollo.ai/privacy"
            />

            {/* ── Hero ─────────────────────────────────────────── */}
            <section className="pt-24 md:pt-32 pb-20 relative overflow-hidden bg-[#0A2E22]">
                {/* Background effects */}
                <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E1F28F]/8 rounded-full blur-[130px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />

                <div className="container mx-auto relative z-10 text-center">
                    {/* Badge */}
                    <ScrollReveal variant="fade-up">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E1F28F]/10 border border-[#E1F28F]/20 text-[#E1F28F] text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_15px_-5px_#E1F28F] backdrop-blur-sm">
                            <Lock size={13} />
                            {hero.badge}
                        </div>
                    </ScrollReveal>

                    {/* Title */}
                    <ScrollReveal variant="fade-up" delay={0.1}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg leading-[1.05]">
                            {hero.title}
                        </h1>
                    </ScrollReveal>

                    {/* Description */}
                    <ScrollReveal variant="fade-up" delay={0.2}>
                        <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed mb-8">
                            {hero.description}
                        </p>
                    </ScrollReveal>

                    {/* Last updated pill */}
                    <ScrollReveal variant="fade-up" delay={0.3}>
                        <div className="inline-flex items-center gap-2 text-white/40 text-sm">
                            <CalendarDays size={14} />
                            Last updated: {hero.last_updated}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ── Main content ─────────────────────────────────── */}
            <div className="container mx-auto py-16 md:py-24">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12">

                    {/* ─ Sticky sidebar TOC ─ */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-32">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                Policy Sections
                            </p>
                            <nav className="space-y-1">
                                {sections.map((s) => {
                                    const Icon = iconMap[s.icon] || Shield;
                                    return (
                                        <a
                                            key={s.id}
                                            href={`#${s.id}`}
                                            onClick={() => setActiveSection(s.id)}
                                            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all group ${activeSection === s.id
                                                ? 'bg-[#045C4E]/10 text-[#045C4E]'
                                                : 'text-gray-500 hover:text-[#045C4E] hover:bg-[#045C4E]/5'
                                                }`}
                                        >
                                            <Icon size={16} className={activeSection === s.id ? 'text-[#045C4E]' : 'text-gray-400 group-hover:text-[#045C4E]'} />
                                            {s.title}
                                        </a>
                                    );
                                })}
                            </nav>

                            {/* Security badges in sidebar */}
                            <div className="mt-10 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                                <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">
                                    Data Security
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {trust_badges.map((badge, i) => {
                                        const Icon = iconMap[badge.icon] || ShieldCheck;
                                        return (
                                            <div key={i} className="flex flex-col items-center p-2 rounded-lg bg-gray-50 text-center">
                                                <Icon size={16} className="text-[#045C4E] mb-1" />
                                                <span className="text-[9px] font-bold text-gray-600 leading-tight">{badge.label}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* ─ Sections content ─ */}
                    <main>
                        {/* Intro security notice */}
                        <ScrollReveal variant="fade-up">
                            <div className="flex items-start gap-3 bg-[#045C4E]/5 border border-[#045C4E]/10 rounded-2xl px-6 py-5 mb-12">
                                <ShieldCheck size={20} className="text-[#045C4E] shrink-0 mt-0.5" />
                                <div className="space-y-1">
                                    <p className="text-sm font-bold text-[#0A2E22]">Your Data is Private</p>
                                    <p className="text-sm text-[#0A2E22]/70 leading-relaxed">
                                        We never sell your data. We only use it to provide the Dofollo services you've requested and to improve our platform's performance.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="space-y-4">
                            {sections.map((section, idx) => {
                                const Icon = iconMap[section.icon] || Shield;
                                return (
                                    <ScrollReveal key={section.id} variant="fade-up" delay={0.05 * idx}>
                                        <div
                                            id={section.id}
                                            className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${activeSection === section.id
                                                ? 'border-[#045C4E]/30 shadow-[0_2px_24px_rgba(4,92,78,0.08)]'
                                                : 'border-gray-100 shadow-sm hover:border-[#045C4E]/20 hover:shadow-md'
                                                }`}
                                        >
                                            {/* Section header */}
                                            <button
                                                onClick={() =>
                                                    setActiveSection(activeSection === section.id ? null : section.id)
                                                }
                                                className="w-full flex items-center gap-4 px-6 py-5 text-left"
                                            >
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${activeSection === section.id
                                                    ? 'bg-[#045C4E] text-[#E1F28F]'
                                                    : 'bg-gray-50 text-gray-400 group-hover:bg-[#045C4E]/10 group-hover:text-[#045C4E]'
                                                    }`}>
                                                    <Icon size={20} />
                                                </div>

                                                <h2 className={`flex-1 text-base font-bold transition-colors ${activeSection === section.id ? 'text-[#045C4E]' : 'text-gray-800 group-hover:text-[#045C4E]'
                                                    }`}>
                                                    {section.title}
                                                </h2>

                                                <ChevronRight
                                                    size={16}
                                                    className={`text-gray-300 shrink-0 transition-transform duration-300 ${activeSection === section.id ? 'rotate-90 text-[#045C4E]' : 'group-hover:text-[#045C4E]'}`}
                                                />
                                            </button>

                                            {/* Expanded content */}
                                            <div className={`transition-all duration-300 ease-in-out ${activeSection === section.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                                <div className="px-6 pb-6 pt-0 ml-[56px]">
                                                    <div className="border-t border-gray-50 pt-4">
                                                        <p className="text-gray-600 leading-relaxed text-sm mb-4">
                                                            {section.content}
                                                        </p>

                                                        {section.list && section.list.length > 0 && (
                                                            <ul className="space-y-2.5 mt-4">
                                                                {section.list.map((item, i) => (
                                                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#045C4E]/40 shrink-0" />
                                                                        {item}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                );
                            })}
                        </div>

                        {/* ─ Contact card ─ */}
                        <ScrollReveal variant="fade-up" delay={0.2}>
                            <div className="mt-16 rounded-3xl bg-[#0A2E22] p-8 md:p-10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E1F28F]/10 rounded-full blur-[80px] pointer-events-none" />

                                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                    <div>
                                        <div className="inline-flex items-center gap-2 bg-[#E1F28F]/10 border border-[#E1F28F]/20 text-[#E1F28F] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                                            <Mail size={11} />
                                            Privacy Team
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">
                                            {contact.heading}
                                        </h3>
                                        <p className="text-white/55 text-sm leading-relaxed max-w-md">
                                            {contact.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                                        <a
                                            href={`mailto:${contact.email}`}
                                            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/15 text-white text-sm font-semibold hover:bg-white/15 transition-all"
                                        >
                                            <Mail size={14} />
                                            {contact.email}
                                        </a>
                                        <Link
                                            to={contact.button_href}
                                            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#E1F28F] text-[#0A2E22] text-sm font-bold hover:bg-[#c8dc6e] transition-all shadow-lg"
                                        >
                                            {contact.button_label}
                                            <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    );
}
