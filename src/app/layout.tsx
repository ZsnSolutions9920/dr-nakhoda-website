import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Dr. Nakhoda's Skin Institute | Dermatology & Aesthetic Clinic Karachi",
  description:
    "Board certified dermatologist with 20+ years experience. FDA-approved laser treatments, skin rejuvenation, anti-aging, and cosmetic procedures in Karachi, Pakistan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
