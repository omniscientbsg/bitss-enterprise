const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the static SVG lock icon animation with a highly professional animated 3rd party GIF
// We will use a premium wireframe/globe or data flow GIF inside that central node box.

const oldSvg = <svg className="w-6 h-6 lg:w-8 lg:h-8 text-accent2 shadow-[0_0_10px_rgba(77,127,255,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">\n                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />\n                        </svg>;

// We replace the lock SVG with a high-end data flow / globe gif and ensure it fits perfectly.
// Using a professional data sphere/wireframe from Giphy that loops smoothly.
const newGif = <div className="absolute inset-0 bg-cover bg-center mix-blend-screen opacity-80" style={{ backgroundImage: 'url(https://media.giphy.com/media/3o7TKR1b2X2uGBYV7a/giphy.gif)' }}></div>;

content = content.replace(oldSvg, newGif);

fs.writeFileSync(file, content, 'utf8');