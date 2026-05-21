# Specification: Replace Abstract Technique Images

## Overview
Replace the abstract branded technique images with warmer, more personal photorealistic classroom scenes showing teachers interacting with students. Keep the current image filenames and page integration so the site structure remains stable.

## Functional Requirements
- Replace all existing technique images with `imagegen` photorealistic classroom-interaction images.
- Use domain/subdomain-specific scenes such as questioning, partner discussion, routines, assessment checks, calm behavior support, planning conferences, and professional reflection.
- Preserve `public/technique-images/<technique-id>.png` filenames.
- Preserve the existing inline placement in each technique page implementation guide.

## Non-Functional Requirements
- Maintain a coherent HDKWA visual identity without making the images feel like title cards.
- Use only the built-in `imagegen` workflow for the replacement assets.
- Keep image file sizes reasonable for static GitHub Pages delivery.

## Acceptance Criteria
- Each technique image includes a teacher and students or coaching participants.
- The replacement images are warmer, more personal, and photo-realistic rather than abstract-node or vector visuals.
- `npm run lint` succeeds.
- `npm run build` succeeds.

## Out of Scope
- Sourcing real photographs.
- Using student-identifiable real people.
- Changing technique-page layout or content beyond the image assets.
