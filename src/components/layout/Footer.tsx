import Image from "next/image";
import Link from "next/link";
import { homeData } from "@/data/homeData";
import { Globe, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background pt-16 pb-8">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/logo.png"
                alt="Vision - Realtà Virtuale. Emozioni Reali."
                width={86}
                height={48}
                className="object-contain"
              />
            </Link>
            <p className="text-white/60 max-w-sm font-light leading-relaxed">
              L'Intrattenimento del Futuro. Trasformiamo gli spazi in portali verso nuove dimensioni digitali.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-start">
            <div className="flex flex-col gap-4">
              {homeData.footerLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-sm font-medium text-white/50 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40">
          <p>© {new Date().getFullYear()} VISION AR ENTERTAINMENT. THE IMMERSIVE PORTAL.</p>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </div>
            <div className="flex items-center gap-4 border-l border-white/10 pl-6">
              <button className="text-white/40 hover:text-[#13d6ec] transition-colors"><Globe className="w-4 h-4" /></button>
              <button className="text-white/40 hover:text-[#13d6ec] transition-colors"><Share2 className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
