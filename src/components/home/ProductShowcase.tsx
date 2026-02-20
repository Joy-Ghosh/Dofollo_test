import React from 'react';
import homeData from '../../data/pages/home.json';
import ScrollReveal from '../ScrollReveal';

export default function ProductShowcase() {
    const { product_showcase } = homeData;

    return (
        <section id="product-showcase" className="py-24 bg-[#0A2E22] relative overflow-hidden bg-noise">
            {/* Background Gradients - Adjusted for smoother blend */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#045C4E]/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#E1F28F]/5 rounded-full blur-[100px] pointer-events-none" />

 <div className="container mx-auto relative z-10">
                <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        {product_showcase.heading_first} <span className="text-[#E1F28F]">{product_showcase.heading_highlight}</span>
                    </h2>
                    <p className="text-white/80 text-lg lg:text-xl leading-relaxed">
                        {product_showcase.description}
                    </p>
                </ScrollReveal>

                {/* Storylane Embed - Added Premium Glass Container */}
                <ScrollReveal variant="scale-up" delay={0.2} className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] bg-white/5 backdrop-blur-sm w-full max-w-6xl mx-auto p-2">
                    <div className="relative rounded-xl overflow-hidden">
                        <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
                        <div className="sl-embed" style={{ position: 'relative', paddingBottom: 'calc(51.33% + 25px)', width: '100%', height: 0, transform: 'scale(1)' }}>
                            <iframe
                                loading="lazy"
                                className="sl-demo"
                                src="https://app.storylane.io/demo/9pdgwgr5zreo?embed=popup"
                                name="sl-embed"
                                allow="fullscreen"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                            ></iframe>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
