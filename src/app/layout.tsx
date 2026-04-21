import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import EngageModal from "@/components/EngageModal";
import JarvisWidget from "@/components/JarvisWidget";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BITSS | Enterprise Systems & Architecture",
  description: "We engineer mission-critical enterprise software, native mobile apps, AI pipelines, and secure digital infrastructure for organizations that operate at scale. Bit by bit.",
  metadataBase: new URL("https://thebitss.com"),
  keywords: ["enterprise software", "custom ERP", "CRM", "native mobile apps", "zero trust security", "headless ecommerce", "IoT", "India"],
  authors: [{ name: "BITSS", url: "https://thebitss.com" }],
  openGraph: {
    title: "BITSS | Enterprise Systems & Architecture",
    description: "Mission-critical applications, AI pipelines, and secure digital infrastructure. Engineered in India. Bit by bit.",
    url: "https://thebitss.com",
    siteName: "BITSS",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BITSS — Enterprise Architecture" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BITSS | Enterprise Systems & Architecture",
    description: "Mission-critical applications, AI pipelines, and secure digital infrastructure.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} antialiased bg-void text-text font-body selection:bg-accent/30 selection:text-white min-h-screen flex flex-col`}
      >
        {children}
        <EngageModal />
        <JarvisWidget />
      </body>
    </html>
  );
}
