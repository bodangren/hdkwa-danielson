# Specification: Fix Broken Technique Images on GitHub Pages Export

## Overview
The site is exported statically and deployed to GitHub Pages under the repository path (`/hdkwa-danielson`). Technique images referenced in strategy pages load from absolute paths (`/technique-images/...`) that ignore the `basePath` configured in `next.config.ts`, causing 404s in production.

## Root Cause
`next/image` with `unoptimized: true` does not automatically prepend `basePath` to raw string `src` values during static export. The build output contains `src="/technique-images/cold-call.png"` instead of `src="/hdkwa-danielson/technique-images/cold-call.png"`.

## Functional Requirements
- All image references in the strategy detail page must resolve correctly when the site is served from a subpath (`basePath`).
- The fix must not break local development (where `basePath` is empty).
- The fix must handle the existing `logo.png` reference in the report page if it is similarly affected.

## Non-Functional Requirements
- Keep the static-export and GitHub Pages compatibility.
- No backend or runtime dependency.
- Minimal code change.

## Acceptance Criteria
- [ ] Running a production build (`NODE_ENV=production npm run build`) produces HTML where image `src` attributes include the basePath.
- [ ] Local dev server (`npm run dev`) continues to serve images correctly.
- [ ] `./measure/doctor.sh` passes after the change.
