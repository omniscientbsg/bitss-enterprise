"use client";
import Link from "next/link";
import { useState } from "react";
import { asset } from "@/lib/assets";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleEngage = () => {
    window.dispatchEvent(new CustomEvent("bitss-engage"));
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 lg:px-12 h-[72px] bg-[#05070a]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <Link href="/" className="flex items-center gap-3 group">
          <img src={asset("/BITSS Logo Re-Design.png")} alt="BITSS" className="h-[36px] md:h-[44px] w-auto transition-transform duration-300 transform group-hover:scale-105" />
          <span className="font-mono text-[16px] md:text-[20px] font-semibold tracking-[0.15em] text-white">BITSS</span>
        </Link>

        <div className="hidden md:flex gap-8 items-center bg-white/[0.03] px-6 py-2 rounded-full border border-white/5">
          <Link href="/what-we-do" className="font-mono text-[11px] font-medium tracking-[0.1em] text-muted uppercase transition-colors hover:text-white">
            What We Do
          </Link>
          <div className="w-[1px] h-3 bg-white/10"></div>
          <Link href="/deployments" className="font-mono text-[11px] font-medium tracking-[0.1em] text-muted uppercase transition-colors hover:text-white">
            Deployments
          </Link>
          <div className="w-[1px] h-3 bg-white/10"></div>
          <Link href="/what-we-think" className="font-mono text-[11px] font-medium tracking-[0.1em] text-muted uppercase transition-colors hover:text-white">
            What We Think
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleEngage}
            className="font-mono text-[11px] font-semibold tracking-[0.1em] uppercase px-6 py-2.5 bg-white text-void rounded-full transition-all hover:bg-accent hover:text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            Engage Us
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}></span>
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}></span>
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-[72px] left-0 right-0 z-[99] md:hidden bg-[#05070a]/97 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ease-out ${
          mobileOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-8 gap-1">
          {[
            { label: "What We Do", href: "/what-we-do" },
            { label: "Deployments", href: "/deployments" },
            { label: "What We Think", href: "/what-we-think" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-[13px] font-medium tracking-[0.1em] text-white/60 uppercase hover:text-white transition-colors py-4 border-b border-white/5"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-6">
            <button
              onClick={() => { handleEngage(); setMobileOpen(false); }}
              className="w-full font-mono text-[12px] font-bold tracking-[0.1em] uppercase px-8 py-4 bg-white text-void rounded-full hover:bg-accent hover:text-white transition-all duration-300"
            >
              Engage Us →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
