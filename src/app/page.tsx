"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  Shield,
  Users,
  Hammer,
  Clock,
  Eye,
  ArrowRight,
  Phone,
  ChevronDown,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard } from "@/components/AnimatedCard";
import { useIsMobile } from "@/hooks/useDevice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const heroImages = [
  "https://images.unsplash.com/photo-1541888082420-ef30af19060d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=1200&auto=format&fit=crop",
];

/* ────────────── Counter Animation ────────────── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-brand-gold">
      {count}
      {suffix}
    </span>
  );
}

/* ────────────── Feature Data ────────────── */
const features = [
  {
    icon: Shield,
    title: "Quality Materials",
    desc: "We use only the finest materials to ensure durability that lasts generations.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Skilled professionals with decades of combined construction experience.",
  },
  {
    icon: Hammer,
    title: "Strong & Durable",
    desc: "Every structure we build is engineered for strength and longevity.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We respect your time with reliable project timelines and milestones.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    desc: "Full visibility into every stage of your construction project.",
  },
];

const stats = [
  { label: "Projects Completed", value: 250, suffix: "+" },
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Happy Clients", value: 200, suffix: "+" },
  { label: "Expert Workers", value: 50, suffix: "+" },
];

/* ────────────── Page Component ────────────── */
export default function HomePage() {
  const isMobile = useIsMobile();

  return (
    <>
      {/* ═══════ HERO SECTION ═══════ */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-brand-black">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            allowTouchMove={false}
            className="w-full h-full"
          >
            {heroImages.map((src, i) => (
              <SwiperSlide key={i}>
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url("${src}")` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40 z-10 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-gold/10 backdrop-blur-md border border-brand-gold/30 rounded-full text-brand-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 sm:mb-8 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <Hammer className="w-4 h-4" />
              Trusted Construction Partner
            </div>

            <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] text-white leading-[1.1] tracking-tight">
              Real Site.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-gold-dark to-brand-gold">
                Real Progress.
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed border-l-4 border-brand-gold pl-4 sm:pl-6">
              We don&apos;t just build structures — we build your dreams. From foundation to
              finishing, we deliver unparalleled excellence, transparent pricing, and robust engineering in every brick.
            </p>

            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
              <Link
                href="/contact"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-gold text-brand-black font-semibold rounded-lg hover:bg-brand-gold-dark transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 text-base sm:text-lg"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+918319213539"
                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-brand-gold" />
                +91 8319213539
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile for cleaner look */}
        {!isMobile && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
            <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Scroll Down</span>
            <div className="p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-bounce">
              <ChevronDown className="w-5 h-5 text-brand-gold" />
            </div>
          </div>
        )}
      </section>

      {/* ═══════ FEATURES SECTION ═══════ */}
      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Us"
            subtitle="We bring expertise, quality, and commitment to every project we undertake."
          />

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {features.map((feat) => (
              <AnimatedCard key={feat.title} className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <feat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-gold" />
                </div>
                <h3 className="font-poppins font-semibold text-sm sm:text-base text-brand-black mb-1 sm:mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-gray/70 leading-relaxed">
                  {feat.desc}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ STATS SECTION ═══════ */}
      <section className="py-12 sm:py-16 md:py-20 bg-brand-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-white/50 text-xs sm:text-sm mt-1 sm:mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA SECTION ═══════ */}
      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-brand-black mb-4">
            Ready to Build Your Dream?
          </h2>
          <p className="text-brand-gray/70 text-base sm:text-lg mb-8">
            Get in touch with us today for a free consultation and let&apos;s
            bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-lg hover:bg-brand-gold-dark transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/918319213539?text=Hello%20Maa%20Bhawani%20Construction!%20I%20am%20interested%20in%20starting%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-brand-gold text-brand-gold font-semibold rounded-lg hover:bg-brand-gold hover:text-brand-black transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
