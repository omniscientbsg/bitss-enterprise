import os
import datetime
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    KeepTogether, PageBreak
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.platypus import Flowable

# ── Brand Colors ───────────────────────────────
DARK_GREEN  = colors.HexColor('#0F2A27')
EMERALD     = colors.HexColor('#1B6B4A')
GOLD        = colors.HexColor('#C9A961')
LIGHT_GOLD  = colors.HexColor('#F9F5EB')
LIGHT_GREY  = colors.HexColor('#FAFAFA')
CREAM       = colors.HexColor('#FFF9F0')
CHARCOAL_MD = colors.HexColor('#2C2C2C')
WHITE       = colors.white
RED         = colors.HexColor('#EF476F')
RED_BG      = colors.HexColor('#FEE8EE')
YELLOW_BG   = colors.HexColor('#FFF8E1')
GREEN_BG    = colors.HexColor('#E3F5EE')

PAGE_W, PAGE_H = A4
USABLE_W = PAGE_W - 28*mm

# ── Custom Flowables ──────────────────────────────────────────────────────────
class SectionHeader(Flowable):
    def __init__(self, text, bg=DARK_GREEN, fg=GOLD, height=28):
        Flowable.__init__(self)
        self.text = text
        self.bg, self.fg = bg, fg
        self.height = height
        self.width = USABLE_W
    def wrap(self, *args): return self.width, self.height
    def draw(self):
        c = self.canv
        c.setFillColor(self.bg)
        c.roundRect(0, 0, self.width, self.height, 4, fill=1, stroke=0)
        c.setStrokeColor(GOLD)
        c.setLineWidth(1)
        c.roundRect(0, 0, self.width, self.height, 4, fill=0, stroke=1)
        c.setFillColor(self.fg)
        c.setFont('Helvetica-Bold', 11)
        c.drawString(12, 9, self.text)

class TitlePageV4(Flowable):
    def __init__(self, doc_type, subtitle):
        Flowable.__init__(self)
        self.w, self.h = USABLE_W, 200*mm
        self.doc_type = doc_type
        self.subtitle = subtitle
    def wrap(self, *args): return self.w, self.h
    def draw(self):
        c = self.canv
        c.setFillColor(GOLD)
        c.setFont('Helvetica-Bold', 12)
        c.drawString(0, self.h, 'B I T S S   |   E N T E R P R I S E   A G R E E M E N T')
        
        c.setStrokeColor(DARK_GREEN)
        c.setLineWidth(4)
        c.line(0, self.h - 10, self.w, self.h - 10)
        
        c.setFillColor(DARK_GREEN)
        c.setFont('Helvetica-Bold', 40)
        c.drawString(0, self.h - 60, 'V I O R A T E C H')
        
        c.setFillColor(CHARCOAL_MD)
        c.setFont('Helvetica-Oblique', 16)
        c.drawString(0, self.h - 85, 'AI Insurance Platform & Operating System')
        
        c.setFillColor(GOLD)
        c.setFont('Helvetica-Bold', 16)
        c.drawString(0, self.h - 130, self.doc_type)
        
        c.setFillColor(CHARCOAL_MD)
        c.setFont('Helvetica', 11)
        c.drawString(0, self.h - 150, self.subtitle)
        
        c.setFillColor(DARK_GREEN)
        c.setFont('Helvetica-Bold', 11)
        c.drawString(0, self.h - 200, 'Prepared For: Himanshu Singh — Vioratech')
        c.drawString(0, self.h - 220, 'Prepared By: Baljinder Singh — Tech Lead & Proprietor, BITSS')
        c.drawString(0, self.h - 240, f'Date: {datetime.datetime.now().strftime("%B %d, %Y")}')
        
        c.setFillColor(colors.HexColor('#C00000'))
        c.drawString(0, self.h - 260, 'Classification: Highly Confidential — Binding Execution Copy')

        c.setStrokeColor(GOLD)
        c.setLineWidth(1)
        c.line(0, self.h - 275, self.w, self.h - 275)

