// npx playwright codegen https://demowebshop.tricentis.com/
// using this we can record test case and cove the code to re use it


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
  await expect(page.locator('body')).toContainText('Welcome to our store');
});