const fs = require('fs');
const filepath = 'd:/Joy/Dofollo_test/src/data/pages/home.json';
let data = JSON.parse(fs.readFileSync(filepath, 'utf8'));

data.outcome_section = {
    badge: 'What You Get',
    heading_first: 'Imagine your website',
    heading_highlight: 'working smarter',
    heading_post: 'not harder.',
    description: 'Before you see the product — here\'s the transformation Dofollo delivers. No guesswork. No bloated audits. Just clear results.',
    outcomes: [
        {
            icon: 'TrendingUp',
            metric: '+42%',
            metricLabel: 'Avg. traffic increase',
            before: 'Pages stuck on page 2–3',
            after: 'Pages climbing to top 5',
            color: 'from-[#045C4E] to-[#0A2E22]'
        },
        {
            icon: 'Clock',
            metric: '< 60s',
            metricLabel: 'Full site scan time',
            before: 'Days of manual auditing',
            after: 'Instant structural intelligence',
            color: 'from-[#0A2E22] to-[#0d3b2c]'
        },
        {
            icon: 'Target',
            metric: '3–8 wks',
            metricLabel: 'To see ranking uplift',
            before: 'Guessing what to fix',
            after: 'AI-prioritized action plan',
            color: 'from-[#0d3b2c] to-[#045C4E]'
        }
    ],
    social_proof: {
        title: 'Trusted by 2,400+ growth teams',
        subtitle: 'SEO managers, agencies, and founders',
        stats: [
            { value: '2.4K+', label: 'Sites scanned' },
            { value: '98K+', label: 'Issues resolved' },
            { value: '4.9★', label: 'User rating' }
        ],
        cta: 'See My Results'
    }
};

data.system_overview = {
    badge: 'How It Works',
    heading_first: 'One system.',
    heading_highlight: 'Total structural clarity.',
    description: 'You don\'t need a scanner <em>and</em> a dashboard <em>and</em> a fixer. Dofollo is the complete loop — from crawl to actionable insight to fix.',
    flow_steps: [
        { id: 0, icon: 'Globe', number: '01', title: 'Enter URL', desc: 'Paste your domain — no setup, no code, no API keys required.', detail: 'Supports HTTP, HTTPS, subdomains & subdirectories' },
        { id: 1, icon: 'Radar', number: '02', title: 'AI Scans Every Page', desc: 'Our crawler maps your entire site — 1,000+ pages in under 60 seconds.', detail: 'Average scan time: under 60 seconds' },
        { id: 2, icon: 'AlertTriangle', number: '03', title: 'Issues Detected', desc: 'Orphan pages, broken links, anchor text gaps, link equity leaks found.', detail: '15+ issue types detected automatically' },
        { id: 3, icon: 'BarChart3', number: '04', title: 'Insights Dashboard', desc: 'Prioritized fixes ranked by SEO impact — ready to act in 5 minutes.', detail: 'Ready to act in under 5 minutes' }
    ],
    critical_issues: [
        { type: 'Canonical Mismatch', pages: '279 pages', color: 'text-red-400' },
        { type: 'Duplicate Alt Text', pages: '273 pages', color: 'text-red-400' },
        { type: 'Duplicate Title', pages: '244 pages', color: 'text-red-400' },
        { type: 'Missing H1', pages: '197 pages', color: 'text-amber-400' },
        { type: 'Orphan Pages', pages: '52 pages', color: 'text-orange-400' }
    ],
    quick_wins: [
        'Fix missing H1 on 137 pages',
        'Add alt text to 109 images',
        'Resolve 52 orphan pages'
    ]
};

data.seo_opportunities.opportunities = [
  { page: 'Technical SEO Basics', path: '/blog/technical-seo', position: 12, links: 4, traffic: '+38%', difficulty: 'Easy', diffColor: 'text-emerald-600 bg-emerald-50 border border-emerald-100' },
  { page: 'Site Architecture Guide', path: '/blog/site-architecture', position: 19, links: 6, traffic: '+52%', difficulty: 'Medium', diffColor: 'text-amber-600 bg-amber-50 border border-amber-100' },
  { page: 'Crawl Budget Tips', path: '/blog/crawl-budget', position: 8, links: 2, traffic: '+21%', difficulty: 'Easy', diffColor: 'text-emerald-600 bg-emerald-50 border border-emerald-100' },
  { page: 'XML Sitemaps 101', path: '/blog/xml-sitemaps', position: 24, links: 8, traffic: '+67%', difficulty: 'High Impact', diffColor: 'text-[#045C4E] bg-[#E1F28F]/40 border border-[#045C4E]/20' }
];

data.seo_opportunities.stats = {
    stat1: {
        value: '+42%',
        desc: 'Average traffic increase for pages optimized with Dofollo\'s internal linking.'
    },
    stat2: {
        value: '3–8 wks',
        desc: 'Average time to see measurable ranking improvements after implementing Dofollo\'s suggestions.'
    },
    stat3: {
        title: 'Ready to unlock your hidden pages?',
        cta: 'Scan My Website'
    }
};

data.final_cta.ticker_items = [
    '🟢 Rachel M. just published 47 internal links across 3 client sites',
    '⚡ James upgraded to Pro Max · managing 8 client accounts',
    '🎯 Priya fixed 214 orphan pages · rankings moved in 3 weeks',
    '🟢 David added 60+ links in under 4 min — no CMS editing',
    '📈 Agency team saw +34% organic traffic lift after 90-day audit',
    '🟢 Tanvir just completed his first site-wide link audit',
    '⚡ SEO Lead at B2B SaaS upgraded · 3 sites connected',
    '🎯 Freelance SEO recovered 180 disconnected pages in one pass'
];

fs.writeFileSync(filepath, JSON.stringify(data, null, 4));
console.log('Saved successfully!');
