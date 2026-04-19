"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { SectionDivider } from "./SectionDivider";

export function Footer() {
  const pathname = usePathname();
  
  // Determine the background color of the last section of the current page
  // Color of the last section on each page — feeds the top divider so it blends seamlessly into the teal footer
  const topColor =
    pathname === "/branches" || pathname === "/contact" ? "#F7F7F9" : // Ends in light gray
    "#ffffff"; // All other pages end in white

  return (
    <footer className="bg-primary text-white/80 relative">
      {topColor && (
        <SectionDivider color={topColor} position="top" />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 bg-white rounded-xl p-1 flex-shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="Kampala Dental Services Logo" 
                  fill
                  className="object-contain" 
                />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white">Kampala</span>
                <span className="font-display text-xl font-bold text-white"> Dental</span>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-6 leading-relaxed">
              Your trusted partner for premium dental care in Uganda. We create beautiful smiles with modern technology.
            </p>
            <div className="flex gap-3 justify-center mt-2">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links + Services: side-by-side on mobile, separate grid cols on md+ */}
          <div className="flex flex-row gap-8 md:contents">
            <div className="flex-1 px-2 md:px-0">
              <h4 className="font-display text-lg font-semibold text-white mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Services", href: "/services" },
                  { label: "Locations", href: "/branches" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-white/80 hover:text-white text-sm transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 px-2 md:px-0">
              <h4 className="font-display text-lg font-semibold text-white mb-5">Services</h4>
              <ul className="space-y-3">
                {["General Dentistry", "Cosmetic Dentistry", "Orthodontics", "Dental Implants", "Pediatric Dentistry", "Root Canal"].map((item) => (
                  <li key={item}>
                    <Link href="/services" className="text-white/80 hover:text-white text-sm transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-5 text-center">Contact</h4>
            {/* Two-column contact split: 3 items left, hours right */}
            <div className="flex flex-row gap-6">
              {/* Left: Phone, Email, Location */}
              <ul className="space-y-4 flex-1">
                <li className="flex items-start gap-2.5">
                  <Phone size={16} className="text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/80 text-sm">+256 702 555 000</p>
                    <p className="text-white/80 text-sm">+256 702 555 111</p>
                  </div>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={16} className="text-white flex-shrink-0" />
                  <span className="text-white/80 text-sm">info@kampaladental.ug</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Kampala, Uganda</span>
                </li>
              </ul>
              {/* Right: Hours */}
              <ul className="space-y-4 flex-1">
                <li className="flex items-start gap-2.5">
                  <Clock size={16} className="text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/80 text-sm font-medium">Opening Hours</p>
                    <p className="text-white/70 text-xs mt-1">Mon – Fri</p>
                    <p className="text-white/80 text-sm">8:00 AM – 6:00 PM</p>
                    <p className="text-white/70 text-xs mt-2">Saturday</p>
                    <p className="text-white/80 text-sm">9:00 AM – 4:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Kampala Dental Services. All rights reserved. <br className="sm:hidden" />
              <a
                href="https://mctech-hubsystems.kesug.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-secondary hover:text-white transition-colors duration-300"
              >
                Developed by Mctech-hub Systems
              </a>
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
