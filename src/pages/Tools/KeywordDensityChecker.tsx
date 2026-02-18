import React, { useState } from 'react';
import { Search, Link as LinkIcon, CheckCircle, HelpCircle, ArrowRight, Shield, Globe, FileText, ChevronDown, ChevronUp, RotateCcw, BarChart3, AlertTriangle, AlertCircle, Sparkles, Layout, Zap, Lock, Eye, Activity, Hash, Globe2, ChevronRight } from 'lucide-react';
import Footer from '../../components/Footer';
import CompactHero from '../../components/CompactHero';
import toolData from '../../data/tools/keyword-density-checker.json';
import SEO from '../../components/SEO';
import seoData from '../../data/seo.json';

export default function KeywordDensityChecker() {
    const { hero, input_section, analysis_cards, about_section, benefits, improve_section, faq_section, sidebar } = toolData;
    const [url, setUrl] = useState("");
    const [analyzing, setAnalyzing] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    // Placeholder function for analysis
    const handleAnalyze = (e: React.FormEvent) => {
        e.preventDefault();
        setAnalyzing(true);
        // Simulate API call
        setTimeout(() => setAnalyzing(false), 2000);
    };

    const handleClear = () => {
        setUrl("");
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-[#0A2E22]">
            <SEO {...seoData.tools['keyword-density']} />

            {/* --- Hero Section --- */}
            <CompactHero
                badge={hero.badge}
                title={hero.title}
                description={hero.description}
            />

            {/* --- Main Content Area --- */}
            <main className="flex-grow container max-w-7xl mx-auto px-6 mt-10 relative z-20 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Column: Tool & Content */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* 1. Main Tool Interface - Confident Premium SaaS Architecture */}
                        <div className="bg-white rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] border border-[#0A2E22]/10 ring-1 ring-black/5 overflow-hidden relative group/container isolate">

                            {/* Texture/Depth Layer */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(225,242,143,0.15),transparent_70%)] pointer-events-none" />

                            <div className="p-8 md:p-12 relative z-10 bg-white">
                                <form onSubmit={handleAnalyze} className="space-y-10">
                                    <div className="space-y-6 animate-fade-in-up [animation-fill-mode:both]">
                                        <div className="flex items-center justify-between px-1">
                                            <label className="text-xs font-extrabold text-[#0A2E22]/90 uppercase tracking-widest">{input_section.label}</label>
                                        </div>
                                        <div className="relative group">
                                            {/* Premium Input Architecture */}
                                            <div className="relative transition-all duration-200 transform rounded-2xl bg-white shadow-sm border border-[#0A2E22]/10 group-hover:border-[#0A2E22]/20 group-focus-within:border-[#045C4E] group-focus-within:ring-4 group-focus-within:ring-[#045C4E]/10 group-focus-within:-translate-y-0.5 group-focus-within:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)]">
                                                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                    <div className="pr-4 border-r border-[#0A2E22]/10 py-1">
                                                        <Globe className="h-5 w-5 text-[#0A2E22]/40 group-focus-within:text-[#045C4E] transition-colors duration-200" />
                                                    </div>
                                                </div>
                                                <input
                                                    type="url"
                                                    value={url}
                                                    onChange={(e) => setUrl(e.target.value)}
                                                    placeholder={input_section.placeholder}
                                                    className="block w-full pl-24 pr-32 h-[4.5rem] bg-transparent rounded-2xl text-lg font-medium text-[#0A2E22] placeholder-[#0A2E22]/30 focus:outline-none transition-all"
                                                    required
                                                />

                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between px-1.5 pt-2">
                                            <p className="text-xs font-semibold text-[#0A2E22]/50 flex items-center gap-1.5">
                                                <Shield className="w-3.5 h-3.5 text-[#045C4E]" /> {input_section.security_note}
                                            </p>

                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-center gap-6 pt-2 animate-fade-in-up [animation-delay:150ms] [animation-fill-mode:both]">
                                        <button
                                            type="submit"
                                            className="w-full md:flex-[2] py-4 px-8 bg-[#0A2E22] text-white rounded-2xl font-bold text-lg hover:bg-[#045C4E] shadow-[0_15px_40px_-10px_rgba(10,46,34,0.4)] hover:shadow-[0_20px_50px_-12px_rgba(10,46,34,0.5)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 group relative overflow-hidden ring-offset-2 ring-2 ring-transparent focus:ring-[#045C4E]"
                                        >
                                            {/* Layered Shadow Depth inside button */}
                                            <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1)] rounded-2xl pointer-events-none" />

                                            {/* Shine Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine" />

                                            {analyzing ? (
                                                <span className="relative z-10 flex items-center gap-2">Processing<span className="animate-pulse">...</span></span>
                                            ) : (
                                                <span className="relative z-10 flex items-center gap-2">
                                                    {input_section.button_label}
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#E1F28F]" />
                                                </span>
                                            )}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleClear}
                                            className="w-full md:flex-1 py-3 px-6 rounded-2xl text-[#0A2E22]/40 font-bold hover:text-[#0A2E22] transition-colors flex items-center justify-center gap-2 text-sm md:text-base hover:bg-transparent"
                                        >
                                            <RotateCcw className="w-4 h-4" /> {input_section.clear_label}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* 2. Content Analysis Cards */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#0A2E22] mb-6 flex items-center gap-2">
                                <BarChart3 className="w-6 h-6 text-[#045C4E]" />
                                {analysis_cards.title}
                            </h2>
                            <p className="text-[#0A2E22]/70 mb-8 max-w-2xl leading-relaxed">
                                {analysis_cards.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {analysis_cards.cards.map((card, index) => {
                                    // Determine styles based on card type
                                    let borderColor = "border-[#0A2E22]/5";
                                    let iconColor = "text-[#0A2E22]";
                                    let bgColor = "bg-[#0A2E22]/5";
                                    let Icon = CheckCircle;
                                    let gradientFrom = "from-emerald-500";
                                    let gradientTo = "to-emerald-300";
                                    let glowColor = "bg-emerald-500/10";
                                    let textColor = "text-emerald-700";
                                    let badgeBg = "bg-emerald-50";

                                    if (card.type === "warning") {
                                        Icon = AlertTriangle;
                                        gradientFrom = "from-amber-500";
                                        gradientTo = "to-amber-300";
                                        glowColor = "bg-amber-500/10";
                                        textColor = "text-amber-700";
                                        badgeBg = "bg-amber-50";
                                    } else if (card.type === "critical") {
                                        Icon = AlertCircle;
                                        gradientFrom = "from-rose-500";
                                        gradientTo = "to-rose-300";
                                        glowColor = "bg-rose-500/10";
                                        textColor = "text-rose-700";
                                        badgeBg = "bg-rose-50";
                                    }

                                    return (
                                        <div key={index} className={`p-8 bg-white rounded-3xl border ${borderColor} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group`}>
                                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradientFrom} ${gradientTo}`}></div>
                                            <div className={`absolute -right-12 -top-12 w-32 h-32 ${glowColor} rounded-full blur-2xl group-hover:bg-opacity-50 transition-all duration-500`} />

                                            <div className={`flex items-center gap-2 mb-4 ${textColor} font-bold text-xs uppercase tracking-widest ${badgeBg} inline-block px-2 py-1 rounded`}>
                                                <Icon className="w-3 h-3" /> {card.type === "good" ? "Good" : card.type === "warning" ? "Warning" : "Critical"}
                                            </div>
                                            <h3 className="text-xl font-extrabold text-[#0A2E22] mb-3">{card.title}</h3>
                                            <p className="text-sm text-[#0A2E22]/60 leading-relaxed font-medium">
                                                {card.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* 3. About Section */}
                        <section className="bg-white rounded-3xl p-8 md:p-12 border border-[#0A2E22]/5 shadow-sm">
                            <h2 className="text-2xl font-bold text-[#0A2E22] mb-6">{about_section.title}</h2>
                            <div className="prose prose-lg text-[#0A2E22]/70 max-w-none">
                                {about_section.content.map((paragraph, index) => (
                                    <React.Fragment key={index}>
                                        {paragraph.subtitle && <h3 className="text-xl font-bold text-[#0A2E22] mb-3">{paragraph.subtitle}</h3>}
                                        <p className="mb-4">{paragraph.text}</p>
                                    </React.Fragment>
                                ))}
                            </div>
                        </section>

                        {/* 4. Benefits Section (Grid) */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#0A2E22] mb-8">{benefits.title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {benefits.items.map((item) => (
                                    <div key={item.id} className="flex gap-4 p-6 bg-white rounded-3xl border border-[#0A2E22]/5 hover:border-[#E1F28F] transition-colors group">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-[#0A2E22]/5 border border-[#E1F28F]/30 flex items-center justify-center text-[#045C4E] font-bold text-lg group-hover:bg-[#045C4E] group-hover:text-[#E1F28F] transition-colors">
                                            {item.id}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0A2E22] mb-2">{item.title}</h3>
                                            <p className="text-sm text-[#0A2E22]/60 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 5. How To Improve Section */}
                        <section className="bg-[#0A2E22] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E1F28F]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <h2 className="text-2xl font-bold mb-8 relative z-10">{improve_section.title}</h2>

                            <div className="space-y-8 relative z-10">
                                {improve_section.steps.map((step) => (
                                    <div key={step.num} className="flex gap-6 group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E1F28F]/10 border border-[#E1F28F]/20 flex items-center justify-center text-[#E1F28F] font-bold group-hover:bg-[#E1F28F] group-hover:text-[#0A2E22] transition-colors duration-300">
                                            {step.num}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                            <p className="text-white/60 leading-relaxed max-w-2xl">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 6. FAQ Section */}
                        <section>
                            <h2 className="text-2xl font-bold text-[#0A2E22] mb-8 flex items-center gap-2">
                                <HelpCircle className="w-6 h-6 text-[#045C4E]" />
                                {faq_section.title}
                            </h2>
                            <div className="space-y-4">
                                {faq_section.items.map((faq, index) => (
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

                    {/* Right Column: Sidebar & Sticky Promo */}
                    <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-24 self-start">
                        <div className="bg-white rounded-3xl p-6 border border-[#0A2E22]/5 shadow-sm">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="p-2 bg-[#F8FAFC] rounded-xl border border-[#0A2E22]/5 text-[#045C4E]">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-[#0A2E22]">{sidebar.recommended_tools.title}</h3>
                            </div>

                            <div className="space-y-3">
                                {sidebar.recommended_tools.items.map((tool, i) => (
                                    <a key={i} href={tool.link} className="flex items-center gap-3.5 p-3.5 bg-[#F8FAFC] rounded-2xl border border-[#0A2E22]/5 hover:border-[#045C4E]/20 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                                        <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#0A2E22]/60 group-hover:bg-[#045C4E] group-hover:text-[#E1F28F] transition-all">
                                            {/* Ideally dynamic icons, but hardcoded for now or use a mapper */}
                                            {tool.icon === "LinkIcon" && <LinkIcon className="w-4 h-4" />}
                                            {tool.icon === "FileText" && <FileText className="w-4 h-4" />}
                                            {tool.icon === "Shield" && <Shield className="w-4 h-4" />}
                                            {/* Default icon */}
                                            {!["LinkIcon", "FileText", "Shield"].includes(tool.icon) && <LinkIcon className="w-4 h-4" />}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-[#0A2E22] text-sm group-hover:text-[#045C4E] transition-colors">{tool.name}</h4>
                                            <p className="text-[11px] text-[#0A2E22]/50">{tool.description}</p>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-[#0A2E22]/30 group-hover:text-[#045C4E] group-hover:translate-x-1 transition-all" />
                                    </a>
                                ))}
                            </div>

                            <button className="w-full mt-5 py-3.5 bg-[#F8FAFC] border border-[#0A2E22]/5 rounded-2xl text-sm font-bold text-[#0A2E22] hover:bg-[#0A2E22] hover:text-white transition-all">
                                {sidebar.recommended_tools.view_all_label}
                            </button>
                        </div>

                        {/* Ad or Promo Space */}
                        <div className="bg-[#0A2E22] rounded-3xl p-6 text-white relative overflow-hidden shadow-xl">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E1F28F]/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#045C4E] rounded-full blur-2xl -ml-5 -mb-5"></div>

                            <div className="relative z-10">
                                <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#E1F28F]/20 border border-[#E1F28F]/20 text-[#E1F28F] text-[10px] font-bold mb-3">
                                    {sidebar.promo.badge}
                                </div>
                                <h3 className="text-lg font-bold mb-1.5">{sidebar.promo.title}</h3>
                                <p className="text-white/70 text-xs mb-5 leading-relaxed">{sidebar.promo.description}</p>
                                <button className="w-full py-3 bg-[#E1F28F] text-[#0A2E22] rounded-xl font-bold text-sm hover:bg-white transition-all shadow-lg hover:shadow-xl">
                                    {sidebar.promo.button_label}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
