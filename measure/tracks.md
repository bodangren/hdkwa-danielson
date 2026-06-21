# Project Tracks
- [x] **Track: Scaffold Base App**
  *Link: [./archive/scaffold_base_app_20260520/](./archive/scaffold_base_app_20260520/)*
- [x] **Track: Implement Domain 3 Hub & Reporting**
  *Link: [./archive/implement_domain_3_hub_20260520/](./archive/implement_domain_3_hub_20260520/)*

---

- [x] **Track: Mobile Navigation and Technique Coaching Enrichment**
  *Link: [./archive/mobile_coaching_enrichment_20260521/](./archive/mobile_coaching_enrichment_20260521/)*

---

- [x] **Track: Replace Abstract Technique Images**
  *Link: [./archive/replace_technique_images_20260521/](./archive/replace_technique_images_20260521/)*

---

- [x] **Track: Domain 1 & 2 Content Hubs**
  *Link: [./archive/domain_1_2_content_hubs_20260527/](./archive/domain_1_2_content_hubs_20260527/)*
  *Build content hubs for Planning (Domain 1) and Classroom Environment (Domain 2) with techniques, videos, and self-assessments.*

- [x] **Track: Fix Broken Technique Images on GitHub Pages Export**
  *Link: [./archive/fix_github_pages_images_20260522/](./archive/fix_github_pages_images_20260522/)*

## Upcoming Tracks

- [ ] **Track: Gamification & Badge System**
  *Link: [./tracks/gamification_badge_system_20260527/](./tracks/gamification_badge_system_20260527/)*
  *Progress tracking, domain mastery badges, and points for completing techniques.*
  *Status: not started (0/12 plan tasks). No badge/points/streak implementation exists in `src/`.*

- [ ] **Track: Domain 4 Content Hub**
  *Link: [./tracks/domain_4_content_hub_20260527/](./tracks/domain_4_content_hub_20260527/)*
  *Complete Danielson Framework coverage with Professional Responsibilities (Domain 4) content.*
  *Status: not started (0/10 plan tasks) — this is a content-authoring track. Note: hub infrastructure already supports Domain 4 (`danielson.ts` defines domain 4 with components 4a–4e; `domains/[id]/page.tsx` renders any domain by `techniques.filter(t => t.domain === id)`), but **0 techniques carry `domain: 4`** (current counts: D1=10, D2=22, D3=31). The work is authoring technique entries, not building the page.*

- [~] **Track: Implementation Report Export** _(in progress — core MVP built, ~3/6 acceptance criteria)_
  *Link: [./tracks/implementation_report_export_20260527/](./tracks/implementation_report_export_20260527/)*
  *Printable PDF/HTML report aggregating before/after ratings and reflections for administrators.*
  *Status: `src/app/report/page.tsx` (161 lines) is a real working report, shipped in `804e2fe` — aggregates localStorage reflections across all techniques, renders per-technique before/after self-ratings + goal + reflection notes + date, has print-friendly CSS (`no-print`/`print:` utilities, print logo header, `page-break-inside-avoid`), and exports via `window.print()` ("Print / Export PDF"). Acceptance criteria met: report page exists, print-friendly CSS, per-technique detail table, browser-print PDF export. Still missing: editable teacher info (name/school), summary stats (techniques completed / avg before-after delta / domains covered), include/exclude reflection-notes privacy toggle, and date-range filter. Plan checkboxes are stale at 0/13.*

- [ ] **Track: Search & Discovery Engine**
  *Link: [./tracks/search_discovery_engine_20260605/](./tracks/search_discovery_engine_20260605/)*
  *Client-side search and filtering across all techniques to help teachers discover strategies by keyword, domain, or classroom need.*

- [ ] **Track: Teacher Onboarding & First-Run Experience**
  *Link: [./tracks/teacher_onboarding_first_run_20260622/](./tracks/teacher_onboarding_first_run_20260622/)*
  *Introduce new teachers to the Danielson framework, high-reward subdomains, and the self-assessment workflow through a lightweight first-run onboarding flow. Collects optional teacher info for the report export.*
  *Status: not started (0/14 plan tasks). No onboarding flow, first-run modal, or teacher-info storage exists in `src/`.*

---

- [x] **Track: TLAC Technique Audit & FASE Reading #24**
  *Link: [./archive/technique_audit_20260609/](./archive/technique_audit_20260609/)*
  *Audit existing TLAC technique data against source PDFs and add the missing FASE Reading entry.*
