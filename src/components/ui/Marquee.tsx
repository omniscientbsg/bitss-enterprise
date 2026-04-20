"use client";

import { motion } from "framer-motion";

export function Marquee() {
  const logos = [
    { src: "https://cdn.simpleicons.org/meta/white", alt: "Meta" },
    { src: "https://cdn.simpleicons.org/shopify/white", alt: "Shopify Partners" },
    { src: "https://cdn.simpleicons.org/hostinger/white", alt: "Hostinger" },
    { src: "https://cdn.simpleicons.org/razorpay/white", alt: "Razorpay" },
  ];

  // Tripling the logos to ensure a seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 border-y border-slate-900 bg-[#030712] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 flex justify-center md:justify-between items-center">
        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Official Partners
        </p>
      </div>

      <div className="overflow-hidden whitespace-nowrap w-full relative" style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}>
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="inline-flex items-center"
        >
          {duplicatedLogos.map((logo, index) => (
             <div key={index} className="mx-16 flex items-center gap-3">
               <img
                 src={logo.src}
                 alt={logo.alt}
                 className="h-8 md:h-10 w-auto object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
               />
               <span className="text-white font-bold tracking-tight text-xl md:text-2xl opacity-40 hover:opacity-100 transition-opacity duration-300 translate-y-[2px]">
                 {logo.alt}
               </span>
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
