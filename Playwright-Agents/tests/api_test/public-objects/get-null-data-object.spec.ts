import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { parseAPIObject } from './helpers';

test.describe('Public Object Listing and Retrieval', () => {
  test('Retrieve an object whose data is null', async ({ APIManager }) => {
    // Retrieve the documented sample at /objects/2.
    const response = await APIManager.restfulApi.getObject('2');
    expect(response.ok()).toBeTruthy();

    const body: unknown = await response.json();
    const object = parseAPIObject(body);
    expect(object.id).toBe('2');
    expect(object.data).toBeNull();
  });
});
