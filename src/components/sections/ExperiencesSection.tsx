import Image from "next/image";

export default function ExperiencesSection() {
  return (
    <section className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative px-6 md:px-12 lg:px-24 py-12 w-full overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]"></div>
        
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight mb-6 tracking-tight">
            Oltre la <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#81ecff] to-[#00e3fd]">Realtà</span>.
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed font-body">
            Esplora mondi digitali sovrapposti al mondo fisico. Dalle battaglie laser futuristiche ai misteri delle escape room, la visione non è mai stata così reale.
          </p>
        </div>
      </div>

      {/* Featured Experiences: Horizontal Scroll */}
      <div className="py-12">
        <div className="px-6 md:px-12 lg:px-24 w-full flex justify-between items-end mb-8">
          <h2 className="text-3xl font-headline font-bold">In Primo Piano</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border border-outline-variant hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined select-none" style={{ fontVariationSettings: "'FILL' 1" }}>chevron_left</span>
            </button>
            <button className="p-2 rounded-full border border-outline-variant hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined select-none" style={{ fontVariationSettings: "'FILL' 1" }}>chevron_right</span>
            </button>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto px-6 pb-8 scrollbar-hide scroll-smooth">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="min-w-[320px] md:min-w-[450px] group relative overflow-hidden rounded-xl bg-[#24252d]/40 backdrop-blur-[20px] border border-white/5 transition-all duration-500 hover:-translate-y-2">
              <div className="h-64 md:h-80 relative overflow-hidden">
                <img 
                  src={exp.img} 
                  alt={exp.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-headline font-bold mb-3">{exp.title}</h3>
                <p className="text-on-surface-variant mb-6 font-body leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const EXPERIENCES = [
  {
    title: 'Azione e Combattimento',
    description: 'Trasforma il mondo in un campo di battaglia futuristico. Colpisci i nemici virtuali mentre navighi ostacoli fisici reali.',
    img: '/lasergame.png'
  },
  {
    title: 'Escape Room',
    description: 'Risolvi enigmi complessi che appaiono sulle pareti della stanza. Decifra codici olografici prima che scada il tempo.',
    img: '/escaperoom.png'
  },
  {
    title: 'Fantasy',
    description: "Incontra creature mitologiche nel tuo giardino. Un'avventura fantasy immersiva per tutta la famiglia.",
    img: '/fantasy.png'
  },
  {
    title: 'Horror',
    description: "Un incubo prende forma nel mondo reale. Muoviti nel buio, evita ciò che ti osserva e sopravvivi a presenze che non dovrebbero esistere.",    
    img: '/horror.png'
  },
  {
    title: 'Sport',
    description: "Velocità, precisione e reattività. Affronta sfide sportive interattive in un ambiente aumentato dove ogni azione fa la differenza.",    
    img: '/sport.png'
  },
  {
    title: 'Roller Coaster',
    description: "Preparati a un'esperienza ad alta velocità tra discese vertiginose e curve estreme. La realtà si trasforma in una montagna russa senza limiti.",
    img: '/rollercoaster.png'
  }

];
