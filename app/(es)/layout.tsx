import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wilmar Florez | Full-Stack & Applied AI Engineer",
  description:
    "Ingeniero de software especializado en productos con IA, Python, FastAPI, TypeScript, React, workflows e integraciones.",
  alternates: { languages: { es: "/", en: "/en" } },
  openGraph: {
    title: "Wilmar Florez | Full-Stack & Applied AI Engineer",
    description: "Ingeniero de software especializado en productos con IA, Python, FastAPI, TypeScript, React, workflows e integraciones.",
    type: "website",
    locale: "es_CO",
  },
};

export default function SpanishLayout({ children }: LayoutProps<"/">) {
  return <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}><body className="min-h-full flex flex-col">{children}</body></html>;
}
