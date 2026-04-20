const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\deployments\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '  return (\n    <>\n      <Navbar />\n      <main className="flex-1 pt-32 px-6 max-w-7xl mx-auto w-full min-h-[80vh]">\n        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-display font-medium text-[clamp(48px,6vw,84px)] text-white leading-[1.05] tracking-tight mb-8">Selected Deployments</h1>',
  '  return (\n    <div className="bg-void font-body text-text relative min-h-screen overflow-x-hidden selection:bg-accent2/30 selection:text-white">\n      <Navbar />\n      <main className="pt-[140px] lg:pt-[200px] px-6 lg:px-16 max-w-[1200px] mx-auto w-full min-h-[80vh] pb-32">\n        <h1 className="font-display font-medium text-[clamp(48px,6vw,84px)] text-white leading-[1.05] tracking-tight mb-8">Selected Deployments</h1>'
);

fs.writeFileSync(file, content, 'utf8');