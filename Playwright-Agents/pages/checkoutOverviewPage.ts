import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class CheckoutOverviewPage extends BasePage {
  readonly itemRows: Locator;
  readonly paymentInformation: Locator;
  readonly shippingInformation: Locator;
  readonly subtotal: Locator;
  readonly tax: Locator;
  readonly total: Locator;
  readonly finishButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    super(page);
    this.itemRows = this.page.locator('.cart_item');
    this.paymentInformation = this.page.locator('[data-test="payment-info-value"]');
    this.shippingInformation = this.page.locator('[data-test="shipping-info-value"]');
    this.subtotal = this.page.locator('[data-test="subtotal-label"]');
    this.tax = this.page.locator('[data-test="tax-label"]');
    this.total = this.page.locator('[data-test="total-label"]');
    this.finishButton = this.page.locator('[data-test="finish"]');
    this.cancelButton = this.page.locator('[data-test="cancel"]');
  }

  async finish(): Promise<void> {
    await this.finishButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }
}
