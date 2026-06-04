# Plan: Search & Discovery Engine

## Phase 1: Search Index & Utilities
- [ ] Task: Evaluate and select a client-side search library compatible with static export (e.g., `fuse.js`, `minisearch`, or a simple custom tokenizer)
- [ ] Task: Create `lib/search.ts` with `buildSearchIndex(techniques)` and `search(query, filters)` functions
- [ ] Task: Write unit tests for search ranking and filter logic
- [ ] Task: Ensure the index tree-shakes correctly so only the `/search` page bundle includes it

## Phase 2: Search Page UI
- [ ] Task: Build `app/search/page.tsx` with search input, filter chips, and results grid
- [ ] Task: Create `components/SearchResultCard.tsx` with title, subdomain badge, description preview, and high-reward indicator
- [ ] Task: Implement empty state with helpful prompts (e.g., "Try searching for 'engagement', 'cold call', or 'behavior'")
- [ ] Task: Sync search term and active filters to URL query params for shareability
- [ ] Task: Add loading skeleton and smooth enter/exit animations for results

## Phase 3: Global Search Trigger
- [ ] Task: Add search icon button to site header linking to `/search?q=...`
- [ ] Task: Implement `Cmd/Ctrl + K` keyboard shortcut to navigate to `/search` and focus input
- [ ] Task: Mobile-responsive search trigger (icon in mobile nav)

## Phase 4: Verification
- [ ] Task: Manual test: search for "cold call", "behavior", "3b", "TLAC" — verify relevant results rank first
- [ ] Task: Manual test: apply domain filter, verify result set narrows correctly
- [ ] Task: Run build and verify bundle size impact is acceptable (< 50 kB added to search page)
- [ ] Task: Run test suite
- [ ] Task: Commit and push
