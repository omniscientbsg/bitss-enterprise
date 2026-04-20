const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix the massive mobile hero gap by making min-h-[85vh] only apply on large screens
content = content.replace('className=\"min-h-[85vh] flex flex-col lg:flex-row relative overflow-hidden w-full\"', 'className=\"min-h-0 lg:min-h-[85vh] flex flex-col lg:flex-row relative overflow-hidden w-full\"');

// Reduce vertical padding on mobile for left node
content = content.replace('p-6 md:p-10 lg:pl-16 lg:pt-[120px] lg:pb-[100px]', 'p-6 py-12 md:p-10 lg:pl-16 lg:pt-[120px] lg:pb-[100px]');

// Reduce spacing in logo marquee on mobile
content = content.replace(/space-x-24/g, 'space-x-12 md:space-x-24');

fs.writeFileSync(file, content, 'utf8');