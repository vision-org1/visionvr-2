import ContactSection from "@/components/sections/ContactSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Contattaci | Vision AR",
  description: "Entra nel Portale. Scrivici per un preventivo o una consulenza gratuita.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="flex-1">
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
