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
  title: "Wilmar Florez Samudio | Product Architect & Builder",
  description:
    "Product Architect & Builder disponible para colaborar en proyectos freelance y equipos de producto y tecnología. Diseña y construye productos, automatizaciones y sistemas con IA.",
  openGraph: {
    title: "Wilmar Florez Samudio | Product Architect & Builder",
    description:
      "Productos, automatizaciones y sistemas con IA para problemas operativos y de información.",
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
