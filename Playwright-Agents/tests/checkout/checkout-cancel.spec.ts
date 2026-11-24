// spec: spec/cart-and-checkout.plan.md
// seed: tests/seed.spec.ts
import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseFixture';
import { CheckoutData } from '../../testdata/checkoutData';

test.describe('Checkout information validation', () => {
  test('Cancel checkout information entry', async ({ PManager }) => {
    // 1. Add a product, open the cart, and continue to checkout information.
    await PManager.inventoryPage.addToCart('Sauce Labs Backpack');
    await PManager.inventoryPage.openCart();
    await PManager.cartPage.checkout();
    await expect(PManager.checkoutPage.heading).toHaveText('Checkout: Your Information');

    // 2. Enter partial information and click Cancel.
    await PManager.checkoutPage.firstNameField.fill(CheckoutData.firstName);
    await expect(PManager.checkoutPage.firstNameField).toHaveValue(CheckoutData.firstName);
    await PManager.checkoutPage.cancel();
    await expect(PManager.cartPage.heading).toHaveText('Your Cart');
    await expect(PManager.cartPage.itemRow('Sauce Labs Backpack')).toBeVisible();
    await expect(PManager.inventoryPage.cartBadge).toHaveText('1');
  });
});
