// spec: spec/cart-and-checkout.plan.md
// seed: tests/seed.spec.ts
import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseFixture';
import { CheckoutData } from '../../testdata/checkoutData';

test.describe('Checkout overview and completion', () => {
  test('Review totals and complete an order', async ({ PManager }) => {
    // 1. Add Sauce Labs Backpack to the cart and open the cart.
    await PManager.inventoryPage.addToCart('Sauce Labs Backpack');
    await PManager.inventoryPage.openCart();
    await expect(PManager.cartPage.itemRow('Sauce Labs Backpack')).toBeVisible();
    await expect(PManager.cartPage.itemQuantity('Sauce Labs Backpack')).toHaveText('1');
    await expect(PManager.inventoryPage.cartBadge).toHaveText('1');

    // 2. Click Checkout and enter Test, User, and 12345.
    await PManager.cartPage.checkout();
    await PManager.checkoutPage.fillInformation(CheckoutData.firstName, CheckoutData.lastName, CheckoutData.postalCode);
    await expect(PManager.checkoutPage.firstNameField).toHaveValue(CheckoutData.firstName);
    await expect(PManager.checkoutPage.lastNameField).toHaveValue(CheckoutData.lastName);
    await expect(PManager.checkoutPage.postalCodeField).toHaveValue(CheckoutData.postalCode);

    // 3. Click Continue.
    await PManager.checkoutPage.continue();
    await expect(PManager.checkoutOverviewPage.heading).toHaveText('Checkout: Overview');
    await expect(PManager.checkoutOverviewPage.paymentInformation).toHaveText('SauceCard #31337');
    await expect(PManager.checkoutOverviewPage.shippingInformation).toHaveText('Free Pony Express Delivery!');
    await expect(PManager.checkoutOverviewPage.subtotal).toHaveText('Item total: $29.99');
    await expect(PManager.checkoutOverviewPage.tax).toHaveText('Tax: $2.40');
    await expect(PManager.checkoutOverviewPage.total).toHaveText('Total: $32.39');

    // 4. Click Finish.
    await PManager.checkoutOverviewPage.finish();
    await expect(PManager.checkoutCompletePage.heading).toHaveText('Checkout: Complete!');
    await expect(PManager.checkoutCompletePage.ponyExpressImage).toBeVisible();
    await expect(PManager.checkoutCompletePage.thankYouHeading).toHaveText('Thank you for your order!');
    await expect(PManager.checkoutCompletePage.dispatchConfirmation).toBeVisible();
    await expect(PManager.inventoryPage.cartBadge).toHaveCount(0);
    await expect(PManager.checkoutCompletePage.backHomeButton).toBeVisible();
    await expect(PManager.checkoutCompletePage.generatePdfButton).toBeVisible();

    // 5. Click Back Home.
    await PManager.checkoutCompletePage.backHome();
    await expect(PManager.inventoryPage.heading).toHaveText('Products');
    await expect(PManager.inventoryPage.cartBadge).toHaveCount(0);
    await expect(PManager.inventoryPage.addToCartButtons).toHaveCount(6);
  });
});
