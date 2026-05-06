import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getCaseStudyBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="bg-[#020305] font-body text-text relative min-h-screen overflow-x-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />

      <section className="pt-[140px] lg:pt-[200px] px-6 lg:px-16 pb-32 max-w-[1000px] mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-10">
          <Link href="/deployments" className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 hover:text-white transition-colors">
            &larr; Back to Deployments
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 ${project.accent} text-xs font-mono mb-8`}>
            {project.category}
          </div>
          <h1 className="font-display font-medium text-[clamp(40px,5vw,72px)] text-white leading-[1.05] tracking-tight mb-6">
            {project.title}
          </h1>
          <p className="text-[18px] text-white/60 font-light leading-[1.8] max-w-[800px]">
            {project.description}
          </p>
        </div>

        {/* Cover Image */}
        <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/5 mb-16 relative">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-8 rounded-2xl bg-white/[0.02] border border-white/5">
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 mb-2">Client</h4>
            <p className="text-white font-medium">{project.client}</p>
          </div>
          {project.metrics.map((metric, idx) => (
            <div key={idx}>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 mb-2">{metric.label}</h4>
              <p className={`font-medium ${project.accent}`}>{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-16">
          <div>
            <h2 className="font-display text-[32px] md:text-[40px] text-white mb-6">The Challenge</h2>
            <p className="text-white/70 text-[16px] leading-[1.9] font-light">
              {project.challenge}
            </p>
          </div>

          <div>
            <h2 className="font-display text-[32px] md:text-[40px] text-white mb-6">The Solution</h2>
            <p className="text-white/70 text-[16px] leading-[1.9] font-light">
              {project.solution}
            </p>
          </div>

          <div>
            <h2 className="font-display text-[32px] md:text-[40px] text-white mb-6">Technical Architecture</h2>
            <ul className="space-y-4">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start text-white/70 text-[16px] leading-[1.9] font-light border-b border-white/5 pb-4 last:border-0">
                  <span className={`font-mono text-[12px] mt-1 ${project.accent}`}>{(idx + 1).toString().padStart(2, '0')}</span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#040608] flex flex-col items-center text-center">
        <h2 className="font-display text-[40px] text-white mb-6">Need a similar architecture?</h2>
        <p className="text-white/40 font-light mb-10 max-w-[400px]">Engage our engineering team for a technical review of your operations.</p>
        <button
            onClick={() => window.dispatchEvent(new CustomEvent("bitss-engage"))}
            className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-10 py-4 bg-white text-void rounded-full shadow-[0_5px_30px_rgba(255,255,255,0.15)] transition-all hover:scale-105 hover:bg-accent2 hover:text-white"
          >
            Initiate Engagement &rarr;
        </button>
      </section>

      <Footer />
    </div>
  );
}
