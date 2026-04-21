"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BentoCard } from "@/components/ui/BentoCard";

export default function Deployments() {
  return (
    <div className="bg-void font-body text-text relative min-h-screen overflow-x-hidden selection:bg-accent2/30 selection:text-white">
      <Navbar />
      <main className="pt-[140px] lg:pt-[200px] px-6 lg:px-16 max-w-[1200px] mx-auto w-full min-h-[80vh] pb-32">
        <h1 className="font-display font-medium text-[clamp(48px,6vw,84px)] text-white leading-[1.05] tracking-tight mb-8">Selected Deployments</h1>
        <p className="text-[16px] text-white/60 max-w-[600px] leading-[1.8] font-light mb-16">
          A deep dive into our mission-critical systems built for absolute scale, compliance, and zero-trust security.
        </p>

        <div className="space-y-12">
          {/* PROJECT 1 */}
          <BentoCard className="flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair">
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-accent text-xs font-mono mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_5px_#e8642a]"></span> ZERO-TRUST SECURITY
              </div>
              <h3 className="text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-accent transition-colors">330 BDE HQ Readiness (Indian Army)</h3>
              <p className="text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]">
                Engineered an air-gapped React + Electron operational dashboard for the Indian Army. Built to aggregate and visualize brigade-level metrics including combat manpower, armored vehicle allocation, and overall war readiness. Designed strictly for offline, multi-factor clearance environments.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">React</span>
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">Electron</span>
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">Defense Protocol</span>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center text-white/40 font-mono text-[11px] tracking-widest uppercase group-hover:text-accent transition-colors border border-white/5 rounded-full px-5 py-2 group-hover:border-accent/30 bg-white/[0.02]">
                  View Case Study <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </BentoCard>

          {/* PROJECT 2 */}
          <BentoCard className="flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair">
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-accent2 text-xs font-mono mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent2 shadow-[0_0_5px_#4d7fff]"></span> HIGH-CONCURRENCY SCALE
              </div>
              <h3 className="text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-accent2 transition-colors">boAt Nirvana Ion Launch</h3>
              <p className="text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]">
                Architected the flagship product launch experience for Imagine Marketing (boAt). Engineered a high-performance interactive frontend featuring cinematic WebGL 3D model reveals driven by complex scroll-linked animation timelines. Edge-cached to sustain tens of thousands of concurrent flash-sale requests.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">WebGL</span>
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">3D Animation</span>
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">Headless Front</span>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center text-white/40 font-mono text-[11px] tracking-widest uppercase group-hover:text-accent2 transition-colors border border-white/5 rounded-full px-5 py-2 group-hover:border-accent2/30 bg-white/[0.02]">
                  View Case Study <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent2/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </BentoCard>

          {/* PROJECT 3 */}
          <BentoCard className="flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair">
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-[#2fd4a0] text-xs font-mono mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2fd4a0] shadow-[0_0_5px_#2fd4a0]"></span> B2B SAAS
              </div>
              <h3 className="text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-[#2fd4a0] transition-colors">GeM SaaS: Tender Automation</h3>
              <p className="text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]">
                Architected a Next.js (React) application for Archana Associates to completely automate internal tender bidding, document generation, and compliance filing for government contracts. Unified multi-step document pipelines into a single intelligent portal.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">Next.js</span>
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">Document Automation</span>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center text-white/40 font-mono text-[11px] tracking-widest uppercase group-hover:text-[#2fd4a0] transition-colors border border-white/5 rounded-full px-5 py-2 group-hover:border-[#2fd4a0]/30 bg-white/[0.02]">
                  View Case Study <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#2fd4a0]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </BentoCard>

          {/* PROJECT 4 */}
          <BentoCard className="flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair">
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-accent text-xs font-mono mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_5px_#e8642a]"></span> PIPELINE ARCHITECTURE
              </div>
              <h3 className="text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-accent transition-colors">Kamdhenu Protocol</h3>
              <p className="text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]">
                Developed a comprehensive React Native web application aligning Kamdhenu's real estate projects, sales pipelines, and internal marketing execution into a unified operational dashboard. Replaced fragmented Excel tracking with a secure central database.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">React Native</span>
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">CRM</span>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center text-white/40 font-mono text-[11px] tracking-widest uppercase group-hover:text-accent transition-colors border border-white/5 rounded-full px-5 py-2 group-hover:border-accent/30 bg-white/[0.02]">
                  View Case Study <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#f97316]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </BentoCard>

          {/* PROJECT 5 */}
          <BentoCard className="flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair">
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-[#8b5cf6] text-xs font-mono mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] shadow-[0_0_5px_#8b5cf6]"></span> INTERNAL OPERATIONS
              </div>
              <h3 className="text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-[#8b5cf6] transition-colors">Dunamis Project Management</h3>
              <p className="text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]">
                Engineered an internal React Native dashboard for Dunamis Real Estate to consolidate multi-site project management, resource tracking, and operational visibility. Designed explicitly for fast deployment across remote project sites.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">React Native</span>
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">Project Management</span>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center text-white/40 font-mono text-[11px] tracking-widest uppercase group-hover:text-[#8b5cf6] transition-colors border border-white/5 rounded-full px-5 py-2 group-hover:border-[#8b5cf6]/30 bg-white/[0.02]">
                  View Case Study <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#8b5cf6]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </BentoCard>

          {/* PROJECT 6 */}
          <BentoCard className="flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair">
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-[#ec4899] text-xs font-mono mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899] shadow-[0_0_5px_#ec4899]"></span> HEADLESS COMMERCE
              </div>
              <h3 className="text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-[#ec4899] transition-colors">Oxygen Commerce Fleet</h3>
              <p className="text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]">
                Deployed a multi-brand headless e-commerce architecture (Snowy Glow, Magical Touch, Royal Pearl, Richlook). Replaced standard monolithic storefronts with high-speed React Native (Oxygen) frontends tethered to Shopify backend APIs.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">Headless Shopify</span>
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">React Native (Oxygen)</span>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center text-white/40 font-mono text-[11px] tracking-widest uppercase group-hover:text-[#ec4899] transition-colors border border-white/5 rounded-full px-5 py-2 group-hover:border-[#ec4899]/30 bg-white/[0.02]">
                  View Case Study <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#ec4899]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </BentoCard>

          {/* PROJECT 7 */}
          <BentoCard className="flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair">
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-[#14b8a6] text-xs font-mono mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] shadow-[0_0_5px_#14b8a6]"></span> HOSPITALITY TECH
              </div>
              <h3 className="text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-[#14b8a6] transition-colors">Gazebo CRM & Booking</h3>
              <p className="text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]">
                Designed and built a React web application for Gazebo, combining real-time restaurant reservation routing with an integrated back-office CRM. Streamlined floor management and guest tracking into a single touchpoint.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">React</span>
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">Booking Engine</span>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center text-white/40 font-mono text-[11px] tracking-widest uppercase group-hover:text-[#14b8a6] transition-colors border border-white/5 rounded-full px-5 py-2 group-hover:border-[#14b8a6]/30 bg-white/[0.02]">
                  View Case Study <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#14b8a6]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </BentoCard>

          {/* PROJECT 8 */}
          <BentoCard className="flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair">
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-accent2 text-xs font-mono mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent2 shadow-[0_0_5px_#4d7fff]"></span> B2B PORTAL
              </div>
              <h3 className="text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-accent2 transition-colors">PropCubix Agency Hub</h3>
              <p className="text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]">
                Developed a high-conversion Next.js portal allowing independent real estate agents to register, onboard, and plug directly into the PropCubix proprietary sales funnel and client database. Engineered with complex role-based auth routing.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">Next.js</span>
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">Auth Routing</span>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center text-white/40 font-mono text-[11px] tracking-widest uppercase group-hover:text-accent2 transition-colors border border-white/5 rounded-full px-5 py-2 group-hover:border-accent2/30 bg-white/[0.02]">
                  View Case Study <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent2/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </BentoCard>

          {/* PROJECT 9 */}
          <BentoCard className="flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair">
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-[#eab308] text-xs font-mono mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#eab308] shadow-[0_0_5px_#eab308]"></span> IOT & HARDWARE
              </div>
              <h3 className="text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-[#eab308] transition-colors">Shanmukhananda Hall IoT</h3>
              <p className="text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]">
                Engineered custom hardware and low-level firmware solutions for Asia's largest auditorium. Built proprietary IoT integrations to manage massive infrastructure scale, facility tracking, and hardware automation across the complex.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">IoT</span>
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">Custom Firmware</span>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center text-white/40 font-mono text-[11px] tracking-widest uppercase group-hover:text-[#eab308] transition-colors border border-white/5 rounded-full px-5 py-2 group-hover:border-[#eab308]/30 bg-white/[0.02]">
                  View Case Study <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#eab308]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </BentoCard>

          {/* PROJECT 10 */}
          <BentoCard className="flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair">
            <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-[#64748b] text-xs font-mono mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64748b] shadow-[0_0_5px_#64748b]"></span> MANUFACTURING ERP
              </div>
              <h3 className="text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-[#64748b] transition-colors">Metplast Enterprise OS</h3>
              <p className="text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]">
                Architected a full-scale Next.js ERP, CRM, and website replacing legacy monolithic software. Achieved total autonomous business automation from lead acquisition to factory floor operations, featuring a native Android field-service app with offline SQLite caching.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">Next.js</span>
                <span className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">SQLite Caching</span>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center text-white/40 font-mono text-[11px] tracking-widest uppercase group-hover:text-accent2 transition-colors border border-white/5 rounded-full px-5 py-2 group-hover:border-accent2/30 bg-white/[0.02]">
                  View Case Study <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#64748b]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </BentoCard>

        </div>
      </main>

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

