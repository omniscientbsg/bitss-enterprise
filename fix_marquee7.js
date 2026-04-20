const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/<div className=\"logo-marquee-track flex whitespace-nowrap items-center w-max\">/g, '<div className=\"flex w-max animate-marquee\">');
content = content.replace(/<div key={idx} className=\"flex items-center space-x-12 md:space-x-24 px-12\">/g, '<div key={idx} className=\"flex items-center space-x-12 md:space-x-24 px-6 md:px-12 shrink-0\">');
content = content.replace(/<div className=\"relative w-full overflow-hidden flex\">/g, '<div className=\"relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]\">');

fs.writeFileSync(file, content, 'utf8');