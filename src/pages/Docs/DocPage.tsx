import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DocsLayout from '../../components/Docs/DocsLayout';
import DocsHero from '../../components/Docs/DocsHero';
import DocsContent from '../../components/Docs/DocsContent';
import DocsTOC from '../../components/Docs/DocsTOC';
import docsData from '../../data/docs.json';

const DocPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [doc, setDoc] = useState<any | null>(null);
    const [category, setCategory] = useState<any | null>(null);

    useEffect(() => {
        // Find the doc with the matching slug
        let foundDoc = null;
        let foundCategory = null;

        for (const cat of docsData.categories) {
            const item = cat.items.find((i: any) => i.id === slug);
            if (item) {
                foundDoc = item;
                foundCategory = cat;
                break;
            }
        }

        setDoc(foundDoc);
        setCategory(foundCategory);
    }, [slug]);

    if (!slug) return null;

    if (!doc) {
        return (
            <DocsLayout>
                <div className="text-center py-20">
                    <h1 className="text-3xl font-bold text-white mb-4">Document Not Found</h1>
                    <p className="text-white/60">The requested documentation page could not be found.</p>
                </div>
            </DocsLayout>
        );
    }

    return (
        <DocsLayout toc={<DocsTOC content={doc.content} />}>
            <DocsHero
                title={doc.title}
                summary={doc.summary}
                lastUpdated={doc.lastUpdated}
                readTime={doc.readTime}
                tags={doc.tags}
                categoryTitle={category?.title}
            />
            <DocsContent content={doc.content} />
        </DocsLayout>
    );
};

export default DocPage;
