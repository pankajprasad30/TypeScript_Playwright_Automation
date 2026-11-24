// spec: spec/cart-and-checkout.plan.md
// seed: tests/seed.spec.ts
import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseFixture';

test.describe('Cart and inventory controls', () => {
  test('Add a single item and update the cart badge', async ({ PManager }) => {
    // 1. Start from the Products page with an empty cart.
    await expect(PManager.inventoryPage.cartBadge).toHaveCount(0);

    // 2. Select Add to cart for Sauce Labs Backpack.
    await PManager.inventoryPage.addToCart('Sauce Labs Backpack');
    await expect(PManager.inventoryPage.removeButton('Sauce Labs Backpack')).toBeVisible();
    await expect(PManager.inventoryPage.cartBadge).toHaveText('1');

    // 3. Open the cart.
    await PManager.inventoryPage.openCart();
    await expect(PManager.cartPage.heading).toHaveText('Your Cart');
    await expect(PManager.cartPage.itemRow('Sauce Labs Backpack')).toBeVisible();
    await expect(PManager.cartPage.itemQuantity('Sauce Labs Backpack')).toHaveText('1');
    await expect(PManager.cartPage.itemPrice('Sauce Labs Backpack')).toHaveText('$29.99');
  });
});
