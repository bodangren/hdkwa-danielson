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

- [x] Task: Write the FASE Reading per-file module
  - [x] Create `src/data/techniques/fase-reading.ts` modeled on a sibling module (use `no-opt-out.ts` as template)
  - [x] Fill fields by reading `measure/Docs/Teach Like a Champion 3.0 TECHNIQUE 24- FASE READING.pdf`
- [x] Task: Add FASE Reading to the runtime registry
  - [x] Append the entry to `src/data/techniques.ts` array at the appropriate position (alphabetical by id within its subdomain, mirroring the existing pattern)
  - [x] Determine the correct subdomain/domain by reading the PDF (FASE Reading belongs to a Reading Interventions subdomain)
- [x] Task: Update the test imports
  - [x] Add `import faseReading from './techniques/fase-reading';` to `src/data/techniques.test.ts`
  - [x] Add `faseReading,` to the techniques array assertion in the test
- [x] Task: Write failing test for the new technique (Red phase)
  - [x] Add an assertion to `src/data/techniques.test.ts` that `faseReading` has all required Technique fields
  - [x] Run `CI=true npm test` and confirm the test passes (since the module now exists)
- [x] Task: Measure - User Manual Verification 'Phase 2' (Protocol in workflow.md)

---

## Phase 3: Run the Audit (Batched)

The audit is large. It will be split into three batches (≈21 techniques each). Each batch produces a commit and an update to the findings report.

### Phase 3a: Audit TLAC techniques #1–22

- [x] Task: Audit entries for TLAC #1 through #22
  - [x] For each: read the corresponding PDF, compare fields, record result in `audit-findings.md`
  - [x] Identify discrepancies; defer fixes to Phase 3d
- [x] Task: Checkpoint the audit findings (no code changes yet)
  - [x] Commit the partial findings report

### Phase 3b: Audit TLAC techniques #23–44

- [x] Task: Audit entries for TLAC #23 through #44
  - [x] For each: read the corresponding PDF, compare fields, record result in `audit-findings.md`
  - [x] Identify discrepancies; defer fixes to Phase 3d
- [x] Task: Checkpoint the audit findings
  - [x] Commit the updated findings report

### Phase 3c: Audit TLAC techniques #45–63

- [x] Task: Audit entries for TLAC #45 through #63
  - [x] For each: read the corresponding PDF, compare fields, record result in `audit-findings.md`
  - [x] Identify discrepancies; defer fixes to Phase 3d
- [x] Task: Checkpoint the audit findings
  - [x] Commit the complete (pre-fix) findings report

### Phase 3d: Apply fixes for all discrepancies

- [x] Task: Apply factual fixes to `src/data/techniques.ts`
  - [x] For each `Fixed` row in the findings report, update the array entry
  - [x] Group by subdomain for readability
- [x] Task: Mirror factual fixes to per-file `techniques/*.ts` modules
  - [x] For each fixed array entry, ensure the matching per-file module reflects the same facts
  - [x] Preserve editorial framing (titles, descriptions style); update only factual content
- [x] Task: Update `literature.pages` to specific page ranges
  - [x] For each technique whose PDF identifies a page range, replace `Chapter N` with the specific range
- [x] Task: Run the full test suite
  - [x] `CI=true npm test`
  - [x] Fix any test failures
- [x] Task: Measure - User Manual Verification 'Phase 3' (Protocol in workflow.md)

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
