"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Zap, Users, Award, BookOpen, Building2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Electrical Engineering Programs",
    description: "Pre-diploma and Diploma programs in Electrical Engineering affiliated with CTEVT.",
  },
  {
    icon: GraduationCap,
    title: "Complete Education (Grade 1-12)",
    description: "Full secondary education including Early Childhood Development and 10+2 in Education & Management.",
  },
  {
    icon: Users,
    title: "Dedicated Faculty",
    description: "Experienced teachers committed to academic excellence and vocational training.",
  },
  {
    icon: Award,
    title: "Scholarships Available",
    description: "Financial support for deserving, hardworking, and underprivileged students.",
  },
  {
    icon: BookOpen,
    title: "Modern Learning Resources",
    description: "Library, science labs, multimedia classrooms, and educational tour programs.",
  },
  {
    icon: Building2,
    title: "Quality Facilities",
    description: "Sports facilities, conference hall, counseling services, and modern amenities.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-apex-midnight mb-3 sm:mb-4 px-2">
            Why Choose Ranabir Janahit?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Building competent workforce and preparing skilled manpower to meet community needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-apex-gold/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-apex-gold/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-apex-gold/20 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-apex-gold" />
                </div>
                
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-apex-midnight mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
