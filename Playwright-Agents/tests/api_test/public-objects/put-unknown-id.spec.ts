import { randomUUID } from 'node:crypto';
import { test } from '../../../fixtures/apiFixture';
import { expectClientError } from './helpers';

test.describe('Replace Objects with PUT', () => {
  test('Reject PUT for an unknown object ID', async ({ APIManager }) => {
    // PUT to a unique ID that has never been created.
    const response = await APIManager.restfulApi.replaceObject(
      `missing-${randomUUID()}`,
      { name: 'must-not-upsert', data: {} },
    );
    await expectClientError(response);
  });
});
