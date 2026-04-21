"use client";

export default function EngageButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("bitss-engage"))}
      className="font-mono text-[10px] uppercase tracking-[0.1em] font-bold text-white border border-white/20 rounded-full px-5 py-2 hover:bg-white hover:text-void transition-all"
    >
      Work With Us →
    </button>
  );
}
