// spec: spec/cart-and-checkout.plan.md
// seed: tests/seed.spec.ts
import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseFixture';
import { CheckoutData } from '../../testdata/checkoutData';

test.describe('Checkout overview and completion', () => {
  test('Cancel from checkout overview', async ({ PManager }) => {
    // 1. Complete checkout information for a cart containing one or more products.
    await PManager.inventoryPage.addToCart('Sauce Labs Backpack');
    await PManager.inventoryPage.openCart();
    await PManager.cartPage.checkout();
    await PManager.checkoutPage.fillInformation(CheckoutData.firstName, CheckoutData.lastName, CheckoutData.postalCode);
    await PManager.checkoutPage.continue();
    await expect(PManager.checkoutOverviewPage.heading).toHaveText('Checkout: Overview');
    await expect(PManager.checkoutOverviewPage.itemRows).toHaveCount(1);
    await expect(PManager.checkoutOverviewPage.subtotal).toHaveText('Item total: $29.99');

    // 2. Click Cancel.
    await PManager.checkoutOverviewPage.cancel();
    await expect(PManager.inventoryPage.heading).toHaveText('Products');
    await expect(PManager.inventoryPage.removeButton('Sauce Labs Backpack')).toBeVisible();
    await expect(PManager.inventoryPage.cartBadge).toHaveText('1');
    await PManager.inventoryPage.openCart();
    await expect(PManager.cartPage.itemRow('Sauce Labs Backpack')).toBeVisible();
    await expect(PManager.inventoryPage.cartBadge).toHaveText('1');
  });
});
