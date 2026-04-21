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
      { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.15, duration: 1.2, ease: "power3.out", delay: 0.2 }
    );
  }, { scope: container });

  const domains = [
    { num: '01', title: 'Operational Systems', text: 'Proprietary enterprise management replacing limiting off-the-shelf SaaS. Tailored explicitly to your operational workflows, ensuring zero redundant data lakes.', glow: 'rgba(77, 127, 255, 0.1)' },
    { num: '02', title: 'Native Protocol Frameworks', text: 'High-performance mobile and web deployment using React Native and Next.js, guaranteeing offline-sync capacity for remote operations.', glow: 'rgba(232, 100, 42, 0.1)' },
    { num: '03', title: 'Secure Data Infrastructure', text: 'Complete digital sovereignty. We architect private server clusters and local compliance-heavy structures for Finance and Healthcare sectors.', glow: 'rgba(45, 212, 160, 0.1)' },
    { num: '04', title: 'Headless Architecture', text: 'Detaching frontend rendering from database logic to support 100x traffic scaling and sub-second execution for D2C environments.', glow: 'rgba(139, 92, 246, 0.1)' },
  ];

  return (
    <div ref={container} className="bg-void font-body text-text relative min-h-screen overflow-x-hidden selection:bg-accent2/30 selection:text-white pb-32">
      <Navbar />
      
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#4d7fff0a,transparent_50%)] pointer-events-none z-0"></div>
      <div className="hero-ruled-bg opacity-40"></div>

      <main className="pt-[140px] lg:pt-[200px] px-6 lg:px-16 max-w-[1400px] mx-auto relative z-10">
        <div className="reveal-hero font-mono text-[11px] font-bold tracking-[0.2em] text-accent uppercase mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-accent"></span> Architectural Capabilities
        </div>
        <h1 className="reveal-hero font-display font-medium text-[clamp(48px,6vw,96px)] text-white leading-[0.95] tracking-tighter mb-8 max-w-[900px]">
          Engineering without constraints.
        </h1>
        <p className="reveal-hero text-[16px] text-white/50 max-w-[600px] leading-[1.8] font-light mb-16">
          We replace commercial off-the-shelf software with bespoke operational logic. From custom Edge Compute deployments to enterprise identity networks, explore our engineering domain matrices.
        </p>

        <div className="reveal-hero w-full h-[1px] bg-white/10 mb-16"></div>

        <div className="reveal-hero grid grid-cols-1 md:grid-cols-2 gap-6">
           {domains.map((domain, idx) => (
             <div key={idx} className="bg-[#0b0f14] border border-white/5 p-10 lg:p-14 rounded-[2rem] overflow-hidden group hover:border-white/10 transition-colors duration-500 relative isolate">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen" style={{ backgroundImage: `radial-gradient(circle at 100% 0%, ${domain.glow}, transparent 50%)` }}></div>
                <div className="font-mono text-accent text-[12px] mb-6 tracking-widest">{domain.num}</div>
                <h3 className="font-display text-[32px] text-white mb-4 tracking-tight group-hover:text-accent2 transition-colors duration-300">{domain.title}</h3>
                <p className="text-white/40 leading-[1.8] font-light text-[15px]">{domain.text}</p>
             </div>
           ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
