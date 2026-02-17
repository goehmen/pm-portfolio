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
  title: "Greg Oehmen | Product Leader and AI-Native Builder",
  description: "From DBA to cloud platform leader to fintech API strategist. 12+ years of data-driven product leadership. Fractional CPO for AI startups.",
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
    title: "Greg Oehmen | Product Leader and AI-Native Builder",
    description: "From DBA to cloud platform leader to fintech API strategist. 12+ years of data-driven product leadership. Fractional CPO for AI startups.",
    url: "https://pm-portfolio-goehmen.vercel.app",
    siteName: "Greg Oehmen Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Greg Oehmen | Product Leader and AI-Native Builder",
    description: "From DBA to cloud platform leader to fintech API strategist. 12+ years of data-driven product leadership. Fractional CPO for AI startups.",
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