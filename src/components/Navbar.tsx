"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, HardHat } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];


  const navWidth = isScrolled ? "w-[95%] md:w-[75%] max-w-5xl" : "w-full max-w-full";
  const navPosition = isScrolled ? "top-4" : "top-0";
  const navRadius = isScrolled ? "rounded-full" : "rounded-none";
  const navPadding = isScrolled ? "py-2 px-6" : "py-6 px-6 lg:px-10";
  
  const navBg = isScrolled
    ? "bg-[#0F172A]/95 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
    : "bg-transparent border border-transparent";

  const textClass = "text-white hover:text-brand-gold";

  return (
    <>
      <nav
        className={`fixed left-0 right-0 mx-auto z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-center ${navWidth} ${navPosition} ${navRadius} ${navBg}`}
      >
        {/* Removed max-w-7xl so the content stretches all the way to the edges when not scrolled */}
        <div className={`flex justify-between items-center transition-all duration-700 w-full mx-auto ${navPadding}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className={`relative transition-all duration-500 ${isScrolled ? "w-12 h-12" : "w-20 h-20"}`}>
              <Image 
                src="/logo.png" 
                alt="Maa Bhawani Logo" 
                fill
                sizes="(max-width: 768px) 48px, 80px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${textClass}`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={`hidden md:flex items-center justify-center bg-brand-gold text-brand-black font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 ${isScrolled ? "px-4 py-1.5 text-xs" : "px-6 py-2.5 text-sm"}`}
            >
              Get a Quote
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:text-brand-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 md:hidden bg-[#0F172A]/[0.98] pt-24"
          >
            <div className="flex flex-col h-full px-6 pb-8">
              <div className="flex flex-col space-y-4 flex-grow">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl font-poppins font-medium transition-all ${
                        isActive
                          ? "text-brand-gold"
                          : "text-white hover:text-brand-gold"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-auto">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex justify-center py-4 bg-brand-gold text-brand-black font-semibold rounded-xl text-lg"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
