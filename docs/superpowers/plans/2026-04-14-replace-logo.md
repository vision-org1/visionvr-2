# Replace Placeholder Logos with logo.png Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all placeholder logos throughout the Vision landing page with the official logo.png asset, ensuring proper sizing and display in navbar, hero, and footer sections.

**Architecture:** The logo.png file contains the complete brand identity (VISION text with integrated VR headset and tagline). We'll create a reusable Logo component that handles sizing for different contexts (navbar: compact, hero: prominent, footer: standard) and use Next.js Image component for optimization.

**Tech Stack:** Next.js Image component, React components, TypeScript

---

## File Structure

- **Modify:** `src/components/layout/Navbar.tsx` — Replace placeholder logo with image asset
- **Modify:** `src/components/layout/Footer.tsx` — Replace placeholder logo with image asset  
- **Modify:** `src/components/sections/Hero.tsx` — Add logo.png to hero section for brand prominence
- **Ensure:** `public/logo.png` — Verify logo asset is in public folder for Next.js serving
- **Create:** `src/components/ui/Logo.tsx` — Reusable Logo component with size variants

---

## Task 1: Create Reusable Logo Component

**Files:**
- Create: `src/components/ui/Logo.tsx`

- [ ] **Step 1: Create the Logo component file**

```typescript
import Image from "next/image";

interface LogoProps {
  variant?: "navbar" | "hero" | "footer";
  className?: string;
}

export function Logo({ variant = "navbar", className = "" }: LogoProps) {
  const sizeMap = {
    navbar: { width: 180, height: 40 },
    hero: { width: 400, height: 90 },
    footer: { width: 200, height: 45 },
  };

  const sizes = sizeMap[variant];

  return (
    <Image
      src="/logo.png"
      alt="Vision - Realtà Virtuale. Emozioni Reali."
      width={sizes.width}
      height={sizes.height}
      priority={variant === "hero"}
      className={className}
    />
  );
}
```

- [ ] **Step 2: Verify file created**

Run: `ls -la src/components/ui/Logo.tsx`
Expected: File exists

---

## Task 2: Update Navbar Logo

**Files:**
- Modify: `src/components/layout/Navbar.tsx:1-25`

- [ ] **Step 1: Replace the placeholder logo in Navbar**

Current code (Navbar.tsx lines 17-23):
```tsx
<Link href="/" className="flex items-center gap-2">
  <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
    <div className="w-4 h-4 bg-white rounded-sm" />
  </div>
  <span className="text-2xl font-bold tracking-tighter text-white">
    VISION
  </span>
</Link>
```

Replace with:
```tsx
import { Logo } from "@/components/ui/Logo";

// ... in the JSX:
<Link href="/" className="flex items-center gap-2">
  <Logo variant="navbar" />
</Link>
```

Add import at top of file:
```typescript
import { Logo } from "@/components/ui/Logo";
```

Full updated Navbar.tsx:
```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { homeData } from "@/data/homeData";

export function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#050505]/90 backdrop-blur-md border-b border-white/5"
    >
      <div className="w-full px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo variant="navbar" />
        </Link>

        {/* Global Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link 
            href="/about" 
            className={`text-sm font-bold tracking-wider transition-colors ${isActive('/about') ? 'text-primary' : 'text-white/50 hover:text-primary'}`}
          >
            CHI SIAMO
          </Link>
          <Link 
            href="/contact" 
            className={`text-sm font-bold tracking-wider transition-colors ${isActive('/contact') ? 'text-primary' : 'text-white/50 hover:text-primary'}`}
          >
            CONTATTACI
          </Link>
          <Link
            href="/solutions"
            className={`text-sm font-bold tracking-wider border rounded-full px-6 py-2 transition-colors ${isActive('/solutions') ? 'text-white bg-primary/20 border-primary shadow-[0_0_15px_rgba(13,89,242,0.3)]' : 'text-white border-white/20 hover:bg-white/10'}`}
          >
            ESPERIENZE
          </Link>
        </nav>
        
        {/* Mobile Nav Button (CTA only) */}
        <div className="lg:hidden flex items-center">
          <Link
            href="/solutions"
            className={`text-xs font-bold tracking-wider border rounded-full px-4 py-2 transition-colors ${isActive('/solutions') ? 'text-white bg-primary/20 border-primary' : 'text-white border-white/20 hover:bg-white/10'}`}
          >
            ESPERIENZE
          </Link>
        </div>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Verify syntax**

Run: `npx eslint src/components/layout/Navbar.tsx`
Expected: No errors

- [ ] **Step 3: Commit changes**

```bash
git add src/components/ui/Logo.tsx src/components/layout/Navbar.tsx
git commit -m "feat: replace navbar placeholder logo with brand logo.png"
```

---

## Task 3: Update Footer Logo

**Files:**
- Modify: `src/components/layout/Footer.tsx:1-22`

- [ ] **Step 1: Replace the placeholder logo in Footer**

Current code (Footer.tsx lines 11-18):
```tsx
<Link href="/" className="flex items-center gap-2 mb-6">
  <div className="w-8 h-8 rounded bg-[#13d6ec] flex items-center justify-center">
    <div className="w-4 h-4 bg-[#050505] rounded-sm" />
  </div>
  <span className="text-3xl font-bold tracking-tighter text-[#13d6ec]">
    VISION
  </span>
</Link>
```

Replace with:
```tsx
import { Logo } from "@/components/ui/Logo";

