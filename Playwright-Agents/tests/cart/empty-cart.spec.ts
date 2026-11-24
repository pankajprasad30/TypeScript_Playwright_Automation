// spec: spec/cart-and-checkout.plan.md
// seed: tests/seed.spec.ts
import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseFixture';

test.describe('Cart and inventory controls', () => {
  test('Verify empty cart behavior', async ({ PManager }) => {
    // 1. Open the cart without adding any items.
    await PManager.inventoryPage.openCart();
    await expect(PManager.cartPage.heading).toHaveText('Your Cart');
    await expect(PManager.cartPage.itemRows).toHaveCount(0);
    await expect(PManager.inventoryPage.cartBadge).toHaveCount(0);
    await expect(PManager.cartPage.continueShoppingButton).toBeVisible();
    await expect(PManager.cartPage.checkoutButton).toBeVisible();

    // 2. Click Checkout on the empty cart.
    await PManager.cartPage.checkout();
    await expect(PManager.checkoutPage.heading).toHaveText('Checkout: Your Information');
    await expect(PManager.checkoutPage.itemRows).toHaveCount(0);
    await expect(PManager.checkoutCompletePage.thankYouHeading).toHaveCount(0);

    // 3. Click Continue Shopping.
    await PManager.checkoutPage.cancel();
    await PManager.cartPage.continueShopping();
    await expect(PManager.inventoryPage.heading).toHaveText('Products');
  });
});
