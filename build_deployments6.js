const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\deployments\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/<\/main>[\s\S]*?<Footer \/>[\s\S]*?<\/div>\s*\);\s*\}/g, '</main>\n      <Footer />\n    </div>\n  );\n}');

fs.writeFileSync(file, content, 'utf8');