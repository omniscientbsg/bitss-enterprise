"use client";
import { useEffect, useState } from "react";

export default function EngageModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", industry: "", message: "", timeline: "" });

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("bitss-engage", handler);
    return () => window.removeEventListener("bitss-engage", handler);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const close = () => { setOpen(false); setTimeout(() => setSubmitted(false), 400); };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[560px] bg-[#0b0e14] border border-white/10 rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden animate-[modalIn_0.3s_cubic-bezier(0.16,1,0.3,1)]">
        {/* Top accent bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-accent via-accent2 to-accent"></div>

        <div className="p-8 lg:p-10">
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {!submitted ? (
            <>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent2/10 border border-accent2/20 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent2 animate-pulse"></span>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-accent2 uppercase">Initiate Architecture Review</span>
                </div>
                <h2 className="font-display font-medium text-[32px] text-white leading-tight mb-2">Let's build something<br/>remarkable.</h2>
                <p className="text-[13px] text-white/40 font-light">Tell us what you need. We'll respond within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/40 block mb-2">Your Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      placeholder="Baljinder Singh"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-accent2/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/40 block mb-2">Company</label>
                    <input
                      value={form.company}
                      onChange={e => setForm({...form, company: e.target.value})}
                      placeholder="Your Company"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-accent2/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/40 block mb-2">Industry</label>
                    <select
                      value={form.industry}
                      onChange={e => setForm({...form, industry: e.target.value})}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-[13px] text-white focus:outline-none focus:border-accent2/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#0b0e14]">Select Industry</option>
                      <option value="healthcare" className="bg-[#0b0e14]">Healthcare</option>
                      <option value="finance" className="bg-[#0b0e14]">Finance</option>
                      <option value="defense" className="bg-[#0b0e14]">Defense / Government</option>
                      <option value="ecommerce" className="bg-[#0b0e14]">E-Commerce / D2C</option>
                      <option value="realestate" className="bg-[#0b0e14]">Real Estate</option>
                      <option value="manufacturing" className="bg-[#0b0e14]">Manufacturing / ERP</option>
                      <option value="hospitality" className="bg-[#0b0e14]">Hospitality</option>
                      <option value="other" className="bg-[#0b0e14]">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/40 block mb-2">Timeline</label>
                    <select
                      value={form.timeline}
                      onChange={e => setForm({...form, timeline: e.target.value})}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-[13px] text-white focus:outline-none focus:border-accent2/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#0b0e14]">Select Timeline</option>
                      <option value="asap" className="bg-[#0b0e14]">ASAP</option>
                      <option value="1month" className="bg-[#0b0e14]">Within 1 Month</option>
                      <option value="3months" className="bg-[#0b0e14]">1–3 Months</option>
                      <option value="6months" className="bg-[#0b0e14]">3–6 Months</option>
                      <option value="exploring" className="bg-[#0b0e14]">Just Exploring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/40 block mb-2">What do you want to build? *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    placeholder="Tell us about your project, the problem you need solved, or the system you want built..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-accent2/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-mono text-[12px] font-bold tracking-[0.1em] uppercase py-4 bg-white text-void rounded-full hover:bg-accent2 hover:text-white transition-all duration-300 shadow-[0_5px_30px_rgba(255,255,255,0.1)]"
                >
                  Send Enquiry →
                </button>

                <p className="text-center text-[11px] text-white/20 font-mono">
                  Or email directly:{" "}
                  <a href="mailto:info@thebitss.com" className="text-accent2 hover:text-white transition-colors">
                    info@thebitss.com
                  </a>
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-accent2/10 border border-accent2/30 flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4d7fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className="font-display font-medium text-[28px] text-white mb-3">Enquiry Received.</h3>
              <p className="text-[14px] text-white/50 font-light mb-8 max-w-[320px] mx-auto">Baljinder and the BITSS team will review your brief and get back to you within 24 hours.</p>
              <button
                onClick={close}
                className="font-mono text-[11px] uppercase tracking-[0.1em] px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-void transition-all"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.96) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
