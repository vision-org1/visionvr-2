"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Chiudi il menu quando si cambia pagina
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // ESC per chiudere + body scroll lock quando il menu è aperto
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        // Disattiviamo i pointer-events sull'header full-width per permettere il clic sottostante ai lati del "Notch"
        className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
        style={{ transform: "translateZ(0)", willChange: "transform, padding" }}
      >
        <div
          // Riattiviamo i pointer events SOLO per il container interno Nav
          className={`pointer-events-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled
              ? "w-[95%] lg:w-full max-w-[600px] px-6 py-2 mt-4 bg-[#050505]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 rounded-[50px]"
              : "w-full max-w-[1400px] px-8 md:px-16 py-2 lg:py-2 bg-transparent border border-transparent rounded-[0px]"
            }`}
        >
          {/*
             Logo Integrato
             Soluzione sovrapposizione: Usiamo `fill` e animiamo larghezza/altezza vere del contenitore,
             così la Nav ristretta non occupa uno spazio invisibile troppo alto.
          */}
          <Link
            href="/"
            className={`relative flex-none flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isScrolled ? "w-[50px] h-[50px]" : "w-[90px] h-[90px] md:w-[100px] md:h-[100px]"
            }`}
          >
            <Image
              src="/logocerchio-Photoroom.png"
              alt="Vision"
              fill
              sizes="(max-width: 768px) 150px, 200px"
              priority
              className={`object-contain drop-shadow-md transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isScrolled ? "scale-[1.8]" : "scale-[1.5] md:scale-[2]"
              }`}
            />
          </Link>

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

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden ml-auto flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10"
          >
            <span className="relative block w-5 h-5" aria-hidden="true">
              <span
                className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-white transition-opacity duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-full h-[2px] bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-1"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile overlay panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
        className={`lg:hidden fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-10 px-6">
          <Link
            href="/about"
            className={`text-2xl tracking-[0.15em] transition-colors duration-300 ${
              isActive("/about") ? "text-primary font-semibold" : "text-white/90 font-medium hover:text-white"
            }`}
          >
            CHI SIAMO
          </Link>
          <Link
            href="/contact"
            className={`text-2xl tracking-[0.15em] transition-colors duration-300 ${
              isActive("/contact") ? "text-primary font-semibold" : "text-white/90 font-medium hover:text-white"
            }`}
          >
            CONTATTACI
          </Link>
          <Link
            href="/solutions"
            className={`mt-4 text-base font-semibold tracking-[0.15em] rounded-full px-8 py-3 border transition-all duration-400 ease-out ${
              isActive("/solutions")
                ? "text-white bg-primary/20 border-primary/50 shadow-[0_0_20px_rgba(13,89,242,0.4)]"
                : "text-white bg-white/5 border-white/15 backdrop-blur-sm hover:bg-white/15 hover:border-white/30"
            }`}
          >
            ESPERIENZE
          </Link>
        </nav>
      </div>
    </>
  );
}
