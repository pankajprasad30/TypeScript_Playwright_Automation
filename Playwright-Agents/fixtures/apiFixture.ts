import { test as base } from '@playwright/test';
import { APIPageManager } from '../api/common/apiPageManager';

type APIFixtures = {
  APIManager: APIPageManager;
};

export const test = base.extend<APIFixtures>({
  APIManager: async ({ request }, use) => {
    await use(new APIPageManager(request));
  },
});
