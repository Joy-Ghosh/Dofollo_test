import React, { lazy, Suspense } from 'react';
import Hero from '../components/home/Hero';
import ProblemSection from '../components/home/ProblemSection';
import SEO from '../components/SEO';
import seoData from '../data/seo.json';

// Eagerly loaded components for above-the-fold
import Footer from '../components/Footer';

// Lazily loaded components for below-the-fold
const OutcomeSection = lazy(() => import('../components/home/OutcomeSection'));
const SystemOverview = lazy(() => import('../components/home/SystemOverview'));
const InternalLinkingVisualizer = lazy(() => import('../components/home/InternalLinkingVisualizer'));
const SEOOpportunities = lazy(() => import('../components/home/SEOOpportunities'));
const AIFixEngine = lazy(() => import('../components/home/AIFixEngine'));
const FeatureSystems = lazy(() => import('../components/home/FeatureSystems'));
const UseCaseSection = lazy(() => import('../components/home/UseCaseSection'));
const IntegrationsSection = lazy(() => import('../components/home/IntegrationsSection'));
const TestimonialsSection = lazy(() => import('../components/home/TestimonialsSection'));
const PricingPreview = lazy(() => import('../components/home/PricingPreview'));
const FAQSection = lazy(() => import('../components/home/FAQSection'));
const FinalCTA = lazy(() => import('../components/FinalCTA'));

const SectionLoader = () => (
    <div className="w-full h-96 flex items-center justify-center bg-[#0A2E22]">
        <div className="w-8 h-8 rounded-full border-2 border-[#E1F28F]/20 border-t-[#E1F28F] animate-spin" />
    </div>
);

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-[#0A2E22] overflow-x-hidden">
            <SEO {...seoData.pages.home} />

            {/* Above the fold — Eager Load */}
            <Hero />
            <ProblemSection />

            <Suspense fallback={<SectionLoader />}>
                {/* 3. Outcome — Show transformation BEFORE the product */}
                <OutcomeSection />

                {/* 4. System Overview — Merged: Scan + Analyze + Dashboard in ONE flow */}
                <SystemOverview />

                {/* 5. Link Intelligence — Unique selling point (Visualizer) */}
                <InternalLinkingVisualizer />

                {/* 6. Growth Opportunities — Growth hook */}
                <SEOOpportunities />

                {/* 7. Action Engine — "We don't just analyze — we help you act" */}
                <AIFixEngine />

                {/* 8. Feature Systems — Grouped capabilities, not random tools */}
                <FeatureSystems />

                {/* 9. Use Case — "Is this for me?" (earlier = better) */}
                <UseCaseSection />

                {/* 10. Integrations */}
                <IntegrationsSection />

                {/* 11. Testimonials — Trust before pricing */}
                <TestimonialsSection />

                {/* 12. Pricing */}
                <PricingPreview />

                {/* 13. FAQ */}
                <FAQSection />

                {/* 14. Final CTA */}
                <FinalCTA />
            </Suspense>

            <Footer />
        </div>
    );
}
