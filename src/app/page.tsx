"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Phone, Clock, Shield, Heart, Sparkles, CheckCircle, Calendar, MapPin, Mail, Stethoscope, Smile, Braces, Hand, Syringe, Crown, Baby as BabyIcon } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Dentistry", desc: "Checkups, cleanings, fillings, and extractions for the whole family." },
  { icon: Sparkles, title: "Cosmetic Dentistry", desc: "Teeth whitening, veneers, and smile makeovers." },
  { icon: Braces, title: "Orthodontics", desc: "Braces and clear aligners to straighten your teeth." },
  { icon: Hand, title: "Dental Implants", desc: "Permanent tooth replacement that looks and functions naturally." },
  { icon: BabyIcon, title: "Pediatric Dentistry", desc: "Gentle, child-friendly dental care for all ages." },
  { icon: Syringe, title: "Root Canal", desc: "Save damaged teeth with modern root canal therapy." },
  { icon: Crown, title: "Crowns & Bridges", desc: "Restore damaged or missing teeth with custom solutions." },
  { icon: Sparkles, title: "Teeth Cleaning", desc: "Professional cleaning and preventive oral care." },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10K+", label: "Happy Patients" },
  { value: "3", label: "Clinic Locations" },
  { value: "24/7", label: "Emergency Care" },
];

const reasons = [
  { icon: Shield, title: "Expert Dentists", desc: "Certified professionals with 15+ years combined experience." },
  { icon: Sparkles, title: "Modern Technology", desc: "State-of-the-art equipment for precise, comfortable care." },
  { icon: Heart, title: "Patient-First", desc: "Your comfort and satisfaction are our top priorities." },
];

const testimonials = [
  { name: "Sarah N.", treatment: "Dental Implants", rating: 5, text: "I was terrified of the dentist, but the team made me feel comfortable. My implants look completely natural!" },
  { name: "James K.", treatment: "Orthodontics", rating: 5, text: "After 18 months with braces, I finally have the smile I've always wanted. Incredible staff!" },
  { name: "Grace M.", treatment: "Teeth Whitening", rating: 5, text: "My wedding smile was perfect thanks to the cosmetic team. Highly recommend!" },
];

const branches = [
  {
    name: "Najjera Road",
    address: "Najjera Road, Kampala",
    phone: "+256 700 593 479",
    details: "Main clinical center with advanced surgical facilities."
  },
  {
    name: "Bwaise",
    address: "Near Semwogerere/Adweya, Bwaise, Kampala",
    phone: "+256 775 953 799",
    details: "Expert general dentistry and pediatric care."
  },
  {
    name: "Gayaza Road",
    address: "Near Akamwesi, Opposite Adweya World, Gayaza Road",
    phone: "+256 700 593 479",
    details: "Cosmetic dentistry and orthodontic specialist center."
  },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function Home() {
  return (
    <>
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden text-center -mt-20 pb-20 pt-32">
        <div className="absolute inset-0">
          <img
            src="/hero-main.jpg"
            alt="Kampala Dental Services Professional Clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center w-full"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-8">
              Eat Well <br className="hidden md:block" />
              <span className="text-secondary">Smile</span> Good
            </h1>

            <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Experience world-class dental care in Uganda. Our expert team combines advanced technology with genuine compassion in a premium, institutional setting.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Link href="/appointments" className="btn-primary text-lg">
                Book Appointment <ArrowRight size={20} />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white bg-transparent text-white font-bold transition-colors hover:bg-white hover:text-primary text-lg">
                Our Services
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-white text-sm font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-secondary" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-secondary" />
                <span>Same-Day Emergency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-secondary" />
                <span>Advanced Surgical Suite</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background-alt border-b border-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="text-center p-6 bg-background border border-neutral-light"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-neutral-dark text-sm font-bold uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background border-b border-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Clinical Departments</span>
            <h2 className="text-4xl font-display font-bold text-dark mt-2">Specialized Care Facilities</h2>
          </motion.div>

          <motion.div 
            variants={container} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }} 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="clinical-card group"
              >
                <div className="w-14 h-14 bg-background border border-neutral-light flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Facilities <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background-alt border-b border-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Quality Assurance</span>
            <h2 className="text-4xl font-display font-bold text-dark mt-2">The Standard of Care</h2>
          </motion.div>

          <motion.div 
            variants={container} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }} 
            className="grid md:grid-cols-3 gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="text-center clinical-card bg-background"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-background-alt border border-neutral-light flex items-center justify-center">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-3">{reason.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
 
      {/* Branches Section */}
      <section className="py-24 bg-background border-b border-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Facility Network</span>
            <h2 className="text-4xl font-display font-bold text-dark mt-2">Clinical Locations</h2>
          </motion.div>
 
          <motion.div 
            variants={container} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }} 
            className="grid md:grid-cols-3 gap-6"
          >
            {branches.map((branch, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="clinical-card"
              >
                <div className="w-12 h-12 bg-background border border-neutral-light flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-dark mb-2">{branch.name} Branch</h3>
                <p className="text-muted text-sm mb-6 line-clamp-2">{branch.address}</p>
                <a href={`tel:${branch.phone}`} className="flex items-center gap-2 text-primary font-bold hover:underline">
                  <Phone size={16} /> {branch.phone}
                </a>
              </motion.div>
            ))}
          </motion.div>
 
          <div className="text-center mt-10">
            <Link href="/branches" className="btn-primary">
              View All Locations <MapPin size={18} />
            </Link>
          </div>
        </div>
      </section>
 
      <section className="py-24 bg-primary text-white border-b border-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-white/70 font-bold text-sm uppercase tracking-wider">Patient Records</span>
            <h2 className="text-4xl font-display font-bold text-white mt-2">Verified Feedback</h2>
          </motion.div>
 
          <motion.div 
            variants={container} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }} 
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="clinical-card bg-primary-dark/50 border-white/10 hover:border-white/30 text-white"
              >
                <div className="flex gap-1 mb-6">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} size={16} className="fill-white text-white" />))}</div>
                <p className="text-white/90 mb-6 font-medium leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <span className="font-bold text-white">{testimonial.name}</span>
                  <span className="text-white/60 text-xs font-bold uppercase tracking-wider">{testimonial.treatment}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
 
      <section className="py-24 bg-background-alt border-b border-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-display font-bold text-dark mb-4">Ready for Professional Care?</h2>
            <p className="text-muted mb-10 text-lg">Schedule your visit through our secure medical appointment portal.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/appointments" className="btn-primary text-lg">
                Secure Booking <Calendar size={20} />
              </Link>
              <a href="tel:+256702555000" className="btn-outline text-lg">
                <Phone size={20} /> Call Directory
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}