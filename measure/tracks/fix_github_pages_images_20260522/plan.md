# Implementation Plan: Fix Broken Technique Images on GitHub Pages Export

---

## Phase 1: Diagnose & Reproduce

- [x] Task: Confirm the basePath omission in build output
  - [ ] Run `NODE_ENV=production npm run build`
  - [ ] Inspect `out/strategy/<any-slug>/index.html` and verify `src="/technique-images/..."` lacks the basePath prefix
  - [ ] Inspect `out/index.html` or report page for any other hardcoded public asset paths that may be affected
  - [ ] Verify `out/hdkwa-danielson/technique-images/` does NOT exist (public files land at `out/` root, but Pages serves them under basePath)

---

## Phase 2: Implement Fix

- [x] Task: Create a basePath-aware image path helper
  - [ ] Write a small utility (e.g., `src/lib/imagePath.ts`) that returns `\`${process.env.__NEXT_ROUTER_BASEPATH || ''}${path}\`` or reads `basePath` from `next.config.ts`
  - [ ] Alternatively, import the `basePath` value directly from `next.config.ts` if exported, or use Next.js runtime `process.env.__NEXT_ROUTER_BASEPATH`

- [x] Task: Update strategy detail page to use the helper
  - [ ] Replace the raw `/technique-images/${technique.id}.png` string in `src/app/strategy/[slug]/page.tsx` with the helper
  - [ ] Verify no other pages reference `technique-images` with a leading `/`

- [x] Task: Audit and fix any other public asset references
  - [ ] Check `src/app/report/page.tsx` for the `logo.png` import/Image usage
  - [ ] If it uses a hardcoded `/` path, apply the same helper or switch to a Next.js static import (already imported as `logo` from file path, so it may be fine)
  - [ ] Search the entire `src/` tree for any other `src="/` or `src='/` patterns pointing at public assets

---

## Phase 3: Verify & Commit

- [x] Task: Run production build and verify fix
  - [ ] Run `NODE_ENV=production npm run build`
  - [ ] Confirm `out/strategy/*/index.html` now contains the correct prefixed path
  - [ ] Run `npm run dev` and confirm images still load locally
  - [ ] Run `./measure/doctor.sh`

- [ ] Task: Measure - User Manual Verification 'Phase 3' (Protocol in workflow.md)
