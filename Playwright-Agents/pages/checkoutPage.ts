import { Locator, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class CheckoutPage extends BasePage {
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly postalCodeField: Locator;
  readonly errorMessage: Locator;
  readonly itemRows: Locator;
  readonly continueButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameField = this.page.locator('[data-test="firstName"]');
    this.lastNameField = this.page.locator('[data-test="lastName"]');
    this.postalCodeField = this.page.locator('[data-test="postalCode"]');
    this.errorMessage = this.page.locator('[data-test="error"]');
    this.itemRows = this.page.locator('.cart_item');
    this.continueButton = this.page.locator('[data-test="continue"]');
    this.cancelButton = this.page.locator('[data-test="cancel"]');
  }

  async fillInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.postalCodeField.fill(postalCode);
  }

  async continue(): Promise<void> {
    await this.continueButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }
}
