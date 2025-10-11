"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-apex-midnight pt-20">
      {/* Background Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-apex-midnight via-apex-royal-blue/50 to-apex-midnight opacity-90 z-10" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A0E27_1px,transparent_1px),linear-gradient(to_bottom,#0A0E27_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-apex-gold/10 border border-apex-gold/30 rounded-full text-apex-gold text-xs sm:text-sm font-medium tracking-wider inline-block">
              <span className="hidden sm:inline">ESTABLISHED 2019 B.S. • MODEL SCHOOL OF WALING MUNICIPALITY</span>
              <span className="sm:hidden">EST. 2019 B.S. • MODEL SCHOOL</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-apex-platinum mb-4 sm:mb-6 leading-tight px-2"
          >
            Ranabir Janahit
            <br />
            <span className="text-white">
              Secondary School
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-apex-platinum/80 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          >
            Empowering local communities through quality education and technical training.
            No student should be unemployed due to lack of access to Technical Education and Vocational Training.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
          >
            <Button variant="premium" size="xl" className="group w-full sm:w-auto text-sm sm:text-base">
              Apply Now
              <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-apex-platinum/30 text-apex-midnight bg-apex-platinum hover:bg-apex-midnight hover:text-apex-platinum group w-full sm:w-auto text-sm sm:text-base transition-colors"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
              Explore Our Campus
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4"
          >
            {[
              { value: "265+", label: "Total Students" },
              { value: "61+", label: "Years of Excellence" },
              { value: "Grade 1-12", label: "Education Levels" },
              { value: "CTEVT", label: "Affiliated Programs" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-apex-gold mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-apex-platinum/70 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-apex-gold/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-apex-gold rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
