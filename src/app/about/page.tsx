"use client";

import { useRef, useEffect, useState } from "react";
import {
  Target,
  Eye,
  Award,
  Users,
  CheckCircle,
  Building2,
  Hammer,
  Calendar,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard } from "@/components/AnimatedCard";

const milestones = [
  { year: "2009", text: "Founded by Chainsingh Surawat" },
  { year: "2013", text: "Expanded to commercial construction" },
  { year: "2017", text: "100+ projects completed milestone" },
  { year: "2020", text: "Kuldeep Singh joined as Co-Owner" },
  { year: "2024", text: "250+ completed projects across MP & Rajasthan" },
];

const values = [
  {
    icon: CheckCircle,
    title: "Integrity",
    desc: "Honest pricing, transparent work, and no hidden charges.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Premium quality materials and expert craftsmanship in every project.",
  },
  {
    icon: Users,
    title: "Client First",
    desc: "Your satisfaction drives every decision we make on-site.",
  },
  {
    icon: Calendar,
    title: "Reliability",
    desc: "On-time delivery and consistent communication throughout.",
  },
];

function FadeIn({ children, className = "", direction = "up" }: { children: React.ReactNode; className?: string; direction?: "up" | "left" | "right" }) {
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

  const initialTransform = direction === "left" ? "translateX(-30px)" : direction === "right" ? "translateX(30px)" : "translateY(20px)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0)" : initialTransform,
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ═══════ HERO BANNER ═══════ */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black to-brand-gold/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="text-brand-gold text-sm font-medium tracking-wider uppercase">
              About Us
            </span>
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-3">
              Building Trust,{" "}
              <span className="text-brand-gold">Brick by Brick</span>
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-2xl">
              Learn about our journey, our values, and the team behind Maa
              Bhawani Construction & Contractor.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════ COMPANY INTRO ═══════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <FadeIn direction="left">
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-brand-black mb-4 sm:mb-6">
                Your Trusted Construction Partner Since 2009
              </h2>
              <div className="space-y-4 text-brand-gray/80 leading-relaxed">
                <p>
                  <strong className="text-brand-black">
                    Maa Bhawani Construction & Contractor
                  </strong>{" "}
                  is a leading construction company based in Madhya Pradesh,
                  dedicated to delivering exceptional residential, commercial,
                  and renovation projects.
                </p>
                <p>
                  With over 15 years of experience and 250+ completed projects,
                  we have earned the trust of hundreds of clients through our
                  commitment to quality materials, expert craftsmanship, and
                  transparent work processes.
                </p>
                <p>
                  From foundation to finishing, our team handles every aspect of
                  construction with precision and care — ensuring your project is
                  completed on time and within budget.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-brand-light rounded-lg">
                  <Building2 className="w-5 h-5 text-brand-gold shrink-0" />
                  <span className="text-sm font-medium text-brand-black">
                    250+ Projects
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-brand-light rounded-lg">
                  <Hammer className="w-5 h-5 text-brand-gold shrink-0" />
                  <span className="text-sm font-medium text-brand-black">
                    15+ Years Exp.
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Right - Visual */}
            <FadeIn direction="right" className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-brand-light to-gray-100 rounded-2xl overflow-hidden border border-gray-200 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-brand-gold/10" />
                <div className="text-center p-8 relative z-10">
                  <Building2 className="w-20 h-20 text-brand-gold/40 mx-auto mb-4" />
                  <p className="text-brand-gray/50 font-poppins font-semibold text-xl">
                    15+ Years of Excellence
                  </p>
                  <p className="text-brand-gray/30 text-sm mt-2">
                    Building Dreams Since 2009
                  </p>
                </div>
              </div>
              {/* Accent element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-gold/20 rounded-xl -z-10" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════ MISSION & VISION ═══════ */}
      <section className="py-16 sm:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Mission & Vision" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedCard className="p-8" delay={0}>
              <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-brand-black mb-3">
                Our Mission
              </h3>
              <p className="text-brand-gray/70 leading-relaxed">
                To deliver exceptional construction services with uncompromising
                quality, transparency, and dedication. We aim to be the most
                trusted name in construction across Madhya Pradesh and Rajasthan.
              </p>
            </AnimatedCard>

            <AnimatedCard className="p-8" delay={0.15}>
              <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-brand-black mb-3">
                Our Vision
              </h3>
              <p className="text-brand-gray/70 leading-relaxed">
                To transform the construction landscape by setting new
                benchmarks for quality and reliability, making dream homes and
                commercial spaces accessible and achievable for all.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* ═══════ OWNERS ═══════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Meet Our Leadership"
            subtitle="The people behind every successful project"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Owner 1 */}
            <AnimatedCard className="p-8 text-center" delay={0}>
              <div className="w-24 h-24 bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-brand-gold/30">
                <span className="font-poppins font-bold text-3xl text-brand-gold">
                  CS
                </span>
              </div>
              <h3 className="font-poppins font-bold text-xl text-brand-black">
                Chainsingh Surawat
              </h3>
              <span className="inline-block mt-1 px-3 py-1 bg-brand-gold/10 text-brand-gold-dark text-xs font-semibold rounded-full tracking-wider uppercase">
                Proprietor
              </span>
              <p className="mt-4 text-brand-gray/70 text-sm leading-relaxed">
                With over 15 years of experience in the construction industry,
                Chainsingh Surawat founded Maa Bhawani Construction with a
                vision to deliver quality construction services with integrity
                and dedication.
              </p>
            </AnimatedCard>

            {/* Owner 2 */}
            <AnimatedCard className="p-8 text-center" delay={0.15}>
              <div className="w-24 h-24 bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-brand-gold/30">
                <span className="font-poppins font-bold text-3xl text-brand-gold">
                  KS
                </span>
              </div>
              <h3 className="font-poppins font-bold text-xl text-brand-black">
                Kuldeep Singh Surawat
              </h3>
              <span className="inline-block mt-1 px-3 py-1 bg-brand-gold/10 text-brand-gold-dark text-xs font-semibold rounded-full tracking-wider uppercase">
                Co-Owner
              </span>
              <p className="mt-4 text-brand-gray/70 text-sm leading-relaxed">
                Kuldeep Singh brings modern construction techniques and project
                management expertise. His dedication to client satisfaction and
                innovation drives the company&apos;s growth and excellence.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* ═══════ CORE VALUES ═══════ */}
      <section className="py-16 sm:py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <AnimatedCard key={val.title} delay={i * 0.1} className="p-6 text-center">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <val.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-poppins font-semibold text-brand-black mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-brand-gray/70">{val.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TIMELINE ═══════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones in our growth story"
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-gold/20 -translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <FadeIn
                  key={m.year}
                  direction={i % 2 === 0 ? "left" : "right"}
                  className={`relative flex items-start gap-4 md:gap-0 ${
                    i % 2 === 0
                      ? "md:flex-row md:text-right"
                      : "md:flex-row-reverse md:text-left"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-brand-gold rounded-full -translate-x-1/2 mt-1.5 ring-4 ring-white z-10" />

                  {/* Content */}
                  <div
                    className={`ml-10 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <span className="text-brand-gold font-poppins font-bold text-lg">
                      {m.year}
                    </span>
                    <p className="text-brand-gray/70 text-sm mt-1">{m.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
