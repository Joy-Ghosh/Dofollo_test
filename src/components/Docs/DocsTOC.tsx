import React, { useEffect, useState } from 'react';

interface DocsTOCProps {
    content: string;
}

const DocsTOC: React.FC<DocsTOCProps> = ({ content }) => {
    const [activeId, setActiveId] = useState<string>('');
    const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

    useEffect(() => {
        // Extract headings from markdown content
        const extractedHeadings: { id: string; text: string; level: number }[] = [];
        const lines = content.split('\n');

        lines.forEach(line => {
            if (line.startsWith('## ')) {
                const text = line.replace('## ', '');
                const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                extractedHeadings.push({ id, text, level: 2 });
            } else if (line.startsWith('### ')) {
                const text = line.replace('### ', '');
                const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                extractedHeadings.push({ id, text, level: 3 });
            }
        });

        setHeadings(extractedHeadings);
    }, [content]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-10% 0px -80% 0px' }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    return (
        <nav className="space-y-4">
            <h4 className="text-sm font-bold text-[#0A2E22] uppercase tracking-wider">
                On This Page
            </h4>
            <div className="relative border-l border-[#0A2E22]/10">
                {/* Active Indicator Line (Simplified implementation via border highlighting) */}

                <ul className="space-y-3">
                    {headings.map((heading) => (
                        <li key={heading.id} className={`${heading.level === 3 ? 'pl-4' : ''}`}>
                            <a
                                href={`#${heading.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                                    setActiveId(heading.id);
                                }}
                                className={`block pl-4 -ml-px border-l-2 text-sm transition-colors duration-200 ${activeId === heading.id
                                    ? 'border-[#E1F28F] text-[#045C4E] font-bold'
                                    : 'border-transparent text-[#0A2E22]/50 hover:text-[#0A2E22] hover:border-[#0A2E22]/20'
                                    }`}
                            >
                                {heading.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default DocsTOC;
