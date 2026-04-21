"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { asset } from "@/lib/assets";

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

    // Dynamic Abstract Card Interaction (Mobile Support)
    const capCards = gsap.utils.toArray('.capability-card');
    capCards.forEach((card: any) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        toggleClass: { targets: card, className: "is-active" }
      });
    });

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
                     {/* Seamless CSS-animated marquee */}
                  <div className="marquee-infinite items-center">
                     {[...Array(2)].map((_, setIdx) => (
                        <div key={setIdx} className="flex items-center justify-around w-[1200px] shrink-0">
                           {[
                             { src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", alt: "Meta", glow: "#0668E1" },
                             { src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg", alt: "Shopify", glow: "#95bf47" },
                             { src: "https://cdn.worldvectorlogo.com/logos/hostinger.svg", alt: "Hostinger", glow: "#673ab7" },
                             { src: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg", alt: "Razorpay", glow: "#0288D1" },
                             { src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", alt: "AWS", glow: "#FF9900" },
                             { src: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg", alt: "Firebase", glow: "#FFA000" },
                           ].map((logo) => (
                              <span key={logo.alt} className="group flex items-center justify-center relative cursor-crosshair shrink-0 px-8">
                                 <div className="absolute inset-0 blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full" style={{ backgroundColor: logo.glow }}></div>
                                 <img src={logo.src} alt={logo.alt} className={`h-8 w-auto object-contain flex-shrink-0 brightness-0 invert opacity-35 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10`} />
                              </span>
                           ))}
                        </div>
                     ))}
                  </div>
               </div>
            </div>

        {/* CORE NEXT-GEN ARCHITECTURE */}
        <section className="py-[80px] lg:py-[120px] px-6 lg:px-16 border-y border-white/5 bg-void ">
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
             <div className="flex-1 w-full relative min-h-[300px] md:min-h-[400px] lg:h-[500px] bg-[#020508] border border-white/5 rounded-2xl overflow-hidden flex items-center justify-center isolate group shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,5,8,0.6)_100%)] z-10 pointer-events-none"></div>
                
                {/* The GIF — full bleed, object-contain on mobile */}
                <img
                  src={asset("/bde3e16f060043de9e2ebc624fb64049.gif")}
                  alt="Enterprise Engineering Visualisation"
                  className="w-full h-full object-contain md:object-cover absolute inset-0"
                />

                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-white/50 bg-[#020508]/80 px-4 py-2 border border-white/10 rounded-full flex items-center gap-3 backdrop-blur-md z-20 w-fit">
                  <span className="w-2 h-2 bg-accent2 rounded-full animate-pulse shadow-[0_0_5px_rgba(77,127,255,1)]"></span>
                  Node Secure Isolation active
                </div>
             </div>
           </div>
        </section>

        {/* Global Footprint / Network Geometry (NEW Premium Section) */}
        <section className="py-[100px] bg-[#05070a] border-b border-white/5 relative overflow-hidden ">
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
                    <div className="font-display text-[48px] text-white mb-2">0.00<span className="text-[28px] text-white/50">s</span></div>
                    <div className="font-body text-[14px] text-white/60">Downtime on critical deployments. Air-gapped resilience built in.</div>
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
                { num: '01', title: 'Custom Enterprise Software', desc: 'Proprietary operational systems replacing off-the-shelf limits. Factory OEE to HR pipelines.', i: Icons.software,
                  bg: `radial-gradient(ellipse at 0% 0%, rgba(77,127,255,0.35) 0%, transparent 60%), radial-gradient(ellipse at 100% 100%, rgba(99,102,241,0.2) 0%, transparent 60%)`,
                  pattern: `repeating-linear-gradient(0deg, rgba(77,127,255,0.04) 0px, transparent 1px, transparent 40px, rgba(77,127,255,0.04) 41px), repeating-linear-gradient(90deg, rgba(77,127,255,0.04) 0px, transparent 1px, transparent 40px, rgba(77,127,255,0.04) 41px)`,
                  glow: 'rgba(77,127,255,0.5)' },
                { num: '02', title: 'Mobile & Web Apps', desc: 'High-performance native iOS, Android, and Web applications built for complex offline workflows.', i: Icons.apps,
                  bg: `radial-gradient(ellipse at 100% 0%, rgba(232,100,42,0.35) 0%, transparent 60%), radial-gradient(ellipse at 0% 100%, rgba(251,146,60,0.15) 0%, transparent 60%)`,
                  pattern: `repeating-linear-gradient(45deg, rgba(232,100,42,0.04) 0px, transparent 1px, transparent 28px, rgba(232,100,42,0.04) 29px)`,
                  glow: 'rgba(232,100,42,0.5)' },
                { num: '03', title: 'AI Tech Solutions', desc: 'Secure, private LLM layers tailored directly into your core data architecture.', i: Icons.ai,
                  bg: `radial-gradient(ellipse at 50% 0%, rgba(45,212,160,0.3) 0%, transparent 60%), radial-gradient(circle at 80% 80%, rgba(16,185,129,0.15) 0%, transparent 50%)`,
                  pattern: `radial-gradient(circle at 50% 50%, rgba(45,212,160,0.06) 0%, transparent 50%), repeating-conic-gradient(rgba(45,212,160,0.03) 0deg, transparent 1deg, transparent 9deg, rgba(45,212,160,0.03) 10deg)`,
                  glow: 'rgba(45,212,160,0.5)' },
                { num: '04', title: 'Headless E-commerce', desc: 'Scalable APIs and robust edge-caching for D2C platforms to support massive concurrent checkouts.', i: Icons.ecom,
                  bg: `radial-gradient(ellipse at 0% 100%, rgba(139,92,246,0.35) 0%, transparent 60%), radial-gradient(ellipse at 100% 0%, rgba(167,139,250,0.15) 0%, transparent 50%)`,
                  pattern: `repeating-linear-gradient(-45deg, rgba(139,92,246,0.04) 0px, transparent 1px, transparent 28px, rgba(139,92,246,0.04) 29px)`,
                  glow: 'rgba(139,92,246,0.5)' },
                { num: '05', title: 'IoT & Hardware Systems', desc: 'Bridging the gap between physical infrastructure and intelligent software layers.', i: Icons.iot,
                  bg: `radial-gradient(ellipse at 100% 100%, rgba(236,72,153,0.3) 0%, transparent 60%), radial-gradient(circle at 20% 20%, rgba(244,114,182,0.15) 0%, transparent 50%)`,
                  pattern: `repeating-linear-gradient(30deg, rgba(236,72,153,0.04) 0px, transparent 1px, transparent 20px, rgba(236,72,153,0.04) 21px), repeating-linear-gradient(-30deg, rgba(236,72,153,0.04) 0px, transparent 1px, transparent 20px, rgba(236,72,153,0.04) 21px)`,
                  glow: 'rgba(236,72,153,0.5)' },
                { num: '06', title: 'CRM & ERP Solutions', desc: 'Centralized platforms to manage sales funnels, automate leads, and streamline business operations across all departments.', i: Icons.analytics,
                  bg: `radial-gradient(ellipse at 50% 100%, rgba(245,158,11,0.3) 0%, transparent 60%), radial-gradient(circle at 80% 10%, rgba(252,211,77,0.1) 0%, transparent 50%)`,
                  pattern: `radial-gradient(circle at 25% 75%, rgba(245,158,11,0.08) 0%, transparent 40%), radial-gradient(circle at 75% 25%, rgba(245,158,11,0.05) 0%, transparent 40%)`,
                  glow: 'rgba(245,158,11,0.5)' },
                { num: '07', title: 'B2B Client Portals', desc: 'Secure, high-conversion hubs allowing partners and clients to plug directly into your proprietary databases and workflows.', i: Icons.identity,
                  bg: `radial-gradient(ellipse at 0% 50%, rgba(20,184,166,0.3) 0%, transparent 60%), radial-gradient(circle at 100% 50%, rgba(45,212,191,0.1) 0%, transparent 50%)`,
                  pattern: `repeating-linear-gradient(90deg, rgba(20,184,166,0.05) 0px, transparent 1px, transparent 24px, rgba(20,184,166,0.05) 25px), repeating-linear-gradient(0deg, rgba(20,184,166,0.03) 0px, transparent 1px, transparent 60px, rgba(20,184,166,0.03) 61px)`,
                  glow: 'rgba(20,184,166,0.5)' },
                { num: '08', title: 'Legacy Modernization', desc: 'Transitioning brittle, outdated software monoliths into high-speed, scalable Next.js and React Native architecture.', i: Icons.edge,
                  bg: `radial-gradient(ellipse at 100% 50%, rgba(99,102,241,0.3) 0%, transparent 60%), radial-gradient(ellipse at 0% 0%, rgba(129,140,248,0.1) 0%, transparent 50%)`,
                  pattern: `repeating-linear-gradient(60deg, rgba(99,102,241,0.04) 0px, transparent 1px, transparent 30px, rgba(99,102,241,0.04) 31px), repeating-linear-gradient(-60deg, rgba(99,102,241,0.03) 0px, transparent 1px, transparent 30px, rgba(99,102,241,0.03) 31px)`,
                  glow: 'rgba(99,102,241,0.5)' },
              ].map((cap, i) => (
                <div key={i} className="capability-card bg-[#0b0e14] p-8 lg:p-10 relative overflow-hidden group transition-all duration-500 cursor-crosshair">
                  {/* Abstract Gradient Pattern Background */}
                  <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity duration-700"
                    style={{ background: cap.bg }}>
                  </div>
                  <div className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity duration-700"
                    style={{ backgroundImage: cap.pattern }}>
                  </div>
                  {/* Base dim pattern always visible */}
                  <div className="absolute inset-0 pointer-events-none z-0 opacity-20"
                    style={{ backgroundImage: cap.pattern }}>
                  </div>
                  {/* Glow dot */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ backgroundColor: cap.glow }}>
                  </div>

                  <div className="flex flex-col h-full relative z-10 w-full transition-all duration-700">
                     <div className="flex items-center justify-between mb-10 w-full">
                       <div className="p-3 bg-[#0b0e14]/80 rounded-xl border border-white/5 shadow-lg group-hover:scale-110 group-[.is-active]:scale-110 transition-transform duration-500 will-change-transform backdrop-blur-md">
                          <cap.i />
                       </div>
                       <span className="font-mono text-[11px] font-medium tracking-[0.1em] text-white/30 group-hover:text-white group-[.is-active]:text-white transition-colors">{cap.num}</span>
                     </div>
                     <h3 className="font-display font-medium text-[24px] lg:text-[28px] tracking-tight text-white mb-4 leading-[1.1]">{cap.title}</h3>
                     <p className="text-[14px] text-white/50 font-light leading-relaxed group-hover:text-white/70 group-[.is-active]:text-white/70 transition-colors duration-500">{cap.desc}</p>
                  </div>
                </div>
              ))}
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
              { s: 'Defense Sector', c: 'text-[#e8642a]', t: '330 BDE HQ Readiness (Indian Army)', d: 'Engineered an air-gapped React + Electron operational dashboard for the Indian Army. Built to aggregate and visualize brigade-level metrics including combat manpower, armored vehicle allocation, and overall war readiness.', tags: ['React', 'Electron', 'Defense Protocol'], y: '2024' },
              { s: 'High-Scale D2C', c: 'text-[#4d7fff]', t: 'boAt Nirvana Ion Launch', d: 'Architected the flagship product launch experience for Imagine Marketing (boAt). Engineered a high-performance interactive frontend featuring cinematic WebGL 3D model reveals driven by complex scroll-linked animation timelines.', tags: ['WebGL', '3D Animation', 'Scroll Architecture'], y: '2023' },
              { s: 'Enterprise SaaS', c: 'text-[#2fd4a0]', t: 'GeM SaaS: Tender Automation', d: 'Architected a Next.js (React) application for Archana Associates to completely automate internal tender bidding, document generation, and compliance filing for government contracts.', tags: ['Next.js', 'Document Automation', 'B2B SaaS'], y: '2025' }
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

        {/* Insights & Vision Pipeline */}
        <section className="py-[100px] border-t border-white/5 bg-void relative overflow-hidden ">
           <div className="max-w-[1600px] mx-auto px-6 lg:px-16 mb-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                 <div>
                    <h2 className="font-display font-medium text-[42px] text-white">Insights Pipeline</h2>
                    <p className="font-mono text-[11px] tracking-[0.1em] text-white/40 mt-2 uppercase">Latest engineering teardowns & architectural postmortems</p>
                 </div>
                 <Link href="/what-we-think" className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent2 hover:text-white transition-colors">View All Publications →</Link>
              </div>
           </div>

           <div className="w-full overflow-hidden pb-10" ref={carouselTrackRef}>
              <div className="carousel-marquee-track flex gap-6 px-6 lg:px-16 w-max">
                 {[
                   { slug: "claude-mythos", tag: "AI Model Architecture", date: "19.04.2026", title: "Claude Mythos: Anthropic's Philosophical Leap Beyond Just Safety", accent: "text-[#e8642a]", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800" },
                   { slug: "attention-is-everything", tag: "Deep Learning", date: "14.04.2026", title: "Attention Is Everything: How One 2017 Paper Still Dictates Modern AI", accent: "text-[#4d7fff]", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" },
                   { slug: "cloudflare-one-line-error", tag: "Infrastructure Postmortem", date: "09.04.2026", title: "How One Missing Character Took Down Cloudflare's Global Network", accent: "text-[#2fd4a0]", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" },
                 ].flatMap((art, _, arr) => [art, ...arr.filter(a => a.slug !== art.slug)]).slice(0, 6).concat(
                   [
                     { slug: "claude-mythos", tag: "AI Model Architecture", date: "19.04.2026", title: "Claude Mythos: Anthropic's Philosophical Leap Beyond Just Safety", accent: "text-[#e8642a]", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800" },
                     { slug: "attention-is-everything", tag: "Deep Learning", date: "14.04.2026", title: "Attention Is Everything: How One 2017 Paper Still Dictates Modern AI", accent: "text-[#4d7fff]", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" },
                     { slug: "cloudflare-one-line-error", tag: "Infrastructure Postmortem", date: "09.04.2026", title: "How One Missing Character Took Down Cloudflare's Global Network", accent: "text-[#2fd4a0]", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" },
                   ]
                 ).map((art, idx) => (
                    <Link href={`/what-we-think/${art.slug}`} key={idx}
                      className="w-[300px] md:w-[380px] h-[280px] md:h-[320px] rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col justify-end hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 group relative overflow-hidden shrink-0">
                       {/* Cover image greyscale → colour */}
                       <img src={art.img} alt={art.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#020305] via-[#020305]/60 to-transparent z-0"></div>
                       <div className="relative z-10 p-6">
                          <div className={`font-mono text-[9px] ${art.accent} mb-3 uppercase tracking-widest`}>{art.tag} · {art.date}</div>
                          <div className="font-display font-medium text-[20px] md:text-[22px] text-white leading-tight group-hover:text-accent2 transition-colors duration-300">{art.title}</div>
                          <div className="mt-4 inline-flex items-center text-white/30 font-mono text-[10px] uppercase tracking-widest group-hover:text-white transition-colors">
                            Read Log <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
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
                className="relative bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col gap-6 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 group"
              >
                {/* Accent top line */}
                <div className="h-[1px] w-12 rounded-full" style={{ backgroundColor: t.color }}></div>

                {/* Quote mark */}
                <div className="font-display text-[56px] leading-none font-medium text-white/5 absolute top-6 right-8 select-none group-hover:text-white/10 transition-colors">"</div>

                <p className="text-[15px] text-white/70 font-light leading-[1.8] relative z-10 flex-1">"{t.quote}"</p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold font-mono shrink-0"
                    style={{ backgroundColor: `${t.color}20`, color: t.color, border: `1px solid ${t.color}40` }}
                  >
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-mono text-[12px] font-semibold text-white">{t.author}</div>
                    <div className="font-mono text-[10px] text-white/40 uppercase tracking-[0.1em]">{t.role}</div>
                  </div>
                  <div
                    className="ml-auto font-mono text-[9px] uppercase tracking-[0.1em] px-3 py-1 rounded-full border"
                    style={{ color: t.color, borderColor: `${t.color}30`, backgroundColor: `${t.color}10` }}
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
      <section id="engage" className="py-[100px] px-6 lg:px-16 bg-[#040608] border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center w-full z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent2/5 rounded-full blur-[100px] pointer-events-none"></div>
        <h2 className="font-display font-medium text-[48px] md:text-[64px] text-white leading-none mb-6 relative z-10">Ready to build?</h2>
        <p className="text-[15px] text-white/50 font-light mb-10 max-w-[400px] relative z-10">Stop paying for bloated software. Architect your own digital infrastructure today.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 w-full">
          <a href="tel:+918655509976" className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full transition-all hover:bg-white/10 w-full sm:w-auto text-center">
            +91 86555 09976
          </a>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("bitss-engage"))}
            className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-10 py-4 bg-white text-void rounded-full shadow-[0_5px_30px_rgba(255,255,255,0.15)] transition-all hover:scale-105 hover:bg-accent2 hover:text-white w-full sm:w-auto text-center"
          >
            Initiate Architecture Review →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
