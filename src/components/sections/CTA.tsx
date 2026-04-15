"use client";

import { motion } from "framer-motion";
import { homeData } from "@/data/homeData";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 relative p-6">
      <div className="w-full px-6 md:px-12 lg:px-24 py-20 rounded-3xl text-center relative z-10 overflow-hidden">
        {/* Deep gradient background specific to CTA matching Stitch design */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d59f2]/80 via-[#3a0d8a]/80 to-[#050505] z-0" />
        
        <div className="relative z-10">
          <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 max-w-3xl mx-auto"
        >
          {homeData.cta.title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/60 font-light text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          {homeData.cta.subtitle}
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="bg-white text-black hover:bg-white/90 font-bold px-10 h-16 rounded-lg text-lg shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-transform hover:scale-105 inline-flex items-center justify-center"
          >
            PARLA CON NOI
          </Link>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
