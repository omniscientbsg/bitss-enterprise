const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, HeadingLevel, BorderStyle,
  WidthType, ShadingType, VerticalAlign, PageNumber, PageBreak,
  TabStopType, TabStopPosition, TableOfContents
} = require('docx');
const fs = require('fs');

// ─── COLORS ───────────────────────────────────────────────────────────────────
const DARK_GREEN  = "0F2A27";
const GOLD        = "C9A961";
const LIGHT_GOLD  = "F9F5EB";
const WHITE       = "FFFFFF";
const LIGHT_GREY  = "FAFAFA";
const MID_GREY    = "E5E7EB";
const DARK_GREY   = "404040";
const BLACK       = "000000";
const GREEN_LIGHT = "E8F0EE";

// ─── BORDER HELPERS ───────────────────────────────────────────────────────────
const border  = (color="E5E7EB", size=2) => ({ style: BorderStyle.SINGLE, size, color });
const noBorder = () => ({ style: BorderStyle.NONE, size: 0, color: "FFFFFF" });
const allBorders = (color="E5E7EB", size=2) => ({ top: border(color, size), bottom: border(color, size), left: border(color, size), right: border(color, size) });
const noBorders = () => ({ top: noBorder(), bottom: noBorder(), left: noBorder(), right: noBorder() });

// ─── TEXT HELPERS ─────────────────────────────────────────────────────────────
const run = (text, opts={}) => new TextRun({ text, font:"Helvetica", size: opts.size||22, bold: opts.bold||false, color: opts.color||BLACK, italics: opts.italic||false, ...opts });
const para = (children, opts={}) => new Paragraph({ children: Array.isArray(children)?children:[children], alignment: opts.align||AlignmentType.LEFT, spacing: { before: opts.before||0, after: opts.after||120, line: opts.line||276 }, ...opts });
const heading1 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text, font:"Helvetica", size:36, bold:true, color:DARK_GREEN })], spacing:{before:360,after:200} });
const heading2 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text, font:"Helvetica", size:28, bold:true, color:DARK_GREEN })], spacing:{before:280,after:160} });
const heading3 = (text) => new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text, font:"Helvetica", size:24, bold:true, color:GOLD })], spacing:{before:220,after:120} });
const spacer = (n=1) => Array.from({length:n}, ()=>new Paragraph({ children:[new TextRun("")], spacing:{before:0,after:60} }));

// ─── CELL HELPER ──────────────────────────────────────────────────────────────
const cell = (children, opts={}) => new TableCell({
  children: Array.isArray(children)?children:[new Paragraph({ children:[new TextRun({ text:children, font:"Helvetica", size:opts.size||20, bold:opts.bold||false, color:opts.color||BLACK, italics:opts.italic||false })], spacing:{before:40,after:40}, alignment: opts.align||AlignmentType.LEFT })],
  width: { size: opts.width||2340, type: WidthType.DXA },
  shading: opts.fill ? { fill: opts.fill, type: ShadingType.CLEAR } : undefined,
  borders: opts.borders||allBorders("E5E7EB",2),
  margins: { top:140, bottom:140, left:200, right:200 },
  verticalAlign: opts.valign||VerticalAlign.TOP,
  columnSpan: opts.span||undefined,
});

// ─── DIVIDER LINE ─────────────────────────────────────────────────────────────
const divider = (color=GOLD) => new Paragraph({ children:[new TextRun("")], border:{ bottom:{ style:BorderStyle.SINGLE, size:8, color, space:1 } }, spacing:{before:160,after:160} });

// ─── BANNER PARAGRAPH ─────────────────────────────────────────────────────────
const sectionBanner = (text, fill=DARK_GREEN) => new Table({
  width:{ size:9360, type:WidthType.DXA },
  columnWidths:[9360],
  borders: noBorders(),
  rows:[new TableRow({ children:[new TableCell({
    children:[new Paragraph({ children:[new TextRun({ text, font:"Helvetica", size:28, bold:true, color:WHITE })], spacing:{before:100,after:100}, alignment:AlignmentType.LEFT })],
    shading:{ fill, type:ShadingType.CLEAR },
    borders:noBorders(),
    margins:{ top:140, bottom:140, left:200, right:200 },
  })]})],
});

const goldBanner = (text) => sectionBanner(text, GOLD);
const greenBanner = (text) => sectionBanner(text, DARK_GREEN);

// ─── BULLET ───────────────────────────────────────────────────────────────────
const bullet = (text, opts={}) => new Paragraph({
  numbering:{ reference:"bullets", level:0 },
  children:[new TextRun({ text, font:"Helvetica", size:opts.size||20, color:opts.color||BLACK, bold:opts.bold||false })],
  spacing:{ before:40, after:40 },
});

const bullet2 = (text) => new Paragraph({
  numbering:{ reference:"bullets2", level:0 },
  children:[new TextRun({ text, font:"Helvetica", size:20, color:DARK_GREY })],
  spacing:{ before:20, after:20 },
});

const numbered = (text, opts={}) => new Paragraph({
  numbering:{ reference: opts.ref||"numbers", level:0 },
  children:[new TextRun({ text, font:"Helvetica", size:opts.size||20, color:opts.color||BLACK, bold:opts.bold||false })],
  spacing:{ before:60, after:60 },
});

// ─── SIGNATURE BLOCK ──────────────────────────────────────────────────────────
const signatureBlock = () => new Table({
  width:{ size:9360, type:WidthType.DXA },
  columnWidths:[4680,4680],
  borders:noBorders(),
  rows:[
    new TableRow({ children:[
      cell([new Paragraph({ children:[run("FOR VIORATECH", {bold:true, size:20, color:DARK_GREEN})], spacing:{before:0,after:200} }),
            new Paragraph({ children:[run("Himanshu Singh", {bold:true, size:22})], spacing:{before:0,after:60} }),
            new Paragraph({ children:[run("Authorized Signatory", {size:20, italic:true})], spacing:{before:0,after:40} }),
            new Paragraph({ children:[run("Vioratech", {size:20})], spacing:{before:0,after:200} }),
            new Paragraph({ children:[run("Signature: _______________________________", {size:20})], spacing:{before:0,after:80} }),
            new Paragraph({ children:[run("Date: ___________________________________", {size:20})], spacing:{before:0,after:40} }),
          ], {width:4680, borders:noBorders()}),
      cell([new Paragraph({ children:[run("FOR DEVELOPMENT TEAM", {bold:true, size:20, color:DARK_GREEN})], spacing:{before:0,after:200} }),
            new Paragraph({ children:[run("Baljinder Singh", {bold:true, size:22})], spacing:{before:0,after:60} }),
            new Paragraph({ children:[run("Tech Lead & Proprietor", {size:20, italic:true})], spacing:{before:0,after:40} }),
            new Paragraph({ children:[run("BITSS", {size:20})], spacing:{before:0,after:200} }),
            new Paragraph({ children:[run("Signature: _______________________________", {size:20})], spacing:{before:0,after:80} }),
            new Paragraph({ children:[run("Date: ___________________________________", {size:20})], spacing:{before:0,after:40} }),
          ], {width:4680, borders:noBorders()}),
    ]}),
  ],
});

// ─── MILESTONE TABLE ──────────────────────────────────────────────────────────
const milestoneTable = () => {
  const hdr = (t,w) => cell(t, {width:w, fill:DARK_GREEN, bold:true, size:20, color:WHITE, borders:allBorders(DARK_GREEN,2)});
  const rows = [
    ["Cycle 1", "Project Initiation & Architecture Sign-off (Advance)", "₹ 1,50,000"],
    ["Cycle 2", "Core Frontend Engineering & 3D WebGL Asset Integration", "₹ 1,50,000"],
    ["Cycle 3", "Core User Flow (UI/UX) Finalization", "₹ 1,50,000"],
    ["Cycle 4", "Admin User Control Options & Initial Backend Config", "₹ 1,50,000"],
    ["Cycle 5", "API Integrations (Sandbox/Aggregator Setup)", "₹ 1,50,000"],
    ["Cycle 6", "Chatbots & Payment Gateway Integration", "₹ 1,50,000"],
    ["Cycle 7", "AI Features (AI Policy Reviewer, Search, Advisor)", "₹ 1,50,000"],
    ["Cycle 8", "Full-Fledged Frontend & Basic Backend Dashboard", "₹ 1,50,000"],
    ["Cycle 9", "Full-Fledged Backend Systems Locked", "₹ 1,50,000"],
    ["Cycle 10","QA Testing & Production Deployment", "₹ 1,50,000"],
  ];
  return new Table({
    width:{ size:9360, type:WidthType.DXA },
    columnWidths:[1200,6360,1800],
    rows:[
      new TableRow({ children:[hdr("Cycle",1200), hdr("Milestone Deliverable",6360), hdr("Amount (INR) - Excl. GST",1800)] }),
      ...rows.map((r,i)=>new TableRow({ children:[
        cell(r[0], {width:1200, fill:i%2===0?LIGHT_GOLD:WHITE, bold:true, size:20, align:AlignmentType.CENTER}),
        cell(r[1], {width:6360, fill:i%2===0?LIGHT_GOLD:WHITE, size:20}),
        cell(r[2], {width:1800, fill:i%2===0?LIGHT_GOLD:WHITE, size:20, bold:true, align:AlignmentType.CENTER}),
      ]})),
      new TableRow({ children:[
        cell("", {width:1200, fill:DARK_GREEN, borders:allBorders(DARK_GREEN,2)}),
        cell("TOTAL — PHASE 1 MVP", {width:6360, fill:DARK_GREEN, bold:true, size:22, color:WHITE, borders:allBorders(DARK_GREEN,2), align:AlignmentType.RIGHT}),
        cell("₹ 15,00,000", {width:1800, fill:GOLD, bold:true, size:22, color:WHITE, borders:allBorders(GOLD,2), align:AlignmentType.CENTER}),
      ]}),
    ],
  });
};

