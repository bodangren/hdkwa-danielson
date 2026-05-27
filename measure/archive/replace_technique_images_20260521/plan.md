# Implementation Plan: Replace Abstract Technique Images

## Phase 1: Track Setup [checkpoint: bd5fbc9]
- [x] Task: Create Measure track artifacts
    - [x] Write specification
    - [x] Write implementation plan
    - [x] Link track from registry

## Phase 2: Photorealistic Image Replacement [checkpoint: bd5fbc9]
- [x] Task: Generate and replace assets with `imagegen`
    - [x] Replace abstract motifs with photorealistic classroom-interaction scenes
    - [x] Map generated outputs to the 62 technique slugs
    - [x] Copy all 62 replacement PNGs into `public/technique-images`
    - [x] Inspect representative samples

## Phase 3: Verification [checkpoint: bd5fbc9]
- [x] Task: Verify generated image change
    - [x] Run `npm run lint`
    - [x] Run `npm run build`
    - [x] Confirm all expected image files exist
