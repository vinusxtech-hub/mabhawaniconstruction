"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, HardHat } from "lucide-react";

export function Footer() {

  return (
    <footer className="bg-brand-black text-white">
      {/* Gold accent strip */}
      <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-gold-dark to-brand-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-24 h-24">
                <Image 
                  src="/logo.png" 
                  alt="Maa Bhawani Logo" 
                  fill
                  sizes="96px"
                  className="object-contain drop-shadow-md"
                />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-lg leading-tight">
                  Maa Bhawani
                </h3>
                <span className="text-[10px] tracking-wider uppercase text-brand-gold font-bold">
                  Construction & Contractor
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              Building dreams with dedication, quality materials, and expert
              craftsmanship. Your trusted construction partner.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-brand-gold mb-5 text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Work", href: "/work" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold text-brand-gold mb-5 text-sm tracking-wider uppercase">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Residential Construction",
                "Commercial Construction",
                "Home Renovation",
                "Kota Stone Polishing",
                "Marble Polishing",
                "Tile Installation",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-brand-gold transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-semibold text-brand-gold mb-5 text-sm tracking-wider uppercase">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                <div>
                  <a
                    href="tel:+918319213539"
                    className="text-white/80 hover:text-brand-gold transition-colors text-sm font-medium"
                  >
                    +91 8319213539
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  Madhya Pradesh, India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  Mon - Sat: 8:00 AM - 7:00 PM
                </span>
              </li>
            </ul>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918319213539?text=Hello%20Maa%20Bhawani%20Construction!%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2.5 bg-[#25D366] text-white rounded-md text-sm font-medium hover:bg-[#1ebe5c] transition-colors shadow-md"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex justify-center items-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Maa Bhawani Construction & Contractor.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
