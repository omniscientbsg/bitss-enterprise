"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Engage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 px-6 max-w-7xl mx-auto w-full min-h-[80vh] flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-50 mb-4 text-center">
          Initialize Engagement
        </h1>
        <p className="text-slate-400 text-center max-w-2xl mb-12">
          We partner with organizations requiring high-performance, secure digital infrastructure. Let's map your requirements.
        </p>

        <div className="w-full max-w-2xl bg-slate-900/40 border border-slate-800 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden">
          {/* Progress Bar */}
          <div className="w-full h-1 bg-slate-800 absolute top-0 left-0">
             <div 
               className="h-full bg-blue-500 transition-all duration-500"
               style={{ width: `${(step / 3) * 100}%` }}
             ></div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">What is your current infrastructure bottleneck?</label>
                  <textarea 
                    className="w-full bg-[#050505] border border-slate-800 rounded-lg p-4 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono text-sm placeholder:text-slate-600 min-h-[120px]"
                    placeholder="e.g. Scaling checkout API under load, lack of zero-trust compliance..."
                  />
                </div>
                <button onClick={nextStep} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-md w-full transition-colors shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  Continue &rarr;
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Select Architecture Scope</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {["Custom ERP / CRM", "High-Scale D2C", "Mobile Native", "Security & Compliance"].map((opt) => (
                       <label key={opt} className="flex items-center gap-3 p-4 border border-slate-800 rounded-lg bg-[#050505] cursor-pointer hover:border-slate-600 transition-colors">
                         <input type="checkbox" className="accent-blue-500" />
                         <span className="text-sm text-slate-300">{opt}</span>
                       </label>
                     ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <button onClick={prevStep} className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">
                    Back
                  </button>
                  <button onClick={nextStep} className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-md transition-colors">
                    Continue &rarr;
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Name</label>
                    <input type="text" className="w-full bg-[#050505] border border-slate-800 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-blue-500 font-mono text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Company</label>
                    <input type="text" className="w-full bg-[#050505] border border-slate-800 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-blue-500 font-mono text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Corporate Email</label>
                  <input type="email" className="w-full bg-[#050505] border border-slate-800 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-blue-500 font-mono text-sm" />
                </div>
                <div className="flex gap-4 pt-4">
                  <button onClick={prevStep} className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">
                    Back
                  </button>
                  <button className="flex-1 bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-md transition-colors shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                    Initialize Deployment
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
