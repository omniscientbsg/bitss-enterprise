const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/\]\.map\(\(dep, i\) => \(/, '].map((cap, i) => (');

fs.writeFileSync(file, content, 'utf8');