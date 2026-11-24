import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { createTestObject, deleteTestObject, expectClientError } from './helpers';

test.describe('Delete Objects with DELETE', () => {
  test('Repeat deletion of a test-owned object', async ({ APIManager }) => {
    // Create and delete a unique fixture, then issue DELETE for its ID again.
    const created = await createTestObject(APIManager.restfulApi);
    let deleted = false;
    try {
      const firstDelete = await APIManager.restfulApi.deleteObject(created.id);
      expect(firstDelete.ok()).toBeTruthy();
      deleted = true;

      const secondDelete = await APIManager.restfulApi.deleteObject(created.id);
      expect(secondDelete.status()).toBeLessThan(500);
      if (!secondDelete.ok()) {
        await expectClientError(secondDelete);
      }

      const getResponse = await APIManager.restfulApi.getObject(created.id);
      await expectClientError(getResponse);
    } finally {
      if (!deleted) {
        await deleteTestObject(APIManager.restfulApi, created.id);
      }
    }
  });
});
