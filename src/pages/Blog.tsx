import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Tag } from 'lucide-react';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import SEO from '../components/SEO';
import blogData from '../data/pages/blog.json';

// --- Types ---
interface Author {
    name: string;
    role: string;
    avatar_initials: string;
}

interface Post {
    id: string;
    category: string;
    category_id?: string;
    title: string;
    excerpt: string;
    author: Author;
    date: string;
    read_time: string;
    tags: string[];
    gradient?: string;
    image?: string;
}

// --- Components ---

function CategoryBadge({ category }: { category: string }) {
    return (
        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-[#0A2E22] backdrop-blur-md shadow-[0_4px_10px_-2px_rgba(0,0,0,0.2)] tracking-wide border border-white/20">
            {category}
        </span>
    );
}

function BlogPostCard({ post, variant = 'standard' }: { post: Post; variant?: 'standard' | 'landscape' | 'compact' }) {
    if (variant === 'compact') {
        return (
            <Link to={`/blog/${post.id}`} className="group flex gap-5 items-start p-3 rounded-2xl hover:bg-[#0A2E22]/5 transition-all duration-300">
                <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0 relative shadow-sm">
                    {post.image ? (
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${post.gradient || 'from-[#0A2E22] to-[#045C4E]'}`} />
                    )}
                </div>
                <div className="flex-1 min-w-0 py-2">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-[#045C4E]">{post.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0A2E22] leading-snug mb-2 group-hover:text-[#045C4E] transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="text-xs text-[#0A2E22]/60 line-clamp-1">{post.excerpt}</p>
                </div>
            </Link>
        );
    }

    return (
        <Link to={`/blog/${post.id}`} className="group h-full flex flex-col bg-white rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_-15px_rgba(10,46,34,0.15)] transition-all duration-500 border border-[#0A2E22]/10 hover:-translate-y-1">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#0A2E22]/5">
                {post.image ? (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${post.gradient || 'from-[#0A2E22] to-[#045C4E]'}`} />
                )}
                <div className="absolute top-5 left-5 z-10 transition-transform duration-500 group-hover:-translate-y-1">
                    <CategoryBadge category={post.category} />
                </div>
            </div>
            <div className="flex-1 p-6 sm:p-8 flex flex-col">
                <h3 className="text-xl font-bold text-[#0A2E22] leading-snug mb-3 group-hover:text-[#045C4E] transition-colors line-clamp-2">
                    {post.title}
                </h3>
                <p className="text-[#0A2E22]/60 leading-relaxed line-clamp-2 mb-6 flex-1 text-sm">
                    {post.excerpt}
                </p>
                <div className="mt-auto pt-5 border-t border-[#0A2E22]/10 flex items-center justify-between text-xs font-semibold">
                    <span className="flex items-center gap-1.5 text-[#0A2E22]/50">{post.date}</span>
                    <span className="px-3 py-1.5 rounded-full bg-[#E1F28F]/20 text-[#045C4E] group-hover:bg-[#E1F28F] transition-colors duration-300">{post.read_time}</span>
                </div>
            </div>
        </Link>
    );
}

function PopularFeaturedCard({ post }: { post: Post }) {
    return (
        <Link to={`/blog/${post.id}`} className="group relative block w-full h-full min-h-[450px] rounded-3xl overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(10,46,34,0.3)] transition-all duration-500 hover:-translate-y-2 border border-black/5">
            {post.image ? (
                <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
            ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient || 'from-[#0A2E22] to-black'}`} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

            <div className="absolute top-6 left-6 z-10 transition-transform duration-500 group-hover:translate-x-1">
                <CategoryBadge category={post.category} />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5 group-hover:text-[#E1F28F] transition-colors drop-shadow-md">
                    {post.title}
                </h3>
                <div className="flex items-center gap-4 text-white/90 text-sm font-medium">
                    <span className="flex items-center gap-2 hover:text-white transition-colors">
                        <div className="w-8 h-8 rounded-full bg-[#E1F28F] text-[#0A2E22] flex items-center justify-center text-xs font-bold border-2 border-white/20">
                            {post.author.avatar_initials}
                        </div>
                        {post.author.name}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/40"></span>
                    <span className="text-white/70">{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-white/40"></span>
                    <span className="text-[#E1F28F]">{post.read_time}</span>
                </div>
            </div>
        </Link>
    );
}


// --- Main Page ---

export default function Blog() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    // Build a deduplicated flat list of all posts (featured first, no duplicate IDs)
    const allPosts = useMemo(() => {
        const seen = new Set<string>();
        const result: any[] = [];
        const candidates = [
            ...(blogData.featured_post ? [blogData.featured_post] : []),
            ...(blogData.posts || []),
        ];
        for (const p of candidates) {
            if (!seen.has(p.id)) {
                seen.add(p.id);
                result.push(p);
            }
        }
        return result;
    }, []);

    // Filtering logic — runs whenever search or category changes
    const isFiltering = activeCategory !== 'all' || searchQuery.trim() !== '';

    const filteredPosts = useMemo(() => {
        return allPosts.filter((post) => {
            const matchesCategory =
                activeCategory === 'all' || post.category_id === activeCategory;
            const q = searchQuery.toLowerCase().trim();
            const matchesSearch =
                q === '' ||
                post.title.toLowerCase().includes(q) ||
                post.excerpt.toLowerCase().includes(q) ||
                (post.category || '').toLowerCase().includes(q);
            return matchesCategory && matchesSearch;
        });
    }, [allPosts, activeCategory, searchQuery]);

    // Default layout slices (used only when not filtering)
    const featuredPost = allPosts[0];
    const popularPosts = allPosts.slice(1, 4);
    const latestPosts = allPosts.slice(4);

    const categories = blogData.categories || [];

    return (
        <div className="min-h-screen bg-white font-sans text-[#0A2E22]">
            <SEO
                title="Blog - Dofollo | SEO & Content Strategy Insights"
                description="Expert insights on SEO, internal linking, and AI-powered content strategies — straight from the Dofollo team."
                canonical="https://dofollo.ai/blog"
            />

            {/* 1. Hero Section — matches Features page CompactHero style */}
            <section className="pt-24 md:pt-32 pb-20 relative overflow-hidden bg-[#0A2E22]">
                {/* Background Texture & Noise */}
                <div className="absolute inset-0 bg-noise opacity-50 pointer-events-none" />

                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Central Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E1F28F]/10 rounded-full blur-[120px]" />

                    {/* Texture Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />
                </div>

                {/* Content */}
                <div className="container mx-auto relative z-10 text-center">
                    {/* Badge — same as CompactHero */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E1F28F]/10 border border-[#E1F28F]/20 text-[#E1F28F] text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_10px_-5px_#E1F28F]">
                        <span className="w-2 h-2 rounded-full bg-[#E1F28F] animate-pulse" />
                        {blogData.hero?.badge || 'Dofollo Blog'}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg">
                        {blogData.hero?.title_first || 'Browse Our'}{' '}
                        <span className="text-[#E1F28F]">{blogData.hero?.title_highlight || 'Resources'}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
                        {blogData.hero?.description || 'Expert insights on SEO, internal linking, and AI-powered content strategies — straight from the Dofollo team.'}
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                            <Search size={22} className="text-white/40" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-36 py-4 rounded-full bg-white/10 border border-white/10 shadow-inner text-base placeholder:text-white/40 text-white focus:outline-none focus:ring-2 focus:ring-[#E1F28F]/50 focus:border-[#E1F28F]/40 transition-all backdrop-blur-sm"
                        />
                        <button className="absolute right-2 top-2 bottom-2 bg-[#E1F28F] hover:bg-[#d4e67d] text-[#0A2E22] px-8 rounded-full font-bold text-sm transition-all active:scale-95 shadow-[0_0_20px_-5px_#E1F28F]">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Category Filter Bar — sticky below hero */}
            <div className="sticky top-20 md:top-24 z-40 bg-white/80 backdrop-blur-xl border-b border-[#0A2E22]/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] transition-all duration-300">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex items-center gap-3 py-4 overflow-x-auto no-scrollbar mask-fade-edges">
                        <Tag size={16} className="text-[#0A2E22]/40 flex-shrink-0 mr-1" />
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`flex-shrink-0 px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 border ${isActive
                                        ? 'bg-[#0A2E22] text-[#E1F28F] border-[#E1F28F]/30 shadow-[0_4px_15px_-4px_rgba(10,46,34,0.4)] scale-105'
                                        : 'bg-transparent text-[#0A2E22]/60 border-[#0A2E22]/10 hover:bg-[#0A2E22]/5 hover:text-[#0A2E22] hover:border-[#0A2E22]/30'
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            );
                        })}

                        {/* Clear filter shortcut */}
                        {(activeCategory !== 'all' || searchQuery) && (
                            <button
                                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                                className="flex-shrink-0 ml-auto flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-red-500 bg-red-50 hover:bg-red-500 hover:text-white transition-all duration-300 border border-red-100 hover:border-red-500 shadow-sm"
                            >
                                <X size={14} /> Clear
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {isFiltering ? (
                /* ── FILTERED RESULTS VIEW ── */
                <section className="py-16 bg-[#f8faf8] min-h-[60vh]">
                    <div className="container mx-auto max-w-7xl">
                        {/* Results header */}
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Search Results</p>
                                <h2 className="text-2xl font-extrabold text-[#0A2E22]">
                                    {filteredPosts.length > 0
                                        ? <>{filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                                            {activeCategory !== 'all' && (
                                                <span className="ml-2 text-base font-semibold text-[#045C4E]">
                                                    in &ldquo;{categories.find(c => c.id === activeCategory)?.label}&rdquo;
                                                </span>
                                            )}
                                        </>
                                        : 'No articles found'
                                    }
                                </h2>
                            </div>
                        </div>

                        {filteredPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                                {filteredPosts.map((post) => (
                                    <BlogPostCard key={post.id} post={post as Post} />
                                ))}
                            </div>
                        ) : (
                            /* Empty state */
                            <div className="flex flex-col items-center justify-center py-24 text-center">
                                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
                                    <Search size={28} className="text-gray-300" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0A2E22] mb-2">No results found</h3>
                                <p className="text-gray-400 text-sm max-w-xs mb-6">
                                    Try a different keyword or browse a different category.
                                </p>
                                <button
                                    onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                                    className="px-6 py-2.5 bg-[#0A2E22] text-[#E1F28F] rounded-full text-sm font-bold hover:bg-[#045C4E] transition-colors"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            ) : (
                /* ── DEFAULT LAYOUT (no filter active) ── */
                <>
                    {/* Popular Articles Section */}
                    <section className="py-24 container mx-auto max-w-7xl">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-[#0A2E22]/10 pb-8">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2E22]/5 border border-[#0A2E22]/10 text-[#045C4E] font-bold text-[10px] uppercase tracking-widest mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#E1F28F]" />
                                    Our Content
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2E22] tracking-tight">Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#045C4E] to-[#39BD83]">Articles</span></h2>
                            </div>
                            <div className="text-left sm:text-right max-w-xs">
                                <p className="text-sm text-[#0A2E22]/60 leading-relaxed font-medium">
                                    Discover the most read articles from the Dofollo community.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            <div className="lg:col-span-7 h-full min-h-[500px]">
                                {featuredPost && <PopularFeaturedCard post={featuredPost as Post} />}
                            </div>
                            <div className="lg:col-span-5 flex flex-col gap-6">
                                {popularPosts.map((post) => (
                                    <BlogPostCard key={post.id} post={post as Post} variant="compact" />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Latest Section */}
                    <section className="py-24 bg-gradient-to-b from-[#f8faf8] to-white">
                        <div className="container mx-auto max-w-7xl">
                            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-[#0A2E22]/10 pb-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2E22]/5 border border-[#0A2E22]/10 text-[#045C4E] font-bold text-[10px] uppercase tracking-widest mb-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#39BD83]" />
                                        New Releases
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A2E22] tracking-tight">Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#045C4E] to-[#39BD83]">Insights</span></h2>
                                </div>
                                <div className="text-left sm:text-right max-w-xs">
                                    <p className="text-sm text-[#0A2E22]/60 leading-relaxed font-medium">
                                        Stay up to date with the latest trends in SEO and content marketing.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                                {latestPosts.map((post) => (
                                    <BlogPostCard key={post.id} post={post as Post} />
                                ))}
                            </div>

                            <div className="mt-20 flex justify-center">
                                <button className="group relative flex items-center justify-center gap-3 bg-white text-[#0A2E22] px-10 h-14 rounded-full text-sm font-extrabold border-2 border-[#0A2E22]/10 hover:border-[#E1F28F] hover:bg-[#E1F28F] hover:shadow-[0_10px_20px_-5px_rgba(225,242,143,0.4)] transition-all duration-300">
                                    Load More Articles
                                </button>
                            </div>
                        </div>
                    </section>
                </>
            )}

            <FinalCTA />
            <Footer />
        </div>
    );
}
