const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/\{\s*num:\s*'08',\s*title:\s*'Edge Compute Layer'[\s\S]*?\},\n/m, 
    "{ num: '08', title: 'Legacy Modernization', desc: 'Transitioning brittle, outdated software monoliths into high-speed, scalable Next.js and React Native architecture.', i: Icons.edge },\n");

fs.writeFileSync(file, content, 'utf8');