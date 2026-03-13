import React, { useEffect, useState } from 'react';
import { ArrowUpRight, PlayCircle, Zap, Star, Link as LinkIcon, TrendingUp, CheckCircle2 } from 'lucide-react';
import homeData from '../../data/pages/home.json';

// Typewriter hook — cycles through phrases
function useTypewriter(phrases: string[], speed = 60, pause = 2000) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        }, speed / 2);
      } else {
        setDeleting(false);
        setPhraseIdx(i => (i + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, speed, pause]);

  return displayed;
}

// Links-audited-today counter — ticks up naturally
function useLiveCount(base: number) {
  const [count, setCount] = useState(base);
  useEffect(() => {
    const t = setInterval(() => {
      setCount(c => c + Math.floor(Math.random() * 4) + 1);
    }, 2800 + Math.random() * 1400);
    return () => clearInterval(t);
  }, [base]);
  return count;
}

// Animated scan step sequence
function useScanLoop() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % 5), 1800);
    return () => clearInterval(t);
  }, []);
  return step;
}

export default function Hero() {
  const { hero } = homeData;
  const typewriterText = useTypewriter([
    'broken links',
    'orphan pages',
    'link equity leaks',
    'anchor text issues',
    'crawl inefficiencies',
  ]);
  const liveCount = useLiveCount(18_340);
  const scanStep = useScanLoop();

  const scanSteps = [
    { label: 'Crawling website…', color: 'text-blue-300', icon: '🌐' },
    { label: 'Mapping pages…', color: 'text-purple-300', icon: '📄' },
    { label: 'Issues detected', color: 'text-red-400', icon: '⚠️' },
    { label: 'Links suggested', color: 'text-[#E1F28F]', icon: '🔗' },
    { label: 'SEO score rising', color: 'text-emerald-400', icon: '📈' },
  ];

  return (
    <div className="relative w-full overflow-x-hidden bg-[#0A2E22] min-h-screen flex items-center pt-32 pb-28">
      {/* Background glow layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full bg-[#045C4E]/30 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#39bd83]/10 blur-[120px]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#E1F28F]"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${8 + i * 7.5}%`,
              top: `${15 + (i % 5) * 15}%`,
              opacity: 0.15 + (i % 4) * 0.07,
              animation: `float ${5 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Typography */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">

            {/* Live Signal Badge */}
            <div className="relative group cursor-pointer w-fit inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 sm:gap-3 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:bg-white/10 transition-all duration-300 animate-fade-in-up">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E1F28F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E1F28F]"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-white tracking-wide uppercase whitespace-nowrap">{hero.badge}</span>
              <span className="hidden sm:flex items-center gap-1.5 ml-1 pl-3 border-l border-white/10 text-[10px] text-[#E1F28F]/70 font-mono whitespace-nowrap">
                <LinkIcon className="w-3 h-3 shrink-0" />
                <span className="tabular-nums">{liveCount.toLocaleString()}</span> links audited today
              </span>
            </div>

            {/* H1 — 3-line punchy headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] leading-[1.05] font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl">
              {hero.title_first}<br />
              <span className="relative inline-block">
                <span className="font-serif italic text-[#E1F28F] relative z-10">
                  {hero.title_highlight}
                </span>
                <span className="absolute inset-0 bg-[#E1F28F]/20 blur-2xl -z-10 block rounded-full transform scale-110"></span>
              </span>
              <br />
              {hero.title_last}
            </h1>

            {/* Typewriter tagline */}
            <div className="flex items-center gap-2 mb-6">
              <p className="text-lg sm:text-xl text-white/60 font-medium leading-relaxed">
                AI automatically detects{' '}
                <span className="text-[#E1F28F] font-bold">
                  {typewriterText}
                  <span className="animate-blink text-[#E1F28F]">|</span>
                </span>
              </p>
            </div>

            {/* Subtext */}
            <p className="text-base text-white/60 leading-relaxed max-w-lg mb-10">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="https://dash.dofollo.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-[#E1F28F] text-[#0A2E22] px-8 h-14 rounded-2xl text-base font-extrabold animate-breathe hover:scale-[1.04] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">{hero.primary_cta}</span>
                <ArrowUpRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>

              <button
                onClick={() => document.getElementById('product-showcase')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 h-14 rounded-2xl text-base font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#E1F28F]/30 transition-all backdrop-blur-md"
              >
                <div className="w-8 h-8 rounded-full bg-[#E1F28F]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E1F28F] group-hover:text-[#0A2E22] transition-all duration-300">
                  <PlayCircle className="w-4 h-4 fill-current transition-colors" />
                </div>
                {hero.secondary_cta}
              </button>
            </div>

            {/* Trust row */}
            <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/5 pt-8 w-full max-w-lg">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-[#0A2E22] overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" className="w-full h-full object-cover opacity-90" />
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-[#0A2E22] bg-[#045C4E] flex items-center justify-center text-[10px] font-bold text-white">
                  {hero.trust_count}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-[#E1F28F] text-[#E1F28F]" />)}
                </div>
                <p className="text-sm text-[#F0FFF8]/60">{hero.trust_text}</p>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E1F28F]" />
                No credit card required
              </div>
            </div>
          </div>

          {/* Right Column: Animated AI Scan Dashboard */}
          <div className="lg:col-span-6 relative h-full min-h-[520px] flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#045C4E]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[#39BD83]/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />

            <div className="relative w-full max-w-lg ml-auto py-12">

              {/* Main Dashboard Card */}
              <div className="relative z-10 bg-gradient-to-br from-[#16302B] to-[#0D1F1C] rounded-2xl border border-[#E1F28F]/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden ring-1 ring-white/10">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E1F28F]/40 to-transparent"></div>

                {/* Browser chrome */}
                <div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80"></div>
                  </div>
                  <div className="flex-1 mx-4 px-3 py-1 bg-black/20 border border-white/5 rounded text-[10px] font-mono text-emerald-100/50 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400/60 animate-pulse"></span>
                    dash.dofollo.ai/scan
                  </div>
                </div>

                {/* Scan progress header */}
                <div className="px-6 pt-5 pb-4 border-b border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-[10px] text-white/40 font-mono mb-1 tracking-widest uppercase">AI Scan in Progress</div>
                      <div className="text-base font-bold text-white">yourwebsite.com</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-mono font-extrabold text-[#E1F28F]">142</div>
                      <div className="text-[10px] text-white/40 uppercase tracking-widest">Issues Found</div>
                    </div>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#045C4E] to-[#E1F28F] rounded-full animate-fill-bar" style={{ width: '78%' }} />
                  </div>
                  <div className="flex justify-between mt-1.5 text-[10px] text-white/30 font-mono">
                    <span>978 / 1,240 pages scanned</span>
                    <span>78%</span>
                  </div>
                </div>

                {/* Animated scan steps */}
                <div className="px-6 py-4 space-y-1.5">
                  {scanSteps.map((s, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-500 ${i === scanStep ? 'bg-white/5 border border-white/10' : ''}`}
                    >
                      <span className="text-sm">{s.icon}</span>
                      <span className={`text-sm font-medium transition-all duration-300 flex-1 ${i === scanStep ? s.color : i < scanStep ? 'text-white/35 line-through' : 'text-white/20'}`}>
                        {s.label}
                      </span>
                      {i < scanStep && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      )}
                      {i === scanStep && (
                        <span className="flex gap-0.5 shrink-0">
                          {[0, 1, 2].map(d => (
                            <span
                              key={d}
                              className="w-1 h-1 rounded-full bg-[#E1F28F] animate-bounce"
                              style={{ animationDelay: `${d * 0.15}s` }}
                            />
                          ))}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Issues grid */}
                <div className="px-6 pb-5 grid grid-cols-3 gap-3 mt-2">
                  {[
                    { label: 'Broken Links', value: '12', color: 'text-red-400', bg: 'bg-red-400/10 border-red-400/20' },
                    { label: 'Orphan Pages', value: '5', color: 'text-amber-400', bg: 'bg-amber-400/10 border-amber-400/20' },
                    { label: 'Link Opps', value: '28', color: 'text-[#E1F28F]', bg: 'bg-[#E1F28F]/10 border-[#E1F28F]/20' },
                  ].map((item, i) => (
                    <div key={i} className={`${item.bg} border rounded-xl p-3 text-center`}>
                      <div className={`text-xl font-extrabold ${item.color}`}>{item.value}</div>
                      <div className="text-[10px] text-white/40 mt-0.5">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Float card: AI Suggestion */}
              <div className="absolute -top-8 -right-4 z-30 animate-float-delayed hidden sm:block">
                <div className="bg-[#0D261F]/95 backdrop-blur-xl p-4 rounded-xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6)] border border-[#E1F28F]/30 w-52 ring-1 ring-white/10">
                  <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
                    <div className="p-1.5 bg-[#E1F28F]/20 rounded-md">
                      <Zap className="w-3.5 h-3.5 text-[#E1F28F]" />
                    </div>
                    <span className="text-xs font-bold text-white">AI Suggestion</span>
                    <span className="ml-auto text-[10px] font-mono text-[#E1F28F]/70">98%</span>
                  </div>
                  <p className="text-[11px] text-white/60 leading-relaxed mb-3">
                    Add link from <span className="text-[#E1F28F] font-semibold">"Technical SEO Guide"</span> → "Crawl Budget Optimization"
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 px-2 py-1 text-[10px] font-bold bg-[#E1F28F] text-[#0A2E22] rounded-md">Add Link</button>
                    <button className="flex-1 px-2 py-1 text-[10px] font-medium bg-white/5 text-white/50 rounded-md border border-white/10">Skip</button>
                  </div>
                </div>
              </div>

              {/* Float card: SEO Performance */}
              <div className="absolute -bottom-4 -left-4 z-30 animate-float hidden sm:block">
                <div className="bg-[#0D261F]/95 backdrop-blur-xl p-4 rounded-xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6)] border border-[#E1F28F]/30 w-56 ring-1 ring-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-emerald-100/60 uppercase">SEO Performance</span>
                    <TrendingUp className="w-4 h-4 text-[#E1F28F]" />
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-2xl font-extrabold text-white">+65%</p>
                      <p className="text-[10px] font-semibold text-emerald-100/50 mt-0.5">Link Coverage</p>
                    </div>
                    <div className="h-8 w-px bg-white/10"></div>
                    <div>
                      <p className="text-2xl font-extrabold text-white">+34%</p>
                      <p className="text-[10px] font-semibold text-emerald-100/50 mt-0.5">Organic Traffic</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 bg-[#E1F28F]/10 px-2 py-1.5 rounded-lg border border-[#E1F28F]/20">
                    <CheckCircle2 className="w-3 h-3 text-[#E1F28F]" />
                    <span className="text-[10px] font-medium text-emerald-100">Avg results within 8 weeks</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
