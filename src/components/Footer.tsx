import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Twitter, Linkedin, Github, Facebook, ChevronDown, ChevronRight, Zap } from 'lucide-react';
import footerData from '../data/layout/footer.json';
import logo from '../assets/logo.png';

// Map icon strings to Lucide components
const iconMap: { [key: string]: any } = {
    Facebook,
    Twitter,
    Linkedin,
    Github,
    Instagram: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
    ),
    Pinterest: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.487-.695-2.435-2.878-2.435-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
        </svg>
    )
};

export default function Footer() {
    const location = useLocation();
    const { brand, columns, directories, bottom_bar } = footerData;

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

    return (
        <footer className="bg-[#0A2E22] text-white border-t border-white/5 relative overflow-hidden font-sans">
            {/* Large background decorative elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E1F28F]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

            <div className="container mx-auto py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
                    {/* Brand Column (Left) */}
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            {/* Logo */}
                            <Link to={brand.logo.link} className="flex items-center gap-1 cursor-pointer group">
                                <img src={logo} alt={brand.logo.alt} className="w-8 h-8 rounded-lg object-contain group-hover:rotate-12 transition-transform" />
                                <span className="text-xl font-bold tracking-tight text-white">
                                    {brand.logo.text}<span className="text-[#E1F28F]">{brand.logo.highlight}</span>
                                </span>
                            </Link>
                            <p className="text-white/60 text-sm leading-relaxed mt-4 mb-0">
                                {brand.description}
                            </p>
                        </div>

                        <div className="flex gap-4">
                            {brand.socials.map((social, i) => {
                                const Icon = iconMap[social.icon] || Github; // Default to Github if not found
                                return (
                                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#E1F28F] hover:text-[#0A2E22] flex items-center justify-center transition-all duration-300">
                                        <Icon size={20} className="w-5 h-5 fill-current" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Main Links Grid (Right) */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {columns.map((column, index) => (
                            <div key={index} className={column.title === 'Support' ? "col-span-2 md:col-span-1" : ""}>
                                <h4 className="font-bold text-lg mb-6 text-white">{column.title}</h4>
                                <ul className="space-y-4">
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            {link.isRouterLink ? (
                                                <Link to={link.href} className={`transition-colors flex items-center gap-2 group ${location.pathname === link.href || (link.href === '/docs' && location.pathname.startsWith('/docs')) ? 'text-[#E1F28F]' : 'text-white/60 hover:text-[#E1F28F]'}`}>
                                                    <ChevronRight size={14} className={`-ml-4 transition-all duration-300 text-[#E1F28F] ${location.pathname === link.href || (link.href === '/docs' && location.pathname.startsWith('/docs')) ? 'opacity-100 ml-0' : 'opacity-0 group-hover:opacity-100 group-hover:ml-0'}`} />
                                                    {link.label}
                                                </Link>
                                            ) : (
                                                <a href={link.href} className="text-white/60 hover:text-[#E1F28F] transition-colors flex items-center gap-2 group">
                                                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-[#E1F28F]" />
                                                    {link.label}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Directory Sections */}
                <div className="border-t border-white/10 pt-12">
                    {/* Header row: toggle + view all */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                        <button
                            onClick={() => toggleSection('seo')}
                            className="flex items-center gap-3 text-white/80 hover:text-[#E1F28F] transition-colors group w-full sm:w-auto"
                        >
                            <div className={`p-2 rounded-full bg-white/5 group-hover:bg-[#E1F28F]/20 transition-all ${openSections.seo ? 'rotate-180' : ''}`}>
                                <ChevronDown className="w-5 h-5" />
                            </div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-[#E1F28F] transition-colors text-left flex-1">{directories.main_toggle.button_label}</h3>
                        </button>

                        <Link to={directories.main_toggle.view_all_link} className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-[#E1F28F] transition-colors group ml-12 sm:ml-0">
                            {directories.main_toggle.view_all_label} <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* 5-column tools grid — full width */}
                    <div className={`transition-all duration-500 overflow-hidden ${openSections.seo ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 pb-12">
                            {Object.entries(directories.sections).map(([key, section]) => (
                                <div key={key} className="space-y-4">
                                    <h4 className="font-bold text-[#E1F28F]">{section.title}</h4>
                                    <ul className="space-y-2">
                                        {section.items.map((item, i) => (
                                            <li key={i}>
                                                {item.href.startsWith('/') ? (
                                                    <Link to={item.href} className={`text-sm transition-colors hover:underline decoration-[#E1F28F]/50 underline-offset-4 block leading-snug ${location.pathname === item.href ? 'text-[#E1F28F] font-medium' : 'text-white/50 hover:text-white'}`}>
                                                        {item.label}
                                                    </Link>
                                                ) : (
                                                    <a href={item.href} className="text-sm text-white/50 hover:text-white transition-colors hover:underline decoration-[#E1F28F]/50 underline-offset-4 block leading-snug">
                                                        {item.label}
                                                    </a>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-white/10 text-sm text-white/40">
                    <p>{bottom_bar.copyright}</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        {bottom_bar.links.map((link, i) =>
                            link.href.startsWith('/') ? (
                                <Link key={i} to={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                            ) : (
                                <a key={i} href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                            )
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}
