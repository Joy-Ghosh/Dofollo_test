import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Wrench, BarChart3, Globe, AlignLeft, ExternalLink, Sparkles, Zap, Lock, Eye, FileText, Link as LinkIcon, Hash, Shield, Globe2, Activity } from 'lucide-react';
import Footer from '../components/Footer';

interface Tool {
    name: string;
    description: string;
    icon: React.ReactNode;
    badge?: string;
    link: string;
}

interface ToolCategory {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
}

const categories: ToolCategory[] = [
    {
        title: "SEO Tools",
        icon: <Search className="w-5 h-5 text-[#045C4E]" />,
        tools: [
            {
                name: "Link Counter",
                description: "Count internal, external, and dofollow/nofollow links on any webpage instantly.",
                icon: <LinkIcon className="w-5 h-5" />,
                badge: "Popular",
                link: "/tools/link-counter"
            },
            {
                name: "Keyword Density",
                description: "Analyze keyword frequency and optimize your content for better ranking.",
                icon: <Hash className="w-5 h-5" />,
                link: "#"
            },
            {
                name: "Domain Authority",
                description: "Check the strength and authority score of any domain name.",
                icon: <Shield className="w-5 h-5" />,
                link: "#"
            },
            {
                name: "AI Content Detector",
                description: "Detect if content was written by AI models like GPT-4 or Claude.",
                icon: <Sparkles className="w-5 h-5" />,
                badge: "New",
                link: "#"
            },
            {
                name: "Plagiarism Checker",
                description: "Ensure your content is original and free from duplicate text issues.",
                icon: <FileText className="w-5 h-5" />,
                link: "#"
            }
        ]
    },
    {
        title: "Analytics Tools",
        icon: <BarChart3 className="w-5 h-5 text-[#045C4E]" />,
        tools: [
            {
                name: "SEO ROI Calculator",
                description: "Estimate the potential return on investment for your SEO campaigns.",
                icon: <Activity className="w-5 h-5" />,
                link: "#"
            },
            {
                name: "Enterprise ROI",
                description: "Calculate complex SEO value for large-scale enterprise websites.",
                icon: <BarChart3 className="w-5 h-5" />,
                link: "#"
            },
            {
                name: "Conversion Rate",
                description: "Calculate your website's visitor-to-lead conversion percentages.",
                icon: <Zap className="w-5 h-5" />,
                link: "#"
            },
            {
                name: "Password Generator",
                description: "Create strong, secure passwords for your digital accounts.",
                icon: <Lock className="w-5 h-5" />,
                link: "#"
            }
        ]
    },
    {
        title: "IP Intelligence",
        icon: <Globe className="w-5 h-5 text-[#045C4E]" />,
        tools: [
            {
                name: "DNS Lookup",
                description: "Fetch DNS records including A, AAAA, MX, NS, and SOA.",
                icon: <Globe2 className="w-5 h-5" />,
                link: "#"
            },
            {
                name: "CNAME Lookup",
                description: "Verify Canonical Name records for your subdomains.",
                icon: <Search className="w-5 h-5" />,
                link: "#"
            },
            {
                name: "MX Lookup",
                description: "Check Mail Exchange records to troubleshoot email delivery.",
                icon: <FileText className="w-5 h-5" />,
                link: "#"
            },
            {
                name: "SPF Record",
                description: "Validate Sender Policy Framework records for email security.",
                icon: <Shield className="w-5 h-5" />,
                link: "#"
            },
            {
                name: "NS Lookup",
                description: "Identify the authoritative Name Servers for any domain.",
                icon: <Globe className="w-5 h-5" />,
                link: "#"
            },
            {
                name: "TXT Record",
                description: "View TXT records used for verification and security protocols.",
                icon: <FileText className="w-5 h-5" />,
                link: "#"
            }
        ]
    },
    {
        title: "Readability Tools",
        icon: <AlignLeft className="w-5 h-5 text-[#045C4E]" />,
        tools: [
            {
                name: "Readability Checker",
                description: "Score your text's readability based on multiple proven algorithms.",
                icon: <Eye className="w-5 h-5" />,
                link: "#"
            },
            {
                name: "Flesch Reading Ease",
                description: "Determine how easy it is to understand your english text.",
                icon: <FileText className="w-5 h-5" />,
                link: "#"
            },
            {
                name: "Gunning Fog Index",
                description: "Estimate the years of formal education needed to understand text.",
                icon: <AlignLeft className="w-5 h-5" />,
                link: "#"
            },
            {
                name: "SMOG Index",
                description: "Measure readability specifically for medical and technical writing.",
                icon: <Activity className="w-5 h-5" />,
                link: "#"
            }
        ]
    },
    {
        title: "More Tools",
        icon: <Wrench className="w-5 h-5 text-[#045C4E]" />,
        tools: [
            {
                name: "SSL Checker",
                description: "Verify SSL certificate validity and expiration dates.",
                icon: <Lock className="w-5 h-5" />,
                link: "#"
            },
            {
                name: "IP Lookup",
                description: "Find details about any IP address including location and ISP.",
                icon: <Globe className="w-5 h-5" />,
                link: "#"
            },
            {
                name: "IP Geolocation",
                description: "Pinpoint the geographical location of an IP address.",
                icon: <Globe2 className="w-5 h-5" />,
                link: "#"
            }
        ]
    }
];

