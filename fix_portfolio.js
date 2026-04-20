const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /\{\[\s*\{\s*s:\s*'Defense Sector'[\s\S]*?\]\.map/m;

const newDeployments = {[
              { s: 'Defense Sector', c: 'text-[#e8642a]', t: '330 BDE HQ Readiness', d: 'Engineered an air-gapped React + Electron operational dashboard for the Indian Army. Built to aggregate and visualize brigade-level metrics including combat manpower, armored vehicle allocation, and overall war readiness.', tags: ['React', 'Electron', 'Defense Protocol'], y: '2024' },
              { s: 'High-Scale D2C', c: 'text-[#4d7fff]', t: 'boAt Nirvana Ion Launch', d: 'Architected the flagship product launch experience for Imagine Marketing (boAt). Engineered a high-performance interactive frontend featuring cinematic WebGL 3D model reveals driven by complex scroll-linked animation timelines.', tags: ['WebGL', '3D Animation', 'Scroll Architecture'], y: '2023' },
              { s: 'Enterprise SaaS', c: 'text-[#2fd4a0]', t: 'GeM SaaS: Tender Automation', d: 'Architected a Next.js (React) application for Archana Associates to completely automate internal tender bidding, document generation, and compliance filing for government contracts.', tags: ['Next.js', 'Document Automation', 'B2B SaaS'], y: '2025' },
              { s: 'Real Estate CRM', c: 'text-[#f97316]', t: 'Kamdhenu Protocol', d: 'Developed a comprehensive React native web application aligning Kamdhenu\\'s real estate projects, sales pipelines, and internal marketing execution into a unified operational dashboard.', tags: ['React', 'CRM', 'Sales Pipeline'], y: '2024' },
              { s: 'Internal Operations', c: 'text-[#8b5cf6]', t: 'Dunamis Project Management', d: 'Engineered an internal React Native dashboard for Dunamis Real Estate to consolidate multi-site project management, resource tracking, and operational visibility.', tags: ['React Native', 'Project Management'], y: '2024' },
              { s: 'Headless E-Commerce', c: 'text-[#ec4899]', t: 'Oxygen Commerce Fleet', d: 'Deployed a multi-brand headless e-commerce architecture (Snowy Glow, Magical Touch, Royal Pearl, Richlook). Replaced standard monolithic storefronts with high-speed React Native (Oxygen) frontends tethered to Shopify APIs.', tags: ['Headless Shopify', 'React Native (Oxygen)'], y: '2025' },
              { s: 'Hospitality Tech', c: 'text-[#14b8a6]', t: 'Gazebo CRM & Booking', d: 'Designed and built a React web application for Gazebo, combining real-time restaurant reservation routing with an integrated back-office CRM.', tags: ['React', 'Booking Engine', 'Hospitality CRM'], y: '2024' },
              { s: 'Real Estate Portal', c: 'text-[#3b82f6]', t: 'PropCubix Agency Hub', d: 'Developed a high-conversion Next.js portal allowing independent real estate agents to register, onboard, and plug directly into the PropCubix proprietary sales funnel and client database.', tags: ['Next.js', 'B2B Portal', 'Auth Routing'], y: '2026' },
              { s: 'IoT & Hardware', c: 'text-[#eab308]', t: 'Shanmukhananda Hall IoT', d: 'Engineered custom hardware and low-level firmware solutions for Asia\\'s largest auditorium. Built proprietary IoT integrations to manage infrastructure scale and hardware automation.', tags: ['IoT', 'Custom Firmware', 'Hardware Integration'], y: '2023' },
              { s: 'Manufacturing ERP', c: 'text-[#64748b]', t: 'Metplast Enterprise OS', d: 'Architected a full-scale Next.js ERP, CRM, and website replacing legacy monolithic software. Achieved total autonomous business automation from sales acquisition to factory floor operations.', tags: ['Next.js', 'Custom ERP', 'Manufacturing'], y: '2026' }
            ].map;

content = content.replace(regex, newDeployments);

fs.writeFileSync(file, content, 'utf8');