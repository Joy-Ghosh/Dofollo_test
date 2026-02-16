import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Link as LinkIcon, CheckCircle, HelpCircle, ArrowRight, Shield, Globe, FileText, ChevronDown, ChevronUp, RotateCcw, Copy, Check, BarChart3, AlertTriangle, AlertCircle, Sparkles, Layout, ExternalLink, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function LinkCounter() {
    const [url, setUrl] = useState("");
    const [activeTab, setActiveTab] = useState<'url' | 'compare'>('url');
    const [compareUrl1, setCompareUrl1] = useState("");
    const [compareUrl2, setCompareUrl2] = useState("");
    const [analyzing, setAnalyzing] = useState(false);

    // Placeholder function for analysis
    const handleAnalyze = (e: React.FormEvent) => {
        e.preventDefault();
        setAnalyzing(true);
        // Simulate API call
        setTimeout(() => setAnalyzing(false), 2000);
    };

    const handleClear = () => {
        if (activeTab === 'url') {
            setUrl("");
        } else {
            setCompareUrl1("");
            setCompareUrl2("");
        }
    };

    // FAQ Data
    const faqs = [
        {
            question: "What is a link counter?",
            answer: "A link counter is a tool that scans a webpage and counts all the hyperlinks present on it. It categorizes them into internal links (pointing to the same domain) and external links (pointing to other domains)."
        },
        {
            question: "Why should I use a link counter?",
            answer: "Counting links helps in auditing your on-page SEO. Too many links can dilute your page authority, while too few might affect user navigation. It also helps identify broken links or excessive external linking."
        },
        {
            question: "How does the tool count links?",
            answer: "The tool crawls the HTML source code of the provided URL, identifying all anchor tags (<a>) and classifying them based on their href attributes."
        },
        {
            question: "What is a counter link tool used for?",
            answer: "It is used for SEO audits, competitive analysis, checking link health, and ensuring a balanced internal linking structure."
        },
        {
            question: "Can this tool count internal and external links?",
            answer: "Yes, our tool automatically separates and counts both internal links (within your domain) and external links (pointing to other websites)."
        },
        {
            question: "Does the tool count external and outbound links?",
            answer: "Yes, 'external' and 'outbound' links are terms often used interchangeably. The tool counts any link pointing to a different domain."
        },
        {
            question: "Is this link counter free to use?",
            answer: "Yes, this tool is completely free to use with no hidden costs or registration requirements."
        },
        {
            question: "Why is counting links important for SEO?",
            answer: "Search engines use links to crawl and understand your site. A balanced link count ensures efficient crawling and prevents 'link juice' dilution."
        },
        {
            question: "Can I use this tool for long pages?",
            answer: "Absolutely. The tool is designed to handle pages of any length and can process hundreds of links efficiently."
        },
        {
            question: "Does the tool store my data?",
            answer: "No, we do not store the URLs you analyze or the results. All unique analysis happens in real-time."
        },
        {
            question: "What can I do with link count results?",
            answer: "You can use the results to optimize your crawl budget, fix broken links, remove excessive external links, and improve your internal linking strategy."
        }
    ];

    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-[#F5FFEF] flex flex-col gap-10 font-sans text-[#0A2E22]">

            {/* --- Hero Section --- */}
            <section className="pt-32 pb-20 relative overflow-hidden bg-[#0A2E22]">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#E1F28F]/10 blur-[120px]" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#E1F28F]/5 blur-[100px]" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(225,242,143,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(225,242,143,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    {/* Breadcrumbs */}
                    <div className="flex items-center justify-center gap-2 text-sm text-white/40 mb-8 font-medium">
                        <Link to="/" className="hover:text-[#E1F28F] transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4 text-white/20" />
                        <Link to="/tools" className="hover:text-[#E1F28F] transition-colors">Tools</Link>
                        <ChevronRight className="w-4 h-4 text-white/20" />
                        <span className="text-[#E1F28F] bg-[#E1F28F]/10 px-2 py-0.5 rounded-md">Link Counter Tool</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F28F]/10 border border-[#E1F28F]/20 text-[#E1F28F] text-xs font-bold uppercase tracking-wider mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#E1F28F] animate-pulse"></span>
                        Free to use • No registration required
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white max-w-4xl mx-auto">
                        Link Counter Tool
                    </h1>

                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        Use our link counter to easily check link counts and understand internal and external links with a simple and clear counter link tool.
                    </p>
                </div>
            </section>

            <main className="flex-grow container mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* --- Left Column: Tool & Content --- */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* 1. Main Tool Interface */}
                        <div className="bg-white rounded-3xl shadow-xl border border-[#0A2E22]/5 overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#045C4E] to-[#E1F28F]"></div>

                            {/* Toolbar */}
                            <div className="flex border-b border-[#0A2E22]/5 bg-[#F5FFEF]/50">
                                <button
                                    onClick={() => setActiveTab('url')}
                                    className={`px-6 py-4 text-sm font-bold transition-all ${activeTab === 'url'
                                        ? "text-[#045C4E] border-b-2 border-[#045C4E] bg-white"
                                        : "text-[#0A2E22]/60 hover:text-[#045C4E] hover:bg-[#E1F28F]/10"
                                        }`}
                                >
                                    URL
                                </button>
                                <button
                                    onClick={() => setActiveTab('compare')}
                                    className={`px-6 py-4 text-sm font-bold transition-all ${activeTab === 'compare'
                                        ? "text-[#045C4E] border-b-2 border-[#045C4E] bg-white"
                                        : "text-[#0A2E22]/60 hover:text-[#045C4E] hover:bg-[#E1F28F]/10"
                                        }`}
                                >
                                    Compare
                                </button>
                            </div>

                            <div className="p-8">
                                <form onSubmit={handleAnalyze} className="space-y-6">
                                    {activeTab === 'url' ? (
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Globe className="h-5 w-5 text-[#0A2E22]/40 group-focus-within:text-[#045C4E] transition-colors" />
                                            </div>
                                            <input
                                                type="url"
                                                value={url}
                                                onChange={(e) => setUrl(e.target.value)}
                                                placeholder="Enter a URL to analyze..."
                                                className="block w-full pl-12 pr-4 py-4 bg-[#FFFFFF] border border-[#0A2E22]/10 rounded-xl text-[#0A2E22] placeholder-[#0A2E22]/60 focus:ring-2 focus:ring-[#045C4E]/20 focus:border-[#045C4E] transition-all outline-none"
                                                required
                                            />
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Globe className="h-5 w-5 text-[#0A2E22]/40 group-focus-within:text-[#045C4E] transition-colors" />
                                                </div>
                                                <input
                                                    type="url"
                                                    value={compareUrl1}
                                                    onChange={(e) => setCompareUrl1(e.target.value)}
                                                    placeholder="First URL to compare..."
                                                    className="block w-full pl-12 pr-4 py-4 bg-[#FFFFFF] border border-[#0A2E22]/10 rounded-xl text-[#0A2E22] placeholder-[#0A2E22]/60 focus:ring-2 focus:ring-[#045C4E]/20 focus:border-[#045C4E] transition-all outline-none"
                                                    required
                                                />
                                            </div>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Globe className="h-5 w-5 text-[#0A2E22]/40 group-focus-within:text-[#045C4E] transition-colors" />
                                                </div>
                                                <input
                                                    type="url"
                                                    value={compareUrl2}
                                                    onChange={(e) => setCompareUrl2(e.target.value)}
                                                    placeholder="Second URL to compare..."
                                                    className="block w-full pl-12 pr-4 py-4 bg-[#FFFFFF] border border-[#0A2E22]/10 rounded-xl text-[#0A2E22] placeholder-[#0A2E22]/60 focus:ring-2 focus:ring-[#045C4E]/20 focus:border-[#045C4E] transition-all outline-none"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center gap-4">
                                        <button
                                            type="submit"
                                            className="flex-grow bg-[#045C4E] text-white py-4 px-6 rounded-xl font-bold hover:bg-[#03483D] transition-all shadow-lg shadow-[#045C4E]/20 flex items-center justify-center gap-2 group"
                                        >
                                            {analyzing ? (
                                                <>Analyzing<span className="animate-pulse">...</span></>
                                            ) : (
                                                <>{activeTab === 'compare' ? 'Compare URLs' : 'Analyze'} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                                            )}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleClear}
                                            className="px-6 py-4 rounded-xl border border-[#0A2E22]/10 text-[#0A2E22]/60 font-bold hover:bg-[#F5FFEF] hover:text-[#0A2E22] transition-colors flex items-center gap-2"
                                        >
                                            <RotateCcw className="w-4 h-4" /> Clear
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* 2. Link Analysis Cards (Understanding Website Link Count) */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#0A2E22] mb-6 flex items-center gap-2">
                                <BarChart3 className="w-6 h-6 text-[#045C4E]" />
                                Understanding Website Link Count
                            </h2>
                            <p className="text-[#0A2E22]/70 mb-8 max-w-2xl">
                                Link counts show total internal and external links on a page. Understanding these metrics is key to a healthy site structure.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Card 1: Good */}
                                <div className="p-6 bg-white rounded-2xl border border-[#0A2E22]/5 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-green-500/10 rounded-full blur-xl group-hover:scale-110 transition-transform" />

                                    <div className="flex items-center gap-2 mb-3 text-green-700 font-bold text-sm uppercase tracking-wider">
                                        <CheckCircle className="w-4 h-4" /> Good
                                    </div>
                                    <h3 className="text-lg font-bold text-[#0A2E22] mb-2">Total Links</h3>
                                    <p className="text-sm text-[#0A2E22]/60">
                                        Shows total links found on a page including internal and external.
                                    </p>
                                </div>

                                {/* Card 2: Warning */}
                                <div className="p-6 bg-white rounded-2xl border border-[#0A2E22]/5 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>
                                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl group-hover:scale-110 transition-transform" />

                                    <div className="flex items-center gap-2 mb-3 text-yellow-700 font-bold text-sm uppercase tracking-wider">
                                        <AlertTriangle className="w-4 h-4" /> Warning
                                    </div>
                                    <h3 className="text-lg font-bold text-[#0A2E22] mb-2">Link Type</h3>
                                    <p className="text-sm text-[#0A2E22]/60">
                                        Separates internal and external links for clear site structure review.
                                    </p>
                                </div>

                                {/* Card 3: Critical */}
                                <div className="p-6 bg-white rounded-2xl border border-[#0A2E22]/5 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-red-500/10 rounded-full blur-xl group-hover:scale-110 transition-transform" />

                                    <div className="flex items-center gap-2 mb-3 text-red-700 font-bold text-sm uppercase tracking-wider">
                                        <AlertCircle className="w-4 h-4" /> Critical
                                    </div>
                                    <h3 className="text-lg font-bold text-[#0A2E22] mb-2">Unique Links</h3>
                                    <p className="text-sm text-[#0A2E22]/60">
                                        Counts unique links to help reduce duplicates and improve crawling.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 3. About Section */}
                        <section className="bg-white rounded-3xl p-8 md:p-12 border border-[#0A2E22]/5 shadow-sm">
                            <h2 className="text-2xl font-bold text-[#0A2E22] mb-6">About This Tool</h2>
                            <div className="prose prose-lg text-[#0A2E22]/70 max-w-none">
                                <h3 className="text-xl font-bold text-[#0A2E22] mb-3">Count Website Links Easily</h3>
                                <p className="mb-4">
                                    Our link counter helps you quickly and clearly count links on any webpage. This counter link tool shows total internal and external link counts in one place.
                                </p>
                                <p>
                                    Use this link counts tool to review page structure, manage internal links, and improve website navigation using simple and easy-to-read data.
                                </p>
                            </div>
                        </section>

                        {/* 4. Benefits Section (Grid) */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#0A2E22] mb-8">Why It Matters</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        id: 1,
                                        title: "SEO Planning",
                                        desc: "Helps understand internal and external link counts for SEO planning. Supports site audits by identifying excessive or missing page links."
                                    },
                                    {
                                        id: 2,
                                        title: "Improve Crawl Flow",
                                        desc: "Improves crawl flow using clear link counts and structure data. Assists content optimization through proper internal linking analysis."
                                    },
                                    {
                                        id: 3,
                                        title: "Site Audits",
                                        desc: "Supports site audits by identifying excessive or missing page links. Track improvements and maintain consistency in your strategy."
                                    },
                                    {
                                        id: 4,
                                        title: "Content Optimization",
                                        desc: "Assists content optimization through proper internal linking analysis. Monitor changes over time to ensure SEO health."
                                    }
                                ].map((item) => (
                                    <div key={item.id} className="flex gap-4 p-6 bg-white rounded-2xl border border-[#0A2E22]/5 hover:border-[#E1F28F] transition-colors group">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F5FFEF] border border-[#E1F28F]/30 flex items-center justify-center text-[#045C4E] font-bold text-lg group-hover:bg-[#045C4E] group-hover:text-[#E1F28F] transition-colors">
                                            {item.id}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0A2E22] mb-2">{item.title}</h3>
                                            <p className="text-sm text-[#0A2E22]/60 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 5. How To Improve Section */}
                        <section className="bg-[#0A2E22] text-[#F5FFEF] rounded-3xl p-8 md:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E1F28F]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <h2 className="text-2xl font-bold mb-8 relative z-10">Improve SEO Using Link Counter</h2>

                            <div className="space-y-8 relative z-10">
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E1F28F]/20 border border-[#E1F28F]/30 flex items-center justify-center text-[#E1F28F] font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Enter Page URL</h3>
                                        <p className="text-white/60">Enter your page URL to start counting links using the link counter tool online easily.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E1F28F]/20 border border-[#E1F28F]/30 flex items-center justify-center text-[#E1F28F] font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Review Link Data</h3>
                                        <p className="text-white/60">Review internal and external counter link results to understand page structure clearly for SEO improvement.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E1F28F]/20 border border-[#E1F28F]/30 flex items-center justify-center text-[#E1F28F] font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">Optimize Link Structure</h3>
                                        <p className="text-white/60">Use link counts data to fix broken links and improve internal linking for better crawling.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 6. FAQ Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#0A2E22] mb-8 flex items-center gap-2">
                                <HelpCircle className="w-6 h-6 text-[#045C4E]" />
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl border border-[#0A2E22]/5 overflow-hidden transition-all duration-300 hover:shadow-md"
                                    >
                                        <button
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                            className="w-full flex items-center justify-between p-6 text-left"
                                        >
                                            <span className="font-bold text-[#0A2E22] pr-8">{faq.question}</span>
                                            {openFaq === index ? (
                                                <ChevronUp className="w-5 h-5 text-[#045C4E]" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-[#0A2E22]/40" />
                                            )}
                                        </button>
                                        <div
                                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                }`}
                                        >
                                            <div className="p-6 pt-0 text-[#0A2E22]/70 leading-relaxed border-t border-[#0A2E22]/5">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* --- Right Column: Sidebar & Sticky Promo --- */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* 1. Recommended Tools */}
                        <div className="bg-white rounded-3xl p-6 border border-[#0A2E22]/5 shadow-sm">
                            <h3 className="text-lg font-bold text-[#0A2E22] mb-6 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-[#045C4E]" />
                                Recommended Tools
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { name: "Keyword Density Checker", icon: <BarChart3 className="w-4 h-4" /> },
                                    { name: "Readability Checker", icon: <FileText className="w-4 h-4" /> },
                                    { name: "AI Content Detector", icon: <Shield className="w-4 h-4" /> },
                                    { name: "Bulk URL Opener", icon: <ExternalLink className="w-4 h-4" /> }
                                ].map((tool, i) => (
                                    <a key={i} href="#" className="flex items-center justify-between p-4 rounded-xl hover:bg-[#F5FFEF] group transition-colors border border-transparent hover:border-[#0A2E22]/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#F5FFEF] text-[#045C4E] flex items-center justify-center group-hover:bg-white border border-[#0A2E22]/5">
                                                {tool.icon}
                                            </div>
                                            <span className="text-sm font-bold text-[#0A2E22] group-hover:text-[#045C4E] transition-colors">{tool.name}</span>
                                        </div>
                                        <div className="text-xs font-bold text-[#045C4E] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                                            Try
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* 2. Sticky Pro Promo */}
                        <div className="sticky top-32">
                            <div className="bg-[#0A2E22] text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                                {/* Background fx */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E1F28F]/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

                                <div className="relative z-10">
                                    <div className="inline-block px-3 py-1 rounded-full bg-[#E1F28F]/20 text-[#E1F28F] text-[10px] font-bold uppercase tracking-wider mb-4 border border-[#E1F28F]/20">
                                        Dofollo Pro
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">
                                        Automate Your Internal Linking
                                    </h3>
                                    <p className="text-white/60 text-sm mb-6 leading-relaxed">
                                        Stop counting links manually. Dofollo's AI automatically analyzes your entire site structure and suggests perfect internal links.
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        {[
                                            "One-click link insertion",
                                            "Keyword opportunity scanning",
                                            "Traffic tracking dashboard"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                                                <CheckCircle className="w-4 h-4 text-[#E1F28F]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="w-full bg-[#E1F28F] text-[#0A2E22] py-3 rounded-xl font-bold hover:bg-white transition-colors shadow-[0_0_20px_-5px_#E1F28F]">
                                        Start Free Trial
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
