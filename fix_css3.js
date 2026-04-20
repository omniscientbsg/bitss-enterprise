const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\globals.css';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/@keyframes marquee \{ 0% \{ transform: translateX\(0\%\); \} 100% \{ transform: translateX\(-50\%\); \} \} \.animate-marquee \{ animation: marquee 30s linear infinite; \}/g, '');
content = content.replace(/@keyframes marquee \{ 0% \{ transform: translateX\(0\%\); \} 100% \{ transform: translateX\(-50\%\); \} \}\n\.animate-marquee \{ animation: marquee 30s linear infinite; \}/g, '');

content += '\n@theme { \n  --animate-marquee: marquee 30s linear infinite;\n  @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }\n}\n';

fs.writeFileSync(file, content, 'utf8');