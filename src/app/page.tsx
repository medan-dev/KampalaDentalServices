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
      {/* Hero Section - Full Width AI Image Background */}
      {/* We add -mt-20 to negate the pt-20 on the <main> layout, forcing the hero image to the absolute top edge of the browser for a flush fit with the floating header */}
      <section className="relative min-h-screen -mt-20 flex flex-col items-center justify-center overflow-hidden text-center pb-20">
        <div className="absolute inset-0">
          <img 
            src="/hero-main.jpg" 
            alt="Kampala Dental Services Professional Clinic" 
            className="w-full h-full object-cover brightness-[0.8] contrast-[1.1]"
          />
          {/* Overlay removed per user request */}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center w-full"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-8 hero-shadow">
              Eat Well <br className="hidden md:block" />
              <span className="text-secondary">Smile</span> Good
            </h1>

            <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto font-medium leading-relaxed hero-shadow">
              Experience world-class dental care in Uganda. Our expert team combines advanced technology with genuine compassion in a premium, institutional setting.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Link href="/appointments" className="btn-primary text-lg px-10 py-4 border border-primary/20">
                Book Appointment <ArrowRight size={20} />
              </Link>
              <Link href="/services" className="px-10 py-4 bg-white/10 text-white font-semibold  hover:bg-white/20 transition-all border border-white/20">
                Our Services
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-white text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-primary" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-primary" />
                <span>Same-Day Emergency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-primary" />
                <span>Advanced Surgical Suite</span>
              </div>
            </div>
          </motion.div>
        </div>

        
      </section>

      <section className="py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="text-center p-6 bg-primary/5 "
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background-alt relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl font-display font-bold text-secondary mt-2">Specialized Care for Your Smile</h2>
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
                className="p-8 bg-white rounded-[32px] transition-all group curved-card border border-gray-100"
              >
                <div className="w-14 h-14 bg-primary/10  flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-secondary mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F7F9] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl font-display font-bold text-secondary mt-2">Your Smile, Our Priority</h2>
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
                className="text-center p-8 bg-white  border border-gray-100 curved-card transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10  flex items-center justify-center">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-secondary mb-3">{reason.title}</h3>
                <p className="text-gray-500 text-sm">{reason.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
      </section>
 
      {/* Branches Section */}
      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Our Locations</span>
            <h2 className="text-4xl font-display font-bold text-secondary mt-2">Visit Us Near You</h2>
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
                className="p-6 bg-primary/5 rounded-[2.5rem] hover:bg-primary/10 transition-colors curved-card border border-primary/10"
              >
                <div className="w-12 h-12 bg-primary  flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-secondary mb-2">{branch.name} Branch</h3>
                <p className="text-gray-500 text-sm mb-4">{branch.address}</p>
                <a href={`tel:${branch.phone}`} className="flex items-center gap-2 text-primary font-medium hover:underline">
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
 
      <section className="section-padding bg-[#0D7377] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-white/80 font-bold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl font-display font-bold text-white mt-2">What Our Patients Say</h2>
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
                className="p-6 bg-primary-dark/80 rounded-[32px] border border-white/20 hover:bg-primary-dark transition-colors"
              >
                <div className="flex gap-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />))}</div>
                <p className="text-white mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center justify-between pt-4">
                  <span className="font-semibold text-white">{testimonial.name}</span>
                  <span className="text-white/60 text-sm">{testimonial.treatment}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
      </section>
 
      <section className="section-padding bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-display font-bold text-secondary mb-4">Ready for Your Perfect Smile?</h2>
            <p className="text-gray-500 mb-8">Book your appointment today and experience quality dental care in Uganda.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/appointments" className="btn-primary text-lg px-8 py-4 curved-card">
                Book Now <Calendar size={20} />
              </Link>
              <a href="tel:+256702555000" className="btn-outline text-lg px-8 py-4 curved-card">
                <Phone size={20} /> Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}