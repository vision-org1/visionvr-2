import Image from "next/image";

export default function ExperiencesSection() {
  return (
    <section className="pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative px-6 md:px-12 lg:px-24 py-12 w-full overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]"></div>
        
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 rounded-full font-label">
            Live AR Status: Attivo
          </span>
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
    title: 'Cyber Assault',
    description: 'Trasforma il mondo in un campo di battaglia futuristico. Colpisci i nemici virtuali mentre navighi ostacoli fisici reali.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-m-13Nl-eSn9MaJbopYEo38kmn-yVhAMe7VayxmvltrWkD0bS1F8lS2OejEqtnKzq-BihzZu_hYSxUqacM79fCvt3k0eN8574iIVx9xKKBc__sPZw69082IDjUNjE7I_JFFf0cjiPNHThRtubkYJxYcQLApIx3c1Eju5REvkELzT0fwQaVN06mXRVFWVa-aW8UW435oZHgt0v4NGnpL0wzZh9Ls9MicwyQix8Ad0IWZxvBYXE5MMxy-jqJ7yBGuy2NUm8ANqDH-s'
  },
  {
    title: 'Protocollo Zero',
    description: 'Risolvi enigmi complessi che appaiono sulle pareti della stanza. Decifra codici olografici prima che scada il tempo.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtO6uINH6TjuVn_GOz2roWBVRHDmjsZulVO2v8qrvboPQV0x8kGGqnz3tHwhxrCHBD4U5ht25xrMcSwEhX53BmkyF3iqe1oyHKqRbslLLHw9f1L-UVbbrM-TMn9WEXEwvvBDoKW6p7GWPxM-ijtp9Ajn_N-DsvagehJ4Mg9h9Gt-lc_VM025qmGPgyvTwuoO9ON5V0pMpGhQiNXaCxt4tnvJk-A1ZOV6IUPXUX2hjUSq3NeH5XrRj5UghMFdCBrhkp35Gpyykb3Is'
  },
  {
    title: 'Regno di Etheria',
    description: "Incontra creature mitologiche nel tuo giardino. Un'avventura fantasy immersiva per tutta la famiglia.",
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiQfORORhO2TOOPpSmkmJH-wLW4TERvBIMtGjwbRyWcN-yHLjBbgIxDCzkNzXOcQp7vLkcpEB-6mp9c0oB6uyeFl4dU_2EOI6jLfYj1m6n7jsCiNYwqB2uSRKyCnXRMRlJDB45ozKjRZvfysGKbm2TN0yHFVwPWlIUvadW-OuKLURCsaBtz6_sMs00CpQED7Y86cRNYQ62s9EBESvomHrYWtSPneanGO7L18Dx-XIqzuLeZ982i5sPzCmFFNizhp8ePg3HipLInGM'
  }
];
