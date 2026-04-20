const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /\{\s*num:\s*'08',\s*title:\s*'Edge Compute Layer'[\s\S]*?\}\s*,/m;
const newCap = "{ num: '08', title: 'Legacy Modernization', desc: 'Transitioning brittle, outdated software monoliths into high-speed, scalable Next.js and React Native architecture.', i: Icons.edge },";

content = content.replace(regex, newCap);

fs.writeFileSync(file, content, 'utf8');