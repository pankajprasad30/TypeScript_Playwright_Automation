import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { expectClientError, withTestObject } from './helpers';

test.describe('Replace Objects with PUT', () => {
  test('Reject invalid PUT bodies and media types without changing data', async ({ APIManager }) => {
    await withTestObject(APIManager.restfulApi, async (created) => {
      const invalidRequests: Array<{ body: string; headers: Record<string, string> }> = [
        { body: '{"name":', headers: { 'Content-Type': 'application/json' } },
        { body: '[]', headers: { 'Content-Type': 'application/json' } },
        { body: JSON.stringify({ data: {} }), headers: { 'Content-Type': 'application/json' } },
        { body: JSON.stringify({ name: 7, data: {} }), headers: { 'Content-Type': 'application/json' } },
        { body: JSON.stringify({ name: 'missing-content-type', data: {} }), headers: {} },
        { body: JSON.stringify({ name: 'wrong-content-type', data: {} }), headers: { 'Content-Type': 'text/plain' } },
      ];

      // Rejected replacements must leave the fixture unchanged.
      for (const invalidRequest of invalidRequests) {
        const response = await APIManager.restfulApi.replaceObject(
          created.id,
          invalidRequest.body,
          invalidRequest.headers,
        );
        await expectClientError(response);

        const getResponse = await APIManager.restfulApi.getObject(created.id);
        expect(getResponse.ok()).toBeTruthy();
        const currentBody: unknown = await getResponse.json();
        expect(currentBody).toMatchObject(created);
      }
    }, {
      name: `put-invalid-${Date.now()}`,
      data: { original: true },
    });
  });
});
