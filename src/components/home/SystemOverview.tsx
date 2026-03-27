import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe, Radar, BarChart3, CheckCircle, ArrowRight,
  AlertTriangle, Link as LinkIcon, FileText, Zap,
  Eye, ChevronRight, Sparkles, Terminal, MousePointer2,
} from 'lucide-react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ScrollReveal from '../ScrollReveal';
import homeData from '../../data/pages/home.json';
import logo from '../../assets/logo.png';

// ─── Config ──────────────────────────────────────────────────────────────────
const STEP_DURATIONS = [2500, 8000, 3000, 4000]; // ms each step stays (generous reading time)
const TICK_MS = 50;
const CIRC = 2 * Math.PI * 17; // SVG countdown ring circumference (r=17)

const data = (homeData as any).system_overview || {};

const iconMap: Record<string, any> = { Globe, Radar, AlertTriangle, BarChart3 };

const flowSteps = (data.flow_steps || []).map((step: any) => ({
  ...step,
  icon: iconMap[step.icon] || Globe
}));

const activityData = [
  { name: 'Mon', value: 20 }, { name: 'Tue', value: 30 }, { name: 'Wed', value: 25 },
  { name: 'Thu', value: 35 }, { name: 'Fri', value: 45 }, { name: 'Sat', value: 50 }, { name: 'Sun', value: 60 },
];

const criticalIssues = data.critical_issues || [];

const issueItems = [
  { label: 'Orphan Pages', count: 12, barColor: 'bg-red-500', pct: 75 },
  { label: 'Broken Links', count: 8, barColor: 'bg-amber-400', pct: 50 },
  { label: 'Weak Anchors', count: 23, barColor: 'bg-orange-400', pct: 90 },
  { label: 'Opportunities', count: 28, barColor: 'bg-[#E1F28F]', pct: 100 },
];

const scanLogs = [
  '/home', '/about', '/blog', '/services/seo',
  '/blog/technical-seo', '/products/', '/blog/crawl-budget', '/services/audit',
];

const sidebarNav = [
  { label: 'Overview', icon: BarChart3, active: true },
  { label: 'Pages', icon: FileText, active: false },
  { label: 'Issues', icon: AlertTriangle, active: false },
  { label: 'Links', icon: LinkIcon, active: false },
  { label: 'Visibility', icon: Eye, active: false },
  { label: 'Integrations', icon: Globe, active: false },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────
function useTypewriter(text: string, speed = 70, delayMs = 0) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    let interval: any;
    const t = setTimeout(() => {
      interval = setInterval(() => {
        if (i < text.length) { setDisplayed(text.slice(0, i + 1)); i++; }
        else clearInterval(interval);
      }, speed);
    }, delayMs);
    return () => { clearTimeout(t); clearInterval(interval); };
  }, [text, speed, delayMs]);
  return displayed;
}

function useCountUp(target: number, duration = 1400, delay = 0) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf: number;
    const timeout = setTimeout(() => {
      let startTime: number | null = null;
      const step = (ts: number) => {
        if (!startTime) startTime = ts;
        const p = Math.min((ts - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(eased * target));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => { clearTimeout(timeout); cancelAnimationFrame(raf); };
  }, [target, duration, delay]);
  return val;
}

// ─── Panel transition variants ────────────────────────────────────────────────
const panelVariants = {
  enter: { opacity: 0, y: 14, scale: 0.97 },
  center: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -8, scale: 0.99 },
};

// ─── Animated Cursor ──────────────────────────────────────────────────────────
function AnimatedCursor({ animate, transition }: { animate: any, transition: any }) {
  return (
    <motion.div
      className="absolute z-50 pointer-events-none"
      initial={{ top: '90%', left: '80%', opacity: 0 }}
      animate={animate}
      transition={transition}
      style={{ marginLeft: '-12px', marginTop: '-12px' }}
    >
      <MousePointer2 className="w-8 h-8 text-white fill-emerald-500/90" strokeWidth={1.5} style={{ filter: 'drop-shadow(0px 8px 12px rgba(0,0,0,0.6))' }} />
    </motion.div>
  );
}

// ─── Browser chrome ───────────────────────────────────────────────────────────
function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-white/10">
      <span className="w-3 h-3 rounded-full bg-red-500/70" />
      <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
      <span className="w-3 h-3 rounded-full bg-green-500/70" />
      <div className="ml-3 px-3 py-1 bg-white/5 rounded text-[11px] font-mono text-white/50 flex-1 flex items-center gap-2 border border-white/5">
        <span className="w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse" />
        {url}
      </div>
    </div>
  );
}

