# ANTIGRAVITY MASTER DIRECTIVE: BITSS CORPORATE PLATFORM

## 1. Project Overview & Identity
**Project Name:** BITSS Enterprise Architecture Platform
**Company DNA:** "Building things piece by piece as computer bits."
**Industry Positioning:** We are not a web design agency. We are an elite Enterprise Architecture and Digital Infrastructure firm. We build highly secure, mission-critical systems (ERPs, CRMs, Native Apps) for industries like Healthcare, Defense (Indian Army), and High-Scale D2C (boAt).
**Tech Stack:** Next.js (App Router), React, Tailwind CSS, Framer Motion (for fluid animations), Lucide React (for icons).

## 2. Aesthetic & Design System (V4 Light Mode)
The UI must look like a top-tier Silicon Valley firm (e.g., Stripe, Linear, Vercel). No generic AI-generated templates.
*   **Backgrounds:** Pure white (`#ffffff`) and soft slate (`#f8fafc` / `slate-50`).
*   **Typography:** `Inter` for primary text and headings. `JetBrains Mono` for technical callouts and code blocks.
*   **Text Colors:** Deep slate (`slate-900`) for primary text to ensure crisp contrast. `slate-500` for secondary text.
*   **Brand Accents:** Electric Blue (`#3b82f6`) and Sharp Orange (`#f97316`). Use these for strategic gradients and buttons.
*   **The "Bento Box" UI:** Content must be housed in clean, white glass-cards (`border-slate-200`, `shadow-sm`). 
*   **Hover States (Critical):** Cards must elevate on hover (`-translate-y-1`) with a soft blue shadow. Implement a custom CSS pseudo-element for a Blue-to-Orange gradient border that fades in on hover.

## 3. Site Architecture & Pages Required

### Page 1: Home (`/`)
*   **Navbar:** Glassmorphic, sticky, blur effect. Logo (BITSS) with a blue and orange dual-dash accent.
*   **Hero Section:** 
    *   Badge: `[Blue Dot Pulsing] SYSTEM ARCHITECTURE & NATIVE SOFTWARE`. 
    *   Headline: "Building enterprise systems. Bit by bit." (Gradient text on "Bit by bit").
    *   CTA Button: Solid Blue with a subtle glowing shadow.
*   **Partners Marquee:** Infinite scrolling marquee. Use actual SVG logos for Meta, Shopify, Hostinger, and Razorpay. Default state: Grayscale 40% opacity. Hover state: Full color 100% opacity.
*   **Healthcare/Security Bait Section:** 
    *   Badge: `[Orange Shield] MISSION-CRITICAL SECURITY`.
    *   Copy highlighting HIPAA, GDPR, Zero-Trust, and End-to-End Encryption.
    *   Visual: A mock IDE code terminal (Pitch Black background for contrast) showing a Next.js database connection script initializing a `ZeroTrustPolicy`.
*   **Selected Deployments (Case Studies):**
    *   Card 1: Indian Army (Zero-Trust Security, Custom ERP).
    *   Card 2: boAt (High-Concurrency Scale, Headless Commerce).
*   **Capabilities Bento Grid:** 3-column grid outlining: Enterprise Software (ERP/CRM), Native Mobile Apps, Web Platforms, and a double-wide card explaining "The Bits Philosophy".
*   **Footer:** Minimal, copyright, "Engineered in India."

### Page 2: Deployments (`/deployments`)
*   A deeper dive into the case studies.
*   Showcase architecture diagrams or tech-stack breakdowns for the Indian Army and boAt projects.

### Page 3: Capabilities (`/capabilities`)
*   Detailed breakdown of services: Next.js frontend, React Native mobile, PostgreSQL/Node.js backend, and Infrastructure deployment.

### Page 4: Contact / Engage (`/engage`)
*   A high-end, multi-step form (not a standard contact form). Ask questions like "What is your current infrastructure bottleneck?" to filter enterprise clients.

## 4. Execution Rules for Antigravity (Strict)

To ensure the highest quality output, adhere to the following development rules:

1.  **Component Modularity:** Break the UI down into small, reusable components (e.g., `<BentoCard>`, `<LogoMarquee>`, `<TerminalMockup>`). Do not write monolithic pages.
2.  **No UI Bloat:** Keep margins and paddings mathematically consistent (use Tailwind's standard spacing scale: `gap-6`, `py-20`, `px-6`). Leave plenty of negative whitespace.
3.  **Subtle Micro-interactions:** Use Framer Motion for page load staggered fade-ins and smooth marquee scrolling. Do not over-animate; keep it professional.
4.  **The "Tactile" Noise Texture:** Include a fixed `div` covering the viewport with `pointer-events: none` and a subtle SVG noise filter (`mix-blend-mode: multiply`, `opacity: 0.04`). This removes the "digitally perfect" AI look and makes the site feel premium.
5.  **Responsive First:** The grid must collapse gracefully from 3 columns (Desktop) to 2 (Tablet) to 1 (Mobile).

## 5. CSS Snippet Injection
*Inject this specific CSS logic into the global stylesheet for the Bento Card hover borders:*
```css
.border-gradient { position: relative; }
.border-gradient::after { 
    content: ''; position: absolute; inset: 0; border-radius: inherit; padding: 1px; 
    background: linear-gradient(to bottom right, #3b82f6, transparent, #f97316); 
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); 
    -webkit-mask-composite: xor; mask-composite: exclude; 
    opacity: 0; transition: opacity 0.3s ease; pointer-events: none; 
}
.bento-card:hover.border-gradient::after { opacity: 1; }
```