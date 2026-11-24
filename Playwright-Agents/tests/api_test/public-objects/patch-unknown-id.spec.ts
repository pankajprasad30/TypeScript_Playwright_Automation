import { randomUUID } from 'node:crypto';
import { test } from '../../../fixtures/apiFixture';
import { expectClientError } from './helpers';

test.describe('Partially Update Objects with PATCH', () => {
  test('Reject PATCH for an unknown object ID', async ({ APIManager }) => {
    // PATCH a unique ID that does not exist.
    const response = await APIManager.restfulApi.patchObject(
      `missing-${randomUUID()}`,
      { name: 'must-not-upsert' },
    );
    await expectClientError(response);
  });
});
