import React from 'react';
import Hero from '../components/home/Hero';

import ProblemSection from '../components/home/ProblemSection';
import WorkflowSection from '../components/home/WorkflowSection';
import ProductShowcase from '../components/home/ProductShowcase';
import CompetitorAnalysis from '../components/home/CompetitorAnalysis';
import ImpactSection from '../components/home/ImpactSection';
import FeatureGrid from '../components/home/FeatureGrid';
import TestimonialsSection from '../components/home/TestimonialsSection';
import IntegrationsSection from '../components/home/IntegrationsSection';
import UseCaseSection from '../components/home/UseCaseSection';
import ComparisonTable from '../components/home/ComparisonTable';
import PricingPreview from '../components/home/PricingPreview';
import FAQSection from '../components/home/FAQSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-[#0A2E22] overflow-x-hidden">
            <Hero />
            <ProductShowcase />
            <ProblemSection />
            <CompetitorAnalysis />
            <WorkflowSection />
            <FeatureGrid />
            <ImpactSection />
            <TestimonialsSection />
            <IntegrationsSection />
            <UseCaseSection />
            <ComparisonTable />
            <PricingPreview />
            <FAQSection />
            <FinalCTA />
            <Footer />
        </div>
    );
}
