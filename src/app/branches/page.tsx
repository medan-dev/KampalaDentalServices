"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";

const branches = [
  {
    id: "Nabweru",
    name: "Nabweru Road Branch",
    address: "Nabweru Road, Kampala",
    phone: "+256 700 593 479",
    whatsapp: "256700593479",
    coordinates: "0.3476,32.5825",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
      { day: "Saturday", time: "9:00 AM - 4:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  {
    id: "bwaise",
    name: "Bwaise Branch",
    address: "Near Seroma Hardware, Bwaise, Kampala",
    phone: "+256 775 953 799",
    whatsapp: "256775953799",
    coordinates: "0.3625,32.5489",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
      { day: "Saturday", time: "9:00 AM - 4:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  {
    id: "gayaza",
    name: "Gayaza Road Branch",
    address: "Near Akamwesi, Opposite Hardware World, Gayaza Road",
    phone: "+256 700 593 479",
    whatsapp: "256700593479",
    coordinates: "0.3892,32.6111",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
      { day: "Saturday", time: "9:00 AM - 4:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function BranchesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-primary/20" />
        </div>
        <div className="page-hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-white/70 font-bold text-sm uppercase tracking-wider">Our Locations</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4 mb-6">
              Visit Us at Any <span className="text-white/90 italic">Branch</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              With three convenient locations across Kampala, quality dental care
              is never far away. Choose the branch nearest to you.
            </p>
          </motion.div>
        </div>
        <SectionDivider color="#ffffff" position="bottom" />
      </section>

      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                variants={item}
                className="curved-card !p-0 border-none bg-neutral-light/30 rounded-[2rem] overflow-hidden shadow-xl"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-display font-bold text-primary">
                          {branch.name}
                        </h3>
                        <p className="text-neutral font-medium mt-1">{branch.address}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                      <div className="space-y-4">
                        <h4 className="font-display font-semibold text-primary flex items-center gap-2 text-lg">
                          <Phone size={20} className="text-primary" />
                          Contact
                        </h4>
                        <div className="space-y-2">
                          <a
                            href={`tel:${branch.phone}`}
                            className="block text-neutral hover:text-primary transition-colors font-medium"
                          >
                            {branch.phone}
                          </a>
                          <a
                            href="mailto:info@kampaladentalservices.com"
                            className="block text-neutral hover:text-primary transition-colors font-medium break-all"
                          >
                            info@kampaladentalservices.com
                          </a>
                        </div>
                        <a
                          href={`https://wa.me/${branch.whatsapp}?text=Hello! I'm interested in booking an appointment at ${branch.name}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-green-600 font-bold hover:underline"
                        >
                          <MessageCircle size={18} /> Chat on WhatsApp
                        </a>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-display font-semibold text-primary flex items-center gap-2 text-lg">
                          <Clock size={20} className="text-primary" />
                          Hours
                        </h4>
                        <div className="space-y-2">
                          {branch.hours.map((h, i) => (
                            <div
                              key={i}
                              className="flex justify-between text-sm border-b border-gray-100 pb-1"
                            >
                              <span className="text-neutral">{h.day}</span>
                              <span className="text-primary font-bold">
                                {h.time}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Link
                      href={`/appointments?branch=${branch.id}`}
                      className="btn-accent w-full sm:w-auto px-8 py-4 rounded-full border-none shadow-lg shadow-accent/20"
                    >
                      <Calendar size={20} />
                      Book at This Branch
                    </Link>
                  </div>

                  <div className="bg-primary/5 min-h-[350px] lg:min-h-full">
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "350px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full grayscale brightness-95 contrast-110 hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F7F9] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Need Help Finding Us?
            </h2>
            <p className="text-neutral mb-10 max-w-2xl mx-auto leading-relaxed">
              Our friendly staff can help direct you to the nearest branch or
              arrange transportation for emergency care.
            </p>
            <a
              href="tel:+256702555000"
              className="btn-primary text-lg px-10 py-4 rounded-full border-none shadow-xl"
            >
              <Phone size={20} />
              Call +256 700 593 479
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}