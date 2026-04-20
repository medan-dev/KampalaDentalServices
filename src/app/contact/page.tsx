"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SectionDivider } from "@/components/SectionDivider";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const branches = [
  { name: "Najjera Road Branch", phone: "+256 700 593 479", address: "Najjera Road, Kampala" },
  { name: "Bwaise Branch", phone: "+256 775 953 799", address: "Near Semwogerere/Adweya, Bwaise" },
  { name: "Gayaza Road Branch", phone: "+256 700 593 479", address: "Near Akamwesi, Gayaza Road" },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // For demo, always succeed
    setSubmitStatus("success");
    reset();
    setIsSubmitting(false);
  };

  return (
    <>
      <section className="page-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/clinic-interior.jpg" 
            alt="Kampala Dental Services Reception" 
            className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]"
          />
          {/* Overlay removed per user request */}
        </div>
        <div className="page-hero-content relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-block bg-primary text-white px-8 py-2 mb-4">
              <span className="text-white/80 font-bold text-sm uppercase tracking-wider">Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              <span className="bg-secondary text-primary-dark px-4 py-1">Get In</span> <br/>
              <span className="bg-white text-primary-dark px-4 py-1 mt-2 inline-block">Touch Today</span>
            </h1>
            <div className="bg-neutral-dark/90 p-6 max-w-3xl mx-auto border-l-4 border-secondary">
              <p className="text-white text-lg leading-relaxed">
                Have a question or need more information? We'd love to hear from you.
                Reach out through any of our channels.
              </p>
            </div>
          </motion.div>
        </div>
        <SectionDivider color="#ffffff" position="bottom" />
      </section>

      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2.5rem] p-8 md:p-12 bg-neutral-light/30 border-none"
            >
              <h2 className="text-3xl font-display font-bold text-primary mb-8">
                Send Us a Message
              </h2>
              
              {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 p-4 bg-green-50 border border-green-200 rounded-[2rem] flex items-center gap-3"
                  >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 font-medium">Message sent successfully!</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 font-medium">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-6 py-4 bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 font-medium">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded-[2rem] focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                    placeholder="How can we help you today?"
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 font-medium">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-accent py-4 text-lg rounded-full border border-accent/20 transition-all font-bold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-primary mb-8">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                  <div className="flex items-start gap-4 p-5 rounded-[2rem] hover:bg-neutral-light transition-colors group">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <Phone className="w-7 h-7 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-primary text-lg">Phone</h4>
                      <p className="text-neutral text-sm mb-2">Main line for all branches:</p>
                      <div className="space-y-1">
                        {branches.map((b) => (
                          <a
                            key={b.name}
                            href={`tel:${b.phone}`}
                            className="block text-primary font-bold hover:underline"
                          >
                            {b.phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-[2rem] hover:bg-neutral-light transition-colors group">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <Mail className="w-7 h-7 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-primary text-lg">Email</h4>
                      <a
                        href="mailto:info@kampaladentalservices.com"
                        className="text-primary font-bold hover:underline"
                      >
                        info@kampaladentalservices.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-[2rem] hover:bg-neutral-light transition-colors group">
                    <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 group-hover:text-white transition-all">
                      <WhatsAppIcon className="w-7 h-7 text-green-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-primary text-lg">WhatsApp</h4>
                      <a
                        href="https://wa.me/256702555000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 font-bold hover:underline"
                      >
                        Chat with our team
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 rounded-[2rem] hover:bg-neutral-light transition-colors group">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <Clock className="w-7 h-7 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-primary text-lg">Working Hours</h4>
                      <p className="text-neutral font-medium">
                        Mon - Fri: 8:00 AM - 6:00 PM
                      </p>
                      <p className="text-neutral font-medium">
                        Sat: 9:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-2xl font-display font-bold text-primary mb-6">
                  Visit Our Branches
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                  {branches.map((branch, index) => (
                    <div key={index} className="p-6 bg-neutral-light/50 rounded-[2rem] border border-gray-100 hover:border-primary/30 transition-colors group">
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin size={18} className="text-primary" />
                        <h4 className="font-bold text-primary group-hover:text-primary-dark transition-colors">{branch.name}</h4>
                      </div>
                      <p className="text-neutral text-sm mb-2 ml-7">{branch.address}</p>
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-primary text-sm font-bold hover:underline ml-7"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <SectionDivider color="#F7F7F9" position="bottom" />
      </section>

      <section className="section-padding bg-[#F7F7F9] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold text-primary mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-neutral mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Our team is ready to help with any dental emergency. Call us or send a WhatsApp message for a quick response.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+256702555000"
                className="btn-primary text-lg px-8 py-4 rounded-full border border-primary/20 transition-all"
              >
                <Phone size={20} />
                Call +256 700 593 479
              </a>
              <a
                href="https://wa.me/256700593479"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all border border-green-600"
              >
                <WhatsAppIcon size={20} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}