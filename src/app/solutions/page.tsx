import ExperiencesSection from "@/components/sections/ExperiencesSection";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Esperienze | Vision AR",
  description: "Esplora mondi digitali sovrapposti al mondo fisico.",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <div className="flex-1">
        <ExperiencesSection />
      </div>
      <Footer />
    </>
  );
}
