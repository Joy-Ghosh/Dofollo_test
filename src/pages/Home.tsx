import React from 'react';
import Hero from '../components/home/Hero';
import ProblemSection from '../components/home/ProblemSection';
import AIWebsiteScan from '../components/home/AIWebsiteScan';
import AILinkIntelligence from '../components/home/AILinkIntelligence';
import InternalLinkingVisualizer from '../components/home/InternalLinkingVisualizer';
import SEOOpportunities from '../components/home/SEOOpportunities';
import AIFixEngine from '../components/home/AIFixEngine';
import DashboardPreview from '../components/home/DashboardPreview';
import InteractiveDemo from '../components/home/InteractiveDemo';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FeatureGrid from '../components/home/FeatureGrid';
import ImpactSection from '../components/home/ImpactSection';
import CompetitorAnalysis from '../components/home/CompetitorAnalysis';
import IntegrationsSection from '../components/home/IntegrationsSection';
import UseCaseSection from '../components/home/UseCaseSection';
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

            {/* 1. Hero — Immediate clarity + curiosity */}
            <Hero />

            {/* 2. Problem — Make users feel understood */}
            <ProblemSection />

            {/* 3. AI Website Scan — Explain the mechanism */}
            <AIWebsiteScan />

            {/* 4. AI Link Intelligence — Core feature showcase */}
            <AILinkIntelligence />

            {/* 5. Link Explorer Visualization — See the structure */}
            <InternalLinkingVisualizer />

            {/* 6. SEO Growth Opportunities — Hidden gems */}
            <SEOOpportunities />

            {/* 7. AI Fix Engine — Major differentiator */}
            <AIFixEngine />

            {/* 8. Dashboard Preview — Show the full system */}
            <DashboardPreview />

            {/* 9. Interactive Demo — Huge conversion boost */}
            <InteractiveDemo />

            {/* 10. Social Proof — Trust & credibility */}
            <TestimonialsSection />

            {/* 11. Feature Summary Grid */}
            <FeatureGrid />

            {/* 12. Impact metrics */}
            <ImpactSection />

            {/* 13. Competitor Analysis */}
            <CompetitorAnalysis />

            {/* 14. Integrations */}
            <IntegrationsSection />

            {/* 15. Use Case / Who It's For */}
            <UseCaseSection />

            {/* 16. Pricing */}
            <PricingPreview />

            {/* 17. FAQ */}
            <FAQSection />

            {/* 18. Final CTA */}
            <FinalCTA />

            <Footer />
        </div>
    );
}
