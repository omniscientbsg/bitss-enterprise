const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The GSAP scroll trigger is hiding sections globally because opacity: 0 is being applied but ScrollTrigger isn't firing correctly on the exported static site due to layout height calculation timing.

// We will remove opacity: 0 from the start state and use a more resilient approach, or just remove gsap-reveal class entirely to ensure content is visible.
content = content.replace(/gsap-reveal/g, '');

// Also remove the GSAP initialization for these sections to prevent it from hiding them
const gsapRevealCode = /\/\/ Elegant Structural Scroll Reveal\s*const sections = gsap\.utils\.toArray\('\.gsap-reveal'\);\s*sections\.forEach\(\(sec: any\) => \{\s*gsap\.fromTo\(sec,\s*\{\s*opacity: 0, y: 40, filter: \"blur\(4px\)\"\s*\},\s*\{\s*opacity: 1, y: 0, filter: \"blur\(0px\)\", duration: 1\.6, ease: \"power3\.out\", scrollTrigger: \{\s*trigger: sec, start: \"top 85%\"\s*\}\s*\}\s*\);\s*\}\);/gs;

content = content.replace(gsapRevealCode, '');

fs.writeFileSync(file, content, 'utf8');