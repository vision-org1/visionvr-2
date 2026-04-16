import React from "react";

export default function AboutSection() {
  return (
    <section className="pt-32 pb-24 overflow-x-hidden">
      {/* Hero Mission Section */}
      <div className="w-full px-8 md:px-12 lg:px-24 mb-20 relative">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-20 -right-20 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-label text-secondary uppercase tracking-[0.3em] text-sm mb-4 block">IL NOSTRO DNA</span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
              RIDEFINIAMO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">LA REALTÀ</span>
            </h1>
          </div>
          <div className="border-l border-outline-variant/30 pl-8">
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-light">
              In VISION, crediamo che il confine tra il mondo fisico e quello digitale debba essere invisibile. La nostra missione è progettare esperienze AR immersive che non si limitino a intrattenere, ma trasformino il modo in cui percepiamo la connessione umana e l'intrattenimento digitale.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <span className="font-label text-xs uppercase tracking-widest">PRECISIONE MILLIMETRICA</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Team Grid */}
      <div className="w-full px-8 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="font-headline text-4xl font-bold tracking-tight">GLI ARCHITETTI</h2>
            <p className="text-on-surface-variant mt-2 font-light">Le menti dietro l'intrattenimento del futuro.</p>
          </div>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent mx-8 mb-4 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-5">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="group relative transition-transform duration-300 hover:-translate-y-1">
              <div className="bg-[#24252d]/40 backdrop-blur-[20px] border-t border-l border-[#f7f5fd]/10 shadow-[0_0_20px_rgba(129,236,255,0.15)] rounded-xl p-2.5 overflow-hidden">
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-3 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" src={member.img} alt={member.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="px-1 pb-1">
                  <h3 className="font-headline text-sm md:text-base font-bold tracking-tight mb-0.5 leading-tight">{member.name}</h3>
                  <p className={`font-label ${member.roleColor} text-[10px] uppercase tracking-widest leading-snug`}>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TEAM_MEMBERS = [
  { name: 'Domenico Formisano', role: 'DIRETTORE VISIONARIO', roleColor: 'text-primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf0NmNp9ZpZgaMmVZMKIrAbzOGPOSTEOuK3dbirJDvV1JIKwffnH9vPrpiR82KW73M9NCBUUSueHamFovLv6IS3csNm-_JAQYj11ahpExnGor8y_4FA-0J7SiXs0v04JSzDr8XQ9ObVp_Pmq46qu2fCNJOwnIN9nhSmkPTTazjjcc9ZNtJSI0IxTA7T18iKJQ-fevOnhvF3ZrcJy7BzO7EAP90FVbVA6iyeB2AvFH9RGaQCrJW7XuTXuR8qTNyqw9LRE0ipz7yQK0' },
  { name: 'Fabrizio Palumbo', role: 'CAPO DEL DESIGN IMMERSIVO', roleColor: 'text-primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0sdz2WketkgHETukzAcrJ_7rt-ahBdjuOYM5TiAED62iG-28pJrQ0qgaMfz5SPKqfiUkncVq5MG3UwiST2uYKxbCjnvB_VkljZEnnHKji05nzGH_PkV5-U7609uo0SD6nR5ECumxB1VGz5fJQ6FqMpGvqo3T7SSCTe6GkCFYRKLNwD3TN3eHdsewV-8gi1mnuZgT2SDEWjxdLJ3yx7ThRJ5tAi5XjZlWkvlQL5aUTXtRSanV69JcsyyT8VspIywQqJOgnvjxCZrc' },
  { name: 'Salvatore Minervino', role: 'INGEGNERE AR CAPO', roleColor: 'text-primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4ZcqmklX3ZBrB2Yt6VOiectKuvLGtadrCu_d_u0e0wfMR3HEEQ7spVsgi_bN_VXdshNZmci2WCA08m7QWvIQfkPuNhhxZmzYqilJUwnG-1DegtJHmntIAVX6GmQwOOMYQuCHMvzCopNZyaw8fIeDvSB96AAJUfPd0k8ptFiYY6BzF4sE-nGuOvuyTPip4YvYisaFC35Z3yHjsUrghi6nfg3Rui5825VLLRZgUl45u17Hnys37iug-owaTrEYpFZJ62M9DGplamc8' },
  { name: 'Francesco Aiello', role: 'TECNOLOGO CREATIVO', roleColor: 'text-primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCa8RGAq5c-O2H4BUcB6lY0HBAwjvdRAIsuH1m74wShxUg4_ZgjevHYayp-zKlDP8Jo9bqs5duPm-GNcZ2I2Uhbiy1iKIsUe2m0ofrIpQhKK8Qstx7ajyR2ELiQ_QSzKVnU-J108v8C2HllDO8Us8Jctj0MKoMipzVAJDWBypiM7OgqIp1mqyOruopGs7RHtOt_aM77E6M66sL8HhbFT3gdGGAt4oeWoEguJ7-YbN164weINPxpfMFxhHB0fongn0lqTC0B4cmH9RE' },
  { name: 'Giuseppe Ottaiano', role: 'DIRETTORE OPERATIVO', roleColor: 'text-primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWSZJkLZ4E3-NbZh_clUvGzJn-hOwBtjBV0chRbH_OIJ6X4gYOFRndnUuFszfLoB--1dfpQ9MpHvHhoMPLDRn4KiPGPNBpZeoeGakhOfLbT0RclzAwYhcg60FQc8ZIPar2AEyQ3TWJSNwHhOoSZD_rd4Ey8OmnZ293aJoKtqgIVSvfkyccyZACSN52CL-_12cLtbrLMLQdNa2DcfZuE23haJN5TxAfzr9Ukier27yyiWR2LsVbrtVP-E1pssp5E2fJN-jqHFcezHE' },
  { name: 'Simone Accadia', role: 'RESPONSABILE GRAFICA NEURALE', roleColor: 'text-primary', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoOlGhHIiQRNYSTV6t7aijI6h7KoruWndLuVZiBiSfqMY0fP5iHfuA8QQ9girygxBfgPFUxeQj37w7qCDg74NqdPUwg66w4sMXxO-0nIt9l0xxG5zG7RR_IFZCtQIy0pjjbdJCZ-xEKFp7dkr2WW3KVNyjDB3S4qHMS0oh8BpZvWvgvYo3wPGLaeQwhXWHXD7bZ1NiSsz69PSRL5lRHehVvXmwUYZI80DB-DwpIPTVB1wp_mzTe7wu16Yi95A-XGVIOhWZBQ5Zs4U' }
];
