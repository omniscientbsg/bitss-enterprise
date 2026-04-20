import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 px-6 max-w-7xl mx-auto w-full min-h-[80vh] flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-50 mb-8">The BITSS Philosophy</h1>
        <p className="text-slate-400 text-lg max-w-3xl leading-relaxed mb-12">
          A 'bit' is the most basic unit of information in computing. At BITSS, we believe flawless enterprise architecture is achieved by assembling the perfect foundational blocks. Piece by piece. Bit by bit.
        </p>
        <div className="w-full max-w-2xl bg-[#050505] border border-slate-800 rounded-xl p-8 font-mono text-sm text-left">
           <p className="text-blue-400">{'/*'} Core Principles {'*/'}</p>
           <ul className="mt-4 space-y-4 text-slate-300">
             <li><span className="text-orange-400">01.</span> No Off-the-Shelf Compromises.</li>
             <li><span className="text-orange-400">02.</span> Security by Default (Zero-Trust).</li>
             <li><span className="text-orange-400">03.</span> Scale is Anticipated, Not Reacted To.</li>
             <li><span className="text-orange-400">04.</span> Native Performance Overhead is Unacceptable.</li>
           </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
