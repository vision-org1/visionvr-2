"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { homeData } from "@/data/homeData";
import { ArrowRight, Briefcase, PartyPopper } from "lucide-react";

export function Solutions() {
  return (
    <section className="py-24 relative z-10 bg-[#050505]">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-white text-left inline-block relative"
          >
            {homeData.solutions.title}
            <div className="absolute -bottom-4 left-0 w-1/3 h-1 bg-gradient-to-r from-[#13d6ec] to-transparent rounded-full" />
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {homeData.solutions.items.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500"
            >
              <Link href={solution.href} className="block p-10 h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#13d6ec]/10 flex items-center justify-center text-[#13d6ec]">
                    {solution.id === 'corporate' ? <Briefcase className="w-6 h-6" /> : <PartyPopper className="w-6 h-6" />}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-white/60 mb-8 font-light leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="flex items-center text-[#13d6ec] font-bold group-hover:text-white transition-colors">
                  {solution.linkText.replace(" trending_flat", "")}
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
