const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Truncate the deployments array to just the top 3
const regex = /\{\[\s*\{\s*s:\s*'Defense Sector'[\s\S]*?\]\.map/m;

const newDeployments = "{[\n" +
"              { s: 'Defense Sector', c: 'text-[#e8642a]', t: '330 BDE HQ Readiness (Indian Army)', d: 'Engineered an air-gapped React + Electron operational dashboard for the Indian Army. Built to aggregate and visualize brigade-level metrics including combat manpower, armored vehicle allocation, and overall war readiness.', tags: ['React', 'Electron', 'Defense Protocol'], y: '2024' },\n" +
"              { s: 'High-Scale D2C', c: 'text-[#4d7fff]', t: 'boAt Nirvana Ion Launch', d: 'Architected the flagship product launch experience for Imagine Marketing (boAt). Engineered a high-performance interactive frontend featuring cinematic WebGL 3D model reveals driven by complex scroll-linked animation timelines.', tags: ['WebGL', '3D Animation', 'Scroll Architecture'], y: '2023' },\n" +
"              { s: 'Enterprise SaaS', c: 'text-[#2fd4a0]', t: 'GeM SaaS: Tender Automation', d: 'Architected a Next.js (React) application for Archana Associates to completely automate internal tender bidding, document generation, and compliance filing for government contracts.', tags: ['Next.js', 'Document Automation', 'B2B SaaS'], y: '2025' }\n" +
"            ].map";

content = content.replace(regex, newDeployments);

// 2. Add the "View All Deployments" button below the mapped array
const mapEndRegex = /\{\s*dep\.y\s*\}\n\s*<\/div>\n\s*<\/div>\n\s*<\/div>\n\s*\)\)}/g;

const newMapEnd = "{dep.y}\n                    </div>\n                  </div>\n                </div>\n              ))}\n            </div>\n\n            <div className=\"mt-16 flex justify-center w-full\">\n              <a href=\"/deployments\" className=\"font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full transition-all hover:bg-white/10 flex items-center gap-3\">\n                View Full Portfolio <span className=\"text-accent2\">→</span>\n              </a>";

content = content.replace(mapEndRegex, newMapEnd);

fs.writeFileSync(file, content, 'utf8');