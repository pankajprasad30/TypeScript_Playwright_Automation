import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { parseAPIObject, withTestObject } from './helpers';

test.describe('Replace Objects with PUT', () => {
  test('Replace object data with null', async ({ APIManager }) => {
    // Replace the data field on a unique test-owned object with JSON null.
    await withTestObject(APIManager.restfulApi, async (created) => {
      const replacement = { name: `${created.name}-null-data`, data: null };
      const response = await APIManager.restfulApi.replaceObject(created.id, replacement);
      expect(response.ok()).toBeTruthy();

      const body: unknown = await response.json();
      expect(parseAPIObject(body)).toMatchObject({
        id: created.id,
        ...replacement,
      });

      const getResponse = await APIManager.restfulApi.getObject(created.id);
      const persistedBody: unknown = await getResponse.json();
      expect(parseAPIObject(persistedBody).data).toBeNull();
    });
  });
});
