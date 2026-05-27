# Specification: Domain 3 Hub & Interactive Features

## Goal
Implement the core content hub for Danielson Domain 3 (Instruction), including a centralized data store for techniques and the interactive Before/After reflection system.

## Functional Requirements
- **Data Structure:** Create a `src/data/techniques.ts` file to store metadata for instructional techniques (Alignment, Videos, Steps, Sources).
- **Domain Hub Page:** Transform `/domains/3` into an interactive grid of technique cards.
- **High-Reward Tagging:** Visually prioritize Domain 3 as a "High Reward" area.
- **Reflection Hooks:** Create a custom hook `useReflection` to persist Before/After ratings and notes to `localStorage`.
- **Technique Routing:** Implement dynamic routing for technique modules (e.g., `/strategy/cold-call`).

## Acceptance Criteria
- [ ] Domain 3 page displays a list of techniques (Cold Call, etc.) correctly mapped from the data file.
- [ ] Clicking a technique card navigates to its specific module.
- [ ] Users can toggle "Before" and "After" ratings on a technique page and have them persist across refreshes.
- [ ] Data is correctly tagged with book sources (TLAC, Visible Learning, etc.).
