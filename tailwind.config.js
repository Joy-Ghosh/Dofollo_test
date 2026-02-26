import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // ── 4px-base spacing scale ──────────────────────────────
            // Every token = N × 4px for perfect professional rhythm.
            // Tailwind's default scale already covers most of these;
            // we extend with semantic names for documentation clarity.
            spacing: {
                // Tailwind's default 0.5 = 2px, 1 = 4px … we augment:
                '13': '52px',
                '15': '60px',
                '17': '68px',
                '18': '72px',
                '22': '88px',
                '26': '104px',
                '30': '120px',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                marquee: 'marquee 30s linear infinite',
            },
        },
    },
    plugins: [
        typography,
    ],
}