# ── Style Setup ───────────────────────────────────────────────────────────────
def make_styles():
    s = {}
    s['h1'] = ParagraphStyle('h1', fontName='Helvetica-Bold', fontSize=14, textColor=DARK_GREEN, spaceAfter=6, spaceBefore=14)
    s['h2'] = ParagraphStyle('h2', fontName='Helvetica-Bold', fontSize=11, textColor=EMERALD, spaceAfter=6, spaceBefore=10)
    s['body'] = ParagraphStyle('body', fontName='Helvetica', fontSize=9, textColor=CHARCOAL_MD, leading=14, spaceAfter=6)
    s['small'] = ParagraphStyle('small', fontName='Helvetica', fontSize=8, textColor=CHARCOAL_MD, leading=12)
    s['smallb'] = ParagraphStyle('smallb', fontName='Helvetica-Bold', fontSize=8, textColor=DARK_GREEN, leading=12)
    return s

S = make_styles()
def sp(n=4): return Spacer(1, n)

def create_signature_block():
    sig_data = [
        [Paragraph('__________________________________________', S['small']), Paragraph('__________________________________________', S['small'])],
        [Paragraph('<b>Himanshu Singh</b><br/>Authorized Signatory, Vioratech', S['small']), Paragraph('<b>Baljinder Singh</b><br/>Tech Lead & Proprietor, BITSS', S['small'])],
        [Paragraph('Date: ________________', S['small']), Paragraph('Date: ________________', S['small'])]
    ]
    t_sig = Table(sig_data, colWidths=[90*mm, 90*mm])
    t_sig.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'), ('ALIGN',(0,0),(-1,-1),'LEFT'), ('BOTTOMPADDING',(0,0),(-1,-1),10)]))
    return KeepTogether([Spacer(1, 20), Paragraph('<b>SIGNATURES OF AGREEMENT</b>', S['h1']), Spacer(1, 10), t_sig])

def generate_pdf(filename, doc_type, subtitle, sections):
    path = os.path.join(r'C:\Users\Admin\Documents\BITSS', filename)
    doc = SimpleDocTemplate(path, pagesize=A4, leftMargin=14*mm, rightMargin=14*mm, topMargin=14*mm, bottomMargin=14*mm)
    story = [TitlePageV4(doc_type, subtitle), sp(10)]
    
    for header, content in sections:
        story.append(SectionHeader(header))
        story.append(sp(8))
        for item in content:
            story.append(item)
        story.append(sp(12))
        
    story.append(create_signature_block())
    doc.build(story)
    print(f"Generated {filename}")

