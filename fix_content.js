const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

const newDeployments = [
              { s: 'Defense Sector', c: 'text-[#e8642a]', t: '330 BDE HQ Readiness', d: 'Engineered an air-gapped React + Electron operational dashboard for the Indian Army. Built to aggregate and visualize brigade-level metrics including combat manpower, armored vehicle allocation, and overall war readiness.', tags: ['React', 'Electron', 'Defense Protocol'], y: '2024' },
              { s: 'High-Scale D2C', c: 'text-[#4d7fff]', t: 'boAt Nirvana Ion Launch', d: 'Architected the flagship product launch experience for Imagine Marketing (boAt). Engineered a high-performance interactive frontend featuring cinematic WebGL 3D model reveals driven by complex scroll-linked animation timelines.', tags: ['WebGL', '3D Animation', 'Scroll Architecture'], y: '2023' }
            ];

content = content.replace(/\[\s*\{\s*s:\s*'Defense Sector'[\s\S]*?\]/m, newDeployments);

content = content.replace('hello@bitss.in', 'info@bitss.com');

// Also inject the phone number next to the email button in the footer
const oldFooterAction = <a href=\"mailto:info@bitss.com\" className=\"font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-10 py-4 bg-white text-void rounded-full shadow-[0_5px_30px_rgba(255,255,255,0.15)] transition-all hover:scale-105 hover:bg-accent2 hover:text-white\">\n              Initialize Workflow\n            </a>;
const newFooterAction = <a href=\"tel:+918655509976\" className=\"font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-10 py-4 bg-white/5 text-white border border-white/10 rounded-full transition-all hover:bg-white/10\">\n              +91 86555 09976\n            </a>\n            <a href=\"mailto:info@bitss.com\" className=\"font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-10 py-4 bg-white text-void rounded-full shadow-[0_5px_30px_rgba(255,255,255,0.15)] transition-all hover:scale-105 hover:bg-accent2 hover:text-white\">\n              info@bitss.com\n            </a>;

content = content.replace(oldFooterAction, newFooterAction);

fs.writeFileSync(file, content, 'utf8');