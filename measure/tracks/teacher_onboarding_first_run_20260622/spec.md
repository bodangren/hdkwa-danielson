# Spec: Teacher Onboarding & First-Run Experience

## Problem
New teachers landing on the site face the full technique library with no orientation. They may not recognize how the four Danielson domains are organized, why some subdomains are marked "High Reward," or how to record a before/after self-assessment and generate a professional report. Without a lightweight first-run introduction, the site feels like a content index rather than a guided PD tool.

## Solution
Add a dismissible, multi-step onboarding flow that explains the Danielson structure, highlights high-reward subdomains, demonstrates the self-assessment/reflection workflow, and optionally collects the teacher's name and school so the report export can pre-fill them.

## Acceptance Criteria
- [ ] Onboarding completion state and teacher info stored in localStorage with a versioned schema.
- [ ] First-time visitors see the onboarding modal automatically; returning users see the normal site.
- [ ] Step-by-step walkthrough covering:
  - Welcome and purpose of the site
  - Danielson Framework overview (Domains 1–4)
  - High-reward subdomains (3b, 3c, 2c, 2d) and why they matter
  - How to complete a technique: before rating → video → after rating → reflection
  - Where to find the report page and (future) profile/progress page
- [ ] Optional teacher-info form (name, school) persisted to localStorage and consumed by the report export page.
- [ ] Skip and finish actions with a visible step progress indicator.
- [ ] Mobile-responsive layout and basic accessibility (focus trap, keyboard navigation, ARIA labels).

## Out of Scope
- Backend user accounts or authentication
- Contextual product tours / tooltips on real pages
- Multi-language localization
- Customizable onboarding content
