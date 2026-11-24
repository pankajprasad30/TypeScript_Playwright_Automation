import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { expectClientError, withTestObject } from './helpers';

test.describe('Partially Update Objects with PATCH', () => {
  test('Reject invalid PATCH bodies without modifying the object', async ({ APIManager }) => {
    await withTestObject(APIManager.restfulApi, async (created) => {
      const invalidRequests: Array<{ body: string; headers: Record<string, string> }> = [
        { body: '{"name":', headers: { 'Content-Type': 'application/json' } },
        { body: '[]', headers: { 'Content-Type': 'application/json' } },
        { body: JSON.stringify({ name: 7 }), headers: { 'Content-Type': 'application/json' } },
        { body: JSON.stringify({ name: 'missing-content-type' }), headers: {} },
        { body: JSON.stringify({ name: 'wrong-content-type' }), headers: { 'Content-Type': 'text/plain' } },
      ];

      // Each rejected partial update must leave the object unchanged.
      for (const invalidRequest of invalidRequests) {
        const response = await APIManager.restfulApi.patchObject(
          created.id,
          invalidRequest.body,
          invalidRequest.headers,
        );
        await expectClientError(response);

        const getResponse = await APIManager.restfulApi.getObject(created.id);
        const body: unknown = await getResponse.json();
        expect(body).toMatchObject(created);
      }
    }, {
      name: `patch-invalid-${Date.now()}`,
      data: { original: true },
    });
  });
});
