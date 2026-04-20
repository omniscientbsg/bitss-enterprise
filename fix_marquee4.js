const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/className=\"hero-fade(.*?)\bopacity-0\b(.*?)\"/g, 'className=\"hero-fade\"');

// Just target the marquee classes directly without moving it in the DOM structure
content = content.replace('w-screen overflow-hidden  shadow-[inset_0_10px_20px_rgba(0,0,0,0.2)] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]', 'w-full overflow-hidden shadow-[inset_0_10px_20px_rgba(0,0,0,0.2)] relative');

fs.writeFileSync(file, content, 'utf8');