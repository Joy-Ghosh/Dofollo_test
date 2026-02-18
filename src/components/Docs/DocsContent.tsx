import React from 'react';

// Simple Markdown Parser for demonstration purposes
// In a real production app, use 'react-markdown' or 'mdx'

interface DocsContentProps {
    content: string;
}

const DocsContent: React.FC<DocsContentProps> = ({ content }) => {
    // Split content by double newlines for paragraphs/blocks
    const blocks = content.split(/\n\n+/);

    const renderBlock = (block: string, index: number) => {
        // Heading 2
        if (block.startsWith('## ')) {
            const text = block.replace('## ', '');
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
                <h2 key={index} id={id} className="text-2xl font-semibold text-[#0A2E22] mt-12 mb-6 scroll-mt-24 group">

                    {text}

                </h2>
            );
        }

        // Heading 3
        if (block.startsWith('### ')) {
            const text = block.replace('### ', '');
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return (
                <h3 key={index} id={id} className="text-xl font-bold text-[#0A2E22] mt-8 mb-4 scroll-mt-24">
                    {text}
                </h3>
            );
        }

        // List
        if (block.match(/^- /m)) {
            const items = block.split('\n').map(line => line.replace(/^- /, ''));
            return (
                <ul key={index} className="list-disc pl-6 space-y-2 mb-6 text-[#0A2E22]/80 marker:text-[#E1F28F]">
                    {items.map((item, i) => {
                        // Basic bold handling
                        const parts = item.split(/(\*\*.*?\*\*)/);
                        return (
                            <li key={i}>
                                {parts.map((part, j) => {
                                    if (part.startsWith('**') && part.endsWith('**')) {
                                        return <strong key={j} className="text-[#0A2E22] font-semibold">{part.slice(2, -2)}</strong>;
                                    }
                                    return part;
                                })}
                            </li>
                        );
                    })}
                </ul>
            );
        }

        // Code Block
        if (block.startsWith('```')) {
            const lines = block.split('\n');
            const language = lines[0].replace('```', '');
            const code = lines.slice(1, -1).join('\n');
            return (
                <div key={index} className="my-6 rounded-xl overflow-hidden border border-[#0A2E22]/10 bg-[#0A2E22] shadow-lg">
                    {language && (
                        <div className="px-4 py-2 bg-white/5 border-b border-white/5 flex items-center justify-between">
                            <span className="text-xs font-mono text-[#E1F28F]/80 uppercase tracking-widest">{language}</span>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80"></div>
                            </div>
                        </div>
                    )}
                    <pre className="p-4 overflow-x-auto text-sm font-mono text-white/90 leading-relaxed">
                        <code>{code}</code>
                    </pre>
                </div>
            );
        }

        // Blockquote / Alerts
        if (block.startsWith('> ')) {
            const lines = block.split('\n');
            const typeMatch = lines[0].match(/(\[!NOTE\]|\[!WARNING\]|\[!TIP\])/);
            let type = 'note';
            let content = lines.map(l => l.replace('> ', '')).join(' ');

            if (typeMatch) {
                if (typeMatch[1] === '[!NOTE]') type = 'note';
                if (typeMatch[1] === '[!WARNING]') type = 'warning';
                if (typeMatch[1] === '[!TIP]') type = 'tip';
                content = content.replace(typeMatch[1], '').trim();
            } else {
                content = content.trim();
            }

            let borderColor = 'border-[#045C4E]';
            let bgColor = 'bg-[#045C4E]/5';
            let icon = 'ℹ️';

            if (type === 'warning') {
                borderColor = 'border-amber-500';
                bgColor = 'bg-amber-50';
                icon = '⚠️';
            } else if (type === 'tip') {
                borderColor = 'border-[#E1F28F]';
                bgColor = 'bg-[#E1F28F]/10';
                icon = '💡';
            }

            return (
                <div key={index} className={`my-6 p-5 border-l-4 ${borderColor} ${bgColor} rounded-r-xl flex gap-4 text-[#0A2E22]/80 shadow-sm`}>
                    <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
                    <p className="font-medium">{content}</p>
                </div>
            );
        }

        // Paragraph (Default)
        // Basic bold handling
        const parts = block.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/);
        return (
            <p key={index} className="mb-6 text-lg text-[#0A2E22]/70 leading-relaxed">
                {parts.map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={j} className="text-[#0A2E22] font-semibold">{part.slice(2, -2)}</strong>;
                    }
                    if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
                        const match = part.match(/\[(.*?)\]\((.*?)\)/);
                        if (match) {
                            return <a key={j} href={match[2]} className="text-[#045C4E] font-bold decoration-[#E1F28F]/60 decoration-2 underline-offset-2 hover:underline transition-all">{match[1]}</a>;
                        }
                    }
                    return part;
                })}
            </p>
        );
    };

    return (
        <div className="prose max-w-none">
            {blocks.map((block, index) => renderBlock(block, index))}
        </div>
    );
};

export default DocsContent;
