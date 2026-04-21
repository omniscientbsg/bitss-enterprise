"use client";
import { useState } from "react";

export default function JarvisWidget() {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("bitss-engage"));
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-[150] flex items-center gap-3 group cursor-pointer"
      aria-label="Talk to Jarvis - BITSS AI Assistant"
    >
      {/* Label pill */}
      <div
        className={`transition-all duration-300 ease-out ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3 pointer-events-none"
        }`}
      >
        <div className="bg-[#0b0e14] border border-white/10 rounded-full px-4 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] whitespace-nowrap">
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/40 mb-0.5">Powered by Jarvis</p>
          <p className="font-display text-[13px] font-medium text-white">Start a Project →</p>
        </div>
      </div>

      {/* Button */}
      <div className="relative w-14 h-14 flex-shrink-0">
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-accent2/20 animate-ping"></span>
        <span className="absolute inset-[-4px] rounded-full border border-accent2/20"></span>

        {/* Main button */}
        <div className="relative w-14 h-14 rounded-full bg-[#0b0e14] border border-accent2/30 flex items-center justify-center shadow-[0_0_30px_rgba(77,127,255,0.3)] group-hover:border-accent2/70 group-hover:shadow-[0_0_40px_rgba(77,127,255,0.5)] transition-all duration-300">
          {/* BITSS grid logo */}
          <div className="w-[22px] h-[22px] grid grid-cols-2 gap-[2.5px]">
            <span className="bg-accent rounded-[2px] block shadow-[0_0_8px_rgba(232,100,42,0.6)]"></span>
            <span className="bg-accent2 rounded-[2px] block shadow-[0_0_8px_rgba(77,127,255,0.6)]"></span>
            <span className="bg-accent2 rounded-[2px] block shadow-[0_0_8px_rgba(77,127,255,0.6)]"></span>
            <span className="bg-accent rounded-[2px] block shadow-[0_0_8px_rgba(232,100,42,0.6)]"></span>
          </div>
        </div>
      </div>
    </button>
  );
}
