const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldMarquee = /<div className=\"logo-marquee-track flex whitespace-nowrap items-center w-max\">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/;

const newMarquee = \<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                       {[...Array(4)].map((_, idx) => (
                          <div key={idx} className="flex items-center justify-center space-x-12 md:space-x-24 mx-6 md:mx-12">
                             <li className="group flex items-center justify-center relative cursor-crosshair">
                                <div className="absolute inset-0 bg-[#0668E1] blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-5 md:h-8 w-auto flex-shrink-0 brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10" />
                             </li>
                             <li className="group flex items-center justify-center relative cursor-crosshair">
                                <div className="absolute inset-0 bg-[#95bf47] blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" alt="Shopify" className="h-6 md:h-9 w-auto flex-shrink-0 brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10" />
                             </li>
                             <li className="group flex items-center justify-center relative cursor-crosshair">
                                <div className="absolute inset-0 bg-[#6c5b7b] blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                                <img src="https://cdn.worldvectorlogo.com/logos/hostinger.svg" alt="Hostinger" className="h-5 md:h-8 w-auto flex-shrink-0 brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10" />
                             </li>
                             <li className="group flex items-center justify-center relative cursor-crosshair">
                                <div className="absolute inset-0 bg-[#0288D1] blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className="h-5 md:h-8 w-auto flex-shrink-0 brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10" />
                             </li>
                          </div>
                       ))}
                    </ul>
                 </div>
              </div>\;

content = content.replace(oldMarquee, newMarquee);
content = content.replace('gsap.to(\'.logo-marquee-track\', { xPercent: -50, ease: "none", duration: 25, repeat: -1 });', '');

fs.writeFileSync(file, content, 'utf8');