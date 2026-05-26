# Spec: Implementation Report Export

## Problem
Teachers cannot share their PD progress with administrators or instructional coaches. The before/after ratings and reflections are trapped in localStorage.

## Solution
Add a report page that aggregates all completed technique data into a professional PDF or printable HTML report suitable for sharing with HODs/ICs.

## Acceptance Criteria
- [ ] "My Report" page accessible from profile
- [ ] Report sections: teacher info (editable name/school), summary stats (techniques completed, avg before/after delta, domains covered), detailed table per technique (name, subdomain, before rating, after rating, goal, reflection)
- [ ] Print-friendly CSS using `@media print` or paged.js
- [ ] Export to PDF via browser print dialog
- [ ] Option to include/exclude reflection notes for privacy
- [ ] Date range filter (last 30 days, all time, custom)

## Out of Scope
- Backend report generation
- Email/share functionality
- Digital signature