export default function Tools() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCategories = categories.map(category => ({
        ...category,
        tools: category.tools.filter(tool =>
            tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tool.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.tools.length > 0);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 180;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const [scrolled, setScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#F5FFEF] flex flex-col text-[#0A2E22]">

            {/* Light Mode Hero */}
            <section className="pt-32 pb-32 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[#F5FFEF] pointer-events-none [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
                    <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#E1F28F]/40 blur-[120px]" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#045C4E]/5 blur-[100px]" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(10,46,34,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,46,34,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F28F]/20 border border-[#E1F28F] text-[#045C4E] text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#045C4E] animate-pulse"></span>
                        Free Tools Directory
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-[#0A2E22]">
                        Powerful Tools for <br />
                        <span className="text-[#045C4E] relative inline-block">
                            SEO & Growth
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#E1F28F] opacity-60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#0A2E22]/70 max-w-2xl mx-auto leading-relaxed">
                        A comprehensive collection of free SEO, analytics, and intelligence tools to help you optimize your digital presence.
                    </p>
                </div>
            </section>

            {/* Sticky Quick Nav & Search Container */}
            <div className={`sticky top-28 z-30 transition-all duration-300 -mt-24 ${scrolled
                ? "bg-[#F5FFEF]/90 backdrop-blur-xl border-b border-[#0A2E22]/5 shadow-sm py-2"
                : "bg-transparent border-transparent py-4"
                }`}>
                <div className="max-w-7xl mx-auto px-6">

                    {/* Search Bar */}
                    <div className="max-w-3xl mx-auto mb-6 transition-all duration-300">
                        <div className={`relative group transition-all duration-300 ${scrolled ? "scale-95" : "scale-100"}`}>
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A2E22]/40 group-focus-within:text-[#045C4E] transition-colors" />
                            <input
                                type="text"
                                placeholder="Search for a tool..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white border border-[#0A2E22]/10 rounded-xl py-4 pl-12 pr-6 text-[#0A2E22] placeholder:text-[#0A2E22]/40 focus:outline-none focus:ring-2 focus:ring-[#045C4E]/20 focus:border-[#045C4E]/30 transition-all shadow-lg hover:shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Quick Nav */}
                    <div className={`flex items-center justify-center overflow-x-auto no-scrollbar transition-all duration-300 ${scrolled ? "border-[#0A2E22]/5 pb-2" : "border-transparent pb-0"
                        }`}>
                        <div className="flex items-center gap-2 md:gap-6 min-w-max px-4">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(category.title.toLowerCase().replace(/\s+/g, '-'))}
                                    className={`text-sm font-bold transition-all whitespace-nowrap px-4 py-2 rounded-full ${scrolled
                                        ? "text-[#0A2E22]/60 hover:text-[#045C4E] hover:bg-[#E1F28F]/20"
                                        : "bg-white/50 text-[#0A2E22]/80 hover:bg-white hover:text-[#045C4E] shadow-sm border border-[#0A2E22]/5 backdrop-blur-sm"
                                        }`}
                                >
                                    {category.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full">
                {filteredCategories.length > 0 ? (
                    <div className="space-y-20">
                        {filteredCategories.map((category, index) => (
                            <section key={index} id={category.title.toLowerCase().replace(/\s+/g, '-')}>
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2 rounded-lg bg-[#E1F28F]/20 border border-[#E1F28F]/40 text-[#045C4E]">
                                        {category.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#0A2E22]">{category.title}</h2>
                                    <div className="h-[1px] flex-grow bg-gradient-to-r from-[#0A2E22]/10 to-transparent ml-4"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {category.tools.map((tool, toolIndex) => (
                                        <Link
                                            key={toolIndex}
                                            to={tool.link}
                                            className="group flex flex-col p-6 rounded-2xl bg-white border border-[#0A2E22]/5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#045C4E]/20 transition-all duration-300 relative overflow-hidden"
                                        >
                                            {/* Decorative Background Blob */}
                                            <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#E1F28F]/20 rounded-full blur-2xl group-hover:bg-[#E1F28F]/30 transition-all duration-300 opacity-0 group-hover:opacity-100" />

                                            <div className={`absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 ${tool.badge ? 'top-12' : 'top-4'}`}>
                                                <ExternalLink className="w-4 h-4 text-[#045C4E]" />
                                            </div>

                                            <div className="mb-5 relative">
                                                <div className="w-12 h-12 rounded-xl bg-[#F5FFEF] border border-[#E1F28F]/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 text-[#045C4E] shadow-sm">
                                                    {tool.icon}
                                                </div>
                                                {tool.badge && (
                                                    <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-[#E1F28F] text-[#045C4E] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[#045C4E]/10">
                                                        {tool.badge}
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className="text-lg font-bold text-[#0A2E22] mb-2 group-hover:text-[#045C4E] transition-colors">
                                                {tool.name}
                                            </h3>

                                            <p className="text-sm text-[#0A2E22]/60 mb-6 line-clamp-2 group-hover:text-[#0A2E22]/80 transition-colors">
                                                {tool.description}
                                            </p>

                                            <div className="mt-auto flex items-center text-xs font-bold text-[#045C4E] uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-all">
                                                Try Tool <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="bg-[#0A2E22]/5 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <Search className="w-8 h-8 text-[#0A2E22]/30" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0A2E22] mb-2">No tools found</h3>
                        <p className="text-[#0A2E22]/50">Try searching for something else.</p>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}
