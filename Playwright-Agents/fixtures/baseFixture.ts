import { expect, test as base } from '@playwright/test';
import { PageManager } from '../pages/pageManager';
import { AppData } from '../testdata/appData';

type Fixtures = {
  PManager: PageManager;
};

export const test = base.extend<Fixtures>({
  PManager: async ({ page }, use) => {
    const PManager = new PageManager(page);
    await PManager.loginPage.navigate(AppData.url);
    await PManager.loginPage.login(AppData.username, AppData.password);
    await expect(PManager.inventoryPage.heading).toHaveText('Products');
    await use(PManager);
  },
});
