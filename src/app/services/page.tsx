"use client";

import { motion } from "framer-motion";
import { Stethoscope, Sparkles, Braces, Hand, Syringe, Crown, Baby as BabyIcon, ChevronRight } from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";

const services = [
  { 
    icon: Stethoscope, 
    title: "General Dentistry", 
    desc: "Checkups, cleanings, and fluoride treatments to maintain your oral health. Prevention is our priority.",
    features: ["Digital X-rays", "Gentle cleanings", "Fluoride treatment"]
  },
  { 
    icon: Sparkles, 
    title: "Cosmetic Dentistry", 
    desc: "Transform your smile with advanced whitening, veneers, and aesthetic bonding for a brilliant look.",
    features: ["Professional whitening", "Porcelain veneers", "Smile makeovers"]
  },
  { 
    icon: Braces, 
    title: "Orthodontics", 
    desc: "Straighten your teeth and correct your bite with modern braces or discreet clear aligner systems.",
    features: ["Invisalign®", "Clear braces", "Metal braces"]
  },
  { 
    icon: Hand, 
    title: "Dental Implants", 
    desc: "Permanent, natural-looking tooth replacement solution for missing teeth that restores full function.",
    features: ["Single tooth implants", "Full arch restoration", "Implant-supported bridges"]
  },
  { 
    icon: BabyIcon, 
    title: "Pediatric Dentistry", 
    desc: "Specialized, gentle dental care designed to keep children's smiles healthy and make them love the dentist.",
    features: ["Kid-friendly exams", "Sealants", "Education"]
  },
  { 
    icon: Syringe, 
    title: "Root Canal", 
    desc: "Expert therapy to save damaged or infected teeth, performed with modern techniques for maximum comfort.",
    features: ["Emergency care", "Pain management", "Tooth preservation"]
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/clinic-chair.jpg" 
            alt="State-of-the-art Dental Chair" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-[1px]" />
        </div>
        <div className="page-hero-content relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-white/70 font-bold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4 mb-6">
              Comprehensive <span className="text-white/90 italic">Dental Care</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              From routine cleanings to advanced oral surgery, our highly trained team 
              is equipped to meet all your family's dental needs under one roof.
            </p>
          </motion.div>
        </div>
        <SectionDivider color="#ffffff" position="bottom" />
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="p-8 bg-neutral-light/50 rounded-[2.5rem] border border-gray-100 hover:border-primary/30 transition-all group hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary-dark mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.div whileHover={{ x: 5 }}>
                  <a href="/appointments" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors">
                    Book Service <ChevronRight size={18} />
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <SectionDivider color="#F7F7F9" position="bottom" />
      </section>

      <section className="section-padding bg-[#F7F7F9] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">How We Work</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Straightforward, transparent, and patient-focused process.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Expert assessment and comprehensive diagnosis." },
              { step: "02", title: "Plan", desc: "Customized treatment plan and transparent pricing." },
              { step: "03", title: "Treatment", desc: "Modern care using state-of-the-art technology." },
              { step: "04", title: "Follow-up", desc: "Proactive maintenance and recovery support." }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-display font-bold text-primary/10 absolute -top-10 left-0 -z-10">{step.step}</div>
                <h4 className="text-xl font-display font-bold text-primary-dark mb-3 leading-tight">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-dark p-8 md:p-16 text-center text-white relative overflow-hidden rounded-[2rem] z-10 shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-xl opacity-10" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-xl opacity-10" />
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Need Immediate Assistance?</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg">
              Our emergency dental team is ready to help you with any urgent oral health needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/appointments" className="btn-secondary px-8 py-4 rounded-full">
                Book Consultation
              </a>
              <a href="tel:+256702555000" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/60 text-white font-bold rounded-full transition-all duration-500 hover:bg-white hover:text-primary hover:-translate-y-1">
                Call Emergency Line
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}