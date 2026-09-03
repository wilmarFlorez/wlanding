import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wilmar Florez | Full-Stack & Applied AI Engineer",
  description:
    "Software engineer specializing in AI products, Python, FastAPI, TypeScript, React, workflows, and integrations.",
  alternates: { languages: { es: "/", en: "/en" } },
  openGraph: {
    title: "Wilmar Florez | Full-Stack & Applied AI Engineer",
    description: "Software engineer specializing in AI products, Python, FastAPI, TypeScript, React, workflows, and integrations.",
    type: "website",
    locale: "en_US",
  },
};

export default function EnglishLayout({ children }: LayoutProps<"/en">) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}><body className="min-h-full flex flex-col">{children}</body></html>;
}
