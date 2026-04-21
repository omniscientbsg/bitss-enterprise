import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EngageButton from "@/components/EngageButton";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";

// Required for static export — pre-renders a page for every slug at build time
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  return (
    <div className="bg-[#020305] font-body text-text relative min-h-screen overflow-x-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />

      <section className="pt-[120px] lg:pt-[180px] px-6 lg:px-16 pb-16 max-w-[900px] mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-10">
          <Link href="/what-we-think" className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 hover:text-white transition-colors">
            ← Insights Pipeline
          </Link>
        </div>

        {/* Tag & Date */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className={`font-mono text-[10px] uppercase tracking-[0.12em] px-3 py-1 rounded-full border ${article.accentBorder} ${article.accentBg} ${article.accent}`}>
            {article.tag}
          </span>
          <span className="font-mono text-[10px] text-white/30 tracking-[0.1em]">{article.date}</span>
          <span className="font-mono text-[10px] text-white/20 tracking-[0.1em]">· {article.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="font-display font-medium text-[clamp(32px,5vw,64px)] text-white leading-[1.05] tracking-tight mb-6">
          {article.title}
        </h1>
        <p className="text-[17px] text-white/50 font-light leading-[1.8] mb-12 max-w-[700px]">
          {article.subtitle}
        </p>

        {/* Cover Image */}
        <div className="w-full aspect-[16/7] rounded-2xl overflow-hidden border border-white/5 mb-16">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <article className="max-w-none">
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
                <h3 key={idx} className="font-mono text-[12px] uppercase tracking-[0.15em] text-white/40 mt-10 mb-4">
                  {block.content as string}
                </h3>
              );
            }
            if (block.type === "para") {
              return (
                <p key={idx} className="text-[16px] text-white/60 font-light leading-[1.9] mb-6">
                  {block.content as string}
                </p>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote key={idx} className="border-l-2 border-white/20 pl-6 my-10">
                  <p className="text-[18px] md:text-[22px] font-display font-medium text-white leading-[1.5] italic">
                    &ldquo;{block.content as string}&rdquo;
                  </p>
                </blockquote>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={idx} className="my-6 flex flex-col gap-3">
                  {(block.content as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-[15px] text-white/60 font-light leading-[1.7]">
                      <span className={`mt-[6px] w-1.5 h-1.5 rounded-full shrink-0 ${article.accent.replace("text-", "bg-")}`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </article>

        {/* Author footer */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-mono text-[11px] font-bold text-white uppercase">
              B
            </div>
            <div>
              <div className="font-mono text-[12px] text-white font-semibold">BITSS Engineering</div>
              <div className="font-mono text-[10px] text-white/30 uppercase tracking-[0.1em]">Engineering Journal</div>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href="/what-we-think" className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/30 hover:text-white transition-colors border border-white/10 rounded-full px-5 py-2 hover:bg-white/5">
              ← All Articles
            </Link>
            <EngageButton />
          </div>
        </div>

        {/* More Articles */}
        <div className="mt-20">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-8">More from the Pipeline</h3>
          <div className="flex flex-col gap-5">
            {articles.filter((a) => a.slug !== article.slug).slice(0, 3).map((a) => (
              <Link key={a.slug} href={`/what-we-think/${a.slug}`}
                className="group flex items-center justify-between gap-8 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                <div>
                  <div className={`font-mono text-[9px] uppercase tracking-[0.12em] mb-2 ${a.accent}`}>{a.tag}</div>
                  <div className="font-display text-[16px] text-white group-hover:text-accent2 transition-colors leading-tight">{a.title}</div>
                </div>
                <span className="text-white/20 group-hover:text-white transition-colors shrink-0 font-mono text-[18px]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
