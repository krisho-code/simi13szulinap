import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} – ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#07080d" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
