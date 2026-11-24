import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { expectJsonContentType, parseAPIObjectList } from './helpers';

test.describe('Public Object Listing and Retrieval', () => {
  test('List public sample objects', async ({ APIManager }) => {
    // Send GET /objects without Authorization.
    const response = await APIManager.restfulApi.listObjects();

    expect(response.ok()).toBeTruthy();
    expectJsonContentType(response.headers()['content-type']);

    const body: unknown = await response.json();
    const objects = parseAPIObjectList(body);
    expect(objects.length).toBeGreaterThan(0);
    for (const object of objects) {
      expect(object.id).toEqual(expect.any(String));
      expect(object.name).toEqual(expect.any(String));
    }
  });
});
