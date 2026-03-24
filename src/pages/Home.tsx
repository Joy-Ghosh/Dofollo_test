import React from 'react';
import Hero from '../components/home/Hero';
import ProblemSection from '../components/home/ProblemSection';
import OutcomeSection from '../components/home/OutcomeSection';
import SystemOverview from '../components/home/SystemOverview';
import InternalLinkingVisualizer from '../components/home/InternalLinkingVisualizer';
import SEOOpportunities from '../components/home/SEOOpportunities';
import AIFixEngine from '../components/home/AIFixEngine';
import FeatureSystems from '../components/home/FeatureSystems';
import UseCaseSection from '../components/home/UseCaseSection';
import IntegrationsSection from '../components/home/IntegrationsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PricingPreview from '../components/home/PricingPreview';
import FAQSection from '../components/home/FAQSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import seoData from '../data/seo.json';

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-[#0A2E22] overflow-x-hidden">
            <SEO {...seoData.pages.home} />

            {/* 1. Hero — Emotional hook: immediate clarity + curiosity */}
            <Hero />

            {/* 2. Problem — "You don't have a content problem. You have a structure problem." */}
            <ProblemSection />

            {/* 3. Outcome (NEW) — Show transformation BEFORE the product */}
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

            <Footer />
        </div>
    );
}
