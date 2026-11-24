import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { createTestObject, deleteTestObject, expectClientError, parseAPIObjectList } from './helpers';

test.describe('Delete Objects with DELETE', () => {
  test('Delete an object created by the test', async ({ APIManager }) => {
    // Create a unique object and delete only its returned ID.
    const created = await createTestObject(APIManager.restfulApi);
    let deleted = false;
    try {
      const deleteResponse = await APIManager.restfulApi.deleteObject(created.id);
      expect(deleteResponse.ok()).toBeTruthy();
      deleted = true;

      const getResponse = await APIManager.restfulApi.getObject(created.id);
      await expectClientError(getResponse);

      const listResponse = await APIManager.restfulApi.listObjects([created.id]);
      expect(listResponse.ok()).toBeTruthy();
      const listBody: unknown = await listResponse.json();
      expect(parseAPIObjectList(listBody)).toEqual([]);
    } finally {
      if (!deleted) {
        await deleteTestObject(APIManager.restfulApi, created.id);
      }
    }
  });
});
