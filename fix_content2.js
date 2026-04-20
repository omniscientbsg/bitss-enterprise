const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace('hello@bitss.in', 'info@bitss.com');
content = content.replace('Initialize Workflow', 'info@bitss.com');

// Add the phone number link right before the email link
const emailLink = '<a href="mailto:info@bitss.com"';
const newLinks = '<a href="tel:+918655509976" className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full transition-all hover:bg-white/10">+91 86555 09976</a>\n            <a href="mailto:info@bitss.com"';

content = content.replace(emailLink, newLinks);

fs.writeFileSync(file, content, 'utf8');