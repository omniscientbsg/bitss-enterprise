" use client\;
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";

// export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  
  const article = getArticleBySlug((params as any).slug);
  if (!article) notFound();

  return (
    <div className="bg-[#020305] font-body text-text relative min-h-screen overflow-x-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />

      <section className="pt-[140px] lg:pt-[200px] px-6 lg:px-16 pb-32 max-w-[900px] mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-10">
          <Link href="/what-we-think" className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 hover:text-white transition-colors">
            &#8592; Insights Pipeline
          </Link>
        </div>

        {/* Tag & Date */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className={`font-mono text-[10px] uppercase tracking-[0.12em] px-3 py-1 rounded-full border ${article.accentBorder} ${article.accentBg} ${article.accent}`}>
            {article.tag}
          </span>
          <span className="font-mono text-[10px] text-white/30 tracking-[0.1em]">{article.date}</span>
          <span className="font-mono text-[10px] text-white/20 tracking-[0.1em]">A {article.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="font-display font-medium text-[clamp(32px,5vw,64px)] text-white leading-[1.05] tracking-tight mb-6">
          {article.title}
        </h1>
        <p className="text-[17px] text-white/50 font-light leading-[1.8] mb-12 max-w-[700px]">
          {article.subtitle}
        </p>

        {/* Cover Image */}
        <div className="w-full aspect-[16/7] rounded-2xl overflow-hidden border border-white/5 mb-16 relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <article className="max-w-none text-white/70 text-[16px] leading-[1.9] font-light">
          {article.body.map((block, idx) => {
            if (block.type === "heading") {
              return (
                <h2 key={idx} className="font-display font-medium text-[28px] md:text-[36px] text-white mt-14 mb-5 tracking-tight leading-tight">
                  {block.content as string}
                </h2>
              );
            }
            if (block.type === "subheading") {
              return (
                <h3 key={idx} className="font-mono text-[12px] uppercase tracking-[0.15em] text-white/40 mt-10 mb-4 border-b border-white/5 pb-2">
                  {block.content as string}
                </h3>
              );
            }
            if (block.type === "para") {
              return (
                <p key={idx} className="mb-6">
                  {block.content as string}
                </p>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote key={idx} className={`pl-6 my-10 border-l-2 ${article.accentBorder} font-display text-[22px] md:text-[26px] leading-tight text-white`}>
                  "{block.content as string}"
                </blockquote>
              );
            }
            if (block.type === "list") {
              const listItems = block.content as string[];
              return (
                <ul key={idx} className="mb-8 space-y-4">
                  {listItems.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 ${article.accentBg.split(" ")[0].replace("/10", "")}`}></span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </article>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#040608] flex flex-col items-center text-center">
        <h2 className="font-display text-[40px] text-white mb-6">Build the pipeline.</h2>
        <p className="text-white/40 font-light mb-10 max-w-[400px]">Engage our engineering team for a technical architecture review of your systems.</p>
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
