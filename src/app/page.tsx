import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { Pillars } from "@/components/sections/Pillars";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col bg-background selection:bg-primary/30">
        <Hero />
        <Solutions />
        <Pillars />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
