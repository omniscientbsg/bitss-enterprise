const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'w-screen overflow-hidden  shadow-[inset_0_10px_20px_rgba(0,0,0,0.2)] relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]',
  'w-full overflow-hidden shadow-[inset_0_10px_20px_rgba(0,0,0,0.2)] relative'
);

fs.writeFileSync(file, content, 'utf8');