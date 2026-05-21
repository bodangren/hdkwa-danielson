# Implementation Plan: Mobile Navigation and Technique Coaching Enrichment

## Phase 1: Track Setup
- [x] Task: Create Measure track artifacts
    - [x] Write specification
    - [x] Write implementation plan
    - [x] Link track from registry

## Phase 2: Responsive Shell
- [x] Task: Fix mobile navigation and layout
    - [x] Refactor sidebar into shared navigation data with mobile drawer behavior
    - [x] Update root layout spacing for mobile and desktop
    - [x] Verify the shell does not horizontally crowd content on small screens

## Phase 3: Technique Coaching Content
- [x] Task: Enrich technique pages
    - [x] Extend technique types with optional coaching fields
    - [x] Add deterministic fallback content helpers from existing technique metadata
    - [x] Generate technique-specific inline image assets
    - [x] Render implementation, video, teacher, and leader sections on technique pages
    - [x] Tune responsive layout and hierarchy for scannability

## Phase 4: Verification
- [x] Task: Verify build and responsive behavior
    - [x] Run `npm run build`
    - [x] Run lint where practical
    - [x] Inspect mobile and desktop layout behavior
