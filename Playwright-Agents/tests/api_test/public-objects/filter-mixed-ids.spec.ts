import { expect } from '@playwright/test';
import { randomUUID } from 'node:crypto';
import { test } from '../../../fixtures/apiFixture';
import { parseAPIObjectList } from './helpers';

test.describe('Public Object Listing and Retrieval', () => {
  test('Filter with a mix of existing and unknown IDs', async ({ APIManager }) => {
    // Request one sample ID and one unique ID that cannot exist.
    const unknownId = `missing-${randomUUID()}`;
    const response = await APIManager.restfulApi.listObjects(['7', unknownId]);
    expect(response.ok()).toBeTruthy();

    const body: unknown = await response.json();
    const objects = parseAPIObjectList(body);
    expect(objects.map(({ id }) => id)).toEqual(['7']);
  });
});
