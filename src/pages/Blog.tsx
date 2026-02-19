import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Calendar, Clock, Tag, ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';

import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import SEO from '../components/SEO';
import blogData from '../data/pages/blog.json';

const POSTS_PER_PAGE = 6;

// Subtle dot colors that differentiate each category — badge itself stays on-brand
const categoryDotColors: Record<string, string> = {
    'Internal Linking': 'bg-teal-500',
    'SEO Strategy': 'bg-indigo-400',
    'AI Tools': 'bg-violet-400',
    'Content': 'bg-orange-400',
    'Analytics': 'bg-sky-400',
    'Product': 'bg-fuchsia-400',
};

function CategoryBadge({ category, size = 'sm' }: { category: string; size?: 'xs' | 'sm' }) {
    const dot = categoryDotColors[category] || 'bg-gray-400';
    return (
        <span className={`inline-flex items-center gap-1.5 rounded-full font-bold bg-white text-gray-900 shadow-sm border border-gray-100/50 ${size === 'xs' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-3 py-1'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${dot} flex-shrink-0`} />
            {category}
        </span>
    );
}

function AuthorAvatar({ initials, name }: { initials: string; name: string }) {
    return (
        <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0A2E22] to-[#1a5c40] flex items-center justify-center text-[#E1F28F] text-xs font-bold flex-shrink-0">
                {initials}
            </div>
            <span className="text-sm font-medium text-gray-700 truncate">{name}</span>
        </div>
    );
}

