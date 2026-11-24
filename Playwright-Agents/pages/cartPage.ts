import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';
import { productRow } from '../utils/productRow';

export class CartPage extends BasePage {
  readonly itemRows: Locator;
  readonly continueShoppingButton: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.itemRows = this.page.locator('.cart_item');
    this.continueShoppingButton = this.page.locator('[data-test="continue-shopping"]');
    this.checkoutButton = this.page.locator('[data-test="checkout"]');
  }

  itemRow(productName: string): Locator {
    return productRow(this.page, '.cart_item', productName);
  }

  itemQuantity(productName: string): Locator {
    return this.itemRow(productName).locator('.cart_quantity');
  }

  itemPrice(productName: string): Locator {
    return this.itemRow(productName).locator('.inventory_item_price');
  }

  removeButton(productName: string): Locator {
    return this.itemRow(productName).getByRole('button', { name: 'Remove', exact: true });
  }

  async removeItem(productName: string): Promise<void> {
    await this.removeButton(productName).click();
  }

  async continueShopping(): Promise<void> {
    await this.continueShoppingButton.click();
  }

  async checkout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
