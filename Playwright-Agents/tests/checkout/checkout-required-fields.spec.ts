// spec: spec/cart-and-checkout.plan.md
// seed: tests/seed.spec.ts
import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseFixture';

test.describe('Checkout information validation', () => {
  test('Reject blank checkout information', async ({ PManager }) => {
    // 1. Add one product, open the cart, and click Checkout.
    await PManager.inventoryPage.addToCart('Sauce Labs Backpack');
    await PManager.inventoryPage.openCart();
    await PManager.cartPage.checkout();
    await expect(PManager.checkoutPage.heading).toHaveText('Checkout: Your Information');
    await expect(PManager.checkoutPage.firstNameField).toBeVisible();
    await expect(PManager.checkoutPage.lastNameField).toBeVisible();
    await expect(PManager.checkoutPage.postalCodeField).toBeVisible();

    // 2. Leave every field blank and click Continue.
    await PManager.checkoutPage.continue();
    await expect(PManager.checkoutPage.page).toHaveURL(/checkout-step-one\.html$/);
    await expect(PManager.checkoutPage.errorMessage).toHaveText('Error: First Name is required');
    await expect(PManager.checkoutOverviewPage.finishButton).toHaveCount(0);
  });
});
