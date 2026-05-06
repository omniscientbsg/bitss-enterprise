export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  description: string;
  accent: string;
  tags: string[];
  coverImage: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  architecture: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "proj-1",
    slug: "330-bde-hq-readiness",
    title: "330 BDE HQ Readiness",
    client: "Indian Army",
    category: "ZERO-TRUST SECURITY",
    description: "Engineered an air-gapped React + Electron operational dashboard for the Indian Army. Built to aggregate and visualize brigade-level metrics including combat manpower, armored vehicle allocation, and overall war readiness.",
    accent: "text-accent",
    tags: ["React", "Electron", "Defense Protocol"],
    coverImage: "https://images.unsplash.com/photo-1579227114347-15d08fc37cae?auto=format&fit=crop&q=80&w=2670",
    metrics: [
      { label: "Deployment", value: "Air-Gapped" },
      { label: "Data Latency", value: "< 50ms" },
      { label: "Clearance", value: "Multi-Factor" }
    ],
    challenge: "The brigade command required a centralized dashboard to aggregate real-time logistics, troop allocation, and armored readiness. However, standard web protocols were forbidden due to defense security mandates. The system had to run completely offline on secure intranets, requiring zero external dependencies, CDN calls, or telemetry.",
    solution: "We designed a localized React application compiled into an Electron executable. This guaranteed that the dashboard ran entirely as a sandboxed local client. All assets, fonts, and logic were bundled directly into the executable, creating a completely self-contained architecture.",
    architecture: [
      "React/TypeScript frontend with zero-trust local bindings",
      "Electron packaging for secure, cross-platform local execution",
      "Encrypted SQLite local storage for state persistence",
      "Air-gapped update protocol via secure USB payload"
    ]
  },
  {
    id: "proj-2",
    slug: "boat-nirvana-ion",
    title: "boAt Nirvana Ion Launch",
    client: "Imagine Marketing (boAt)",
    category: "HIGH-CONCURRENCY SCALE",
    description: "Architected the flagship product launch experience for Imagine Marketing (boAt). Engineered a high-performance interactive frontend featuring cinematic WebGL 3D model reveals driven by complex scroll-linked animation timelines.",
    accent: "text-accent2",
    tags: ["WebGL", "3D Animation", "Headless Front"],
    coverImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2670",
    metrics: [
      { label: "Peak Traffic", value: "85k+ CPM" },
      { label: "3D Render", value: "60 FPS" },
      { label: "Conversion", value: "+40%" }
    ],
    challenge: "The launch of the Nirvana Ion flagship earbuds required an Apple-grade visual experience with 3D product renders controlled by user scroll. More critically, the launch page had to withstand massive flash-sale traffic spikes without degrading the 3D performance or crashing the underlying Shopify storefront.",
    solution: "We decoupled the visual experience from the commerce engine. Using React Three Fiber and GSAP, we built a standalone headless frontend that cached static assets aggressively at the edge. The 3D models were highly optimized via Draco compression, ensuring instant load times even on mid-tier mobile devices.",
    architecture: [
      "Next.js SSG for immediate first-contentful paint",
      "React Three Fiber + GSAP for scroll-hijacked WebGL rendering",
      "Shopify Storefront API for headless cart management",
      "Cloudflare CDN edge-caching to absorb flash-sale concurrency"
    ]
  },
  {
    id: "proj-3",
    slug: "gem-saas-tender-automation",
    title: "GeM SaaS: Tender Automation",
    client: "Archana Associates",
    category: "B2B SAAS",
    description: "Architected a Next.js (React) application for Archana Associates to completely automate internal tender bidding, document generation, and compliance filing for government contracts.",
    accent: "text-[#2fd4a0]",
    tags: ["Next.js", "Document Automation"],
    coverImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2670",
    metrics: [
      { label: "Processing", value: "10x Faster" },
      { label: "Compliance", value: "100% Validated" },
      { label: "API Calls", value: "GeM Native" }
    ],
    challenge: "Bidding on the Government e-Marketplace (GeM) requires assembling massive, highly specific compliance documents (ATC, MII). Archana Associates was losing hundreds of man-hours manually copy-pasting data into Word documents, leading to formatting errors and rejected multi-crore bids.",
    solution: "We built a specialized Next.js SaaS portal integrating `pdf-lib` and AI extraction. The system parses GeM tender PDFs automatically, extracts the required clauses, and programmatically generates perfectly formatted, digitally signed compliance documents ready for immediate submission.",
    architecture: [
      "Next.js App Router for server-side PDF manipulation",
      "PostgreSQL + Prisma for tracking historical bid outcomes",
      "LLM integration (Gemini/Claude) for automated clause parsing",
      "Dynamic Canvas/PDF generation layer for instant document export"
    ]
  },
  {
    id: "proj-4",
    slug: "kamdhenu-protocol",
    title: "Kamdhenu Protocol",
    client: "Kamdhenu Real Estate",
    category: "PIPELINE ARCHITECTURE",
    description: "Developed a comprehensive React Native web application aligning Kamdhenu's real estate projects, sales pipelines, and internal marketing execution into a unified operational dashboard.",
    accent: "text-accent",
    tags: ["React Native", "CRM"],
    coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2670",
    metrics: [
      { label: "Data Integrity", value: "Single Truth" },
      { label: "UI Velocity", value: "Sub-100ms" },
      { label: "Auth", value: "Role-Based" }
    ],
    challenge: "The real estate firm was managing multi-crore property portfolios through fragmented Excel sheets and WhatsApp groups. Sales agents had no real-time visibility into inventory, leading to double-booking and massive data leakage.",
    solution: "We architected a unified React Native operational dashboard. It provides a real-time ledger of all property inventory, locks units immediately upon booking, and provides management with top-down analytics on sales velocity across different project sites.",
    architecture: [
      "React Native Web for cross-platform unified code deployment",
      "Node.js/Express backend with Redis caching for instant inventory checks",
      "Strict Role-Based Access Control (RBAC) separating Agents from Admins",
      "PostgreSQL transactional ledger to prevent double-booking"
    ]
  },
  {
    id: "proj-5",
    slug: "dunamis-project-management",
    title: "Dunamis Project Management",
    client: "Dunamis Real Estate",
    category: "INTERNAL OPERATIONS",
    description: "Engineered an internal React Native dashboard for Dunamis Real Estate to consolidate multi-site project management, resource tracking, and operational visibility.",
    accent: "text-[#8b5cf6]",
    tags: ["React Native", "Project Management"],
    coverImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2670",
    metrics: [
      { label: "Sync", value: "Offline-First" },
      { label: "Platform", value: "iOS & Android" },
      { label: "Reporting", value: "Automated" }
    ],
    challenge: "Project managers on remote construction sites often lacked stable internet connections, making cloud-only SaaS tools useless. They needed a way to log daily material usage, worker attendance, and structural progress without waiting to get back to the office.",
    solution: "We deployed an offline-first mobile application using React Native and WatermelonDB. Site managers can log all data throughout the day completely offline. The moment the device detects a stable network, it runs a background sync queue, resolving conflicts and updating the central cloud dashboard.",
    architecture: [
      "React Native (Expo) for rapid native deployment",
      "WatermelonDB for high-performance offline SQLite caching",
      "Custom conflict-resolution synchronization engine",
      "AWS S3 for remote image asset management (site photos)"
    ]
  },
  {
    id: "proj-6",
    slug: "oxygen-commerce-fleet",
    title: "Oxygen Commerce Fleet",
    client: "Multi-Brand Conglomerate",
    category: "HEADLESS COMMERCE",
    description: "Deployed a multi-brand headless e-commerce architecture. Replaced standard monolithic storefronts with high-speed React Native (Oxygen) frontends tethered to Shopify backend APIs.",
    accent: "text-[#ec4899]",
    tags: ["Headless Shopify", "React Native (Oxygen)"],
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2670",
    metrics: [
      { label: "Core Web Vitals", value: "99/100" },
      { label: "Checkout", value: "Shopify Native" },
      { label: "Uptime", value: "99.99%" }
    ],
    challenge: "The client operated four distinct beauty and apparel brands (Snowy Glow, Magical Touch, Royal Pearl, Richlook). Managing four separate monolithic Shopify instances was a nightmare for their dev team, and the liquid templates were bottlenecking page load speeds, hurting SEO.",
    solution: "We stripped the frontend away from Shopify. We built a unified headless monorepo using Hydrogen/Remix. This allowed the client to deploy four completely custom, lightning-fast frontends while centralizing inventory, orders, and checkout through a single Shopify Plus admin backend.",
    architecture: [
      "Remix/Hydrogen edge-rendered frontend",
      "Shopify Storefront GraphQL API for dynamic inventory fetching",
      "Tailwind CSS with discrete brand-token themes",
      "Vercel Edge network deployment for sub-50ms TTFB"
    ]
  },
  {
    id: "proj-7",
    slug: "gazebo-crm-booking",
    title: "Gazebo CRM & Booking",
    client: "Gazebo Hospitality",
    category: "HOSPITALITY TECH",
    description: "Designed and built a React web application for Gazebo, combining real-time restaurant reservation routing with an integrated back-office CRM.",
    accent: "text-[#14b8a6]",
    tags: ["React", "Booking Engine"],
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2670",
    metrics: [
      { label: "Bookings", value: "Real-Time" },
      { label: "Table Map", value: "Dynamic" },
      { label: "CRM", value: "Integrated" }
    ],
    challenge: "Gazebo needed a proprietary system to handle high-volume reservations during peak dining hours without paying exorbitant per-cover fees to third-party aggregators (like Zomato or OpenTable). They also needed a system that tracked VIP guest preferences seamlessly.",
    solution: "We built a custom React web application with a live WebSocket-driven table map. Hosts can drag and drop reservations onto physical tables, while the backend CRM automatically surfaces guest preferences (allergies, favorite wine) the moment their phone number is entered.",
    architecture: [
      "React/TypeScript frontend with dynamic drag-and-drop grid",
      "Node.js + Socket.io for real-time state sync across multiple iPad terminals",
      "Twilio API integration for automated SMS booking confirmations",
      "PostgreSQL backend optimized for fast date-range querying"
    ]
  },
  {
    id: "proj-8",
    slug: "propcubix-agency-hub",
    title: "PropCubix Agency Hub",
    client: "PropCubix",
    category: "B2B PORTAL",
    description: "Developed a high-conversion Next.js portal allowing independent real estate agents to register, onboard, and plug directly into the PropCubix proprietary sales funnel.",
    accent: "text-[#4d7fff]",
    tags: ["Next.js", "Auth Routing"],
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2670",
    metrics: [
      { label: "Onboarding", value: "Automated" },
      { label: "Payouts", value: "Ledger-Tracked" },
      { label: "Security", value: "JWT + Session" }
    ],
    challenge: "PropCubix was expanding its broker network rapidly but faced massive friction in onboarding independent agents. The manual KYC verification and commission tracking process was scaling poorly, leading to delayed payouts and frustrated partners.",
    solution: "We engineered a self-serve B2B portal. Agents can upload their RERA certificates and KYC documents directly. Once approved by admins, they unlock access to marketing collateral, a lead submission portal, and a transparent commission tracking ledger—all protected by strict JWT auth.",
    architecture: [
      "Next.js 15 App Router with nested layout authorization",
      "Prisma ORM with SQLite (scalable to Postgres) for relational data mapping",
      "NextAuth.js for secure session management",
      "AWS S3 for secure document/KYC storage"
    ]
  },
  {
    id: "proj-9",
    slug: "shanmukhananda-hall-iot",
    title: "Shanmukhananda Hall IoT",
    client: "Shanmukhananda Fine Arts",
    category: "IOT & HARDWARE",
    description: "Engineered custom hardware and low-level firmware solutions for Asia's largest auditorium to manage massive infrastructure scale and hardware automation.",
    accent: "text-[#eab308]",
    tags: ["IoT", "Custom Firmware"],
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2670",
    metrics: [
      { label: "Sensors", value: "Fleet Managed" },
      { label: "Protocol", value: "MQTT" },
      { label: "Latency", value: "Milliseconds" }
    ],
    challenge: "Managing physical infrastructure (HVAC, lighting, acoustic parameters) in an auditorium seating over 2,700 people was entirely manual. The facility managers needed a centralized command center to monitor environmental data and control hardware remotely without relying on public internet (due to reliability concerns).",
    solution: "We deployed an on-premise Edge computing architecture. Custom microcontrollers running lightweight C++ firmware communicate over a local MQTT broker. We built a local React dashboard that connects directly to the broker, giving the control room instant, real-time command over the entire facility's hardware grid.",
    architecture: [
      "ESP32 microcontrollers with custom C++ firmware",
      "Local MQTT Broker (Mosquitto) for high-throughput sensor telemetry",
      "React/Node.js control dashboard deployed on a local server rack",
      "Time-series database (InfluxDB) for environmental analytics"
    ]
  },
  {
    id: "proj-10",
    slug: "metplast-enterprise-os",
    title: "Metplast Enterprise OS",
    client: "Metplast Industries",
    category: "MANUFACTURING ERP",
    description: "Architected a full-scale Next.js ERP, CRM, and website replacing legacy monolithic software. Achieved total autonomous business automation from lead acquisition to factory floor operations.",
    accent: "text-[#64748b]",
    tags: ["Next.js", "SQLite Caching", "React Native"],
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2670",
    metrics: [
      { label: "Scale", value: "Full Enterprise" },
      { label: "Modules", value: "12+ Integrated" },
      { label: "Uptime", value: "Continuous" }
    ],
    challenge: "Metplast Industries was bogged down by a fractured software stack: Tally for accounting, Excel for inventory, WhatsApp for field sales, and paper for the factory floor. They needed a single, unified operating system that could handle everything from initial web lead to final dispatch.",
    solution: "We built the Metplast OS—a sweeping, multi-platform architecture. The public Next.js website feeds leads directly into the CRM. The React Native mobile app allows field sales teams to log orders offline. The factory floor uses a tablet interface to track inventory consumption, all syncing back to a central PostgreSQL brain.",
    architecture: [
      "Next.js full-stack web architecture for admin, CRM, and public facing sites",
      "React Native field-force mobile application with offline capabilities",
      "PostgreSQL + Prisma for massive relational data structuring",
      "Automated CI/CD deployment pipelines on AWS"
    ]
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}