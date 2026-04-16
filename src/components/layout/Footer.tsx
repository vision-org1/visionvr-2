import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-background">
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="w-full px-6 md:px-12 lg:px-24 py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6 md:mb-8">
          <Link
            href="/"
            className="inline-block transition-opacity hover:opacity-80"
            aria-label="Vision - Home"
          >
            <Image
              src="/logo.png"
              alt="Vision"
              width={180}
              height={96}
              className="object-contain h-auto w-[110px] md:w-[140px]"
            />
          </Link>
          <nav
            aria-label="Navigazione principale"
            className="flex flex-wrap items-center gap-x-7 gap-y-2 text-sm text-white/70"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">Chi Siamo</Link>
            <Link href="/solutions" className="hover:text-white transition-colors">Esperienze</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contattaci</Link>
          </nav>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/40">
          <p>© {year} Vision. Tutti i diritti riservati.</p>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
