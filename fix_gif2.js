const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<svg className=\"w-6 h-6 lg:w-8 lg:h-8 text-accent2 shadow-\[0_0_10px_rgba\(77,127,255,0\.5\)\]\"[\s\S]*?<\/svg>/;

const newGif = \<div className="absolute inset-0 bg-cover bg-center mix-blend-screen opacity-90 scale-150" style={{ backgroundImage: 'url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjR6bzM3NzhlZjZzMjF0azgxeTZweTNnbWhqaTN2ZmhlZjI0czBwayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPm3BGBJYY4COgE/giphy.gif)' }}></div>\;

content = content.replace(regex, newGif);

fs.writeFileSync(file, content, 'utf8');