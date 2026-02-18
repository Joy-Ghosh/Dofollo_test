import React from 'react';
import { Clock, Calendar, Hash } from 'lucide-react';

interface DocsHeroProps {
    title: string;
    summary: string;
    lastUpdated: string;
    readTime: string;
    tags?: string[];
    categoryTitle?: string;
}

const DocsHero: React.FC<DocsHeroProps> = ({
    title,
    summary,
    lastUpdated,
    readTime,
    tags = [],
    categoryTitle
}) => {
    return (
        <div className="mb-12 relative">
            {/* Decorative Background Element - Subtle Gradient for Depth */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#E1F28F]/10 rounded-full blur-3xl pointer-events-none opacity-50" />

            <div className="relative z-10">
                {/* Category Label - Premium Badge Style */}
                {categoryTitle && (
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#0A2E22] text-[#E1F28F] shadow-sm border border-[#0A2E22]/10 ring-1 ring-white/20">
                            {categoryTitle}
                        </span>
                    </div>
                )}

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A2E22] mb-6 tracking-tight leading-[1.1]">
                    {title}
                </h1>

                {/* Summary */}
                <p className="text-xl text-[#0A2E22]/70 mb-8 max-w-2xl leading-relaxed font-medium">
                    {summary}
                </p>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-[#0A2E22]/60 border-t border-[#0A2E22]/5 pt-6">
                    <div className="flex items-center gap-2 font-medium">
                        <Calendar className="w-4 h-4 text-[#045C4E]" />
                        <span>Updated {lastUpdated}</span>
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                        <Clock className="w-4 h-4 text-[#045C4E]" />
                        <span>{readTime} read</span>
                    </div>
                    {tags.length > 0 && (
                        <div className="flex items-center gap-2 ml-auto">

                            <div className="flex gap-2">
                                {tags.map(tag => (
                                    <span key={tag} className="hover:text-[#045C4E] transition-colors cursor-default font-medium">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DocsHero;
