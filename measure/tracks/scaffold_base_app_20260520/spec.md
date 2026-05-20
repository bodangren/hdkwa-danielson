# Specification: Scaffold Base App

## Goal
Initialize a Next.js (App Router) project optimized for static export, incorporating the HDKWA Navy/Gold branding and the Apple-inspired "Museum Gallery" layout.

## Functional Requirements
- **Next.js Initialization:** Use TypeScript and Tailwind CSS.
- **Static Export Configuration:** Set `output: 'export'` in `next.config.js`.
- **Global Styles:** Define CSS variables for HDKWA colors (#003366, #C5A059) and Apple-style typography.
- **Core Layout:** Implement a persistent sidebar navigation and a responsive main content area.
- **Branding:** Integrate the HDKWA logo and basic theme colors.

## Non-Functional Requirements
- **Responsive Design:** Must work on mobile and desktop.
- **Performance:** Fast initial load (static delivery).
- **Accessibility:** High contrast for text and interactive elements.

## Acceptance Criteria
- [ ] `npm run build` generates a `out/` directory ready for GitHub Pages.
- [ ] Sidebar is visible and responsive.
- [ ] Colors match `DESIGN.md`.
- [ ] Navigation works between placeholder Home and Domain pages.
