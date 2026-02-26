import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * BlogSoftCTA — Position 1: After the intro (2–3 paragraphs).
 *
 * Ultra-subtle, inline-text-style. Should feel like a helpful nudge,
 * not an interruption. Zero visual noise.
 */
export default function BlogSoftCTA() {
    return (
        <div
            className="blog-soft-cta not-prose"
            style={{
                margin: '28px 0',
                padding: '14px 20px',
                background: 'rgba(4,92,78,0.04)',
                borderLeft: '3px solid #045C4E',
                borderRadius: '0 10px 10px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
            }}
        >
            <p
                style={{
                    margin: 0,
                    fontSize: '14px',
                    color: '#0A2E22',
                    fontWeight: 500,
                    lineHeight: 1.5,
                }}
            >
                <span style={{ opacity: 0.6, marginRight: 6 }}>💡</span>
                Is link equity leaking from your best pages?{' '}
                <strong style={{ color: '#045C4E' }}>Dofollo finds it free</strong> — no credit card, no setup time.
            </p>

            <a
                href="https://dash.dofollo.ai/"
                target="_blank"
                rel="noopener noreferrer"
                id="blog-soft-cta-link"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#045C4E',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    border: '1.5px solid rgba(4,92,78,0.3)',
                    background: 'rgba(255,255,255,0.7)',
                    transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = '#045C4E';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#E1F28F';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = '#045C4E';
                }}
                onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.7)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#045C4E';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(4,92,78,0.3)';
                }}
            >
                Start Free Audit <ArrowRight size={11} />
            </a>
        </div>
    );
}
