"use client";

import { useRef, useEffect, useState } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-50px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`mb-12 ${centered ? "text-center" : ""}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <h2
        className={`font-poppins font-bold text-3xl md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-brand-black"
        }`}
      >
        {title}
      </h2>
      <div className={`w-16 h-1 bg-brand-gold rounded-full mt-4 mb-4 ${centered ? "mx-auto" : ""}`} />
      {subtitle && (
        <p
          className={`max-w-2xl text-base md:text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-brand-gray/70"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
