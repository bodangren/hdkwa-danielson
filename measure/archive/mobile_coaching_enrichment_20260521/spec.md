# Specification: Mobile Navigation and Technique Coaching Enrichment

## Overview
Improve the HDKWA Danielson PD Portal so it is usable on phones and so each technique page feels like a complete coaching module rather than a sparse resource page. The work should preserve the existing static-export architecture and local-first reflection model.

## Functional Requirements
- Replace the always-visible desktop sidebar on small screens with a mobile-safe navigation pattern.
- Preserve the current desktop sidebar behavior and progress indicator.
- Add technique-page coaching content that clearly separates teacher implementation actions from SLT/coach observation look-fors.
- Make the teacher section explicit about what teachers should do before and during implementation.
- Make the SLT/coach section explicit about what observers should look for, and phrase those look-fors so teachers know the evidence leaders will notice.
- Add a richer implementation guide of roughly 250 words for each technique page, generated from existing technique metadata when hand-authored copy is not available.
- Add an inline generated image with each implementation guide, using a coherent visual system and technique-specific labels.
- Add an "In this video" summary for the highlighted video using available technique metadata.
- Keep the technique-page layout scannable on desktop and mobile.

## Non-Functional Requirements
- Keep the app compatible with Next.js static export and GitHub Pages.
- Avoid adding a backend or runtime transcript dependency in this track.
- Preserve type safety across the technique data model and page rendering.
- Keep mobile touch targets large enough for classroom use.

## Acceptance Criteria
- Mobile viewport no longer shows a permanent left sidebar that consumes page width.
- Mobile users can open and close navigation from a compact top bar.
- Desktop users still see persistent navigation and total progress.
- Technique pages include "For Teachers" and "For Leaders" sections.
- Technique pages include implementation guidance and a video-context section for every existing technique.
- Technique pages display a generated inline image alongside the implementation guidance for every existing technique.
- `npm run build` succeeds.

## Out of Scope
- Downloading or storing YouTube transcripts.
- Curating a second video for every technique.
- Adding user accounts, server persistence, or analytics.
