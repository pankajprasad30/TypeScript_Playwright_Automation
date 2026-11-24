import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class CheckoutCompletePage extends BasePage {
  readonly ponyExpressImage: Locator;
  readonly thankYouHeading: Locator;
  readonly dispatchConfirmation: Locator;
  readonly backHomeButton: Locator;
  readonly generatePdfButton: Locator;

  constructor(page: Page) {
    super(page);
    this.ponyExpressImage = this.page.locator('[data-test="pony-express"]');
    this.thankYouHeading = this.page.locator('[data-test="complete-header"]');
    this.dispatchConfirmation = this.page.locator('[data-test="complete-text"]');
    this.backHomeButton = this.page.locator('[data-test="back-to-products"]');
    this.generatePdfButton = this.page.locator('[data-test="generate-pdf-order"]');
  }

  async backHome(): Promise<void> {
    await this.backHomeButton.click();
  }
}
