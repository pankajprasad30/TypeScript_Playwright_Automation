import { test } from '../../../fixtures/apiFixture';
import { JsonValue } from '../../../api/common/APIBase';
import { expectClientError } from './helpers';

test.describe('Create Objects with POST', () => {
  test('Reject invalid object names and top-level JSON bodies', async ({ APIManager }) => {
    // Invalid required-field types and top-level JSON shapes must not create records.
    const invalidBodies: JsonValue[] = [
      { name: '', data: {} },
      { name: '   ', data: {} },
      { name: 42, data: {} },
      [],
      null,
    ];

    for (const body of invalidBodies) {
      const response = await APIManager.restfulApi.createObject(body);
      await expectClientError(response);
    }
  });
});
