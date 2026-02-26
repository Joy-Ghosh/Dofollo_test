import React, { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

/**
 * BlogFinalCTA — Position 3: End of article, after conclusion.
 *
 * Strong, confident close. Full-width dark themed block.
 * Converts readers who consumed the full article.
 */
export default function BlogFinalCTA() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="blog-final-cta not-prose"
            style={{
                margin: '40px 0 24px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #0A2E22 0%, #0d3d2c 60%, #0A2E22 100%)',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 8px 40px rgba(4,92,78,0.2)',
            }}
        >
            {/* Background glows */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    top: '-40px',
                    right: '-40px',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(225,242,143,0.12) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    bottom: '-20px',
                    left: '30%',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(4,92,78,0.4) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    padding: 'clamp(24px, 5vw, 40px) clamp(20px, 5vw, 40px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px',
                }}
            >
                {/* Text section */}
                <div>
                    {/* Icon + label */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                        <div
                            style={{
                                width: 28,
                                height: 28,
                                borderRadius: '8px',
                                background: 'rgba(225,242,143,0.15)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}
                        >
                            <Zap size={14} fill="#E1F28F" color="#E1F28F" />
                        </div>
                        <span
                            style={{
                                fontSize: '10px',
                                fontWeight: 700,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                color: 'rgba(225,242,143,0.6)',
                            }}
                        >
                            Ready to take action?
                        </span>
                    </div>

                    <h3
                        style={{
                            fontSize: 'clamp(18px, 5vw, 24px)',
                            fontWeight: 800,
                            color: '#ffffff',
                            margin: '0 0 10px 0',
                            lineHeight: 1.25,
                        }}
                    >
                        Fix Your Internal Link Structure.{' '}
                        <span style={{ color: '#E1F28F' }}>Rank the Pages You Should.</span>
                    </h3>

                    <p
                        style={{
                            fontSize: '13.5px',
                            color: 'rgba(255,255,255,0.55)',
                            margin: 0,
                            lineHeight: 1.6,
                        }}
                    >
                        Dofollo audits your entire site, surfaces the links you're missing, and adds them without you touching a single page. Most users see ranking movement in 3–8 weeks.
                    </p>
                </div>

                {/* CTA block — full width on mobile */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '12px' }}>
                    <a
                        href="https://dash.dofollo.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="blog-final-cta-btn"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            background: hovered ? '#c8dc6e' : '#E1F28F',
                            color: '#0A2E22',
                            borderRadius: '12px',
                            padding: '14px 26px',
                            fontSize: '14px',
                            fontWeight: 800,
                            textDecoration: 'none',
                            transition: 'all 0.2s',
                            boxShadow: hovered
                                ? '0 6px 24px rgba(225,242,143,0.35), 0 0 0 3px rgba(225,242,143,0.15)'
                                : '0 4px 16px rgba(225,242,143,0.2)',
                            transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
                        }}
                    >
                        Start Free Audit — No Card Needed
                        <ArrowRight
                            size={15}
                            style={{
                                transform: hovered ? 'translateX(4px)' : 'translateX(0)',
                                transition: 'transform 0.2s',
                                flexShrink: 0,
                            }}
                        />
                    </a>

                    {/* Social proof */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                            fontSize: '11px',
                            color: 'rgba(255,255,255,0.4)',
                        }}
                    >
                        <span style={{ color: '#E1F28F', fontSize: '13px' }}>⭐⭐⭐⭐⭐</span>
                        Trusted by 2,000+ SEO professionals
                    </div>
                </div>
            </div>

            <style>{`
                .blog-final-cta * { box-sizing: border-box; }

                /* On larger screens, lay text + button side by side */
                @media (min-width: 560px) {
                    .blog-final-cta > div > div:last-child {
                        /* reset stretch so button doesn't span full width on desktop */
                        align-items: flex-start;
                    }
                    .blog-final-cta > div {
                        flex-direction: row !important;
                        align-items: center;
                        justify-content: space-between;
                    }
                    .blog-final-cta > div > div:first-child {
                        flex: 1 1 0;
                        min-width: 0;
                        max-width: 420px;
                    }
                    .blog-final-cta > div > div:last-child {
                        flex-shrink: 0;
                        align-items: flex-start;
                    }
                    #blog-final-cta-btn {
                        display: inline-flex !important;
                        white-space: nowrap;
                    }
                }
            `}</style>
        </div>
    );
}
