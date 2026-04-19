# Kampala Dental Services - Website Specification

## Project Overview
- **Project Name**: Kampala Dental Services Website
- **Type**: Healthcare Web Application (Next.js)
- **Core Functionality**: Premium dental clinic website with appointment booking, branch locations, and service showcase
- **Target Users**: Patients seeking dental care in Uganda

---

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod

---

## UI/UX Specification

### Color Palette
```css
--primary: #0D7377        /* Teal - Trust, medical */
--primary-dark: #095456   /* Darker teal */
--secondary: #14FFEC      /* Bright cyan accent */
--accent: #FF6B35         /* Warm orange - CTAs */
--neutral-dark: #1A1A2E   /* Dark navy */
--neutral: #4A4A68        /* Muted purple-gray */
--neutral-light: #F7F7F9  /* Off-white background */
--white: #FFFFFF
--success: #22C55E
--error: #EF4444
```

### Typography
- **Headings**: "Playfair Display" (elegant, medical credibility)
- **Body**: "DM Sans" (clean, modern readability)
- **Sizes**:
  - H1: 48px/56px
  - H2: 36px/44px
  - H3: 24px/32px
  - Body: 16px/24px
  - Small: 14px/20px

### Spacing System
- Base unit: 4px
- Sections: 80px vertical padding
- Cards: 24px padding
- Components: 16px gaps

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## Page Specifications

### 1. Home Page

#### Hero Section
- Full-width gradient background (neutral-dark to primary)
- Left side: Headline + subtext + CTA buttons
- Right side: Simple 3D tooth icon (CSS/SVG, not heavy Three.js)
- Floating dental elements animation (subtle)

#### Services Overview (Home)
- 4-card grid showing main services
- Icon + title + short description
- Hover: subtle lift effect

#### Why Choose Us
- 3-column layout with icons
- Points: Experienced Dentists, Modern Equipment, Patient-Centered Care

#### Testimonials
- Carousel with patient quotes
- Star ratings
- Patient name + treatment

#### CTA Sections
- "Book Your Smile" - appointment prompt
- Emergency contact banner

### 2. About Page
- Hero with clinic image
- Mission statement
- Vision statement
- Values (Integrity, Excellence, Compassion)
- Team section (dentist profiles)

### 3. Services Page
- Grid of 8 service cards:
  1. General Dentistry (checkups, fillings, extractions)
  2. Cosmetic Dentistry (whitening, veneers)
  3. Orthodontics (braces, aligners)
  4. Dental Implants
  5. Pediatric Dentistry
  6. Root Canal Treatment
  7. Dental Crowns & Bridges
  8. Teeth Cleaning & Prevention

### 4. Branches Page
- 3 branch cards, each with:
  - Branch name + address
  - Embedded Google Map
  - Phone (click-to-call)
  - WhatsApp link
  - Opening hours
  - "Book at this branch" button

#### Branch Details:
1. **Najjera Road Branch**
   - Address: Najjera Road, Kampala
   - Phone: +256 702 555 000

2. **Bwaise Branch**
   - Address: Near Semwogerere/Adweya, Bwaise, Kampala
   - Phone: +256 702 555 111

3. **Gayaza Road Branch**
   - Address: Near Akamwesi, Opposite Adweya World, Gayaza Road
   - Phone: +256 702 555 222

### 5. Appointments Page
- Branch selector
- Service selector
- Date picker
- Time slot selector
- Full name input
- Phone number input
- Notes textarea
- Submit button with loading state

### 6. Contact Page
- Contact form (name, email, message)
- Direct phone contacts
- WhatsApp links
- Social media links
- Office hours

---

## Components

### Navigation
- Sticky header
- Logo (left)
- Nav links (center): Home, About, Services, Branches, Contact
- "Book Appointment" CTA button (right)
- Mobile: hamburger menu

### Floating WhatsApp Button
- Fixed position bottom-right
- Green WhatsApp icon
- Hover: scale up

### Footer
- 4-column layout: About, Quick Links, Services, Contact
- Social icons
- Copyright

### Reusable Components
- Button (primary, secondary, outline variants)
- Card (service, branch, testimonial)
- FormInput (with label, error state)
- SectionHeading
- PageHero

---

## Animations (Framer Motion)

### Page Load
- Fade-in from bottom (y: 20 → 0)
- Stagger children: 0.1s delay

### Scroll Animations
- Elements fade-in on scroll into view

### Hover Effects
- Buttons: scale 1.02
- Cards: translateY -4px, shadow increase
- Links: underline slide

---

## API Integration

### Appointment Booking Endpoint
- POST /api/appointments
- Body: { name, phone, branch, service, date, time, notes }
- Response: { success: boolean, message: string }

---

## SEO Requirements
- Meta titles: "Kampala Dental Services | Best Dentists in Uganda"
- Meta descriptions for each page
- OpenGraph tags
- Semantic HTML structure

---

## Acceptance Criteria
- [x] All 6 pages implemented and responsive
- [x] Navigation works across all pages
- [x] Appointment form validates and shows success/error states
- [x] All 3 branches display with correct information
- [x] WhatsApp button functional
- [x] Forms have proper validation (Zod + React Hook Form)
- [x] Animations are smooth and purposeful (Framer Motion)
- [x] No console errors
- [x] Fast loading (LCP < 2.5s)