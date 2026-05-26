# Plan: Gamification & Badge System

## Phase 1: Badge Engine
- [ ] Task: Define `data/badges.json` with criteria, points, and icons
- [ ] Task: Build `lib/badges.ts` with `checkBadges(progress)` function
- [ ] Task: Write unit tests for badge criteria logic

## Phase 2: Progress Tracking
- [ ] Task: Extend localStorage schema to include `badges` and `points`
- [ ] Task: Add migration for existing users (start from zero)
- [ ] Task: Trigger badge check after each technique completion

## Phase 3: Profile Page
- [ ] Task: Build `app/profile/page.tsx` with badges grid, points, domain progress
- [ ] Task: Add toast notification component for badge unlocks
- [ ] Task: Add "Export Progress" button (JSON download)

## Phase 4: Verification
- [ ] Task: Manual test: complete techniques, verify badges unlock
- [ ] Task: Run build and test suite
- [ ] Task: Commit and push
