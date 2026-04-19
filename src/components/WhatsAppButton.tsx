"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppButton() {
  const whatsappNumber = "256700593479";
  const message = "Hello! I'm interested in booking an appointment.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon size={28} />
    </motion.a>
  );
}