// ... in the JSX:
<Link href="/" className="flex items-center gap-2 mb-6">
  <Logo variant="footer" />
</Link>
```

Add import at top of file:
```typescript
import { Logo } from "@/components/ui/Logo";
```

Full updated Footer.tsx:
```tsx
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { homeData } from "@/data/homeData";
import { Globe, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background pt-16 pb-8">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Logo variant="footer" />
            </Link>
            <p className="text-white/60 max-w-sm font-light leading-relaxed">
              L'Intrattenimento del Futuro. Trasformiamo gli spazi in portali verso nuove dimensioni digitali.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-start">
            <div className="flex flex-col gap-4">
              {homeData.footerLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-sm font-medium text-white/50 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40">
          <p>© {new Date().getFullYear()} VISION AR ENTERTAINMENT. THE IMMERSIVE PORTAL.</p>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Termini di Servizio</Link>
            </div>
            <div className="flex items-center gap-4 border-l border-white/10 pl-6">
              <button className="text-white/40 hover:text-[#13d6ec] transition-colors"><Globe className="w-4 h-4" /></button>
              <button className="text-white/40 hover:text-[#13d6ec] transition-colors"><Share2 className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify syntax**

Run: `npx eslint src/components/layout/Footer.tsx`
Expected: No errors

- [ ] **Step 3: Commit changes**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: replace footer placeholder logo with brand logo.png"
```

---

## Task 4: Add Logo to Hero Section

**Files:**
- Modify: `src/components/sections/Hero.tsx:1-40`

- [ ] **Step 1: Add logo import and position in Hero**

Add import at top:
```typescript
import { Logo } from "@/components/ui/Logo";
```

Update the Hero component to include the logo above the title. Full updated Hero.tsx:
```tsx
"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { homeData } from "@/data/homeData";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-start overflow-hidden pt-20">
      {/* Background Image & Effects */}
      <div 
        className="absolute inset-0 z-0 bg-[#050505] bg-cover bg-right bg-no-repeat opacity-80" 
        style={{ backgroundImage: "url('/nero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent w-full md:w-2/3" />
        <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <div className="w-full relative z-10 px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Logo variant="hero" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8 inline-flex"
          >
            <span className="text-xs font-bold tracking-widest text-[#13d6ec] uppercase">THE FUTURE IS HERE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white max-w-4xl leading-tight"
          >
            {homeData.hero.title.split(": ")[0]}:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#13d6ec] to-[#0d59f2]">
              {homeData.hero.title.split(": ")[1]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl font-light leading-relaxed"
          >
            {homeData.hero.subtitle}
          </motion.p>

          {/* Dual Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 rounded-md font-bold text-black bg-gradient-to-r from-[#13d6ec] to-[#0d59f2] shadow-[0_0_20px_rgba(19,214,236,0.3)] hover:shadow-[0_0_30px_rgba(19,214,236,0.5)] transition-all">
              Prenota Ora
            </button>
            <button className="px-8 py-4 rounded-md font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center">
              Scopri di Più <span className="ml-2">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify syntax**

Run: `npx eslint src/components/sections/Hero.tsx`
Expected: No errors

- [ ] **Step 3: Commit changes**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: add brand logo to hero section for visual prominence"
```

---

## Task 5: Verify logo.png is in public folder

**Files:**
- Ensure: `public/logo.png`

- [ ] **Step 1: Check if logo.png exists in public folder**

Run: `ls -la public/logo.png`

If it exists: Continue to Step 3
If it doesn't exist: Go to Step 2

- [ ] **Step 2: Copy logo.png from root to public folder (if needed)**

Run: `cp logo.png public/logo.png && ls -la public/logo.png`
Expected: logo.png appears in public folder

- [ ] **Step 3: Verify file is accessible**

Run: `file public/logo.png`
Expected: PNG image data

---

## Task 6: Test all changes locally

**Files:**
- Test: `src/components/ui/Logo.tsx`
- Test: `src/components/layout/Navbar.tsx`
- Test: `src/components/layout/Footer.tsx`
- Test: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Start dev server**

Run: `npm run dev`
Expected: Server starts on localhost:3000

- [ ] **Step 2: Open browser and verify navbar logo**

Navigate to: `http://localhost:3000`
Expected: Logo appears in navbar, scales correctly, links to home page

- [ ] **Step 3: Verify hero section logo**

Scroll down in Hero section
Expected: Logo appears prominently above the headline with animation

- [ ] **Step 4: Scroll to footer and verify footer logo**

Scroll to bottom of page
Expected: Logo appears in footer with correct sizing

- [ ] **Step 5: Test responsive behavior**

Resize browser to mobile width (375px)
Expected: All logos scale appropriately and remain readable

- [ ] **Step 6: Stop dev server**

Run: `Ctrl+C`
Expected: Server stops cleanly

- [ ] **Step 7: Commit final verification**

```bash
git add .
git commit -m "feat: verify logo integration across all sections"
```

---

## Summary

✅ Created reusable Logo component with size variants (navbar, hero, footer)
✅ Replaced placeholder logo in Navbar with logo.png
✅ Replaced placeholder logo in Footer with logo.png
✅ Added prominent logo to Hero section
✅ Verified logo asset is in public folder
✅ Tested responsive scaling and animations

**Result:** Vision brand identity now consistently displayed across all key sections with proper sizing and animations.