import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { expectClientError, parseAPIObject, withTestObject } from './helpers';

test.describe('Partially Update Objects with PATCH', () => {
  test('Handle an empty PATCH body', async ({ APIManager }) => {
    // An empty patch must either be a no-op or a controlled client error.
    await withTestObject(APIManager.restfulApi, async (created) => {
      const response = await APIManager.restfulApi.patchObject(created.id, {});
      expect(response.status()).toBeLessThan(500);

      if (response.ok()) {
        const body: unknown = await response.json();
        expect(parseAPIObject(body)).toEqual(created);
      } else {
        await expectClientError(response);
      }

      const getResponse = await APIManager.restfulApi.getObject(created.id);
      const persistedBody: unknown = await getResponse.json();
      expect(parseAPIObject(persistedBody)).toEqual(created);
    });
  });
});
