import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { createTestObject, deleteTestObject, expectClientError, parseAPIObject } from './helpers';

test.describe('Public API Transport and Contract', () => {
  test('Exercise public CRUD without authorization credentials', async ({ APIManager }) => {
    // Run each public operation without an Authorization header.
    const listResponse = await APIManager.restfulApi.listObjects();
    expect(listResponse.ok()).toBeTruthy();

    const created = await createTestObject(APIManager.restfulApi);
    let deleted = false;
    try {
      const getResponse = await APIManager.restfulApi.getObject(created.id);
      expect(getResponse.ok()).toBeTruthy();

      const replaceResponse = await APIManager.restfulApi.replaceObject(created.id, {
        name: `${created.name}-updated`,
        data: { updated: true },
      });
      expect(replaceResponse.ok()).toBeTruthy();

      const patchResponse = await APIManager.restfulApi.patchObject(created.id, {
        name: `${created.name}-patched`,
      });
      expect(patchResponse.ok()).toBeTruthy();
      const patchBody: unknown = await patchResponse.json();
      expect(parseAPIObject(patchBody).name).toBe(`${created.name}-patched`);

      const deleteResponse = await APIManager.restfulApi.deleteObject(created.id);
      expect(deleteResponse.ok()).toBeTruthy();
      deleted = true;

      const finalGet = await APIManager.restfulApi.getObject(created.id);
      await expectClientError(finalGet);
    } finally {
      if (!deleted) {
        await deleteTestObject(APIManager.restfulApi, created.id);
      }
    }
  });
});
