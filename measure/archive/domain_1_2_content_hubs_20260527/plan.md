# Plan: Domain 1 & 2 Content Hubs

> **Architecture note (2026-06-01):** The original plan specified a *nested*
> route structure (`app/domain/1/[subdomain]/[technique]/page.tsx`). After
> investigation, the existing codebase uses a *flat* structure
> (`app/domains/[id]/page.tsx` + `app/strategy/[slug]/page.tsx`) that
> already dynamically renders all 4 domains. Per user direction, the track
> was implemented against the existing flat architecture rather than
> introducing a parallel nested one. Tasks below reflect the work
> actually performed.

## Phase 1: Schema, Data & Build Repair [checkpoint: 67da33b]

- [x] Task: Audit the existing `src/data/techniques.ts` and `src/data/techniques/` directories
  - [x] Confirmed `techniques.ts` registers 18 Domain 1 techniques and 16 Domain 2 techniques (62 total)
  - [x] Confirmed every D1 subdomain (1a-1f) and every D2 subdomain (2a-2e) has at least 3 techniques
  - [x] Confirmed all 34 D1/D2 technique images exist in `public/technique-images/`
- [x] Task: Repair the `radar-be-seen-looking` technique module so the build can succeed
  - [x] Import path: `~/types` → `../../types` (matches the convention of the other 61 technique files)
  - [x] Replace placeholder YouTube URL with a real YouTube ID matching the source
- [x] Task: Write a TDD acceptance suite for D1 & D2 (`src/data/domain12.test.ts`)
  - [x] Asserts ≥3 techniques per D1 and D2 subdomain
  - [x] Asserts required fields (title, description, video, ≥3 action steps, source, alignment)
  - [x] Asserts `videos.demo` is a YouTube ID (rejects URLs and placeholders)
  - [x] Asserts subdomain/alignment prefix consistency
  - [x] Asserts subdomain membership in `DANIELSON_FRAMEWORK`
  - [x] Asserts id uniqueness within and across D1 and D2
- [x] Task: Regenerate architecture and routes facts (`./measure/generate.sh`)

## Phase 2: Routes & Pages [checkpoint: 67da33b]

- [x] Task: Verify `/domains/1` renders D1 techniques grouped by subdomain
  - [x] `app/domains/[id]/page.tsx` already filters by `t.domain === domainId` and groups by `t.subdomain`
  - [x] `generateStaticParams` already returns `['1','2','3','4']`
- [x] Task: Verify `/domains/2` renders D2 techniques grouped by subdomain
  - [x] Same page handles D2 via the dynamic `[id]` segment
- [x] Task: Verify `/strategy/[slug]` renders any D1 or D2 technique detail
  - [x] `generateStaticParams` derives from `techniques.map(t => ({ slug: t.id }))`
  - [x] All 34 D1/D2 routes confirmed in `next build` static output

## Phase 3: Self-Assessment [checkpoint: 67da33b]

- [x] Task: Confirm `ReflectionModule` works for D1 & D2 techniques
  - [x] The component takes a `Technique` prop; behaviour is data-driven, not domain-specific
  - [x] `useReflection(technique.id)` reads/writes `reflection_${techniqueId}` in `localStorage`
- [x] Task: Confirm `localStorage` schema consistency across all 4 domains
  - [x] `Reflection` type is shared (`src/types/index.ts`)
  - [x] `completed_techniques` aggregate is updated identically regardless of domain
  - [x] The 211-test acceptance suite locks the `Technique` shape, which is the upstream contract for the reflection data

## Phase 4: Navigation, Polish & Verification [checkpoint: 67da33b]

- [x] Task: Confirm navigation surfaces Domains 1 & 2
  - [x] `Sidebar.tsx` already links to `/domains` (hub), which renders all 4 domains
  - [x] `app/page.tsx` (home) already renders cards for all 4 domains, including D1 and D2
  - [x] `app/domains/page.tsx` (hub) already lists all 4 domains with `DANIELSON_FRAMEWORK.map`
- [x] Task: Quality gates
  - [x] `CI=true npm test` — 273/273 pass (62 pre-existing + 211 new D1/D2)
  - [x] `npm run build` — green; 73 static pages including `/domains/1`, `/domains/2`, and all 34 D1/D2 strategy pages
  - [x] `npm run lint` — clean
  - [x] `npx tsc --noEmit` — clean
  - [x] `./measure/doctor.sh` — clean (lint, typecheck, generated docs fresh)
- [x] Task: User manual verification of D1 and D2 content hubs (Protocol in workflow.md) [5e163f4]
  - [x] User confirmed live dev server renders `/domains`, `/domains/1`, `/domains/2`, and all 34 D1/D2 strategy pages correctly
  - [x] User confirmed self-assessment round-trip persists across reloads
  - [x] User confirmed localStorage schema (`reflection_<id>`, `completed_techniques`) is consistent across all 4 domains
