import { asset } from "@/lib/assets";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 px-6 lg:px-16 bg-[#020305] relative z-20 w-full overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6">
            <img src={asset("/BITSS Logo Re-Design.png")} alt="BITSS" className="h-[36px] md:h-[44px] w-auto" />
            <span className="font-mono text-[16px] md:text-[20px] font-semibold tracking-[0.15em] text-white">BITSS</span>
          </div>
          <p className="text-[13px] text-white/40 leading-[1.8] max-w-[300px] mb-6 text-left">
            Enterprise architecture, native applications, and secure systems built for scale. Engineered in India for global deployment.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="font-mono text-[10px] font-bold tracking-[0.1em] text-white/60 uppercase mb-6">Architecture</h4>
          <ul className="flex flex-col gap-4 text-[13px] text-white/40 text-left">
            <li><a href="/what-we-do" className="hover:text-accent2 transition-colors">Enterprise Software</a></li>
            <li><a href="/what-we-do" className="hover:text-accent2 transition-colors">Native Mobile Apps</a></li>
            <li><a href="/what-we-do" className="hover:text-accent2 transition-colors">Headless Commerce</a></li>
            <li><a href="/what-we-do" className="hover:text-accent2 transition-colors">IoT & Hardware</a></li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="font-mono text-[10px] font-bold tracking-[0.1em] text-white/60 uppercase mb-6">Company</h4>
          <ul className="flex flex-col gap-4 text-[13px] text-white/40 text-left">
            <li><a href="/deployments" className="hover:text-white transition-colors">Deployments</a></li>
            <li><a href="/about" className="hover:text-white transition-colors">Philosophy</a></li>
            <li><a href="/what-we-think" className="hover:text-white transition-colors">Insights Pipeline</a></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1600px] mx-auto">
        <div className="font-mono text-[10px] tracking-[0.1em] font-medium text-white/30 uppercase text-center md:text-left">
          &copy; {new Date().getFullYear()} BITSS. All rights reserved. Engineered in India.
        </div>
        <div className="flex gap-6 font-mono text-[10px] tracking-[0.1em] font-medium text-white/30 uppercase">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
