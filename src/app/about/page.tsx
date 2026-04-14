import AboutSection from "@/components/sections/AboutSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Chi Siamo | Vision AR",
  description: "La nostra missione è progettare esperienze AR immersive.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="flex-1">
        <AboutSection />
      </div>
      <Footer />
    </>
  );
}
