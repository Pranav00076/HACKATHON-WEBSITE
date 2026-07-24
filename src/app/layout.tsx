import type { Metadata } from "next";
import { Orbitron, Rajdhani, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import GlobalEffects from "@/components/GlobalEffects";
import LoadingScreen from "@/components/LoadingScreen";
import SocialMedia from "@/components/SocialMedia";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DynamicBackground from "@/components/DynamicBackground";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Omnikon Hackathon 2026 | Build The Impossible",
    template: "%s | Omnikon Hackathon 2026",
  },
  description: "The ultimate national Web Dev, Full Stack, AI & Cloud hackathon arena. Build real products, compete for cash prizes, and connect with tech mentors.",
  keywords: ["Omnikon", "Hackathon", "Web Development", "AI", "Full Stack", "Cloud", "Cybersecurity", "Tech Competition"],
  openGraph: {
    title: "Omnikon Hackathon 2026 | Build The Impossible",
    description: "National Tech Hackathon 2026. Turn less than 1 month of coding into a product that matters.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable} ${shareTechMono.variable}`}>
      <body className="bg-[#050505] text-white selection:bg-[#ff1e1e] selection:text-white">
        <LoadingScreen />
        <SocialMedia />
        <DynamicBackground />
        <LenisProvider>
          <GlobalEffects />
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
