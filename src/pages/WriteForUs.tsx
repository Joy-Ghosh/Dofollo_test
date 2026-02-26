import React, { useState } from 'react';
import {
    Send,
    CheckCircle,
    ArrowRight,
    BookOpen,
    Link2,
    Bot,
    Settings,
    BarChart2,
    Shield,
    Cpu,
    Building2,
    FileText,
    ChevronDown,
    ExternalLink,
} from 'lucide-react';
import Footer from '../components/Footer';
import CompactHero from '../components/CompactHero';
import ScrollReveal from '../components/ScrollReveal';
import writeForUsData from '../data/pages/writeforus.json';

// Map topic index to icon
const topicIcons = [Link2, Bot, Settings, BarChart2, Shield, Cpu, Building2];

const inputClass =
    'w-full px-5 py-4 bg-[#0A2E22]/[0.03] border border-[#0A2E22]/10 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#045C4E]/30 focus:border-[#045C4E]/40 outline-none transition-all placeholder:text-[#0A2E22]/30 font-medium text-[#0A2E22]';

const labelClass = 'block text-sm font-bold text-[#0A2E22]/70 mb-2';

export default function WriteForUs() {
    const { hero, topics, guidelines, form } = writeForUsData;

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        company: '',
        contribution_type: '',
        target_url: '',
        topics_field: '',
        sample: '',
        outline: '',
        dofollo_url: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [guidelinesOpen, setGuidelinesOpen] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1800);
    };

    const scrollToForm = () => {
        document.getElementById('contribution-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToGuidelines = () => {
        setGuidelinesOpen(true);
        setTimeout(() => {
            document.getElementById('guidelines-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans text-[#0A2E22]">
            {/* Hero */}
            <CompactHero
                badge={hero.badge}
                title={
                    <>
                        {hero.title}{' '}
                        <span className="text-[#E1F28F] block">{hero.title_highlight}</span>
                    </>
                }
                description={hero.description}
            />

            {/* Hero CTA Buttons */}
            <div className="bg-[#0A2E22] pb-16">
                <ScrollReveal variant="fade-up" delay={0.3}>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <button
                            onClick={scrollToForm}
                            className="px-8 py-4 bg-[#E1F28F] text-[#0A2E22] rounded-xl font-extrabold text-sm hover:shadow-[0_0_30px_-5px_#E1F28F] hover:scale-[1.02] transition-all flex items-center gap-2"
                        >
                            {hero.cta_primary} <Send className="w-4 h-4" />
                        </button>
                        <button
                            onClick={scrollToGuidelines}
                            className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-sm hover:bg-white/15 transition-all flex items-center gap-2"
                        >
                            {hero.cta_secondary} <BookOpen className="w-4 h-4" />
                        </button>
                    </div>
                </ScrollReveal>
            </div>

            <main className="flex-grow">
                {/* ── Topics Section ── */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <ScrollReveal variant="fade-up">
                            <div className="text-center max-w-3xl mx-auto mb-12">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2E22] mb-4">
                                    Topics We Accept
                                </h2>
                                <p className="text-[#0A2E22]/55 text-base leading-relaxed">
                                    {topics.intro}
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            {topics.list.map((topic, i) => {
                                const Icon = topicIcons[i] || FileText;
                                return (
                                    <ScrollReveal
                                        key={i}
                                        variant="fade-up"
                                        delay={i * 0.07}
                                    >
                                        <div className="h-full p-6 rounded-2xl border border-[#0A2E22]/10 bg-[#0A2E22]/[0.02] hover:border-[#045C4E]/30 hover:bg-[#0A2E22]/[0.05] hover:-translate-y-1 transition-all duration-300 group">
                                            <div className="w-11 h-11 rounded-xl bg-[#045C4E]/10 flex items-center justify-center text-[#045C4E] mb-4 group-hover:bg-[#045C4E] group-hover:text-white transition-all">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="font-extrabold text-[#0A2E22] mb-2 text-sm leading-snug">
                                                {topic.title}
                                            </h3>
                                            <p className="text-[#0A2E22]/50 text-sm leading-relaxed">
                                                {topic.description}
                                            </p>
                                        </div>
                                    </ScrollReveal>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── Guidelines Section ── */}
                <section
                    id="guidelines-section"
                    className="py-24 md:py-32 bg-[#0A2E22]/[0.03] border-y border-[#0A2E22]/[0.06]"
                >
                    <div className="container mx-auto max-w-5xl">
                        <ScrollReveal variant="fade-up">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2E22] mb-3">
                                    {guidelines.title}
                                </h2>
                                <p className="text-[#0A2E22]/50 text-lg">{guidelines.subtitle}</p>
                            </div>
                        </ScrollReveal>

                        {/* Content Guidelines + Link Policy */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <ScrollReveal variant="slide-left">
                                <div className="h-full p-8 rounded-2xl bg-white border border-[#0A2E22]/10 shadow-[0_4px_24px_-8px_rgba(10,46,34,0.08)]">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-[#045C4E]/10 flex items-center justify-center text-[#045C4E]">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-lg font-extrabold text-[#0A2E22]">
                                            {guidelines.content.title}
                                        </h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {guidelines.content.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-[#0A2E22]/70 leading-relaxed">
                                                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#E1F28F]/60 flex items-center justify-center shrink-0">
                                                    <CheckCircle className="w-3 h-3 text-[#045C4E]" />
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal variant="slide-right">
                                <div className="flex flex-col gap-8">
                                    {/* Link Policy */}
                                    <div className="p-8 rounded-2xl bg-white border border-[#0A2E22]/10 shadow-[0_4px_24px_-8px_rgba(10,46,34,0.08)]">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-xl bg-[#045C4E]/10 flex items-center justify-center text-[#045C4E]">
                                                <Link2 className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-extrabold text-[#0A2E22]">
                                                {guidelines.link_policy.title}
                                            </h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {guidelines.link_policy.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-[#0A2E22]/70 leading-relaxed">
                                                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#E1F28F]/60 flex items-center justify-center shrink-0">
                                                        <CheckCircle className="w-3 h-3 text-[#045C4E]" />
                                                    </span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Meta Requirements */}
                                    <div className="p-8 rounded-2xl bg-white border border-[#0A2E22]/10 shadow-[0_4px_24px_-8px_rgba(10,46,34,0.08)]">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-[#045C4E]/10 flex items-center justify-center text-[#045C4E]">
                                                <Settings className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-extrabold text-[#0A2E22]">
                                                {guidelines.meta.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-[#0A2E22]/50 mb-4">{guidelines.meta.subtitle}</p>
                                        <ul className="space-y-2">
                                            {guidelines.meta.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-[#0A2E22]/70 leading-relaxed">
                                                    <span className="mt-0.5 w-5 h-5 rounded-full bg-[#E1F28F]/60 flex items-center justify-center shrink-0">
                                                        <CheckCircle className="w-3 h-3 text-[#045C4E]" />
                                                    </span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Editorial Rights */}
                        <ScrollReveal variant="fade-up">
                            <div className="p-8 rounded-2xl bg-[#0A2E22] border border-white/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#E1F28F]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#045C4E]/40 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                                <div className="relative z-10">
                                    <h3 className="text-xl font-extrabold text-white mb-3 flex items-center gap-2">
                                        <Shield className="w-5 h-5 text-[#E1F28F]" />
                                        {guidelines.editorial_rights.title}
                                    </h3>
                                    <p className="text-white/60 text-sm mb-4">
                                        {guidelines.editorial_rights.description}
                                    </p>
                                    <p className="text-white/40 text-xs mb-3 font-bold uppercase tracking-wider">We may:</p>
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                                        {guidelines.editorial_rights.items.map((item, i) => (
                                            <li
                                                key={i}
                                                className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white/70 text-xs font-medium text-center"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-white/40 text-xs">
                                        {guidelines.editorial_rights.footer}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Contribution Form Section ── */}
                <section id="contribution-form" className="py-24 md:py-32 bg-white">
                    <div className="container mx-auto max-w-5xl">
                        <ScrollReveal variant="fade-up">
                            <div className="text-center max-w-2xl mx-auto mb-16">
                                <p className="text-sm font-bold text-[#045C4E] uppercase tracking-wider mb-3">
                                    {form.subtitle}
                                </p>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2E22] mb-4">
                                    {form.title}
                                </h2>
                                <p className="text-[#0A2E22]/60 leading-relaxed">{form.join_text}</p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Sidebar */}
                            <ScrollReveal variant="slide-left" className="lg:col-span-1">
                                <div className="space-y-6">
                                    {/* Info card */}
                                    <div className="p-6 rounded-2xl bg-[#0A2E22] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-40 h-40 bg-[#E1F28F]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                                        <div className="relative z-10">
                                            <div className="w-10 h-10 rounded-xl bg-[#E1F28F]/15 flex items-center justify-center text-[#E1F28F] mb-4">
                                                <Send className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-base font-extrabold text-white mb-2">
                                                {form.description}
                                            </h3>
                                            <p className="text-white/50 text-xs leading-relaxed">
                                                {form.note}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Blog CTA */}
                                    <div className="p-6 rounded-2xl border border-[#0A2E22]/10 bg-[#0A2E22]/[0.02]">
                                        <div className="w-10 h-10 rounded-xl bg-[#045C4E]/10 flex items-center justify-center text-[#045C4E] mb-4">
                                            <BookOpen className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-extrabold text-[#0A2E22] mb-2 text-sm">
                                            {form.blog_cta.title}
                                        </h3>
                                        <p className="text-[#0A2E22]/50 text-xs leading-relaxed mb-4">
                                            {form.blog_cta.description}
                                        </p>
                                        <a
                                            href={form.blog_cta.link_url}
                                            className="inline-flex items-center gap-1.5 text-[#045C4E] font-bold text-xs hover:underline underline-offset-4 group"
                                        >
                                            {form.blog_cta.link_label}
                                            <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Form */}
                            <ScrollReveal variant="slide-right" className="lg:col-span-2">
                                <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#0A2E22]/10 shadow-[0_8px_40px_-12px_rgba(10,46,34,0.12)] relative overflow-hidden">
                                    {/* Top accent bar */}
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#045C4E] to-[#E1F28F]" />

                                    {isSubmitted ? (
                                        <div className="bg-[#E1F28F]/20 border border-[#E1F28F]/50 rounded-2xl p-10 text-center">
                                            <div className="w-16 h-16 bg-[#045C4E]/10 text-[#045C4E] rounded-full flex items-center justify-center mx-auto mb-4">
                                                <CheckCircle className="w-8 h-8" />
                                            </div>
                                            <h4 className="text-xl font-extrabold text-[#0A2E22] mb-3">
                                                {form.success_title}
                                            </h4>
                                            <p className="text-[#0A2E22]/60 leading-relaxed max-w-sm mx-auto text-sm">
                                                {form.success_message}
                                            </p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-7">
                                            {/* Your Information */}
                                            <div>
                                                <h4 className="text-xs font-extrabold text-[#0A2E22]/40 uppercase tracking-widest mb-5">
                                                    {form.sections.your_info}
                                                </h4>
                                                <div className="space-y-5">
                                                    {/* Email */}
                                                    <div>
                                                        <label htmlFor="email" className={labelClass}>
                                                            {form.fields.email.label}{' '}
                                                            {form.fields.email.required && (
                                                                <span className="text-red-400">*</span>
                                                            )}
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            required
                                                            placeholder={form.fields.email.placeholder}
                                                            className={inputClass}
                                                        />
                                                        <p className="mt-2 text-xs text-[#0A2E22]/40 leading-relaxed">
                                                            {form.fields.email.help}
                                                        </p>
                                                    </div>

                                                    {/* Name + Company */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                        <div>
                                                            <label htmlFor="name" className={labelClass}>
                                                                {form.fields.name.label}{' '}
                                                                <span className="text-red-400">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="name"
                                                                name="name"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder={form.fields.name.placeholder}
                                                                className={inputClass}
                                                            />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="company" className={labelClass}>
                                                                {form.fields.company.label}{' '}
                                                                <span className="text-red-400">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="company"
                                                                name="company"
                                                                value={formData.company}
                                                                onChange={handleChange}
                                                                required
                                                                placeholder={form.fields.company.placeholder}
                                                                className={inputClass}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Contribution Details */}
                                            <div>
                                                <h4 className="text-xs font-extrabold text-[#0A2E22]/40 uppercase tracking-widest mb-5">
                                                    {form.sections.contribution}
                                                </h4>
                                                <div className="space-y-5">
                                                    {/* Contribution Type */}
                                                    <div>
                                                        <label htmlFor="contribution_type" className={labelClass}>
                                                            {form.fields.contribution_type.label}{' '}
                                                            <span className="text-red-400">*</span>
                                                        </label>
                                                        <div className="relative">
                                                            <select
                                                                id="contribution_type"
                                                                name="contribution_type"
                                                                value={formData.contribution_type}
                                                                onChange={handleChange}
                                                                required
                                                                className={`${inputClass} appearance-none cursor-pointer pr-10`}
                                                            >
                                                                <option value="" disabled className="bg-white text-[#0A2E22]/40">
                                                                    Select contribution type
                                                                </option>
                                                                {form.fields.contribution_type.options.map(
                                                                    (opt, i) => (
                                                                        <option key={i} value={opt} className="bg-white text-[#0A2E22]">
                                                                            {opt}
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>
                                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0A2E22]/40 pointer-events-none" />
                                                        </div>
                                                    </div>

                                                    {/* Target URL */}
                                                    <div>
                                                        <label htmlFor="target_url" className={labelClass}>
                                                            {form.fields.target_url.label}{' '}
                                                            <span className="text-red-400">*</span>
                                                        </label>
                                                        <input
                                                            type="url"
                                                            id="target_url"
                                                            name="target_url"
                                                            value={formData.target_url}
                                                            onChange={handleChange}
                                                            required
                                                            placeholder={form.fields.target_url.placeholder}
                                                            className={inputClass}
                                                        />
                                                        <p className="mt-2 text-xs text-[#0A2E22]/40">
                                                            {form.fields.target_url.help}
                                                        </p>
                                                    </div>

                                                    {/* Topics */}
                                                    <div>
                                                        <label htmlFor="topics_field" className={labelClass}>
                                                            {form.fields.topics.label}{' '}
                                                            <span className="text-red-400">*</span>
                                                        </label>
                                                        <textarea
                                                            id="topics_field"
                                                            name="topics_field"
                                                            value={formData.topics_field}
                                                            onChange={handleChange}
                                                            required
                                                            rows={4}
                                                            placeholder={form.fields.topics.placeholder}
                                                            className={`${inputClass} resize-none`}
                                                        />
                                                    </div>

                                                    {/* Sample */}
                                                    <div>
                                                        <label htmlFor="sample" className={labelClass}>
                                                            {form.fields.sample.label}{' '}
                                                            <span className="text-red-400">*</span>
                                                        </label>
                                                        <input
                                                            type="url"
                                                            id="sample"
                                                            name="sample"
                                                            value={formData.sample}
                                                            onChange={handleChange}
                                                            required
                                                            placeholder={form.fields.sample.placeholder}
                                                            className={inputClass}
                                                        />
                                                        <p className="mt-2 text-xs text-[#0A2E22]/40">
                                                            {form.fields.sample.help}
                                                        </p>
                                                    </div>

                                                    {/* Outline */}
                                                    <div>
                                                        <label htmlFor="outline" className={labelClass}>
                                                            {form.fields.outline.label}{' '}
                                                            <span className="text-red-400">*</span>
                                                        </label>
                                                        <textarea
                                                            id="outline"
                                                            name="outline"
                                                            value={formData.outline}
                                                            onChange={handleChange}
                                                            required
                                                            rows={5}
                                                            placeholder={form.fields.outline.placeholder}
                                                            className={`${inputClass} resize-none`}
                                                        />
                                                    </div>

                                                    {/* Dofollo URL (optional) */}
                                                    <div>
                                                        <label htmlFor="dofollo_url" className={labelClass}>
                                                            {form.fields.dofollo_url.label}
                                                            <span className="ml-2 text-[#0A2E22]/30 font-normal text-xs">
                                                                (Optional)
                                                            </span>
                                                        </label>
                                                        <input
                                                            type="url"
                                                            id="dofollo_url"
                                                            name="dofollo_url"
                                                            value={formData.dofollo_url}
                                                            onChange={handleChange}
                                                            placeholder={form.fields.dofollo_url.placeholder}
                                                            className={inputClass}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Submit */}
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full py-4 bg-[#E1F28F] text-[#0A2E22] rounded-xl font-extrabold text-base hover:shadow-[0_0_30px_-5px_#E1F28F] hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        Submitting
                                                        <span className="animate-pulse">...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        {form.submit_button}
                                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
