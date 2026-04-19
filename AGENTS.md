# Agent Guidelines for Kampala Dental Services

## Project Overview
This is a Next.js 14 TypeScript dental clinic website with React 18, Tailwind CSS, and Framer Motion. The project includes multiple pages (home, about, services, branches, contact, appointments) with a consistent design system.

---

## Build & Development Commands

```bash
# Development
npm run dev              # Start development server at http://localhost:3000

# Build
npm run build           # Production build (runs TypeScript, lint, and build)
npm run start           # Start production server after build

# Linting
npm run lint            # Run ESLint on all files
npx next lint           # Alternative lint command
```

**Single Test Execution**: This project does not have a test framework configured. To add tests, install Jest and React Testing Library, then run:
```bash
npm test                # After configuring tests
```

---

## Code Style Guidelines

### TypeScript
- Use explicit types for function parameters and return values when not obvious
- Prefer `interface` for object shapes, `type` for unions/aliases
- Avoid `any` - use `unknown` when type is truly unknown

### Imports
- Use absolute imports with `@/` prefix for project files
- Order imports: external (React, Next, libraries) → internal (@/components, @/app)
- Group: imports → types → component

```typescript
// Good
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import Link from "next/link";

import { Navbar } from "@/components/Navbar";
import type { AppointmentFormData } from "@/types";
```

### Naming Conventions
- **Components**: PascalCase (e.g., `Navbar.tsx`, `WhatsAppButton.tsx`)
- **Files**: kebab-case for non-component files
- **Functions**: camelCase
- **Interfaces**: PascalCase with descriptive names (e.g., `AppointmentFormData`)

### React Patterns
- Use `"use client"` directive for client-side components
- Use functional components with hooks
- Destructure props for clarity

```typescript
// Good
interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="p-6">
      <Icon className="w-8 h-8 text-primary" />
      <h3>{title}</h3>
    </div>
  );
}
```

### Forms & Validation
- Use React Hook Form with Zod for form validation
- Always provide user feedback with clear error messages

```typescript
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
});

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema),
});
```

### Tailwind CSS
- Use the design tokens from `tailwind.config.ts` (primary, accent, etc.)
- Prefer semantic class names over arbitrary values
- Use consistent spacing: `p-4`, `p-6`, `gap-4`, `gap-6`

### Error Handling
- Always handle async operations with try/catch
- Provide user-friendly error messages
- Log errors appropriately for debugging

---

## Design System

### Colors (from tailwind.config.ts)
- **Primary**: `#2563eb` (blue-600)
- **Primary-dark**: `#1d4ed8`
- **Accent**: `#f97316` (orange-500)
- **Secondary**: `#0a0a0a`

### Fonts
- **Headings**: Playfair Display (serif)
- **Body**: DM Sans (sans-serif)

### Components
- Buttons: `.btn-primary`, `.btn-secondary`, `.btn-accent`, `.btn-outline`
- Cards: `.curved-card` for rounded corners
- Section spacing: `.section-padding` (py-16 md:py-20 lg:py-24)

---

## File Structure
```
src/
├── app/
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout with Navbar/Footer
│   ├── globals.css       # Global styles + Tailwind
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── branches/page.tsx
│   ├── contact/page.tsx
│   ├── appointments/page.tsx
│   └── api/appointments/route.ts
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
```

---

## Common Tasks

### Adding a New Page
1. Create `src/app/[page-name]/page.tsx`
2. Add hero section with title and description
3. Include CTA button linking to appointments

### Adding a New Service
1. Add service object to services array in relevant page
2. Use Lucide React icons (import from lucide-react)
3. Follow the existing card pattern

### Modifying Styles
- Tailwind classes: Edit component files
- Global CSS: Edit `src/app/globals.css`
- Design tokens: Edit `tailwind.config.ts`

---

## Important Notes
- The Navbar is fixed with `pt-20` on main content to account for header height
- Footer has a curved SVG divider at the top connecting to white sections
- Use SVG dividers for smooth curved transitions between sections
- Forms submit to `/api/appointments` endpoint which simulates a database