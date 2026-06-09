# Implementation Plan: TLAC Technique Audit & FASE Reading #24

---

## Phase 1: Setup & Scaffolding

- [x] Task: Set up the audit working file
  - [x] Create `measure/tracks/technique_audit_20260609/audit-findings.md` skeleton with header + summary table
  - [x] Confirm `src/data/techniques.ts` and `src/data/techniques.test.ts` are the two structures to keep in sync
- [x] Task: Establish technique-number → filename mapping
  - [x] Programmatically derive the mapping from `measure/Docs/` filenames (e.g., `TECHNIQUE 24- FASE READING.pdf` → 24)
  - [x] Store as a working list for use during the audit
- [x] Task: Measure - User Manual Verification 'Phase 1' (Protocol in workflow.md)

---

## Phase 2: Create FASE Reading (#24) Entry

- [ ] Task: Write the FASE Reading per-file module
  - [ ] Create `src/data/techniques/fase-reading.ts` modeled on a sibling module (use `no-opt-out.ts` as template)
  - [ ] Fill fields by reading `measure/Docs/Teach Like a Champion 3.0 TECHNIQUE 24- FASE READING.pdf`
- [ ] Task: Add FASE Reading to the runtime registry
  - [ ] Append the entry to `src/data/techniques.ts` array at the appropriate position (alphabetical by id within its subdomain, mirroring the existing pattern)
  - [ ] Determine the correct subdomain/domain by reading the PDF (FASE Reading belongs to a Reading Interventions subdomain)
- [ ] Task: Update the test imports
  - [ ] Add `import faseReading from './techniques/fase-reading';` to `src/data/techniques.test.ts`
  - [ ] Add `faseReading,` to the techniques array assertion in the test
- [ ] Task: Write failing test for the new technique (Red phase)
  - [ ] Add an assertion to `src/data/techniques.test.ts` that `faseReading` has all required Technique fields
  - [ ] Run `CI=true npm test` and confirm the test passes (since the module now exists)
- [ ] Task: Measure - User Manual Verification 'Phase 2' (Protocol in workflow.md)

---

## Phase 3: Run the Audit (Batched)

The audit is large. It will be split into three batches (≈21 techniques each). Each batch produces a commit and an update to the findings report.

### Phase 3a: Audit TLAC techniques #1–22

- [ ] Task: Audit entries for TLAC #1 through #22
  - [ ] For each: read the corresponding PDF, compare fields, record result in `audit-findings.md`
  - [ ] Identify discrepancies; defer fixes to Phase 3d
- [ ] Task: Checkpoint the audit findings (no code changes yet)
  - [ ] Commit the partial findings report

### Phase 3b: Audit TLAC techniques #23–44

- [ ] Task: Audit entries for TLAC #23 through #44
  - [ ] For each: read the corresponding PDF, compare fields, record result in `audit-findings.md`
  - [ ] Identify discrepancies; defer fixes to Phase 3d
- [ ] Task: Checkpoint the audit findings
  - [ ] Commit the updated findings report

### Phase 3c: Audit TLAC techniques #45–63

- [ ] Task: Audit entries for TLAC #45 through #63
  - [ ] For each: read the corresponding PDF, compare fields, record result in `audit-findings.md`
  - [ ] Identify discrepancies; defer fixes to Phase 3d
- [ ] Task: Checkpoint the audit findings
  - [ ] Commit the complete (pre-fix) findings report

### Phase 3d: Apply fixes for all discrepancies

- [ ] Task: Apply factual fixes to `src/data/techniques.ts`
  - [ ] For each `Fixed` row in the findings report, update the array entry
  - [ ] Group by subdomain for readability
- [ ] Task: Mirror factual fixes to per-file `techniques/*.ts` modules
  - [ ] For each fixed array entry, ensure the matching per-file module reflects the same facts
  - [ ] Preserve editorial framing (titles, descriptions style); update only factual content
- [ ] Task: Update `literature.pages` to specific page ranges
  - [ ] For each technique whose PDF identifies a page range, replace `Chapter N` with the specific range
- [ ] Task: Run the full test suite
  - [ ] `CI=true npm test`
  - [ ] Fix any test failures
- [ ] Task: Measure - User Manual Verification 'Phase 3' (Protocol in workflow.md)

---

## Phase 4: Verification & Documentation

- [ ] Task: Run the full quality gate
  - [ ] `npm run lint`
  - [ ] `npx tsc --noEmit`
  - [ ] `CI=true npm test`
  - [ ] `./measure/doctor.sh`
  - [ ] `./measure/generate.sh`
  - [ ] Stage and commit any changes to `measure/generated/`
- [ ] Task: Finalize `audit-findings.md`
  - [ ] Verify all 62 pre-existing techniques + 1 new technique are accounted for
  - [ ] Add the summary section with counts
  - [ ] Commit the final report
- [ ] Task: Append a Lessons Learned entry
  - [ ] Add a Patterns That Worked Well or Recurring Gotchas entry based on what the audit surfaced
  - [ ] Commit `lessons-learned.md`
- [ ] Task: Measure - User Manual Verification 'Phase 4' (Protocol in workflow.md)
