import { About } from "@/components/landing/About";
import { Capabilities } from "@/components/landing/Capabilities";
import { ContactSection } from "@/components/landing/ContactSection";
import { Demos } from "@/components/landing/Demos";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { HowIWork } from "@/components/landing/HowIWork";
import { Hero } from "@/components/landing/Hero";
import { Logistics } from "@/components/landing/Logistics";
import { Problems } from "@/components/landing/Problems";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Problems />
        <HowIWork />
        <Logistics />
        <Demos />
        <About />
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
