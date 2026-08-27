import { About } from "@/components/landing/About";
import { ContactSection } from "@/components/landing/ContactSection";
import { Demos } from "@/components/landing/Demos";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Logistics } from "@/components/landing/Logistics";
import { Problems } from "@/components/landing/Problems";
import { Process } from "@/components/landing/Process";
import { Solutions } from "@/components/landing/Solutions";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Process />
        <Solutions />
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
