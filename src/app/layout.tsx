import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
 
export const metadata: Metadata = {
  metadataBase: new URL("https://kampala-dental-services.vercel.app"),
  title: {
    default: "Kampala Dental Services | Best Dentists in Uganda",
    template: "%s | Kampala Dental Services"
  },
  description: "Premium dental care in Uganda. Providing world-class general dentistry, cosmetic surgery, orthodontics, and implants in Kampala since 2008.",
  keywords: ["Dentist Kampala", "Dental Clinic Uganda", "Teeth Cleaning Kampala", "Braces Uganda", "Dental Implants Uganda", "Teeth Whitening Kampala", "Emergency Dentist Kampala"],
  authors: [{ name: "Kampala Dental Services" }],
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://kampala-dental-services.vercel.app",
    siteName: "Kampala Dental Services",
    title: "Kampala Dental Services | Best Dentists in Uganda",
    description: "Experience world-class dental care in Uganda. Book your appointment today for a healthy, beautiful smile.",
    images: [{ url: "/clinic-exterior.jpg", width: 1200, height: 630, alt: "Kampala Dental Services Clinic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kampala Dental Services | Best Dentists in Uganda",
    description: "Premium dental care in Uganda. Expert dentistry services in Kampala.",
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
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col font-body">
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