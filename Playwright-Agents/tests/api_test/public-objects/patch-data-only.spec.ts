import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { parseAPIObject, withTestObject } from './helpers';

test.describe('Partially Update Objects with PATCH', () => {
  test('Patch only the data field', async ({ APIManager }) => {
    // Change only data and verify the omitted name and ID remain unchanged.
    await withTestObject(APIManager.restfulApi, async (created) => {
      const replacementData = { generation: 4, price: 99.5 };
      const response = await APIManager.restfulApi.patchObject(created.id, {
        data: replacementData,
      });
      expect(response.ok()).toBeTruthy();

      const responseBody: unknown = await response.json();
      const updated = parseAPIObject(responseBody);
      expect(updated.id).toBe(created.id);
      expect(updated.name).toBe(created.name);
      expect(updated.data).toMatchObject(replacementData);

      const getResponse = await APIManager.restfulApi.getObject(created.id);
      const persistedBody: unknown = await getResponse.json();
      expect(parseAPIObject(persistedBody)).toEqual(updated);
    }, {
      name: `patch-data-${Date.now()}`,
      data: { original: true },
    });
  });
});
