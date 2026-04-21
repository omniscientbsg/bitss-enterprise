export type Article = {
  id: number;
  slug: string;
  tag: string;
  date: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  accent: string;
  accentBorder: string;
  accentBg: string;
  readTime: string;
  body: {
    type: "heading" | "para" | "quote" | "list" | "subheading";
    content: string | string[];
  }[];
};

export const articles: Article[] = [
  {
    id: 1,
    slug: "claude-mythos",
    tag: "AI Model Architecture",
    date: "19.04.2026",
    title: "Claude Mythos: Anthropic's Philosophical Leap Beyond Just Safety",
    subtitle: "Why the latest Claude family isn't another benchmark win — it's a fundamental rethinking of what enterprise AI should be.",
    desc: "Anthropic's latest model family isn't just another capability jump—it's a reframing of what AI alignment means in practice. We break down the Mythos architecture paradigm, its constitutional AI upgrades, and why this signals a bifurcation in the enterprise LLM market.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=2670",
    accent: "text-[#e8642a]",
    accentBorder: "border-[#e8642a]/20",
    accentBg: "bg-[#e8642a]/10",
    readTime: "8 min read",
    body: [
      { type: "para", content: "For the past two years, the dominant narrative in enterprise AI has been a horse race — GPT vs Claude vs Gemini, benchmarks vs benchmarks, parameter counts vs parameter counts. Anthropic has just stepped off that track entirely." },
      { type: "heading", content: "What Mythos Actually Changes" },
      { type: "para", content: "The Mythos naming convention is Anthropic's signal that this isn't just a version increment. Where previous Claude models iterated on capability and safety in tandem, Mythos introduces what Anthropic internally calls 'Values Hierarchy Programming' — a layered constitutional structure that doesn't just prevent bad outputs, but actively reasons about *why* certain outputs serve the user's long-term interests versus short-term requests." },
      { type: "para", content: "In practical terms, this means Claude Mythos can decline to help with something not because a filter flagged it, but because it has built a model of your organizational intent and flagged a misalignment. For BITSS clients operating in healthcare, finance, and defense, this is significant: the model becomes an architectural partner rather than a smart autocomplete." },
      { type: "quote", content: "The difference between safety and alignment is the difference between a guard and a counselor. Mythos is Anthropic's first credible attempt to build the latter." },
      { type: "heading", content: "The Enterprise Bifurcation" },
      { type: "para", content: "The LLM market is splitting into two distinct categories. On one side: raw power models (GPT-5, Gemini Ultra) optimized for creative tasks, code generation, and high-throughput unstructured work. On the other: auditable, values-aligned models built for regulated industries where explainability is not optional." },
      { type: "para", content: "Claude Mythos positions itself firmly in the second camp. Its new 'Reasoning Trace' feature outputs a structured log of the model's decision path — something that a compliance officer can actually read and sign off on. This is not a minor UX feature. This is the feature that lets a hospital CIO put Claude into a patient-facing workflow." },
      { type: "subheading", content: "Key Architectural Upgrades in Mythos" },
      { type: "list", content: ["Values Hierarchy Programming — layered constitutional rules with organizational override capability", "Reasoning Trace output — auditable decision logs in structured JSON", "Context Persistence — maintains organizational intent across multi-session deployments", "Selective Disclosure Mode — controls what the model reveals about its own reasoning chain to end users", "Adversarial Robustness v3 — significantly hardened against prompt injection in agentic pipelines"] },
      { type: "heading", content: "The BITSS Take" },
      { type: "para", content: "At BITSS, we've been running private LLM integrations into enterprise stacks for two years. The consistent friction point has never been model quality — it's been governance. Legal teams, compliance officers, and CISOs don't care that GPT-4 scored 92% on MMLU. They care about audit trails, data residency, and the ability to point to a decision log when something goes wrong." },
      { type: "para", content: "Claude Mythos is the first model that architecturally addresses this. If you're running an enterprise and you've been waiting to seriously deploy AI into your core operations, the wait is over. This is the model you build on." },
    ],
  },
  {
    id: 2,
    slug: "attention-is-everything",
    tag: "Deep Learning",
    date: "14.04.2026",
    title: "Attention Is Everything: How One 2017 Paper Still Dictates Modern AI",
    subtitle: "Nine years after 'Attention Is All You Need', the transformer still runs the world. Here's why — and where its seams are starting to show.",
    desc: "The 2017 'Attention Is All You Need' paper quietly dismantled decades of recurrent-network dominance and installed transformers as the universal substrate of intelligence. Nine years on, we audit the architectural decision.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2765",
    accent: "text-[#4d7fff]",
    accentBorder: "border-[#4d7fff]/20",
    accentBg: "bg-[#4d7fff]/10",
    readTime: "11 min read",
    body: [
      { type: "para", content: "In June 2017, eight researchers at Google published a 15-page paper titled 'Attention Is All You Need'. It contained no dramatic claims, no breathless press release. It simply proposed replacing the dominant neural architecture of the decade — recurrent neural networks — with something cleaner, faster, and more parallelizable: the transformer." },
      { type: "para", content: "Nine years later, that paper has become the most influential document in the history of computer science. Every frontier AI model — GPT-5, Claude, Gemini, LLaMA — runs on transformer architecture. The attention mechanism described in those 15 pages is the engine underneath everything." },
      { type: "heading", content: "Why Attention Works" },
      { type: "para", content: "The core insight of the transformer is deceptively simple: instead of processing a sequence step by step (as RNNs do), process every element in relation to every other element simultaneously. This 'self-attention' mechanism allows the model to learn which parts of an input are relevant to which other parts, regardless of distance." },
      { type: "para", content: "For language, this is revolutionary. The word 'bank' in 'river bank' and 'bank account' is disambiguated not by sequential context but by global relational context. The transformer sees the whole sentence at once and routes meaning accordingly. For code, for images, for protein structures — the same principle applies. Context is everything. Attention provides context." },
      { type: "quote", content: "The transformer didn't just improve performance on existing benchmarks. It made entirely new categories of capability possible — emergent behaviors that nobody predicted and that still aren't fully understood." },
      { type: "heading", content: "The Scaling Miracle" },
      { type: "para", content: "What nobody anticipated in 2017 was what would happen when you simply made transformers bigger and fed them more data. Starting around 2020, researchers began documenting 'emergent capabilities' — abilities that models suddenly developed at scale that weren't present at smaller sizes. Chain-of-thought reasoning. In-context learning. Code generation. These weren't trained explicitly. They appeared." },
      { type: "para", content: "This scaling miracle drove the GPT-3, GPT-4, Claude, and Gemini era. The practical question stopped being 'how do we architect better AI' and became 'how do we get more GPUs'. The transformer architecture was assumed fixed; compute was the variable." },
      { type: "subheading", content: "Where the Seams Are Showing" },
      { type: "list", content: ["Context window limitations — even at 1M tokens, transformers struggle with very long-range dependencies", "Quadratic attention cost — computing attention across N tokens costs O(N²), making truly long contexts expensive", "No persistent memory — transformers have no native long-term memory independent of context", "Hallucination — confident fabrication of information remains an unsolved structural problem, not merely a tuning issue", "Energy inefficiency — the compute density required for large transformers is environmentally and economically unsustainable at scale"] },
      { type: "heading", content: "What Comes Next" },
      { type: "para", content: "The post-transformer era is already being written in research labs. State Space Models (SSMs) like Mamba offer linear-time sequence modeling. Mixture of Experts (MoE) architectures allow massive parameter counts with selective activation. Hybrid approaches combining transformers with external memory stores are showing promise in agentic settings." },
      { type: "para", content: "But the transformer won't be dethroned soon. The ecosystem around it — tooling, hardware (GPUs are literally designed around attention), training recipes, fine-tuning infrastructure — represents trillions of dollars of embedded investment. The transition, when it comes, will be gradual. For now, attention really is all you need." },
    ],
  },
  {
    id: 3,
    slug: "cloudflare-one-line-error",
    tag: "Infrastructure Postmortem",
    date: "09.04.2026",
    title: "How One Missing Character Took Down Cloudflare's Global Network",
    subtitle: "A BGP routing misconfiguration that propagated in minutes. The lessons for every engineering team that runs production infrastructure.",
    desc: "A single erroneous character in a BGP routing rule briefly knocked Cloudflare off the internet for millions of users. This is a masterclass in why infrastructure at scale demands immutable configuration pipelines.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2534",
    accent: "text-[#2fd4a0]",
    accentBorder: "border-[#2fd4a0]/20",
    accentBg: "bg-[#2fd4a0]/10",
    readTime: "9 min read",
    body: [
      { type: "para", content: "On April 9th, 2026, Cloudflare — the company that protects roughly 20% of all internet traffic — experienced a partial global outage lasting approximately 34 minutes. The root cause: a single character missing from a BGP (Border Gateway Protocol) route filter configuration that was pushed to production without adequate staged rollout." },
      { type: "para", content: "BGP is the protocol that tells the internet how to route traffic between networks. It is, architecturally, the most critical and fragile component of the global internet. A malformed BGP announcement can cause traffic to route incorrectly, loop, or disappear entirely — at internet scale, in seconds." },
      { type: "heading", content: "What Actually Happened" },
      { type: "para", content: "The incident trace, reconstructed from Cloudflare's own postmortem and independent BGP monitoring data, reveals a textbook failure of deployment discipline. A network engineer was updating route filter rules for a specific regional POP (Point of Presence). The configuration change was valid in isolation — but contained a prefix length specification that, due to a missing character, accepted a broader range of route announcements than intended." },
      { type: "para", content: "The change passed automated validation (the validator checked syntax, not semantic blast radius). It was pushed to a canary set of POPs, but the canary monitoring window was 4 minutes — too short to catch propagation-dependent failures. Within 11 minutes of full rollout, Cloudflare's own infrastructure was attempting to route traffic through paths that didn't exist." },
      { type: "quote", content: "The validator checked that the configuration was syntactically correct. Nobody checked that it was semantically safe. Those are two completely different things — and confusing them is how outages happen." },
      { type: "heading", content: "The Cascade" },
      { type: "para", content: "What makes BGP failures uniquely dangerous is their propagation speed. Once Cloudflare's edge nodes began advertising incorrect routes, upstream providers and peers began accepting and re-advertising them. The 'blast radius' — a term for how far an error spreads — expanded from a few POPs to affecting global routing tables within 8 minutes. By the time engineers began emergency rollback, the change was already in routers they didn't directly control." },
      { type: "subheading", content: "The 5 Failures That Compounded" },
      { type: "list", content: ["Semantic validation gap — CI/CD pipeline validated syntax, not impact radius", "Insufficient canary window — 4 minutes is not long enough to observe BGP propagation effects", "Missing blast radius guardrails — no maximum-prefix limits on what the configuration change could affect", "No automated rollback trigger — rollback was initiated manually, adding 6-8 minutes to MTTR", "Alert fatigue — the initial BGP deviation alerts were deprioritized because they triggered frequently during normal operations"] },
      { type: "heading", content: "The BITSS Infrastructure Standard" },
      { type: "para", content: "Every production deployment BITSS engineers touches is built around what we call the Zero-Blast-Radius Protocol. This means every configuration change — network, application, database — must pass three gates before production: syntactic validation, semantic impact simulation, and blast-radius quantification." },
      { type: "para", content: "The semantic impact simulation is the gate most teams skip because it's hard to build. It requires maintaining a model of your production state that you can simulate changes against. But it's the gate that would have caught the Cloudflare error before it touched a single production router." },
      { type: "para", content: "Cloudflare is one of the most technically sophisticated engineering organizations on earth. If this happened to them, it can happen to anyone. The lesson isn't 'be more careful'. The lesson is 'build systems that make this class of error structurally impossible'. That's what we mean by engineering without compromise." },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
