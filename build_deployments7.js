const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\deployments\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/return \(\s*<>\s*<div/m, 'return (\n    <div');

fs.writeFileSync(file, content, 'utf8');