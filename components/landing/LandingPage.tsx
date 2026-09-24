import { Capabilities } from "@/components/landing/Capabilities";
import { ContactSection } from "@/components/landing/ContactSection";
import { Demos } from "@/components/landing/Demos";
import { AutomationExamples } from "@/components/landing/AutomationExamples";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Experience } from "@/components/landing/Experience";
import type { Locale } from "@/components/landing/data";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import { AttributionCapture } from "@/components/landing/AttributionCapture";

export function LandingPage({ locale }: { locale: Locale }) {
  return <>
    <AttributionCapture />
    <Header locale={locale} />
    <main>
      <Hero locale={locale} />
      <AutomationExamples locale={locale} />
      <Experience locale={locale} />
      <Demos locale={locale} />
      <Capabilities locale={locale} />
      <ContactSection locale={locale} />
    </main>
    <Footer />
    <WhatsAppButton locale={locale} />
  </>;
}
