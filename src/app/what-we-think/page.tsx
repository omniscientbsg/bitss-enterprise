"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { articles } from "@/lib/articles";

export default function WhatWeThink() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.reveal-hero',
      { opacity: 0, y: 30, filter: "blur(5px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.15, duration: 1.2, ease: "power3.out", delay: 0.2 }
    );
  }, { scope: container });

  const philosophies = [
    {
      num: "01",
      title: "Precision over proliferation.",
      body: "The world does not need more software. It needs better software. We refuse to ship systems that are generically adequate. Every BITSS deployment is built for one organisation, one set of workflows, and one operational reality. Generic is a liability. Precision is the product.",
      accent: "rgba(232,100,42,1)",
    },
    {
      num: "02",
      title: "Sovereignty is non-negotiable.",
      body: "Your data, your logic, your infrastructure. When you entrust us with your core systems, the output belongs entirely to you — no vendor lock-in, no cloud dependency tax, no black-box logic you cannot audit. Operational sovereignty is not a feature. It is a founding principle.",
      accent: "rgba(77,127,255,1)",
    },
    {
      num: "03",
      title: "Security is architecture, not a layer.",
      body: "Zero-trust is not a buzzword we put in a proposal to sound credible. It is the default posture of every network boundary, every API surface, and every data pipeline we design. Security that is bolted on after the fact is theatre. Security built into the architecture is immunity.",
      accent: "rgba(45,212,160,1)",
    },
    {
      num: "04",
      title: "We build what lasts.",
      body: "Shipping fast is a virtue only when the foundation is solid. We have watched too many enterprises spend more rebuilding fragile systems than they would have spent building them correctly the first time. We engineer for a 10-year operational horizon, not a 6-week sprint demo.",
      accent: "rgba(139,92,246,1)",
    },
  ];

  return (
    <div ref={container} className="bg-[#020305] font-body text-text relative min-h-screen overflow-x-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />

      {/* Background polish */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent2/5 blur-[120px] pointer-events-none rounded-full"></div>
      <div className="absolute bottom-[30%] left-0 w-[40vw] h-[40vw] bg-accent/3 blur-[150px] pointer-events-none rounded-full"></div>

      {/* HERO */}
      <section className="pt-[140px] lg:pt-[200px] px-6 lg:px-16 max-w-[1200px] mx-auto relative z-10 pb-20">
        <div className="reveal-hero font-mono text-[11px] font-medium tracking-[0.2em] text-accent uppercase mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-accent"></span> Engineering Journal
        </div>
        <h1 className="reveal-hero font-display font-medium text-[clamp(48px,6vw,84px)] text-white leading-[1.05] tracking-tight mb-8">
          The Insights Pipeline.
        </h1>
        <p className="reveal-hero text-[16px] text-white/60 max-w-[600px] leading-[1.8] font-light mb-16">
          Engineering teardowns, architectural postmortems, and technical perspectives from the BITSS team. Written for people who build serious software and want to understand why things work — and why they fail.
        </p>

        <div className="reveal-hero w-full h-[1px] bg-white/10 mb-24"></div>

        {/* PHILOSOPHY SECTION */}
        <div className="reveal-hero mb-24">
          <div className="font-mono text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase flex items-center gap-3 mb-10">
            <span className="block w-6 h-[1px] bg-white/20"></span> Our Engineering Beliefs
          </div>
          <h2 className="font-display font-medium text-[clamp(32px,4vw,56px)] text-white leading-[1.05] tracking-tight mb-16 max-w-[800px]">
            The principles we refuse to compromise on.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophies.map((p, i) => (
              <div key={i} className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 overflow-hidden">
                {/* Accent glow on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to right, ${p.accent}, transparent)` }}></div>
                <div className="font-mono text-[10px] tracking-[0.1em] text-white/20 mb-5">{p.num}</div>
                <h3 className="font-display text-[22px] md:text-[26px] text-white mb-4 leading-tight group-hover:text-white transition-colors">
                  {p.title}
                </h3>
                <p className="text-[14px] text-white/50 font-light leading-[1.8] group-hover:text-white/70 transition-colors duration-500">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/10 mb-20"></div>

        {/* ARTICLES */}
        <div className="mb-12">
          <div className="font-mono text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase flex items-center gap-3 mb-10">
            <span className="block w-6 h-[1px] bg-white/20"></span> Latest Engineering Teardowns
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {articles.map((article) => (
            <Link key={article.slug} href={`/what-we-think/${article.slug}`}
              className="group grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 bg-white/[0.02] border border-white/5 rounded-3xl p-6 lg:p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
              <div className="w-full aspect-video md:aspect-[4/3] bg-void rounded-xl overflow-hidden relative border border-white/5">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex gap-4 items-center mb-4">
                  <div className={`font-mono text-[10px] ${article.accent} tracking-[0.1em] uppercase px-3 py-1 border ${article.accentBorder} rounded-full ${article.accentBg}`}>{article.tag}</div>
                  <div className="font-mono text-[10px] text-white/30 tracking-[0.1em]">{article.date}</div>
                  <div className="font-mono text-[10px] text-white/20 tracking-[0.1em]">· {article.readTime}</div>
                </div>
                <h3 className="font-display text-[22px] md:text-[28px] text-white leading-tight mb-4 group-hover:text-accent2 transition-colors">{article.title}</h3>
                <p className="text-[14px] font-light text-white/50 leading-relaxed max-w-[600px] mb-8">{article.desc}</p>

                <div className="inline-flex items-center text-white/30 font-mono text-[11px] tracking-widest uppercase group-hover:text-white transition-colors">
                  Read Engineering Log <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
