import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { parseAPIObject } from './helpers';

test.describe('Public Object Listing and Retrieval', () => {
  test('Retrieve the documented object by ID', async ({ APIManager }) => {
    // Retrieve the documented sample at /objects/7.
    const response = await APIManager.restfulApi.getObject('7');
    expect(response.ok()).toBeTruthy();

    const body: unknown = await response.json();
    const object = parseAPIObject(body);
    expect(object.id).toBe('7');
    expect(object.name).toBe('Apple MacBook Pro 16');
    expect(object.data).toMatchObject({
      year: 2019,
      price: 1849.99,
      'CPU model': 'Intel Core i9',
      'Hard disk size': '1 TB',
    });
  });
});
