const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/\\^z/g, '&infin;');
content = content.replace(/className=\"hero-fade(.*?)\bopacity-0\b(.*?)\"/g, 'className=\"hero-fade$1$2\"');

const marqueeRegex = /\{\/\* Premium Interactive Logo Marquee \*\/\}.*?<\/div>\s*<\/div>\s*<\/div>/s;
const match = content.match(marqueeRegex);
if (match) {
  content = content.replace(match[0], '');
  content = content.replace('</section>', '</section>\n\n        ' + match[0]);
}

fs.writeFileSync(file, content, 'utf8');