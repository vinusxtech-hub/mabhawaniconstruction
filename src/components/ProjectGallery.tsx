"use client";

import { useState } from "react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SectionHeading } from "@/components/SectionHeading";

type Category = "all" | "residential" | "commercial" | "renovation";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  status: string;
  beforeImage: string;
  afterImage: string;
}

const filters: { label: string; value: Category }[] = [
  { label: "All Projects", value: "all" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
  { label: "Renovation", value: "renovation" },
];

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Projects"
          subtitle="Browse through our portfolio of completed works"
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === f.value
                  ? "bg-brand-gold text-brand-black shadow-md"
                  : "bg-white text-brand-gray hover:bg-brand-gold/10 border border-gray-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 group"
                style={{ animation: "fadeScaleIn 0.3s ease forwards" }}
              >
                {/* Slider replaces static image */}
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
                  <p className="text-sm text-brand-gray/70 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
