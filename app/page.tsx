import { ContactSection } from "@/components/landing/ContactSection";
import { Demos } from "@/components/landing/Demos";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Logistics } from "@/components/landing/Logistics";
import { Problems } from "@/components/landing/Problems";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Logistics />
        <Demos />
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
