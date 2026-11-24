import { expect } from '@playwright/test';
import { test } from '../../../fixtures/apiFixture';
import { uniqueObjectPayload, withTestObject, parseAPIObject } from './helpers';

test.describe('Replace Objects with PUT', () => {
  test('Replace all fields of an existing object', async ({ APIManager }) => {
    // Create a unique object, then replace it with a complete representation.
    const original = uniqueObjectPayload('put-original', { keep: 'kept', remove: 'removed' });
    await withTestObject(APIManager.restfulApi, async (created) => {
      const replacement = {
        name: `${created.name}-replaced`,
        data: { keep: 'kept', added: 'new' },
      };
      const updateResponse = await APIManager.restfulApi.replaceObject(created.id, replacement);
      expect(updateResponse.ok()).toBeTruthy();

      const updatedBody: unknown = await updateResponse.json();
      const updated = parseAPIObject(updatedBody);
      expect(updated.id).toBe(created.id);
      expect(updated.name).toBe(replacement.name);
      expect(updated.data).toEqual(replacement.data);

      const getResponse = await APIManager.restfulApi.getObject(created.id);
      expect(getResponse.ok()).toBeTruthy();
      const persistedBody: unknown = await getResponse.json();
      const persisted = parseAPIObject(persistedBody);
      expect(persisted).toMatchObject(replacement);
      expect(persisted.data).not.toHaveProperty('remove');
    }, original);
  });
});