# ── 1. SOW & ROADMAP ─────────────────────────────────────────────────────────────
sow_sections = [
    ('  1. EXECUTIVE SUMMARY & SCOPE (LEAN MVP)', [
        Paragraph('This Statement of Work (SOW) defines the commercial terms, delivery milestones, and technical scope for the development of the Vioratech Platform. Based on strict engineering timelines, the 1-Month MVP is laser-focused on the core aggregator engine, secure authentication, payment routing, and robust CRM backends. Complex secondary systems (Mobile Apps, Telematics, Full ML Models) are allocated to Phase 2/3.', S['body']),
        Table([
            [Paragraph('<b>Phase</b>', S['smallb']), Paragraph('<b>Deliverables</b>', S['smallb']), Paragraph('<b>Budget Cap</b>', S['smallb'])],
            [Paragraph('<b>Phase 1: Experience MVP (1 Month)</b>', S['smallb']), Paragraph('• Full Web Application (Next.js/Node)<br/>• Interactive UI/UX & 3D/VFX Landing elements<br/>• Sandbox aggregator & Quote comparison UI<br/>• Claim Sherpa CRM Backend & Support Console<br/>• Standard AI Triage via Claude/Gemini APIs', S['small']), Paragraph('₹15,000,000<br/>(Fifteen Lakhs)', S['smallb'])],
            [Paragraph('<b>Phase 2 & 3: AI Native OS (12 Months)</b>', S['smallb']), Paragraph('• 30+ Live Insurer APIs & Nodal Escrows<br/>• AI Actuarial Tech & Reserve Prediction ML<br/>• Native iOS & Android Apps<br/>• HealthScore, Telematics, & Custom DocAI', S['small']), Paragraph('$270,000 USD<br/>(~₹2.25 Crores)', S['smallb'])],
        ], colWidths=[45*mm, 100*mm, 37*mm], style=TableStyle([
            ('BACKGROUND',(0,0),(-1,0), DARK_GREEN), ('TEXTCOLOR',(0,0),(-1,0), WHITE),
            ('ROWBACKGROUNDS',(0,1),(-1,-1),[WHITE, LIGHT_GOLD]), ('GRID',(0,0),(-1,-1),0.5, GOLD),
            ('VALIGN',(0,0),(-1,-1),'TOP'), ('PADDING',(0,0),(-1,-1),8)
        ]))
    ]),
    ('  2. PHASE 1 SPRINT ROADMAP (WEEK-BY-WEEK)', [
        Table([
            [Paragraph('<b>Week</b>', S['smallb']), Paragraph('<b>Engineering Focus</b>', S['smallb']), Paragraph('<b>Demo-able Output</b>', S['smallb'])],
            [Paragraph('<b>Week 1</b><br/>Foundation', S['smallb']), Paragraph('Infrastructure setup, Auth module (OTP, OAuth), RBAC, base Next.js application shell, API gateway, and Database schema setup.', S['small']), Paragraph('Working login flow and dashboard shell', S['small'])],
            [Paragraph('<b>Week 2</b><br/>Core UX & Quotes', S['smallb']), Paragraph('Dynamic JSON form engine, quote comparison UI (mock data), NCB calculator, DigiLocker KYC integration, and 3D landing page.', S['small']), Paragraph('User completes a health form and sees 10+ mock plans', S['small'])],
            [Paragraph('<b>Week 3</b><br/>Payments & Backend', S['smallb']), Paragraph('Razorpay checkout integration, mock policy PDF generation, Claim Sherpa CRM Support Console setup, and Claude/Gemini API integration for ticket triage.', S['small']), Paragraph('Full purchase journey & Sherpa support backend accessible', S['small'])],
            [Paragraph('<b>Week 4</b><br/>Polish & Deploy', S['smallb']), Paragraph('PoSP agent portal with lead dashboard, OpenAPI sandbox, Admin backend control panel, complete QA, and production deployment prep.', S['small']), Paragraph('End-to-End Demo: Login → Quote → Pay → Support CRM', S['small'])],
        ], colWidths=[25*mm, 90*mm, 67*mm], style=TableStyle([
            ('BACKGROUND',(0,0),(-1,0), DARK_GREEN), ('TEXTCOLOR',(0,0),(-1,0), WHITE),
            ('ROWBACKGROUNDS',(0,1),(-1,-1),[WHITE, LIGHT_GOLD]), ('GRID',(0,0),(-1,-1),0.5, GOLD),
            ('VALIGN',(0,0),(-1,-1),'TOP'), ('PADDING',(0,0),(-1,-1),6)
        ]))
    ]),
    ('  3. CLIENT PREREQUISITES & DEPENDENCIES', [
        Paragraph('To achieve the 30-day delivery timeline, Vioratech must provide the following prerequisites. <b>Any delay by the Client in providing these dependencies automatically pauses the 30-day delivery SLA day-for-day.</b>', S['body']),
        Paragraph('<b>1. Brand & Design Assets (Day 1):</b> High-resolution vector logos (.SVG/.AI), official brand color hex codes, and typography guidelines. If unavailable, Vioratech must formally approve BITSS’s design choices by Day 3.', S['body']),
        Paragraph('<b>2. Commercial Entity Credentials (Day 3):</b> Registered business PAN card, GST certificate, and company bank account details required to get the Razorpay/Stripe Sandbox and Meta WhatsApp APIs approved.', S['body']),
        Paragraph('<b>3. Insurer Product Specifications (Day 5):</b> Exact underwriting questionnaires (PDFs/Excel) for at least 2 Health and 2 Motor policies to accurately map the dynamic form engine schemas.', S['body']),
        Paragraph('<b>4. Nominated UAT Approver (Day 1):</b> A single stakeholder (Himanshu Singh) who holds the absolute legal authority to approve or reject UAT milestones.', S['body']),
        Paragraph('<b>5. Insurer Staging API Credentials (Day 5):</b> If Vioratech wishes to have a real-time policy buying experience in Month 1, they must provide Sandbox/UAT API credentials for 1-2 insurers by Day 5. If unavailable in time, BITSS will automatically default to using Mock/Dummy Data to ensure the 30-day deadline is met.', S['body']),
    ])
]

