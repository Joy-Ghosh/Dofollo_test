import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle, ArrowRight, LifeBuoy, HeartHandshake } from 'lucide-react';
import Footer from '../components/Footer';
import CompactHero from '../components/CompactHero';
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
        <div className="min-h-screen bg-white flex flex-col font-sans text-[#0A2E22]">
            <SEO {...seoData.pages.support} />

            {/* --- Hero Section --- */}
            <CompactHero
                badge={hero.badge}
                title={hero.title}
                description={hero.description}
            />

            <main className="flex-grow container mx-auto px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                    {/* Left Column: Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-[#0A2E22] mb-6">{contact_info.title}</h2>
                            <p className="text-[#0A2E22]/70 text-lg leading-relaxed mb-8">
                                {contact_info.description}
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-8 bg-white rounded-3xl border border-[#0A2E22]/5 shadow-sm hover:border-[#045C4E]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#0A2E22]/5 flex items-center justify-center text-[#045C4E] group-hover:bg-[#045C4E] group-hover:text-[#E1F28F] transition-colors border border-[#0A2E22]/5 shadow-inner">
                                        <Mail className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-[#0A2E22] text-lg mb-1">{contact_info.email_support.title}</h3>
                                        <p className="text-[#0A2E22]/60 mb-3 text-sm leading-relaxed">{contact_info.email_support.description}</p>
                                        <a href={`mailto:${contact_info.email_support.email}`} className="text-[#045C4E] font-bold hover:underline decoration-2 underline-offset-4 decoration-[#E1F28F]">
                                            {contact_info.email_support.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-8 bg-white rounded-3xl border border-[#0A2E22]/5 shadow-sm hover:border-[#045C4E]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                    <div className="w-14 h-14 rounded-2xl bg-[#0A2E22]/5 flex items-center justify-center text-[#045C4E] group-hover:bg-[#045C4E] group-hover:text-[#E1F28F] transition-colors border border-[#0A2E22]/5 shadow-inner">
                                        <LifeBuoy className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h3 className="font-extrabold text-[#0A2E22] text-lg mb-1">{contact_info.help_center.title}</h3>
                                        <p className="text-[#0A2E22]/60 mb-3 text-sm leading-relaxed">{contact_info.help_center.description}</p>
                                        <a href={contact_info.help_center.link_url} className="text-[#045C4E] font-bold hover:underline decoration-2 underline-offset-4 decoration-[#E1F28F] flex items-center gap-1 group/link">
                                            {contact_info.help_center.link_label} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0A2E22] text-white p-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E1F28F]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <HeartHandshake className="w-10 h-10 text-[#E1F28F] mb-4" />
                                <h3 className="text-xl font-bold mb-2">{contact_info.partner_cta.title}</h3>
                                <p className="text-white/70 mb-6 text-sm">
                                    {contact_info.partner_cta.description}
                                </p>
                                <button className="px-5 py-2.5 bg-[#E1F28F] text-[#0A2E22] rounded-xl font-bold text-sm hover:bg-white transition-colors">
                                    {contact_info.partner_cta.button_label}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-[#0A2E22]/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#045C4E] to-[#E1F28F]"></div>

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-[#0A2E22] mb-2 flex items-center gap-2">
                                <MessageSquare className="w-6 h-6 text-[#045C4E]" />
                                {contact_form.title}
                            </h3>
                            <p className="text-[#0A2E22]/60">{contact_form.description}</p>
                        </div>

                        {isSubmitted ? (
                            <div className="bg-[#0A2E22]/5 border border-[#E1F28F] rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
                                <div className="w-16 h-16 bg-[#E1F28F]/20 text-[#045C4E] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-[#0A2E22] mb-2">{contact_form.success_title}</h4>
                                <p className="text-[#0A2E22]/70 mb-6">
                                    {contact_form.success_message_prefix} <span className="font-bold text-[#0A2E22]">{formData.email}</span> {contact_form.success_message_suffix}
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-[#045C4E] font-bold hover:underline"
                                >
                                    {contact_form.retry_label}
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-[#0A2E22] mb-2">{contact_form.fields.name.label}</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 bg-[#F8FAFC] border border-[#0A2E22]/5 rounded-xl focus:bg-white focus:ring-4 focus:ring-[#E1F28F]/50 focus:border-[#045C4E] outline-none transition-all placeholder:text-[#0A2E22]/30 font-medium text-[#0A2E22]"
                                            placeholder={contact_form.fields.name.placeholder}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-[#0A2E22] mb-2">{contact_form.fields.email.label}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-5 py-4 bg-[#F8FAFC] border border-[#0A2E22]/5 rounded-xl focus:bg-white focus:ring-4 focus:ring-[#E1F28F]/50 focus:border-[#045C4E] outline-none transition-all placeholder:text-[#0A2E22]/30 font-medium text-[#0A2E22]"
                                            placeholder={contact_form.fields.email.placeholder}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-bold text-[#0A2E22] mb-2">{contact_form.fields.subject.label}</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                                            required
                                            className="w-full px-5 py-4 bg-[#F8FAFC] border border-[#0A2E22]/5 rounded-xl focus:bg-white focus:ring-4 focus:ring-[#E1F28F]/50 focus:border-[#045C4E] outline-none transition-all text-[#0A2E22] font-medium appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>{contact_form.fields.subject.placeholder}</option>
                                            {contact_form.fields.subject.options.map((option: string, i: number) => (
                                                <option key={i} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-[#0A2E22] mb-2">{contact_form.fields.message.label}</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder={contact_form.fields.message.placeholder}
                                            className="w-full px-5 py-4 bg-[#F8FAFC] border border-[#0A2E22]/5 rounded-xl focus:bg-white focus:ring-4 focus:ring-[#E1F28F]/50 focus:border-[#045C4E] outline-none transition-all placeholder:text-[#0A2E22]/30 font-medium text-[#0A2E22] resize-none"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-5 bg-gradient-to-r from-[#045C4E] to-[#0A2E22] text-white rounded-xl font-bold text-lg hover:shadow-[0_10px_40px_-10px_rgba(4,92,78,0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                                >
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />
                                    {isSubmitting ? (
                                        <>Sending<span className="animate-pulse">...</span></>
                                    ) : (
                                        <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
