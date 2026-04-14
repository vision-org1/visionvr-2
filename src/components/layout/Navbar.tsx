"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { homeData } from "@/data/homeData";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path: string) => pathname === path;

  // Gestione dinamica dello scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Controllo iniziale al mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      // Disattiviamo i pointer-events sull'header full-width per permettere il clic sottostante ai lati del "Notch"
      className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
      style={{ transform: "translateZ(0)", willChange: "transform, padding" }}
    >
      <div
        // Riattiviamo i pointer events SOLO per il container interno Nav
        className={`pointer-events-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled
            ? "max-w-fit px-4 md:px-8 py-2 mt-4 bg-[#050505]/75 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 rounded-full"
            : "w-full max-w-[1400px] px-8 md:px-16 py-2 lg:py-2 bg-transparent"
          }`}
      >
        {/*
           Logo Integrato 
           Soluzione sovrapposizione: Usiamo `fill` e animiamo larghezza/altezza vere del contenitore, 
           così la Nav ristretta non occupa uno spazio invisibile troppo alto.
        */}
        <Link
          href="/"
          className={`relative flex-none flex items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isScrolled ? "w-[50px] h-[50px]" : "w-[120px] h-[120px] md:w-[160px] md:h-[160px]"
          }`}
        >
          <Image
            src="/logocerchio-Photoroom.png"
            alt="Vision"
            fill
            sizes="(max-width: 768px) 120px, 150px"
            priority
            className="object-contain drop-shadow-md"
          />
        </Link>
        
        {/* Spaziatore fluido per l'animazione di convergenza al centro */}
        <div className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled ? "w-2 md:w-6 flex-none" : "flex-1"
        }`} />

        {/* Global Navigation - Spazi azzerati durante lo scroll */}
        <nav className={`hidden lg:flex items-center flex-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? 'gap-1' : 'gap-8'}`}>
          <Link
            href="/about"
            className={`text-sm tracking-[0.10em] transition-all duration-300 relative group overflow-hidden py-2 px-3 ${isActive('/about') ? 'text-primary font-semibold' : 'text-white/75 font-medium hover:text-white'
              }`}
          >
            CHI SIAMO
            {/* Animazione hover premium (linea che scorre) */}
            <span className={`absolute bottom-0 left-0 w-full h-[1.5px] transition-transform duration-500 origin-right ${isActive('/about') ? 'bg-primary scale-x-100 origin-left' : 'bg-white scale-x-0 group-hover:scale-x-100 group-hover:origin-left'
              }`} />
          </Link>

          <Link
            href="/contact"
            className={`text-sm tracking-[0.10em] transition-all duration-300 relative group overflow-hidden py-2 px-3 ${isActive('/contact') ? 'text-primary font-semibold' : 'text-white/75 font-medium hover:text-white'
              }`}
          >
            CONTATTACI
            <span className={`absolute bottom-0 left-0 w-full h-[1.5px] transition-transform duration-500 origin-right ${isActive('/contact') ? 'bg-primary scale-x-100 origin-left' : 'bg-white scale-x-0 group-hover:scale-x-100 group-hover:origin-left'
              }`} />
          </Link>

          {/* Button Esperienze - Premium "Glass" Feel */}
          <Link
            href="/solutions"
            className={`text-sm font-semibold tracking-[0.10em] rounded-full px-6 py-2.5 min-h-[40px] flex items-center transition-all duration-400 ease-out border shadow-sm ml-2 ${isActive('/solutions')
                ? 'text-white bg-primary/20 border-primary/50 shadow-[0_0_20px_rgba(13,89,242,0.4)]'
                : 'text-white bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/15 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:-translate-y-0.5'
              }`}
          >
            ESPERIENZE
          </Link>
        </nav>

        {/* Mobile Nav Button (CTA only) */}
        <div className="lg:hidden flex items-center ml-auto pointer-events-auto">
          <Link
            href="/solutions"
            className={`text-xs font-semibold tracking-widest border rounded-full px-5 py-2.5 flex items-center transition-all ${isActive('/solutions')
                ? 'text-white bg-primary/20 border-primary shadow-[0_0_15px_rgba(13,89,242,0.3)]'
                : 'text-white bg-white/5 border-white/10 backdrop-blur-sm'
              }`}
          >
            ESPERIENZE
          </Link>
        </div>
      </div>
    </header>
  );
}
