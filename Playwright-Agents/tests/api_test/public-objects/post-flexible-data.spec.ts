import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { JsonValue } from '../../../api/common/APIBase';
import { uniqueObjectPayload, withTestObject } from './helpers';

test.describe('Create Objects with POST', () => {
  test('Create objects with flexible JSON data values', async ({ APIManager }) => {
    // Verify that each documented JSON value type round-trips without coercion.
    const values: JsonValue[] = [[], null, 'text value', 42, true];
    for (const data of values) {
      const payload = uniqueObjectPayload('json-value', data);
      await withTestObject(APIManager.restfulApi, async (created) => {
        expect(created.data).toEqual(data);
      }, payload);
    }
  });
});
