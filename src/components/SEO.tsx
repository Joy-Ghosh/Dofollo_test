import React from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
    twitterCard?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    canonical?: string;
    robots?: string;
}

// React 19 supports native metadata hoisting
export default function SEO({
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
    canonical,
    robots
}: SEOProps) {
    return (
        <>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {robots && <meta name="robots" content={robots} />}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            {ogTitle && <meta property="og:title" content={ogTitle} />}
            {ogDescription && <meta property="og:description" content={ogDescription} />}
            {ogImage && <meta property="og:image" content={ogImage} />}
            {ogUrl && <meta property="og:url" content={ogUrl} />}

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard || 'summary_large_image'} />
            {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
            {twitterDescription && <meta name="twitter:description" content={twitterDescription} />}
            {twitterImage && <meta name="twitter:image" content={twitterImage} />}
        </>
    );
}
