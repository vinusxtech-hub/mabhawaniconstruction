"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  light = false,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2
        className={`font-poppins font-bold text-3xl md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-brand-black"
        }`}
      >
        {title}
      </h2>
      <div className="w-16 h-1 bg-brand-gold rounded-full mt-4 mb-4 mx-auto" />
      {subtitle && (
        <p
          className={`max-w-2xl text-base md:text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-brand-gray/70"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
