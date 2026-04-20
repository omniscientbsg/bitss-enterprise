const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The regex I used earlier broke the code. It replaced the classname but left the javascript block intact but broken gsap.utils.toArray('.')
const badCodeRegex = /\/\/ Elegant Structural Scroll Reveal\s*const sections = gsap\.utils\.toArray\('\.'\);\s*sections\.forEach\(\(sec: any\) => \{\s*gsap\.fromTo\(sec,\s*\{\s*opacity: 0, y: 40, filter: "blur\(4px\)"\s*\},\s*\{\s*opacity: 1, y: 0, filter: "blur\(0px\)", duration: 1\.6, ease: "power3\.out", scrollTrigger: \{\s*trigger: sec, start: "top 85%"\s*\}\s*\}\s*\);\s*\}\);/gs;

content = content.replace(badCodeRegex, '');

fs.writeFileSync(file, content, 'utf8');