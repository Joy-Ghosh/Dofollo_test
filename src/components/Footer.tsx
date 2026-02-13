import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, ChevronDown, ChevronRight, Zap } from 'lucide-react';
import logo from '../assets/logo.png';


export default function Footer() {
    // Separate states for each expandable section
    const [openSections, setOpenSections] = useState({
        seo: true,
        readability: false,
        analytics: false,
        ip: false,
        more: false
    });

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const mainLinks = {
        product: ["Get Started", "Pricing", "Features", "Tools", "Resources"],
        company: ["About", "Blog", "Docs", "Support", "Partner"],
        legal: ["Privacy", "Terms", "Agency", "Contact"] // Added a few implicit ones to balance
    };

    const toolDirectories = {
        seo: {
            title: "SEO Tools",
            items: [
                "Link Counter", "Keyword Density Checker", "Domain Authority Checker",
                "AI Content Detector", "Plagiarism Checker"
            ]
        },

        analytics: {
            title: "Analytics Tools",
            items: [
                "SEO ROI Calculator", "Enterprise SEO ROI Calculator",
                "Conversion Rate Calculator", "Password Generator"
            ]
        },
        ip: {
            title: "IP Intelligence",
            items: [
                "DNS Lookup", "CNAME Lookup", "MX Lookup", "SPF Lookup", "NS Lookup", "TXT Record Checker"
            ]
        },
        readability: {
            title: "Readability Tools",
            items: [
                "Readability Checker", "Flesch Reading Ease", "Flesch-Kincaid Grade",
                "Gunning Fog Index", "SMOG Index", "Readability Analysis",
                "Automated Readability Index", "Coleman-Liau Index", "Dale-Chall Readability",
                "Lix Readability Score", "Rix Text Complexity"
            ]
        },
        more: {
            title: "More Tools",
            items: [
                "SSL Certificate Checker", "IP Address Lookup", "IP Geolocation", "IP Intelligence"
            ]
        }
    };

    return (
        <footer className="bg-[#0A2E22] text-[#f5ffef] border-t border-white/5 relative overflow-hidden font-sans">
            {/* Large background decorative elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E1F28F]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
                    {/* Brand Column (Left) */}
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            {/* Logo */}
                            <Link to="/" className="flex items-center gap-2 cursor-pointer group">
                                <img src={logo} alt="Dofollo" className="w-8 h-8 rounded-lg object-contain group-hover:rotate-12 transition-transform" />
                                <span className="text-xl font-bold tracking-tight text-white">
                                    Dofollo<span className="text-[#E1F28F]">.ai</span>
                                </span>
                            </Link>
                            <p className="mt-6 text-[#f5ffef]/70 leading-relaxed text-lg max-w-sm">
                                AI-powered internal linking tool that helps you discover, optimize, and manage internal links across your website for better SEO rankings.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#E1F28F] hover:text-[#0A2E22] flex items-center justify-center transition-all duration-300">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Main Links Grid (Right) */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-white">Product</h4>
                            <ul className="space-y-4">
                                {mainLinks.product.map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-[#f5ffef]/60 hover:text-[#E1F28F] transition-colors flex items-center gap-2 group">
                                            <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#E1F28F]" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
                            <ul className="space-y-4">
                                {mainLinks.company.map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-[#f5ffef]/60 hover:text-[#E1F28F] transition-colors flex items-center gap-2 group">
                                            <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#E1F28F]" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="font-bold text-lg mb-6 text-white">Support</h4>
                            <ul className="space-y-4">
                                {mainLinks.legal.map(link => (
                                    <li key={link}>
                                        <a href="#" className="text-[#f5ffef]/60 hover:text-[#E1F28F] transition-colors flex items-center gap-2 group">
                                            <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#E1F28F]" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Directory Sections */}
                <div className="border-t border-white/10 pt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                        <div className="lg:col-span-4">
                            <button
                                onClick={() => toggleSection('seo')}
                                className="flex items-center gap-3 text-[#f5ffef]/80 hover:text-[#E1F28F] transition-colors group mb-8 lg:mb-0 w-full lg:w-auto"
                            >
                                <div className={`p-2 rounded-full bg-white/5 group-hover:bg-[#E1F28F]/20 transition-all ${openSections.seo ? 'rotate-180' : ''}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-[#f5ffef]/40 group-hover:text-[#E1F28F] transition-colors text-left flex-1">Free Tools Directory</h3>
                            </button>
                        </div>

                        <div className={`lg:col-span-8 transition-all duration-500 overflow-hidden ${openSections.seo ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 pb-12">
                                {Object.entries(toolDirectories).map(([key, section]) => (
                                    <div key={key} className="space-y-4">
                                        <h4 className="font-bold text-[#E1F28F]">{section.title}</h4>
                                        <ul className="space-y-2">
                                            {section.items.map((item, i) => (
                                                <li key={i}>
                                                    <a href="#" className="text-sm text-[#f5ffef]/50 hover:text-white transition-colors hover:underline decoration-[#E1F28F]/50 underline-offset-4 block leading-snug">
                                                        {item}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-white/10 text-sm text-[#f5ffef]/40">
                    <p>© 2026 Dofollo Inc. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
