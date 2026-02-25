import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

/* ─── Animated node-graph mini-visual ─────────────────────────── */
function LinkGraph() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const W = canvas.width;
        const H = canvas.height;

        // Fixed nodes
        const nodes = [
            { x: W * 0.50, y: H * 0.50, r: 7, primary: true },  // center
            { x: W * 0.18, y: H * 0.30, r: 5, primary: false },
            { x: W * 0.80, y: H * 0.22, r: 4, primary: false },
            { x: W * 0.75, y: H * 0.70, r: 5, primary: false },
            { x: W * 0.22, y: H * 0.72, r: 4, primary: false },
            { x: W * 0.55, y: H * 0.15, r: 3, primary: false },
            { x: W * 0.90, y: H * 0.48, r: 3, primary: false },
            { x: W * 0.10, y: H * 0.55, r: 3, primary: false },
            { x: W * 0.60, y: H * 0.85, r: 3, primary: false },
        ];

        const edges = [
            [0, 1], [0, 2], [0, 3], [0, 4],
            [0, 5], [0, 6], [0, 7], [0, 8],
            [1, 5], [2, 6], [3, 8], [4, 7],
        ];

        let pulse = 0;
        let animId: number;

        function draw() {
            if (!ctx) return;
            ctx.clearRect(0, 0, W, H);
            pulse = (pulse + 0.018) % (Math.PI * 2);

            // Draw edges
            edges.forEach(([a, b]) => {
                const na = nodes[a], nb = nodes[b];
                const grad = ctx.createLinearGradient(na.x, na.y, nb.x, nb.y);
                grad.addColorStop(0, 'rgba(4,92,78,0.55)');
                grad.addColorStop(1, 'rgba(225,242,143,0.25)');
                ctx.beginPath();
                ctx.moveTo(na.x, na.y);
                ctx.lineTo(nb.x, nb.y);
                ctx.strokeStyle = grad;
                ctx.lineWidth = 1.2;
                ctx.stroke();
            });

            // Draw nodes
            nodes.forEach((n, i) => {
                const phase = pulse + i * 0.5;
                const glowSize = n.primary ? 18 + Math.sin(phase) * 4 : 10 + Math.sin(phase) * 3;

                // outer glow
                const glowGrad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowSize);
                glowGrad.addColorStop(0, n.primary ? 'rgba(225,242,143,0.35)' : 'rgba(4,92,78,0.30)');
                glowGrad.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.beginPath();
                ctx.arc(n.x, n.y, glowSize, 0, Math.PI * 2);
                ctx.fillStyle = glowGrad;
                ctx.fill();

                // node dot
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r + (n.primary ? Math.sin(phase) * 1.5 : 0), 0, Math.PI * 2);
                ctx.fillStyle = n.primary ? '#E1F28F' : '#045C4E';
                ctx.fill();

                // inner highlight
                ctx.beginPath();
                ctx.arc(n.x - n.r * 0.25, n.y - n.r * 0.25, n.r * 0.35, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255,255,255,0.45)';
                ctx.fill();
            });

            animId = requestAnimationFrame(draw);
        }

        draw();
        return () => cancelAnimationFrame(animId);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={220}
            height={160}
            className="w-full h-full"
            style={{ display: 'block' }}
        />
    );
}

