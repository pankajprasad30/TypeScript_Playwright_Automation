import { randomUUID } from 'node:crypto';
import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { expectClientError } from './helpers';

test.describe('Delete Objects with DELETE', () => {
  test('Delete an unknown object ID', async ({ APIManager }) => {
    // DELETE an ID that is unique to this test and was never created.
    const response = await APIManager.restfulApi.deleteObject(`missing-${randomUUID()}`);
    expect(response.status()).toBeLessThan(500);
    if (!response.ok()) {
      await expectClientError(response);
    }
  });
});