// Micro SVG pattern for card backgrounds
function CardPattern({ gradient }: { gradient: string }) {
    return (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl`}>
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E1F28F' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}

interface Post {
    id: string;
    category: string;
    category_id: string;
    title: string;
    excerpt: string;
    author: { name: string; role: string; avatar_initials: string };
    date: string;
    read_time: string;
    tags: string[];
    gradient: string;
    image?: string;
}

function BlogCard({ post, index }: { post: Post; index: number }) {
    return (
        <article
            className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col"
            style={{ animationDelay: `${index * 80}ms` }}
        >
            {/* Card image */}
            <div className="relative h-44 overflow-hidden">
                {post.image ? (
                    <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <CardPattern gradient={post.gradient} />
                )}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
                {/* Category badge */}
                <div className="absolute top-3 left-3 z-10">
                    <CategoryBadge category={post.category} />
                </div>
            </div>

            {/* Card content */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[17px] font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#0A2E22] transition-colors line-clamp-2">
                    {post.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed line-clamp-2 flex-1 mb-4">
                    {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100 mt-auto">
                    <AuthorAvatar initials={post.author.avatar_initials} name={post.author.name} />
                    <div className="flex flex-col items-end gap-0.5 text-[11px] font-medium text-gray-400 flex-shrink-0">
                        <span className="flex items-center gap-1.5 whitespace-nowrap"><Calendar size={10} />{post.date}</span>
                        <span className="flex items-center gap-1.5 whitespace-nowrap"><Clock size={10} />{post.read_time}</span>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);

    const { featured_post, categories, posts, recent_posts } = blogData;

    // Filter posts
    const filteredPosts = useMemo(() => {
        let result = posts as Post[];
        if (activeCategory !== 'all') {
            result = result.filter(p => p.category_id === activeCategory);
        }
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.title.toLowerCase().includes(q) ||
                p.excerpt.toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q) ||
                p.tags.some(t => t.toLowerCase().includes(q))
            );
        }
        return result;
    }, [activeCategory, searchQuery, posts]);

    // Pagination
    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    const paginatedPosts = filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

    const handleCategoryChange = (id: string) => {
        setActiveCategory(id);
        setCurrentPage(1);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Blog - Dofollo | SEO Insights & Internal Linking Strategies"
                description="Expert articles on internal linking, SEO strategy, AI tools, and content optimization from the Dofollo team."
                canonical="https://dofollo.ai/blog"
            />



            {/* ───── Featured Post ───── */}
            <section className="bg-white pt-32 pb-16">
                <div className="container mx-auto px-6 max-w-7xl">

                    {/* Section header — matches reference image */}
                    <div className="mb-3">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#045C4E] mb-3">
                            Read Our Blog
                        </p>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A2E22] leading-tight mb-3">
                            Browse Our Resources
                        </h1>
                        <p className="text-gray-500 text-base max-w-lg">
                            We provide tips and resources from industry leaders. For real.
                        </p>
                    </div>

                    {/* Featured card */}
                    <Link to={`/blog/${featured_post.id}`} className="group block mt-8">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-[420px] md:min-h-[500px] flex items-end border border-gray-100">

                            {/* Background photo */}
                            {(featured_post as any).image ? (
                                <img
                                    src={(featured_post as any).image}
                                    alt={featured_post.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            ) : (
                                <div className={`absolute inset-0 bg-gradient-to-br ${featured_post.gradient}`} />
                            )}

                            {/* Subtle dark scrim over top half to keep top area visible */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                            {/* ↗ Arrow button — top-right, always visible */}
                            <div className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:bg-[#E1F28F]/20 transition-all duration-300">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white">
                                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            {/* Bottom glass overlay panel */}
                            <div className="relative z-10 w-full">
                                {/* Glass panel */}
                                <div className="absolute inset-0 bg-[#0A2E22]/55 backdrop-blur-md border-t border-white/10" />

                                <div className="relative z-10 px-7 py-6">
                                    {/* Title */}
                                    <h2 className="text-xl md:text-2xl font-extrabold text-white leading-snug mb-1.5 group-hover:text-[#E1F28F] transition-colors duration-300 max-w-2xl">
                                        {featured_post.title}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-xl line-clamp-1">
                                        {featured_post.excerpt}
                                    </p>

                                    {/* Bottom row: author + date + tags */}
                                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                        {/* Author avatar + name */}
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#045C4E] to-[#0A2E22] border-2 border-[#E1F28F]/40 flex items-center justify-center text-[#E1F28F] text-[10px] font-bold flex-shrink-0">
                                                {featured_post.author.avatar_initials}
                                            </div>
                                            <span className="text-white/80 text-sm font-medium">{featured_post.author.name}</span>
                                        </div>

                                        {/* Divider */}
                                        <span className="text-white/30 text-xs hidden sm:block">|</span>

                                        {/* Date */}
                                        <span className="flex items-center gap-1.5 text-xs text-white/50">
                                            <Calendar size={11} />
                                            {featured_post.date}
                                        </span>

                                        {/* Spacer */}
                                        <span className="flex-1" />

                                        {/* Tags */}
                                        <div className="flex items-center gap-2">
                                            {featured_post.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0A2E22]/70 text-[#E1F28F] border border-[#E1F28F]/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* ───── Main Content Area ───── */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* ── Left: Blog Grid ── */}
                        <div className="flex-1 min-w-0">

                            {/* Category Filter + Search Bar */}
                            <div className="flex flex-row items-center justify-between gap-4 mb-8">
                                {/* Category Pills with counts */}
                                <div className="flex items-center gap-2 flex-nowrap overflow-x-auto flex-1 min-w-0"
                                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                    {categories.map(cat => {
                                        const count = cat.id === 'all'
                                            ? posts.length
                                            : posts.filter(p => p.category_id === cat.id).length;
                                        return (
                                            <button
                                                key={cat.id}
                                                id={`blog-cat-${cat.id}`}
                                                onClick={() => handleCategoryChange(cat.id)}
                                                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border flex-shrink-0 ${activeCategory === cat.id
                                                    ? 'bg-[#0A2E22] text-[#E1F28F] border-[#0A2E22] shadow-md'
                                                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#0A2E22]/30 hover:text-[#0A2E22]'
                                                    }`}
                                            >
                                                {cat.label}
                                                <span className={`text-xs font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center leading-none ${activeCategory === cat.id
                                                    ? 'bg-[#E1F28F]/20 text-[#E1F28F]'
                                                    : 'bg-gray-100 text-gray-500'
                                                    }`}>
                                                    {count}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>


                            </div>

                            {/* Results count */}
                            {(searchQuery || activeCategory !== 'all') && (
                                <p className="text-sm text-gray-500 mb-6">
                                    Showing <span className="font-semibold text-gray-800">{filteredPosts.length}</span> result{filteredPosts.length !== 1 ? 's' : ''}
                                    {searchQuery && <> for "<span className="font-semibold text-[#0A2E22]">{searchQuery}</span>"</>}
                                    {activeCategory !== 'all' && !searchQuery && <> in <span className="font-semibold text-[#0A2E22]">{categories.find(c => c.id === activeCategory)?.label}</span></>}
                                </p>
                            )}

                            {/* Blog Grid */}
                            {paginatedPosts.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
                                    {paginatedPosts.map((post, i) => (
                                        <Link key={post.id} to={`/blog/${post.id}`} className="block h-full text-inherit no-underline">
                                            <BlogCard post={post as Post} index={i} />
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-24 text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-[#0A2E22]/5 flex items-center justify-center mb-4">
                                        <Search size={24} className="text-[#0A2E22]/30" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">No articles found</h3>
                                    <p className="text-gray-500 text-sm">Try adjusting your search or filter.</p>
                                    <button
                                        onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                                        className="mt-4 px-5 py-2 rounded-full bg-[#0A2E22] text-white text-sm font-medium hover:bg-[#0A2E22]/80 transition-colors"
                                    >
                                        Clear filters
                                    </button>
                                </div>
                            )}

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div id="blog-pagination" className="flex items-center justify-center gap-2">
                                    <button
                                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                        className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#0A2E22] hover:text-white hover:border-[#0A2E22] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                                    >
                                        <ChevronLeft size={16} />
                                    </button>

                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`w-9 h-9 rounded-full border text-sm font-semibold transition-all duration-200 ${currentPage === page
                                                ? 'bg-[#0A2E22] text-[#E1F28F] border-[#0A2E22]'
                                                : 'border-gray-200 text-gray-600 hover:border-[#0A2E22] hover:text-[#0A2E22]'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                        disabled={currentPage === totalPages}
                                        className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#0A2E22] hover:text-white hover:border-[#0A2E22] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                                    >
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* ── Right: Sidebar ── */}
                        <aside className="lg:w-72 xl:w-80 shrink-0 space-y-8">



                            {/* Search Articles Widget */}
                            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                                <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <Search size={14} className="text-[#0A2E22]" />
                                    Search Articles
                                </h3>
                                <div className="relative">
                                    <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        id="blog-sidebar-search"
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={handleSearch}
                                        className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A2E22]/20 focus:border-[#0A2E22] transition-all placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Recent Posts Widget */}
                            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                                <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <TrendingUp size={14} className="text-[#0A2E22]" />
                                    Recent Posts
                                </h3>
                                <ul className="space-y-4">
                                    {recent_posts.map((post, i) => (
                                        <li key={post.id}>
                                            <Link
                                                to={`/blog/${post.id}`}
                                                className="group flex gap-3 items-start"
                                            >
                                                {/* Number badge */}
                                                <span className="text-xs font-black text-[#0A2E22]/20 group-hover:text-[#E1F28F] transition-colors font-mono pt-0.5 w-4 shrink-0">
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                                <div className="min-w-0">
                                                    <p className="text-sm font-semibold text-gray-800 leading-snug mb-1 group-hover:text-[#0A2E22] transition-colors line-clamp-2">
                                                        {post.title}
                                                    </p>
                                                    <span className="flex items-center gap-1 text-gray-400">
                                                        <Clock size={9} />{post.read_time}
                                                    </span>
                                                </div>
                                            </Link>
                                            {i < recent_posts.length - 1 && <div className="mt-4 border-t border-gray-50" />}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/blog"
                                    className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-[#0A2E22] hover:text-[#E1F28F] hover:border-[#0A2E22] transition-all duration-200"
                                >
                                    View All Posts <ArrowRight size={13} />
                                </Link>
                            </div>

                            {/* CTA Widget */}
                            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0A2E22] to-[#1a5c40] p-6 text-white">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E1F28F]/10 rounded-full blur-2xl pointer-events-none" />
                                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="w-10 h-10 rounded-xl bg-[#E1F28F]/15 flex items-center justify-center mb-4">
                                        <Tag size={18} className="text-[#E1F28F]" />
                                    </div>
                                    <h4 className="text-base font-bold text-white mb-2">Automate Your Internal Linking</h4>
                                    <p className="text-white/60 text-sm leading-relaxed mb-5">
                                        Let AI handle your internal link strategy while you focus on content creation.
                                    </p>
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 px-4 py-2.5 bg-[#E1F28F] text-[#0A2E22] rounded-xl text-sm font-bold hover:bg-white hover:shadow-lg transition-all duration-200"
                                    >
                                        Start Free Trial <ArrowRight size={13} />
                                    </a>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Final CTA (Dark) */}
            <FinalCTA />
            <Footer />
        </div>
    );
}