# ── 2. MSA ─────────────────────────────────────────────────────────────
msa_sections = [
    ('  1. SCOPE OF SERVICES', [
        Paragraph('This Master Services Agreement ("MSA") governs the commercial engagement for the development of the Vioratech AI Insurance Platform. The Phase 1 (MVP) budget is capped at <b>₹15,000,000 (Fifteen Lakhs INR)</b>. The Phase 2 & 3 (Enterprise AI OS) budget is estimated at <b>$270,000 USD</b> and will be scoped separately post-MVP.', S['body'])
    ]),
    ('  2. COMMERCIAL TERMS & SUBSIDIES', [
        Paragraph('Payment cycles are asynchronous and independent. Upon UAT verification of any milestone, the associated payment of ₹1.5 Lakhs is triggered immediately. Post-Dated Cheques (PDCs) or NEFT/RTGS bank transfers to the proprietorship account of Baljinder Singh (BITSS) are accepted.', S['body']),
        Paragraph('<b>Operational Cost Clarity:</b> The ₹4,00,000 infrastructure subsidy covered by BITSS applies exclusively to AWS compute infrastructure and AI API inference (Claude/Gemini/OpenAI) costs. All operational and third-party transactional costs—including SMS gateways (MSG91), WhatsApp Business conversation fees, Payment Gateway transaction fees (Razorpay), and domain registrations—are the sole financial responsibility of Vioratech.', S['body'])
    ]),
    ('  3. SANDBOX DEFAULT CLAUSE', [
        Paragraph('If Vioratech cannot procure verified Production API keys for payment gateways (Razorpay), KYC channels (DigiLocker), communication APIs (WhatsApp), or Insurers by Day 15, BITSS will deliver the integrations in Sandbox/Test mode. Delivery in Sandbox mode constitutes 100% fulfillment of the milestone for payment purposes.', S['body'])
    ]),
    ('  4. PROPORTIONAL INTELLECTUAL PROPERTY TRANSFER', [
        Paragraph('<b>Proportional IP Transfer:</b> Intellectual property rights for each specific deliverable (e.g., UI/UX designs, Backend modules) shall transfer exclusively to Vioratech upon the successful clearance of the associated milestone payment for that specific deliverable. Full platform IP transfers completely to Vioratech upon the successful completion of all Phase 1 payments.', S['body']),
        Paragraph('Prior to payment clearance for a given milestone, all source code and architectures remain the sole property of BITSS.', S['body'])
    ]),
    ('  5. LIMITATION OF LIABILITY & PROPRIETORSHIP LEGALITIES', [
        Paragraph('<b>Liability Cap:</b> BITSS\'s maximum aggregate financial liability to Vioratech for any technical failure, defect, delay, or damages arising out of this Agreement shall be strictly capped at the total cumulative amount of milestone payments paid by Vioratech to date.', S['body']),
        Paragraph('<b>Proprietorship Status:</b> As BITSS is a registered sole proprietorship firm owned by Baljinder Singh, the firm and the individual are considered a single legal and financial entity under Indian law. All milestone payments and PDCs may be issued in the name of and deposited directly into the personal bank account of Baljinder Singh.', S['body'])
    ])
]

