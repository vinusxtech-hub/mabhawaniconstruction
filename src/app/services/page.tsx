import Image from "next/image";
import {
  Home,
  Building2,
  Hammer,
  Paintbrush,
  Gem,
  LayoutGrid,
  Layers,
  Columns3,
  ToyBrick,
  PaintBucket,
  Sparkles,
  Wrench,
  PanelTop,
  HardHat,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import Link from "next/link";

const services = [
  {
    icon: Gem,
    title: "Kota Stone Polishing",
    desc: "Professional Kota stone polishing services to bring out the natural beauty and shine of your floors with long-lasting results.",
    category: "Flooring & Finishing",
    image: "/floor.png",
  },
  {
    icon: Sparkles,
    title: "Marble Polishing",
    desc: "Expert marble polishing that restores the mirror-like finish of your marble surfaces, enhancing elegance and durability.",
    category: "Flooring & Finishing",
    image: "/floor.png",
  },
  {
    icon: LayoutGrid,
    title: "Tile Installation",
    desc: "Precision tile installation for floors, walls, and bathrooms using premium adhesives and expert alignment techniques.",
    category: "Flooring & Finishing",
    image: "/paper.png",
  },
  {
    icon: Layers,
    title: "Flooring Solutions",
    desc: "Complete flooring solutions including tiles, marble, Kota stone, and granite — tailored to your style and budget.",
    category: "Flooring & Finishing",
    image: "/paper.png",
  },
  {
    icon: Wrench,
    title: "Home Renovation",
    desc: "Transform your existing space with our comprehensive renovation services — from structural changes to modern interior upgrades.",
    category: "Renovation",
    image: "/wall.png",
  },
  {
    icon: Home,
    title: "Residential Construction",
    desc: "Complete residential construction from foundation to finishing. We build homes that stand the test of time.",
    category: "Construction",
    image: "/under.png",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "Professional commercial construction services for shops, offices, warehouses, and multi-story commercial complexes.",
    category: "Construction",
    image: "/image.png",
  },
  {
    icon: HardHat,
    title: "Full Construction Services",
    desc: "End-to-end construction management covering every phase — planning, execution, quality control, and timely delivery.",
    category: "Construction",
    image: "/under.png",
  },
  {
    icon: Paintbrush,
    title: "Interior & Exterior Work",
    desc: "Complete interior and exterior finishing including painting, texturing, cladding, and decorative work.",
    category: "Renovation",
    image: "/wall.png",
  },
  {
    icon: PanelTop,
    title: "Wall Construction",
    desc: "Strong and durable wall construction using quality bricks, blocks, and cement for residential and commercial projects.",
    category: "Construction",
    image: "/image.png",
  },
  {
    icon: Columns3,
    title: "Column & Slab Work",
    desc: "Reinforced column and slab construction engineered for maximum load-bearing capacity and structural safety.",
    category: "Construction",
    image: "/under.png",
  },
  {
    icon: ToyBrick,
    title: "Brick Work",
    desc: "Expert brickwork with precise bonding patterns, ensuring uniform walls with proper alignment and weather resistance.",
    category: "Construction",
    image: "/image.png",
  },
  {
    icon: PaintBucket,
    title: "Plastering",
    desc: "Smooth, level plastering services that create the perfect surface for painting and finishing work.",
    category: "Finishing",
    image: "/wall.png",
  },
  {
    icon: Hammer,
    title: "Finishing & Completion",
    desc: "Final finishing touches including painting, polishing, fixture installation, and cleanup for a move-in ready result.",
    category: "Finishing",
    image: "/paper.png",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ═══════ HERO BANNER ═══════ */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black to-brand-gold/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-brand-gold text-sm font-medium tracking-wider uppercase">
            What We Offer
          </span>
          <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mt-3">
            Our <span className="text-brand-gold">Services</span>
          </h1>
          <p className="mt-4 text-white/60 text-base sm:text-lg max-w-2xl">
            From foundation to finishing — we provide comprehensive
            construction, renovation, and polishing services with unmatched quality.
          </p>
        </div>
      </section>

      {/* ═══════ SERVICES GRID ═══════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Complete Construction Solutions"
            subtitle="Every service you need under one roof — quality guaranteed"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-white rounded-xl border border-gray-100 hover:border-brand-gold/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden hover:-translate-y-1 flex flex-col"
              >
                {/* Photo Area */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  
                  {/* Category Badge on Top Right of Photo */}
                  <span className="absolute top-4 right-4 z-20 px-2.5 py-1 bg-white/95 text-brand-black text-[10px] font-bold tracking-wider uppercase rounded-md shadow-sm">
                    {service.category}
                  </span>

                  {/* Icon over Photo */}
                  <div className="absolute bottom-4 left-4 z-20 w-12 h-12 bg-white/20 rounded-xl border border-white/30 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-brand-gold" />
                  </div>
                </div>

                <div className="p-5 sm:p-6 relative z-10 flex-grow flex flex-col">
                  {/* Title */}
                  <h3 className="font-poppins font-semibold text-base sm:text-lg text-brand-black mb-2 line-clamp-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brand-gray/70 leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                </div>

                {/* Gold bottom accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-16 sm:py-20 bg-brand-black relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-white/60 text-base sm:text-lg mb-8">
            Every project is unique. Contact us to discuss your specific
            requirements and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-gold text-brand-black font-semibold rounded-lg hover:bg-brand-gold-dark transition-all duration-300 shadow-lg text-center"
            >
              Get Free Consultation
            </Link>
            <a
              href="https://wa.me/918319213539?text=Hello%20Maa%20Bhawani%20Construction!%20I%20need%20a%20custom%20construction%20service.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-brand-gold/40 text-brand-gold font-semibold rounded-lg hover:bg-brand-gold hover:text-brand-black transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp for Custom Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
