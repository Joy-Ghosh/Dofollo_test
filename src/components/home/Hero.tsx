import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Zap,
  Star,
  Link as LinkIcon,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Check,
} from "lucide-react";
import homeData from "../../data/pages/home.json";

// Animated scan step sequence
function useScanLoop() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    // Go from step 0 to 4 slowly
    const t = setInterval(() => setStep((s) => (s + 1) % 5), 1500);
    return () => clearInterval(t);
  }, []);
  return step;
}

export default function Hero() {
  const { hero } = homeData;
  const scanStep = useScanLoop();

  const scanSteps = [
    { label: "Crawling website...", icon: "🌐" },
    { label: "Analyzing structure...", icon: "📄" },
    { label: "Issues detected", icon: "⚠️" },
    { label: "Links suggested", icon: "🔗" },
    { label: "SEO score increasing", icon: "📈" },
  ];

  return (
    <div className="relative w-full bg-[#0A2E22] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24">
      {/* Calm Background glow layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full bg-[#045C4E]/15 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#39bd83]/5 blur-[120px]" />
        {/* Subtle Grid overlay - lower opacity for calmer feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Calm & Clear Typography */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <style>{`
              @keyframes slideUpFade {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-problem {
                animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              }
              .animate-solution {
                opacity: 0;
                animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
              }
              @keyframes float1 {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-5px); }
              }
              .animate-float1 {
                animation: float1 4s ease-in-out infinite;
              }
              @keyframes float2 {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-4px); }
              }
              .animate-float2 {
                animation: float2 3.5s ease-in-out infinite;
              }
              @keyframes fadeInSlide {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-entry1 {
                animation: fadeInSlide 0.8s ease-out 0.5s both;
              }
              .animate-entry2 {
                animation: fadeInSlide 0.8s ease-out 1s both;
              }
            `}</style>

            {/* Category Badge */}
            <div className="mb-5 w-fit inline-flex items-center gap-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              {/* Subtle AI pulse indicator */}
              <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E1F28F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-[#E1F28F]"></span>
              </span>
              <span className="text-sm font-bold tracking-wider text-white/80 uppercase">
                AI WEBSITE STRUCTURE ENGINE
              </span>
            </div>

            {/* H1 — Shorter, Stronger Headline */}
            <h1 className="mb-8 max-w-[680px] text-5xl sm:text-6xl md:text-[80px] lg:text-[88px] leading-[1.05] tracking-tight font-extrabold drop-shadow-xl">
              <span className="block text-white animate-problem">
                Stop <span className="font-black">Guessing</span>
                <br />
                Internal Links.
              </span>
              <div className="block mt-2 sm:mt-4 text-[#E1F28F] animate-solution relative w-fit">
                <div className="absolute inset-0 bg-[#e1f28f2b]/10 blur-md rounded-full"></div>
                <span className="relative z-10 px-2 py-1">
                  Let AI Fix Them.
                </span>
              </div>
            </h1>

            {/* Clarity Subheadline */}
            <p className="mb-7 text-lg sm:text-xl text-white/80 leading-relaxed max-w-[520px]">
              Finds weak links, fixes them automatically, and turns your site
              into a connected SEO system.
            </p>

            {/* Actions */}
            <div className="mb-4 w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a
                  href="https://dash.dofollo.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full sm:w-auto flex items-center justify-center gap-2 bg-[#E1F28F] text-[#0A2E22] px-8 h-14 rounded-2xl text-base font-extrabold shadow-[0_15px_30px_-10px_rgba(225,242,143,0.3)] hover:scale-[1.02] transition-all duration-300"
                >
                  {hero.primary_cta}
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>

                <button
                  onClick={() =>
                    document
                      .getElementById("product-showcase")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group flex items-center gap-2 text-base font-bold text-white hover:text-[#E1F28F] transition-colors"
                >
                  {hero.secondary_cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Micro Emotional Hook / Trust under CTA */}
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-medium text-white/60">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#E1F28F]" /> Fix SEO issues in
                  minutes.
                </span>
              </div>
            </div>

            {/* Trust Line */}
            <div className="mt-4 w-full max-w-md border-t-0 p-0">
              <p className="flex items-center gap-2 text-sm text-white/40 font-medium tracking-wide">
                <Star className="w-4 h-4 text-white/30" />
                {hero.trust_text}
              </p>
            </div>
          </div>

          {/* Right Column: Unified Visual Story */}
          <div className="lg:col-span-4 relative h-full min-h-[520px] flex items-center justify-center pt-8 lg:pt-0">
            {/* Soft backdrop glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#E1F28F]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#045C4E]/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative w-full max-w-lg ml-auto">
              {/* Seamless Story System Card */}
              <div className="relative z-10 bg-[#0D1F1C]/30 backdrop-blur-2xl rounded-2xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden flex flex-col">
                {/* Simulated Address Bar */}
                <div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-black/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                  </div>
                  <div className="px-3 py-1 bg-white/5 rounded text-[10px] font-mono text-white/40 flex items-center gap-2 border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    yourwebsite.com
                  </div>
                  <div className="w-10"></div>
                </div>

                <div className="p-6">
                  {/* Phase 1: Scan & Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between items-end mb-3">
                      <div>
                        <div className="text-[10px] text-[#E1F28F]/70 font-mono mb-1 tracking-widest uppercase flex items-center gap-1.5">
                          <Zap className="w-3 h-3" /> System Active
                        </div>
                        <div className="text-xl font-bold text-white">
                          AI Engine
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-emerald-400">
                          {scanStep >= 2 ? "142 Issues" : "Scanning..."}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#045C4E] to-[#E1F28F] rounded-full transition-all duration-1000"
                        style={{ width: `${(scanStep + 1) * 20}%` }}
                      />
                    </div>
                  </div>

                  {/* Phase 2: Integrated Flow (no floating cards) */}
                  <div className="space-y-3 relative">
                    {/* Connecting line behind steps */}
                    <div className="absolute left-4 top-4 bottom-4 w-px bg-white/5 z-0" />

                    {/* Sequential Steps */}
                    <div
                      className={`relative z-10 flex items-center gap-4 p-3 rounded-xl transition-all duration-500 ${scanStep >= 0 ? "opacity-100 bg-white/5" : "opacity-40"}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${scanStep >= 1 ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-white/5 text-white/50 border-white/10"}`}
                      >
                        {scanStep >= 1 ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <TrendingUp className="w-4 h-4 animate-pulse" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-white">
                          Site Mapping
                        </div>
                        <div className="text-[10px] text-white/50">
                          978 / 1,240 pages crawled
                        </div>
                      </div>
                    </div>

                    <div
                      className={`relative z-10 flex items-center gap-4 p-3 rounded-xl transition-all duration-500 ${scanStep >= 2 ? "opacity-100 bg-red-500/10 border border-red-500/20" : "opacity-40"}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${scanStep >= 2 ? "bg-red-500/20 text-red-400 border-red-500/30" : "bg-white/5 text-white/50 border-white/10"}`}
                      >
                        {scanStep >= 3 ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <span className="text-sm">⚠️</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-[#fca5a5]">
                          Link Structure Issues
                        </div>
                        <div className="text-[10px] text-white/50">
                          12 broken, 5 orphans
                        </div>
                      </div>
                    </div>

                    <div
                      className={`relative z-10 flex items-center gap-4 p-3 rounded-xl transition-all duration-500 ${scanStep >= 3 ? "opacity-100 bg-[#E1F28F]/10 border border-[#E1F28F]/30" : "opacity-40"}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${scanStep >= 3 ? "bg-[#E1F28F]/20 text-[#E1F28F] border-[#E1F28F]/40" : "bg-white/5 text-white/50 border-white/10"}`}
                      >
                        {scanStep >= 4 ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <LinkIcon className="w-3 h-3" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-[#E1F28F]">
                          AI Applied Auto-Fixes
                        </div>
                        <div className="text-[10px] text-[#E1F28F]/60">
                          28 new context links placed
                        </div>
                      </div>
                      {scanStep >= 3 && (
                        <div className="px-2 py-1 bg-[#E1F28F] text-[#0A2E22] text-[10px] font-bold rounded">
                          Fixed
                        </div>
                      )}
                    </div>

                    <div
                      className={`relative z-10 flex items-center gap-4 p-3 rounded-xl transition-all duration-500 ${scanStep >= 4 ? "opacity-100 bg-white/5 border border-emerald-500/20" : "opacity-30"}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${scanStep >= 4 ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-white/5 text-white/50 border-white/10"}`}
                      >
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-white">
                          SEO Growth
                        </div>
                        <div className="text-[10px] text-emerald-400 font-medium">
                          Rankings improving...
                        </div>
                      </div>
                      {scanStep >= 4 && (
                        <div className="flex flex-col items-end">
                          <span className="text-xs font-bold text-emerald-400">
                            +65%
                          </span>
                          <span className="text-[8px] text-white/40 uppercase tracking-wider">
                            Coverage
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card 1: AI Suggestion */}
            <div className="absolute top-6 -right-12 w-56 h-32 bg-white/8 backdrop-blur-lg rounded-lg border border-white/15 shadow-[0_4px_16px_0_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] opacity-90 animate-float1 animate-entry1 hover:scale-105 hover:bg-white/12 transition-all duration-300 z-20">
              <div className="p-3 text-xs">
                <div className="font-bold text-[#E1F28F] mb-1">AI Suggestion</div>
                <div className="text-white/80 mb-2">Add link from:<br/>"Technical SEO Guide" → "Crawl Budget Optimization"</div>
                <button className="bg-[#E1F28F]/20 text-[#E1F28F] px-2 py-1 rounded text-xs font-bold hover:bg-[#E1F28F]/30">Apply</button>
              </div>
            </div>

            {/* Floating Card 2: SEO Impact */}
            <div className="absolute bottom-12 -left-28 w-48 h-24 bg-white/8 backdrop-blur-lg rounded-lg border border-white/15 shadow-[0_4px_16px_0_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)] opacity-90 animate-float2 animate-entry2 hover:scale-105 hover:bg-white/12 transition-all duration-300 z-20">
              <div className="p-3 text-xs">
                <div className="font-bold text-emerald-400 mb-1">SEO Impact</div>
                <div className="text-white/80">+34% Internal Link Coverage<br/>+12 pages improved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
