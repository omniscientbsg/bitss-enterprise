const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\globals.css';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('animate-marquee')) {
    content += \n\n@keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } }
.animate-marquee { animation: marquee 30s linear infinite; };
    fs.writeFileSync(file, content, 'utf8');
}