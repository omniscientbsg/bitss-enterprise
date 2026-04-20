import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Capabilities() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 px-6 max-w-7xl mx-auto w-full min-h-[80vh]">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-50 mb-8">Capabilities</h1>
        <p className="text-slate-400 text-lg max-w-3xl leading-relaxed mb-12">
          Deep-dive into our technical stacks and systems architecture for custom enterprise solutions, mobile apps, and headless platforms.
        </p>
        <div className="p-8 border border-slate-800 rounded-2xl bg-slate-900/50 backdrop-blur-md">
           <p className="text-slate-500 font-mono text-sm">// Capabilities payload initialized.</p>
           <p className="text-slate-300 mt-4 leading-relaxed tracking-wide">
             We leverage a highly scalable stack tailored for zero-trust security and raw performance.<br/><br/>
             <span className="text-blue-400 font-medium">Frontend:</span> Next.js (App Router), React, Vite.<br/>
             <span className="text-orange-400 font-medium">Mobile:</span> React Native, Swift, Kotlin.<br/>
             <span className="text-blue-400 font-medium">Backend & API:</span> Node.js, Python, PostgreSQL, Redis.<br/>
             <span className="text-orange-400 font-medium">Infrastructure:</span> Zero-Trust Architecture, Edge Caching, Container orchestration.
           </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