// ─── FEATURE TABLE ────────────────────────────────────────────────────────────
const featureTable = (rows) => {
  const hdr = (t,w) => cell(t,{width:w, fill:DARK_GREEN, bold:true, size:18, color:WHITE, borders:allBorders(DARK_GREEN,2)});
  return new Table({
    width:{size:9360,type:WidthType.DXA},
    columnWidths:[2400,4160,1400,1400],
    rows:[
      new TableRow({children:[hdr("Feature",2400),hdr("Technical Detail",4160),hdr("Month 1 Status",1400),hdr("Timeline",1400)]}),
      ...rows.map((r,i)=>new TableRow({children:[
        cell(r[0],{width:2400,fill:i%2===0?LIGHT_GREY:WHITE,bold:true,size:18}),
        cell(r[1],{width:4160,fill:i%2===0?LIGHT_GREY:WHITE,size:18}),
        cell(r[2],{width:1400,fill:i%2===0?LIGHT_GREY:WHITE,size:18,color:r[2].includes("YES")?"1A6630":r[2].includes("BLOCKER")?"C00000":r[2].includes("PARTIAL")?"B8610A":"000000",bold:true,align:AlignmentType.CENTER}),
        cell(r[3],{width:1400,fill:i%2===0?LIGHT_GREY:WHITE,size:18,align:AlignmentType.CENTER}),
      ]})),
    ],
  });
};

