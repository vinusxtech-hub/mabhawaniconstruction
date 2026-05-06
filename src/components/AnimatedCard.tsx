"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedCard({
  children,
  delay = 0,
  className = "",
}: AnimatedCardProps) {
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
      { rootMargin: "-40px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-gold/40 hover:-translate-y-1.5 transition-all duration-300 ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s, box-shadow 0.3s, border-color 0.3s`,
      }}
    >
      {children}
    </div>
  );
}
