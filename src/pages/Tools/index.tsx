import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Search, Link as LinkIcon, Hash, Shield, Sparkles, FileText, BarChart3,
    Activity, Zap, Lock, Globe, Globe2, AlignLeft, Eye, Wrench, ArrowRight,
    ExternalLink, GraduationCap, Calculator, Type, BookOpen, Languages, Divide,
    TrendingUp, Mail, ShieldCheck, Server, MapPin, ShieldAlert
} from 'lucide-react';
import categoriesData from '../../data/tools/categories.json';

// Map icon strings to components
const iconMap: { [key: string]: any } = {
    Search,
    LinkIcon,
    Hash,
    Shield,
    Sparkles,
    FileText,
    BarChart3,
    Activity,
    Zap,
    Lock,
    Globe,
    Globe2,
    AlignLeft,
    Eye,
    Wrench,
    ExternalLink,
    GraduationCap,
    Calculator,
    Type,
    BookOpen,
    Languages,
    Divide,
    TrendingUp,
    Mail,
    ShieldCheck,
    Server,
    MapPin,
    ShieldAlert
};

export default function Tools() {
    const [searchQuery, setSearchQuery] = useState('');

    // Helper to get color styles based on tool badge
    const getToolStyles = (badge?: string) => {
        const normalizedBadge = badge?.toLowerCase() || '';

        // Green Tools (Popular, Pro)
        if (normalizedBadge === 'popular' || normalizedBadge === 'pro') {
            return {
                wrapper: "bg-[#E1F28F]/[0.02] border-[#E1F28F]/10 hover:border-[#E1F28F]/30 hover:bg-[#E1F28F]/[0.04]",
                icon: "text-[#E1F28F]",
                glow: "bg-[#E1F28F]/20",
                badge: "bg-[#E1F28F]/10 text-[#E1F28F] border-[#E1F28F]/20",
                textHover: "group-hover:text-[#E1F28F]"
            };
        }

        // Teal Tools (New, AI)
        if (normalizedBadge === 'new' || normalizedBadge === 'ai' || normalizedBadge === 'beta') {
            return {
                wrapper: "bg-teal-500/[0.02] border-teal-500/10 hover:border-teal-500/30 hover:bg-teal-500/[0.04]",
                icon: "text-teal-400",
                glow: "bg-teal-500/20",
                badge: "bg-teal-500/10 text-teal-400 border-teal-500/20",
                textHover: "group-hover:text-teal-400"
            };
        }

        // Default Lime Tools (for everything else)
        return {
            wrapper: "bg-lime-500/[0.02] border-lime-500/10 hover:border-lime-500/30 hover:bg-lime-500/[0.04]",
            icon: "text-lime-400",
            glow: "bg-lime-500/20",
            badge: "bg-lime-500/10 text-lime-400 border-lime-500/20",
            textHover: "group-hover:text-lime-400"
        };
    };

    const filteredCategories = categoriesData.categories.map(category => ({
        ...category,
        tools: category.tools.filter(tool =>
            tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.tools.length > 0);

    return (
        <div className="min-h-screen bg-[#051A14]">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#E1F28F]/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-[#E1F28F] animate-pulse" />
                        <span className="text-xs font-medium text-[#E1F28F] tracking-wide uppercase">{categoriesData.hero.badge}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                        {categoriesData.hero.title_first} <span className="text-[#E1F28F]">{categoriesData.hero.title_highlight}</span>
                    </h1>

                    <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                        {categoriesData.hero.description}
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-md mx-auto relative group mb-8">
                        <div className="absolute inset-0 bg-[#E1F28F]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center bg-[#0A2E22] border border-white/10 rounded-full px-4 py-3 shadow-xl focus-within:border-[#E1F28F]/50 transition-colors">
                            <Search className="w-5 h-5 text-white/40 mr-3" />
                            <input
                                type="text"
                                placeholder="Search for a tool..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent border-none outline-none text-white w-full placeholder:text-white/30 text-sm"
                            />
                        </div>
                    </div>

                    {/* Category Tags */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categoriesData.categories.map((category, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    const element = document.getElementById(category.title.toLowerCase().replace(/\s+/g, '-'));
                                    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }}
                                className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-[#E1F28F]/30 transition-all duration-300"
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tools Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-32 space-y-24">
                {filteredCategories.length > 0 ? (
                    filteredCategories.map((category, idx) => {
                        const CategoryIcon = iconMap[category.icon] || Wrench;

                        return (
                            <div
                                key={idx}
                                id={category.title.toLowerCase().replace(/\s+/g, '-')}
                                className="scroll-mt-32 space-y-8"
                            >
                                <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                                    <div className="p-2 rounded-lg bg-white/5 text-[#E1F28F]">
                                        <CategoryIcon className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.tools.map((tool, tIdx) => {
                                        const ToolIcon = iconMap[tool.icon] || Wrench;
                                        const styles = getToolStyles(tool.badge);

                                        // Always render as Link, default to '#' if not specified
                                        const linkTarget = tool.link || '#';

                                        return (
                                            <Link
                                                key={tIdx}
                                                to={linkTarget}
                                                className={`group relative p-6 rounded-2xl border transition-all duration-300 ${styles.wrapper} cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50`}
                                            >
                                                {/* Subtle Radial Gradient */}
                                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 radial-gradient-circle`} style={{ background: `radial-gradient(circle at center, ${styles.glow} 0%, transparent 70%)`, opacity: 0.05 }} />

                                                <div className="relative z-10 flex flex-col h-full">
                                                    <div className="flex items-start justify-between mb-4">
                                                        <div className={`p-3 rounded-xl bg-white/5 border border-white/5 ${styles.icon} group-hover:scale-110 transition-transform duration-300`}>
                                                            <ToolIcon className="w-6 h-6" />
                                                        </div>
                                                        {tool.badge && (
                                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${styles.badge} border`}>
                                                                {tool.badge}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <h3 className={`text-lg font-bold text-white mb-2 ${styles.textHover} transition-colors`}>
                                                        {tool.name}
                                                    </h3>

                                                    <p className="text-sm text-white/50 leading-relaxed mb-6 flex-grow">
                                                        {tool.description}
                                                    </p>

                                                    <div className="flex items-center text-xs font-bold uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors mt-auto">
                                                        Open Tool <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold text-white mb-2">{categoriesData.no_results.title}</h3>
                        <p className="text-white/50">{categoriesData.no_results.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
