import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});
 
export const metadata: Metadata = {
  metadataBase: new URL("https://kampala-dental-services.vercel.app"),
  title: {
    default: "Best Dental Clinic in Kampala | Kampala Dental Services Uganda",
    template: "%s | Best Dentists in Kampala, Uganda"
  },
  description: "Ranked the Best Dental Clinic in Kampala, Uganda. We provide premium teeth cleaning, braces, dental implants, root canals, and emergency dentist services.",
  keywords: ["Best Dental Clinic Kampala", "Dentist in Kampala Uganda", "Teeth Cleaning Kampala", "Braces Uganda", "Dental Implants Uganda", "Teeth Whitening Kampala", "Emergency Dentist Kampala", "Dental Surgeon Uganda", "Kampala Dental Services", "Top Dentist Near Me"],
  authors: [{ name: "Kampala Dental Services" }],
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://kampala-dental-services.vercel.app",
    siteName: "Best Dental Clinic in Kampala - Kampala Dental Services",
    title: "Best Dental Clinic in Kampala | Top Dentists in Uganda",
    description: "Ranked the Best Dental Clinic in Kampala, Uganda. Experience world-class dental care, braces, and implants. Book your appointment today.",
    images: [{ url: "/clinic-exterior.jpg", width: 1200, height: 630, alt: "Best Dental Clinic in Kampala - Exterior" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dental Clinic in Kampala | Kampala Dental Services",
    description: "Ranked the Best Dental Clinic in Kampala, Uganda. Emergency dentists available.",
    images: ["/clinic-exterior.jpg"],
  },
  alternates: {
    canonical: "https://kampala-dental-services.vercel.app"
  },
  icons: {
    icon: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Kampala Dental Services",
  "image": "https://kampala-dental-services.vercel.app/clinic-exterior.jpg",
  "@id": "https://kampala-dental-services.vercel.app",
  "url": "https://kampala-dental-services.vercel.app",
  "telephone": "+256700593479",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Najjera Road",
    "addressLocality": "Kampala",
    "addressCountry": "UG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 0.3476,
    "longitude": 32.5825
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "16:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/KampalaDentalServices",
    "https://www.instagram.com/KampalaDentalServices"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <body className="min-h-screen flex flex-col font-body bg-background text-dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}