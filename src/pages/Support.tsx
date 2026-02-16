import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle, ArrowRight, LifeBuoy, HeartHandshake } from 'lucide-react';
import Footer from '../components/Footer';

export default function Support() {
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
        <div className="min-h-screen bg-[#F5FFEF] flex flex-col font-sans text-[#0A2E22]">

            {/* --- Hero Section --- */}
            <section className="pt-32 pb-20 relative overflow-hidden bg-[#0A2E22]">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#E1F28F]/10 blur-[120px]" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#E1F28F]/5 blur-[100px]" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(225,242,143,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(225,242,143,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F28F]/10 border border-[#E1F28F]/20 text-[#E1F28F] text-xs font-bold uppercase tracking-wider mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#E1F28F] animate-pulse"></span>
                        We're here to help
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white max-w-4xl mx-auto">
                        Contact Support
                    </h1>

                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        Have a question or need assistance? Reach out to our team and we'll get back to you as soon as possible.
                    </p>
                </div>
            </section>

            <main className="flex-grow container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                    {/* Left Column: Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold text-[#0A2E22] mb-6">Get in Touch</h2>
                            <p className="text-[#0A2E22]/70 text-lg leading-relaxed mb-8">
                                Whether you have a question about features, pricing, or need technical support, our team is ready to answer all your questions.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-[#0A2E22]/5 shadow-sm hover:border-[#045C4E]/20 transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-[#F5FFEF] flex items-center justify-center text-[#045C4E] group-hover:bg-[#045C4E] group-hover:text-[#E1F28F] transition-colors border border-[#0A2E22]/5">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#0A2E22] text-lg mb-1">Email Support</h3>
                                        <p className="text-[#0A2E22]/60 mb-2 text-sm">Our friendly team is here to help.</p>
                                        <a href="mailto:help@dofollo.ai" className="text-[#045C4E] font-bold hover:underline decoration-2 underline-offset-4">
                                            help@dofollo.ai
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-[#0A2E22]/5 shadow-sm hover:border-[#045C4E]/20 transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-[#F5FFEF] flex items-center justify-center text-[#045C4E] group-hover:bg-[#045C4E] group-hover:text-[#E1F28F] transition-colors border border-[#0A2E22]/5">
                                        <LifeBuoy className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#0A2E22] text-lg mb-1">Help Center</h3>
                                        <p className="text-[#0A2E22]/60 mb-2 text-sm">Browse our documentation and FAQs.</p>
                                        <a href="#" className="text-[#045C4E] font-bold hover:underline decoration-2 underline-offset-4 flex items-center gap-1">
                                            Visit Help Center <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0A2E22] text-white p-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E1F28F]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="relative z-10">
                                <HeartHandshake className="w-10 h-10 text-[#E1F28F] mb-4" />
                                <h3 className="text-xl font-bold mb-2">Partner with us</h3>
                                <p className="text-white/70 mb-6 text-sm">
                                    Interested in a partnership or enterprise solution? We'd love to hear from you.
                                </p>
                                <button className="px-5 py-2.5 bg-[#E1F28F] text-[#0A2E22] rounded-xl font-bold text-sm hover:bg-white transition-colors">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-[#0A2E22]/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#045C4E] to-[#E1F28F]"></div>

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-[#0A2E22] mb-2 flex items-center gap-2">
                                <MessageSquare className="w-6 h-6 text-[#045C4E]" />
                                Send us a message
                            </h3>
                            <p className="text-[#0A2E22]/60">Fill out the form below and we'll get back to you shortly.</p>
                        </div>

                        {isSubmitted ? (
                            <div className="bg-[#F5FFEF] border border-[#E1F28F] rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
                                <div className="w-16 h-16 bg-[#E1F28F]/20 text-[#045C4E] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8" />
                                </div>
                                <h4 className="text-xl font-bold text-[#0A2E22] mb-2">Message Sent!</h4>
                                <p className="text-[#0A2E22]/70 mb-6">
                                    Thank you for contacting us. We represent received your message and will respond to <span className="font-bold text-[#0A2E22]">{formData.email}</span> as soon as possible.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-[#045C4E] font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-[#0A2E22] mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#F5FFEF] border border-[#0A2E22]/10 rounded-xl focus:ring-2 focus:ring-[#045C4E]/20 focus:border-[#045C4E] outline-none transition-all placeholder:text-[#0A2E22]/30"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-[#0A2E22] mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#F5FFEF] border border-[#0A2E22]/10 rounded-xl focus:ring-2 focus:ring-[#045C4E]/20 focus:border-[#045C4E] outline-none transition-all placeholder:text-[#0A2E22]/30"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-bold text-[#0A2E22] mb-2">Subject</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                                            required
                                            className="w-full px-4 py-3 bg-[#F5FFEF] border border-[#0A2E22]/10 rounded-xl focus:ring-2 focus:ring-[#045C4E]/20 focus:border-[#045C4E] outline-none transition-all text-[#0A2E22]"
                                        >
                                            <option value="" disabled>Select a subject</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Technical Support">Technical Support</option>
                                            <option value="Billing">Billing</option>
                                            <option value="Partnership">Partnership</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-[#0A2E22] mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-[#F5FFEF] border border-[#0A2E22]/10 rounded-xl focus:ring-2 focus:ring-[#045C4E]/20 focus:border-[#045C4E] outline-none transition-all placeholder:text-[#0A2E22]/30 resize-none"
                                            placeholder="How can we help you today?"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-[#045C4E] text-white rounded-xl font-bold text-lg hover:bg-[#03483D] transition-all shadow-lg shadow-[#045C4E]/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
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
                </div>
            </main>

            <Footer />
        </div>
    );
}
