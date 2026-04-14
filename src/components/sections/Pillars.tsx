"use client";

import { motion } from "framer-motion";
import { homeData } from "@/data/homeData";
import { Cpu, Target, Settings } from "lucide-react";

const icons = {
  tech: <Cpu className="w-8 h-8 text-primary" />,
  immersion: <Target className="w-8 h-8 text-primary" />,
  customization: <Settings className="w-8 h-8 text-primary" />,
};

export function Pillars() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative border-y border-white/5">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mb-20 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6"
          >
            {homeData.pillars.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/60 font-light text-xl leading-relaxed"
          >
            {homeData.pillars.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {homeData.pillars.items.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-start text-left group"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#13d6ec]/20 to-primary/20 border border-[#13d6ec]/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(19,214,236,0.1)]">
                {icons[pillar.id as keyof typeof icons]}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">
                {pillar.title}
              </h4>
              <p className="text-white/50 font-light leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
