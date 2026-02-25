import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, CalendarDays, Mail, ArrowRight, ChevronRight, X } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import termsData from '../data/pages/terms.json';

export default function Terms() {
    const { hero, sections, contact } = termsData;
    const [activeSection, setActiveSection] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-[#F9FAFB] text-gray-900">
            <SEO
                title="Terms of Service — Dofollo"
                description="Read Dofollo's Terms of Service to understand your rights and obligations when using our platform."
                canonical="https://dofollo.ai/terms"
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
                            <Shield size={13} />
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
                                Table of Contents
                            </p>
                            <nav className="space-y-1">
                                {sections.map((s) => (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        onClick={() => setActiveSection(s.id)}
                                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all group ${activeSection === s.id
                                            ? 'bg-[#045C4E]/10 text-[#045C4E]'
                                            : 'text-gray-500 hover:text-[#045C4E] hover:bg-[#045C4E]/5'
                                            }`}
                                    >
                                        <span
                                            className={`w-5 h-5 rounded-md text-[10px] font-extrabold flex items-center justify-center shrink-0 transition-all ${activeSection === s.id
                                                ? 'bg-[#045C4E] text-[#E1F28F]'
                                                : 'bg-gray-100 text-gray-400 group-hover:bg-[#045C4E]/15 group-hover:text-[#045C4E]'
                                                }`}
                                        >
                                            {s.number}
                                        </span>
                                        {s.title}
                                    </a>
                                ))}
                            </nav>

                            {/* Contact card in sidebar */}
                            <div className="mt-10 p-4 rounded-2xl bg-[#0A2E22] text-white">
                                <Shield size={20} className="text-[#E1F28F] mb-3" />
                                <p className="text-xs font-semibold text-white/80 leading-snug mb-3">
                                    Have questions about these terms?
                                </p>
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="text-[#E1F28F] text-xs font-bold flex items-center gap-1 hover:underline"
                                >
                                    {contact.email}
                                    <ArrowRight size={11} />
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* ─ Sections content ─ */}
                    <main>
                        {/* Intro notice */}
                        <ScrollReveal variant="fade-up">
                            <div className="flex items-start gap-3 bg-[#E1F28F]/20 border border-[#E1F28F]/30 rounded-2xl px-5 py-4 mb-12">
                                <Shield size={18} className="text-[#045C4E] shrink-0 mt-0.5" />
                                <p className="text-sm text-[#0A2E22]/80 leading-relaxed">
                                    These Terms of Service govern your use of the Dofollo platform. By using our service, you agree to these terms. Please read them carefully.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="space-y-4">
                            {sections.map((section, idx) => (
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
                                            {/* Number badge */}
                                            <span className={`w-9 h-9 rounded-xl text-sm font-extrabold flex items-center justify-center shrink-0 transition-all ${activeSection === section.id
                                                ? 'bg-[#045C4E] text-[#E1F28F]'
                                                : 'bg-gray-50 text-gray-400 group-hover:bg-[#045C4E]/10 group-hover:text-[#045C4E]'
                                                }`}>
                                                {section.number}
                                            </span>

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
                                            <div className="px-6 pb-6 pt-0 ml-[52px]">
                                                <div className="border-t border-gray-50 pt-4">
                                                    <p className="text-gray-600 leading-relaxed text-sm mb-4">
                                                        {section.content}
                                                    </p>

                                                    {section.list && section.list.length > 0 && (
                                                        <ul className="space-y-2.5 mt-4">
                                                            {section.list.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#045C4E]/40 shrink-0" />
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
                            ))}
                        </div>

                        {/* ─ Contact CTA card ─ */}
                        <ScrollReveal variant="fade-up" delay={0.2}>
                            <div className="mt-16 rounded-3xl bg-[#0A2E22] p-8 md:p-10 relative overflow-hidden">
                                {/* Glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E1F28F]/10 rounded-full blur-[80px] pointer-events-none" />

                                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                                    <div>
                                        <div className="inline-flex items-center gap-2 bg-[#E1F28F]/10 border border-[#E1F28F]/20 text-[#E1F28F] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                                            <Mail size={11} />
                                            Get in Touch
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
                                            id="terms-contact-btn"
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
