# Implementation Plan: Fix Broken Technique Images on GitHub Pages Export

---

## Phase 1: Diagnose & Reproduce

- [x] Task: Confirm the basePath omission in build output
  - [x] Run `NODE_ENV=production npm run build`
  - [x] Inspect `out/strategy/<any-slug>/index.html` and verify `src="/technique-images/..."` lacks the basePath prefix
  - [x] Inspect `out/index.html` or report page for any other hardcoded public asset paths that may be affected
  - [x] Verify `out/hdkwa-danielson/technique-images/` does NOT exist (public files land at `out/` root, but Pages serves them under basePath)

---

## Phase 2: Implement Fix

- [x] Task: Create a basePath-aware image path helper
  - [x] Write a small utility (`src/lib/imagePath.ts`) that returns `\`${process.env.__NEXT_ROUTER_BASEPATH || ''}${path}\``

- [x] Task: Update strategy detail page to use the helper
  - [x] Replace the raw `/technique-images/${technique.id}.png` string in `src/app/strategy/[slug]/page.tsx` with the helper
  - [x] Verify no other pages reference `technique-images` with a leading `/`

- [x] Task: Audit and fix any other public asset references
  - [x] Check `src/app/report/page.tsx` for the `logo.png` import/Image usage
  - [x] Logo uses static import (correctly handled by Next.js); no fix needed
  - [x] Search the entire `src/` tree for any other `src="/` or `src='/` patterns pointing at public assets — none found

---

## Phase 3: Verify & Commit

- [x] Task: Run production build and verify fix [664f6e3]
  - [x] Run `NODE_ENV=production npm run build`
  - [x] Confirm `out/strategy/*/index.html` now contains the correct prefixed path
  - [x] Run `npm run dev` and confirm images still load locally
  - [x] Run `./measure/doctor.sh`

- [x] Task: Measure - User Manual Verification 'Phase 3' (Protocol in workflow.md)
