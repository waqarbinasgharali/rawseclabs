
# Global Light / Dark Theme Implementation Plan

We are adding a global Theme Toggle (Light / Dark) for the entire RawSecLabs application while ensuring the navigation bar remains consistent and functional in both themes, without breaking the high-trust cybersecurity aesthetic.

---

## Analysis & Current State
1. **Current Dependencies**: `next-themes: ^0.4.6` is already installed in `package.json`.
2. **Current Layout**: `src/app/layout.tsx` hardcodes `<html lang="en" className="dark scroll-smooth">` and `<body className="bg-[#060911] text-slate-100 ...">`.
3. **Tailwind v4 Setup**: In Tailwind v4 with `@import "tailwindcss";`, dark mode with `class` selector is enabled via `@custom-variant dark (&:where(.dark, .dark *));`.
4. **Current Hardcoded Colors**:
   - `globals.css` defines root CSS variables: `--background: #060911; --foreground: #f3f4f6;` as well as `.glass-panel`, `.cyber-grid`, scrollbars, etc.
   - Various pages and components use hardcoded `bg-[#060911]`, `bg-[#04060c]`, `bg-[#090e1b]`, `text-slate-300`, `text-white`, `border-white/10`.
5. **Navbar requirement**: The user explicitly requested:
   > *"keep nav bar same in both themes"*
   This means the Navbar should retain its sleek cybersecurity dark command-center aesthetic (`#060911` / `#0b101d` glassmorphism, cyan glowing highlights, and crisp contrast) in both light and dark modes, seamlessly anchored at the top.

---

## Design System for Light & Dark Themes

### 1. Palette Architecture
- **Dark Mode (Existing Cyber Defense)**:
  - Base Background: `#060911`
  - Elevated Surface / Cards: `#090e1b` / `#0b101e`
  - Secondary Surface: `#04060c` / `#0d121e`
  - Text Primary: `#f8fafc` (white/slate-50)
  - Text Secondary: `#94a3b8` (slate-400)
  - Borders: `rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.12)`
  - Cyber Highlights: `#00f0ff` (cyan-400), `#10b981` (emerald-400)

- **Light Mode (Clean Technical Enterprise Defense)**:
  - Base Background: `#f8fafc` (slate-50) / `#ffffff`
  - Elevated Surface / Cards: `#ffffff` with subtle borders (`#e2e8f0` / `rgba(0, 0, 0, 0.06)`) and crisp shadow (`0 4px 20px -2px rgba(15, 23, 42, 0.06)`)
  - Secondary Surface (Sections like Stats / FAQ): `#f1f5f9` (slate-100)
  - Text Primary: `#0f172a` (slate-900)
  - Text Secondary: `#475569` (slate-600)
  - Muted Text: `#64748b` (slate-500)
  - Cyber Highlights: `#0284c7` (sky-600) / `#0891b2` (cyan-600) / `#059669` (emerald-600) for high legibility on light surfaces
  - Cyber Grids: Subtle slate grid lines `rgba(15, 23, 42, 0.04)`

### 2. Navbar Persistence
- Navbar remains dark styled with dark dropdown menus, dark mobile drawer, and high-contrast text and actions as requested (`keep nav bar same in both themes`).
- A polished theme toggle switch button (Sun / Moon) will be added to the Navbar header (both desktop CTA area and mobile drawer) with smooth transition animation and tooltip.

---

## Proposed Changes

### Theme Provider & Toggle
#### [NEW] [ThemeProvider.tsx](file:///home/waqar/CascadeProjects/rawseclabs/src/components/theme/ThemeProvider.tsx)
- Wrap `next-themes` `ThemeProvider` with `attribute="class"`, `defaultTheme="dark"`, `enableSystem={false}`.

#### [NEW] [ThemeToggle.tsx](file:///home/waqar/CascadeProjects/rawseclabs/src/components/theme/ThemeToggle.tsx)
- Create a client toggle button with `useTheme()`.
- Show Sun / Moon icons with animated icon switch, aria-label, and tooltip. Handles mounting state to prevent SSR hydration mismatch.

---

### Layout & Global Styles
#### [MODIFY] [layout.tsx](file:///home/waqar/CascadeProjects/rawseclabs/src/app/layout.tsx)
- Wrap application with `ThemeProvider`.
- Replace hardcoded `className="bg-[#060911] text-slate-100"` on `body` with dynamic theme background and foreground variables, or `bg-slate-50 text-slate-900 dark:bg-[#060911] dark:text-slate-100`.

