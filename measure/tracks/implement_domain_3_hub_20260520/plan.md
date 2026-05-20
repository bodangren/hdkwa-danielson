# Implementation Plan: Domain 3 Hub & Data Structure

## Phase 1: Data Architecture
- [ ] Task: Create techniques data schema
    - [ ] Define `Technique` interface in `src/types/index.ts`
    - [ ] Populate `src/data/techniques.ts` with initial Domain 3 techniques (Cold Call, etc.)

## Phase 2: Domain 3 Implementation
- [ ] Task: Build Domain 3 Hub Page
    - [ ] Implement `TechniqueCard` component
    - [ ] Update `src/app/domains/[id]/page.tsx` to filter and display techniques for Domain 3
    - [ ] Add "High Reward" visual badges to the header

## Phase 3: Interactive Persistence
- [ ] Task: Create `useReflection` Hook
    - [ ] Implement `localStorage` persistence logic for ratings and notes
- [ ] Task: Scaffold Strategy Module Page
    - [ ] Create `src/app/strategy/[slug]/page.tsx` as a dynamic route
    - [ ] Implement the Before/After UI components (Rating Dots, Note inputs)

## Phase 4: Finalization
- [ ] Task: Measure - User Manual Verification 'Domain 3 Hub'
- [ ] Task: Commit and Verify Build