/* ─── Main component ───────────────────────────────────────────── */
export default function BlogInlineCTA() {
    const [domain, setDomain] = useState('');
    const [focused, setFocused] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const trimmed = domain.trim();
        if (!trimmed) return;
        window.open(`https://dash.dofollo.ai/?site=${encodeURIComponent(trimmed)}`, '_blank');
    }

    return (
        <div
            className="blog-inline-cta not-prose my-10"
            style={{
                background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0fdf4 100%)',
                border: '1px solid rgba(4,92,78,0.15)',
                borderRadius: '20px',
                boxShadow: '0 4px 32px rgba(4,92,78,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {/* Subtle animated gradient overlay */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(ellipse at 80% 50%, rgba(225,242,143,0.18) 0%, transparent 65%)',
                    pointerEvents: 'none',
                }}
            />

            <div
                style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    gap: 0,
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* ── Left: mini visual ── */}
                <div
                    aria-hidden="true"
                    style={{
                        flexShrink: 0,
                        width: '180px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, rgba(4,92,78,0.06) 0%, rgba(4,92,78,0.02) 100%)',
                        borderRight: '1px solid rgba(4,92,78,0.08)',
                        padding: '20px 12px',
                    }}
                    className="hidden sm:flex"
                >
                    <div style={{ width: '100%', height: '140px' }}>
                        <LinkGraph />
                    </div>
                </div>

                {/* ── Right: content ── */}
                <div style={{ flex: 1, padding: '28px 28px 24px 28px', minWidth: 0 }}>
                    {/* Badge */}
                    <div style={{ marginBottom: '10px' }}>
                        <span
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                background: 'rgba(4,92,78,0.08)',
                                color: '#045C4E',
                                borderRadius: '100px',
                                padding: '3px 10px',
                                fontSize: '10px',
                                fontWeight: 700,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                            }}
                        >
                            <span
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: '50%',
                                    background: '#E1F28F',
                                    border: '1px solid #045C4E',
                                    display: 'inline-block',
                                    animation: 'cta-pulse 2s infinite',
                                }}
                            />
                            Dofollo AI
                        </span>
                    </div>

                    {/* Headline */}
                    <h3
                        style={{
                            fontSize: 'clamp(16px, 2.2vw, 20px)',
                            fontWeight: 800,
                            color: '#0A2E22',
                            lineHeight: 1.25,
                            marginBottom: '8px',
                            margin: '0 0 8px 0',
                        }}
                    >
                        Ready to See Your Internal Link Gaps?
                    </h3>

                    {/* Subtext */}
                    <p
                        style={{
                            fontSize: '13px',
                            color: '#4B7A5C',
                            lineHeight: 1.55,
                            margin: '0 0 18px 0',
                            maxWidth: '440px',
                        }}
                    >
                        Let Dofollo analyze your site structure and uncover high-impact link opportunities instantly — no manual work needed.
                    </p>

                    {/* Domain input + CTA */}
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: 'flex',
                            gap: '8px',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            marginBottom: '14px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                flex: '1 1 200px',
                                minWidth: '180px',
                                maxWidth: '300px',
                                background: '#fff',
                                border: `1.5px solid ${focused ? '#045C4E' : 'rgba(4,92,78,0.2)'}`,
                                borderRadius: '10px',
                                padding: '0 12px',
                                transition: 'border-color 0.2s',
                                boxShadow: focused ? '0 0 0 3px rgba(225,242,143,0.35)' : 'none',
                            }}
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginRight: 8, opacity: 0.5 }}>
                                <circle cx="12" cy="12" r="10" stroke="#045C4E" strokeWidth="2" />
                                <path d="M2 12h20M12 2c-2.5 3-4 6-4 10s1.5 7 4 10M12 2c2.5 3 4 6 4 10s-1.5 7-4 10" stroke="#045C4E" strokeWidth="2" />
                            </svg>
                            <input
                                type="text"
                                value={domain}
                                onChange={e => setDomain(e.target.value)}
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                                placeholder="yourwebsite.com"
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    background: 'transparent',
                                    fontSize: '13px',
                                    color: '#0A2E22',
                                    width: '100%',
                                    padding: '10px 0',
                                    fontFamily: 'inherit',
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            id="blog-cta-analyze-btn"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '7px',
                                background: '#045C4E',
                                color: '#E1F28F',
                                border: 'none',
                                borderRadius: '10px',
                                padding: '10px 20px',
                                fontSize: '13px',
                                fontWeight: 700,
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                transition: 'background 0.2s, transform 0.15s, box-shadow 0.2s',
                                boxShadow: '0 2px 12px rgba(4,92,78,0.25)',
                                flexShrink: 0,
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLButtonElement).style.background = '#033D34';
                                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(4,92,78,0.35), 0 0 0 3px rgba(225,242,143,0.25)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLButtonElement).style.background = '#045C4E';
                                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 12px rgba(4,92,78,0.25)';
                            }}
                        >
                            Analyze My Site
                            <ArrowRight size={13} style={{ transition: 'transform 0.2s' }} />
                        </button>
                    </form>

                    {/* Trust badges */}
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '12px',
                            alignItems: 'center',
                        }}
                    >
                        {['No credit card required', '14-day free trial', 'Works with WordPress & GSC'].map(t => (
                            <span
                                key={t}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    fontSize: '11px',
                                    color: '#4B7A5C',
                                    fontWeight: 500,
                                }}
                            >
                                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                                    <circle cx="6" cy="6" r="6" fill="rgba(4,92,78,0.12)" />
                                    <path d="M3.5 6L5.2 7.7L8.5 4.5" stroke="#045C4E" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes cta-pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.3); }
                }
                .blog-inline-cta * { box-sizing: border-box; }
            `}</style>
        </div>
    );
}
