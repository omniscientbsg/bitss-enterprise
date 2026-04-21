import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="bg-void min-h-screen text-text relative overflow-x-hidden selection:bg-accent2/30 selection:text-white">
      <Navbar />
      
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#4d7fff0a,transparent_50%)] pointer-events-none z-0"></div>
      <div className="hero-ruled-bg opacity-30"></div>

      <main className="flex-1 pt-[160px] lg:pt-[240px] px-6 max-w-[1200px] mx-auto w-full flex flex-col items-start relative z-10 pb-32">
        <div className="font-mono text-[11px] font-bold tracking-[0.2em] text-accent uppercase mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-accent"></span> Operational Philosophy
        </div>
        <h1 className="text-[clamp(48px,6vw,96px)] font-display font-medium tracking-tighter text-white mb-10 leading-[0.95]">
          Engineering beyond <br className="hidden md:block"/> assumptions.
        </h1>
        <div className="w-full h-[1px] bg-white/10 mb-12"></div>
        <p className="text-white/50 text-[16px] md:text-[18px] max-w-[700px] leading-[1.8] font-light mb-20">
          A 'bit' is the fundamental unit of information in computing. At BITSS, we architect flawless enterprise architectures by assembling the perfect foundational blocks. When security and scalability are non-negotiable, we build it bit by bit.
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
           {[
             { num: '01', title: 'No Off-the-Shelf Compromises', desc: 'Commercial SaaS is built for the lowest common denominator. We engineer bespoke platforms that map directly to your proprietary operational models.' },
             { num: '02', title: 'Security by Default (Zero-Trust)', desc: 'Identity verification is not an afterthought. Our architectures assume networks are hostile, deploying zero-trust verification at the code level.' },
             { num: '03', title: 'Scale is Anticipated, Not Reacted To', desc: 'A system that crashes during your highest revenue hour is a failure. We implement edge-caching and database sharding from day zero.' },
             { num: '04', title: 'Native Performance is Mandatory', desc: 'Tolerance for lag is zero. We employ Next.js frameworks and native mobile architectures to guarantee sub-second execution speeds globally.' },
           ].map((principle) => (
             <div key={principle.num} className="bg-[#0b0f14] border border-white/5 rounded-2xl p-8 lg:p-10 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-8 font-mono text-[64px] font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-colors leading-none pointer-events-none">
                  {principle.num}
                </div>
                <div className="font-mono text-[12px] tracking-widest text-accent mb-4">{principle.num}</div>
                <h3 className="font-display text-[22px] text-white mb-3 tracking-tight">{principle.title}</h3>
                <p className="text-white/40 text-[14px] leading-relaxed font-light">{principle.desc}</p>
             </div>
           ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