// ─── DOCUMENT ─────────────────────────────────────────────────────────────────
const doc = new Document({
  numbering:{
    config:[
      {reference:"bullets",  levels:[{level:0, format:LevelFormat.BULLET, text:"•", alignment:AlignmentType.LEFT, style:{paragraph:{indent:{left:540,hanging:300}}}}]},
      {reference:"bullets2", levels:[{level:0, format:LevelFormat.BULLET, text:"–", alignment:AlignmentType.LEFT, style:{paragraph:{indent:{left:900,hanging:300}}}}]},
      {reference:"numbers",  levels:[{level:0, format:LevelFormat.DECIMAL, text:"%1.", alignment:AlignmentType.LEFT, style:{paragraph:{indent:{left:540,hanging:300}}}}]},
    ],
  },
  styles:{
    default:{ document:{ run:{ font:"Helvetica", size:22 } } },
    paragraphStyles:[
      { id:"Heading1", name:"Heading 1", basedOn:"Normal", next:"Normal", quickFormat:true, run:{ size:36, bold:true, font:"Helvetica", color:DARK_GREEN }, paragraph:{ spacing:{before:360,after:200}, outlineLevel:0 } },
      { id:"Heading2", name:"Heading 2", basedOn:"Normal", next:"Normal", quickFormat:true, run:{ size:28, bold:true, font:"Helvetica", color:DARK_GREEN }, paragraph:{ spacing:{before:280,after:160}, outlineLevel:1 } },
      { id:"Heading3", name:"Heading 3", basedOn:"Normal", next:"Normal", quickFormat:true, run:{ size:24, bold:true, font:"Helvetica", color:GOLD }, paragraph:{ spacing:{before:220,after:120}, outlineLevel:2 } },
    ],
  },
  sections:[{
    properties:{
      page:{
        size:{ width:12240, height:15840 },
        margin:{ top:1080, right:1080, bottom:1080, left:1080 },
      },
    },
    headers:{
      default: new Header({ children:[
        new Paragraph({
          children:[
            run("VIORATECH — AI Insurance Platform", {bold:true, size:18, color:DARK_GREEN}),
            new TextRun("\t"),
            run("Master Commercial Proposal & SOW", {size:18, color:GOLD, italic:true}),
          ],
          tabStops:[{type:TabStopType.RIGHT, position:TabStopPosition.MAX}],
          border:{ bottom:{ style:BorderStyle.SINGLE, size:6, color:GOLD, space:1 } },
          spacing:{before:0,after:160},
        }),
      ]}),
    },
    footers:{
      default: new Footer({ children:[
        new Paragraph({
          children:[
            run("© 2026 BITSS & Vioratech. All Rights Reserved. Strictly Confidential.", {size:16, color:DARK_GREY}),
            new TextRun("\t"),
            run("Page ", {size:16, color:DARK_GREY}),
            new TextRun({ children:[PageNumber.CURRENT], font:"Helvetica", size:16, color:DARK_GREY }),
            run(" of ", {size:16, color:DARK_GREY}),
            new TextRun({ children:[PageNumber.TOTAL_PAGES], font:"Helvetica", size:16, color:DARK_GREY }),
          ],
          tabStops:[{type:TabStopType.RIGHT, position:TabStopPosition.MAX}],
          border:{ top:{ style:BorderStyle.SINGLE, size:6, color:GOLD, space:1 } },
          spacing:{before:160,after:0},
        }),
      ]}),
    },
    children:[

      // ═══════════════════════════════════════════════════════════════════════
      // COVER PAGE (REDESIGNED)
      // ═══════════════════════════════════════════════════════════════════════
      ...spacer(2),
      new Paragraph({
        children: [run("B I T S S   |   E N T E R P R I S E   A G R E E M E N T", {size:22, bold:true, color:GOLD})],
        alignment: AlignmentType.LEFT,
        border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: DARK_GREEN, space: 10 } },
        spacing: { after: 1600 }
      }),
      
      new Paragraph({
        children: [run("V I O R A T E C H", {size: 64, bold: true, color: DARK_GREEN})],
        alignment: AlignmentType.LEFT,
        spacing: { before: 0, after: 150 }
      }),
      new Paragraph({
        children: [run("AI Insurance Platform & Operating System", {size: 32, color: DARK_GREY, italic: true})],
        alignment: AlignmentType.LEFT,
        spacing: { before: 0, after: 600 }
      }),
      
      new Paragraph({
        children: [run("MASTER COMMERCIAL PROPOSAL & STATEMENT OF WORK", {size: 28, bold: true, color: GOLD})],
        alignment: AlignmentType.LEFT,
        spacing: { before: 0, after: 2000 }
      }),
      
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [3000, 6360],
        borders: noBorders(),
        rows: [
          new TableRow({children:[
            cell("Prepared For:", {width:3000, bold:true, size:22, color:DARK_GREEN, borders:noBorders()}), 
            cell("Himanshu Singh — Vioratech",{width:6360, size:22, color:DARK_GREY, borders:noBorders()})
          ]}),
          new TableRow({children:[
            cell("Prepared By:", {width:3000, bold:true, size:22, color:DARK_GREEN, borders:noBorders()}), 
            cell("Baljinder Singh — Tech Lead & Proprietor, BITSS",{width:6360, size:22, color:DARK_GREY, borders:noBorders()})
          ]}),
          new TableRow({children:[
            cell("Date:", {width:3000, bold:true, size:22, color:DARK_GREEN, borders:noBorders()}), 
            cell("May 06, 2026",{width:6360, size:22, color:DARK_GREY, borders:noBorders()})
          ]}),
          new TableRow({children:[
            cell("Classification:", {width:3000, bold:true, size:22, color:DARK_GREEN, borders:noBorders()}), 
            cell("Highly Confidential — Binding Execution Copy",{width:6360, size:22, bold:true, color:"C00000", borders:noBorders()})
          ]}),
        ],
      }),
      
      ...spacer(3),
      new Paragraph({
        children: [run("This document constitutes the complete and binding commercial engagement package between Vioratech and BITSS, encompassing the full Business Proposal, Technical Roadmap, Payment Schedule, and all legal agreements including the MSA, NDA, UAT Protocol, DPA, and Initial Invoice.", {size:18, italic:true, color:DARK_GREY})],
        alignment: AlignmentType.JUSTIFIED,
        border: { top: { style: BorderStyle.SINGLE, size: 4, color: GOLD, space: 15 } },
        spacing: { before: 200, after: 200 }
      }),
      new Paragraph({children:[new PageBreak()]}),

      // ═══════════════════════════════════════════════════════════════════════
      // TABLE OF CONTENTS
      // ═══════════════════════════════════════════════════════════════════════
      heading1("TABLE OF CONTENTS"),
      divider(GOLD),
      new TableOfContents("Table of Contents", { hyperlink:true, headingStyleRange:"1-3" }),
      new Paragraph({children:[new PageBreak()]}),

      // ═══════════════════════════════════════════════════════════════════════
      // SECTION 1 — EXECUTIVE SUMMARY
      // ═══════════════════════════════════════════════════════════════════════
      heading1("SECTION 1 — EXECUTIVE SUMMARY"),
      divider(GOLD),
      para([run("This Business Proposal constitutes the complete commercial and legal framework governing the development of the Vioratech AI Insurance Platform & Operating System. The platform is envisioned to become India's most technologically advanced AI-native insurance aggregator — combining real-time policy comparison, intelligent claims management, wellness-driven underwriting, and actuarial-grade AI into a single, unified digital OS.", {size:22})], {before:160, after:160}),
      para([run("The engagement is structured into two distinct phases to ensure realistic, high-velocity delivery:", {size:22, bold:true})], {before:120, after:80}),

      new Table({
        width:{size:9360,type:WidthType.DXA},
        columnWidths:[1440,3360,2160,2400],
        rows:[
          new TableRow({children:[
            cell("Phase",{width:1440,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("Scope & Deliverables",{width:3360,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("Duration",{width:2160,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("Budget",{width:2400,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
          ]}),
          new TableRow({children:[
            cell("Phase 1",{width:1440,fill:LIGHT_GOLD,bold:true,size:20}),
            cell("Experience MVP — Full Web Application (Next.js/Node), Interactive UI/UX, Sandbox Aggregator, Claim Sherpa Support Backend, Standard AI Triage",{width:3360,fill:LIGHT_GOLD,size:20}),
            cell("1 Month",{width:2160,fill:LIGHT_GOLD,size:20,bold:true,align:AlignmentType.CENTER}),
            cell("₹ 15,00,000 (Fifteen Lakhs INR)",{width:2400,fill:LIGHT_GOLD,size:20,bold:true,color:DARK_GREEN}),
          ]}),
          new TableRow({children:[
            cell("Phase 2 & 3",{width:1440,fill:WHITE,bold:true,size:20}),
            cell("AI Native OS — 30+ Live Insurer APIs, Nodal Banking, AI Actuarial Tech, Native iOS & Android Apps, HealthScore, Telematics, Custom DocAI, Dynamic Pricing",{width:3360,fill:WHITE,size:20}),
            cell("12 Months",{width:2160,fill:WHITE,size:20,bold:true,align:AlignmentType.CENTER}),
            cell("$270,000 USD (~₹ 2,25,00,000)",{width:2400,fill:WHITE,size:20,bold:true,color:DARK_GREEN}),
          ]}),
        ],
      }),
      ...spacer(2),
      para([run("The Phase 1 MVP is designed to deliver a fully functional, visually stunning, and demo-ready insurance platform within 30 days, establishing proof-of-concept for all critical user journeys. Phase 2 and 3 scale the platform into a full enterprise-grade AI Operating System capable of competing with and surpassing established players like Policybazaar, with the addition of proprietary actuarial intelligence.", {size:22})], {before:160, after:160}),
      new Paragraph({children:[new PageBreak()]}),

      // ═══════════════════════════════════════════════════════════════════════
      // SECTION 2 — CLIENT PREREQUISITES & DEPENDENCIES
      // ═══════════════════════════════════════════════════════════════════════
      heading1("SECTION 2 — CLIENT PREREQUISITES & DEPENDENCIES"),
      divider(GOLD),
      para([run("To achieve the aggressive 30-day delivery timeline, Vioratech must provide the following prerequisites. Any delay by the Client in providing these dependencies automatically pauses the 30-day delivery SLA day-for-day.", {size:22, bold:true, color:DARK_GREEN})], {before:120, after:80}),
      bullet("Brand & Design Assets (Day 1): High-resolution vector logos (.SVG/.AI), official brand color hex codes, and typography guidelines. If unavailable, Vioratech must formally approve BITSS's design choices by Day 3.", {size:20}),
      bullet("Commercial Entity Credentials (Day 3): Registered business PAN card, GST certificate, and company bank account details required to get the Razorpay/Stripe Sandbox and Meta WhatsApp APIs approved.", {size:20}),
      bullet("Insurer Product Specifications (Day 5): Exact underwriting questionnaires (PDFs/Excel) for at least 2 Health and 2 Motor policies to accurately map the dynamic form engine schemas.", {size:20}),
      bullet("Nominated UAT Approver (Day 1): A single stakeholder (Himanshu Singh) who holds the absolute legal authority to approve or reject UAT milestones.", {size:20}),
      bullet("Insurer Staging API Credentials (Day 5): To achieve a real-time policy buying experience in Phase 1, Vioratech must provide Sandbox/UAT API credentials for 1-2 insurers by Day 5. If unavailable, BITSS will default to Sandbox/Mock data to ensure on-time delivery.", {size:20}),
      new Paragraph({children:[new PageBreak()]}),

      // ═══════════════════════════════════════════════════════════════════════
      // SECTION 3 — PROJECT DESCRIPTION (1 YEAR)
      // ═══════════════════════════════════════════════════════════════════════
      heading1("SECTION 3 — PROJECT DESCRIPTION (12-MONTH VISION)"),
      divider(GOLD),
      para([run("The Vioratech AI Insurance Platform is not merely a comparison aggregator. It is conceived as a full-stack AI-native operating system that fundamentally reimagines how insurance is discovered, purchased, managed, and settled in India.", {size:22})], {before:120, after:160}),

      heading2("3.1 — Vision & Strategic Objective"),
      para([run("Vioratech's strategic objective is to achieve three distinct levels of market penetration over a 12-month development cycle:", {size:22})], {before:80, after:80}),
      bullet("PolicyBazaar Parity (Months 1–3): Deliver a production-ready insurance aggregation platform with live authentication, dynamic quote comparison, multi-gateway payments, KYC integration, and CRM.", {size:20}),
      bullet("Vioratech Proprietary Differentiation (Months 4–6): Introduce Claim Sherpa, DocAI-powered OCR, a real-time Fraud Graph, HealthScore wellness tracking, telematics, and multilingual distribution tools.", {size:20}),
      bullet("AI Native OS for Insurers (Months 7–12): Deploy the full actuarial intelligence stack — Risk Intelligence Engine, Predictive Claim Frequency models, Automated Loss Reserves, and a Dynamic Premium Pricing Layer.", {size:20}),

      ...spacer(1),
      heading2("3.2 — Platform Architecture Philosophy"),
      para([run("The platform is architected on the principle of layered delivery. The frontend is built on Next.js 14 with server-side rendering for SEO optimization on policy pages. The backend runs as a distributed microservices architecture using Node.js, with Python FastAPI powering all AI and machine learning services.", {size:22})], {before:80, after:120}),
      para([run("Data infrastructure is built for enterprise scale from Day 1: PostgreSQL 16 on RDS Multi-AZ for primary relational data, Redis 7 on ElastiCache for session management and async queuing, Neo4j AuraDB for the Fraud Detection Graph Database, and Pinecone as the vector database powering semantic AI Policy Search.", {size:22})], {before:0, after:120}),

      heading2("3.3 — Core Product Pillars"),
      heading3("Pillar 1 — PolicyBazaar Parity (Aggregation Core)"),
      para([run("The foundation of Vioratech is a world-class insurance aggregation engine. Users authenticate via OTP-based mobile login or Google/Facebook OAuth. A dynamic JSON-schema form engine renders product-specific insurance forms in real time. An asynchronous distributed quote engine polls multiple insurer APIs simultaneously using BullMQ queues.", {size:20})], {before:80, after:80}),
      
      heading3("Pillar 2 — Claim Sherpa (Claims Intelligence Engine)"),
      para([run("Claim Sherpa is Vioratech's most significant proprietary differentiator. In Phase 1, it functions as a highly robust CRM/Support backend for claim triage using standard LLM APIs. In Phase 2, it scales into a BPM Workflow Engine (Camunda 8) orchestrating the entire claims lifecycle with hard SLA clocks enforcing 5-day and 15-day resolution targets, culminating in the 80% Instant Split-Payout mechanism.", {size:20})], {before:80, after:80}),
      
      heading3("Pillar 3 — DocAI & Fraud Graph (Data Intelligence)"),
      para([run("The platform integrates a sophisticated document intelligence pipeline using AWS Textract for base OCR. The Fraud Detection Graph Database is built on Neo4j AuraDB, modelling relationships between Claimants, Hospitals, Lawyers, and Mechanics. Cypher traversal queries compute real-time fraud scores.", {size:20})], {before:80, after:80}),
      
      heading3("Pillar 4 — Wellness, Telematics & Community"),
      para([run("The HealthScore Dashboard provides users with a 5-category wellness score breakdown. Integration with Apple HealthKit and Fitbit Web API enables passive health data aggregation. Telematics-based driving behaviour scoring uses the mobile device's GPS and accelerometer to enable usage-based insurance pricing models.", {size:20})], {before:80, after:80}),
      
      heading3("Pillar 5 — AI Native OS for Insurers (Actuarial Intelligence)"),
      para([run("The 12-month vision culminates in transforming Vioratech into a B2B-facing AI Operating System. The AI Policy Reviewer uses NLP to parse 50-page policy PDFs and map exclusion clauses against IRDAI standards. The insurer-facing actuarial stack includes a Risk Intelligence Engine, Predictive Claim Frequency models, Automated Loss Reserves, and a Dynamic Pricing Layer.", {size:20})], {before:80, after:80}),
      new Paragraph({children:[new PageBreak()]}),

      // ═══════════════════════════════════════════════════════════════════════
      // SECTION 4 — BUDGET (1 YEAR)
      // ═══════════════════════════════════════════════════════════════════════
      heading1("SECTION 4 — PROJECT BUDGET (12-MONTH OVERVIEW)"),
      divider(GOLD),

      new Table({
        width:{size:9360,type:WidthType.DXA},
        columnWidths:[2400,3360,1800,1800],
        rows:[
          new TableRow({children:[
            cell("Phase",{width:2400,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("Scope Summary",{width:3360,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("Duration",{width:1800,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2),align:AlignmentType.CENTER}),
            cell("Budget",{width:1800,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2),align:AlignmentType.CENTER}),
          ]}),
          new TableRow({children:[
            cell("Phase 1 — Experience MVP",{width:2400,fill:LIGHT_GOLD,bold:true,size:20}),
            cell("Full Web App, UI/UX, 3D/VFX, Sandbox Aggregator, AI Policy Features, Payment Gateway, Claim Support Backend",{width:3360,fill:LIGHT_GOLD,size:20}),
            cell("Month 1",{width:1800,fill:LIGHT_GOLD,size:20,align:AlignmentType.CENTER}),
            cell("₹ 15,00,000",{width:1800,fill:LIGHT_GOLD,size:20,bold:true,align:AlignmentType.CENTER}),
          ]}),
          new TableRow({children:[
            cell("Phase 2 — PolicyBazaar Parity",{width:2400,fill:WHITE,bold:true,size:20}),
            cell("30+ Live Insurer APIs, Nodal Banking, DocAI OCR, Fraud Graph, Claim Sherpa Full, HealthScore, Telematics",{width:3360,fill:WHITE,size:20}),
            cell("Months 2–6",{width:1800,fill:WHITE,size:20,align:AlignmentType.CENTER}),
            cell("Included in $270K",{width:1800,fill:WHITE,size:18,italic:true,align:AlignmentType.CENTER}),
          ]}),
          new TableRow({children:[
            cell("Phase 3 — AI Native OS",{width:2400,fill:LIGHT_GREY,bold:true,size:20}),
            cell("AI Actuarial Tech (Risk Engine, Claim Frequency ML, Loss Reserves, Dynamic Pricing), Native iOS & Android Apps",{width:3360,fill:LIGHT_GREY,size:20}),
            cell("Months 7–12",{width:1800,fill:LIGHT_GREY,size:20,align:AlignmentType.CENTER}),
            cell("Included in $270K",{width:1800,fill:LIGHT_GREY,size:18,italic:true,align:AlignmentType.CENTER}),
          ]}),
          new TableRow({children:[
            cell("Phases 2 & 3 Combined",{width:2400,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("Complete Enterprise AI OS",{width:3360,fill:DARK_GREEN,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("12 Months",{width:1800,fill:DARK_GREEN,size:20,bold:true,color:WHITE,align:AlignmentType.CENTER,borders:allBorders(DARK_GREEN,2)}),
            cell("$270,000 USD",{width:1800,fill:GOLD,size:20,bold:true,color:WHITE,align:AlignmentType.CENTER,borders:allBorders(GOLD,2)}),
          ]}),
        ],
      }),
      ...spacer(1),
      para([run("Infrastructure Subsidy & Operational Cost Clarity:", {size:22, bold:true, color:DARK_GREEN})], {before:160, after:60}),
      para([run("As part of the Phase 1 engagement, BITSS agrees to absorb Cloud Server infrastructure costs (AWS) and AI API inference costs (Claude/Gemini/OpenAI) up to a ceiling of ₹4,00,000 (Four Lakhs INR) out of the total ₹15 Lakhs budget. This subsidy covers compute infrastructure only. All operational third-party transactional costs—including SMS OTP gateways (MSG91), WhatsApp Business conversation fees, and Payment Gateway transaction fees (Razorpay 2%)—are the sole financial responsibility of Vioratech.", {size:20})], {before:0, after:120}),
      para([run("Phase 2 & 3 Negotiation:", {size:22, bold:true, color:DARK_GREEN})], {before:80, after:60}),
      para([run("The $270,000 USD budget for Phases 2 and 3 is an estimate based on current technical specifications. The precise scope, sprint planning, payment milestones, and legal framework for the 12-Month Enterprise AI OS will be formally negotiated and executed as a separate, standalone Statement of Work upon successful completion and delivery of Phase 1.", {size:20})], {before:0, after:120}),
      new Paragraph({children:[new PageBreak()]}),

      // ═══════════════════════════════════════════════════════════════════════
      // SECTION 5 — TECHNICAL ROADMAP
      // ═══════════════════════════════════════════════════════════════════════
      heading1("SECTION 5 — TECHNICAL ROADMAP (12-MONTH ENTERPRISE VISION)"),
      divider(GOLD),

      greenBanner("PHASE 1 — PolicyBazaar Parity Features (Months 1–3)"),
      ...spacer(1),

      heading3("5A — Authentication & User Management"),
      featureTable([
        ["OTP-based Mobile Login","Twilio/MSG91 OTP → JWT token authentication → Redis session management","✓ YES","Week 1"],
        ["Google / Facebook Login","Google Identity Platform → OAuth 2.0 flow → user profile sync to primary DB","✓ YES","Week 1"],
        ["RBAC (Role-Based Access Control)","Admin, Agent, User roles with permission scoping across all API endpoints","✓ YES","Week 1"],
        ["SSO & Family Linking","SAML 2.0 / OIDC standard. Relational DB for dependent KYC relationships","✗ Month 2+","Month 2–3"],
        ["C-KYC Registry Integration","CERSAI C-KYC REST API → customer token lookup for seamless re-KYC","✗ Month 3+","Month 3–4"],
      ]),
      ...spacer(1),

      heading3("5B — Quote Engine & Comparison Infrastructure"),
      featureTable([
        ["Dynamic Form Engine","JSON schema → React renderer. Insurer-specific underwriting rules stored in DB","✓ YES","Week 1–2"],
        ["Multi-line Aggregation","Distributed polling with async queues (BullMQ). Health, Motor, Life, Travel","MVP PARTIAL","Month 2–5"],
        ["Real-time Comparison Grid","React grid with sort/filter by premium, CSR, network hospitals, and coverage","✓ YES (Mock)","Week 2"],
        ["NCB / Discount Engine","Rule engine computing No-Claim Bonus and agent commission locally in real time","✓ YES","Week 2–3"],
        ["Live Insurer Integrations (30+)","REST/SOAP API adapters for 30+ insurers. Requires commercial agreement + UAT","✗ BLOCKER","Month 2–6"],
        ["WhatsApp Quote Flow","Users receive and request quotes via WhatsApp Business API integration","✓ YES","Week 2–3"],
      ]),
      ...spacer(1),

      heading3("5C — Payments, Issuance & KYC"),
      featureTable([
        ["Multi-gateway Checkout","Razorpay + BillDesk failover. PCI-DSS tokenized card storage. UPI support","✓ YES","Week 2–3"],
        ["eMandate / AutoPay","NPCI e-NACH API → mandate registration for automated premium debit","✗ Month 2+","Month 2–3"],
        ["Nodal Split-Settlements","Escrow nodal account (ICICI/Axis) → automated insurer settlement payouts","✗ BLOCKER","Month 3–4"],
        ["DigiLocker Aadhaar eKYC","OAuth 2.0 → Aadhaar XML document pull → auto-fill all personal fields","✓ YES","Week 2–3"],
      ]),
      ...spacer(1),

      heading3("5D — CRM & Document Management"),
      featureTable([
        ["Lead Capture & CRM","PostgreSQL lead DB → custom CRM dashboard → agent assignment and tracking","✓ YES","Week 2–3"],
        ["Omnichannel Inbox","WhatsApp API + Freshdesk → unified inbox for all customer communications","MVP PARTIAL","Month 2–3"],
        ["Automated Renewals","Cron job at 45/30/15 days pre-expiry → personalized WhatsApp renewal quote","✓ YES","Week 3–4"],
        ["Policy Dashboard (User)","React dashboard showing active policies, documents, renewal dates, claims","✓ YES","Week 2–3"],
      ]),

      ...spacer(2),
      greenBanner("PHASE 2 — Vioratech Proprietary Platform (Months 4–6)"),
      ...spacer(1),

      heading3("5E — Claim Sherpa: 5/15-Day SLA Claims Workflow"),
      featureTable([
        ["FNOL via WhatsApp Bot","WhatsApp Business API → Rasa NLP bot → photo upload, Aadhaar e-KYC guided flow","✓ YES (UI)","Week 3–4"],
        ["Sherpa Console CRM","React dashboard: live chat/voice, document viewer, SLA timers, case notes","✓ YES","Week 3–4"],
        ["BPM Workflow Engine","Camunda 8 low-code BPM orchestrating T-0 → T-3 claim stages with SLA clocks","MVP PARTIAL","Month 2–3"],
        ["80% Instant Split-Payout","Dual-ledger: auto-pay ≤₹25k via UPI autopay instantly. Remainder via escrow","✗ BLOCKER","Month 3–4"],
        ["Smart-Verification AR","WebRTC custom media server → Sherpa agent draws AR annotation arrows on live camera","✗ BLOCKER","Month 3–4"],
      ]),
      ...spacer(1),

      heading3("5F — DocAI & Fraud Graph (Core Data Intelligence)"),
      featureTable([
        ["Base OCR Pipeline","AWS Textract → structured field extraction from PDFs and images","MVP PARTIAL","Month 1–2"],
        ["Custom Vision Model","Fine-tune Donut/LayoutLM on 200+ fields from Indian medical bills and claim docs","✗ BLOCKER","Month 4–6"],
        ["Fraud Graph DB Schema","Neo4j entities: Claimant, Hospital, Lawyer, Mechanic. Schema design & setup","MVP PARTIAL","Month 1–2"],
        ["Real-time Fraud Score","Neo4j Cypher traversal queries → fraud risk score output per claim","✗ Month 4+","Month 4–5"],
      ]),
      ...spacer(1),

      heading3("5G — Wellness, Telematics & Community"),
      featureTable([
        ["HealthScore Dashboard UI","5-category wellness score. Gauge chart visualization. Weekly trend graphs","✓ YES (UI)","Week 3–4"],
        ["Apple / Fitbit Sync","HealthKit + Fitbit Web API → passive health data → normalized wellness score","✗ Month 2+","Month 2–3"],
        ["Telematics Driving Score","GPS/Accelerometer via Flutter mobile background isolate → driving behaviour score","✗ Month 4+","Month 4–5"],
        ["Symptom Checker / Telehealth","LLM triage pipeline → pre-analysis → telemedicine API routing (Practo)","✗ Month 3+","Month 3–4"],
      ]),
      ...spacer(1),

      heading3("5H — Distribution & B2B"),
      featureTable([
        ["Vernacular Explainer Videos","Text-to-video AI → 90-second per-quote explanatory scripts in regional Indian languages","✗ Month 3+","Month 3–4"],
        ["Kirana IVR (6060)","Twilio Voice → IVR decision tree → PoSP warm transfer for rural distribution","✗ Month 3+","Month 3–4"],
        ["WhatsApp PoSP LMS","WhatsApp bot → micro-lesson delivery → IRDAI mandatory hour logging for agents","✗ Month 2+","Month 2–3"],
      ]),

      ...spacer(2),
      greenBanner("PHASE 3 — 12-Month Vision: Full Stack AI Native OS for Insurers (Months 7–12)"),
      ...spacer(1),

      heading3("5I — AI Policy Assistants (User-Facing)"),
      featureTable([
        ["AI Policy Reviewer","NLP engine reading 50-page policy PDFs, mapping exclusion clauses against IRDAI standards in real time and surfacing critical gaps to buyers before purchase","MVP PARTIAL","Month 3–5"],
        ["AI Policy Search","Pinecone vector DB semantic search across thousands of insurance SKUs. Natural language queries (e.g., 'Cover for diabetic pregnancy during travel abroad')","✗ Month 5+","Month 5–7"],
        ["AI Policy Advisor","GPT-4o agent recommending supplementary riders, detecting under-insurance based on user income, geography, family profile, and health history","✗ Month 6+","Month 6–8"],
      ]),
      ...spacer(1),

      heading3("5J — AI Actuarial Tech (Insurer-Facing)"),
      featureTable([
        ["Risk Intelligence Engine","Aggregates HealthScore + Telematics data to build unified longitudinal risk profiles per user, enabling dynamic actuarial underwriting","✗ Month 7+","Month 7–9"],
        ["Predictive Claim Frequency","ML models (XGBoost + epidemiological mapping) forecasting disease and accident outbreak frequency by district. Enables pre-emptive reserve allocation","✗ Month 8+","Month 8–10"],
        ["Automated Loss Reserves","Deep learning prediction of total capital insurers need to hold based on live pipeline analysis. Regulatory-grade reserve computation","✗ Month 9+","Month 9–11"],
        ["Dynamic Pricing Layer","Usage-based API allowing insurers to micro-adjust individual premiums on a daily basis. Requires strict IRDAI product filing and compliance sign-off","✗ Regulatory","Month 10–12"],
      ]),
      new Paragraph({children:[new PageBreak()]}),

      // ═══════════════════════════════════════════════════════════════════════
      // SECTION 6 — ONE MONTH SCOPE
      // ═══════════════════════════════════════════════════════════════════════
      heading1("SECTION 6 — PHASE 1: ONE-MONTH SCOPE (EXPERIENCE MVP)"),
      divider(GOLD),
      para([run("The Phase 1 Experience MVP is a precision-scoped 30-day delivery programme. Its objective is to produce a fully functional, visually polished, and demo-ready insurance platform that proves the complete Vioratech user journey end-to-end. All features within the Month 1 scope are delivered using sandbox or mock data where live insurer API integrations are not yet available.", {size:22})], {before:120, after:160}),

      heading2("6.1 — Month 1 Deliverables Summary"),
      new Table({
        width:{size:9360,type:WidthType.DXA},
        columnWidths:[3600,5760],
        rows:[
          new TableRow({children:[
            cell("Deliverable Category",{width:3600,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("What Will Be Delivered",{width:5760,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
          ]}),
          new TableRow({children:[cell("Full Web Application",{width:3600,fill:LIGHT_GOLD,bold:true,size:20}), cell("Next.js 14 frontend + Node.js backend shell deployed on AWS. Complete navigation, routing, and API gateway established",{width:5760,fill:LIGHT_GOLD,size:20})]}),
          new TableRow({children:[cell("Interactive UI/UX Design",{width:3600,fill:WHITE,bold:true,size:20}), cell("Professional, production-grade UI across all screens with Tailwind CSS, Zustand state management, and animated transitions",{width:5760,fill:WHITE,size:20})]}),
          new TableRow({children:[cell("3D Animation & VFX Landing",{width:3600,fill:LIGHT_GREY,bold:true,size:20}), cell("Premium 3D animated landing page with visual effects establishing Vioratech's brand premium and product vision",{width:5760,fill:LIGHT_GREY,size:20})]}),
          new TableRow({children:[cell("Authentication System",{width:3600,fill:WHITE,bold:true,size:20}), cell("OTP mobile login (Twilio/MSG91), Google OAuth, RBAC, JWT tokens, Redis session management — fully functional",{width:5760,fill:WHITE,size:20})]}),
          new TableRow({children:[cell("Sandbox Quote Engine",{width:3600,fill:LIGHT_GREY,bold:true,size:20}), cell("Dynamic forms for Health and Motor insurance. Mock multi-insurer comparison grid. NCB calculator. DigiLocker KYC",{width:5760,fill:LIGHT_GREY,size:20})]}),
          new TableRow({children:[cell("Payment Flow",{width:3600,fill:WHITE,bold:true,size:20}), cell("Razorpay checkout integration. Mock premium payment journey. PCI-DSS tokenization framework established",{width:5760,fill:WHITE,size:20})]}),
          new TableRow({children:[cell("AI Policy Reviewer (Demo)",{width:3600,fill:LIGHT_GREY,bold:true,size:20}), cell("NLP demo of policy PDF parsing and exclusion flagging. Functional MVP with mock policy documents via API",{width:5760,fill:LIGHT_GREY,size:20})]}),
          new TableRow({children:[cell("Claim Sherpa CRM",{width:3600,fill:WHITE,bold:true,size:20}), cell("FNOL WhatsApp bot UI, Sherpa Console agent dashboard, CRM backend for human support triage",{width:5760,fill:WHITE,size:20})]}),
          new TableRow({children:[cell("PoSP Agent Portal",{width:3600,fill:LIGHT_GREY,bold:true,size:20}), cell("Agent portal UI with lead dashboard, commission tracker, and OpenAPI sandbox for partner integration",{width:5760,fill:LIGHT_GREY,size:20})]}),
          new TableRow({children:[cell("Admin Backend Dashboard",{width:3600,fill:WHITE,bold:true,size:20}), cell("Admin control panel with user management, RBAC configuration, system monitoring, and audit logs",{width:5760,fill:WHITE,size:20})]}),
          new TableRow({children:[cell("Database Schema Architecture",{width:3600,fill:LIGHT_GREY,bold:true,size:20}), cell("Core PostgreSQL and Redis schemas designed, provisioned, and deployed to AWS RDS",{width:5760,fill:LIGHT_GREY,size:20})]}),
        ],
      }),
      new Paragraph({children:[new PageBreak()]}),

      // ═══════════════════════════════════════════════════════════════════════
      // SECTION 7 — ONE MONTH ROADMAP (WEEK BY WEEK)
      // ═══════════════════════════════════════════════════════════════════════
      heading1("SECTION 7 — PHASE 1: ONE-MONTH SPRINT ROADMAP (WEEK-BY-WEEK)"),
      divider(GOLD),

      new Table({
        width:{size:9360,type:WidthType.DXA},
        columnWidths:[1440,2880,2880,2160],
        rows:[
          new TableRow({children:[
            cell("Week",{width:1440,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("Engineering Focus",{width:2880,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("Deliverables",{width:2880,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("Client-Visible Demo Output",{width:2160,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
          ]}),
          new TableRow({children:[
            cell("Week 1\nFoundation",{width:1440,fill:GOLD,bold:true,size:20,color:WHITE,borders:allBorders(GOLD,2)}),
            cell("AWS infrastructure setup and configuration. Authentication module — OTP (Twilio/MSG91), Google OAuth. RBAC permission framework. Base Next.js 14 application shell with App Router. Core Database schema setup. API gateway and service mesh architecture",{width:2880,fill:LIGHT_GOLD,size:18}),
            cell("Working user login and registration. Dashboard shell (empty but navigable). API gateway live and accepting requests. Database schemas deployed",{width:2880,fill:LIGHT_GOLD,size:18}),
            cell("Client can register, log in via OTP or Google, and see their personal dashboard placeholder",{width:2160,fill:LIGHT_GOLD,size:18,bold:true}),
          ]}),
          new TableRow({children:[
            cell("Week 2\nCore UX",{width:1440,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("Dynamic JSON form engine for Health and Motor insurance products. Quote comparison UI — React grid with 10+ mock insurer plans. NCB/Discount calculator logic. DigiLocker Aadhaar eKYC OAuth flow. Redis caching for session and quote management. 3D/VFX landing page animation delivery",{width:2880,fill:LIGHT_GREY,size:18}),
            cell("Health and Motor insurance quote forms. Side-by-side mock plan comparison grid (sortable). DigiLocker KYC working. NCB calculator functional. 3D landing page live",{width:2880,fill:LIGHT_GREY,size:18}),
            cell("Client fills a health insurance form and sees 10+ mock plans compared side-by-side with filters",{width:2160,fill:LIGHT_GREY,size:18,bold:true}),
          ]}),
          new TableRow({children:[
            cell("Week 3\nPayments + AI UI",{width:1440,fill:GOLD,bold:true,size:20,color:WHITE,borders:allBorders(GOLD,2)}),
            cell("Razorpay sandbox checkout integration. Mock policy PDF generation. AI Policy Reviewer NLP demo with sample PDFs. Claim FNOL WhatsApp UI and Sherpa CRM Console dashboard setup",{width:2880,fill:LIGHT_GOLD,size:18}),
            cell("Full mock premium payment journey. AI Reviewer flagging exclusions in demo PDF. Sherpa Console CRM navigable",{width:2880,fill:LIGHT_GOLD,size:18}),
            cell("Client completes mock purchase of a health insurance policy. Views Sherpa claims CRM console",{width:2160,fill:LIGHT_GOLD,size:18,bold:true}),
          ]}),
          new TableRow({children:[
            cell("Week 4\nPolish + Demo",{width:1440,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("PoSP agent portal with lead dashboard and commission tracking. OpenAPI sandbox for partner integration testing. Admin backend control panel. Full QA testing across all modules. Demo environment preparation and rehearsal. CRM lead flows and automated renewal cron setup",{width:2880,fill:LIGHT_GREY,size:18}),
            cell("PoSP agent portal live. OpenAPI sandbox accessible. Admin panel functional. All flows QA tested. Full end-to-end demo environment ready",{width:2880,fill:LIGHT_GREY,size:18}),
            cell("Full product demo: Login → Quote → Compare → Pay → Claims Sherpa Support → Admin Panel",{width:2160,fill:LIGHT_GREY,size:18,bold:true}),
          ]}),
        ],
      }),
      new Paragraph({children:[new PageBreak()]}),

      // ═══════════════════════════════════════════════════════════════════════
      // SECTION 8 — PAYMENT SCHEDULE
      // ═══════════════════════════════════════════════════════════════════════
      heading1("SECTION 8 — PAYMENT SCHEDULE & COMMERCIAL TERMS"),
      divider(GOLD),
      para([run("The payment structure for Phase 1 is designed for maximum delivery velocity through asynchronous, independent milestone cycles. Deliverables operate as parallel workstreams, and each individual milestone payment is triggered immediately upon completion and UAT acceptance.", {size:22})], {before:120, after:160}),

      heading2("8.1 — Phase 1 Payment Cycles"),
      milestoneTable(),
      ...spacer(2),

      heading2("8.2 — Payment Terms & Conditions"),
      para([run("Asynchronous & Independent Cycles:", {size:22, bold:true, color:DARK_GREEN})], {before:120, after:60}),
      para([run("Each of the 10 payment cycles listed above is entirely independent. The Development Team may complete and submit milestones in any order based on parallel workstream progress. Upon UAT acceptance of a milestone, the associated payment is triggered immediately.", {size:20})], {before:0, after:120}),

      para([run("Proprietorship Payment Legalities:", {size:22, bold:true, color:DARK_GREEN})], {before:80, after:60}),
      para([run("As BITSS is a registered sole proprietorship firm owned by Baljinder Singh, the firm and the individual are considered a single legal and financial entity under Indian law. Consequently, all milestone payments, bank transfers (NEFT/RTGS), or Post-Dated Cheques (PDCs) may be issued in the name of and deposited directly into the personal bank account of Baljinder Singh. This is fully compliant with Indian taxation and banking regulations for proprietorships.", {size:20})], {before:0, after:120}),
      
      para([run("Reciprocal Delay SLA:", {size:22, bold:true, color:DARK_GREEN})], {before:80, after:60}),
      para([run("Partnership requires mutual accountability. If BITSS fails to deliver a scheduled milestone within five (5) business days of the projected delivery timeline (provided no Client Prerequisites are blocking development), Vioratech shall be entitled to a 2% penalty credit applied strictly against that specific delayed milestone payment.", {size:20})], {before:0, after:120}),
      para([run("Day 1 Initiation Requirements:", {size:22, bold:true, color:DARK_GREEN})], {before:80, after:60}),
      para([run("To initiate Phase 1 development immediately following the execution of this Agreement, Vioratech shall provide the following to the Development Team:", {size:20})], {before:0, after:80}),
      numbered("Cycle 1 Advance Payment of ₹1,50,000 cleared via bank transfer, or presentation of signed Post-Dated Cheques for all 10 cycles.", {size:20}),
      numbered("High-resolution brand assets, logo files, and final approved color palette hex codes.", {size:20}),
      new Paragraph({children:[new PageBreak()]}),

      // ═══════════════════════════════════════════════════════════════════════
      // SECTION 9 — NDA
      // ═══════════════════════════════════════════════════════════════════════
      heading1("SECTION 9 — NON-DISCLOSURE AGREEMENT (NDA)"),
      divider(GOLD),
      new Table({
        width:{size:9360,type:WidthType.DXA}, columnWidths:[9360], borders:noBorders(),
        rows:[new TableRow({children:[new TableCell({
          children:[
            para([run("MUTUAL NON-DISCLOSURE AND NON-COMPETE AGREEMENT", {size:24, bold:true, color:DARK_GREEN})], {align:AlignmentType.CENTER, before:80, after:60}),
            para([run("Between: Vioratech (\"Client\") and BITSS (\"Receiving Party\")", {size:20, italic:true})], {align:AlignmentType.CENTER, before:0, after:80}),
          ],
          shading:{fill:GREEN_LIGHT, type:ShadingType.CLEAR}, borders:noBorders(), margins:{top:160,bottom:160,left:240,right:240},
        })]})],
      }),
      ...spacer(1),

      heading2("9.1 — Purpose & Definitions"),
      para([run("This Mutual Non-Disclosure and Non-Compete Agreement (\"NDA\") is entered into as of May 06, 2026, between Vioratech, a company represented by Himanshu Singh (\"Client\"), and BITSS, represented by Baljinder Singh, Tech Lead & Proprietor (\"Receiving Party\").", {size:20})], {before:80, after:80}),
      para([run("\"Confidential Information\" is defined broadly and includes, but is not limited to, the following categories:", {size:20, bold:true})], {before:80, after:80}),
      para([run("Vioratech's Confidential Information:", {size:20, bold:true, color:DARK_GREEN})], {before:60, after:40}),
      bullet("Vioratech's proprietary business models, revenue strategies, and pricing frameworks", {size:20}),
      bullet("Relationships with insurers, banking partners, and distribution channels", {size:20}),
      para([run("BITSS's Confidential Information:", {size:20, bold:true, color:DARK_GREEN})], {before:80, after:40}),
      bullet("Proprietary technical blueprints, system architecture designs, and infrastructure configurations", {size:20}),
      bullet("Custom AI prompt engineering, LLM integration methodologies, and model configurations", {size:20}),
      ...spacer(1),

      heading2("9.2 — Specific Protections (Non-Compete)"),
      para([run("Protection of Client (Vioratech):", {size:20, bold:true, color:DARK_GREEN})], {before:80, after:40}),
      para([run("BITSS expressly agrees that it shall not, during the term of this Agreement and for a period of two (2) years thereafter: (a) reverse-engineer, replicate, clone, or substantially reproduce Vioratech's specific proprietary business model for the direct benefit of any direct competitor of Vioratech in the Indian insurance aggregation market.", {size:20})], {before:0, after:120}),
      para([run("Protection of Developer (BITSS):", {size:20, bold:true, color:DARK_GREEN})], {before:80, after:40}),
      para([run("Vioratech expressly agrees that it shall not, during the term of this Agreement and for a period of two (2) years thereafter: (a) share, distribute, forward, or otherwise make available the proprietary technical blueprints, AI prompt engineering scripts, or system architecture diagrams provided by BITSS to any third-party development agency or individual developer without explicitly retaining BITSS.", {size:20})], {before:0, after:120}),

      heading2("9.3 — Term & Survival"),
      para([run("The confidentiality obligations under this Agreement shall commence on the date of execution and shall survive the termination or completion of the project, remaining in full force and effect for a period of two (2) years from the date of execution. The non-compete provisions shall also survive for a period of two (2) years from the date of termination or completion of the engagement.", {size:20})], {before:80, after:120}),

      heading2("9.4 — NDA Signatures"),
      ...spacer(1),
      signatureBlock(),
      new Paragraph({children:[new PageBreak()]}),

      // ═══════════════════════════════════════════════════════════════════════
      // SECTION 10 — MSA
      // ═══════════════════════════════════════════════════════════════════════
      heading1("SECTION 10 — MASTER SERVICES AGREEMENT (MSA)"),
      divider(GOLD),
      new Table({
        width:{size:9360,type:WidthType.DXA}, columnWidths:[9360], borders:noBorders(),
        rows:[new TableRow({children:[new TableCell({
          children:[
            para([run("MASTER SERVICES AGREEMENT", {size:24, bold:true, color:DARK_GREEN})], {align:AlignmentType.CENTER, before:80, after:60}),
            para([run("Commercial Terms, Intellectual Property Framework & Liability Structure", {size:20, italic:true})], {align:AlignmentType.CENTER, before:0, after:80}),
          ],
          shading:{fill:GREEN_LIGHT, type:ShadingType.CLEAR}, borders:noBorders(), margins:{top:160,bottom:160,left:240,right:240},
        })]})],
      }),
      ...spacer(1),

      heading2("10.1 — Scope of Services"),
      para([run("This Master Services Agreement (\"MSA\") governs the entire commercial engagement between Vioratech (\"Client\") and BITSS (\"Service Provider\"). The Phase 1 (Experience MVP) budget is strictly and irrevocably capped at ₹15,00,000 (Fifteen Lakhs INR). No expenditure exceeding this cap shall be incurred without a formal, written Change Request submitted to and explicitly approved by Himanshu Singh.", {size:20})], {before:80, after:120}),

      heading2("10.2 — Proportional Intellectual Property (IP) Transfer"),
      para([run("During Build Phase:", {size:20, bold:true, color:DARK_GREEN})], {before:80, after:40}),
      para([run("All source code, UI/UX designs, graphic assets, AI prompt engineering scripts, architectural designs, API integration code, and database schemas created by BITSS (collectively, \"Work Product\") shall remain the sole and exclusive property of BITSS prior to milestone clearance.", {size:20})], {before:0, after:80}),
      para([run("Proportional Transfer Condition:", {size:20, bold:true, color:DARK_GREEN})], {before:80, after:40}),
      para([run("Intellectual property rights for each specific module shall automatically transfer to Vioratech upon the successful clearance of the associated milestone payment. Upon final payment of Phase 1, Vioratech receives an irrevocable, perpetual license to modify, share, and build upon the Phase 1 codebase with any third-party developers, ensuring no vendor lock-in.", {size:20})], {before:0, after:120}),

      heading2("10.3 — Non-Solicitation Covenant"),
      para([run("During the term of this engagement and for a period of twenty-four (24) months following its completion, Vioratech agrees not to solicit, recruit, employ, or contract any developer, designer, or contractor affiliated with BITSS in connection with this project.", {size:20})], {before:80, after:120}),

      heading2("10.4 — Sandbox Default Clause"),
      para([run("If Vioratech cannot procure verified Production API keys for payment gateways (Razorpay), KYC channels (DigiLocker), communication APIs (WhatsApp), or Insurers by Day 15 of the sprint, BITSS will deliver the integrations in Sandbox/Test mode. Delivery in Sandbox mode constitutes 100% fulfillment of the milestone for payment purposes.", {size:20})], {before:80, after:120}),

      heading2("10.5 — Warranties & Representations"),
      para([run("BITSS warrants that all Work Product delivered shall be original work and shall not infringe the intellectual property rights of any third party. The platform will be built using industry-standard security protocols, including encryption in transit (TLS 1.3) and encryption at rest (AES-256).", {size:20})], {before:80, after:120}),

      heading2("10.6 — Limitation of Liability"),
      para([run("BITSS's maximum aggregate financial liability to Vioratech for any technical failure, defect, bug, delay, data loss, or damages of any nature arising out of or in connection with this Agreement shall be strictly capped at the total cumulative amount of milestone payments paid by Vioratech to BITSS as of the date the claim arises.", {size:20})], {before:80, after:80}),
      para([run("In no event shall BITSS be liable for: (a) indirect, consequential, or punitive damages; (b) regulatory fines arising from Vioratech's business operations; or (c) claims arising from Vioratech's failure to provide accurate requirements or required API access credentials.", {size:20})], {before:0, after:120}),

      heading2("10.7 — Termination"),
      para([run("Either party may terminate this Agreement upon 30 days' written notice. Upon termination: (a) Vioratech shall immediately pay all outstanding milestone payments for work completed prior to the termination date; and (b) the proportional IP transfer provisions shall apply to the extent that payments have been received.", {size:20})], {before:80, after:120}),

      heading2("10.8 — MSA Signatures"),
      ...spacer(1),
      signatureBlock(),
      new Paragraph({children:[new PageBreak()]}),

      // ═══════════════════════════════════════════════════════════════════════
      // SECTION 11 — UAT
      // ═══════════════════════════════════════════════════════════════════════
      heading1("SECTION 11 — UAT & SIGN-OFF PROTOCOL"),
      divider(GOLD),
      new Table({
        width:{size:9360,type:WidthType.DXA}, columnWidths:[9360], borders:noBorders(),
        rows:[new TableRow({children:[new TableCell({
          children:[
            para([run("USER ACCEPTANCE TESTING (UAT) & SIGN-OFF PROTOCOL", {size:24, bold:true, color:DARK_GREEN})], {align:AlignmentType.CENTER, before:80, after:60}),
            para([run("Asynchronous Delivery, Auto-Approval & Scope Management", {size:20, italic:true})], {align:AlignmentType.CENTER, before:0, after:80}),
          ],
          shading:{fill:GREEN_LIGHT, type:ShadingType.CLEAR}, borders:noBorders(), margins:{top:160,bottom:160,left:240,right:240},
        })]})],
      }),
      ...spacer(1),

      heading2("11.1 — Purpose & Asynchronous Submission"),
      para([run("Because the ten (10) payment cycles operate as independent workstreams, BITSS is expressly entitled to submit milestone deliverables for UAT review in any order based on parallel engineering progress.", {size:20})], {before:80, after:120}),

      heading2("11.2 — The 7-Business-Day Auto-Approval Protocol"),
      para([run("To maintain strict project delivery velocity, the following review protocol is binding on both parties:", {size:20})], {before:80, after:80}),

      new Table({
        width:{size:9360,type:WidthType.DXA},
        columnWidths:[1080,8280],
        rows:[
          new TableRow({children:[
            cell("Step 1",{width:1080,fill:GOLD,bold:true,size:20,color:WHITE,borders:allBorders(GOLD,2),align:AlignmentType.CENTER}),
            cell("Upon submission of a milestone deliverable by BITSS, Vioratech is granted a strict review window of seven (7) business days commencing from the timestamp of the Milestone Completion Notice.",{width:8280,fill:LIGHT_GOLD,size:20}),
          ]}),
          new TableRow({children:[
            cell("Step 2",{width:1080,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2),align:AlignmentType.CENTER}),
            cell("PAUSE MECHANISM: Vioratech may pause the auto-approval clock by sending a formal email to the BITSS Project Manager requesting a hold or detailing required defect revisions within the 7-day window.",{width:8280,fill:LIGHT_GREY,size:20}),
          ]}),
          new TableRow({children:[
            cell("Step 3",{width:1080,fill:GOLD,bold:true,size:20,color:WHITE,borders:allBorders(GOLD,2),align:AlignmentType.CENTER}),
            cell("AUTO-ACCEPTANCE: If Vioratech does not provide any actionable feedback, revision requests, or pause emails within the 7-business-day window, the milestone is legally and contractually deemed 'Accepted' as delivered. The associated payment cycle is instantly triggered and the payment becomes due and payable.",{width:8280,fill:LIGHT_GOLD,size:20,bold:true}),
          ]}),
        ],
      }),
      ...spacer(2),

      heading2("11.3 — Defects vs. Change Requests (Scope Creep)"),
      para([run("A precise distinction between Defects and Change Requests is critical. A Defect is defined as a feature failing to operate as defined in the approved SOW. A Change Request is defined as a request for new functionality or additional AI features not present in the original SOW.", {size:20})], {before:80, after:80}),
      para([run("Critical Rule: Change Requests will not block the sign-off and payment processing of the current milestone.", {size:20, bold:true, color:"C00000"})], {before:0, after:80}),
      para([run("Escalation Matrix: If a dispute arises regarding whether an item is a Defect or a Change Request, the issue shall be immediately escalated to a joint committee (Himanshu Singh & Baljinder Singh) for a 3-business-day mediation window before any payment cycle is formally blocked.", {size:20, italic:true})], {before:0, after:120}),

      heading2("11.4 — UAT Protocol Signatures"),
      ...spacer(1),
      signatureBlock(),
      new Paragraph({children:[new PageBreak()]}),

      // ═══════════════════════════════════════════════════════════════════════
      // SECTION 12 — DPA
      // ═══════════════════════════════════════════════════════════════════════
      heading1("SECTION 12 — DATA PROCESSING AGREEMENT (DPA)"),
      divider(GOLD),
      new Table({
        width:{size:9360,type:WidthType.DXA}, columnWidths:[9360], borders:noBorders(),
        rows:[new TableRow({children:[new TableCell({
          children:[
            para([run("DATA PROCESSING AGREEMENT", {size:24, bold:true, color:DARK_GREEN})], {align:AlignmentType.CENTER, before:80, after:60}),
            para([run("DPDP Act 2023 Compliance Framework — Roles, Responsibilities & Indemnification", {size:20, italic:true})], {align:AlignmentType.CENTER, before:0, after:80}),
          ],
          shading:{fill:GREEN_LIGHT, type:ShadingType.CLEAR}, borders:noBorders(), margins:{top:160,bottom:160,left:240,right:240},
        })]})],
      }),
      ...spacer(1),

      heading2("12.1 — Regulatory Context & Roles"),
      para([run("This Data Processing Agreement (\"DPA\") governs the handling of all personal data processed in connection with the Vioratech Platform in compliance with India's Digital Personal Data Protection (DPDP) Act 2023.", {size:20})], {before:80, after:80}),
      new Table({
        width:{size:9360,type:WidthType.DXA},
        columnWidths:[4680,4680],
        rows:[
          new TableRow({children:[
            cell("DATA FIDUCIARY — VIORATECH",{width:4680,fill:DARK_GREEN,bold:true,size:20,color:WHITE,borders:allBorders(DARK_GREEN,2),align:AlignmentType.CENTER}),
            cell("DATA PROCESSOR — BITSS",{width:4680,fill:GOLD,bold:true,size:20,color:WHITE,borders:allBorders(GOLD,2),align:AlignmentType.CENTER}),
          ]}),
          new TableRow({children:[
            cell([
              new Paragraph({children:[run("Vioratech acts exclusively as the Data Fiduciary:", {size:20, bold:true})], spacing:{before:40,after:60}}),
              new Paragraph({numbering:{reference:"bullets",level:0},children:[run("Determines the purpose and means of all personal data processing on the platform",{size:19})],spacing:{before:30,after:30}}),
              new Paragraph({numbering:{reference:"bullets",level:0},children:[run("Holds absolute legal liability for obtaining valid user consent and regulatory compliance",{size:19})],spacing:{before:30,after:30}}),
              new Paragraph({numbering:{reference:"bullets",level:0},children:[run("Bears full liability for any data breaches or fines arising from the platform's operations",{size:19})],spacing:{before:30,after:40}}),
            ],{width:4680,fill:LIGHT_GREY,borders:allBorders("E5E7EB",2)}),
            cell([
              new Paragraph({children:[run("BITSS acts strictly and exclusively as the Data Processor:", {size:20, bold:true})], spacing:{before:40,after:60}}),
              new Paragraph({numbering:{reference:"bullets",level:0},children:[run("Processes personal data solely based on documented technical requirements",{size:19})],spacing:{before:30,after:30}}),
              new Paragraph({numbering:{reference:"bullets",level:0},children:[run("Shall implement industry-standard encryption protocols (TLS 1.3, AES-256)",{size:19})],spacing:{before:30,after:30}}),
              new Paragraph({numbering:{reference:"bullets",level:0},children:[run("Does not determine the purpose of processing or share data with sub-processors",{size:19})],spacing:{before:30,after:40}}),
            ],{width:4680,fill:LIGHT_GOLD,borders:allBorders("E5E7EB",2)}),
          ]}),
        ],
      }),
      ...spacer(2),

      heading2("12.2 — Indemnification & Audit Rights"),
      para([run("Vioratech fully indemnifies and holds harmless BITSS and Baljinder Singh from any regulatory fines imposed by the DPBI, or any civil lawsuits arising from data breaches, missing user consents, or misuse of the platform by end-users, EXCEPT in cases of gross negligence or willful misconduct by BITSS.", {size:20})], {before:80, after:80}),
      para([run("Audit Rights: As Data Fiduciary, Vioratech is granted the right to request a security audit of the BITSS AWS staging environment during the engagement to verify compliance with the documented encryption protocols (TLS 1.3, AES-256).", {size:20})], {before:0, after:120}),

      heading2("12.3 — DPA Signatures"),
      ...spacer(1),
      signatureBlock(),
      new Paragraph({children:[new PageBreak()]}),

      // ═══════════════════════════════════════════════════════════════════════
      // SECTION 13 — INITIAL INVOICE
      // ═══════════════════════════════════════════════════════════════════════
      heading1("SECTION 13 — COMMERCIAL INVOICE: CYCLE 1 INITIATION PAYMENT"),
      divider(GOLD),

      new Table({
        width:{size:9360,type:WidthType.DXA},
        columnWidths:[9360],
        borders:noBorders(),
        rows:[new TableRow({children:[new TableCell({
          children:[
            new Paragraph({children:[run("TAX INVOICE", {size:36, bold:true, color:WHITE})], alignment:AlignmentType.CENTER, spacing:{before:160,after:80}}),
            new Paragraph({children:[run("Cycle 1 — Project Initiation & Architecture Sign-off", {size:24, italic:true, color:WHITE})], alignment:AlignmentType.CENTER, spacing:{before:0,after:160}}),
          ],
          shading:{fill:DARK_GREEN, type:ShadingType.CLEAR}, borders:noBorders(), margins:{top:200,bottom:200,left:360,right:360},
        })]})],
      }),
      ...spacer(1),

      new Table({
        width:{size:9360,type:WidthType.DXA},
        columnWidths:[4680,4680],
        borders:noBorders(),
        rows:[
          new TableRow({children:[
            cell([
              new Paragraph({children:[run("FROM (Service Provider):", {size:18, bold:true, color:DARK_GREEN})], spacing:{before:40,after:60}}),
              new Paragraph({children:[run("Baljinder Singh", {size:22, bold:true})], spacing:{before:0,after:40}}),
              new Paragraph({children:[run("Tech Lead & Proprietor", {size:20})], spacing:{before:0,after:40}}),
              new Paragraph({children:[run("BITSS", {size:20})], spacing:{before:0,after:40}}),
              new Paragraph({children:[run("Mumbai, Maharashtra, India", {size:20})], spacing:{before:0,after:40}}),
            ],{width:4680, borders:noBorders()}),
            cell([
              new Paragraph({children:[run("TO (Client):", {size:18, bold:true, color:DARK_GREEN})], spacing:{before:40,after:60}}),
              new Paragraph({children:[run("Himanshu Singh", {size:22, bold:true})], spacing:{before:0,after:40}}),
              new Paragraph({children:[run("Authorized Signatory", {size:20})], spacing:{before:0,after:40}}),
              new Paragraph({children:[run("Vioratech", {size:20})], spacing:{before:0,after:40}}),
              new Paragraph({children:[run("India", {size:20})], spacing:{before:0,after:40}}),
            ],{width:4680, borders:noBorders()}),
          ]}),
        ],
      }),
      ...spacer(1),

      new Table({
        width:{size:9360,type:WidthType.DXA},
        columnWidths:[2160,2160,2160,2880],
        rows:[
          new TableRow({children:[
            cell("Invoice Number",{width:2160,fill:DARK_GREEN,bold:true,size:18,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("Invoice Date",{width:2160,fill:DARK_GREEN,bold:true,size:18,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("Due Date",{width:2160,fill:DARK_GREEN,bold:true,size:18,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("Project Reference",{width:2880,fill:DARK_GREEN,bold:true,size:18,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
          ]}),
          new TableRow({children:[
            cell("VT-INV-2026-001",{width:2160,fill:LIGHT_GOLD,bold:true,size:18}),
            cell("May 06, 2026",{width:2160,fill:LIGHT_GOLD,size:18}),
            cell("Due Immediately",{width:2160,fill:LIGHT_GOLD,size:18,bold:true,color:"C00000"}),
            cell("Vioratech AI Insurance Platform — Phase 1",{width:2880,fill:LIGHT_GOLD,size:18}),
          ]}),
        ],
      }),
      ...spacer(2),

      new Table({
        width:{size:9360,type:WidthType.DXA},
        columnWidths:[720,5040,1800,1800],
        rows:[
          new TableRow({children:[
            cell("#",{width:720,fill:DARK_GREEN,bold:true,size:18,color:WHITE,borders:allBorders(DARK_GREEN,2),align:AlignmentType.CENTER}),
            cell("Description of Services",{width:5040,fill:DARK_GREEN,bold:true,size:18,color:WHITE,borders:allBorders(DARK_GREEN,2)}),
            cell("HSN / SAC",{width:1800,fill:DARK_GREEN,bold:true,size:18,color:WHITE,borders:allBorders(DARK_GREEN,2),align:AlignmentType.CENTER}),
            cell("Amount (INR) - Excl. GST",{width:1800,fill:DARK_GREEN,bold:true,size:18,color:WHITE,borders:allBorders(DARK_GREEN,2),align:AlignmentType.CENTER}),
          ]}),
          new TableRow({children:[
            cell("1",{width:720,fill:LIGHT_GOLD,size:18,align:AlignmentType.CENTER}),
            cell([
              new Paragraph({children:[run("Cycle 1 — Project Initiation & Architecture Sign-off (Advance)", {size:20, bold:true})], spacing:{before:60,after:40}}),
              new Paragraph({children:[run("Comprehensive project kick-off services including:", {size:18})], spacing:{before:0,after:40}}),
              new Paragraph({numbering:{reference:"bullets2",level:0},children:[run("Full technical architecture review and documentation",{size:18})],spacing:{before:20,after:20}}),
              new Paragraph({numbering:{reference:"bullets2",level:0},children:[run("AWS cloud infrastructure setup and configuration",{size:18})],spacing:{before:20,after:20}}),
              new Paragraph({numbering:{reference:"bullets2",level:0},children:[run("Development environment setup (Git, CI/CD pipelines, staging)",{size:18})],spacing:{before:20,after:20}}),
              new Paragraph({numbering:{reference:"bullets2",level:0},children:[run("Project management tool setup and sprint planning",{size:18})],spacing:{before:20,after:20}}),
            ],{width:5040,fill:LIGHT_GOLD,borders:allBorders("E5E7EB",2)}),
            cell("998313",{width:1800,fill:LIGHT_GOLD,size:18,align:AlignmentType.CENTER}),
            cell("₹ 1,50,000",{width:1800,fill:LIGHT_GOLD,size:18,bold:true,align:AlignmentType.CENTER}),
          ]}),
          new TableRow({children:[
            cell("",{width:720,fill:WHITE,borders:allBorders("E5E7EB",2)}),
            cell("Subtotal",{width:5040,fill:WHITE,bold:true,size:18,align:AlignmentType.RIGHT,borders:allBorders("E5E7EB",2)}),
            cell("",{width:1800,fill:WHITE,borders:allBorders("E5E7EB",2)}),
            cell("₹ 1,50,000",{width:1800,fill:WHITE,size:18,bold:true,align:AlignmentType.CENTER,borders:allBorders("E5E7EB",2)}),
          ]}),
          new TableRow({children:[
            cell("",{width:720,fill:WHITE,borders:allBorders("E5E7EB",2)}),
            cell("GST @ 18% (Provide GSTIN for ITC)",{width:5040,fill:WHITE,size:18,italic:true,align:AlignmentType.RIGHT,borders:allBorders("E5E7EB",2)}),
            cell("",{width:1800,fill:WHITE,borders:allBorders("E5E7EB",2)}),
            cell("₹ 27,000",{width:1800,fill:WHITE,size:18,italic:true,align:AlignmentType.CENTER,borders:allBorders("E5E7EB",2)}),
          ]}),
          new TableRow({children:[
            cell("",{width:720,fill:WHITE,borders:allBorders("E5E7EB",2)}),
            cell("TOTAL AMOUNT DUE (Incl. GST)",{width:5040,fill:DARK_GREEN,bold:true,size:22,color:WHITE,align:AlignmentType.RIGHT,borders:allBorders(DARK_GREEN,2)}),
            cell("",{width:1800,fill:DARK_GREEN,borders:allBorders(DARK_GREEN,2)}),
            cell("₹ 1,77,000",{width:1800,fill:GOLD,bold:true,size:22,color:WHITE,align:AlignmentType.CENTER,borders:allBorders(GOLD,2)}),
          ]}),
        ],
      }),
      ...spacer(2),

      heading2("13.1 — Payment Instructions"),
      bullet("As BITSS is a sole proprietorship, all payments and cheques should be made payable directly to Baljinder Singh, which is legally recognized as the firm's financial entity.", {size:20}),
      bullet("Development work will commence within 1 business day of confirmed payment receipt.", {size:20}),
      ...spacer(2),

      heading2("13.2 — Authorisation"),
      ...spacer(1),
      new Table({
        width:{size:9360,type:WidthType.DXA},
        columnWidths:[4680,4680],
        borders:noBorders(),
        rows:[new TableRow({children:[
          cell([
            new Paragraph({children:[run("Issued By:", {size:20, bold:true, color:DARK_GREEN})], spacing:{before:0,after:80}}),
            new Paragraph({children:[run("Baljinder Singh", {size:22, bold:true})], spacing:{before:0,after:40}}),
            new Paragraph({children:[run("Tech Lead & Proprietor, BITSS", {size:20})], spacing:{before:0,after:200}}),
            new Paragraph({children:[run("Signature: _______________________________", {size:20})], spacing:{before:0,after:80}}),
            new Paragraph({children:[run("Date: ___________________________________", {size:20})], spacing:{before:0,after:40}}),
          ],{width:4680, borders:noBorders()}),
          cell([
            new Paragraph({children:[run("Acknowledged & Approved By:", {size:20, bold:true, color:DARK_GREEN})], spacing:{before:0,after:80}}),
            new Paragraph({children:[run("Himanshu Singh", {size:22, bold:true})], spacing:{before:0,after:40}}),
            new Paragraph({children:[run("Authorized Signatory, Vioratech", {size:20})], spacing:{before:0,after:200}}),
            new Paragraph({children:[run("Signature: _______________________________", {size:20})], spacing:{before:0,after:80}}),
            new Paragraph({children:[run("Date: ___________________________________", {size:20})], spacing:{before:0,after:40}}),
          ],{width:4680, borders:noBorders()}),
        ]})]
      }),
      new Paragraph({children:[new PageBreak()]}),

      // ═══════════════════════════════════════════════════════════════════════
      // FINAL MASTER SIGNATURE PAGE
      // ═══════════════════════════════════════════════════════════════════════
      heading1("MASTER AGREEMENT EXECUTION — FINAL SIGNATURES"),
      divider(GOLD),
      para([run("By signing below, both parties confirm that they have read, understood, and agree to all terms, conditions, obligations, and frameworks set forth in this complete Business Proposal and Contract Pack, including:", {size:22})], {before:120, after:120}),

      new Table({
        width:{size:9360,type:WidthType.DXA},
        columnWidths:[720,8640],
        rows:[
          ...["Section 1 — Executive Summary & Scope (Lean MVP)",
              "Section 2 — Client Prerequisites & Dependencies",
              "Section 3 — Project Description (12-Month Vision)",
              "Section 4 — Project Budget (12-Month Overview)",
              "Section 5 — Technical Roadmap (12-Month Enterprise Vision)",
              "Section 6 — Phase 1: One-Month Scope (Experience MVP)",
              "Section 7 — Phase 1: One-Month Sprint Roadmap (Week-by-Week)",
              "Section 8 — Payment Schedule & Commercial Terms",
              "Section 9 — Non-Disclosure Agreement (NDA) — 2-Year Term",
              "Section 10 — Master Services Agreement (MSA)",
              "Section 11 — UAT & Sign-Off Protocol — 7-Day Auto-Approval & Pause",
              "Section 12 — Data Processing Agreement (DPA)",
              "Section 13 — Commercial Invoice VT-INV-2026-001 — Cycle 1 Advance ₹1,50,000",
          ].map((t,i)=>new TableRow({children:[
            cell("✓",{width:720,fill:GOLD,bold:true,size:20,color:WHITE,borders:allBorders(GOLD,2),align:AlignmentType.CENTER}),
            cell(t,{width:8640,fill:i%2===0?LIGHT_GOLD:WHITE,size:20,borders:allBorders("E5E7EB",2)}),
          ]})),
        ],
      }),
      ...spacer(2),
      para([run("Both parties acknowledge their authorized capacity to bind their respective entities and confirm that no representations, warranties, or inducements not contained in this document have been relied upon in entering into this Agreement.", {size:20, italic:true})], {before:120, after:200}),
      signatureBlock(),
      ...spacer(3),
      divider(GOLD),
      para([run("This document was prepared by Baljinder Singh, Tech Lead & Proprietor, on behalf of BITSS, for the exclusive use of Himanshu Singh and Vioratech. Any reproduction, distribution, or disclosure of this document to any third party without the prior written consent of both parties is strictly prohibited.", {size:18, italic:true, color:DARK_GREY})], {align:AlignmentType.CENTER, before:160, after:160}),
      para([run("Classification: Highly Confidential — Binding Execution Copy", {size:18, bold:true, color:"C00000"})], {align:AlignmentType.CENTER, before:0, after:80}),
      para([run("© 2026 BITSS & Vioratech. All Rights Reserved.", {size:18, color:DARK_GREY})], {align:AlignmentType.CENTER, before:0, after:0}),
    ],
  }],
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("C:\\Users\\Admin\\Downloads\\Vioratech_Business_Proposal_Final_V5.docx", buffer);
  console.log("Document created successfully!");
});
