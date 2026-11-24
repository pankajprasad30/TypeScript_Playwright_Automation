import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { expectClientError } from './helpers';

test.describe('Create Objects with POST', () => {
  test('Reject a missing name or data field', async ({ APIManager }) => {
    // The documented body requires both name and data.
    const responses = [
      await APIManager.restfulApi.createObject({ data: { value: 1 } }),
      await APIManager.restfulApi.createObject({ name: 'missing-data' }),
    ];

    for (const response of responses) {
      await expectClientError(response);
    }
  });
});
