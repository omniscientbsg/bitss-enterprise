const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /\{\[\s*\{ s: \'Defense Sector[\s\S]*?\]\.map/g;

const newArr = {[
              { s: 'Defense Sector', c: 'text-[#e8642a]', t: '330 BDE HQ Readiness', d: 'Engineered an air-gapped React + Electron operational dashboard for the Indian Army. Built to aggregate and visualize brigade-level metrics including combat manpower, armored vehicle allocation, and overall war readiness.', tags: ['React', 'Electron', 'Defense Protocol'], y: '2024' },
              { s: 'High-Scale D2C', c: 'text-[#4d7fff]', t: 'boAt Nirvana Ion Launch', d: 'Architected the flagship product launch experience for Imagine Marketing (boAt). Engineered a high-performance interactive frontend featuring cinematic WebGL 3D model reveals driven by complex scroll-linked animation timelines.', tags: ['WebGL', '3D Animation', 'Scroll Architecture'], y: '2023' }
            ].map;

content = content.replace(regex, newArr);

fs.writeFileSync(file, content, 'utf8');