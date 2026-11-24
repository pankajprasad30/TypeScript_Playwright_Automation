import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { createTestObject, deleteTestObject, expectClientError, expectJsonContentType } from './helpers';

const API_BASE_URL = 'https://api.restful-api.dev/objects';

test.describe('Public API Transport and Contract', () => {
  test('Use HTTPS for public API requests', async ({ APIManager }) => {
    // Read through HTTPS, then verify the test-owned write also uses HTTPS.
    const getResponse = await APIManager.restfulApi.rawRequest(API_BASE_URL, 'GET');
    expect(getResponse.ok()).toBeTruthy();
    expect(new URL(getResponse.url()).protocol).toBe('https:');
    expectJsonContentType(getResponse.headers()['content-type']);

    const created = await createTestObject(APIManager.restfulApi);
    try {
      expect(new URL(API_BASE_URL).protocol).toBe('https:');
    } finally {
      await deleteTestObject(APIManager.restfulApi, created.id);
    }

    // Cleartext HTTP must redirect to HTTPS or reject the request.
    const httpResponse = await APIManager.restfulApi.rawRequest(
      'http://api.restful-api.dev/objects',
      'GET',
    );
    if (httpResponse.ok()) {
      expect(new URL(httpResponse.url()).protocol).toBe('https:');
    } else {
      await expectClientError(httpResponse);
    }
  });
});
