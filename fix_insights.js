const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the placeholder insights array with real, high-end technical architecture titles.

const regex = /\{\[1,2,3,4,5,6\]\.map\(\(it\) => \([\s\S]*?\}\)\)/g;

const insightsData = [
  { tag: "Architecture Review", title: "Migrating Legacy Monoliths to Next.js App Router" },
  { tag: "Defense Tech", title: "Implementing Zero-Trust Protocols in Air-Gapped Environments" },
  { tag: "E-Commerce", title: "Edge-Caching Strategies for 50k+ Concurrent Checkout Requests" },
  { tag: "Mobile Systems", title: "Offline-First SQLite Caching in React Native Field Apps" },
  { tag: "Database Design", title: "Scaling PostgreSQL for Real-Time Manufacturing OEE" },
  { tag: "Healthcare Compliance", title: "Architecting HIPAA-Ready Data Pipelines in Node.js" }
].map((post, idx) => (
  <Link href="/what-we-think" key={idx} className="w-[300px] md:w-[400px] h-[250px] md:h-[300px] rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-end hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 group relative overflow-hidden">
     <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent z-0 opacity-80 group-hover:opacity-100 transition-opacity"></div>
     <div className="relative z-10">
        <div className="font-mono text-[10px] text-accent mb-3 uppercase tracking-widest">{post.tag}</div>
        <div className="font-display font-medium text-[24px] text-white leading-tight group-hover:text-accent2 transition-colors duration-300">{post.title}</div>
     </div>
  </Link>
));

content = content.replace(regex, insightsData);

fs.writeFileSync(file, content, 'utf8');