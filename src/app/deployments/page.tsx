"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BentoCard } from "@/components/ui/BentoCard";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

// Helper function to extract a usable hex/rgb for the background glow
// If the accent uses a Tailwind class like 'text-accent', we map it to a hex.
const getGlowColor = (accentClass: string) => {
  if (accentClass.includes("text-accent2")) return "rgba(77, 127, 255, 0.1)"; // #4d7fff
  if (accentClass.includes("text-accent")) return "rgba(232, 100, 42, 0.1)"; // #e8642a
  // Extract hex if provided like 'text-[#2fd4a0]'
  const match = accentClass.match(/text-\[\#(.*?)\]/);
  if (match) return `rgba(${parseInt(match[1].substring(0, 2), 16)}, ${parseInt(match[1].substring(2, 4), 16)}, ${parseInt(match[1].substring(4, 6), 16)}, 0.1)`;
  return "rgba(255,255,255,0.05)";
};

// Helper for the dot shadow
const getDotShadow = (accentClass: string) => {
  if (accentClass.includes("text-accent2")) return "0 0 5px #4d7fff";
  if (accentClass.includes("text-accent")) return "0 0 5px #e8642a";
  const match = accentClass.match(/text-\[\#(.*?)\]/);
  if (match) return `0 0 5px #${match[1]}`;
  return "0 0 5px #ffffff";
};

// Helper for the dot background
const getDotBg = (accentClass: string) => {
  if (accentClass.includes("text-accent2")) return "bg-[#4d7fff]";
  if (accentClass.includes("text-accent")) return "bg-[#e8642a]";
  const match = accentClass.match(/text-\[\#(.*?)\]/);
  if (match) return `bg-[#${match[1]}]`;
  return "bg-white";
};


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
          {caseStudies.map((project, idx) => {
            const glowColor = getGlowColor(project.accent);
            const dotShadow = getDotShadow(project.accent);
            const dotBg = getDotBg(project.accent);
            
            return (
            <BentoCard key={project.id} className="flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair">
              <div className="flex-1 relative z-10">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 ${project.accent} text-xs font-mono mb-8`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${dotBg}`} style={{ boxShadow: dotShadow }}></span> {project.category}
                </div>
                <h3 className={`text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:${project.accent} transition-colors`}>{project.title}</h3>
                <p className="text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]">
                  {project.description}
                </p>
                <div className="flex gap-3 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5">{tag}</span>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href={`/deployments/${project.slug}`} className={`inline-flex items-center text-white/40 font-mono text-[11px] tracking-widest uppercase group-hover:${project.accent} transition-colors border border-white/5 rounded-full px-5 py-2 hover:bg-white/[0.05] bg-white/[0.02]`}>
                    View Case Study <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="absolute -top-32 -right-32 w-64 h-64 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: glowColor }}></div>
            </BentoCard>
          )})}
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
            Initiate Architecture Review &rarr;
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
