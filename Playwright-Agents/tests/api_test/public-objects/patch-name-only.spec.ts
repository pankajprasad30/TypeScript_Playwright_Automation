import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { parseAPIObject, withTestObject } from './helpers';

test.describe('Partially Update Objects with PATCH', () => {
  test('Patch only the object name', async ({ APIManager }) => {
    // Change only name on a fixture that has several data fields.
    await withTestObject(APIManager.restfulApi, async (created) => {
      const updatedName = `${created.name}-patched`;
      const response = await APIManager.restfulApi.patchObject(created.id, {
        name: updatedName,
      });
      expect(response.ok()).toBeTruthy();

      const responseBody: unknown = await response.json();
      const updated = parseAPIObject(responseBody);
      expect(updated.id).toBe(created.id);
      expect(updated.name).toBe(updatedName);
      expect(updated.data).toEqual(created.data);

      const getResponse = await APIManager.restfulApi.getObject(created.id);
      const persistedBody: unknown = await getResponse.json();
      expect(parseAPIObject(persistedBody)).toEqual(updated);
    }, {
      name: `patch-name-${Date.now()}`,
      data: { color: 'blue', capacity: 128 },
    });
  });
});
