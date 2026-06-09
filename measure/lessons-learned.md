# Lessons Learned

> This file is curated working memory, not an append-only log. Keep it at or below **50 lines**.
> Remove or condense entries that are no longer relevant to near-term planning.

## Architecture & Design
<!-- Decisions made that future tracks should be aware of -->

- (2026-06-09, technique_audit_20260609) Technique data has two parallel structures (`src/data/techniques.ts` runtime array, `src/data/techniques/*.ts` per-file modules used only by tests). They drift independently. Recommend either: (a) generate per-file from runtime, or (b) remove per-file modules. Current state is a tech-debt risk.

## Recurring Gotchas
<!-- Problems encountered repeatedly; save future tracks from the same pain -->

- (2026-06-09, technique_audit_20260609) `culture-of-error` was misattributed to `Uncommon Schools` in both the runtime array and the per-file module, but it's actually TLAC Technique 12. Source-field audits need to read the PDF chapter, not just trust the value.

## Patterns That Worked Well
<!-- Approaches worth repeating -->

- (2026-06-09, technique_audit_20260609) For data audits with many similar entries, batch by chapter/range (e.g. TLAC #1-22, #23-44, #45-63) and write findings incrementally. Don't try to read 60+ PDFs sequentially in one session — read 1-2 pages per PDF and record just the facts being checked.
- (2026-06-09, technique_audit_20260609) Spawning a `general` subagent for "read N PDFs and report the page number where the technique title appears" worked well for parallelizable, read-only data collection. Result still needs to be spot-checked by the main agent, but it cuts wall time.

## Planning Improvements
<!-- Notes on where estimates were wrong and why -->

- (2026-06-09, technique_audit_20260609) Initial estimate assumed per-file modules were authoritative and would need deep sync. In practice the runtime array is the only thing the app uses; per-file modules are test-only fixtures. Adjust future estimates: per-file audit/sync is optional polish, not a blocker.
