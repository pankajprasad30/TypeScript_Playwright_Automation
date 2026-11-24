import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { parseAPIObject, uniqueObjectPayload, withTestObject } from './helpers';

test.describe('Create Objects with POST', () => {
  test('Create an object with a Unicode and punctuation name', async ({ APIManager }) => {
    // Create an object with Unicode characters and punctuation in its name.
    const payload = uniqueObjectPayload('unicode');
    payload.name = `Playwright — 東京 & café / ${payload.name}`;

    await withTestObject(APIManager.restfulApi, async (created) => {
      expect(created.name).toBe(payload.name);
      const response = await APIManager.restfulApi.getObject(created.id);
      expect(response.ok()).toBeTruthy();
      const body: unknown = await response.json();
      expect(parseAPIObject(body).name).toBe(payload.name);
    }, payload);
  });
});
