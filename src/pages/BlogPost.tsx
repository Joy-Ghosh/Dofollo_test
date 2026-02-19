import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, Tag, ChevronLeft, ArrowRight, Share2, Linkedin, Twitter, Facebook, Layers } from 'lucide-react';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import SEO from '../components/SEO';
import blogData from '../data/pages/blog.json';

// Reuse category badge logic from Blog page
const categoryDotColors: Record<string, string> = {
    'Internal Linking': 'bg-teal-500',
    'SEO Strategy': 'bg-indigo-400',
    'Product': 'bg-fuchsia-400',
    'Analytics': 'bg-sky-400',
    'AI Tools': 'bg-violet-400',
    'Content': 'bg-orange-400',
};

function CategoryBadge({ category }: { category: string }) {
    const dot = categoryDotColors[category] || 'bg-gray-400';
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full font-bold bg-white text-gray-900 shadow-sm border border-gray-100/50 text-xs px-3 py-1">
            <span className={`w-1.5 h-1.5 rounded-full ${dot} flex-shrink-0`} />
            {category}
        </span>
    );
}

function AuthorAvatar({ initials, name, role }: { initials: string; name: string; role: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A2E22] to-[#1a5c40] flex items-center justify-center text-[#E1F28F] text-sm font-bold flex-shrink-0 border-2 border-white shadow-sm">
                {initials}
            </div>
            <div>
                <p className="text-sm font-bold text-gray-900 leading-none">{name}</p>
                <p className="text-xs text-gray-500 mt-1">{role}</p>
            </div>
        </div>
    );
}

export default function BlogPost() {
    const { slug } = useParams();
    const { posts, recent_posts, categories } = blogData;

    const post = useMemo(() => posts.find(p => p.id === slug), [slug, posts]);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const shareUrl = `https://dofollo.ai/blog/${post.id}`;

    return (
        <div className="min-h-screen bg-[#F9FAFB] text-gray-900">
            <SEO
                title={`${post.title} - Dofollo Blog`}
                description={post.excerpt}
                canonical={`https://dofollo.ai/blog/${post.id}`}
                ogType="article"
                ogImage={`https://dofollo.ai/og/${post.id}.png`} // Placeholder for dynamic OG image
            />

            {/* Navbar Placeholder (Navbar is fixed, so just padding needed) */}
            <div className="h-24 bg-[#0A2E22]" />

            {/* Article Header */}
            <header className="relative py-16 md:py-24 bg-[#0A2E22] overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20`} />

                {/* Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E1F28F]/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
                    <div className="flex flex-col items-center gap-6">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-[#E1F28F] transition-colors text-sm font-medium mb-4">
                            <ChevronLeft size={16} /> Back to Blog
                        </Link>

                        <CategoryBadge category={post.category} />

                        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-4 text-white/70 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar size={14} />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={14} />
                                {post.read_time}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-12 md:py-20">
                <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">

                    {/* Article Body */}
                    <article className="lg:w-[65%] xl:w-[70%] bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm">
                        {/* Author & Share Top */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-b border-gray-100 mb-8">
                            <AuthorAvatar initials={post.author.avatar_initials} name={post.author.name} role={post.author.role} />

                            <div className="flex items-center gap-2">
                                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-2">Share</span>
                                <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#1DA1F2] hover:text-white transition-colors" aria-label="Share on Twitter">
                                    <Twitter size={14} />
                                </button>
                                <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#0A66C2] hover:text-white transition-colors" aria-label="Share on LinkedIn">
                                    <Linkedin size={14} />
                                </button>
                                <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#1877F2] hover:text-white transition-colors" aria-label="Share on Facebook">
                                    <Facebook size={14} />
                                </button>
                                <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors" aria-label="Copy Link">
                                    <Share2 size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Hero Image — post's main image shown at the top of content */}
                        {(post as any).image && (
                            <div className="relative w-full mb-10 rounded-2xl overflow-hidden shadow-lg aspect-[16/7]">
                                <img
                                    src={(post as any).image}
                                    alt={post.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                {/* subtle bottom-fade so it blends into the content */}
                                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
                            </div>
                        )}

                        {/* Content */}
                        <div
                            className="blog-content prose prose-lg max-w-none
                                prose-headings:text-[#0A2E22]
                                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-gray-100
                                prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                                prose-img:rounded-2xl prose-img:shadow-xl prose-img:w-full prose-img:my-10"
                            dangerouslySetInnerHTML={{ __html: post.content || '' }}
                        />

                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <h4 className="text-sm font-bold text-gray-900 mb-3">Related Topics:</h4>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map(tag => (
                                    <Link key={tag} to={`/blog?search=${tag}`} className="text-sm px-3 py-1.5 rounded-lg bg-gray-50 text-gray-600 border border-gray-200 hover:border-[#0A2E22] hover:text-[#0A2E22] transition-colors">
                                        #{tag}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:w-[35%] xl:w-[30%] space-y-8">

                        {/* Categories Widget — scrolls with page */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Layers size={14} className="text-[#0A2E22]" />
                                Categories
                            </h3>
                            <ul className="space-y-1">
                                {categories.map(cat => {
                                    const count = cat.id === 'all'
                                        ? posts.length
                                        : posts.filter(p => p.category_id === cat.id).length;
                                    return (
                                        <li key={cat.id}>
                                            <Link
                                                to="/blog"
                                                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all duration-200 text-left ${post.category_id === cat.id
                                                    ? 'bg-[#0A2E22] text-[#E1F28F] font-semibold'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#0A2E22]'
                                                    }`}
                                            >
                                                <span>{cat.label}</span>
                                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${post.category_id === cat.id ? 'bg-[#E1F28F]/20 text-[#E1F28F]' : 'bg-gray-100 text-gray-500'
                                                    }`}>
                                                    {count}
                                                </span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Sticky group: CTA + Latest Articles */}
                        <div className="sticky top-24 flex flex-col gap-5">

                            {/* CTA Widget — compact */}
                            <div className="relative rounded-2xl overflow-hidden bg-[#0A2E22] px-5 py-4 text-white">
                                <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
                                <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#E1F28F]/15 rounded-full blur-3xl pointer-events-none" />

                                <div className="relative z-10">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#E1F28F]/60 mb-1">Dofollo AI</p>
                                    <h3 className="text-base font-bold text-white leading-snug mb-1">
                                        Fix Your Internal Links — Automatically
                                    </h3>
                                    <p className="text-white/55 text-xs leading-relaxed mb-4">
                                        AI finds & adds the right links across your site. No manual work.
                                    </p>
                                    <a href="#" className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-[#E1F28F] text-[#0A2E22] font-bold text-sm hover:bg-white transition-colors shadow-md">
                                        Try Dofollo Free <ArrowRight size={13} />
                                    </a>
                                </div>
                            </div>

                            {/* Latest Articles */}
                            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-gray-900 mb-4">Latest Articles</h3>
                                <ul className="space-y-4">
                                    {recent_posts.filter(p => p.id !== post.id).slice(0, 4).map((p, i) => (
                                        <li key={p.id}>
                                            <Link to={`/blog/${p.id}`} className="group block">
                                                <p className="text-sm font-semibold text-gray-800 group-hover:text-[#0A2E22] transition-colors line-clamp-2 mb-1">
                                                    {p.title}
                                                </p>
                                                <span className="flex items-center gap-1 text-xs text-gray-400">
                                                    <Clock size={9} />{p.read_time}
                                                </span>
                                            </Link>
                                            {i < 3 && <div className="border-b border-gray-200 mt-3" />}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </aside>
                </div>
            </main>

            <FinalCTA />
            <Footer />
        </div>
    );
}
