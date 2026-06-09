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
| 2 | Technique 2 Plan For Error.pdf | (split: plan-for-error) | TLAC 3.0 |
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

The `techniques.ts` array contains 62 entries, but most correspond to specific TLAC techniques by technique number, and **many TLAC techniques are missing from the array**. The 62 entries are a curated subset drawn from TLAC and other sources (Marzano, Visible Learning, Edutopia, etc.). The "(no array entry)" rows above are techniques the array does not include.

**This is by design**, not a bug — the app curates a subset aligned to the Danielson framework and adds non-TLAC techniques. The audit focuses on entries that *do* correspond to a TLAC technique, checking each against its PDF.

## Audit Results

### Phase 3a — TLAC #1–22

_Filled during implementation._

### Phase 3b — TLAC #23–44

_Filled during implementation._

### Phase 3c — TLAC #45–63

_Filled during implementation._

## Summary

_To be filled at end of track._

- Total audited:
- OK:
- Fixed:
- Open questions:
- Skipped (not in TLAC):
