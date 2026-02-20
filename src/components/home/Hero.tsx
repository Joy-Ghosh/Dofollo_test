import React, { useEffect, useState } from 'react';
import { ArrowUpRight, PlayCircle, Zap, Star, Link as LinkIcon, Network, FileText, TrendingUp, CheckCircle2, Users } from 'lucide-react';
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

// Live user count that flickers slightly
function useLiveCount(base: number) {
  const [count, setCount] = useState(base);
  useEffect(() => {
    const t = setInterval(() => {
      setCount(base + Math.floor(Math.random() * 15) - 7);
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(t);
  }, [base]);
  return count;
}

export default function Hero() {
  const { hero } = homeData;
  const typewriterText = useTypewriter([
    'link equity',
    'site architecture',
    'SEO clarity',
    'content strategy',
    'crawl efficiency',
  ]);
  const liveCount = useLiveCount(247);

  return (
    <div className="relative w-full overflow-hidden bg-[#0A2E22] min-h-screen flex items-center pt-24 md:pt-32 pb-20 bg-noise">
      {/* Background Particles (CSS-driven, performant) */}
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

 <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Column: Typography */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">

            {/* Live Signal Badge */}
            <div className="relative group cursor-pointer inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:bg-white/10 transition-all duration-300 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E1F28F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E1F28F]"></span>
              </span>
              <span className="text-xs font-bold text-white tracking-wide uppercase">{hero.badge}</span>
              {/* Live count */}
              <span className="flex items-center gap-1.5 ml-1 pl-3 border-l border-white/10 text-[10px] text-[#E1F28F]/70 font-mono">
                <Users className="w-3 h-3" />
                <span className="tabular-nums">{liveCount}</span> active now
              </span>
            </div>

            {/* H1 — with typewriter in subtitle */}
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.05] font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl">
              {hero.title_first} <br />
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
            <div className="flex items-center gap-2 mb-10">
              <p className="text-lg sm:text-xl text-[#E1F28F] font-medium leading-relaxed opacity-80">
                Master your{' '}
                <span className="text-white font-bold">
                  {typewriterText}
                  <span className="animate-blink text-[#E1F28F]">|</span>
                </span>
              </p>
            </div>

            {/* Subtext */}
            <p className="text-base text-white/60 leading-relaxed max-w-lg mb-10 -mt-6">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              {/* Primary Button — breathing glow */}
              <button className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-[#E1F28F] text-[#0A2E22] px-8 h-14 rounded-2xl text-base font-extrabold animate-breathe hover:scale-[1.04] transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">{hero.primary_cta}</span>
                <ArrowUpRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>

              {/* Secondary Button */}
              <button
                onClick={() => document.getElementById('product-showcase')?.scrollIntoView({ behavior: 'smooth' })}
                className="group w-full sm:w-auto flex items-center justify-center gap-3 px-8 h-14 rounded-2xl text-base font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#E1F28F]/30 transition-all backdrop-blur-md shadow-lg hover:shadow-[#E1F28F]/10"
              >
                <div className="w-8 h-8 rounded-full bg-[#E1F28F]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E1F28F] group-hover:text-[#0A2E22] transition-all duration-300">
                  <PlayCircle className="w-4 h-4 fill-current transition-colors" />
                </div>
                {hero.secondary_cta}
              </button>
            </div>

            {/* Trust Footer */}
            <div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-8 w-full max-w-md">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A2E22] overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="User" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#0A2E22] bg-[#045C4E] flex items-center justify-center text-[10px] font-bold text-white">
                  {hero.trust_count}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-[#E1F28F] text-[#E1F28F]" />)}
                </div>
                <p className="text-sm text-[#F0FFF8]/60">{hero.trust_text}</p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Parallax Visual */}
          <div className="lg:col-span-6 relative h-full min-h-[500px] flex items-center justify-center perspective-1000">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#045C4E]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[#39BD83]/15 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />

            <div className="relative w-full max-w-2xl">
              {/* Main Visual Card */}
              <div className="relative z-10 bg-gradient-to-br from-[#16302B] to-[#0D1F1C] rounded-xl border border-[#E1F28F]/30 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden ring-1 ring-white/10">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E1F28F]/30 to-transparent"></div>

                <div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 shadow-sm"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 shadow-sm"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 shadow-sm"></div>
                  </div>
                  <div className="px-3 py-1 bg-black/20 border border-white/5 rounded text-[10px] font-mono text-emerald-100/50">
                    dofollo-editor.tsx
                  </div>
                </div>

                <div className="flex h-[400px]">
                  <div className="flex-1 p-6 font-sans text-sm leading-relaxed text-emerald-100/80 relative">
                    <h3 className="text-lg font-bold text-white mb-4 font-serif tracking-wide">The Future of SEO Strategy</h3>
                    <div className="space-y-3">
                      <p>To dominate search results, you must prioritize content quality. However, without a solid structure, even great content fails.</p>
                      <p>
                        This is where <span className="text-white font-medium">intelligent automation</span> comes in. By optimizing your site's architecture, you maximize
                        <span className="relative inline-block mx-1">
                          <span className="bg-[#E1F28F]/20 text-[#E1F28F] border-b border-[#E1F28F] px-1 cursor-pointer font-medium whitespace-nowrap">link equity</span>
                          <div className="absolute left-[10%] -translate-x-1/2 bottom-full mb-2 w-48 bg-[#0D201F] text-white p-2.5 rounded-lg shadow-[0_15px_35px_-5px_rgba(0,60,45,0.4)] z-20 border border-[#E1F28F]/30 animate-fade-in-up ring-1 ring-[#E1F28F]/20">
                            <div className="flex items-center justify-between text-[10px] mb-1 opacity-90">
                              <span className="font-bold text-[#E1F28F]">AI SUGGESTION</span>
                              <span className="font-mono">98% MATCH</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-semibold">
                              <LinkIcon className="w-3 h-3 text-[#E1F28F]" />
                              <span>/backlink-strategy</span>
                            </div>
                            <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0D201F] transform rotate-45 border-r border-b border-[#E1F28F]/30"></div>
                          </div>
                        </span>
                        flow.
                      </p>
                      <div className="h-2 w-full bg-white/5 rounded mt-2"></div>
                      <div className="h-2 w-3/4 bg-white/5 rounded"></div>
                      <div className="h-2 w-5/6 bg-white/5 rounded"></div>
                      <div className="h-2 w-4/5 bg-white/5 rounded mt-4"></div>
                      <div className="h-2 w-full bg-white/5 rounded"></div>
                    </div>
                  </div>
                  <div className="w-40 border-l border-white/5 bg-black/10 p-3 pt-20 hidden sm:block backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-4 text-xs font-bold text-emerald-100/70">
                      <Network className="w-3.5 h-3.5 text-[#E1F28F]" />
                      Link Graph
                    </div>
                    <div className="relative h-24 mb-4 border border-white/10 rounded-lg bg-[#0A2E22]/40 p-2 overflow-hidden shadow-inner">
                      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#E1F28F] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#E1F28F]"></div>
                      <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-emerald-500/40 rounded-full"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-emerald-500/40 rounded-full"></div>
                      <svg className="absolute inset-0 w-full h-full opacity-30">
                        <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="white" strokeWidth="0.5" />
                        <line x1="50%" y1="50%" x2="75%" y2="66%" stroke="white" strokeWidth="0.5" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 w-12 bg-white/10 rounded mb-2"></div>
                      <div className="flex items-center justify-between text-[10px] text-emerald-100/50">
                        <span>Depth</span><span className="text-[#E1F28F] font-mono">Level 3</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-emerald-100/50">
                        <span>Links</span><span className="text-[#E1F28F] font-mono">12</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-emerald-100/50">
                        <span>Score</span><span className="text-[#E1F28F] font-mono">98</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 1: AI Opportunities */}
              <div className="absolute -top-16 -right-10 z-30 animate-float-delayed hidden sm:block">
                <div className="bg-[#0D261F]/90 backdrop-blur-xl p-4 rounded-xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6)] border border-[#E1F28F]/30 w-56 ring-1 ring-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                  <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2 relative z-10">
                    <div className="p-1.5 bg-[#E1F28F]/20 rounded-md">
                      <Zap className="w-3.5 h-3.5 text-[#E1F28F]" />
                    </div>
                    <span className="text-xs font-bold text-white tracking-wide">AI Opportunities</span>
                  </div>
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-3 h-3 text-emerald-100/50" />
                        <span className="text-[11px] text-emerald-100/80">Content Strategy</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#E1F28F]">94%</span>
                    </div>
                    <div className="w-full bg-[#0A2E22] h-1 rounded-full overflow-hidden">
                      <div className="bg-[#E1F28F] h-full w-[94%] shadow-[0_0_10px_#E1F28F] animate-fill-bar"></div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                        <FileText className="w-3 h-3 text-emerald-100/50" />
                        <span className="text-[11px] text-emerald-100/80">Keyword Clustering</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#E1F28F] opacity-80">88%</span>
                    </div>
                    <div className="w-full bg-[#0A2E22] h-1 rounded-full overflow-hidden">
                      <div className="bg-[#E1F28F] h-full w-[88%] opacity-70 animate-fill-bar" style={{ animationDelay: '0.3s' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2: SEO Performance */}
              <div className="absolute -bottom-8 -left-8 z-30 animate-float hidden sm:block">
                <div className="bg-[#0D261F]/90 backdrop-blur-xl p-5 rounded-xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.6)] border border-[#E1F28F]/30 w-64 ring-1 ring-white/10 relative overflow-hidden group/card hover:-translate-y-1 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <span className="text-xs font-bold text-emerald-100/60 uppercase">SEO Performance</span>
                    <TrendingUp className="w-4 h-4 text-[#E1F28F]" />
                  </div>
                  <div className="flex items-center gap-4 relative z-10">
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
                  <div className="mt-3 flex items-center gap-1.5 bg-[#E1F28F]/10 px-2 py-1.5 rounded-lg border border-[#E1F28F]/20 relative z-10">
                    <CheckCircle2 className="w-3 h-3 text-[#E1F28F]" />
                    <span className="text-[10px] font-medium text-emerald-100">Crawl efficiency optimized</span>
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
