"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/branches", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 mt-4 transition-all duration-300">
      <header className="w-full max-w-[96%] xl:max-w-7xl bg-white border border-gray-200 rounded-[2rem] py-3 px-6 lg:px-10 transition-all duration-300">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Removed drop-shadow so the image's white background blends perfectly with the header */}
            <div className="group-hover:scale-105 transition-transform relative w-14 h-14 mix-blend-multiply">
              <Image 
                src="/logo.png" 
                alt="Kampala Dental Services Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-display text-xl font-bold text-primary">Kampala</span>
              <span className="font-display text-xl font-bold text-secondary"> Dental</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+256702555000"
              className="flex items-center gap-2 transition-colors text-gray-600 hover:text-primary"
            >
              <Phone size={18} className="text-primary" />
              <span className="text-sm font-medium">+256 700 593 479</span>
            </a>
            <Link href="/appointments" className="btn-primary py-2.5 px-6 rounded-full border border-primary/20">
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border border-gray-200 rounded-b-3xl absolute top-full left-0 right-0 overflow-hidden mt-2"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 text-base font-semibold rounded-lg ${
                      pathname === link.href
                        ? "text-primary bg-primary/5 border-l-4 border-primary"
                        : "text-gray-600 hover:bg-primary/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col gap-3 px-4 pb-4">
                  <a
                    href="tel:+256702555000"
                    className="flex items-center justify-center gap-2 py-3 border-2 border-primary text-primary rounded-lg font-bold"
                  >
                    <Phone size={18} />
                    +256 700 593 479
                  </a>
                  <Link
                    href="/appointments"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary justify-center text-center w-full rounded-full"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}