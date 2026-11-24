// spec: spec/cart-and-checkout.plan.md
// seed: tests/seed.spec.ts
import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseFixture';
import { CheckoutData } from '../../testdata/checkoutData';

test.describe('Checkout information validation', () => {
  test('Reject missing postal code', async ({ PManager }) => {
    // 1. Open checkout with one product in the cart.
    await PManager.inventoryPage.addToCart('Sauce Labs Backpack');
    await PManager.inventoryPage.openCart();
    await PManager.cartPage.checkout();
    await expect(PManager.checkoutPage.heading).toHaveText('Checkout: Your Information');

    // 2. Enter first name and last name, leave postal code blank, and click Continue.
    await PManager.checkoutPage.firstNameField.fill(CheckoutData.firstName);
    await PManager.checkoutPage.lastNameField.fill(CheckoutData.lastName);
    await expect(PManager.checkoutPage.firstNameField).toHaveValue(CheckoutData.firstName);
    await expect(PManager.checkoutPage.lastNameField).toHaveValue(CheckoutData.lastName);
    await expect(PManager.checkoutPage.postalCodeField).toHaveValue('');
    await PManager.checkoutPage.continue();
    await expect(PManager.checkoutPage.page).toHaveURL(/checkout-step-one\.html$/);
    await expect(PManager.checkoutPage.errorMessage).toHaveText('Error: Postal Code is required');
  });
});
