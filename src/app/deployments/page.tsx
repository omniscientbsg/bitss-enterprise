import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BentoCard } from "@/components/ui/BentoCard";

export default function Deployments() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 px-6 max-w-7xl mx-auto w-full min-h-[80vh]">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-50 mb-8">Selected Deployments</h1>
        <p className="text-slate-400 text-lg max-w-3xl leading-relaxed mb-12">
          A deep dive into our mission-critical systems built for absolute scale, compliance, and zero-trust security.
        </p>

        <div className="space-y-12">
          {/* Indian Army */}
          <BentoCard className="flex flex-col lg:flex-row gap-8 lg:gap-16 group">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-orange-400 text-xs font-mono mb-8 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_5px_#f97316]"></span> ZERO-TRUST SECURITY
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-4 text-slate-50 group-hover:text-orange-100 transition-colors">Indian Army</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors mb-6">
                Engineered a highly encrypted, air-gapped resource and logistics allocation dashboard. Built entirely on a custom Zero-Trust Architecture to ensure data sovereignty and multi-factor clearance for defense operations. 
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-mono text-slate-300 px-3 py-1.5 bg-slate-800/80 rounded-md border border-slate-700/50 backdrop-blur-md">Custom ERP</span>
                <span className="text-xs font-mono text-slate-300 px-3 py-1.5 bg-slate-800/80 rounded-md border border-slate-700/50 backdrop-blur-md">Security Architecture</span>
                <span className="text-xs font-mono text-slate-300 px-3 py-1.5 bg-slate-800/80 rounded-md border border-slate-700/50 backdrop-blur-md">Air-Gapped</span>
              </div>
            </div>
            <div className="flex-1 min-h-[250px] bg-[#050505] border border-slate-800 rounded-xl p-6 font-mono text-xs text-blue-300 flex flex-col justify-center gap-2 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[80px] pointer-events-none"></div>
               <p><span className="text-orange-400">auth_clearance</span>: REQUIRED</p>
               <p><span className="text-orange-400">layer_protocol</span>: ZERO_TRUST</p>
               <p><span className="text-blue-400">connection</span>: AIR_GAPPED_SECURE</p>
               <p className="text-slate-500 mt-4">// Diagnostics nominal.</p>
            </div>
          </BentoCard>

          {/* boAt Project */}
          <BentoCard className="flex flex-col lg:flex-row gap-8 lg:gap-16 group">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-blue-400 text-xs font-mono mb-8 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]"></span> HIGH-CONCURRENCY SCALE
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-4 text-slate-50 group-hover:text-blue-100 transition-colors">boAt</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors mb-6">
                Architected headless D2C infrastructure capable of handling massive traffic spikes. Engineered edge-cached checkout flows that sustained tens of thousands of concurrent requests during peak flash sales without latency degradation.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="text-xs font-mono text-slate-300 px-3 py-1.5 bg-slate-800/80 rounded-md border border-slate-700/50 backdrop-blur-md">Headless Commerce</span>
                <span className="text-xs font-mono text-slate-300 px-3 py-1.5 bg-slate-800/80 rounded-md border border-slate-700/50 backdrop-blur-md">API Integration</span>
                <span className="text-xs font-mono text-slate-300 px-3 py-1.5 bg-slate-800/80 rounded-md border border-slate-700/50 backdrop-blur-md">Edge Computing</span>
              </div>
            </div>
            <div className="flex-1 min-h-[250px] bg-[#050505] border border-slate-800 rounded-xl p-6 font-mono text-xs text-blue-300 flex flex-col justify-center gap-2 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>
               <p><span className="text-orange-400">traffic_surge</span>: DETECTED_300x</p>
               <p><span className="text-blue-400">edge_node</span>: CACHED_DELIVERY</p>
               <p><span className="text-slate-300">latency</span>: {"<"} 40ms</p>
               <p className="text-slate-500 mt-4">// Processing queue optimal.</p>
            </div>
          </BentoCard>
        </div>
      </main>
      <Footer />
    </>
  );
}
