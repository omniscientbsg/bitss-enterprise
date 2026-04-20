const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove opacity-0 from left node hero-fade elements
content = content.replace(/className=\"hero-fade(.*?)\bopacity-0\b(.*?)\"/g, 'className=\"hero-fade\"');

// 2. We extract the marquee block entirely
const marqueeRegex = /\{\/\* Premium Interactive Logo Marquee \*\/\}.*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/s;
const match = content.match(marqueeRegex);

if (match) {
    let marquee = match[0];
    content = content.replace(marquee, '');
    
    // Ensure we don't have stray </div>s left over if they belonged to the parent flex container
    // We're going to put the marquee specifically below the </div> that closes the <section className=\"min-h-[85vh]...
    // The exact split point is right above " {/* CORE NEXT-GEN ARCHITECTURE */}"
    
    const insertionPoint = '          {/* CORE NEXT-GEN ARCHITECTURE */}';
    // Let's modify the marquee classes so it behaves full-width nicely
    marquee = marquee.replace('w-screen overflow-hidden  shadow-[inset_0_10px_20px_rgba(0,0,0,0.2)] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]', 'w-full overflow-hidden shadow-[inset_0_10px_20px_rgba(0,0,0,0.2)] relative');

    content = content.replace(insertionPoint, marquee + '\n\n          ' + insertionPoint);
}

fs.writeFileSync(file, content, 'utf8');