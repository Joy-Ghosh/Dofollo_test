import React from 'react';

export default function ProductShowcase() {
    return (
        <section id="product-showcase" className="py-24 bg-[#0A2E22] relative overflow-hidden bg-noise">
            {/* Background Gradients - Adjusted for smoother blend */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#045C4E]/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#E1F28F]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-[#f5ffef] mb-6 tracking-tight">
                        Analyze, Optimize, and <span className="text-[#E1F28F]">Dominate</span>
                    </h2>
                    <p className="text-[#f5ffef]/80 text-lg lg:text-xl leading-relaxed">
                        A complete suite of tools to visualize your site architecture and uncover hidden SEO potential.
                    </p>
                </div>

                {/* Storylane Embed - Added Premium Glass Container */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] bg-white/5 backdrop-blur-sm w-full max-w-6xl mx-auto p-2">
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
                </div>
            </div>
        </section>
    );
}
