# Spec: Gamification & Badge System

## Problem
Teachers have no visibility into their overall progress. Completing techniques feels unrewarded. There is no incentive to focus on "High Reward" subdomains.

## Solution
Add a badge and points system: earn badges for completing techniques, mastering subdomains, and focusing on high-reward areas. Show progress on a profile/dashboard page.

## Acceptance Criteria
- [ ] Badge definitions JSON: criteria (e.g., "Complete 5 techniques in 3b"), icon name, points
- [ ] Progress tracking in localStorage: badges earned, total points, domain mastery percentages
- [ ] Profile page showing: badges grid, points total, domain progress bars, streak counter
- [ ] Badge unlock toast notification when criteria met
- [ ] High-reward subdomains (3b, 3c, 2c, 2d) award 2× points
- [ ] Export profile data as JSON for backup

## Out of Scope
- Leaderboards or social features
- Backend sync
- Custom badge creation
