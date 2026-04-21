"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function WhatWeDo() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.reveal-hero',
      { opacity: 0, y: 30, filter: "blur(5px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.12, duration: 1.2, ease: "power3.out", delay: 0.2 }
    );
  }, { scope: container });

  const domains = [
    { num: '01', title: 'Operational Systems', text: 'Proprietary enterprise management replacing limiting off-the-shelf SaaS. Tailored explicitly to your operational workflows, ensuring zero redundant data lakes.', glow: 'rgba(77, 127, 255, 0.15)', border: 'rgba(77,127,255,0.3)' },
    { num: '02', title: 'Native Protocol Frameworks', text: 'High-performance mobile and web deployment using React Native and Next.js, guaranteeing offline-sync capacity for remote operations and field teams.', glow: 'rgba(232, 100, 42, 0.15)', border: 'rgba(232,100,42,0.3)' },
    { num: '03', title: 'Secure Data Infrastructure', text: 'Complete digital sovereignty. We architect private server clusters and local compliance-heavy structures for Finance, Healthcare, and Defense sectors.', glow: 'rgba(45, 212, 160, 0.15)', border: 'rgba(45,212,160,0.3)' },
    { num: '04', title: 'Headless Architecture', text: 'Detaching frontend rendering from database logic to support 100x traffic scaling and sub-second execution for D2C and enterprise commerce environments.', glow: 'rgba(139, 92, 246, 0.15)', border: 'rgba(139,92,246,0.3)' },
    { num: '05', title: 'AI & Intelligent Automation', text: 'Secure, private LLM layers integrated directly into your core operations — document automation, intelligent routing, predictive analytics, and on-premise model hosting.', glow: 'rgba(236, 72, 153, 0.15)', border: 'rgba(236,72,153,0.3)' },
    { num: '06', title: 'IoT & Hardware Interfaces', text: 'Custom firmware, edge compute deployments, and hardware-software integration for physical infrastructure — from auditorium automation to factory floor sensor networks.', glow: 'rgba(20, 184, 166, 0.15)', border: 'rgba(20,184,166,0.3)' },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Diagnostic",
      duration: "Week 1–2",
      desc: "We begin by mapping your existing workflows, data architecture, and operational pain points. No proposals, no pitches — just a ruthless audit of where your current systems break down and what a precision-built replacement would unlock.",
      items: ["Operational workflow mapping", "Existing system architecture review", "Data flow & integration audit", "Stakeholder requirements extraction", "Competitive & compliance landscape assessment"],
      accent: "#e8642a",
    },
    {
      step: "02",
      title: "Architecture Design",
      duration: "Week 2–4",
      desc: "We design the system before we write a single line of code. This means database schemas, API contracts, security boundaries, and scalability projections — all documented and reviewed with your team before build begins.",
      items: ["System architecture blueprint", "Database schema design", "API contract specification", "Security & zero-trust boundaries", "Infrastructure & deployment strategy"],
      accent: "#4d7fff",
    },
    {
      step: "03",
      title: "Precision Build",
      duration: "Month 1–3",
      desc: "Iterative, milestone-based development with weekly client reviews. We don't disappear for three months and emerge with something you didn't ask for. You see the system taking shape at every stage.",
      items: ["Weekly milestone demonstrations", "Continuous integration pipeline from day one", "Test-driven core business logic", "Progressive handoff of completed modules", "Real-time progress visibility via staging environment"],
      accent: "#2fd4a0",
    },
    {
      step: "04",
      title: "Handoff & Sovereignty",
      duration: "Final 2 weeks",
      desc: "You own everything. Full source code, infrastructure access, documentation, and a 30-day post-launch support window. We don't create dependency. We create capability.",
      items: ["Complete source code ownership transfer", "Infrastructure access & documentation", "Team training and onboarding sessions", "30-day post-launch engineering support", "Architectural decision records for future teams"],
      accent: "#8b5cf6",
    },
  ];

  const stack = [
    { label: "Next.js", category: "Web", color: "#fff" },
    { label: "React Native", category: "Mobile", color: "#61dafb" },
    { label: "TypeScript", category: "Language", color: "#3178c6" },
    { label: "Node.js", category: "Backend", color: "#68a063" },
    { label: "PostgreSQL", category: "Database", color: "#336791" },
    { label: "Supabase", category: "BaaS", color: "#3ecf8e" },
    { label: "Prisma", category: "ORM", color: "#5a67d8" },
    { label: "Redis", category: "Cache", color: "#dc382d" },
    { label: "AWS", category: "Cloud", color: "#ff9900" },
    { label: "Electron", category: "Desktop", color: "#9feaf9" },
    { label: "Firebase", category: "Realtime", color: "#ffa000" },
    { label: "Docker", category: "DevOps", color: "#2496ed" },
    { label: "Tailwind CSS", category: "UI", color: "#38bdf8" },
    { label: "GSAP", category: "Animation", color: "#88ce02" },
    { label: "WatermelonDB", category: "Offline DB", color: "#14b8a6" },
    { label: "WebGL / Three.js", category: "3D", color: "#8b5cf6" },
  ];

  return (
    <div ref={container} className="bg-void font-body text-text relative overflow-x-hidden selection:bg-accent2/30 selection:text-white">
      <Navbar />

      {/* Background Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#4d7fff0a,transparent_50%)] pointer-events-none z-0"></div>
      <div className="hero-ruled-bg opacity-40"></div>

      {/* ── HERO ── */}
      <main className="pt-[140px] lg:pt-[200px] px-6 lg:px-16 max-w-[1400px] mx-auto relative z-10">
        <div className="reveal-hero font-mono text-[11px] font-bold tracking-[0.2em] text-accent uppercase mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-accent"></span> Architectural Capabilities
        </div>
        <h1 className="reveal-hero font-display font-medium text-[clamp(48px,6vw,96px)] text-white leading-[0.95] tracking-tighter mb-8 max-w-[900px]">
          Engineering without constraints.
        </h1>
        <p className="reveal-hero text-[16px] text-white/50 max-w-[600px] leading-[1.8] font-light mb-16">
          We replace commercial off-the-shelf software with bespoke operational logic. From custom Edge Compute deployments to enterprise identity networks and AI-powered automation pipelines.
        </p>

        <div className="reveal-hero w-full h-[1px] bg-white/10 mb-16"></div>

        {/* ── CAPABILITY DOMAINS ── */}
        <div className="reveal-hero grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-32">
          {domains.map((domain, idx) => (
            <div key={idx} className="bg-[#0b0f14] border border-white/5 p-10 rounded-2xl overflow-hidden group hover:border-white/10 transition-all duration-500 relative isolate">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle at 100% 0%, ${domain.glow}, transparent 60%)` }}></div>
              <div className="absolute top-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(to right, ${domain.border}, transparent)` }}></div>
              <div className="font-mono text-accent text-[11px] mb-6 tracking-widest">{domain.num}</div>
              <h3 className="font-display text-[28px] text-white mb-4 tracking-tight group-hover:text-white transition-colors duration-300 leading-tight">{domain.title}</h3>
              <p className="text-white/40 leading-[1.8] font-light text-[14px] group-hover:text-white/60 transition-colors duration-500">{domain.text}</p>
            </div>
          ))}
        </div>

        {/* ── NOT FOR EVERYONE ── */}
        <div className="reveal-hero mb-32 border border-white/5 rounded-3xl p-10 lg:p-16 bg-white/[0.01] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(232,100,42,0.05),transparent_60%)] pointer-events-none"></div>
          <div className="font-mono text-[10px] font-bold tracking-[0.2em] text-accent uppercase mb-6 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-accent"></span> Qualification Criteria
          </div>
          <h2 className="font-display font-medium text-[clamp(36px,4vw,60px)] text-white leading-[1.05] tracking-tight mb-8 max-w-[800px]">
            We are not for everyone. Intentionally.
          </h2>
          <p className="text-[16px] text-white/50 font-light leading-[1.8] max-w-[700px] mb-12">
            We don't build MVPs to validate ideas. We don't take on clients who need something cheap and fast. We build mission-critical systems for organisations that already know exactly what they need and cannot afford to get it wrong.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "We are the right fit if…", items: ["You have an operational problem that generic software cannot solve", "You've outgrown your existing system and need a rebuild", "You're in a regulated industry where security and compliance are non-negotiable", "You want to own your system entirely — no vendor lock-in", "You're building for a 5–10 year operational horizon"], positive: true },
              { label: "We are not the right fit if…", items: ["You need an MVP built for ₹50,000 to pitch to investors", "You want an agency that will agree with your existing technical decisions", "You need something delivered this week", "You're not willing to invest in architecture before build", "You're looking for the cheapest quote"], positive: false },
            ].map((col, i) => (
              <div key={i} className={`rounded-2xl border p-8 ${col.positive ? 'border-[#2fd4a0]/15 bg-[#2fd4a0]/[0.03]' : 'border-white/5 bg-white/[0.02]'}`}>
                <div className={`font-mono text-[10px] uppercase tracking-[0.15em] mb-6 ${col.positive ? 'text-[#2fd4a0]' : 'text-white/30'}`}>{col.label}</div>
                <ul className="flex flex-col gap-3">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-[14px] text-white/60 font-light leading-[1.7]">
                      <span className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${col.positive ? 'bg-[#2fd4a0]' : 'bg-white/20'}`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── HOW WE WORK ── */}
        <div className="reveal-hero mb-32">
          <div className="font-mono text-[10px] font-bold tracking-[0.2em] text-accent2 uppercase mb-6 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-accent2"></span> Engagement Process
          </div>
          <h2 className="font-display font-medium text-[clamp(36px,4vw,60px)] text-white leading-[1.05] tracking-tight mb-6">
            How we work.
          </h2>
          <p className="text-[15px] text-white/50 font-light leading-[1.8] max-w-[600px] mb-16">
            Every BITSS engagement follows the same disciplined four-phase model. No surprises, no scope creep, no systems you can't understand or maintain.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {process.map((p, idx) => (
              <div key={idx} className="group relative bg-[#0b0f14] border border-white/5 rounded-2xl p-10 hover:border-white/10 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to right, ${p.accent}, transparent)` }}></div>
                <div className="flex items-start justify-between mb-6">
                  <div className="font-mono text-[11px] tracking-[0.1em] font-bold text-white/20">{p.step}</div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.15em] px-3 py-1 rounded-full border border-white/10 text-white/30">{p.duration}</div>
                </div>
                <h3 className="font-display text-[26px] text-white mb-4 leading-tight" style={{ color: idx === 0 ? '#fff' : '#fff' }}>{p.title}</h3>
                <p className="text-[14px] text-white/50 font-light leading-[1.8] mb-8">{p.desc}</p>
                <ul className="flex flex-col gap-2.5">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-[13px] text-white/40 font-light">
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: p.accent }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── STACK WE MASTER ── */}
        <div className="reveal-hero mb-32">
          <div className="font-mono text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-6 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-white/20"></span> Technology Stack
          </div>
          <h2 className="font-display font-medium text-[clamp(36px,4vw,60px)] text-white leading-[1.05] tracking-tight mb-6">
            The stack we build on.
          </h2>
          <p className="text-[15px] text-white/50 font-light leading-[1.8] max-w-[600px] mb-16">
            Not a list of things we've touched. A list of technologies we operate at production depth — the ones powering live enterprise systems today.
          </p>

          <div className="flex flex-wrap gap-3">
            {stack.map((tech, idx) => (
              <div key={idx}
                className="group flex items-center gap-3 px-5 py-3 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15 transition-all duration-300 cursor-default">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: tech.color, boxShadow: `0 0 6px ${tech.color}` }}></div>
                <span className="font-mono text-[12px] text-white/70 group-hover:text-white transition-colors">{tech.label}</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/20 group-hover:text-white/40 transition-colors">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── FINAL CTA ── */}
        <div className="reveal-hero mb-32 text-center py-20 border-t border-white/5">
          <h2 className="font-display font-medium text-[clamp(40px,5vw,72px)] text-white leading-none mb-6">
            Ready to architect something serious?
          </h2>
          <p className="text-[15px] text-white/50 font-light mb-12 max-w-[420px] mx-auto leading-[1.8]">
            If your operational problem needs precision engineering — not a generic SaaS subscription — let's talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/deployments" className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full transition-all hover:bg-white/10 w-full sm:w-auto text-center">
              View Our Deployments
            </Link>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("bitss-engage"))}
              className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-10 py-4 bg-white text-void rounded-full shadow-[0_5px_30px_rgba(255,255,255,0.15)] transition-all hover:scale-105 hover:bg-accent2 hover:text-white w-full sm:w-auto text-center"
            >
              Start the Conversation →
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
