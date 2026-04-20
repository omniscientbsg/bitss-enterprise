"use client";

import Navbar from "@/components/Navbar";
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

  return (
    <div ref={container} className="bg-void font-body text-text relative min-h-screen overflow-x-hidden selection:bg-accent2/30 selection:text-white pb-32">
      <Navbar />
      
      <main className="pt-[140px] lg:pt-[200px] px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="reveal-hero font-mono text-[11px] font-medium tracking-[0.2em] text-accent uppercase mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-accent"></span> Architectural Engineering
        </div>
        <h1 className="reveal-hero font-display font-medium text-[clamp(48px,6vw,84px)] text-white leading-[1.05] tracking-tight mb-8">
          The Full-Stack<br/> Capability Matrix.
        </h1>
        <p className="reveal-hero text-[16px] text-white/60 max-w-[600px] leading-[1.8] font-light mb-16">
          We replace commercial off-the-shelf software with bespoke operational logic. From custom Edge Compute deployments to Military-grade identity networks, explore our 8 engineering domains.
        </p>

        <div className="reveal-hero w-full h-[1px] bg-white/10 mb-16"></div>

        <div className="reveal-hero grid grid-cols-1 md:grid-cols-2 gap-8">
           {[1,2,3,4,5,6,7,8].map((it) => (
             <div key={it} className="bg-white/[0.02] border border-white/5 p-10 rounded-3xl hover:bg-white/[0.04] transition-all duration-300 group">
                <div className="font-mono text-accent text-[12px] mb-4">Domain 0{it}</div>
                <h3 className="font-display text-[32px] text-white mb-4 group-hover:text-accent2 transition-colors">Engineering Protocol {it}</h3>
                <p className="text-white/50 leading-relaxed font-light text-[14px]">Detailed architectural deep dive into this specific discipline. Explaining exactly how BITSS protocols outperform standard SaaS alternatives by bypassing redundant API layers.</p>
             </div>
           ))}
        </div>
      </main>
    </div>
  );
}
