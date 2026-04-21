"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// Custom Icons for Capabilities Matrix
const Icons = {
  software: () => (
    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="3" y="3" width="7" height="7" strokeWidth="1" /><rect x="14" y="3" width="7" height="7" strokeWidth="1" />
      <rect x="14" y="14" width="7" height="7" strokeWidth="1" /><rect x="3" y="14" width="7" height="7" strokeWidth="1" />
    </svg>
  ),
  apps: () => (
    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="5" y="2" width="14" height="20" rx="0" strokeWidth="1"/><line x1="12" y1="18" x2="12" y2="18" strokeWidth="2" strokeLinecap="square"/>
    </svg>
  ),
  ai: () => (
    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="3" strokeWidth="1"/><line x1="12" y1="2" x2="12" y2="6" strokeWidth="1"/><line x1="12" y1="18" x2="12" y2="22" strokeWidth="1"/>
      <line x1="2" y1="12" x2="6" y2="12" strokeWidth="1"/><line x1="18" y1="12" x2="22" y2="12" strokeWidth="1"/>
      <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" strokeWidth="1"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" strokeWidth="1"/>
    </svg>
  ),
  ecom: () => (
    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <circle cx="9" cy="21" r="1.5" strokeWidth="1"/><circle cx="20" cy="21" r="1.5" strokeWidth="1"/>
       <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeWidth="1"/>
    </svg>
  ),
  iot: () => (
    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="2" y="7" width="20" height="14" rx="0" strokeWidth="1"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" strokeWidth="1"/>
    </svg>
  ),
  analytics: () => (
    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeWidth="1"/>
    </svg>
  ),
  identity: () => (
    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="1"/><circle cx="12" cy="7" r="4" strokeWidth="1"/>
    </svg>
  ),
  edge: () => (
    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="2" y="2" width="8" height="8" strokeWidth="1"/><rect x="14" y="2" width="8" height="8" strokeWidth="1"/>
      <rect x="2" y="14" width="8" height="8" strokeWidth="1"/><path d="M14 14h8v8h-8z" strokeDasharray="2 2" strokeWidth="1"/>
    </svg>
  ),
}

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const heroLinesRef = useRef<HTMLDivElement>(null);
  const philContainerRef = useRef<HTMLDivElement>(null);
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  
  // Dynamic Stat references
  const stat12Ref = useRef<HTMLDivElement>(null);
  const stat0Ref = useRef<HTMLDivElement>(null);
  const stat8Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Advanced Next-Gen Hero Typographic Revealing
    if (heroLinesRef.current) {
      const lines = heroLinesRef.current.querySelectorAll('.hero-line');
      gsap.fromTo(lines, 
        { y: 80, opacity: 0, rotateX: -45, filter: "blur(10px)" },
        { 
          y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)",
          stagger: 0.1, duration: 1.5, ease: "power4.out", delay: 0.2 
        }
      );
    }

    gsap.fromTo('.hero-fade', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "power3.out", delay: 0.6 });

    // Precision Stat Counters on Load
    gsap.to(stat12Ref.current, { innerHTML: 63, duration: 2.5, ease: "power3.out", snap: { innerHTML: 1 }, delay: 0.8 });
    gsap.to(stat0Ref.current, { innerHTML: 7, duration: 1.5, ease: "power2.out", snap: { innerHTML: 1 }, delay: 1 });
    gsap.to(stat8Ref.current, { innerHTML: 8, duration: 2, ease: "power3.out", snap: { innerHTML: 1 }, delay: 0.9 });
    // Add "+" suffix after counters animate
    setTimeout(() => {
      if (stat12Ref.current) stat12Ref.current.nextElementSibling?.classList.remove("opacity-0");
      if (stat0Ref.current) stat0Ref.current.nextElementSibling?.classList.remove("opacity-0");
      if (stat8Ref.current) stat8Ref.current.nextElementSibling?.classList.remove("opacity-0");
    }, 2600);

    

    // Logo Marquee — using CSS animation instead (seamless, no GSAP glitch)
    
    // Insights Carousel Engine
    if (carouselTrackRef.current) {
       gsap.to('.carousel-marquee-track', { xPercent: -50, ease: "none", duration: 40, repeat: -1 });
    }

    // Wrap-Stagger for Philosophy using native words to look incredibly smooth
    if (philContainerRef.current) {
      const splits = gsap.utils.toArray('.phil-line');
      gsap.fromTo(splits, 
        { autoAlpha: 0, y: 30, filter: "blur(4px)" },
        { 
          autoAlpha: 1, y: 0, filter: "blur(0px)", stagger: 0.2, duration: 1.5, ease: "power3.out",
          scrollTrigger: { trigger: philContainerRef.current, start: "top 60%" }
        }
      );
      
      gsap.fromTo('.phil-bg-text', 
        { opacity: 0.01, scale: 0.9 },
        { opacity: 0.04, scale: 1.1, ease: "none", scrollTrigger: { trigger: philContainerRef.current, scrub: 1 } }
      );
    }

  }, { scope: container });

  return (
    <div ref={container} className="bg-void font-body text-text relative overflow-x-hidden w-full selection:bg-accent2/30 selection:text-white">
      <Navbar />
      
      {/* Structural Scanner Light Sweep */}
      <div className="scanner-sweep opacity-50"></div>
      
      <main className="flex-1 w-full pt-[72px]">
        {/* PREMIUM HERO SECTION */}
        <section className="min-h-0 lg:min-h-[85vh] flex flex-col lg:flex-row relative overflow-hidden w-full">
          {/* Background: deep space image + overlays */}
          <img
            src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1800&q=70&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-[0.04] pointer-events-none select-none"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#4d7fff12,transparent_50%)] pointer-events-none z-0"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none z-0 opacity-60"></div>

          {/* Left Node */}
          <div className="w-full lg:w-[55%] p-6 py-12 md:p-10 lg:pl-16 lg:pt-[120px] lg:pb-[100px] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 relative z-10">
            <p className="hero-fade font-mono text-[10px] md:text-[11px] font-medium tracking-[0.25em] text-accent2 uppercase flex items-center gap-3 mb-6 ">
              <span className="block w-8 h-[1px] bg-accent2"></span> Elite Engineering Core
            </p>
            <h1 ref={heroLinesRef} className="font-display font-medium text-[clamp(52px,8vw,100px)] leading-[0.95] tracking-tight text-white mb-2" style={{ perspective: "1000px" }}>
              <div className="overflow-hidden pb-2"><span className="hero-line block">BUILDING</span></div>
              <div className="overflow-hidden pb-2"><em className="hero-line block not-italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent2 pr-4 relative inline-block">
                ENTERPRISE
                {/* Advanced GIF Overlay clipping into the text */}
                <div className="absolute inset-0 mix-blend-overlay opacity-60 pointer-events-none" style={{ backgroundImage: 'url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjR6bzM3NzhlZjZzMjF0azgxeTZweTNnbWhqaTN2ZmhlZjI0czBwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPm3BGBJYY4COgE/giphy.gif)', backgroundSize: 'cover', backgroundPosition: 'center', WebkitBackgroundClip: 'text', color: 'transparent' }}></div>
              </em></div>
              <div className="overflow-hidden pb-2"><span className="hero-line block">SYSTEMS.</span></div>
            </h1>
            <p className="hero-fade font-mono text-[11px] md:text-[12px] text-white/50 tracking-[0.1em] mb-10 mt-6  border-l-2 border-white/20 pl-4">
              Bit <span className="cursor-line bg-white/40"></span> by Bit
            </p>
            <p className="hero-fade text-[15px] md:text-[16px] text-muted leading-[1.8] max-w-[460px] font-light mb-12 ">
              We engineer mission-critical applications, AI pipelines, and secure digital infrastructure for organizations that operate at scale. Precision constructed, piece by piece.
            </p>
            <div className="hero-fade flex items-center gap-4  flex-wrap">
              <Link href="/what-we-do" className="font-mono text-[11px] md:text-[12px] font-medium tracking-[0.1em] uppercase px-8 py-3.5 bg-white text-void rounded-full transition-all hover:bg-accent2 hover:text-white hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(255,255,255,0.1)]">
                Explore Capabilities
              </Link>
              <a href="#deployments" className="font-mono text-[11px] md:text-[12px] font-medium tracking-[0.1em] uppercase px-8 py-3.5 bg-white/5 text-white rounded-full border border-white/10 transition-all hover:bg-white/10 hover:border-white/20">
                View Deployments
              </a>
            </div>
          </div>

          {/* Right Node (Stats & Colored Logo Marquee) */}
          <div className="w-full lg:w-[45%] flex flex-col relative z-10 bg-white/[0.01]">
            <div className="p-6 md:p-10 lg:p-12 flex-1 flex flex-col justify-center border-b border-white/5">
                <div className="grid grid-cols-2 gap-[1px] bg-white/5 mb-8 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-void px-8 py-10 relative transition-colors hover:bg-white/[0.02] group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent2/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="font-display font-medium text-[48px] md:text-[64px] leading-none text-white mb-2 flex items-start relative z-10">
                      <span ref={stat12Ref}>0</span><span className="text-accent2 text-[24px] md:text-[32px] align-super leading-none mt-2">+</span>
                    </div>
                    <div className="font-mono text-[10px] md:text-[11px] tracking-[0.1em] font-medium text-white/50 uppercase relative z-10 group-hover:text-white transition-colors">Enterprise Deployments</div>
                  </div>
                  <div className="bg-void px-8 py-10 relative transition-colors hover:bg-white/[0.02] group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="font-display font-medium text-[48px] md:text-[64px] leading-none text-white mb-2 flex items-start relative z-10"><span ref={stat0Ref}>0</span><span className="text-accent text-[24px] md:text-[32px] align-super leading-none mt-2">+</span></div>
                    <div className="font-mono text-[10px] md:text-[11px] tracking-[0.1em] font-medium text-white/50 uppercase relative z-10 group-hover:text-white transition-colors">Years Experience</div>
                  </div>
                  <div className="bg-void px-8 py-10 relative transition-colors hover:bg-white/[0.02] group">
                    <div className="absolute inset-0 bg-gradient-to-tl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="font-display font-medium text-[48px] md:text-[64px] leading-none text-white mb-2 flex items-start relative z-10"><span ref={stat8Ref}>0</span><span className="text-white text-[24px] md:text-[32px] align-super leading-none mt-2">+</span></div>
                    <div className="font-mono text-[10px] md:text-[11px] tracking-[0.1em] font-medium text-white/50 uppercase relative z-10 group-hover:text-white transition-colors">Capability Domains</div>
                  </div>
                  <div className="bg-void px-8 py-10 relative transition-colors hover:bg-white/[0.02] group overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(77,127,255,0.1),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="font-display font-medium text-[48px] md:text-[64px] leading-none text-white mb-2 relative z-10">∞</div>
                    <div className="font-mono text-[10px] md:text-[11px] tracking-[0.1em] font-medium text-white/50 uppercase relative z-10 group-hover:text-white transition-colors">Bit by Bit</div>
                  </div>
                </div>
            </div>

            
          </div>
        </section>

        {/* Premium Interactive Logo Marquee */}
            <div className="hero-fade bg-white/[0.02] py-8 w-full overflow-hidden shadow-[inset_0_10px_20px_rgba(0,0,0,0.2)] relative border-y border-white/5">
               <div className="font-mono text-[9px] font-medium tracking-[0.2em] text-white/40 uppercase text-center mb-6">Certified Engineering Partners</div>
               <div className="marquee-wrapper w-full flex">
                  {/* Glowing, Interactive SVGs */}
                     {/* Seamless CSS-animated marquee — duplicated set for seamless loop */}
                  <div className="marquee-infinite items-center">
                     {[...Array(2)].map((_, setIdx) => (
                        <div key={setIdx} className="flex items-center space-x-12 md:space-x-24 px-12 shrink-0">
                           {[
                             { src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", alt: "Meta", glow: "#0668E1", h: "h-6 md:h-8" },
                             { src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg", alt: "Shopify", glow: "#95bf47", h: "h-7 md:h-9" },
                             { src: "https://cdn.worldvectorlogo.com/logos/hostinger.svg", alt: "Hostinger", glow: "#673ab7", h: "h-6 md:h-8" },
                             { src: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg", alt: "Razorpay", glow: "#0288D1", h: "h-6 md:h-8" },
                             { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", alt: "AWS", glow: "#FF9900", h: "h-6 md:h-8" },
                             { src: "https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg", alt: "Firebase", glow: "#FFA000", h: "h-6 md:h-8" },
                           ].map((logo) => (
                              <span key={logo.alt} className="group flex items-center justify-center relative cursor-crosshair shrink-0">
                                 <div className="absolute inset-0 blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full" style={{ backgroundColor: logo.glow }}></div>
                                 <img src={logo.src} alt={logo.alt} className={`${logo.h} w-auto flex-shrink-0 brightness-0 invert opacity-35 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10`} />
                              </span>
                           ))}
                        </div>
                     ))}
                  </div>
               </div>
            </div>

        {/* CORE NEXT-GEN ARCHITECTURE — Digital Sovereignty */}
        <section className="py-[80px] lg:py-[140px] px-6 lg:px-16 border-y border-white/5 bg-void relative overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(232,100,42,0.04),transparent_50%),radial-gradient(ellipse_at_top_right,rgba(77,127,255,0.04),transparent_50%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none opacity-40"></div>

           <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center max-w-[1600px] mx-auto">
             <div className="flex-1 w-full relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                  <span className="font-mono text-[10px] font-medium tracking-[0.15em] text-accent uppercase">Digital Sovereignty</span>
                </div>
               <h2 className="font-display font-medium text-[clamp(42px,5vw,64px)] tracking-tight text-white leading-[1] mb-6">
                 Engineered for industries that cannot afford to fail.
               </h2>
               <p className="text-[15px] text-white/60 font-light leading-[1.8] max-w-[500px] mb-10">
                 When data integrity is a matter of compliance, off-the-shelf software is a liability. We deploy completely isolated architectures using custom zero-trust protocols, perfect for Healthcare, Finance, and Enterprise Defense operations.
               </p>
               {/* HUD stat pills */}
               <div className="flex flex-col gap-3">
                 {[
                   { label: "Zero-Trust Protocol Layer", value: "ACTIVE", color: "#4d7fff" },
                   { label: "Air-Gapped Isolation", value: "ENABLED", color: "#2fd4a0" },
                   { label: "End-to-End Encryption", value: "AES-256", color: "#e8642a" },
                 ].map((item) => (
                   <div key={item.label} className="flex items-center gap-4 px-5 py-3 rounded-xl bg-white/[0.02] border border-white/5 w-fit">
                     <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: item.color }}></span>
                     <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">{item.label}</span>
                     <span className="font-mono text-[10px] uppercase tracking-[0.15em] font-bold ml-auto" style={{ color: item.color }}>{item.value}</span>
                   </div>
                 ))}
               </div>
             </div>

             {/* 3D HUD Visual — Ultra Realistic */}
             <div className="flex-1 w-full relative h-[480px] lg:h-[560px] rounded-2xl overflow-hidden isolate group shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/5">
               {/* Real 3D space background — deep space photo */}
               <img
                 src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80&auto=format&fit=crop"
                 alt="Deep space architecture"
                 className="absolute inset-0 w-full h-full object-cover opacity-20 scale-110 group-hover:scale-105 transition-transform duration-[3000ms] ease-out"
               />

               {/* Deep color gradient overlay */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#020818] via-[#030c1a] to-[#020508]"></div>
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(77,127,255,0.12),transparent_65%)]"></div>

               {/* Animated horizontal scan line */}
               <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent2/60 to-transparent animate-scan z-10"></div>

               {/* Grid overlay */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(77,127,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(77,127,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

               {/* Corner brackets — HUD style */}
               {[
                 "top-4 left-4 border-l border-t",
                 "top-4 right-4 border-r border-t",
                 "bottom-4 left-4 border-l border-b",
                 "bottom-4 right-4 border-r border-b",
               ].map((cls, i) => (
                 <div key={i} className={`absolute w-6 h-6 ${cls} border-accent2/40 z-20`}></div>
               ))}

               {/* Central orb — 3D sphere illusion */}
               <div className="absolute inset-0 flex items-center justify-center z-10">
                 <div className="relative">
                   {/* Outer atmosphere glow */}
                   <div className="absolute inset-0 rounded-full bg-accent2/5 blur-[40px] scale-[2.5] animate-pulse"></div>

                   {/* Orbit rings */}
                   {[
                     { size: "w-[300px] h-[300px]", rot: "rotateX(75deg)", dur: "20s", op: "0.15" },
                     { size: "w-[240px] h-[240px]", rot: "rotateX(70deg) rotateZ(60deg)", dur: "14s", op: "0.1" },
                     { size: "w-[180px] h-[180px]", rot: "rotateX(65deg) rotateZ(30deg)", dur: "8s", op: "0.2" },
                   ].map((ring, i) => (
                     <div
                       key={i}
                       className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${ring.size} border rounded-full animate-[spin_${ring.dur}_linear_infinite]`}
                       style={{
                         transform: `translate(-50%, -50%) ${ring.rot}`,
                         borderColor: `rgba(77,127,255,${ring.op})`,
                         animation: `spin ${ring.dur} linear infinite`,
                       }}
                     ></div>
                   ))}

                   {/* Orbiting dot 1 */}
                   <div className="absolute top-1/2 left-1/2 w-[240px] h-[240px] -translate-x-1/2 -translate-y-1/2 animate-[spin_14s_linear_infinite]">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-accent2 rounded-full shadow-[0_0_20px_rgba(77,127,255,1),0_0_40px_rgba(77,127,255,0.5)]"></div>
                   </div>

                   {/* Orbiting dot 2 */}
                   <div className="absolute top-1/2 left-1/2 w-[180px] h-[180px] -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite_reverse]">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_16px_rgba(232,100,42,1),0_0_32px_rgba(232,100,42,0.5)]"></div>
                   </div>

                   {/* Core sphere */}
                   <div className="relative w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] rounded-full"
                     style={{
                       background: "radial-gradient(circle at 35% 35%, rgba(77,127,255,0.5) 0%, rgba(10,20,60,0.9) 50%, rgba(5,10,30,1) 100%)",
                       boxShadow: "0 0 60px rgba(77,127,255,0.4), inset 0 0 40px rgba(77,127,255,0.2), 0 0 120px rgba(77,127,255,0.1)"
                     }}>
                     {/* Specular highlight */}
                     <div className="absolute top-[15%] left-[20%] w-[30%] h-[20%] rounded-full bg-white/20 blur-[4px]"></div>
                     {/* BITSS grid on sphere */}
                     <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-7 h-7 grid grid-cols-2 gap-[2px] opacity-80">
                         <span className="bg-accent rounded-[1px]"></span>
                         <span className="bg-accent2 rounded-[1px]"></span>
                         <span className="bg-accent2 rounded-[1px]"></span>
                         <span className="bg-accent rounded-[1px]"></span>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Floating HUD panels */}
               <div className="absolute top-8 left-8 z-20 animate-float-slow" style={{ animationDelay: '0s' }}>
                 <div className="bg-[#030a1a]/80 backdrop-blur-md border border-accent2/20 rounded-lg px-4 py-3">
                   <div className="font-mono text-[8px] text-accent2/60 uppercase tracking-[0.15em] mb-1">ISOLATION STATUS</div>
                   <div className="font-mono text-[12px] text-accent2 font-bold flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-accent2 animate-pulse"></span>
                     ACTIVE
                   </div>
                 </div>
               </div>

               <div className="absolute top-8 right-8 z-20 animate-float-slow" style={{ animationDelay: '2s' }}>
                 <div className="bg-[#030a1a]/80 backdrop-blur-md border border-accent/20 rounded-lg px-4 py-3">
                   <div className="font-mono text-[8px] text-accent/60 uppercase tracking-[0.15em] mb-1">THREAT LEVEL</div>
                   <div className="font-mono text-[12px] text-accent font-bold flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                     ZERO
                   </div>
                 </div>
               </div>

               <div className="absolute bottom-8 right-8 z-20 animate-float-slow" style={{ animationDelay: '4s' }}>
                 <div className="bg-[#030a1a]/80 backdrop-blur-md border border-[#2fd4a0]/20 rounded-lg px-4 py-3">
                   <div className="font-mono text-[8px] text-[#2fd4a0]/60 uppercase tracking-[0.15em] mb-1">NODES SECURED</div>
                   <div className="font-mono text-[12px] text-[#2fd4a0] font-bold">63 / 63</div>
                 </div>
               </div>

               {/* Bottom status bar */}
               <div className="absolute bottom-6 left-6 font-mono text-[9px] font-medium uppercase tracking-[0.15em] text-white/40 bg-[#020508]/70 px-4 py-2 border border-white/10 rounded-full flex items-center gap-3 backdrop-blur-md z-20">
                 <span className="w-2 h-2 bg-accent2 rounded-full animate-pulse shadow-[0_0_8px_rgba(77,127,255,1)]"></span>
                 BITSS Zero-Trust Node — Isolation Active
               </div>
             </div>
           </div>
        </section>

        {/* Global Footprint / Network Geometry */}
        <section className="py-[100px] bg-[#05070a] border-b border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(232,100,42,0.03),transparent_40%),radial-gradient(circle_at_right,rgba(77,127,255,0.03),transparent_40%)] pointer-events-none"></div>
           {/* Blueprint grid */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

           <div className="max-w-[1600px] mx-auto px-6 lg:px-16 text-center relative z-10">
              <h2 className="font-display font-medium text-[clamp(36px,4vw,56px)] text-white mb-4">Enterprise Grade Scale</h2>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 mb-16">Global Infrastructure Benchmarks</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Card 1 — orange gradient */}
                 <div className="relative card-bg-mesh-orange border border-accent/10 rounded-2xl p-10 overflow-hidden group hover:border-accent/30 transition-all duration-500 shimmer-card noise-overlay">
                   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(232,100,42,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                   <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
                   <div className="relative z-10">
                     <div className="font-display text-[64px] leading-none text-accent mb-3 drop-shadow-[0_0_20px_rgba(232,100,42,0.4)]">99.9%</div>
                     <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent/60 mb-3">Uptime SLA</div>
                     <div className="font-body text-[13px] text-white/50 leading-relaxed">Across proprietary distributed networks. No single point of failure.</div>
                   </div>
                   {/* Decorative corner element */}
                   <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                     <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" stroke="#e8642a" strokeWidth="1" strokeDasharray="3 3"/><circle cx="24" cy="24" r="12" stroke="#e8642a" strokeWidth="1"/></svg>
                   </div>
                 </div>

                 {/* Card 2 — blue gradient */}
                 <div className="relative card-bg-mesh border border-accent2/10 rounded-2xl p-10 overflow-hidden group hover:border-accent2/30 transition-all duration-500 shimmer-card noise-overlay">
                   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(77,127,255,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                   <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent2/40 to-transparent"></div>
                   <div className="relative z-10">
                     <div className="font-display text-[64px] leading-none text-accent2 mb-3 drop-shadow-[0_0_20px_rgba(77,127,255,0.4)]">40ms</div>
                     <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent2/60 mb-3">Response Latency</div>
                     <div className="font-body text-[13px] text-white/50 leading-relaxed">Global edge-cached response. Optimized for concurrent enterprise load.</div>
                   </div>
                   <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                     <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="4" y="4" width="40" height="40" stroke="#4d7fff" strokeWidth="1" strokeDasharray="3 3"/><rect x="14" y="14" width="20" height="20" stroke="#4d7fff" strokeWidth="1"/></svg>
                   </div>
                 </div>

                 {/* Card 3 — green gradient */}
                 <div className="relative card-bg-mesh-green border border-[#2fd4a0]/10 rounded-2xl p-10 overflow-hidden group hover:border-[#2fd4a0]/30 transition-all duration-500 shimmer-card noise-overlay">
                   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(47,212,160,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                   <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2fd4a0]/40 to-transparent"></div>
                   <div className="relative z-10">
                     <div className="font-display text-[64px] leading-none text-[#2fd4a0] mb-3 drop-shadow-[0_0_20px_rgba(47,212,160,0.4)]">0.00<span className="text-[36px] text-[#2fd4a0]/50">s</span></div>
                     <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#2fd4a0]/60 mb-3">Recorded Downtime</div>
                     <div className="font-body text-[13px] text-white/50 leading-relaxed">On critical deployments. Air-gapped resilience built in from day one.</div>
                   </div>
                   <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                     <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><polygon points="24,4 44,44 4,44" stroke="#2fd4a0" strokeWidth="1" strokeDasharray="3 3" fill="none"/><polygon points="24,18 36,40 12,40" stroke="#2fd4a0" strokeWidth="1" fill="none"/></svg>
                   </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="py-[120px] px-6 lg:px-16  max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="font-mono text-[10px] font-medium tracking-[0.2em] text-accent2 uppercase flex items-center gap-3 mb-4">
                <span className="block w-6 h-[1px] bg-accent2"></span> Core Infrastructure Architecture
              </div>
              <h2 className="font-display font-medium text-[42px] md:text-[56px] text-white leading-none">Full-Stack Capability Matrix</h2>
            </div>
            <Link href="/what-we-do" className="font-mono text-[10px] font-medium tracking-[0.1em] text-white uppercase px-6 py-2.5 border border-white/20 rounded-full hover:bg-white hover:text-void transition-colors">
              Explore All Layers →
            </Link>
          </div>
          
          <div className="border border-white/5 rounded-2xl overflow-hidden bg-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px]">
              {[
                { num: '01', title: 'Custom Enterprise Software', desc: 'Proprietary operational systems replacing off-the-shelf limits. Factory OEE to HR pipelines.', i: Icons.software },
                { num: '02', title: 'Mobile & Web Apps', desc: 'High-performance native iOS, Android, and Web applications built for complex offline workflows.', i: Icons.apps },
                { num: '03', title: 'AI Tech Solutions', desc: 'Secure, private LLM layers tailored directly into your core data architecture.', i: Icons.ai },
                { num: '04', title: 'Headless E-commerce', desc: 'Scalable APIs and robust edge-caching for D2C platforms to support massive concurrent checkouts.', i: Icons.ecom },
                { num: '05', title: 'IoT & Hardware Systems', desc: 'Bridging the gap between physical infrastructure and intelligent software layers.', i: Icons.iot },
                { num: '06', title: 'CRM & ERP Solutions', desc: 'Centralized platforms to manage sales funnels, automate leads, and streamline business operations across all departments.', i: Icons.analytics },
                { num: '07', title: 'B2B Client Portals', desc: 'Secure, high-conversion hubs allowing partners and clients to plug directly into your proprietary databases and workflows.', i: Icons.identity },
                { num: '08', title: 'Legacy Modernization', desc: 'Transitioning brittle, outdated software monoliths into high-speed, scalable Next.js and React Native architecture.', i: Icons.edge },
              ].map((cap, i) => {
                const gradients = [
                  "from-accent2/5 to-transparent",
                  "from-accent/5 to-transparent",
                  "from-[#8b5cf6]/5 to-transparent",
                  "from-[#2fd4a0]/5 to-transparent",
                  "from-accent/5 to-transparent",
                  "from-accent2/5 to-transparent",
                  "from-[#ec4899]/5 to-transparent",
                  "from-[#2fd4a0]/5 to-transparent",
                ];
                const glowColors = ["rgba(77,127,255,0.15)","rgba(232,100,42,0.15)","rgba(139,92,246,0.15)","rgba(47,212,160,0.15)","rgba(232,100,42,0.15)","rgba(77,127,255,0.15)","rgba(236,72,153,0.15)","rgba(47,212,160,0.15)"];
                return (
                <div key={i} className="card-bg-mesh p-8 lg:p-10 relative overflow-hidden group hover:bg-[#11151e] transition-all duration-500 cursor-crosshair shimmer-card noise-overlay">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  {/* Subtle top border accent */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-500"></div>

                  <div className="flex flex-col h-full relative z-10 w-full">
                     <div className="flex items-center justify-between mb-10 w-full">
                       <div className="p-3 bg-void rounded-xl border border-white/5 shadow-lg group-hover:scale-110 group-hover:border-white/10 transition-all duration-500 will-change-transform">
                          <cap.i />
                       </div>
                       <span className="font-mono text-[11px] font-medium tracking-[0.1em] text-white/20 group-hover:text-accent2 transition-colors">{cap.num}</span>
                     </div>
                     <h3 className="font-display font-medium text-[24px] lg:text-[28px] tracking-tight text-white mb-4 leading-[1.1] group-hover:text-white transition-colors">{cap.title}</h3>
                     <p className="text-[14px] text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors duration-300">{cap.desc}</p>
                  </div>
                  
                  {/* Premium internal glow */}
                  <div className="absolute -top-20 -right-20 w-48 h-48 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full" style={{ backgroundColor: glowColors[i] }}></div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* DEPLOYMENTS */}
        <section id="deployments" className="bg-void py-[120px] px-6 lg:px-16  relative z-20 border-t border-white/5">
          <div className="flex flex-col mb-16 max-w-[1600px] mx-auto">
            <div className="font-mono text-[10px] font-medium tracking-[0.2em] text-accent uppercase flex items-center gap-3 mb-4">
              <span className="block w-6 h-[1px] bg-accent"></span> Production Results
            </div>
            <h2 className="font-display font-medium text-[42px] md:text-[56px] text-white leading-none">Selected Deployments</h2>
          </div>
          
          <div className="flex flex-col border-t border-white/10 max-w-[1600px] mx-auto">
            {[
              {
                s: 'Defense Sector', c: '#e8642a',
                t: '330 BDE HQ Readiness (Indian Army)',
                d: 'Engineered an air-gapped React + Electron operational dashboard for the Indian Army. Built to aggregate and visualize brigade-level metrics including combat manpower, armored vehicle allocation, and overall war readiness.',
                tags: ['React', 'Electron', 'Defense Protocol'], y: '2024',
                img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=60&auto=format&fit=crop',
              },
              {
                s: 'High-Scale D2C', c: '#4d7fff',
                t: 'boAt Nirvana Ion Launch',
                d: 'Architected the flagship product launch experience for Imagine Marketing (boAt). Engineered a high-performance interactive frontend featuring cinematic WebGL 3D model reveals driven by complex scroll-linked animation timelines.',
                tags: ['WebGL', '3D Animation', 'Scroll Architecture'], y: '2023',
                img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=60&auto=format&fit=crop',
              },
              {
                s: 'Enterprise SaaS', c: '#2fd4a0',
                t: 'GeM SaaS: Tender Automation',
                d: 'Architected a Next.js (React) application for Archana Associates to completely automate internal tender bidding, document generation, and compliance filing for government contracts.',
                tags: ['Next.js', 'Document Automation', 'B2B SaaS'], y: '2025',
                img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=60&auto=format&fit=crop',
              },
            ].map((dep, i) => (
              <div key={i} className="group relative border-b border-white/5 overflow-hidden cursor-crosshair">
                {/* Slide-in background with image */}
                <div className="absolute inset-0 -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0">
                  <img src={dep.img} alt={dep.t} className="absolute inset-0 w-full h-full object-cover opacity-5" />
                  <div className="absolute inset-0 bg-white/[0.02]"></div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-10 lg:py-12 relative z-10">
                  <div className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase md:w-[200px] shrink-0 flex flex-col gap-2">
                    {/* Thumbnail on hover */}
                    <div className="w-0 h-0 overflow-hidden group-hover:w-[60px] group-hover:h-[40px] transition-all duration-500 rounded overflow-hidden mb-2">
                      <img src={dep.img} alt={dep.t} className="w-full h-full object-cover opacity-80 rounded" />
                    </div>
                    <span className="flex items-center gap-2" style={{ color: dep.c }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dep.c }}></span>
                      {dep.s}
                    </span>
                  </div>
                  
                  <div className="flex-1 w-full pl-0 md:pl-8 border-l border-transparent md:group-hover:border-white/10 transition-colors duration-500">
                    <div className="font-display font-medium text-[36px] md:text-[48px] text-white leading-none mb-3 transform group-hover:translate-x-2 transition-transform duration-500">{dep.t}</div>
                    <div className="text-[14px] md:text-[15px] font-light text-white/50 group-hover:text-white/80 leading-[1.8] max-w-[650px] mb-6 transform group-hover:translate-x-2 transition-all duration-500 delay-75">{dep.d}</div>
                    <div className="flex gap-2 flex-wrap transform group-hover:translate-x-3 transition-transform duration-[600ms] delay-150">
                      {dep.tags.map(tag => (
                        <span key={tag} className="font-mono text-[9px] font-medium tracking-[0.1em] uppercase px-3 py-1.5 rounded-full border border-white/10 text-white/40 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="font-mono text-[11px] font-bold text-white/30 tracking-[0.1em] whitespace-nowrap md:w-[80px] md:text-right transition-colors group-hover:text-white mt-4 md:mt-0">
                    {dep.y}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ELEGANT PHILOSOPHY */}
        <section id="philosophy" className="min-h-[70vh] flex flex-col items-center justify-center py-[120px] px-6 md:px-12 relative overflow-hidden bg-[#020305] border-t border-white/5 w-full">
          {/* Cinematic background */}
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=70&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-[0.06] pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020305] via-transparent to-[#020305] pointer-events-none"></div>
          {/* Radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="font-mono text-[11px] font-medium tracking-[0.25em] text-white/50 uppercase mb-16 relative z-10 flex items-center gap-4">
             <span className="w-12 h-[1px] bg-white/20"></span>BITSS Philosophy<span className="w-12 h-[1px] bg-white/20"></span>
          </div>
          
          <div ref={philContainerRef} className="w-full max-w-[1200px] mx-auto text-center relative z-10">
             <p className="font-display font-medium text-[clamp(36px,5vw,76px)] leading-[1.1] text-white relative block tracking-tight">
                <span className="phil-line block text-white/40 mb-6">A 'bit' is the most basic unit of information in computing.</span>
                <span className="phil-line block text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]">At BITSS, we believe flawless enterprise architecture is achieved by assembling the perfect foundational blocks.</span>
                <span className="phil-line block text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent2 pr-2">Piece by piece. Bit by bit.</span>
             </p>
          </div>
          <div className="mt-20 z-10">
              <Link href="/what-we-think" className="font-mono text-[11px] font-medium tracking-[0.1em] uppercase px-8 py-3.5 bg-white/5 text-white rounded-full border border-white/10 transition-all hover:bg-white hover:text-void shadow-2xl">
                Read our Vision →
              </Link>
          </div>
        </section>

        {/* Insights & Vision Pipeline (NEW Premium Carousel) */}
        <section className="py-[100px] border-t border-white/5 bg-void relative overflow-hidden ">
           <div className="max-w-[1600px] mx-auto px-6 lg:px-16 mb-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                 <div>
                    <h2 className="font-display font-medium text-[42px] text-white">Insights Pipeline</h2>
                    <p className="font-mono text-[11px] tracking-[0.1em] text-white/40 mt-2 uppercase">Latest engineering teardowns</p>
                 </div>
                 <Link href="/what-we-think" className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent2 hover:text-white transition-colors">View All Publications</Link>
              </div>
           </div>
           
           <div className="w-full overflow-hidden pb-10" ref={carouselTrackRef}>
              <div className="carousel-marquee-track flex gap-5 px-6 lg:px-16 w-max">
                 {[
                   { title: "Zero-Trust Architecture in Defense-Grade Systems", cat: "Security Engineering", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=60&auto=format&fit=crop", color: "#e8642a" },
                   { title: "Building Offline-First Native Apps for Enterprise Field Ops", cat: "Mobile Architecture", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=60&auto=format&fit=crop", color: "#4d7fff" },
                   { title: "Headless Commerce at Scale: Lessons from a 10x Revenue Migration", cat: "E-Commerce Engineering", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=60&auto=format&fit=crop", color: "#2fd4a0" },
                   { title: "How We Automated Government Tender Filing with LLMs", cat: "AI Integration", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=60&auto=format&fit=crop", color: "#8b5cf6" },
                   { title: "IoT Edge Computing: Bridging Physical Infrastructure & Software", cat: "IoT Systems", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=60&auto=format&fit=crop", color: "#ec4899" },
                   { title: "The Architecture Behind boAt's WebGL Product Launch", cat: "Frontend Engineering", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=60&auto=format&fit=crop", color: "#e8642a" },
                 ].flatMap((it, idx) => [it, { ...it, key: idx + "b" }]).map((it, i) => (
                    <Link href="/what-we-think" key={i} className="w-[320px] md:w-[420px] h-[280px] md:h-[340px] rounded-2xl border border-white/10 p-8 flex flex-col justify-end transition-all duration-500 group relative overflow-hidden hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex-shrink-0">
                       {/* Background image */}
                       <img src={it.img} alt={it.title} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-35 transition-opacity duration-500 group-hover:scale-105 transition-transform duration-700" />
                       {/* Gradient overlay */}
                       <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-[#020305]/60 to-transparent z-0"></div>
                       {/* Color accent line top */}
                       <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent to-transparent z-10 group-hover:opacity-100 opacity-60 transition-opacity" style={{ backgroundImage: `linear-gradient(to right, transparent, ${it.color}, transparent)` }}></div>
                       <div className="relative z-10">
                          <div className="font-mono text-[9px] mb-3 uppercase tracking-widest flex items-center gap-2" style={{ color: it.color }}>
                            <span className="w-3 h-[1px]" style={{ backgroundColor: it.color }}></span>
                            {it.cat}
                          </div>
                          <div className="font-display font-medium text-[22px] md:text-[26px] text-white leading-tight group-hover:text-white transition-colors duration-300">{it.title}</div>
                          <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-white/30 group-hover:text-white/60 transition-colors flex items-center gap-2">
                            Read Teardown <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                          </div>
                       </div>
                    </Link>
                 ))}
              </div>
           </div>
        </section>
      </main>
      
      {/* TESTIMONIALS */}
      <section className="py-[120px] px-6 lg:px-16 bg-[#020305] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(77,127,255,0.04),transparent_60%)] pointer-events-none"></div>
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="font-mono text-[10px] font-medium tracking-[0.2em] text-accent2 uppercase flex items-center gap-3 mb-4">
                <span className="block w-6 h-[1px] bg-accent2"></span> Client Intelligence
              </div>
              <h2 className="font-display font-medium text-[42px] md:text-[56px] text-white leading-none">What they said.</h2>
            </div>
            <p className="font-mono text-[11px] text-white/30 tracking-[0.05em] max-w-[300px]">63 deployments. 7 years. These are the people we built for.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                quote: "War is about timing, and what Baljinder and team built makes the decision making clear. Next time we go to war, we know who made the situation better for us.",
                author: "BDE Colonel",
                role: "330 Brigade HQ, Indian Army",
                tag: "Defense",
                color: "#e8642a",
              },
              {
                quote: "Shifting from a simple WordPress agency build to a full-fledged headless e-commerce was a tough decision. Baljinder and team made it easy — and fruitfully increased revenue 10 times.",
                author: "Founder",
                role: "Snowy Glow",
                tag: "Headless Commerce",
                color: "#ec4899",
              },
              {
                quote: "GeM SaaS solved my biggest headache — filling tenders. Now I am prepared for what I already do, not chasing paperwork.",
                author: "Founder",
                role: "Archana Associates",
                tag: "Enterprise SaaS",
                color: "#2fd4a0",
              },
              {
                quote: "We trust Baljinder and team for everything we need in Real Estate technology. Even if nobody can pull it off, we know they will.",
                author: "Founder",
                role: "Dunamis Real Estate",
                tag: "Real Estate Tech",
                color: "#8b5cf6",
              },
              {
                quote: "Project management and sales became such an easy journey after we got what we wanted — and not some generic CRM.",
                author: "Founder",
                role: "Kaamdhenu",
                tag: "CRM & Operations",
                color: "#4d7fff",
              },
              {
                quote: "The boAt Nirvana Ion launch page was unlike anything we had seen from an Indian dev team. The scroll animations and 3D model reveal set a new bar for our product launches.",
                author: "Digital Lead",
                role: "Imagine Marketing (boAt)",
                tag: "High-Scale D2C",
                color: "#e8642a",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-500 group overflow-hidden shimmer-card noise-overlay"
                style={{
                  background: `linear-gradient(135deg, ${t.color}08 0%, #020305 60%)`,
                  border: `1px solid ${t.color}15`,
                }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: `radial-gradient(ellipse at top left, ${t.color}12, transparent 60%)` }}></div>
                {/* Top accent line — full width on hover */}
                <div className="absolute top-0 left-0 h-[1px] w-12 group-hover:w-full transition-all duration-700 ease-out" style={{ backgroundColor: t.color }}></div>

                {/* Quote mark watermark */}
                <div className="font-display text-[80px] leading-none font-medium absolute top-2 right-6 select-none opacity-5 group-hover:opacity-10 transition-opacity" style={{ color: t.color }}>"</div>

                <p className="text-[15px] text-white/65 font-light leading-[1.9] relative z-10 flex-1 group-hover:text-white/80 transition-colors duration-300">"{t.quote}"</p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-bold font-mono shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${t.color}15`, color: t.color, border: `1px solid ${t.color}35` }}
                  >
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-mono text-[12px] font-semibold text-white">{t.author}</div>
                    <div className="font-mono text-[10px] text-white/40 uppercase tracking-[0.1em]">{t.role}</div>
                  </div>
                  <div
                    className="ml-auto font-mono text-[9px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-full border"
                    style={{ color: t.color, borderColor: `${t.color}25`, backgroundColor: `${t.color}08` }}
                  >
                    {t.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRE-FOOTER CTA */}
      <section id="engage" className="py-[120px] px-6 lg:px-16 bg-[#040608] border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center w-full z-10">
        {/* Background city/architecture image */}
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=70&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-[0.05] pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040608] via-[#040608]/80 to-[#040608] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent2/5 rounded-full blur-[120px] pointer-events-none"></div>
        <h2 className="font-display font-medium text-[48px] md:text-[72px] text-white leading-none mb-6 relative z-10">Ready to build?</h2>
        <p className="text-[15px] text-white/50 font-light mb-10 max-w-[400px] relative z-10">Stop paying for bloated software. Architect your own digital infrastructure today.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 w-full">
          <a href="tel:+918655509976" className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full transition-all hover:bg-white/10 w-full sm:w-auto text-center">
            +91 86555 09976
          </a>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("bitss-engage"))}
            className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-10 py-4 bg-white text-void rounded-full shadow-[0_5px_30px_rgba(255,255,255,0.15)] transition-all hover:scale-105 hover:bg-accent2 hover:text-white w-full sm:w-auto text-center"
          >
            Start Your Project →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 pt-16 pb-8 px-6 lg:px-16 bg-[#020305] relative z-10 w-full overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex flex-col gap-[2px]">
                <div className="w-4 h-[5px] bg-accent2 rounded-sm"></div>
                <div className="w-4 h-[5px] bg-accent rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white font-display">BITSS</span>
            </div>
            <p className="text-[13px] text-white/40 leading-[1.8] max-w-[300px] mb-6 text-left">
              Enterprise architecture, native applications, and secure systems built for scale. Engineered in India for global deployment.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="font-mono text-[10px] font-bold tracking-[0.1em] text-white/60 uppercase mb-6">Architecture</h4>
            <ul className="flex flex-col gap-4 text-[13px] text-white/40 text-left">
              <li><a href="#capabilities" className="hover:text-accent2 transition-colors">Enterprise Software</a></li>
              <li><a href="#capabilities" className="hover:text-accent2 transition-colors">Native Mobile Apps</a></li>
              <li><a href="#capabilities" className="hover:text-accent2 transition-colors">Headless Commerce</a></li>
              <li><a href="#capabilities" className="hover:text-accent2 transition-colors">IoT & Hardware</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="font-mono text-[10px] font-bold tracking-[0.1em] text-white/60 uppercase mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-[13px] text-white/40 text-left">
              <li><a href="#deployments" className="hover:text-white transition-colors">Deployments</a></li>
              <li><a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="/what-we-think" className="hover:text-white transition-colors">Engineering Journal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1600px] mx-auto">
          <div className="font-mono text-[10px] tracking-[0.1em] font-medium text-white/30 uppercase text-center md:text-left">
            &copy; 2022 BITSS. All rights reserved. Engineered in India.
          </div>
          <div className="flex gap-6 font-mono text-[10px] tracking-[0.1em] font-medium text-white/30 uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
