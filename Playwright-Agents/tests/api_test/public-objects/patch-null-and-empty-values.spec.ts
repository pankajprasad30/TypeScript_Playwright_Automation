import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { JsonValue } from '../../../api/common/APIBase';
import { expectClientError, parseAPIObject, withTestObject } from './helpers';

test.describe('Partially Update Objects with PATCH', () => {
  test('Patch explicit null, empty string, and empty collection values', async ({ APIManager }) => {
    // Each explicit JSON value is distinct from an omitted PATCH field.
    await withTestObject(APIManager.restfulApi, async (created) => {
      const cases: Array<{ field: string; value: JsonValue }> = [
        { field: 'name', value: '' },
        { field: 'data', value: null },
        { field: 'data', value: {} },
        { field: 'data', value: [] },
      ];

      for (const { field, value } of cases) {
        const beforeResponse = await APIManager.restfulApi.getObject(created.id);
        const beforeBody: unknown = await beforeResponse.json();
        const before = parseAPIObject(beforeBody);

        const response = await APIManager.restfulApi.patchObject(created.id, { [field]: value });
        expect(response.status()).toBeLessThan(500);
        if (response.ok()) {
          const responseBody: unknown = await response.json();
          const updated = parseAPIObject(responseBody);
          expect(updated.id).toBe(created.id);
          if (field === 'name') {
            expect(updated.name).toEqual(value);
            expect(updated.data).toEqual(before.data);
          } else {
            expect(updated.data).toEqual(value);
            expect(updated.name).toBe(before.name);
          }
        } else {
          await expectClientError(response);
        }

        const afterResponse = await APIManager.restfulApi.getObject(created.id);
        const afterBody: unknown = await afterResponse.json();
        const after = parseAPIObject(afterBody);
        expect(after.id).toBe(before.id);
        if (response.ok()) {
          expect(after.name).toBe(field === 'name' ? value : before.name);
          expect(after.data).toEqual(field === 'data' ? value : before.data);
        } else {
          expect(after).toEqual(before);
        }
      }
    }, {
      name: `patch-values-${Date.now()}`,
      data: { original: true },
    });
  });
});
