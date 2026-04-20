const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the image classes
content = content.replace(/className=\"h-6 opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 relative z-10\"/g, 
'className=\"h-6 md:h-8 w-auto flex-shrink-0 brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10\"');

content = content.replace(/className=\"h-7 opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 relative z-10\"/g, 
'className=\"h-7 md:h-9 w-auto flex-shrink-0 brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10\"');

fs.writeFileSync(file, content, 'utf8');