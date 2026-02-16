import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Facebook, Instagram, ChevronDown, ChevronRight, Zap } from 'lucide-react';
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
        product: ["Get Started", "Pricing", "Features", "Resources"],
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
                            <Link to="/" className="flex items-center gap-1 cursor-pointer group">
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
                            {[
                                { Icon: Facebook, href: "https://www.facebook.com/people/Dofollo/61557583197586/" },
                                { Icon: Instagram, href: "https://www.instagram.com/dofollo_/" },
                                {
                                    Icon: (props: any) => (
                                        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    ),
                                    href: "https://x.com/Dofollohq"
                                },
                                {
                                    Icon: (props: any) => (
                                        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.487-.695-2.435-2.878-2.435-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
                                        </svg>
                                    ),
                                    href: "https://in.pinterest.com/dofollohq/"
                                }
                            ].map(({ Icon, href }, i) => (
                                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#E1F28F] hover:text-[#0A2E22] flex items-center justify-center transition-all duration-300">
                                    <Icon size={20} className="w-5 h-5 fill-current" />
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
                                        {link === "Support" ? (
                                            <Link to="/support" className="text-[#f5ffef]/60 hover:text-[#E1F28F] transition-colors flex items-center gap-2 group">
                                                <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#E1F28F]" />
                                                {link}
                                            </Link>
                                        ) : (
                                            <a href="#" className="text-[#f5ffef]/60 hover:text-[#E1F28F] transition-colors flex items-center gap-2 group">
                                                <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#E1F28F]" />
                                                {link}
                                            </a>
                                        )}
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
                            <Link to="/tools" className="mt-4 ml-12 flex items-center gap-2 text-sm font-medium text-[#f5ffef]/60 hover:text-[#E1F28F] transition-colors group">
                                View all tools <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
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
