import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 lg:px-12 h-[72px] bg-[#05070a]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-[28px] h-[28px] grid grid-cols-2 gap-[3px] transform group-hover:scale-105 transition-transform duration-300">
           <span className="bg-accent rounded-sm block shadow-[0_0_10px_rgba(232,100,42,0.4)]"></span>
           <span className="bg-accent2 rounded-sm block shadow-[0_0_10px_rgba(77,127,255,0.4)]"></span>
           <span className="bg-accent2 rounded-sm block shadow-[0_0_10px_rgba(77,127,255,0.4)]"></span>
           <span className="bg-accent rounded-sm block shadow-[0_0_10px_rgba(232,100,42,0.4)]"></span>
        </div>
        <span className="font-mono text-[14px] font-semibold tracking-[0.15em] text-white">BITSS</span>
      </Link>
      
      <div className="hidden md:flex gap-8 items-center bg-white/[0.03] px-6 py-2 rounded-full border border-white/5">
        <Link href="/what-we-do" className="font-mono text-[11px] font-medium tracking-[0.1em] text-muted decoration-none uppercase transition-colors hover:text-white">
          What We Do
        </Link>
        <div className="w-[1px] h-3 bg-white/10"></div>
        <Link href="/deployments" className="font-mono text-[11px] font-medium tracking-[0.1em] text-muted decoration-none uppercase transition-colors hover:text-white">
          Deployments
        </Link>
        <div className="w-[1px] h-3 bg-white/10"></div>
        <Link href="/what-we-think" className="font-mono text-[11px] font-medium tracking-[0.1em] text-muted decoration-none uppercase transition-colors hover:text-white">
          What We Think
        </Link>
      </div>

      <a href="#engage" className="font-mono text-[11px] font-semibold tracking-[0.1em] uppercase px-6 py-2.5 bg-white text-void rounded-full transition-all hover:bg-accent hover:text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        Engage Us
      </a>
    </nav>
  );
}
