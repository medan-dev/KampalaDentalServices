"use client";

import { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, Clock, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";
import { useSearchParams } from "next/navigation";

const appointmentSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  branch: z.string().min(1, "Please select a branch"),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  notes: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const branches = [
  { id: "najjera", name: "Najjera Road Branch" },
  { id: "bwaise", name: "Bwaise Branch" },
  { id: "gayaza", name: "Gayaza Road Branch" },
];

const services = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Orthodontics",
  "Dental Implants",
  "Pediatric Dentistry",
  "Root Canal Treatment",
  "Crowns & Bridges",
  "Teeth Cleaning",
];

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

function AppointmentsForm() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      branch: searchParams.get("branch") || "",
    },
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  return (
    <>
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 bg-green-50 border border-green-200 rounded-[2rem] flex items-start gap-4"
        >
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-green-800">
              Appointment Request Submitted!
            </h3>
            <p className="text-green-700 text-sm mt-1">
              Thank you for booking with Kampala Dental Services. Our team will
              contact you shortly to confirm your appointment.
            </p>
          </div>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 bg-red-50 border border-red-200 rounded-[2rem] flex items-start gap-4"
        >
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-red-800">Something went wrong</h3>
            <p className="text-red-700 text-sm mt-1">
              Please try again or contact us directly at +256 700 593 479.
            </p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-dark mb-2">
              Full Name *
            </label>
            <input
              {...register("fullName")}
              type="text"
              className="w-full px-6 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-dark mb-2">
              Phone Number *
            </label>
            <input
              {...register("phone")}
              type="tel"
              className="w-full px-6 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              placeholder="+256 XXX XXX XXX"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-dark mb-2">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                Select Branch *
              </span>
            </label>
            <select
              {...register("branch")}
              className="w-full px-6 py-4 border border-gray-300 rounded-[2rem] focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white font-medium"
            >
              <option value="">Choose a branch</option>
              {branches.map((branch) => (
                <option key={branch.id} value={branch.id}>
                  {branch.name}
                </option>
              ))}
            </select>
            {errors.branch && (
              <p className="mt-1 text-sm text-red-600">{errors.branch.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-dark mb-2">
              Service Type *
            </label>
            <select
              {...register("service")}
              className="w-full px-6 py-4 border border-gray-300 rounded-[2rem] focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white font-medium"
            >
              <option value="">Choose a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-dark mb-2">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                Preferred Date *
              </span>
            </label>
            <input
              {...register("date")}
              type="date"
              min={getMinDate()}
              className="w-full px-6 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-dark mb-2">
              <span className="flex items-center gap-2">
                <Clock size={16} />
                Preferred Time *
              </span>
            </label>
            <select
              {...register("time")}
              className="w-full px-6 py-4 border border-gray-300 rounded-[2rem] focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white font-medium"
            >
              <option value="">Choose a time</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            {errors.time && (
              <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-dark mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            {...register("notes")}
            rows={4}
            className="w-full px-6 py-4 border border-gray-300 rounded-[2rem] focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
            placeholder="Any special requests or information we should know..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 bg-accent text-white font-bold text-lg rounded-full hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xl shadow-accent/20"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Phone size={20} />
              Book Appointment
            </>
          )}
        </button>
      </form>
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-12 bg-gray-200 rounded-lg" />
      <div className="h-12 bg-gray-200 rounded-lg" />
      <div className="h-12 bg-gray-200 rounded-lg" />
      <div className="h-12 bg-gray-200 rounded-lg" />
    </div>
  );
}

export default function AppointmentsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-dark/90" />
        </div>
        <div className="page-hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-secondary font-bold text-sm uppercase tracking-wider">Book Online</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mt-4 mb-6">
              Schedule Your <span className="text-secondary">Visit</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Take the first step towards a healthier, brighter smile. 
              Book an appointment at a branch and time that works best for you.
            </p>
          </motion.div>
        </div>
        <SectionDivider color="#ffffff" position="bottom" />
      </section>

      <section className="section-padding bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="curved-card p-8 md:p-12 bg-neutral-light/20 border-none shadow-inner">
            <Suspense fallback={<LoadingFallback />}>
              <AppointmentsForm />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F7F7F9] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="curved-card p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Phone className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-secondary mb-3">
                Call Us
              </h3>
              <p className="text-neutral text-sm mb-6 leading-relaxed">
                Prefer to book over the phone? Our team is available.
              </p>
              <a
                href="tel:+256700593479"
                className="text-primary font-bold text-lg hover:underline"
              >
                +256 700 593 479
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="curved-card p-8 text-center group bg-primary/5 border-primary/20"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                <svg className="w-8 h-8 text-green-600 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-secondary mb-3">
                WhatsApp
              </h3>
              <p className="text-neutral text-sm mb-6 leading-relaxed">
                Connect with our team for quick booking via WhatsApp.
              </p>
              <a
                href="https://wa.me/256702555000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 font-bold text-lg hover:underline"
              >
                Chat Now
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="curved-card p-8 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Calendar className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-secondary mb-3">
                Visit Us
              </h3>
              <p className="text-neutral text-sm mb-6 leading-relaxed">
                You can also book in person at any branch.
              </p>
              <a
                href="/branches"
                className="text-primary font-bold text-lg hover:underline"
              >
                View Branches
              </a>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}