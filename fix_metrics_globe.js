const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix the Giphy link (it probably expired or hotlink protected)
// We will replace it with a highly stable URL or base64 SVG globe.
// Let's use a native CSS/SVG animated globe so it never breaks.

const oldGif = <div className=\"absolute inset-0 bg-cover bg-center mix-blend-screen opacity-90 scale-[1.3] animate-pulse\" style={{ backgroundImage: \"url(https://media.giphy.com/media/3o7TKR1b2X2uGBYV7a/giphy.gif)\" }}></div>;

const newSvg = <svg className="w-16 h-16 text-accent2 opacity-80 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                          <circle cx="50" cy="50" r="45" strokeDasharray="4 4" />
                          <ellipse cx="50" cy="50" rx="45" ry="15" />
                          <ellipse cx="50" cy="50" rx="15" ry="45" />
                          <path d="M 5 50 H 95 M 50 5 V 95" strokeOpacity="0.5" />
                        </svg>;

content = content.replace(oldGif, newSvg);

// 2. Metric Fixes: 12 -> 63+ Enterprise Deployments
content = content.replace('gsap.to(stat12Ref.current, { innerHTML: 12, duration: 2.5, ease: "power3.out", snap: { innerHTML: 1 }, delay: \n0.8 });', 'gsap.to(stat12Ref.current, { innerHTML: 63, duration: 2.5, ease: "power3.out", snap: { innerHTML: 1 }, delay: 0.8 });');
// If regex failed due to line breaks, try straight string replace on the specific tag
content = content.replace('gsap.to(stat12Ref.current, { innerHTML: 12,', 'gsap.to(stat12Ref.current, { innerHTML: 63,');

// 3. Metric Fixes: 0 Downtime Tolerance -> 7+ Years Experience
content = content.replace('<span ref={stat0Ref}>99</span>', '<span ref={stat0Ref}>7</span><span className="text-accent text-[24px] md:text-[32px] align-super leading-none mt-2">+</span>');
content = content.replace('gsap.to(stat0Ref.current, { innerHTML: 0, duration: 1.5, ease: "power2.out", snap: { innerHTML: 1 }, delay: 1, \nonStart: () => { if(stat0Ref.current) stat0Ref.current.innerHTML = "99"; }});', 'gsap.to(stat0Ref.current, { innerHTML: 7, duration: 1.5, ease: "power2.out", snap: { innerHTML: 1 }, delay: 1 });');
// Straight replace for the GSAP line
content = content.replace(/gsap\.to\(stat0Ref\.current,\s*\{\s*innerHTML:\s*0[\s\S]*?\}\}\);/, 'gsap.to(stat0Ref.current, { innerHTML: 7, duration: 1.5, ease: "power2.out", snap: { innerHTML: 1 }, delay: 1 });');

content = content.replace('Downtime Tolerance', 'Years Experience');

fs.writeFileSync(file, content, 'utf8');