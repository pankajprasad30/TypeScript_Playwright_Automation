// spec: spec/cart-and-checkout.plan.md
// seed: tests/seed.spec.ts
import { expect } from '@playwright/test';
import { test } from '../../fixtures/baseFixture';

test.describe('Cart and inventory controls', () => {
  test('Add multiple items and remove items from cart', async ({ PManager }) => {
    // 1. Start from an empty cart and add Sauce Labs Backpack and Sauce Labs Bike Light.
    await expect(PManager.inventoryPage.cartBadge).toHaveCount(0);
    await PManager.inventoryPage.addToCart('Sauce Labs Backpack');
    await expect(PManager.inventoryPage.cartBadge).toHaveText('1');
    await expect(PManager.inventoryPage.removeButton('Sauce Labs Backpack')).toBeVisible();
    await PManager.inventoryPage.addToCart('Sauce Labs Bike Light');
    await expect(PManager.inventoryPage.cartBadge).toHaveText('2');
    await expect(PManager.inventoryPage.removeButton('Sauce Labs Bike Light')).toBeVisible();

    // 2. Open the cart.
    await PManager.inventoryPage.openCart();
    await expect(PManager.cartPage.itemRow('Sauce Labs Backpack')).toBeVisible();
    await expect(PManager.cartPage.itemQuantity('Sauce Labs Backpack')).toHaveText('1');
    await expect(PManager.cartPage.itemPrice('Sauce Labs Backpack')).toHaveText('$29.99');
    await expect(PManager.cartPage.itemRow('Sauce Labs Bike Light')).toBeVisible();
    await expect(PManager.cartPage.itemQuantity('Sauce Labs Bike Light')).toHaveText('1');
    await expect(PManager.cartPage.itemPrice('Sauce Labs Bike Light')).toHaveText('$9.99');

    // 3. Remove Sauce Labs Bike Light from the cart.
    await PManager.cartPage.removeItem('Sauce Labs Bike Light');
    await expect(PManager.cartPage.itemRow('Sauce Labs Bike Light')).toHaveCount(0);
    await expect(PManager.inventoryPage.cartBadge).toHaveText('1');
    await expect(PManager.cartPage.itemRow('Sauce Labs Backpack')).toBeVisible();

    // 4. Return to Products and remove the backpack using its Remove button.
    await PManager.cartPage.continueShopping();
    await PManager.inventoryPage.removeFromCart('Sauce Labs Backpack');
    await expect(PManager.inventoryPage.cartBadge).toHaveCount(0);
    await PManager.inventoryPage.openCart();
    await expect(PManager.cartPage.itemRow('Sauce Labs Backpack')).toHaveCount(0);
  });
});
