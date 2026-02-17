import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Greg Oehmen | Product Leader & AI-Native Builder",
  description: "Senior product leader with 12+ years building cloud platforms, fintech APIs, and AI-enabled products. Fractional CPO for early-stage startups.",
  keywords: ["Product Management", "Fractional CPO", "Cloud Platforms", "Fintech", "AI Strategy"],
  authors: [{ name: "Greg Oehmen" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Greg Oehmen | Product Leader & AI-Native Builder",
    description: "Senior product leader specializing in cloud platforms, fintech APIs, and AI products",
    url: "https://pm-portfolio-goehmen.vercel.app",
    siteName: "Greg Oehmen Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Greg Oehmen | Product Leader & AI-Native Builder",
    description: "Senior product leader with 12+ years building cloud platforms, fintech APIs, and AI-enabled products. Fractional CPO for early-stage startups.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}