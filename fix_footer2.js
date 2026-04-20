const fs = require('fs');
const file = 'C:\\Users\\Admin\\Documents\\BITSS\\src\\app\\page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldFooterRegex = /\{\/\* FOOTER \*\/\}\s*<footer id=\"engage\"[\s\S]*?<\/footer>/;

const newFooter = \{/* PRE-FOOTER CTA */}
      <section id="engage" className="py-[100px] px-6 lg:px-16 bg-[#040608] border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center w-full z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent2/5 rounded-full blur-[100px] pointer-events-none"></div>
        <h2 className="font-display font-medium text-[48px] md:text-[64px] text-white leading-none mb-6 relative z-10">Ready to build?</h2>
        <p className="text-[15px] text-white/50 font-light mb-10 max-w-[400px] relative z-10">Stop paying for bloated software. Architect your own digital infrastructure today.</p>
        <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
          <a href="tel:+918655509976" className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-10 py-4 bg-white/5 border border-white/10 text-white rounded-full transition-all hover:bg-white/10 hover:border-white/20 w-full sm:w-auto">
            +91 86555 09976
          </a>
          <a href="mailto:info@bitss.com" className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase px-10 py-4 bg-white text-void rounded-full shadow-[0_5px_30px_rgba(255,255,255,0.15)] transition-all hover:scale-105 hover:bg-accent2 hover:text-white w-full sm:w-auto">
            info@bitss.com
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 pt-16 pb-8 px-6 lg:px-16 bg-[#020305] relative z-10 w-full overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex flex-col gap-[2px]">
                <div className="w-4 h-[5px] bg-accent2 rounded-sm"></div>
                <div className="w-4 h-[5px] bg-accent rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">BITSS</span>
            </div>
            <p className="text-[13px] text-white/40 leading-[1.8] max-w-[300px] mb-6">
              Enterprise architecture, native applications, and secure systems built for scale. Engineered in India for global deployment.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="font-mono text-[10px] font-bold tracking-[0.1em] text-white/60 uppercase mb-6">Architecture</h4>
            <ul className="flex flex-col gap-4 text-[13px] text-white/40 text-left">
              <li><a href="#capabilities" className="hover:text-accent2 transition-colors">Enterprise Software</a></li>
              <li><a href="#capabilities" className="hover:text-accent2 transition-colors">Native Mobile Apps</a></li>
              <li><a href="#capabilities" className="hover:text-accent2 transition-colors">Headless Commerce</a></li>
              <li><a href="#capabilities" className="hover:text-accent2 transition-colors">IoT & Hardware</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="font-mono text-[10px] font-bold tracking-[0.1em] text-white/60 uppercase mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-[13px] text-white/40 text-left">
              <li><a href="#deployments" className="hover:text-white transition-colors">Deployments</a></li>
              <li><a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Engineering Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1600px] mx-auto">
          <div className="font-mono text-[10px] tracking-[0.1em] font-medium text-white/30 uppercase text-center md:text-left">
            &copy; 2022 BITSS. All rights reserved.
          </div>
          <div className="flex gap-6 font-mono text-[10px] tracking-[0.1em] font-medium text-white/30 uppercase">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>\;

content = content.replace(oldFooterRegex, newFooter);

fs.writeFileSync(file, content, 'utf8');