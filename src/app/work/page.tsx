import {
  Shovel,
  ToyBrick,
  Columns3,
  PaintBucket,
  Sparkles,
  Layers,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectGallery } from "@/components/ProjectGallery";
import type { Project } from "@/components/ProjectGallery";

/* ────────────── Process Steps ────────────── */
const processSteps = [
  {
    icon: Shovel,
    title: "Foundation",
    desc: "The base of every great structure. We ensure deep, strong foundations using quality materials and precise engineering.",
  },
  {
    icon: ToyBrick,
    title: "Wall Construction",
    desc: "Solid walls built with premium bricks and cement, ensuring structural integrity and weather resistance.",
  },
  {
    icon: Columns3,
    title: "Column & Slab",
    desc: "Reinforced columns and slabs designed to support multi-story structures with maximum strength.",
  },
  {
    icon: Layers,
    title: "Brick Work",
    desc: "Expert brickwork with precise alignment and proper bonding patterns for long-lasting walls.",
  },
  {
    icon: PaintBucket,
    title: "Plastering",
    desc: "Smooth, even plastering that prepares surfaces for beautiful finishing work.",
  },
  {
    icon: Sparkles,
    title: "Finishing",
    desc: "Final touches including painting, polishing, and detailing that bring the project to life.",
  },
];

/* ────────────── Static Projects Data ────────────── */
const projects: Project[] = [
  {
    id: "1",
    title: "Modern Residential Villa",
    category: "residential",
    description:
      "Complete 3BHK residential villa construction with modern architecture and premium finishing.",
    status: "Completed",
    beforeImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Commercial Office Complex",
    category: "commercial",
    description:
      "Multi-story commercial office space with reinforced structure and contemporary design.",
    status: "Completed",
    beforeImage:
      "https://images.unsplash.com/photo-1541888082420-ef30af19060d?w=600&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Home Renovation & Flooring",
    category: "renovation",
    description:
      "Complete home renovation including Kota stone polishing, marble finishing, and modern tile installation.",
    status: "Completed",
    beforeImage:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Residential Duplex House",
    category: "residential",
    description:
      "Spacious duplex house construction with premium materials and expert craftsmanship.",
    status: "Completed",
    beforeImage:
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=600&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Retail Showroom Build",
    category: "commercial",
    description:
      "Modern retail showroom with glass facade, interior fit-out, and custom flooring.",
    status: "In Progress",
    beforeImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Kitchen & Bathroom Remodel",
    category: "renovation",
    description:
      "Premium kitchen and bathroom renovation with marble countertops and designer tiles.",
    status: "Completed",
    beforeImage:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&auto=format&fit=crop",
  },
];

export default function WorkPage() {
  return (
    <>
      {/* ═══════ HERO BANNER ═══════ */}
      <section className="relative pt-32 pb-20 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black to-brand-gold/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-brand-gold text-sm font-medium tracking-wider uppercase">
              Our Work
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mt-3">
              Construction{" "}
              <span className="text-brand-gold">Process & Projects</span>
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-2xl">
              From foundation to finishing — see our step-by-step process and
              explore our completed projects.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ CONSTRUCTION PROCESS ═══════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Construction Process"
            subtitle="Step-by-step approach to building quality structures"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className="group relative bg-white rounded-xl border border-gray-100 p-6 hover:border-brand-gold/40 hover:shadow-xl transition-all duration-300"
              >
                {/* Step Number */}
                <span className="absolute top-4 right-4 font-poppins font-bold text-5xl text-brand-gold/10 group-hover:text-brand-gold/20 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="w-14 h-14 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition-colors">
                  <step.icon className="w-7 h-7 text-brand-gold" />
                </div>

                <h3 className="font-poppins font-semibold text-lg text-brand-black mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-gray/70 leading-relaxed">
                  {step.desc}
                </p>

                {/* Progress bar */}
                <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-gold rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${((i + 1) / processSteps.length) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PROJECT GALLERY ═══════ */}
      <ProjectGallery projects={projects} />
    </>
  );
}
