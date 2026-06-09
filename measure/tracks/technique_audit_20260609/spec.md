# Specification: TLAC Technique Audit & FASE Reading #24

## Overview

Audit every technique defined in this codebase against its source PDF in `measure/Docs/`, identify discrepancies, and fix them. Also create the missing entry for Technique #24 (FASE Reading) and add it to the registry so the technique set covers all 63 techniques in *Teach Like a Champion 3.0*.

## Problem Statement

The app exposes 62 teaching techniques to users, but the source material contains 63 techniques. The missing technique (TLAC #24, **FASE Reading**) has no code entry. In addition, the existing entries have not been systematically compared against their source PDFs, so silent errors (misattributed techniques, wrong subdomains, outdated descriptions, vague page references) may be reaching teachers.

There are also **two parallel data structures** for techniques:

- `src/data/techniques.ts` — a single large array used at runtime by the app
- `src/data/techniques/*.ts` — 62 per-file modules imported only by `src/data/techniques.test.ts`

These two structures are not generated from each other, so they can drift.

## Goals

1. Verify every technique entry matches its TLAC source PDF (or its declared non-TLAC source) on every field that has a factual claim:
   - `title` — should reflect the technique as it actually is (renamed/framed titles are acceptable when description and steps still match; flag only when factual content is wrong)
   - `description` — must not contradict the source
   - `actionSteps` — must be defensible from the source
   - `subdomain` and `domain` — must be correct against the Danielson framework
   - `alignment` — must match the subdomain's title
   - `source` — must name the correct book/program
   - `literature.pages` — replace vague `Chapter N` with the specific page range found in the PDF
2. Create the missing Technique #24 (FASE Reading) entry and wire it into the runtime registry.
3. Reconcile the per-file `techniques/*.ts` modules with the runtime `techniques.ts` array so they stay in sync.
4. Produce a written audit report (`measure/tracks/<id>/audit-findings.md`) listing every discrepancy found, the resolution, and any open questions for the user.

## Functional Requirements

### F1. Audit Workflow

For each of the 62 existing entries in `src/data/techniques.ts`:

- F1.1. Identify the corresponding PDF in `measure/Docs/` by technique number (extract from filename pattern `TECHNIQUE N-`).
- F1.2. Read the PDF in full.
- F1.3. Compare each factual field against the PDF content.
- F1.4. Record the comparison result in `audit-findings.md`.
- F1.5. For each discrepancy, propose a fix. Apply the fix to the runtime array only after the user has reviewed the report (or per the agreed batched-approval flow).

### F2. FASE Reading (Technique #24) Entry

- F2.1. Create `src/data/techniques/fase-reading.ts` modeled on a sibling per-file module.
- F2.2. Add the matching entry to the `techniques` array in `src/data/techniques.ts` in its correct position (TLAC #24 sits in the Reading & Writing Interventions chapter; align to the subdomain implied by the technique's content).
- F2.3. Update the per-file import block in `src/data/techniques.test.ts` to include the new module.
- F2.4. If the technique is not currently rendered in any UI route, no further UI work is required; the registry is the contract.

### F3. Reconciliation of `techniques.ts` ↔ `techniques/*.ts`

- F3.1. For each entry that appears in both, ensure the values are consistent (per F1 fixes).
- F3.2. For per-file modules that are renamed/framed versions of the runtime entry, preserve the editorial framing; only update factual content.
- F3.3. Where the two structures have diverged factually, fix whichever is wrong and mirror the correction to the other.

### F4. Audit Findings Report

- F4.1. A markdown report at `measure/tracks/<track_id>/audit-findings.md` with:
  - One row per technique: technique number, id, status (`OK`, `Fixed`, `Open question`, `N/A — not in TLAC`).
  - For each `Fixed` row, a one-line description of the change.
  - A summary section: total audited, fixed, OK, open questions.
- F4.2. The report is committed alongside the code fixes.

## Non-Functional Requirements

- **TDD:** The existing test suite (`src/data/techniques.test.ts`) must continue to pass after every change. If new validation is needed, add tests first.
- **No UI changes:** This track is data-only. No component, page, or style changes.
- **Coverage:** Maintain or improve current coverage on `src/data/`. Adding FASE #24 must keep coverage stable.
- **No new dependencies.**
- **Generated docs:** Run `./measure/generate.sh` after changes; commit any updates to `measure/generated/`.

## Acceptance Criteria

1. All 63 TLAC techniques have a code entry in `src/data/techniques.ts`.
2. FASE Reading is the only technique added; no other entries are created.
3. `audit-findings.md` is committed and covers all 62 pre-existing entries.
4. `npm test` (or equivalent) passes.
5. `npx tsc --noEmit` passes.
6. `./measure/doctor.sh` passes.
7. `./measure/generate.sh` runs cleanly; any changes to `measure/generated/` are committed.
8. The per-file `techniques/*.ts` modules and the `techniques.ts` array are factually consistent for every entry that exists in both.

## Out of Scope

- Renaming techniques back to official TLAC names (editorial framing is preserved).
- UI changes to render FASE Reading (assumed already covered by subdomain template).
- Curating or replacing video IDs — `videos.demo` and other video fields are not in this audit.
- Adding techniques from sources other than TLAC 3.0.
- Migrating the per-file modules to be the source of truth.
- Authoring a new content chapter; the goal is correctness of existing content.

## Risks

- **PDF readability:** Some PDFs may be scanned and not extractable. Mitigation: read directly; if a PDF fails to render, mark the technique `Open question` and continue.
- **Editorial vs factual:** The line between editorial framing and factual error is judgment-based. Mitigation: use the "description/action steps must be defensible" rule as the boundary; surface anything ambiguous as `Open question` to the user.
- **Volume:** 62 techniques × full PDF read is large. Mitigation: batch the audit; commit findings in phases; allow user checkpoints.
