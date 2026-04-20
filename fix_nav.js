const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\components\\Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/<Link href=\"#deployments\"/g, '<Link href=\"/deployments\"');

fs.writeFileSync(file, content, 'utf8');