# ── 3. UAT ─────────────────────────────────────────────────────────────
uat_sections = [
    ('  1. ASYNCHRONOUS MILESTONE DELIVERY', [
        Paragraph('User Acceptance Testing (UAT) is the formal contractual process by which Vioratech reviews and approves completed deliverables. The 10 payment cycles operate independently; BITSS may submit milestones for UAT out of sequential order.', S['body'])
    ]),
    ('  2. THE 7-DAY AUTO-APPROVAL PROTOCOL & PAUSE MECHANISM', [
        Paragraph('To maintain strict project delivery velocity, the following review protocol is binding:', S['body']),
        Paragraph('1. Upon submission of a milestone deliverable, Vioratech is granted a review window of <b>seven (7) business days</b>.', S['body']),
        Paragraph('2. <b>Pause Mechanism:</b> Vioratech may pause the auto-approval clock by sending a formal email to the BITSS Project Manager requesting a hold or detailing required defect revisions within the 7-day window.', S['body']),
        Paragraph('3. <b>Auto-Acceptance:</b> If Vioratech does not provide any actionable feedback, revision requests, or pause emails within the 7-business-day window, the milestone is legally deemed "Accepted." The associated payment cycle is instantly triggered.', S['body'])
    ]),
    ('  3. DEFECTS VS. SCOPE CREEP', [
        Paragraph('A "Defect" is a feature failing to operate as defined in the approved Technical Roadmap. A "Change Request" (Scope Creep) is a request for new functionality, additions, or architectural changes not present in the original SOW.', S['body']),
        Paragraph('Change Requests will not block the sign-off and payment of the current milestone. They will be logged and billed separately.', S['body'])
    ])
]

# ── 4. DPA ─────────────────────────────────────────────────────────────
dpa_sections = [
    ('  1. ROLES UNDER DPDP ACT 2023', [
        Paragraph('This Data Processing Agreement ("DPA") governs the handling of data in compliance with India’s Digital Personal Data Protection (DPDP) Act 2023.', S['body']),
        Paragraph('<b>Data Fiduciary (Vioratech):</b> Vioratech acts exclusively as the Data Fiduciary, determining the purpose of processing. Vioratech holds absolute liability for obtaining user consent, maintaining privacy policies, and fulfilling obligations to the Data Protection Board of India.', S['body']),
        Paragraph('<b>Data Processor (BITSS):</b> BITSS acts strictly as the Data Processor, processing data solely based on technical requirements to build and test the software.', S['body'])
    ]),
    ('  2. INDEMNIFICATION', [
        Paragraph('Vioratech fully indemnifies and holds harmless BITSS and Baljinder Singh from any regulatory fines, civil lawsuits, or legal actions arising from data breaches, missing user consents, or misuse of the platform by end-users. BITSS’s liability is strictly limited to implementing industry-standard security protocols (TLS 1.3, AES-256) during development.', S['body'])
    ])
]

# ── 5. NDA ─────────────────────────────────────────────────────────────
nda_sections = [
    ('  1. PURPOSE & DEFINITIONS', [
        Paragraph('This Mutual Non-Disclosure and Non-Compete Agreement ("NDA") establishes strict confidentiality between Vioratech ("Client") and BITSS ("Receiving Party").', S['body'])
    ]),
    ('  2. MUTUAL OBLIGATIONS & NON-COMPETE', [
        Paragraph('<b>Protection of Client:</b> BITSS agrees not to reverse-engineer, share, or build a direct clone of Vioratech’s specific proprietary business model for direct competitors.', S['body']),
        Paragraph('<b>Protection of Developer:</b> Vioratech agrees not to share, distribute, or execute the proprietary technical blueprints, AI prompts, or architecture designs provided by BITSS with any third-party development agency without explicitly retaining BITSS.', S['body'])
    ]),
    ('  3. TERM', [
        Paragraph('The obligations of confidentiality and the mutual non-compete provisions under this Agreement shall survive the termination of the project and remain in full force for a period of <b>two (2) years</b>. Any breach shall entitle the non-breaching party to seek injunctive relief in the courts of Mumbai, India.', S['body'])
    ])
]

