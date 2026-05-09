"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Building,
  Briefcase,
  Users,
  HeartHandshake,
  Shield,
  Clock,
  Eye,
  Hammer,
  Paintbrush,
  Gem,
  LayoutGrid,
} from "lucide-react";
import { useIsMobile } from "@/hooks/useDevice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCard } from "@/components/AnimatedCard";

const heroImages = [
  "/paper.png",
  "/floor.png",
  "/under.png",
  "/wall.png",
  "/image.png",
];

/* ────────────── Feature & Service Data ────────────── */
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

const topServices = [
  {
    icon: Building,
    title: "Residential & Commercial Construction",
    desc: "End-to-end construction from foundation to finishing for homes and offices.",
    image: "/under.png",
  },
  {
    icon: Gem,
    title: "Kota Stone & Marble Polishing",
    desc: "Professional polishing to bring out the natural beauty and shine of your floors.",
    image: "/floor.png",
  },
  {
    icon: LayoutGrid,
    title: "Tile Installation & Flooring",
    desc: "Precision installation for floors, walls, and bathrooms using premium materials.",
    image: "/paper.png",
  },
  {
    icon: Paintbrush,
    title: "Home Renovation & Interior",
    desc: "Transform your space with our comprehensive renovation and finishing services.",
    image: "/wall.png",
  },
];

/* ────────────── Counter Animation ────────────── */
function AnimatedCounter({ target, suffix = "", className = "" }: { target: number; suffix?: string; className?: string }) {
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
    <span ref={ref} className={className || "font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-brand-gold"}>
      {count}
      {suffix}
    </span>
  );
}

