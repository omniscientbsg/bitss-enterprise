"use client";

import Navbar from "@/components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Link from "next/link";

export default function WhatWeThink() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.reveal-hero', 
      { opacity: 0, y: 30, filter: "blur(5px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.15, duration: 1.2, ease: "power3.out", delay: 0.2 }
    );
  }, { scope: container });

  return (
    <div ref={container} className="bg-[#020305] font-body text-text relative min-h-screen overflow-x-hidden selection:bg-accent/30 selection:text-white pb-32">
      <Navbar />
      
      <main className="pt-[140px] lg:pt-[200px] px-6 lg:px-16 max-w-[1200px] mx-auto">
        <div className="reveal-hero font-mono text-[11px] font-medium tracking-[0.2em] text-accent2 uppercase mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-accent2"></span> Philosophy & Vision
        </div>
        <h1 className="reveal-hero font-display font-medium text-[clamp(48px,6vw,84px)] text-white leading-[1.05] tracking-tight mb-8">
          The Engineering<br/> Journal.
        </h1>
        <p className="reveal-hero text-[16px] text-white/60 max-w-[600px] leading-[1.8] font-light mb-16">
          Explore our latest insights on deep isolation protocols, headless commerce scaling, and the future of predictive architectural modeling.
        </p>

        <div className="reveal-hero w-full h-[1px] bg-white/10 mb-16"></div>

        <div className="reveal-hero flex flex-col gap-12">
           {[1,2,3].map((it) => (
             <Link href="#" key={it} className="group grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 border-b border-white/5 pb-12">
                <div>
                   <div className="font-mono text-[10px] text-accent tracking-[0.1em] uppercase mb-4">Volume 0{it}</div>
                   <h3 className="font-display text-[32px] md:text-[42px] text-white leading-tight mb-4 group-hover:text-accent2 transition-colors">Resolving Microservice Bottlenecks at Scale</h3>
                   <p className="text-[15px] font-light text-white/50 leading-relaxed max-w-[600px]">A deep dive into how we architected the boAt D2C headless infrastructure to survive absolute maximum throughput during holiday flash sales without dropping a single packet.</p>
                </div>
                <div className="flex items-center md:justify-end">
                   <div className="font-mono text-[11px] uppercase tracking-widest text-white/30 border border-white/10 rounded-full px-6 py-2 group-hover:bg-white group-hover:text-void group-hover:border-white transition-all">
                      Read Article
                   </div>
                </div>
             </Link>
           ))}
        </div>
      </main>
    </div>
  );
}
