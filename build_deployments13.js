const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\deployments\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = "return (\n" +
"    <div className=\"bg-void font-body text-text relative min-h-screen overflow-x-hidden selection:bg-accent2/30 selection:text-white\">\n" +
"      <Navbar />\n" +
"      <main className=\"pt-[140px] lg:pt-[200px] px-6 lg:px-16 max-w-[1200px] mx-auto w-full min-h-[80vh] pb-32\">\n" +
"        <h1 className=\"font-display font-medium text-[clamp(48px,6vw,84px)] text-white leading-[1.05] tracking-tight mb-8\">Selected Deployments</h1>\n" +
"        <p className=\"text-[16px] text-white/60 max-w-[600px] leading-[1.8] font-light mb-16\">\n" +
"          A deep dive into our mission-critical systems built for absolute scale, compliance, and zero-trust security.\n" +
"        </p>\n" +
"\n" +
"        <div className=\"space-y-12\">\n" +
"          {/* PROJECT 1 */}\n" +
"          <BentoCard className=\"flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair\">\n" +
"            <div className=\"flex-1 relative z-10\">\n" +
"              <div className=\"inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-accent text-xs font-mono mb-8\">\n" +
"                <span className=\"w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_5px_#e8642a]\"></span> ZERO-TRUST SECURITY\n" +
"              </div>\n" +
"              <h3 className=\"text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-accent transition-colors\">330 BDE HQ Readiness (Indian Army)</h3>\n" +
"              <p className=\"text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]\">\n" +
"                Engineered an air-gapped React + Electron operational dashboard for the Indian Army. Built to aggregate and visualize brigade-level metrics including combat manpower, armored vehicle allocation, and overall war readiness. Designed strictly for offline, multi-factor clearance environments.\n" +
"              </p>\n" +
"              <div className=\"flex gap-3 flex-wrap\">\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">React</span>\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">Electron</span>\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">Defense Protocol</span>\n" +
"              </div>\n" +
"            </div>\n" +
"            <div className=\"absolute -top-32 -right-32 w-64 h-64 bg-accent/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none\"></div>\n" +
"          </BentoCard>\n" +
"\n" +
"          {/* PROJECT 2 */}\n" +
"          <BentoCard className=\"flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair\">\n" +
"            <div className=\"flex-1 relative z-10\">\n" +
"              <div className=\"inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-accent2 text-xs font-mono mb-8\">\n" +
"                <span className=\"w-1.5 h-1.5 rounded-full bg-accent2 shadow-[0_0_5px_#4d7fff]\"></span> HIGH-CONCURRENCY SCALE\n" +
"              </div>\n" +
"              <h3 className=\"text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-accent2 transition-colors\">boAt Nirvana Ion Launch</h3>\n" +
"              <p className=\"text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]\">\n" +
"                Architected the flagship product launch experience for Imagine Marketing (boAt). Engineered a high-performance interactive frontend featuring cinematic WebGL 3D model reveals driven by complex scroll-linked animation timelines. Edge-cached to sustain tens of thousands of concurrent flash-sale requests.\n" +
"              </p>\n" +
"              <div className=\"flex gap-3 flex-wrap\">\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">WebGL</span>\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">3D Animation</span>\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">Headless Front</span>\n" +
"              </div>\n" +
"            </div>\n" +
"            <div className=\"absolute -top-32 -right-32 w-64 h-64 bg-accent2/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none\"></div>\n" +
"          </BentoCard>\n" +
"\n" +
"          {/* PROJECT 3 */}\n" +
"          <BentoCard className=\"flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair\">\n" +
"            <div className=\"flex-1 relative z-10\">\n" +
"              <div className=\"inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-[#2fd4a0] text-xs font-mono mb-8\">\n" +
"                <span className=\"w-1.5 h-1.5 rounded-full bg-[#2fd4a0] shadow-[0_0_5px_#2fd4a0]\"></span> B2B SAAS\n" +
"              </div>\n" +
"              <h3 className=\"text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-[#2fd4a0] transition-colors\">GeM SaaS: Tender Automation</h3>\n" +
"              <p className=\"text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]\">\n" +
"                Architected a Next.js (React) application for Archana Associates to completely automate internal tender bidding, document generation, and compliance filing for government contracts. Unified multi-step document pipelines into a single intelligent portal.\n" +
"              </p>\n" +
"              <div className=\"flex gap-3 flex-wrap\">\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">Next.js</span>\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">Document Automation</span>\n" +
"              </div>\n" +
"            </div>\n" +
"            <div className=\"absolute -top-32 -right-32 w-64 h-64 bg-[#2fd4a0]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none\"></div>\n" +
"          </BentoCard>\n" +
"\n" +
"          {/* PROJECT 4 */}\n" +
"          <BentoCard className=\"flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair\">\n" +
"            <div className=\"flex-1 relative z-10\">\n" +
"              <div className=\"inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-accent text-xs font-mono mb-8\">\n" +
"                <span className=\"w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_5px_#e8642a]\"></span> PIPELINE ARCHITECTURE\n" +
"              </div>\n" +
"              <h3 className=\"text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-accent transition-colors\">Kamdhenu Protocol</h3>\n" +
"              <p className=\"text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]\">\n" +
"                Developed a comprehensive React Native web application aligning Kamdhenu's real estate projects, sales pipelines, and internal marketing execution into a unified operational dashboard. Replaced fragmented Excel tracking with a secure central database.\n" +
"              </p>\n" +
"              <div className=\"flex gap-3 flex-wrap\">\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">React Native</span>\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">CRM</span>\n" +
"              </div>\n" +
"            </div>\n" +
"            <div className=\"absolute -top-32 -right-32 w-64 h-64 bg-[#f97316]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none\"></div>\n" +
"          </BentoCard>\n" +
"\n" +
"          {/* PROJECT 5 */}\n" +
"          <BentoCard className=\"flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair\">\n" +
"            <div className=\"flex-1 relative z-10\">\n" +
"              <div className=\"inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-[#8b5cf6] text-xs font-mono mb-8\">\n" +
"                <span className=\"w-1.5 h-1.5 rounded-full bg-[#8b5cf6] shadow-[0_0_5px_#8b5cf6]\"></span> INTERNAL OPERATIONS\n" +
"              </div>\n" +
"              <h3 className=\"text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-[#8b5cf6] transition-colors\">Dunamis Project Management</h3>\n" +
"              <p className=\"text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]\">\n" +
"                Engineered an internal React Native dashboard for Dunamis Real Estate to consolidate multi-site project management, resource tracking, and operational visibility. Designed explicitly for fast deployment across remote project sites.\n" +
"              </p>\n" +
"              <div className=\"flex gap-3 flex-wrap\">\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">React Native</span>\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">Project Management</span>\n" +
"              </div>\n" +
"            </div>\n" +
"            <div className=\"absolute -top-32 -right-32 w-64 h-64 bg-[#8b5cf6]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none\"></div>\n" +
"          </BentoCard>\n" +
"\n" +
"          {/* PROJECT 6 */}\n" +
"          <BentoCard className=\"flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair\">\n" +
"            <div className=\"flex-1 relative z-10\">\n" +
"              <div className=\"inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-[#ec4899] text-xs font-mono mb-8\">\n" +
"                <span className=\"w-1.5 h-1.5 rounded-full bg-[#ec4899] shadow-[0_0_5px_#ec4899]\"></span> HEADLESS COMMERCE\n" +
"              </div>\n" +
"              <h3 className=\"text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-[#ec4899] transition-colors\">Oxygen Commerce Fleet</h3>\n" +
"              <p className=\"text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]\">\n" +
"                Deployed a multi-brand headless e-commerce architecture (Snowy Glow, Magical Touch, Royal Pearl, Richlook). Replaced standard monolithic storefronts with high-speed React Native (Oxygen) frontends tethered to Shopify backend APIs.\n" +
"              </p>\n" +
"              <div className=\"flex gap-3 flex-wrap\">\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">Headless Shopify</span>\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">React Native (Oxygen)</span>\n" +
"              </div>\n" +
"            </div>\n" +
"            <div className=\"absolute -top-32 -right-32 w-64 h-64 bg-[#ec4899]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none\"></div>\n" +
"          </BentoCard>\n" +
"\n" +
"          {/* PROJECT 7 */}\n" +
"          <BentoCard className=\"flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair\">\n" +
"            <div className=\"flex-1 relative z-10\">\n" +
"              <div className=\"inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-[#14b8a6] text-xs font-mono mb-8\">\n" +
"                <span className=\"w-1.5 h-1.5 rounded-full bg-[#14b8a6] shadow-[0_0_5px_#14b8a6]\"></span> HOSPITALITY TECH\n" +
"              </div>\n" +
"              <h3 className=\"text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-[#14b8a6] transition-colors\">Gazebo CRM & Booking</h3>\n" +
"              <p className=\"text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]\">\n" +
"                Designed and built a React web application for Gazebo, combining real-time restaurant reservation routing with an integrated back-office CRM. Streamlined floor management and guest tracking into a single touchpoint.\n" +
"              </p>\n" +
"              <div className=\"flex gap-3 flex-wrap\">\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">React</span>\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">Booking Engine</span>\n" +
"              </div>\n" +
"            </div>\n" +
"            <div className=\"absolute -top-32 -right-32 w-64 h-64 bg-[#14b8a6]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none\"></div>\n" +
"          </BentoCard>\n" +
"\n" +
"          {/* PROJECT 8 */}\n" +
"          <BentoCard className=\"flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair\">\n" +
"            <div className=\"flex-1 relative z-10\">\n" +
"              <div className=\"inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-accent2 text-xs font-mono mb-8\">\n" +
"                <span className=\"w-1.5 h-1.5 rounded-full bg-accent2 shadow-[0_0_5px_#4d7fff]\"></span> B2B PORTAL\n" +
"              </div>\n" +
"              <h3 className=\"text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-accent2 transition-colors\">PropCubix Agency Hub</h3>\n" +
"              <p className=\"text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]\">\n" +
"                Developed a high-conversion Next.js portal allowing independent real estate agents to register, onboard, and plug directly into the PropCubix proprietary sales funnel and client database. Engineered with complex role-based auth routing.\n" +
"              </p>\n" +
"              <div className=\"flex gap-3 flex-wrap\">\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">Next.js</span>\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">Auth Routing</span>\n" +
"              </div>\n" +
"            </div>\n" +
"            <div className=\"absolute -top-32 -right-32 w-64 h-64 bg-accent2/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none\"></div>\n" +
"          </BentoCard>\n" +
"\n" +
"          {/* PROJECT 9 */}\n" +
"          <BentoCard className=\"flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair\">\n" +
"            <div className=\"flex-1 relative z-10\">\n" +
"              <div className=\"inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-[#eab308] text-xs font-mono mb-8\">\n" +
"                <span className=\"w-1.5 h-1.5 rounded-full bg-[#eab308] shadow-[0_0_5px_#eab308]\"></span> IOT & HARDWARE\n" +
"              </div>\n" +
"              <h3 className=\"text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-[#eab308] transition-colors\">Shanmukhananda Hall IoT</h3>\n" +
"              <p className=\"text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]\">\n" +
"                Engineered custom hardware and low-level firmware solutions for Asia's largest auditorium. Built proprietary IoT integrations to manage massive infrastructure scale, facility tracking, and hardware automation across the complex.\n" +
"              </p>\n" +
"              <div className=\"flex gap-3 flex-wrap\">\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">IoT</span>\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">Custom Firmware</span>\n" +
"              </div>\n" +
"            </div>\n" +
"            <div className=\"absolute -top-32 -right-32 w-64 h-64 bg-[#eab308]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none\"></div>\n" +
"          </BentoCard>\n" +
"\n" +
"          {/* PROJECT 10 */}\n" +
"          <BentoCard className=\"flex flex-col lg:flex-row gap-8 lg:gap-16 group p-8 lg:p-12 border border-white/5 bg-[#0b0e14] hover:bg-[#11151e] transition-colors duration-500 shadow-xl overflow-hidden cursor-crosshair\">\n" +
"            <div className=\"flex-1 relative z-10\">\n" +
"              <div className=\"inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111520] border border-white/5 text-[#64748b] text-xs font-mono mb-8\">\n" +
"                <span className=\"w-1.5 h-1.5 rounded-full bg-[#64748b] shadow-[0_0_5px_#64748b]\"></span> MANUFACTURING ERP\n" +
"              </div>\n" +
"              <h3 className=\"text-4xl font-display font-medium tracking-tight mb-4 text-white group-hover:text-[#64748b] transition-colors\">Metplast Enterprise OS</h3>\n" +
"              <p className=\"text-white/60 leading-[1.8] group-hover:text-white/80 transition-colors mb-6 text-[15px]\">\n" +
"                Architected a full-scale Next.js ERP, CRM, and website replacing legacy monolithic software. Achieved total autonomous business automation from lead acquisition to factory floor operations, featuring a native Android field-service app with offline SQLite caching.\n" +
"              </p>\n" +
"              <div className=\"flex gap-3 flex-wrap\">\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">Next.js</span>\n" +
"                <span className=\"text-xs font-mono text-white/50 px-3 py-1.5 bg-white/5 rounded border border-white/5\">SQLite Caching</span>\n" +
"              </div>\n" +
"            </div>\n" +
"            <div className=\"absolute -top-32 -right-32 w-64 h-64 bg-[#64748b]/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none\"></div>\n" +
"          </BentoCard>\n" +
"\n" +
"        </div>\n" +
"      </main>\n" +
"      <Footer />\n" +
"    </div>\n" +
"  );\n" +
"}\n";

let newContentComplete = content.replace(/return \([\s\S]*?\);\n\}/m, replacement);
// We need to make sure the import is correct and there's no duplicate export
fs.writeFileSync(file, newContentComplete, 'utf8');