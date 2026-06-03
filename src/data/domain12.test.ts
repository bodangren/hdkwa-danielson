import { describe, it, expect } from 'vitest';
import { techniques } from './techniques';
import { DANIELSON_FRAMEWORK } from './danielson';

const D1_SUBDOMAINS = DANIELSON_FRAMEWORK
  .find((d) => d.id === 1)!
  .components.map((c) => c.id);

const D2_SUBDOMAINS = DANIELSON_FRAMEWORK
  .find((d) => d.id === 2)!
  .components.map((c) => c.id);

const d1Techniques = techniques.filter((t) => t.domain === 1);
const d2Techniques = techniques.filter((t) => t.domain === 2);

const YOUTUBE_ID_PATTERN = /^[A-Za-z0-9_-]{6,15}$/;

function getTechniquesForSubdomain(domain: number, subdomain: string) {
  return techniques.filter((t) => t.domain === domain && t.subdomain === subdomain);
}

describe('Domain 1 & 2 Content Hubs — schema & coverage', () => {
  describe('data presence', () => {
    it('registers at least 3 techniques per Domain 1 subdomain', () => {
      for (const sub of D1_SUBDOMAINS) {
        const techs = getTechniquesForSubdomain(1, sub);
        expect(techs.length, `Domain 1 ${sub} should have ≥3 techniques, has ${techs.length}`).toBeGreaterThanOrEqual(3);
      }
    });

    it('registers at least 3 techniques per Domain 2 subdomain', () => {
      for (const sub of D2_SUBDOMAINS) {
        const techs = getTechniquesForSubdomain(2, sub);
        expect(techs.length, `Domain 2 ${sub} should have ≥3 techniques, has ${techs.length}`).toBeGreaterThanOrEqual(3);
      }
    });

    it('has at least one technique per Domain 1 component declared in the framework', () => {
      for (const sub of D1_SUBDOMAINS) {
        expect(
          getTechniquesForSubdomain(1, sub).length,
          `Framework component ${sub} must have at least one Domain 1 technique`
        ).toBeGreaterThan(0);
      }
    });

    it('has at least one technique per Domain 2 component declared in the framework', () => {
      for (const sub of D2_SUBDOMAINS) {
        expect(
          getTechniquesForSubdomain(2, sub).length,
          `Framework component ${sub} must have at least one Domain 2 technique`
        ).toBeGreaterThan(0);
      }
    });
  });

  describe('required fields (acceptance: title, description, video embed, step-by-step guide)', () => {
    const requiredFieldSuites = [
      { name: 'Domain 1', list: d1Techniques, subdomains: D1_SUBDOMAINS },
      { name: 'Domain 2', list: d2Techniques, subdomains: D2_SUBDOMAINS },
    ];

    for (const suite of requiredFieldSuites) {
      describe(suite.name, () => {
        it.each(suite.list)('$title has a non-empty title, description, and alignment', (t) => {
          expect(t.title.trim().length, `${t.id} title`).toBeGreaterThan(0);
          expect(t.description.trim().length, `${t.id} description`).toBeGreaterThan(0);
          expect(t.alignment.trim().length, `${t.id} alignment`).toBeGreaterThan(0);
        });

        it.each(suite.list)('$title has a YouTube-shaped video.demo id', (t) => {
          expect(t.videos?.demo, `${t.id} missing videos.demo`).toBeTruthy();
          expect(
            YOUTUBE_ID_PATTERN.test(t.videos.demo),
            `${t.id} videos.demo "${t.videos.demo}" should be a YouTube ID, not a URL`
          ).toBe(true);
        });

        it.each(suite.list)('$title has a step-by-step guide of at least 3 action steps', (t) => {
          expect(Array.isArray(t.actionSteps), `${t.id} actionSteps must be an array`).toBe(true);
          expect(t.actionSteps.length, `${t.id} should have ≥3 action steps`).toBeGreaterThanOrEqual(3);
          for (const step of t.actionSteps) {
            expect(step.trim().length, `${t.id} has an empty action step`).toBeGreaterThan(0);
          }
        });

        it.each(suite.list)('$title subdomain field matches its alignment prefix', (t) => {
          const expectedPrefix = `${t.domain}${t.subdomain.replace(/^\d/, '')}`; // e.g. domain=1, subdomain=1a -> "1a"
          expect(
            t.alignment.startsWith(expectedPrefix),
            `${t.id} alignment "${t.alignment}" must start with "${expectedPrefix}"`
          ).toBe(true);
        });

        it.each(suite.list)('$title belongs to a declared framework component', (t) => {
          expect(suite.subdomains, `${t.id} subdomain "${t.subdomain}" is not declared in the framework`).toContain(t.subdomain);
        });

        it.each(suite.list)('$title has a non-empty source citation', (t) => {
          expect(t.source.trim().length, `${t.id} source`).toBeGreaterThan(0);
        });
      });
    }
  });

  describe('uniqueness (acceptance: technique ids must be stable across pages)', () => {
    it('every Domain 1 technique id is unique within Domain 1', () => {
      const ids = d1Techniques.map((t) => t.id);
      expect(new Set(ids).size, 'Duplicate Domain 1 technique ids').toBe(ids.length);
    });

    it('every Domain 2 technique id is unique within Domain 2', () => {
      const ids = d2Techniques.map((t) => t.id);
      expect(new Set(ids).size, 'Duplicate Domain 2 technique ids').toBe(ids.length);
    });

    it('Domain 1 and Domain 2 ids do not collide', () => {
      const d1Ids = new Set(d1Techniques.map((t) => t.id));
      const d2Ids = d2Techniques.map((t) => t.id);
      for (const id of d2Ids) {
        expect(d1Ids.has(id), `Domain 2 id "${id}" collides with a Domain 1 id`).toBe(false);
      }
    });
  });
});
