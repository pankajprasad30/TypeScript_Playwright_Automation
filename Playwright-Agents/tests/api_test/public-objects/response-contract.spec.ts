import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { deleteTestObject, expectJsonContentType, expectNotRateLimited, parseAPIObject, uniqueObjectPayload } from './helpers';

test.describe('Public API Transport and Contract', () => {
  test('Validate response content types and unsupported methods', async ({ APIManager }) => {
    // Confirm JSON responses, then verify an unsupported method cannot mutate data.
    const payload = uniqueObjectPayload('response-contract');
    const createResponse = await APIManager.restfulApi.createObject(payload);
    expect(createResponse.ok()).toBeTruthy();
    expectJsonContentType(createResponse.headers()['content-type']);

    const createBody: unknown = await createResponse.json();
    const created = parseAPIObject(createBody);
    try {
      const getResponse = await APIManager.restfulApi.getObject(created.id);
      expect(getResponse.ok()).toBeTruthy();
      expectJsonContentType(getResponse.headers()['content-type']);

      const unsupportedResponse = await APIManager.restfulApi.rawRequest(
        `https://api.restful-api.dev/objects/${encodeURIComponent(created.id)}`,
        'TRACE',
      );
      await expectNotRateLimited(unsupportedResponse);
      expect(unsupportedResponse.ok()).toBeFalsy();

      const persistedResponse = await APIManager.restfulApi.getObject(created.id);
      const persistedBody: unknown = await persistedResponse.json();
      expect(parseAPIObject(persistedBody)).toEqual(created);
    } finally {
      await deleteTestObject(APIManager.restfulApi, created.id);
    }
  });
});
