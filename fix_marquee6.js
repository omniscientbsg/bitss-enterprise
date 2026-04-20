const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldMarqueeRegex = /<div className=\"relative w-full overflow-hidden flex\">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/;

const newMarquee = \<div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <div className="flex w-max animate-marquee">
                       {[...Array(4)].map((_, idx) => (
                          <div key={idx} className="flex items-center space-x-12 md:space-x-24 px-6 md:px-12 shrink-0">
                             <span className="group flex items-center justify-center relative cursor-crosshair">
                                <div className="absolute inset-0 bg-[#0668E1] blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-6 md:h-8 w-auto flex-shrink-0 brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10" />
                             </span>
                             <span className="group flex items-center justify-center relative cursor-crosshair">
                                <div className="absolute inset-0 bg-[#95bf47] blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" alt="Shopify" className="h-7 md:h-9 w-auto flex-shrink-0 brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10" />
                             </span>
                             <span className="group flex items-center justify-center relative cursor-crosshair">
                                <div className="absolute inset-0 bg-[#6c5b7b] blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                                <img src="https://cdn.worldvectorlogo.com/logos/hostinger.svg" alt="Hostinger" className="h-6 md:h-8 w-auto flex-shrink-0 brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10" />
                             </span>
                             <span className="group flex items-center justify-center relative cursor-crosshair">
                                <div className="absolute inset-0 bg-[#0288D1] blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full"></div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className="h-6 md:h-8 w-auto flex-shrink-0 brightness-0 invert opacity-40 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 relative z-10" />
                             </span>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>\;

content = content.replace(oldMarqueeRegex, newMarquee);
fs.writeFileSync(file, content, 'utf8');