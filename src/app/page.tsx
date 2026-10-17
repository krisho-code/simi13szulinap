import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
