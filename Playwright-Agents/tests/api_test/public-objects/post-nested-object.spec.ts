import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { JsonValue } from '../../../api/common/APIBase';
import { parseAPIObject, uniqueObjectPayload, withTestObject } from './helpers';

test.describe('Create Objects with POST', () => {
  test('Create an object with nested JSON data', async ({ APIManager }) => {
    // Create a unique object containing mixed nested JSON values.
    const data: JsonValue = {
      text: 'sample',
      count: 7,
      enabled: true,
      empty: null,
      tags: ['api', 2, false],
      nested: { color: 'blue' },
    };
    const payload = uniqueObjectPayload('nested', data);

    await withTestObject(APIManager.restfulApi, async (created) => {
      expect(created.name).toBe(payload.name);
      expect(created.data).toEqual(data);
      if (created.createdAt !== undefined) {
        const timestamp = typeof created.createdAt === 'number'
          ? created.createdAt
          : Date.parse(created.createdAt);
        expect(Number.isNaN(new Date(timestamp).getTime())).toBeFalsy();
      }

      const response = await APIManager.restfulApi.getObject(created.id);
      expect(response.ok()).toBeTruthy();
      const body: unknown = await response.json();
      expect(parseAPIObject(body)).toEqual(created);
    }, payload);
  });
});
