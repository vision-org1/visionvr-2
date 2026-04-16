import { HomeData } from "@/types/home";

export const homeData: HomeData = {
  navLinks: [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "Chi Siamo", href: "/about" },
    { id: "contact", label: "Contattaci", href: "/contact" },
    { id: "experiences", label: "ESPERIENZE", href: "/solutions" },
  ],
  hero: {
    title: "Vision: L'Intrattenimento del Futuro",
    subtitle:
      "Esplora realtà aumentate per eventi indimenticabili. Trasforma ogni spazio in un portale verso nuove dimensioni digitali.",
  },
  solutions: {
    title: "Soluzioni su Misura",
    items: [
      {
        id: "corporate",
        title: "Eventi Aziendali",
        description:
          "Soluzioni innovative per il tuo business. Team building immersivi, lanci di prodotto futuristici e presentazioni che lasciano il segno.",
        linkText: "",
        href: "/contact",
      },
      {
        id: "private",
        title: "Feste Private",
        description:
          "Divertimento unico per ogni occasione. Matrimoni, compleanni ed eventi privati trasformati in esperienze multisensoriali senza precedenti.",
        linkText: "",
        href: "/contact",
      },
    ],
  },
  pillars: {
    title: "Perché scegliere Vision?",
    subtitle:
      "Definiamo nuovi standard nell'intrattenimento interattivo attraverso tre pilastri fondamentali.",
    items: [
      {
        id: "tech",
        title: "Tecnologia",
        description:
          "Hardware di ultima generazione e software proprietario per una fluidità mai vista.",
      },
      {
        id: "immersion",
        title: "Immersione",
        description:
          "Ambienti AR che fondono il reale col virtuale in modo indistinguibile.",
      },
      {
        id: "customization",
        title: "Customizzazione",
        description:
          "Contenuti su misura creati specificamente per il tema del tuo evento.",
      },
    ],
  },
  cta: {
    title: "Pronto a trasformare il tuo prossimo evento?",
    subtitle:
      "Contattaci oggi stesso per un preventivo personalizzato e una consulenza gratuita sulle nostre esperienze AR.",
    buttonText: "Contattaci",
  },
};
