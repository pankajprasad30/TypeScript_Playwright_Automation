import { test } from '../../../fixtures/apiFixture';
import { expectClientError } from './helpers';

test.describe('Create Objects with POST', () => {
  test('Validate POST content type and JSON syntax', async ({ APIManager }) => {
    const validBody = JSON.stringify({ name: 'content-type-check', data: {} });

    // A raw string avoids Playwright automatically assigning application/json.
    const missingContentType = await APIManager.restfulApi.createObject(validBody, {});
    await expectClientError(missingContentType);

    const unsupportedContentType = await APIManager.restfulApi.createObject(validBody, {
      'Content-Type': 'text/plain',
    });
    await expectClientError(unsupportedContentType);

    const malformedJson = await APIManager.restfulApi.createObject('{"name":', {
      'Content-Type': 'application/json',
    });
    await expectClientError(malformedJson);

    const emptyBody = await APIManager.restfulApi.createObject('', {
      'Content-Type': 'application/json',
    });
    await expectClientError(emptyBody);
  });
});