/* ────────────── Page Component ────────────── */
export default function HomePage() {
  const isMobile = useIsMobile();

  return (
    <>
      {/* ═══════ HERO SECTION ═══════ */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#000000]">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0 bg-[#000000]">
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImages[0]}
              alt="Background"
              fill
              sizes="100vw"
              quality={60}
              className="object-cover object-center"
              priority
            />
          </div>

          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            rewind={true}
            allowTouchMove={false}
            className="w-full h-full absolute inset-0 z-10"
          >
            {heroImages.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Construction project ${i + 1}`}
                    fill
                    sizes="100vw"
                    quality={60}
                    className="object-cover object-center will-change-transform"
                    priority
                    loading="eager"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 bg-[#000000]/70 z-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/90 via-[#000000]/60 to-transparent z-20 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-20 w-full pt-24 pb-16 flex items-center min-h-[100svh]">
          <div className="flex flex-col lg:flex-row items-center justify-start w-full">
            
            {/* Left Image (bg.png) - touching absolute left */}
            <div className="w-full lg:w-[30%] xl:w-[35%] relative h-[250px] sm:h-[300px] lg:h-[450px] xl:h-[550px] z-10 shrink-0 mb-6 lg:mb-0">
              <Image
                src="/bg.png"
                alt="Hero graphic"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-contain object-center lg:object-left"
                priority
              />
            </div>

            {/* Right Text Content */}
            <div className="w-full lg:w-[70%] xl:w-[65%] px-4 sm:px-6 lg:pl-0 lg:pr-12 z-10">
              <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-gold/10 border border-brand-gold/30 rounded-full text-brand-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 sm:mb-8">
                <Hammer className="w-4 h-4" />
                Ujjain&apos;s Most Trusted Contractor
              </div>

              <h1 className="font-poppins font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white leading-[1.1] tracking-tight mb-6">
                Real Site.<br />
                <span className="text-brand-gold">Real Progress.</span>
              </h1>

              <div className="pl-6 sm:pl-8 border-l-4 border-brand-gold mb-10 sm:mb-12">
                <p className="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl">
                  We don&apos;t just build structures — we build your dreams. From
                  foundation to finishing, we deliver unparalleled excellence,
                  transparent pricing, and robust engineering in every brick.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-gold text-brand-black font-semibold rounded-lg text-sm sm:text-base hover:bg-brand-gold-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+918319213539"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#1e2330] sm:bg-white/5 sm:backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg text-sm sm:text-base hover:bg-[#2a3040] sm:hover:bg-white/10 hover:border-white/40 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 8319213539
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile for cleaner look */}
        {!isMobile && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
            <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Scroll Down</span>
            <div className="p-2 rounded-full bg-white/10 border border-white/20">
              <ChevronDown className="w-5 h-5 text-brand-gold animate-bounce" />
            </div>
          </div>
        )}
      </section>

      {/* ═══════ ABOUT / STATS SECTION ═══════ */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#fcf9f2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center">
            <div className="inline-flex items-center justify-center gap-2 text-[#b08945] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6">
              ||| BLESSED WITH STRENGTH, BUILT WITH PRECISION |||
            </div>

            <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] text-brand-black leading-[1.2] mb-6">
              Building More Than Structures,<br />
              <span className="text-[#963737]">We Build Relationships.</span>
            </h2>

            <p className="text-brand-gray/80 text-base sm:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              Maa Bhawani Construction & Contractor is a trusted name in the construction industry, known for quality work, on-time delivery and complete customer satisfaction. With blessings of Maa Bhawani, we are committed to building a stronger tomorrow.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {/* Stat 1 */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#eaddca] text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center aspect-square">
                <div className="mb-3 flex items-center justify-center">
                  <Building className="w-9 h-9 text-brand-black" strokeWidth={1.5} />
                </div>
                <AnimatedCounter target={10} suffix="+" className="font-poppins font-bold text-3xl sm:text-4xl text-[#b08945]" />
                <p className="text-xs sm:text-sm text-brand-black font-semibold mt-1 uppercase tracking-wide">Years of<br />Experience</p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#eaddca] text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center aspect-square">
                <div className="mb-3 flex items-center justify-center">
                  <Briefcase className="w-9 h-9 text-brand-black" strokeWidth={1.5} />
                </div>
                <AnimatedCounter target={500} suffix="+" className="font-poppins font-bold text-3xl sm:text-4xl text-[#b08945]" />
                <p className="text-xs sm:text-sm text-brand-black font-semibold mt-1 uppercase tracking-wide">Projects<br />Completed</p>
              </div>

              {/* Stat 3 */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#eaddca] text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center aspect-square">
                <div className="mb-3 flex items-center justify-center">
                  <Users className="w-9 h-9 text-brand-black" strokeWidth={1.5} />
                </div>
                <AnimatedCounter target={50} suffix="+" className="font-poppins font-bold text-3xl sm:text-4xl text-[#b08945]" />
                <p className="text-xs sm:text-sm text-brand-black font-semibold mt-1 uppercase tracking-wide">Skilled<br />Professionals</p>
              </div>

              {/* Stat 4 */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#eaddca] text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center aspect-square">
                <div className="mb-3 flex items-center justify-center">
                  <HeartHandshake className="w-9 h-9 text-brand-black" strokeWidth={1.5} />
                </div>
                <AnimatedCounter target={100} suffix="%" className="font-poppins font-bold text-3xl sm:text-4xl text-[#b08945]" />
                <p className="text-xs sm:text-sm text-brand-black font-semibold mt-1 uppercase tracking-wide">Client<br />Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
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

      {/* ═══════ OUR SERVICES SECTION ═══════ */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#fcf9f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex-1 w-full text-center md:text-left">
              <div className="mb-0">
                <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-brand-black">
                  Our Services
                </h2>
                <div className="w-16 h-1 bg-brand-gold rounded-full mt-4 mb-4 mx-auto md:mx-0" />
                <p className="max-w-2xl text-base md:text-lg text-brand-gray/70 mx-auto md:mx-0">
                  Comprehensive construction and finishing solutions tailored to your needs.
                </p>
              </div>
            </div>
            <Link
              href="/services"
              className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-black text-brand-gold font-semibold rounded-lg hover:bg-brand-black/90 transition-all duration-300 shadow-sm shrink-0"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topServices.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-xl border border-[#eaddca] hover:border-brand-gold/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden hover:-translate-y-1 flex flex-col"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 z-20 w-12 h-12 bg-white/20 rounded-xl border border-white/30 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-brand-gold" />
                  </div>
                </div>

                <div className="p-6 relative z-10 flex-grow flex flex-col">
                  <h3 className="font-poppins font-semibold text-lg text-brand-black mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-gray/70 leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>

          {/* Mobile "Explore All" Button */}
          <div className="mt-8 flex md:hidden justify-center w-full">
            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 bg-brand-black text-brand-gold font-semibold rounded-lg hover:bg-brand-black/90 transition-all duration-300 shadow-md"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ RECENT PROJECTS SECTION ═══════ */}
      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="flex-1 w-full text-center md:text-left">
              <div className="mb-0">
                <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-brand-black">
                  Recent Projects
                </h2>
                <div className="w-16 h-1 bg-brand-gold rounded-full mt-4 mb-4 mx-auto md:mx-0" />
                <p className="max-w-2xl text-base md:text-lg text-brand-gray/70 mx-auto md:mx-0">
                  A glimpse into our latest construction and renovation work.
                </p>
              </div>
            </div>
            <Link
              href="/work"
              className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold text-brand-black font-semibold rounded-lg hover:bg-brand-gold-dark transition-all duration-300 shadow-sm shrink-0"
            >
              See All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.slice(0, 4).map((project) => (
              <div
                key={project.id}
                className="bg-brand-light rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 group"
              >
                <div className="w-full relative group/slider">
                  <span className="absolute top-3 right-3 px-2 py-1 bg-brand-gold/90 text-brand-black text-xs font-semibold rounded-md z-30 shadow-md">
                    {project.status}
                  </span>
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    beforeLabel="Before"
                    afterLabel="After"
                    className="rounded-b-none rounded-t-xl"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-brand-gold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-poppins font-semibold text-lg text-brand-black mt-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-brand-gray/70 mt-2 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile "See All" Button */}
          <div className="mt-8 flex md:hidden justify-center w-full">
            <Link
              href="/work"
              className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 bg-brand-gold text-brand-black font-semibold rounded-lg hover:bg-brand-gold-dark transition-all duration-300 shadow-md"
            >
              See All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ CTA SECTION ═══════ */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#fcf9f2]">
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
