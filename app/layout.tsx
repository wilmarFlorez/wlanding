import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Wilmar | Product Architect & Builder",
  description:
    "Wilmar entiende problemas, diseña intervenciones y construye software con IA, agentes, automatización e integraciones cuando tienen sentido.",
  openGraph: {
    title: "Wilmar | Product Architect & Builder",
    description:
      "Product Architect & Builder para problemas operativos y productos conectados con IA, automatización e integraciones.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
