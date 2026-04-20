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
    gsap.to(stat12Ref.current, { innerHTML: 12, duration: 2.5, ease: "power3.out", snap: { innerHTML: 1 }, delay: 0.8 });
    gsap.to(stat0Ref.current, { innerHTML: 0, duration: 1.5, ease: "power2.out", snap: { innerHTML: 1 }, delay: 1, onStart: () => { if(stat0Ref.current) stat0Ref.current.innerHTML = "99"; }});
    gsap.to(stat8Ref.current, { innerHTML: 8, duration: 2, ease: "power3.out", snap: { innerHTML: 1 }, delay: 0.9 });

    // Elegant Structural Scroll Reveal
    const sections = gsap.utils.toArray('.gsap-reveal');
    sections.forEach((sec: any) => {
      gsap.fromTo(sec, 
        { opacity: 0, y: 40, filter: "blur(4px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.6, ease: "power3.out", scrollTrigger: { trigger: sec, start: "top 85%" } }
      );
    });

    // Logo Marquee Engine
    gsap.to('.logo-marquee-track', { xPercent: -50, ease: "none", duration: 25, repeat: -1 });
    
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
          {/* Subtle geometric premium noise */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#4d7fff15,transparent_50%)] pointer-events-none z-0"></div>

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
                      <span ref={stat12Ref}>0</span><span className="text-accent2 text-[24px] md:text-[32px] align-super leading-none mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">+</span>
                    </div>
                    <div className="font-mono text-[10px] md:text-[11px] tracking-[0.1em] font-medium text-white/50 uppercase relative z-10 group-hover:text-white transition-colors">Enterprise Deployments</div>
                  </div>
                  <div className="bg-void px-8 py-10 relative transition-colors hover:bg-white/[0.02] group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="font-display font-medium text-[48px] md:text-[64px] leading-none text-white mb-2 relative z-10"><span ref={stat0Ref}>99</span></div>
                    <div className="font-mono text-[10px] md:text-[11px] tracking-[0.1em] font-medium text-white/50 uppercase relative z-10 group-hover:text-white transition-colors">Downtime Tolerance</div>
                  </div>
                  <div className="bg-void px-8 py-10 relative transition-colors hover:bg-white/[0.02] group">
                    <div className="absolute inset-0 bg-gradient-to-tl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="font-display font-medium text-[48px] md:text-[64px] leading-none text-white mb-2 relative z-10"><span ref={stat8Ref}>0</span></div>
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
               <div className="relative w-full overflow-hidden flex">
                  {/* Glowing, Interactive SVGs */}
                  <div className="logo-marquee-track flex whitespace-nowrap items-center w-max">
                     {[...Array(4)].map((_, idx) => (
                        <div key={idx} className="flex items-center space-x-12 md:space-x-24 px-12">
                           {/* Meta (Blue Glow) */}
                           <span className="group flex items-center justify-center relative cursor-crosshair">
                              <div className="absolute inset-0 bg-[#0668E1] blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-6 md:h-8 w-auto flex-shrink-0 brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10" />
                           </span>
                           {/* Shopify (Green Glow) */}
                           <span className="group flex items-center justify-center relative cursor-crosshair">
                              <div className="absolute inset-0 bg-[#95bf47] blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" alt="Shopify" className="h-7 md:h-9 w-auto flex-shrink-0 brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10" />
                           </span>
                           {/* Hostinger (Purple Glow) */}
                           <span className="group flex items-center justify-center relative cursor-crosshair">
                              <div className="absolute inset-0 bg-[#6c5b7b] blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                              <img src="https://cdn.worldvectorlogo.com/logos/hostinger.svg" alt="Hostinger" className="h-6 md:h-8 w-auto flex-shrink-0 brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10" />
                           </span>
                           {/* Razorpay (Blue/Orange Glow) */}
                           <span className="group flex items-center justify-center relative cursor-crosshair">
                              <div className="absolute inset-0 bg-[#0288D1] blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                              <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className="h-6 md:h-8 w-auto flex-shrink-0 brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10" />
                           </span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

        {/* CORE NEXT-GEN ARCHITECTURE */}
        <section className="py-[80px] lg:py-[120px] px-6 lg:px-16 border-y border-white/5 bg-void gsap-reveal">
           <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center max-w-[1600px] mx-auto">
             <div className="flex-1 w-full relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                  <span className="font-mono text-[10px] font-medium tracking-[0.15em] text-accent uppercase">Digital Sovereignty</span>
                </div>
               <h2 className="font-display font-medium text-[clamp(42px,5vw,64px)] tracking-tight text-white leading-[1] mb-6">
                 Engineered for industries that cannot afford to fail.
               </h2>
               <p className="text-[15px] text-white/60 font-light leading-[1.8] max-w-[500px]">
                 When data integrity is a matter of compliance, off-the-shelf software is a liability. We deploy completely isolated architectures using custom zero-trust protocols, perfect for Healthcare, Finance, and Enterprise Defense operations.
               </p>
             </div>
             <div className="flex-1 w-full relative h-[400px] lg:h-[500px] bg-[#020508] border border-white/5 rounded-2xl overflow-hidden flex items-center justify-center isolate group shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                {/* Stunning Premium Matrix Net */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,127,255,0.05),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 transform -skew-y-[6deg] scale-[1.5] origin-center animate-[spin_120s_linear_infinite_reverse]"></div>
                
                <div className="relative z-10 w-32 h-32 lg:w-48 lg:h-48 border border-accent2/30 rounded-full flex items-center justify-center shadow-[inset_0_0_40px_rgba(77,127,255,0.15)] group-hover:border-accent2/60 transition-colors duration-1000">
                   <div className="absolute w-48 h-48 lg:w-[320px] lg:h-[320px] border border-white/5 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                   
                   <div className="absolute w-64 h-64 lg:w-[400px] lg:h-[400px] border border-dashed border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>

                   <div className="absolute w-56 h-56 lg:w-72 lg:h-72 animate-[spin_12s_linear_infinite]">
                      <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-accent2 rounded-full shadow-[0_0_15px_rgba(77,127,255,1)]"></div>
                   </div>

                   <div className="w-16 h-16 lg:w-20 lg:h-20 bg-void border border-accent2/20 rounded-2xl flex items-center justify-center relative overflow-hidden backdrop-blur-md">
                      <div className="absolute inset-0 bg-accent2/10 animate-pulse"></div>
                      <svg className="w-6 h-6 lg:w-8 lg:h-8 text-accent2 shadow-[0_0_10px_rgba(77,127,255,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                   </div>
                </div>

                <div className="absolute bottom-6 left-6 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-white/50 bg-[#020508]/60 px-4 py-2 border border-white/10 rounded-full flex items-center gap-3 backdrop-blur-md">
                  <span className="w-2 h-2 bg-accent2 rounded-full animate-pulse shadow-[0_0_5px_rgba(77,127,255,1)]"></span>
                  Node Secure Isolation active
                </div>
             </div>
           </div>
        </section>

        {/* Global Footprint / Network Geometry (NEW Premium Section) */}
        <section className="py-[100px] bg-[#05070a] border-b border-white/5 relative overflow-hidden gsap-reveal">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(232,100,42,0.03),transparent_40%),radial-gradient(circle_at_right,rgba(77,127,255,0.03),transparent_40%)] pointer-events-none"></div>
           <div className="max-w-[1600px] mx-auto px-6 lg:px-16 text-center relative z-10">
              <h2 className="font-display font-medium text-[clamp(36px,4vw,56px)] text-white mb-4">Enterprise Grade Scale</h2>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 mb-16">Global Infrastructure Management</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] transition-colors duration-300">
                    <div className="font-display text-[48px] text-accent mb-2">99.9%</div>
                    <div className="font-body text-[14px] text-white/60">Uptime SLA across proprietary distributed networks.</div>
                 </div>
                 <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] transition-colors duration-300">
                    <div className="font-display text-[48px] text-accent2 mb-2">40ms</div>
                    <div className="font-body text-[14px] text-white/60">Global edge-cached response latency.</div>
                 </div>
                 <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] transition-colors duration-300">
                    <div className="font-display text-[48px] text-white mb-2">SOC2</div>
                    <div className="font-body text-[14px] text-white/60">Compliant data warehousing and deep isolation protocols.</div>
                 </div>
              </div>
           </div>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="py-[120px] px-6 lg:px-16 gsap-reveal max-w-[1800px] mx-auto">
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
                { num: '06', title: 'Predictive Analytics', desc: 'Data pipelines that forecast outcomes before they become incidents.', i: Icons.analytics },
                { num: '07', title: 'Identity Management', desc: 'Biometric and multi-factor authentication systems for zero-tolerance security environments.', i: Icons.identity },
                { num: '08', title: 'Edge Compute Layer', desc: 'Deploying computation physically closer to the demand — sub-millisecond response.', i: Icons.edge },
              ].map((cap, i) => (
                <div key={i} className="bg-[#0b0e14] p-8 lg:p-10 relative overflow-hidden group hover:bg-[#11151e] transition-colors duration-500 cursor-crosshair">
                  <div className="flex flex-col h-full relative z-10 w-full">
                     <div className="flex items-center justify-between mb-10 w-full">
                       <div className="p-3 bg-void rounded-xl border border-white/5 shadow-lg group-hover:scale-110 transition-transform duration-500 will-change-transform">
                          <cap.i />
                       </div>
                       <span className="font-mono text-[11px] font-medium tracking-[0.1em] text-white/30 group-hover:text-accent2 transition-colors">{cap.num}</span>
                     </div>
                     <h3 className="font-display font-medium text-[24px] lg:text-[28px] tracking-tight text-white mb-4 leading-[1.1]">{cap.title}</h3>
                     <p className="text-[14px] text-white/50 font-light leading-relaxed">{cap.desc}</p>
                  </div>
                  
                  {/* Premium internal glow */}
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent2/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEPLOYMENTS */}
        <section id="deployments" className="bg-void py-[120px] px-6 lg:px-16 gsap-reveal relative z-20 border-t border-white/5">
          <div className="flex flex-col mb-16 max-w-[1600px] mx-auto">
            <div className="font-mono text-[10px] font-medium tracking-[0.2em] text-accent uppercase flex items-center gap-3 mb-4">
              <span className="block w-6 h-[1px] bg-accent"></span> Production Results
            </div>
            <h2 className="font-display font-medium text-[42px] md:text-[56px] text-white leading-none">Selected Deployments</h2>
          </div>
          
          <div className="flex flex-col border-t border-white/10 max-w-[1600px] mx-auto">
            {[
              { s: 'Defense Sector', c: 'text-[#e8642a]', t: 'Indian Army Dashboard', d: 'Air-gapped resource and logistics allocation dashboard. Zero-Trust Architecture ensuring data sovereignty and multi-factor defense clearancing.', tags: ['Custom ERP', 'Military Protocol', 'Air-Gapped'], y: '2024' },
              { s: 'High-Scale D2C', c: 'text-[#4d7fff]', t: 'boAt Infrastructure', d: 'Edge-cached headless checkout flows sustaining tens of thousands of concurrent requests during peak flash sales without degradation.', tags: ['Headless CMS', 'Edge Compute'], y: '2024' },
              { s: 'Supply Chain', c: 'text-[#8b6fff]', t: 'Kamdhenu Protocol', d: 'Supply chain logistics mapping and predictive analytics framework for real-time procurement intelligence.', tags: ['Predictive Analytics', 'Logistics API'], y: '2023' },
              { s: 'Enterprise Resource', c: 'text-[#2fd4a0]', t: 'Dunamis Gateway', d: 'Enterprise resource planning replacing legacy server data warehouses with a real-time operational backbone.', tags: ['ERP System', 'Data Migration'], y: '2023' }
            ].map((dep, i) => (
              <div key={i} className="group relative border-b border-white/5 overflow-hidden cursor-crosshair">
                <div className="absolute inset-0 bg-white/[0.02] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0"></div>
                
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 py-10 lg:py-12 relative z-10">
                  <div className={`font-mono text-[11px] font-medium tracking-[0.15em] uppercase md:w-[200px] shrink-0 transition-colors ${dep.c} flex items-center gap-2`}>
                     <span className="w-1.5 h-1.5 rounded-full bg-current"></span>{dep.s}
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

        {/* ELEGANT PHILOSOPHY (Re-authored for Space Grotesk / Outfit Premium Tone) */}
        <section id="philosophy" className="min-h-[70vh] flex flex-col items-center justify-center py-[120px] px-6 md:px-12 relative overflow-hidden bg-[#020305] border-t border-white/5 w-full">
          {/* Subtle background glow linking it to Premium theme */}
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
        <section className="py-[100px] border-t border-white/5 bg-void relative overflow-hidden gsap-reveal">
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
              <div className="carousel-marquee-track flex gap-6 px-6 lg:px-16 w-max">
                 {[1,2,3,4,5,6].map((it) => (
                    <Link href={`/what-we-think`} key={it} className="w-[300px] md:w-[400px] h-[250px] md:h-[300px] rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-end hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent z-0 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                       <div className="relative z-10">
                          <div className="font-mono text-[10px] text-accent mb-3 uppercase tracking-widest">Engineering Journal</div>
                          <div className="font-display font-medium text-[24px] text-white leading-tight group-hover:text-accent2 transition-colors duration-300">Resolving Microservice Bottlenecks at Scale Vol {it}</div>
                       </div>
                    </Link>
                 ))}
                 {[1,2,3,4,5,6].map((it) => (
                    <Link href={`/what-we-think`} key={it+"b"} className="w-[300px] md:w-[400px] h-[250px] md:h-[300px] rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-end hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent z-0 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                       <div className="relative z-10">
                          <div className="font-mono text-[10px] text-accent mb-3 uppercase tracking-widest">Engineering Journal</div>
                          <div className="font-display font-medium text-[24px] text-white leading-tight group-hover:text-accent2 transition-colors duration-300">Resolving Microservice Bottlenecks at Scale Vol {it}</div>
                       </div>
                    </Link>
                 ))}
              </div>
           </div>
        </section>
      </main>
      
      {/* FOOTER */}
      <footer id="engage" className="border-t border-white/10 py-12 px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#020305] relative z-10 w-full overflow-hidden group">
        <div className="font-mono text-[10px] tracking-[0.1em] font-medium text-white/40 uppercase relative z-10 text-center md:text-left">
          © 2026 BITSS — Engineered in India
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
          <span className="font-mono text-[10px] tracking-[0.1em] font-medium text-white/40 uppercase">Ready to Build?</span>
          <a href="mailto:hello@bitss.in" className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-10 py-4 bg-white text-void rounded-full shadow-[0_5px_30px_rgba(255,255,255,0.15)] transition-all hover:scale-105 hover:bg-accent2 hover:text-white">
            Initialize Workflow
          </a>
        </div>
      </footer>
    </div>
  );
}
