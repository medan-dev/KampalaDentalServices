"use client";

import { motion } from "framer-motion";
import { Coffee, Shield, Heart, Sparkles, Phone, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10K+", label: "Happy Patients" },
  { value: "3", label: "Clinic Locations" },
  { value: "24/7", label: "Emergency Care" },
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

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-white/70 font-bold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4 mb-6">
              Modern Excellence in <span className="text-white/90 italic">Dental Care</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Serving Kampala for over 15 years with a commitment to clinical excellence,
              patient comfort, and state-of-the-art dental technology.
            </p>
          </motion.div>
        </div>
        
        <SectionDivider color="#ffffff" position="bottom" />
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-neutral-light rounded-[32px] overflow-hidden border border-gray-100 shadow-lg">
                <img 
                  src="/clinic-interior.jpg" 
                  alt="Kampala Dental Services Clinic Interior" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Our Journey & Mission</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Established in 2008, Kampala Dental Services began with a simple mission: to provide the highest quality dental care in a comfortable and welcoming environment.
                </p>
                <p>
                  Today, we have grown into one of Uganda's leading dental practices, known for our expert team of certified dentists and our investment in modern dental technology.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-[2rem]">
                    <Shield className="text-primary w-6 h-6" />
                    <span className="text-sm font-semibold text-primary-dark">Certified Experts</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-[2rem]">
                    <Sparkles className="text-primary w-6 h-6" />
                    <span className="text-sm font-semibold text-primary-dark">Advanced Tech</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <SectionDivider color="#F7F7F9" position="bottom" />
      </section>

      <section className="section-padding bg-[#F7F7F9] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={item} className="p-8 bg-neutral-light/50 border border-gray-100 rounded-[2.5rem] hover:shadow-lg transition-shadow">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <SectionDivider color="#ffffff" position="bottom" />
      </section>

      {/* Team/Philosophy Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Why Patients Trust Us</h2>
            <p className="text-gray-500 max-w-2xl mx-auto italic">
              "We don't just treat teeth; we care for people. Our approach is gentle, transparent, and focused on long-term health."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Care",
                desc: "Every smile is unique. We create custom treatment plans tailored to your specific goals and budget.",
                icon: Heart
              },
              {
                title: "Comfort First",
                desc: "We prioritize pain-free dentistry and offer a relaxing environment to ease any dental anxiety.",
                icon: Coffee
              },
              {
                title: "Excellence",
                desc: "We use only the highest grade materials and follow international standards for every procedure.",
                icon: Shield
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="curved-card p-10 flex flex-col items-center text-center group hover:bg-neutral-light transition-colors border-none bg-white rounded-[2.5rem]"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-primary-dark mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-dark p-8 md:p-16 text-center text-white relative overflow-hidden rounded-[2.5rem] z-10 shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl opacity-10" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl opacity-10" />
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Experience the Difference Today</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg">
              Join the thousands of happy patients who have discovered the perfect combination of expert care and modern comfort.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/appointments" className="btn-secondary px-8 py-4 rounded-full font-bold">
                Book Your Visit <ArrowRight size={20} className="inline ml-2" />
              </a>
              <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/60 text-white font-bold rounded-full transition-all duration-500 hover:bg-white hover:text-primary font-bold hover:-translate-y-1">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}