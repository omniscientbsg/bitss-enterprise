const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The issue on mobile is STILL width collapse. Because they are absolutely sized with h-6 w-auto inside a span, if the span collapses due to flexbox, the image disappears.
// We must enforce min-width or shrink-0 on the span/images.

content = content.replace(/className=\"group flex items-center justify-center relative cursor-crosshair\"/g, 'className=\"group flex items-center justify-center relative cursor-crosshair shrink-0\"');

content = content.replace(/className=\"logo-marquee-track flex whitespace-nowrap items-center w-max\"/g, 'className=\"logo-marquee-track flex whitespace-nowrap items-center w-max [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]\"');

fs.writeFileSync(file, content, 'utf8');