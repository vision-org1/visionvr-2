"use client";

import { motion } from "framer-motion";
import { homeData } from "@/data/homeData";
import Image from "next/image";
import Link from "next/link" //import per aggiungere link ai contatti sul pulsante prenota ora

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-start overflow-hidden pt-32 lg:pt-48">
      {/* Background Image & Effects */}
      <div
        className="absolute inset-0 z-0 bg-[#050505] bg-cover bg-right bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/nero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent w-full md:w-2/3" />
        <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <div className="w-full relative z-10 px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-start text-left">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           style={{ willChange: "transform, opacity" }}
           className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8 inline-flex"
        >
          <span className="text-xs font-bold tracking-widest text-[#13d6ec] uppercase">THE FUTURE IS HERE</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white max-w-4xl leading-tight"
        >
          <Image
            src="/logo-wordmark.png"
            alt="Vision"
            width={2000}
            height={1116}
            priority
            className="h-40 md:h-56 lg:h-72 w-auto -mt-8 -mb-12 md:-mt-12 md:-mb-16 lg:-mt-16 lg:-mb-24 -ml-3 animate-logo-pulse"
          />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13d6ec] to-[#0d59f2]">
            {homeData.hero.title.split(": ")[1]}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: "transform, opacity" }}
          className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed"
        >
          {homeData.hero.subtitle}
        </motion.p>

        {/* Dual Actions */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
           style={{ willChange: "transform, opacity" }}
           className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          
            <Link //qui ho tolto il pulsante vecchio e aggiunto il link alla pagina contatti
              href="/contact"
              className="px-8 py-4 rounded-md font-bold text-black bg-gradient-to-r from-[#13d6ec] to-[#0d59f2] shadow-[0_0_20px_rgba(19,214,236,0.3)] hover:shadow-[0_0_30px_rgba(19,214,236,0.5)] transition-all inline-block"
            >
              Prenota Ora
            </Link>
            
        </motion.div>
        
        </div>
      </div>
    </section>
  );
}
