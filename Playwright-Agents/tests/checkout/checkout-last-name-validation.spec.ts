// spec: spec/cart-and-checkout.plan.md
// seed: tests/seed.spec.ts
import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseFixture';
import { CheckoutData } from '../../testdata/checkoutData';

test.describe('Checkout information validation', () => {
  test('Reject missing last name', async ({ PManager }) => {
    // 1. Open checkout with one product in the cart.
    await PManager.inventoryPage.addToCart('Sauce Labs Backpack');
    await PManager.inventoryPage.openCart();
    await PManager.cartPage.checkout();
    await expect(PManager.checkoutPage.heading).toHaveText('Checkout: Your Information');

    // 2. Enter a first name and postal code, leave last name blank, and click Continue.
    await PManager.checkoutPage.firstNameField.fill(CheckoutData.firstName);
    await PManager.checkoutPage.postalCodeField.fill(CheckoutData.postalCode);
    await expect(PManager.checkoutPage.firstNameField).toHaveValue(CheckoutData.firstName);
    await expect(PManager.checkoutPage.lastNameField).toHaveValue('');
    await expect(PManager.checkoutPage.postalCodeField).toHaveValue(CheckoutData.postalCode);
    await PManager.checkoutPage.continue();
    await expect(PManager.checkoutPage.page).toHaveURL(/checkout-step-one\.html$/);
    await expect(PManager.checkoutPage.errorMessage).toHaveText('Error: Last Name is required');
  });
});
