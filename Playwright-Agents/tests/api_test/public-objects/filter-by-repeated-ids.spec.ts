import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { parseAPIObjectList } from './helpers';

test.describe('Public Object Listing and Retrieval', () => {
  test('Filter the public list by repeated ID parameters', async ({ APIManager }) => {
    // Request several sample IDs using repeated id query parameters.
    const response = await APIManager.restfulApi.listObjects(['3', '5', '10']);
    expect(response.ok()).toBeTruthy();

    const body: unknown = await response.json();
    const objects = parseAPIObjectList(body);
    expect(objects.map(({ id }) => id).sort()).toEqual(['10', '3', '5']);
  });
});
