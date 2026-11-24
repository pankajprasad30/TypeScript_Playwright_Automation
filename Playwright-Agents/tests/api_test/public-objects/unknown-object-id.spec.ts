import { randomUUID } from 'node:crypto';
import { test } from '../../../fixtures/apiFixture';
import { expectClientError } from './helpers';

test.describe('Public Object Listing and Retrieval', () => {
  test('Handle unknown and malformed object IDs', async ({ APIManager }) => {
    // Try unique, whitespace-encoded, and excessively long IDs.
    const ids = [`missing-${randomUUID()}`, 'not%20an%20id', 'x'.repeat(512)];
    for (const id of ids) {
      const response = await APIManager.restfulApi.getObject(id);
      await expectClientError(response);
    }
  });
});
