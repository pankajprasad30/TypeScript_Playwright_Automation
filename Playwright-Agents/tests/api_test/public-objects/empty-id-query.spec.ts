import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { expectNotRateLimited, parseAPIObjectList } from './helpers';

test.describe('Public Object Listing and Retrieval', () => {
  test('Handle empty and duplicate ID query values', async ({ APIManager }) => {
    // Empty and whitespace IDs should match no public sample objects.
    for (const id of ['', ' ']) {
      const response = await APIManager.restfulApi.listObjects([id]);
      if (response.status() === 405) {
        await expectNotRateLimited(response);
      }
      expect(response.status()).toBeLessThan(500);
      if (response.ok()) {
        const body: unknown = await response.json();
        expect(parseAPIObjectList(body)).toEqual([]);
      }
    }

    // The current service preserves duplicate query values in the response.
    const duplicateResponse = await APIManager.restfulApi.listObjects(['7', '7']);
    expect(duplicateResponse.ok()).toBeTruthy();
    const duplicateBody: unknown = await duplicateResponse.json();
    expect(parseAPIObjectList(duplicateBody).map(({ id }) => id)).toEqual(['7', '7']);
  });
});
