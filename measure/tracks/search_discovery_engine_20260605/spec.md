# Spec: Search & Discovery Engine

## Problem
With 62+ techniques spanning four Danielson domains, teachers must navigate a rigid hierarchy (Domain → Subdomain → Technique) to find relevant content. This assumes they already know which Danielson component maps to their classroom need. A teacher struggling with student participation may not know to look under Domain 3 → 3b (Questioning) or 3c (Engagement). There is no way to search by keyword, filter by criteria, or discover techniques serendipitously.

## Solution
Build a client-side search and discovery system that indexes all technique metadata (title, description, action steps, source, alignment) and surfaces results instantly. Add filter chips for domain, high-reward status, and source. Include a dedicated `/search` page and a global search input accessible from the site header.

## Acceptance Criteria
- [ ] Build-time search index generated from `techniques` array (title, description, actionSteps, source, alignment, subdomain)
- [ ] `/search` page with search input, instant results, and empty state
- [ ] Filter chips: Domain (1–4), High Reward only, Source (TLAC 3.0, etc.)
- [ ] Result cards show technique title, subdomain badge, 2-line description preview, and high-reward indicator
- [ ] Global search trigger in site header (input or icon button linking to `/search`)
- [ ] Search works without a backend (client-side fuse/minisearch against pre-built index)
- [ ] Keyboard shortcut (`Cmd/Ctrl + K`) to focus search
- [ ] URL query params reflect active search term and filters (shareable links)

## Out of Scope
- Full-text search inside video transcripts
- Autocomplete/suggestions dropdown on the home page
- Search analytics or backend logging
- Semantic/AI-powered search
