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

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#0A2E22] flex flex-col font-sans text-white">
            <SEO {...seoData.pages.support} />
            <CompactHero
                badge={hero.badge}
                title={hero.title}
                description={hero.description}
            />

            <main className="flex-grow container mx-auto px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                    {/* Left Column: Contact Info */}
                    <ScrollReveal variant="slide-left" className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-extrabold text-white mb-4">{contact_info.title}</h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-8">{contact_info.description}</p>

                            <div className="space-y-4">
                                {/* Email support card */}
                                <div className="flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#E1F28F]/30 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-[#E1F28F]/10 flex items-center justify-center text-[#E1F28F] shrink-0 group-hover:bg-[#E1F28F] group-hover:text-[#0A2E22] transition-all">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">{contact_info.email_support.title}</h3>
                                        <p className="text-white/50 mb-2 text-sm leading-relaxed">{contact_info.email_support.description}</p>
                                        <a href={`mailto:${contact_info.email_support.email}`} className="text-[#E1F28F] font-bold hover:underline decoration-2 underline-offset-4 text-sm">
                                            {contact_info.email_support.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Help center card */}
                                <div className="flex items-start gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#E1F28F]/30 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-12 h-12 rounded-xl bg-[#E1F28F]/10 flex items-center justify-center text-[#E1F28F] shrink-0 group-hover:bg-[#E1F28F] group-hover:text-[#0A2E22] transition-all">
                                        <LifeBuoy className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">{contact_info.help_center.title}</h3>
                                        <p className="text-white/50 mb-2 text-sm leading-relaxed">{contact_info.help_center.description}</p>
                                        <a href={contact_info.help_center.link_url} className="text-[#E1F28F] font-bold hover:underline text-sm flex items-center gap-1 group/link">
                                            {contact_info.help_center.link_label}
                                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Partner CTA */}
                        <div className="p-8 rounded-2xl border border-[#E1F28F]/20 bg-[#E1F28F]/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#E1F28F]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            <div className="relative z-10">
                                <HeartHandshake className="w-10 h-10 text-[#E1F28F] mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{contact_info.partner_cta.title}</h3>
                                <p className="text-white/60 mb-6 text-sm leading-relaxed">{contact_info.partner_cta.description}</p>
                                <button className="px-6 py-3 bg-[#E1F28F] text-[#0A2E22] rounded-xl font-bold text-sm hover:bg-white transition-colors hover:shadow-[0_0_20px_-5px_#E1F28F]">
                                    {contact_info.partner_cta.button_label}
                                </button>
                            </div>
                        </div>

                        {/* Trust badges */}
                        <div className="flex items-center gap-6 pt-2">
                            <div className="flex items-center gap-2 text-white/40 text-xs font-bold">
                                <Shield className="w-4 h-4" />
                                SSL Encrypted
                            </div>
                            <div className="flex items-center gap-2 text-white/40 text-xs font-bold">
                                <Zap className="w-4 h-4" />
                                Reply within 24hrs
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right Column: Contact Form */}
                    <ScrollReveal variant="slide-right">
                        <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#045C4E] to-[#E1F28F]" />

                            <div className="mb-8">
                                <h3 className="text-2xl font-extrabold text-white mb-2 flex items-center gap-2">
                                    <span className="p-1.5 bg-[#E1F28F]/10 rounded-lg">
                                        <Mail className="w-5 h-5 text-[#E1F28F]" />
                                    </span>
                                    {contact_form.title}
                                </h3>
                                <p className="text-white/50">{contact_form.description}</p>
                            </div>

                            {isSubmitted ? (
                                <div className="bg-[#E1F28F]/5 border border-[#E1F28F]/30 rounded-2xl p-8 text-center">
                                    <div className="w-16 h-16 bg-[#E1F28F]/10 text-[#E1F28F] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">{contact_form.success_title}</h4>
                                    <p className="text-white/60 mb-6">
                                        {contact_form.success_message_prefix} <span className="font-bold text-white">{formData.email}</span> {contact_form.success_message_suffix}
                                    </p>
                                    <button onClick={() => setIsSubmitted(false)} className="text-[#E1F28F] font-bold hover:underline">
                                        {contact_form.retry_label}
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-white/70 mb-2">{contact_form.fields.name.label}</label>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:bg-white/10 focus:ring-2 focus:ring-[#E1F28F]/40 focus:border-[#E1F28F]/40 outline-none transition-all placeholder:text-white/20 font-medium text-white"
                                            placeholder={contact_form.fields.name.placeholder} />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-white/70 mb-2">{contact_form.fields.email.label}</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:bg-white/10 focus:ring-2 focus:ring-[#E1F28F]/40 focus:border-[#E1F28F]/40 outline-none transition-all placeholder:text-white/20 font-medium text-white"
                                            placeholder={contact_form.fields.email.placeholder} />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-bold text-white/70 mb-2">{contact_form.fields.subject.label}</label>
                                        <select id="subject" name="subject" value={formData.subject}
                                            onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                                            required
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#E1F28F]/40 focus:border-[#E1F28F]/40 outline-none transition-all text-white font-medium appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled className="bg-[#0A2E22]">{contact_form.fields.subject.placeholder}</option>
                                            {contact_form.fields.subject.options.map((option: string, i: number) => (
                                                <option key={i} value={option} className="bg-[#0A2E22]">{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-white/70 mb-2">{contact_form.fields.message.label}</label>
                                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                                            placeholder={contact_form.fields.message.placeholder}
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:bg-white/10 focus:ring-2 focus:ring-[#E1F28F]/40 focus:border-[#E1F28F]/40 outline-none transition-all placeholder:text-white/20 font-medium text-white resize-none"
                                        />
                                    </div>
                                    <button type="submit" disabled={isSubmitting}
                                        className="w-full py-4 bg-[#E1F28F] text-[#0A2E22] rounded-xl font-extrabold text-base hover:shadow-[0_0_30px_-5px_#E1F28F] hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden"
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
