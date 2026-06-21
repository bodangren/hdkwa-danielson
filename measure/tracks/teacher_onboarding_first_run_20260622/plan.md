# Plan: Teacher Onboarding & First-Run Experience

## Phase 1: Onboarding State & Teacher-Info Logic (TDD)
- [ ] Task: Write unit tests for `lib/onboarding.ts` covering complete, skip, reopen, and teacher-info read/write.
- [ ] Task: Implement `lib/onboarding.ts` with a versioned localStorage schema and validation helpers.
- [ ] Task: Write tests confirming teacher-info shape matches what `app/report/page.tsx` expects.
- [ ] Task: Run the new unit tests and confirm they fail (Red phase).

## Phase 2: Onboarding UI Components (TDD)
- [ ] Task: Build `components/OnboardingModal.tsx` with step content, navigation, progress indicator, skip, and finish actions.
- [ ] Task: Write component tests for step navigation, skip, finish, and keyboard accessibility.
- [ ] Task: Build `components/TeacherInfoForm.tsx` with local validation and submit handling.
- [ ] Task: Write component tests for the teacher-info form.

## Phase 3: Integration
- [ ] Task: Wire `OnboardingModal` into `app/layout.tsx` so it opens automatically on first visit.
- [ ] Task: Add a header trigger (help/info icon) to reopen onboarding for returning users.
- [ ] Task: Update `app/report/page.tsx` to read teacher name/school from the onboarding store when available.
- [ ] Task: Run build and full test suite.

## Phase 4: Verification & Closeout
- [ ] Task: Manual test: first-visit flow on desktop and mobile; verify skip and finish paths.
- [ ] Task: Manual test: reopen onboarding from header; verify teacher info pre-fills the report.
- [ ] Task: Update relevant project memory files if new patterns or debt are discovered.
- [ ] Task: Commit and push.
