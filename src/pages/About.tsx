import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CompactHero from '../components/CompactHero';
import FinalCTA from '../components/FinalCTA';
import MissionSection from '../components/about/MissionSection';
import StorySection from '../components/about/StorySection';
import TeamSection from '../components/about/TeamSection';
import SEO from '../components/SEO';
import aboutData from '../data/pages/about.json';

// SEO Data (Should ideally be in seo.json, but mocking here for now or reusing existing schema)
const seoProps = {
    title: "About Us - Dofollo",
    description: "Learn about the Dofollo mission, our story, and the team building the future of internal link automation.",
    canonical: "https://dofollo.ai/about"
};

export default function About() {
    const { hero } = aboutData;

    return (
        <div className="min-h-screen bg-[#0A2E22]">
            <SEO {...seoProps} />

            {/* 1. Hero (Dark) */}
            <CompactHero
                badge={hero.badge}
                title={
                    <>
                        {hero.title_first} <br />
                        <span className="text-[#E1F28F]">{hero.title_highlight}</span>
                    </>
                }
                description={hero.description}
            />

            {/* 2. Mission (Light) */}
            <MissionSection />

            {/* 3. Story (Dark) */}
            <StorySection />

            {/* 4. Team (Light) */}
            <TeamSection />

            {/* 5. Final CTA (Dark) */}
            <FinalCTA />

            <Footer />
        </div>
    );
}
