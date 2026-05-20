# Implementation Plan: Scaffold Base App

Following the project workflow (TDD and atomic commits).

## Phase 1: Environment Setup
- [ ] Task: Initialize Next.js project
    - [ ] Run `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
    - [ ] Configure `next.config.js` for `output: 'export'`
- [ ] Task: Setup Global Design Tokens
    - [ ] Update `tailwind.config.ts` with HDKWA colors (`hdkwa-navy`, `hdkwa-gold`)
    - [ ] Update `src/app/globals.css` with Apple-style typography and base colors from `DESIGN.md`

## Phase 2: Core Components
- [ ] Task: Create Layout Component
    - [ ] Implement `Sidebar` navigation component
    - [ ] Integrate HDKWA logo in `Sidebar`
    - [ ] Update `src/app/layout.tsx` to include `Sidebar`
- [ ] Task: Create Navigation Context/State
    - [ ] Implement simple state for tracking current active domain (local only)

## Phase 3: Content Shells
- [ ] Task: Implement Home Page Shell
    - [ ] Create `src/app/page.tsx` based on `home.html` mockup
- [ ] Task: Implement Domain Page Shell
    - [ ] Create `src/app/domains/[id]/page.tsx` (dynamic route) with placeholder content

## Phase 4: Finalization
- [ ] Task: Measure - User Manual Verification 'Scaffold Base App'
- [ ] Task: Build and Verify Static Export
    - [ ] Run `npm run build` and verify `out` directory contents
