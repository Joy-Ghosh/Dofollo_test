import React, { useState } from 'react';
import { Mail, Send, CheckCircle, ArrowRight, LifeBuoy, HeartHandshake, Shield, Zap } from 'lucide-react';
import Footer from '../components/Footer';
import CompactHero from '../components/CompactHero';
import ScrollReveal from '../components/ScrollReveal';
import supportData from '../data/pages/support.json';
import SEO from '../components/SEO';
import seoData from '../data/seo.json';

export default function Support() {
    const { hero, contact_info, contact_form } = supportData;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans text-[#0A2E22]">
            <SEO {...seoData.pages.support} />
            <CompactHero
                badge={hero.badge}
                title={hero.title}
                description={hero.description}
            />

            <main className="flex-grow container mx-auto py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Left Column: Contact Info */}
                    <ScrollReveal variant="slide-left" className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-extrabold text-[#0A2E22] mb-4">{contact_info.title}</h2>
                            <p className="text-[#0A2E22]/60 text-lg leading-relaxed mb-8">{contact_info.description}</p>

                            <div className="space-y-4">
                                {/* Email support card */}
                                <div className="flex items-start gap-4 p-6 rounded-2xl border border-[#0A2E22]/10 bg-[#0A2E22]/[0.03] hover:border-[#045C4E]/30 hover:bg-[#0A2E22]/[0.06] hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-[#045C4E]/10 flex items-center justify-center text-[#045C4E] shrink-0 group-hover:bg-[#045C4E] group-hover:text-white transition-all">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#0A2E22] mb-1">{contact_info.email_support.title}</h3>
                                        <p className="text-[#0A2E22]/50 mb-2 text-sm leading-relaxed">{contact_info.email_support.description}</p>
                                        <a href={`mailto:${contact_info.email_support.email}`} className="text-[#045C4E] font-bold hover:underline decoration-2 underline-offset-4 text-sm">
                                            {contact_info.email_support.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Help center card */}
                                <div className="flex items-start gap-4 p-6 rounded-2xl border border-[#0A2E22]/10 bg-[#0A2E22]/[0.03] hover:border-[#045C4E]/30 hover:bg-[#0A2E22]/[0.06] hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-[#045C4E]/10 flex items-center justify-center text-[#045C4E] shrink-0 group-hover:bg-[#045C4E] group-hover:text-white transition-all">
                                        <LifeBuoy className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#0A2E22] mb-1">{contact_info.help_center.title}</h3>
                                        <p className="text-[#0A2E22]/50 mb-2 text-sm leading-relaxed">{contact_info.help_center.description}</p>
                                        <a href={contact_info.help_center.link_url} className="text-[#045C4E] font-bold hover:underline text-sm flex items-center gap-1 group/link">
                                            {contact_info.help_center.link_label}
                                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Partner CTA */}
                        <div className="p-8 rounded-2xl border border-white/10 bg-[#0A2E22] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E1F28F]/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#045C4E]/40 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                            <div className="relative z-10">
                                <HeartHandshake className="w-10 h-10 text-[#E1F28F] mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{contact_info.partner_cta.title}</h3>
                                <p className="text-white/55 mb-6 text-sm leading-relaxed">{contact_info.partner_cta.description}</p>
                                <button className="px-6 py-3 bg-[#E1F28F] text-[#0A2E22] rounded-xl font-bold text-sm hover:bg-white transition-colors shadow-sm">
                                    {contact_info.partner_cta.button_label}
                                </button>
                            </div>
                        </div>

                        {/* Trust badges */}
                        <div className="flex items-center gap-6 pt-2">
                            <div className="flex items-center gap-2 text-[#0A2E22]/40 text-xs font-bold">
                                <Shield className="w-4 h-4" />
                                SSL Encrypted
                            </div>
                            <div className="flex items-center gap-2 text-[#0A2E22]/40 text-xs font-bold">
                                <Zap className="w-4 h-4" />
                                Reply within 24hrs
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right Column: Contact Form */}
                    <ScrollReveal variant="slide-right">
                        <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#0A2E22]/10 shadow-[0_8px_40px_-12px_rgba(10,46,34,0.12)] relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#045C4E] to-[#E1F28F]" />

                            <div className="mb-8">
                                <h3 className="text-2xl font-extrabold text-[#0A2E22] mb-2 flex items-center gap-2">
                                    <span className="p-1.5 bg-[#045C4E]/10 rounded-lg">
                                        <Mail className="w-5 h-5 text-[#045C4E]" />
                                    </span>
                                    {contact_form.title}
                                </h3>
                                <p className="text-[#0A2E22]/50">{contact_form.description}</p>
                            </div>

                            {isSubmitted ? (
                                <div className="bg-[#E1F28F]/20 border border-[#E1F28F]/50 rounded-2xl p-8 text-center">
                                    <div className="w-16 h-16 bg-[#045C4E]/10 text-[#045C4E] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-xl font-bold text-[#0A2E22] mb-2">{contact_form.success_title}</h4>
                                    <p className="text-[#0A2E22]/60 mb-6">
                                        {contact_form.success_message_prefix} <span className="font-bold text-[#0A2E22]">{formData.email}</span> {contact_form.success_message_suffix}
                                    </p>
                                    <button onClick={() => setIsSubmitted(false)} className="text-[#045C4E] font-bold hover:underline">
                                        {contact_form.retry_label}
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-[#0A2E22]/70 mb-2">{contact_form.fields.name.label}</label>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                                            className="w-full px-5 py-4 bg-[#0A2E22]/[0.03] border border-[#0A2E22]/10 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#045C4E]/30 focus:border-[#045C4E]/40 outline-none transition-all placeholder:text-[#0A2E22]/30 font-medium text-[#0A2E22]"
                                            placeholder={contact_form.fields.name.placeholder} />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-[#0A2E22]/70 mb-2">{contact_form.fields.email.label}</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                                            className="w-full px-5 py-4 bg-[#0A2E22]/[0.03] border border-[#0A2E22]/10 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#045C4E]/30 focus:border-[#045C4E]/40 outline-none transition-all placeholder:text-[#0A2E22]/30 font-medium text-[#0A2E22]"
                                            placeholder={contact_form.fields.email.placeholder} />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-bold text-[#0A2E22]/70 mb-2">{contact_form.fields.subject.label}</label>
                                        <select id="subject" name="subject" value={formData.subject}
                                            onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                                            required
                                            className="w-full px-5 py-4 bg-[#0A2E22]/[0.03] border border-[#0A2E22]/10 rounded-xl focus:ring-2 focus:ring-[#045C4E]/30 focus:border-[#045C4E]/40 outline-none transition-all text-[#0A2E22] font-medium appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled className="bg-white text-[#0A2E22]/40">{contact_form.fields.subject.placeholder}</option>
                                            {contact_form.fields.subject.options.map((option: string, i: number) => (
                                                <option key={i} value={option} className="bg-white text-[#0A2E22]">{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-[#0A2E22]/70 mb-2">{contact_form.fields.message.label}</label>
                                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                                            placeholder={contact_form.fields.message.placeholder}
                                            className="w-full px-5 py-4 bg-[#0A2E22]/[0.03] border border-[#0A2E22]/10 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#045C4E]/30 focus:border-[#045C4E]/40 outline-none transition-all placeholder:text-[#0A2E22]/30 font-medium text-[#0A2E22] resize-none"
                                        />
                                    </div>
                                    <button type="submit" disabled={isSubmitting}
                                        className="w-full py-4 bg-[#E1F28F] text-[#0A2E22] rounded-xl font-extrabold text-base hover:shadow-[0_0_30px_-5px_#E1F28F] hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                                    >
                                        {isSubmitting ? (
                                            <>Sending<span className="animate-pulse">...</span></>
                                        ) : (
                                            <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </ScrollReveal>
                </div>
            </main>

            <Footer />
        </div>
    );
}
