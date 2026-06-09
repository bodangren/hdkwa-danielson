# Tech Debt Registry

> This file is curated working memory, not an append-only log. Keep it at or below **50 lines**.
> Remove or summarize resolved items when they no longer need to influence near-term planning.
>
> **Severity:** `Critical` | `High` | `Medium` | `Low`
> **Status:** `Open` | `Resolved`

| Date | Track | Item | Severity | Status | Notes |
|------|-------|------|----------|--------|-------|
| 2026-01-01 | example_track | Example: Hardcoded timeout value | Low | Resolved | Replaced with config value in v1.2 |
| 2026-06-09 | technique_audit_20260609 | Per-file `src/data/techniques/*.ts` modules have stale page ranges that disagree with the runtime `src/data/techniques.ts` array | Medium | Open | Runtime array was updated with correct TLAC page ranges during the audit. Per-file modules are test-only fixtures but their `literature.pages` values are out of sync. Recommend a follow-up chore to regenerate per-file modules from the runtime array, or remove them if no longer needed. |
