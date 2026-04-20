const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /\{\s*num:\s*'06',\s*title:\s*'Predictive Analytics'[\s\S]*?\}\s*\]\.map/m;

const newCapabilities = "{ num: '06', title: 'CRM & ERP Solutions', desc: 'Centralized platforms to manage sales funnels, automate leads, and streamline business operations across all departments.', i: Icons.analytics },\n" +
"                  { num: '07', title: 'B2B Client Portals', desc: 'Secure, high-conversion hubs allowing partners and clients to plug directly into your proprietary databases and workflows.', i: Icons.identity },\n" +
"                  { num: '08', title: 'Legacy Modernization', desc: 'Transitioning brittle, outdated software monoliths into high-speed, scalable Next.js and React Native architecture.', i: Icons.edge },\n" +
"                ].map";

content = content.replace(regex, newCapabilities);

fs.writeFileSync(file, content, 'utf8');