# Generate Documents
generate_pdf('Vioratech_BITSS_SOW_Roadmap_V4.pdf', 'Statement of Work & Tech Roadmap', 'Phase 1 MVP Scope & Client Dependencies', sow_sections)
generate_pdf('Vioratech_BITSS_MSA_V4.pdf', 'Master Services Agreement', 'Commercials, IP Transfer & Liability', msa_sections)
generate_pdf('Vioratech_BITSS_UAT_Protocol_V4.pdf', 'UAT & Sign-Off Protocol', '7-Day Auto-Approval & Pause Mechanism', uat_sections)
generate_pdf('Vioratech_BITSS_DPA_V4.pdf', 'Data Processing Agreement', 'DPDP Act 2023 Compliance', dpa_sections)
generate_pdf('Vioratech_BITSS_NDA_V4.pdf', 'Non-Disclosure Agreement', '2-Year Mutual Confidentiality', nda_sections)

# ── 6. INVOICE ─────────────────────────────────────────────────────────
def generate_invoice():
    path = os.path.join(r'C:\Users\Admin\Documents\BITSS', 'Vioratech_BITSS_Cycle1_Invoice.pdf')
    doc = SimpleDocTemplate(path, pagesize=A4, leftMargin=14*mm, rightMargin=14*mm, topMargin=14*mm, bottomMargin=14*mm)
    story = [TitlePageV4("Commercial Invoice", "Cycle 1 Initiation Payment"), sp(10)]
    
    story.append(SectionHeader("  CYCLE 1 — PROJECT INITIATION INVOICE"))
    story.append(sp(8))
    
    inv_data = [
        [Paragraph('<b>Invoice Number:</b>', S['smallb']), Paragraph('VT-INV-2026-001', S['small'])],
        [Paragraph('<b>Date of Issue:</b>', S['smallb']), Paragraph(datetime.datetime.now().strftime("%B %d, %Y"), S['small'])],
        [Paragraph('<b>Due Date:</b>', S['smallb']), Paragraph('<b>Due Immediately</b>', S['smallb'])],
        [Paragraph('<b>Billed To:</b>', S['smallb']), Paragraph('Himanshu Singh, Vioratech', S['small'])],
        [Paragraph('<b>Billed By:</b>', S['smallb']), Paragraph('Baljinder Singh, BITSS', S['small'])],
    ]
    t_inv = Table(inv_data, colWidths=[40*mm, 130*mm])
    t_inv.setStyle(TableStyle([('BACKGROUND', (0,0), (0,-1), LIGHT_GREY), ('GRID', (0,0), (-1,-1), 0.5, GOLD), ('PADDING', (0,0), (-1,-1), 6)]))
    story.append(t_inv)
    story.append(sp(12))
    
    desc_data = [
        [Paragraph('<b>Description of Services</b>', S['smallb']), Paragraph('<b>Amount (INR)</b>', S['smallb'])],
        [Paragraph('Cycle 1 — Project Initiation & Architecture Sign-off (Advance)<br/><i>Includes infrastructure setup, technical blueprints, and sprint planning</i>', S['small']), Paragraph('₹ 1,50,000', S['small'])],
        [Paragraph('<b>TOTAL AMOUNT DUE</b>', S['smallb']), Paragraph('<b>₹ 1,50,000</b>', S['smallb'])],
    ]
    t_desc = Table(desc_data, colWidths=[140*mm, 40*mm])
    t_desc.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), DARK_GREEN), ('TEXTCOLOR', (0,0), (-1,0), WHITE),
        ('BACKGROUND', (0,-1), (-1,-1), CREAM), ('GRID', (0,0), (-1,-1), 0.5, GOLD),
        ('ALIGN', (1,0), (1,-1), 'RIGHT'), ('PADDING', (0,0), (-1,-1), 8)
    ]))
    story.append(t_desc)
    story.append(sp(20))
    story.append(Paragraph('<b>Payment Instructions:</b>', S['smallb']))
    story.append(Paragraph('As BITSS is a sole proprietorship, all payments, NEFT/RTGS transfers, and cheques should be made payable directly to <b>Baljinder Singh</b>, which is legally recognized as the firm\'s financial entity. Development commences within 1 business day of payment clearance.', S['small']))
    
    story.append(create_signature_block())
    doc.build(story)
    print("Generated Vioratech_BITSS_Cycle1_Invoice.pdf")

generate_invoice()