// ─── Step 0: URL Entry ────────────────────────────────────────────────────────
function URLEntryPanel() {
  const typed = useTypewriter('yourwebsite.com', 80, 500);
  const done = typed === 'yourwebsite.com';
  return (
    <div className="rounded-2xl bg-[#0A2E22] border border-[#0A2E22]/20 shadow-[0_20px_60px_-10px_rgba(10,46,34,0.3)] overflow-hidden relative">
      <AnimatedCursor 
        animate={{
          top:   ['90%', '52%', '52%', '52%', '84%', '84%', '84%'],
          left:  ['80%', '20%', '20%', '20%', '50%', '50%', '50%'],
          scale: [1,     1,     0.85,  1,     1,     0.85,  1],
          opacity:[0,    1,     1,     1,     1,     1,     0]
        }}
        transition={{
          duration: 2.5,
          times: [0, 0.16, 0.18, 0.70, 0.86, 0.90, 1],
          ease: "easeInOut"
        }}
      />
      <BrowserChrome url="dash.dofollo.ai/scan" />
      <div className="p-7 space-y-6">
        <div>
          <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">Step 1 of 4</div>
          <h4 className="text-lg font-extrabold text-white mb-1">Enter your website URL</h4>
          <p className="text-sm text-white/50">Our AI maps your entire structure in under 60 seconds.</p>
        </div>

        {/* URL input with typewriter */}
        <div className="flex items-center gap-3 bg-white/5 border border-white/20 rounded-xl px-4 py-3.5">
          <Globe className="w-4 h-4 text-white/40 shrink-0" />
          <span className="text-sm font-mono text-white flex-1">
            {typed}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.6, repeatType: 'reverse' }}
              className="inline-block w-0.5 h-[14px] bg-[#E1F28F] align-middle ml-0.5"
            />
          </span>
          {done && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
              <CheckCircle className="w-4 h-4 text-emerald-400" />
            </motion.div>
          )}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 6 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-4 text-[11px] text-white/50"
        >
          {['No credit card', 'Scan in 60s', 'Free tier'].map((t) => (
            <span key={t} className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-400" /> {t}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href="https://dash.dofollo.ai/" target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 10 }}
          transition={{ duration: 0.35, delay: 0.12 }}
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#E1F28F] text-[#0A2E22] rounded-xl font-bold text-sm hover:bg-white transition-colors"
        >
          Start AI Scan <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </div>
  );
}

// ─── Step 1 (id=1): Scanning ─────────────────────────────────────────────────
function ScanningPanel({ progress }: { progress: number }) {
  const pagesScanned = Math.round((progress / 100) * 1240);
  const issuesFound = Math.round((progress / 100) * 142);
  const logsVisible = Math.floor((progress / 100) * scanLogs.length);
  const showIssuePing = progress > 30 && issuesFound > 0;

  return (
    <div className="rounded-2xl bg-[#0A2E22] border border-[#0A2E22]/20 shadow-[0_20px_60px_-10px_rgba(10,46,34,0.3)] overflow-hidden relative">
      <AnimatedCursor 
        animate={{
          top:   ['80%', '65%', '65%', '45%', '45%', '80%'],
          left:  ['80%', '50%', '50%', '70%', '70%', '80%'],
          scale: [1,     1,     1,     1,     1,     1],
          opacity:[0,    1,     1,     1,     1,     0]
        }}
        transition={{
          duration: 8,
          times: [0, 0.1, 0.4, 0.6, 0.9, 1],
          ease: "easeInOut"
        }}
      />
      <BrowserChrome url="dash.dofollo.ai/scan" />
      <div className="p-6 space-y-4">

        {/* Header row: spinner + live counters */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h4 className="text-base font-bold text-white flex items-center gap-2.5 mb-1">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.0, ease: 'linear' }}>
                <Radar className="w-5 h-5 text-[#E1F28F] shrink-0" />
              </motion.div>
              Scanning: yourwebsite.com
            </h4>
            <p className="text-xs text-white/50 font-mono">{Math.round(progress)}% complete</p>
          </div>
          {/* Live stats */}
          <div className="flex gap-4 shrink-0">
            <div className="text-right">
              <div className="text-xl font-mono text-[#E1F28F] font-extrabold tabular-nums leading-none">{pagesScanned.toLocaleString()}</div>
              <div className="text-[9px] text-white/30 uppercase tracking-wider">pages</div>
            </div>
            <div className="text-right">
              <motion.div
                key={issuesFound}
                initial={{ scale: showIssuePing ? 1.25 : 1, color: '#fca5a5' }}
                animate={{ scale: 1, color: '#fbbf24' }}
                transition={{ duration: 0.25 }}
                className="text-xl font-mono font-extrabold tabular-nums leading-none"
              >
                {issuesFound}
              </motion.div>
              <div className="text-[9px] text-white/30 uppercase tracking-wider">issues</div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div>
          <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#045C4E] to-[#E1F28F] rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-white/30 font-mono mt-1">
            <span>{pagesScanned.toLocaleString()} pages crawled</span>
            <span>1,240 total</span>
          </div>
        </div>

        {/* Issue-found toast — pulses when a new issue batch is found */}
        <AnimatePresence>
          {showIssuePing && (
            <motion.div
              key={Math.floor(issuesFound / 8)}
              initial={{ opacity: 0, y: -6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 bg-amber-500/10 border border-amber-400/25 rounded-xl px-4 py-2.5"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              </motion.div>
              <span className="text-xs text-amber-200/80 font-mono">
                {issuesFound} issue{issuesFound !== 1 ? 's' : ''} detected so far…
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Terminal log */}
        <div className="bg-black/30 rounded-xl p-4 font-mono text-[11px] min-h-[130px]">
          <div className="text-white/30 mb-2 flex items-center gap-1.5">
            <Terminal className="w-3 h-3" /> Crawl log
          </div>
          <div className="space-y-1.5">
            {scanLogs.slice(0, logsVisible).map((log) => (
              <motion.div
                key={log}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.22 }}
                className="flex items-center gap-2 text-white/70"
              >
                <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>{log}</span>
              </motion.div>
            ))}
            {logsVisible < scanLogs.length && (
              <div className="flex items-center gap-2 text-white/35">
                <motion.span
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ repeat: Infinity, duration: 0.85 }}
                  className="w-2.5 h-2.5 rounded-full bg-[#E1F28F]/50 shrink-0"
                />
                <span>crawling…</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Step 2: Issues Detected ──────────────────────────────────────────────────
function IssuesPanel() {
  const issueCount = useCountUp(142, 900, 250);
  return (
    <div className="rounded-2xl bg-[#0A2E22] border border-[#0A2E22]/20 shadow-[0_20px_60px_-10px_rgba(10,46,34,0.3)] overflow-hidden relative">
      <AnimatedCursor 
        animate={{
          top:   ['90%', '86%', '86%', '88%'],
          left:  ['80%', '50%', '50%', '50%'],
          scale: [1,     1,     0.85,  1],
          opacity:[0,    1,     1,     0]
        }}
        transition={{
          duration: 3,
          times: [0, 0.75, 0.80, 1],
          ease: "easeOut"
        }}
      />
      <BrowserChrome url="dash.dofollo.ai/scan" />
      <div className="p-6 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <h4 className="text-base font-bold text-white">Scan Complete</h4>
            </div>
            <p className="text-xs text-white/50 font-mono">1,240 pages analysed</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.2 }}
            className="text-right"
          >
            <div className="text-3xl font-mono text-amber-400 font-extrabold tabular-nums">{issueCount}</div>
            <div className="text-[10px] text-white/30 uppercase tracking-widest">Issues</div>
          </motion.div>
        </div>

        {/* Progress bar — complete */}
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#045C4E] to-amber-400 rounded-full"
            initial={{ width: '55%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
        </div>

        {/* Issue bars — staggered */}
        <div className="space-y-3">
          {issueItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.38, delay: 0.3 + i * 0.17 }}
              className="space-y-1.5"
            >
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/80">{item.label}</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.17 }}
                  className="font-bold text-[#E1F28F] tabular-nums"
                >
                  {item.count}
                </motion.span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${item.barColor} rounded-full`}
                  initial={{ width: '0%' }}
                  animate={{ width: `${item.pct}%` }}
                  transition={{ duration: 0.65, delay: 0.45 + i * 0.17, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="https://dash.dofollo.ai/" target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 1.1 }}
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#E1F28F] text-[#0A2E22] rounded-xl font-bold text-sm hover:bg-white transition-colors"
        >
          Fix All Issues with Dofollo <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>
    </div>
  );
}

// ─── Step 3 (id=3): Dashboard ────────────────────────────────────────────────
function DashboardPanel() {
  const healthScore = useCountUp(38, 2000, 500);
  return (
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="rounded-2xl bg-gradient-to-b from-[#0A2E22] to-[#0F3D2F] border border-white/10 shadow-[0_20px_60px_-10px_rgba(10,46,34,0.35)] overflow-hidden relative"
    >
      <AnimatedCursor 
        animate={{
          top:   ['90%', '13%', '13%', '15%'],
          left:  ['80%', '85%', '85%', '85%'],
          scale: [1,     1,     0.85,  1],
          opacity:[0,    1,     1,     0]
        }}
        transition={{
          duration: 4,
          times: [0, 0.65, 0.70, 1],
          ease: "easeOut"
        }}
      />
      <div className="flex h-[480px]">
        {/* Sidebar */}
        <div className="w-44 border-r border-white/10 bg-[#0A2E22]/80 p-4 flex flex-col">
          <div className="mb-6"><img src={logo} alt="Dofollo" className="h-7 w-auto" /></div>
          <div className="text-[9px] font-bold text-white/30 uppercase tracking-wider mb-3">SITES</div>
          <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-[11px] text-white/60 mb-2 flex items-center justify-between">
            <span className="truncate">yourwebsite.com</span>
            <ChevronRight className="w-3 h-3 shrink-0" />
          </div>
          <nav className="space-y-0.5 mt-4">
            {sidebarNav.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + idx * 0.06 }}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[11px] font-medium ${item.active ? 'bg-[#E1F28F]/10 text-[#E1F28F]' : 'text-white/50'}`}
                >
                  <Icon className="w-3.5 h-3.5" /> {item.label}
                </motion.div>
              );
            })}
          </nav>
          <div className="mt-auto pt-4 border-t border-white/10">
            <div className="text-[9px] font-bold text-white/30 uppercase tracking-wider mb-2">CURRENT PLAN</div>
            <div className="text-xs font-semibold text-white/70 mb-2">Free</div>
            <div className="space-y-1 text-[10px] text-white/40">
              <div>Fixes <span className="text-white/60">7/10</span></div>
              <div>Sites <span className="text-white/60">3/3</span></div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
            <div>
              <div className="text-xs font-semibold text-white">yourwebsite.com Overview</div>
              <div className="text-[10px] text-white/40">Strategic insights for your domain</div>
            </div>
            <motion.button
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: 'spring', stiffness: 220, damping: 15 }}
              className="px-3 py-1.5 text-[11px] font-bold bg-[#E1F28F] text-[#0A2E22] rounded-lg flex items-center gap-1.5"
            >
              <Zap className="w-3 h-3" /> Auto-Fix All
            </motion.button>
          </div>

          <div className="flex-1 p-4 overflow-auto space-y-4">
            {/* Score + chart */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.82, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5, type: 'spring', stiffness: 180 }}
                className="bg-gradient-to-br from-[#0A5C4E] to-[#0A2E22] rounded-xl p-4 border border-white/10"
              >
                <div className="text-[9px] font-bold text-white/40 uppercase tracking-wider mb-2">SITE HEALTH</div>
                <div className="text-3xl font-extrabold text-white tabular-nums">{healthScore}</div>
                <div className="text-[10px] text-white/40 mb-3">/100</div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#E1F28F] rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '38%' }}
                    transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.45, ease: 'easeOut' }}
                className="col-span-2 bg-white/[0.03] rounded-xl p-4 border border-white/10"
              >
                <div className="text-xs font-semibold text-white mb-2">Activity</div>
                <ResponsiveContainer width="100%" height={95}>
                  <LineChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.2)" style={{ fontSize: '9px' }} />
                    <YAxis stroke="rgba(255,255,255,0.2)" style={{ fontSize: '9px' }} />
                    <Tooltip contentStyle={{ backgroundColor: '#0A2E22', border: 'none', borderRadius: '8px', color: 'white', fontSize: '11px' }} />
                    <Line type="monotone" dataKey="value" stroke="#E1F28F" strokeWidth={2} dot={false} isAnimationActive={true} animationDuration={1200} animationBegin={400} />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </div>

            {/* Critical issues */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.4 }}
              className="bg-white/[0.03] rounded-xl p-4 border border-white/10"
            >
              <div className="text-xs font-semibold text-white mb-3">Critical Issues Summary</div>
              <div className="space-y-1.5">
                {criticalIssues.map((issue, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.12, duration: 0.3 }}
                    className="flex items-center justify-between text-[11px]"
                  >
                    <span className="text-white/70">{issue.type}</span>
                    <span className={`font-bold ${issue.color}`}>{issue.pages}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick wins */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.65, duration: 0.45 }}
              className="bg-[#E1F28F]/5 rounded-xl p-4 border border-[#E1F28F]/10"
            >
              <div className="text-xs font-semibold text-[#E1F28F] mb-2 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" /> Top Quick Wins
              </div>
              {(data.quick_wins || []).map((win: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.85 + i * 0.18, duration: 0.3 }}
                  className="text-[11px] text-white/70 mb-1.5 flex items-center gap-2"
                >
                  <CheckCircle className="w-3 h-3 text-[#E1F28F] shrink-0" /> {win}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function SystemOverview() {
  const [activeStep, setActiveStep] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);

  const sectionRef = React.useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Monitor progress and advance step when complete
  useEffect(() => {
    if (stepProgress >= 100) {
      setActiveStep((s) => (s + 1) % 4);
      setStepProgress(0);
    }
  }, [stepProgress]);

  // Tick progress upward (only when in view)
  useEffect(() => {
    if (!inView) return;
    const inc = (100 / STEP_DURATIONS[activeStep]) * TICK_MS;
    const interval = setInterval(() => {
      setStepProgress((prev) => Math.min(prev + inc, 100));
    }, TICK_MS);
    return () => clearInterval(interval);
  }, [activeStep, inView]);

  const handleClick = (id: number) => {
    setActiveStep(id);
    setStepProgress(0);
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white text-[#0A2E22] relative overflow-hidden">
      {/* Glows — subdued */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#E1F28F]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-[#045C4E]/4 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0A2E22]/6 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A2E22]/5 border border-[#0A2E22]/10 text-[#045C4E] font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" /> {data.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-tight text-[#0A2E22]">
            {data.heading_first} <span className="text-[#045C4E]">{data.heading_highlight}</span>
          </h2>
          <p className="text-[#0A2E22]/60 text-lg leading-relaxed max-w-xl mx-auto" dangerouslySetInnerHTML={{ __html: data.description }}>
          </p>
        </ScrollReveal>

        {/* Connector — removes perceived complexity */}
        <ScrollReveal variant="fade-up" delay={0.04} className="text-center mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#045C4E]/60">
            {data.connector}
          </p>
        </ScrollReveal>

        {/* ── Progress Stepper ─────────────────────────────────────── */}
        <ScrollReveal variant="fade-up" delay={0.05} className="max-w-3xl mx-auto mb-14">
          <div className="relative flex items-start justify-between">
            {/* Background connector */}
            <div className="absolute top-5 left-5 right-5 h-px bg-[#0A2E22]/10 z-0" />
            {/* Filled connector */}
            <motion.div
              className="absolute top-5 left-5 h-px bg-gradient-to-r from-[#045C4E] to-[#E1F28F] origin-left z-0"
              animate={{ width: `${(activeStep / (flowSteps.length - 1)) * (100 - (100 / flowSteps.length))}%` }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
            />

            {flowSteps.map((step) => {
              const Icon = step.icon;
              const isDone = step.id < activeStep;
              const isActive = step.id === activeStep;

              return (
                <button
                  key={step.id}
                  onClick={() => handleClick(step.id)}
                  className="relative z-10 flex flex-col items-center gap-2 group w-20"
                >
                  {/* Circle + countdown ring */}
                  <div className="relative w-10 h-10">
                    {/* Ping ring on active */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#E1F28F]/60"
                        animate={{ scale: [1, 1.55], opacity: [0.7, 0] }}
                        transition={{ repeat: Infinity, duration: 1.4, ease: 'easeOut' }}
                      />
                    )}
                    {/* SVG countdown ring */}
                    {isActive && (
                      <svg className="absolute inset-0 w-10 h-10 -rotate-90 pointer-events-none" viewBox="0 0 40 40">
                        <circle
                          cx="20" cy="20" r="17"
                          fill="none"
                          stroke="#045C4E"
                          strokeWidth="2.5"
                          strokeDasharray={CIRC}
                          strokeDashoffset={CIRC * (1 - stepProgress / 100)}
                          strokeLinecap="round"
                          style={{ transition: `stroke-dashoffset ${TICK_MS}ms linear` }}
                        />
                      </svg>
                    )}

                    {/* Circle body */}
                    <motion.div
                      animate={{
                        backgroundColor: isActive ? '#E1F28F' : isDone ? '#045C4E' : 'rgba(10,46,34,0.06)',
                        borderColor: isActive ? '#E1F28F' : isDone ? '#045C4E' : 'rgba(10,46,34,0.12)',
                        scale: isActive ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 18 }}
                      className="absolute inset-0 rounded-full flex items-center justify-center border-2 z-10"
                      style={{ color: isActive ? '#0A2E22' : isDone ? 'white' : 'rgba(10,46,34,0.35)' }}
                    >
                      <AnimatePresence mode="wait">
                        {isDone ? (
                          <motion.span key="chk" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0 }} transition={{ type: 'spring', stiffness: 280, damping: 16 }}>
                            <CheckCircle className="w-4 h-4" />
                          </motion.span>
                        ) : (
                          <motion.span key="ico" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} transition={{ duration: 0.2 }}>
                            <Icon className="w-4 h-4" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  {/* Label */}
                  <span className={`text-xs font-bold text-center leading-tight transition-colors duration-300 ${isActive ? 'text-[#045C4E]' : isDone ? 'text-[#0A2E22]/55' : 'text-[#0A2E22]/28 group-hover:text-[#0A2E22]/50'}`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ── Main Grid ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Step list */}
          <div className="space-y-2">
            {flowSteps.map((step) => {
              const Icon = step.icon;
              const isActive = step.id === activeStep;
              const isDone = step.id < activeStep;

              return (
                <ScrollReveal key={step.id} variant="fade-up" delay={step.id * 0.06}>
                  <motion.div
                    onClick={() => handleClick(step.id)}
                    className={`flex items-start gap-5 p-5 rounded-2xl border cursor-pointer transition-colors ${
                      isActive
                        ? 'border-l-4 border-l-[#045C4E] border-[#045C4E]/15 pl-4'
                        : 'border-transparent hover:bg-[#0A2E22]/[0.02]'
                    }`}
                    animate={{
                      backgroundColor: isActive ? 'rgba(4,92,78,0.06)' : 'transparent',
                      boxShadow: isActive ? '0 6px 24px rgba(4,92,78,0.1)' : 'none',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon */}
                    <motion.div
                      animate={{
                        backgroundColor: isActive ? '#E1F28F' : isDone ? 'rgba(4,92,78,0.1)' : 'rgba(10,46,34,0.05)',
                        scale: isActive ? 1.06 : 1,
                      }}
                      transition={{ duration: 0.28, type: 'spring', stiffness: 200 }}
                      className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border border-[#0A2E22]/10"
                      style={{ color: isActive ? '#0A2E22' : isDone ? '#045C4E' : 'rgba(10,46,34,0.35)' }}
                    >
                      {isDone ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <span className={`text-[10px] font-black tracking-wider block mb-0.5 transition-colors ${isActive ? 'text-[#045C4E]/70' : 'text-[#0A2E22]/18'}`}>
                        STEP {step.number}
                      </span>
                      <h3 className={`text-base font-bold mb-1 transition-colors ${isActive ? 'text-[#0A2E22]' : 'text-[#0A2E22]/38'}`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-[#0A2E22]/68' : 'text-[#0A2E22]/22'}`}>
                        {step.desc}
                      </p>

                      {/* Detail badge — expands on active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: '10px' }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.28, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="inline-flex items-center gap-1.5 text-[11px] text-[#045C4E] font-mono bg-[#045C4E]/6 px-3 py-1.5 rounded-lg border border-[#045C4E]/14">
                              <CheckCircle className="w-3 h-3 shrink-0" /> {step.detail}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Right: Animated panels */}
          <ScrollReveal variant="slide-left" delay={0.08}>
            <div className="sticky top-8">
              {/* Live preview label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0A2E22]/35">
                  {data.live_preview_label}
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  variants={panelVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  {activeStep === 0 && <URLEntryPanel />}
                  {activeStep === 1 && <ScanningPanel progress={stepProgress} />}
                  {activeStep === 2 && <IssuesPanel />}
                  {activeStep === 3 && <DashboardPanel />}
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
