"use client";

export function DigitalSovereigntyCore() {
  return (
    <div className="w-full relative h-[400px] md:h-[500px] flex items-center justify-center bg-[#020617] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
       
       {/* Background panning grid */}
       <div className="absolute inset-0 z-0 opacity-20">
         <div className="w-[200%] h-[200%] absolute top-[-50%] left-[-50%] bg-[linear-gradient(rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-[size:40px_40px] animate-[spin_60s_linear_infinite_reverse]"></div>
       </div>

       {/* The Core */}
       <div className="relative z-10 flex items-center justify-center">
         {/* Expanding Ping Rings */}
         <div className="absolute w-64 h-64 border border-blue-500/30 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
         <div className="absolute w-96 h-96 border border-blue-500/10 rounded-full animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite_1s]"></div>
         
         {/* Orbiting Nodes */}
         <div className="absolute w-72 h-72 animate-[spin_10s_linear_infinite]">
            <div className="absolute top-0 left-1/2 w-4 h-4 -ml-2 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,1)]"></div>
            <div className="absolute bottom-0 left-1/2 w-3 h-3 -ml-1.5 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)]"></div>
         </div>
         
         <div className="absolute w-48 h-48 animate-[spin_7s_linear_infinite_reverse]">
            <div className="absolute top-1/2 right-0 w-3 h-3 -mt-1.5 bg-slate-300 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
         </div>

         {/* Central Core Shield */}
         <div className="relative w-32 h-32 bg-slate-950 border border-slate-700 shadow-[0_0_50px_rgba(59,130,246,0.3)] rounded-full flex items-center justify-center z-20 overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/10 animate-pulse"></div>
            <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
         </div>
       </div>

       {/* Precision vignette overlays */}
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020617_85%)] pointer-events-none z-20"></div>
       <div className="absolute inset-0 bg-blue-950/20 mix-blend-overlay pointer-events-none z-20"></div>
       
       {/* Sleek UI overlay badge */}
       <div className="absolute bottom-6 left-6 inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 text-xs font-mono backdrop-blur-md shadow-lg z-30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          SECURE ISOLATION ACTIVE
       </div>
    </div>
  );
}
