// spec: spec/cart-and-checkout.plan.md
// seed: tests/seed.spec.ts
import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseFixture';

test.describe('Cart and inventory controls', () => {
  test('Verify cart removal and continue shopping navigation', async ({ PManager }) => {
    // 1. Add one product, open the cart, and verify the product.
    await PManager.inventoryPage.addToCart('Sauce Labs Backpack');
    await PManager.inventoryPage.openCart();
    await expect(PManager.cartPage.itemRow('Sauce Labs Backpack')).toBeVisible();
    await expect(PManager.cartPage.itemQuantity('Sauce Labs Backpack')).toHaveText('1');
    await expect(PManager.cartPage.removeButton('Sauce Labs Backpack')).toBeVisible();
    await expect(PManager.cartPage.checkoutButton).toBeVisible();

    // 2. Click Continue Shopping.
    await PManager.cartPage.continueShopping();
    await expect(PManager.inventoryPage.heading).toHaveText('Products');
    await expect(PManager.inventoryPage.removeButton('Sauce Labs Backpack')).toBeVisible();
    await expect(PManager.inventoryPage.cartBadge).toHaveText('1');

    // 3. Open the cart again.
    await PManager.inventoryPage.openCart();
    await expect(PManager.cartPage.itemRow('Sauce Labs Backpack')).toBeVisible();
  });
});
