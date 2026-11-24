import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';
import { productRow } from '../utils/productRow';

export class InventoryPage extends BasePage {
  readonly cartBadge: Locator;
  readonly addToCartButtons: Locator;

  constructor(page: Page) {
    super(page);
    this.cartBadge = this.page.locator('[data-test="shopping-cart-badge"]');
    this.addToCartButtons = this.page.locator('[data-test^="add-to-cart-"]');
  }

  addButton(productName: string): Locator {
    return productRow(this.page, '.inventory_item', productName).getByRole('button', {
      name: 'Add to cart',
      exact: true,
    });
  }

  removeButton(productName: string): Locator {
    return productRow(this.page, '.inventory_item', productName).getByRole('button', {
      name: 'Remove',
      exact: true,
    });
  }

  async addToCart(productName: string): Promise<void> {
    await this.addButton(productName).click();
  }

  async removeFromCart(productName: string): Promise<void> {
    await this.removeButton(productName).click();
  }

  async openCart(): Promise<void> {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }
}
