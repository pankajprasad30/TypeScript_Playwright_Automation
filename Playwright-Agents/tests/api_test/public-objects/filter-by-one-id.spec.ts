import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { parseAPIObjectList } from './helpers';

test.describe('Public Object Listing and Retrieval', () => {
  test('Filter the public list by one ID', async ({ APIManager }) => {
    // Request only object 7 through the repeated id query parameter.
    const response = await APIManager.restfulApi.listObjects(['7']);
    expect(response.ok()).toBeTruthy();

    const body: unknown = await response.json();
    const objects = parseAPIObjectList(body);
    expect(objects.map(({ id }) => id)).toEqual(['7']);
  });
});
