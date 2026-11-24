import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';

const API_BASE_URL = 'https://api.restful-api.dev/objects';
const TEST_ORIGIN = 'https://playwright-test.example';

test.describe('Public API Transport and Contract', () => {
  test('Validate CORS preflight for public CRUD methods', async ({ APIManager }) => {
    // Check cross-origin preflight for all documented public methods.
    for (const method of ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']) {
      const headers: Record<string, string> = {
        Origin: TEST_ORIGIN,
        'Access-Control-Request-Method': method,
      };
      if (method !== 'GET' && method !== 'DELETE') {
        headers['Access-Control-Request-Headers'] = 'content-type';
      }

      const response = await APIManager.restfulApi.rawRequest(API_BASE_URL, 'OPTIONS', headers);
      expect(response.ok()).toBeTruthy();

      const responseHeaders = response.headers();
      const allowedOrigin = responseHeaders['access-control-allow-origin'];
      expect([TEST_ORIGIN, '*']).toContain(allowedOrigin);

      const allowedMethods = responseHeaders['access-control-allow-methods']
        ?.split(',')
        .map((value) => value.trim().toUpperCase());
      expect(allowedMethods).toContain(method);

      if (headers['Access-Control-Request-Headers']) {
        expect(responseHeaders['access-control-allow-headers']).toMatch(/content-type/i);
      }
    }
  });
});
