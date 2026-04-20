const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The issue is the marquee is still inside the <section> flex container alongside the Left Node and Right Node.
// Let's rip it out and place it below the section closing tag.

const sectionCloseStr = '          </section>\n\n          {/* CORE NEXT-GEN ARCHITECTURE */}';

const marqueeRegex = /\{\/\* Premium Interactive Logo Marquee \*\/\}.*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/s;
const match = content.match(marqueeRegex);

if (match) {
    let marquee = match[0];
    content = content.replace(marquee, '');
    
    // Re-insert below section
    content = content.replace('</section>', '</section>\n\n          ' + marquee);
}

fs.writeFileSync(file, content, 'utf8');