#### [MODIFY] [globals.css](file:///home/waqar/CascadeProjects/rawseclabs/src/app/globals.css)
- Configure `@custom-variant dark (&:where(.dark, .dark *));`.
- Set light `:root` variables:
  - `--background: #f8fafc;`
  - `--foreground: #0f172a;`
  - `--card-bg: rgba(255, 255, 255, 0.85);`
  - `--card-border: rgba(15, 23, 42, 0.08);`
  - Light-mode `.cyber-grid`, `.radial-glow`, scrollbars, and card styles.
- Set `.dark` variables:
  - `--background: #060911;`
  - `--foreground: #f3f4f6;`
  - `--card-bg: rgba(13, 18, 30, 0.75);`
  - `--card-border: rgba(255, 255, 255, 0.08);`

---

### Navigation Bar
#### [MODIFY] [Navbar.tsx](file:///home/waqar/CascadeProjects/rawseclabs/src/components/layout/Navbar.tsx)
- Embed `ThemeToggle` next to the 24/7 Incident Triage and CTA buttons on desktop.
- Embed `ThemeToggle` in the mobile drawer.
- Preserve existing dark styling for the navbar, mega-menus, and mobile drawers so the navbar looks identical across both themes.

---

### Page Components (Light / Dark Theme Adaptations)
Update page components and sections where dark background and white text were previously hardcoded:
- [HeroSection.tsx](file:///home/waqar/CascadeProjects/rawseclabs/src/components/home/HeroSection.tsx)
  - Adapt section background: `bg-slate-50 dark:bg-[#060911]`
  - Adapt text headers, subheadings, announcements, trust badges
  - Live Threat Terminal Simulation: Keep terminal dark like an actual shell, or nicely framed in light mode
- [StatsTicker.tsx](file:///home/waqar/CascadeProjects/rawseclabs/src/components/home/StatsTicker.tsx)
  - `bg-slate-100 dark:bg-[#04060c]`, cards `bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/5`, text `text-slate-900 dark:text-white`
- [ServiceMatrix.tsx](file:///home/waqar/CascadeProjects/rawseclabs/src/components/home/ServiceMatrix.tsx)
  - Section `bg-slate-50 dark:bg-[#050811]`, cards `bg-white dark:bg-[#090e1b]/80 border-slate-200 dark:border-white/10`, tabs, titles
- [InteractiveAssessment.tsx](file:///home/waqar/CascadeProjects/rawseclabs/src/components/home/InteractiveAssessment.tsx)
  - Scoping engine container, buttons, results card styled for both light and dark modes
- [FaqSection.tsx](file:///home/waqar/CascadeProjects/rawseclabs/src/components/home/FaqSection.tsx)
  - Accordion items: `bg-white dark:bg-white/[0.02]`, active items `bg-slate-50 dark:bg-[#0a0f1d]`, border `border-slate-200 dark:border-white/5`
- [CtaBanner.tsx](file:///home/waqar/CascadeProjects/rawseclabs/src/components/home/CtaBanner.tsx)
  - Banner container with rich contrast in both light and dark modes
- [Footer.tsx](file:///home/waqar/CascadeProjects/rawseclabs/src/components/layout/Footer.tsx)
  - Adapt footer to support light & dark backgrounds and border styles or keep dark as appropriate
- Subpages:
  - `src/app/services/ServicesClient.tsx`
  - `src/app/services/[category]/page.tsx`
  - `src/app/services/[category]/[slug]/page.tsx`
  - `src/app/about/page.tsx`
  - `src/app/contact/page.tsx`
  - `src/app/assessment/page.tsx`
  - `src/app/industries/page.tsx`, `src/app/industries/[slug]/page.tsx`
  - `src/app/resources/page.tsx`
  - `src/app/blog/page.tsx`
  - `src/app/products/page.tsx`
  - `src/app/rsl-signals/page.tsx`

---

## Verification Plan

### Automated Checks
- Run `npm run build` or `next build` to verify there are zero TypeScript compilation errors or missing exports.
- Run `npx eslint` to verify code quality.

### Manual / Browser Verification
- Toggle between Light and Dark mode using the new button in the Navbar.
- Verify persistence: Reload the page and ensure theme preference remains in `localStorage`.
- Verify Navbar: Confirm Navbar remains the same dark command-center aesthetic across both themes as requested.
- Inspect contrast: Verify all headings, text, cards, borders, badges, buttons, and form inputs are clearly visible and legible in light theme.
